import { useState, useEffect } from "react";

import axios from "../../utils/axios";

const GetGoal = ({ itemId, url, children }) => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  useEffect(() => {
    // let result;
    if (itemId && url.length) {
      async function getGoal() {
        setErr(null);
        try {
          setLoading(true);
          const {
            data: { payload },
          } = await axios.get(`${url}${itemId}`);
          setItem(payload);
          setLoading(false);
        } catch (error) {
          setErr(error.message);
        }
      }
      getGoal();
    }
  }, [itemId, url]);

  return children(err, loading, item);
};

export default GetGoal;
