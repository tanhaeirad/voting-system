import { LOGIN_URL } from "./apiPath";
import getAccountInfoApiCall from "api/getAccountInfoApiCall";

const loginApiCall = (
  username,
  password,
  setSnackbarInfo,
  setShouldRedirect
) => {
  fetch(LOGIN_URL, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: username, password: password }, 2, 0),
  })
    .then((response) => {
      if (!response.ok) throw new Error(response.status);
      else return response.json();
    })
    .then((responseJson) => {
      localStorage.setItem("username", username);
      localStorage.setItem("token", responseJson.token);
      getAccountInfoApiCall(username, 1, setShouldRedirect);
    })
    .catch(() => {
      setSnackbarInfo(true);
    });
};

export default loginApiCall;
