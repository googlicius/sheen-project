import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "http://192.168.1.6:3000",
    headers: {
        "Authorization": "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjU5ZWY3MjVhNDNhYmQwMjNjMGU3ZWY3NSIsImVtYWlsIjoiaGFpZGFuZzAwOUBnbWFpbC5jb20iLCJpYXQiOjE1NDI3MDg4ODIwODYsImV4cCI6MTU0NTMwMDg4Mi4wODl9.W2cXxMTvta-jUanXnc-NNW5A6eUhinsE1dtDb7pR9Ms",
        "Content-Type": "application/x-www-form-urlencoded"
    }
})

export default axiosInstance;