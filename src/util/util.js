import axios from 'axios'
const qs = require('qs');

axios.defaults.baseURL = 'http://chanel.widiazine.cn/';

export function ajaxTo(url,data){
  const requestUrl = url;
  return new Promise((resolve, reject) => {
    axios.post(requestUrl,qs.stringify(data))
    .then(function(res){
      console.log(res);
      if(res.status == 200){
        console.log('123');
        resolve(res.data);
      }
    })
    .catch(function(error){
      reject(error);
    })
  })
}
