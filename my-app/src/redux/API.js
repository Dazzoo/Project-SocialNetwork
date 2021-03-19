import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': 'ff5ddc63-b78e-409a-967b-b90f4f348fb6'}
})

export const UserAPI = {
    getUsers(currentPage = 1, pageSize = 10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {return response.data})
    },
    postFollow(id){
        return instance.post(`follow/` + id)
            .then(response => {return response.data})
    },
    deleteFollow(id){
        return instance.delete(`follow/` + id)
            .then(response => {return response.data})
    },

}

export  const AuthAPI = {
    getAuth(){
        return instance.get('auth/me')
            .then(response => {return response.data})
    }
}

export const  ProfileAPI = {
    getProfile(userId){
        return instance.get('profile/' + userId)
            .then(response => {return response.data})
    }
}