import React from 'react';
import { Redirect } from '@reach/router';
import { useDispatch } from 'react-redux';
import jwtDecode from 'jwt-decode';

import auth from '../../utils/auth';
import logout from '../../store/actions/logout';

const ProtectRoutes = ({ Component }) => {
  const dispatch = useDispatch();

  const { getUserToken, removeToken } = auth;
  const token = getUserToken('authToken');

  if (!token) {
    dispatch(logout());
    return <Redirect noThrow to='/' />;
  }

  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    dispatch(logout());
    removeToken('authToken');
    return <Redirect noThrow to='/' />;
  }

  return <Component />;
};

export default ProtectRoutes;
