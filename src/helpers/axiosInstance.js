import axios from 'axios';

export default (history = null) => {
  const baseUrl = process.env.REACT_APP_BACKEND_URL;
  // console.log(baseUrl);

  // var config = {
  //   headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json'
  //   },
  //   withCredentials: false
  // };

  let headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };

  if (localStorage.token) {
    headers.Authorization = `Bearer ${localStorage.token}`;
  }

  const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers
  });

  // axiosInstance.interceptors.response.use(
  //   (response) =>
  //     new Promise((resolve, reject) => {
  //       resolve(response);
  //     }),
  //   (error) => {
  //     if (!error.response) {
  //       return new Promise((resolve, reject) => {
  //         reject(error);
  //       });
  //     }

      // if ( error.response.status === 401 || error.response.status === 403 ) {
      //   localStorage.removeItem("token");
      //   if (history) {
      //     history.push("/auth/login");
      //   } else {
      //     window.location = "/auth/login";
      //   }
      // } else {
      //   return new Promise((resolve, reject) => {
      //     reject(error);
      //   });
      // }

  //   }
  // );

  return axiosInstance;
};
