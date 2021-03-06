import APIModel from "../../Models/APIModel";
import axios from "axios";

export const createPushNotification = (token, params) => {
  return axios.post(APIModel.HOST + "admin/pushNotifications", params, {
    'headers': {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  });
};