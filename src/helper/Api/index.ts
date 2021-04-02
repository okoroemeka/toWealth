import Axios from "axios";
import auth from "../../utils/auth";

const base = process.env.REACT_APP_API_URL_LOCAL;

export default class ApiCall {
  static async getCall(endpoint: string) {
    return new Promise((resolve, reject) => {
      Axios.get(`${base}/${endpoint}`, {
        headers: {
          Authorization: auth.getUserToken(),
          "Content-Type": "application/json",
        },
      }).then(
        (res) => {
          resolve(res.data);
        },
        (err) => {
          console.log(err);

          //TOFO Handle Error

          reject(err);
        }
      );
    });
  }

  static async postCall(endpoint: string, body: any) {
    return new Promise((resolve, reject) => {
      Axios.post(`${base}/${endpoint}`, body, {
        headers: {
          Authorization: auth.getUserToken(),
          "Content-Type": "application/json",
        },
      }).then(
        (res) => resolve(res.data),
        (err) => reject(err)
      );
    });
  }

  static async putCall(endpoint: string, body: any) {
    return new Promise((resolve, reject) => {
      Axios.put(`${base}/${endpoint}`, body, {
        headers: {
          Authorization: auth.getUserToken(),
          "Content-Type": "application/json",
        },
      }).then(
        (res) => resolve(res.data),
        (err) => reject(err)
      );
    });
  }

  static async deleteCall(endpoint: string) {
    return new Promise((resolve, reject) => {
      Axios.delete(`${base}/${endpoint}`, {
        headers: {
          Authorization: auth.getUserToken(),
          "Content-Type": "application/json",
        },
      }).then(
        (res) => resolve(res.data),
        (err) => reject(err)
      );
    });
  }
}
