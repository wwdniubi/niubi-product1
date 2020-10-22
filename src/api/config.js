import axios from "axios";

axios.defaults.baseURL =
  process.env.NODE_ENV === "development" ? "/api" : "http://www.chst.vip";

axios.defaults.withCredentials = true; //允许请求携带认证

//创建请求拦截器，让每个请求都可以携带想要传递的内容
axios.interceptors.request.use(
  function(config) {
    //登入&注册都不需要携带token
    // 将token给到一个前后台约定好的key中，作为请求发送

    if (config.url == "/users/login") {
      return config;
    } else {
      let token = localStorage.getItem("wwd-0224");
      config.headers["authorization"] = token;
    }
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

axios.create({
  timeOut: 3000
});

export default axios;
