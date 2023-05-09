import baseUrl from "../Api/baseURL";

const insertData = async (url, parmas) => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  let config;

  if (userData?.token) {
    config = {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    };
  }

  const res = await baseUrl.post(url, parmas, config);
  return res;
};
export { insertData };
