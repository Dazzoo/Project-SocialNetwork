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
      const response = await axios.get("http://api.mediastack.com/v1/news?access_key=d515c2333d3badfd9e10b952d1ea47aa&languages=en&countries=ua&categories=general")
        return response.data

    }

}