
import axios from 'axios';
import QS from 'qs';
import store from '@/store/index';

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

service.interceptors.request.use(config => {
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
  const token = store.state.token;
  token && (config.headers.Authorization = token);
  return config
}, error => {
  console.log(error)
  Promise.reject(error)
});

service.interceptors.response.use(
  response => {
    if (response.data.code == 200) {
      return Promise.resolve(response.data)
    } else {
      return Promise.reject(response);
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export function get(url, params) {
  return new Promise((resolve,reject) => {
		service.get(url,{
			params : params
		}).then(res => {
			resolve(res)
		}).catch(err => {
			reject(err)
		})
	})
}

export function post(url, params) {
  return new Promise((resolve, reject) => {
    service.post(url, QS.stringify(params))
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data)
      })
  });
}