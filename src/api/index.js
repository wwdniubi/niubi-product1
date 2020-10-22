import axios from "./config";
//封装好了之后要配置代理vue.config.js,然后重启项目

//登入接口
export const login = (username, password) =>
  axios({
    method: "post",
    url: "/users/login",
    data: {
      username,
      password
    }
  });
