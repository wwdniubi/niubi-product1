import axios from "axios"
export const shop = () =>axios({
  url: "http://chst.vip:8081/data/index.json"
})