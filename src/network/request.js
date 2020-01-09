import axios from "axios"

export default function request(config) {
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 10000
    })

    // 响应拦截
    instance.interceptors.response.use(res=>{
        return res.data
    },err=>{
        console.log(err)
    })
    return instance(config)
}