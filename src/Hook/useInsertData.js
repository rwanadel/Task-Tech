import baseUrl from "../Api/baseURL";

const insertData = async (url, parmas, method = 'POST') => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  let headers;

  if (userData?.token) {
      headers = {
        Authorization: `Bearer ${userData.token}`,
      };
  }

  const res = await baseUrl({
    method,
    url,
    data: parmas,
    headers,
  });
  return res;
};
export { insertData };
