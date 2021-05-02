import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': 'ff5ddc63-b78e-409a-967b-b90f4f348fb6'}
})

export const UserAPI = {
    async getUsers(currentPage = 1, pageSize = 10){
        let response = await instance.get(`users?page=${currentPage}&count=${pageSize}`)
            return response.data
    },
    async postFollow(id){
        let response = await instance.post(`follow/` + id)
            return response.data
    },
    async deleteFollow(id){
        let response = await instance.delete(`follow/` + id)
            return response.data
    },

}

export  const AuthAPI = {
    async getAuth (){
        let response = await instance.get('auth/me')
            return response.data
    },
    async postAuth(email, password, captcha){
        return await instance.post('/auth/login', {email, password, captcha})
    },
    async deleteAuth(){
        return await instance.delete('/auth/login')
    },
    async getCapcha(){
        let response = await instance.get('security/get-captcha-url')
        return response
    }
}

export const  ProfileAPI = {
    async getProfile(userId){
        let response = await instance.get('profile/' + userId)
            return response.data
    },
    async getStatus(userId){
        return await instance.get('profile/status/' + userId)
    },
    async putStatus(status){
        return await instance.put('profile/status', {status: status})
    },
    async putPhoto(photo){
        const formData = new FormData()
        formData.append("image", photo)
        return await instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    async putProfile(profile){
        let response = await instance.put('/profile', profile)
            return response
    }
}

export const NewsAPI = {
    async getNews(){
      const response = await axios.get("https://api.nytimes.com/svc/topstories/v2/science.json?api-key=DrWOmvRR5tl29hFQYw8XX5O77UkHrfdw")
        return response.data.results

    }

}

export const SidebarAPI = {
    async getWeather(){
        const response = await axios.get("https://www.7timer.info/bin/civil.php?lon=24.03&lat=49.84&ac=0&unit=metric&output=json&tzshift=+3")
        return response.data
    }
}