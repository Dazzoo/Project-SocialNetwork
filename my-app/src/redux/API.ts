import * as axios from 'axios'
import {ProfileType} from '../types/types';
import {GetUsersResponseType, FollowType, GetAuthType, AuthType, CapchaType, GetProfileType, GetStatusType,
    PutStatusType,
    PutPhotoType,
    PutProfileType,
    GetNewsType,
    GetWeatherType} from '../types/ApiTypes';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '776ceb3a-ce0d-4a4b-b809-424792acef86'}
})


export const UserAPI = {
    async getUsers(currentPage: number = 1, pageSize: number = 10){
        let response = await instance.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            return response.data
    },
    async postFollow(id: number){
        let response = await instance.post<FollowType>(`follow/` + id)
            return response.data
    },
    async deleteFollow(id: number){
        let response = await instance.delete<FollowType>(`follow/` + id)
            return response.data
    },

}


export  const AuthAPI = {
    async getAuth (){
        let response = await instance.get<GetAuthType>('auth/me')
            return response.data
    },
    async postAuth(email: string, password: string, captcha: boolean){
        return await instance.post<AuthType>('/auth/login', {email, password, captcha})
    },
    async deleteAuth(){
        return await instance.delete<AuthType>('/auth/login')
    },
    async getCapcha(){
        let response = await instance.get<CapchaType>('security/get-captcha-url')
        return response
    }
}


export const  ProfileAPI = {
    async getProfile(userId: number){
        let response = await instance.get<GetProfileType>('profile/' + userId)
            return response.data
    },
    async getStatus(userId: number){
        return await instance.get<GetStatusType>('profile/status/' + userId)
    },
    async putStatus(status: string){
        return await instance.put<PutStatusType>('profile/status', {status: status})
    },
    async putPhoto(photo: any){
        const formData = new FormData()
        formData.append("image", photo)
        return await instance.put<PutPhotoType>('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    async putProfile(profile: any){
        let response = await instance.put<PutProfileType>('/profile', profile)
            return response
    }
}


export const NewsAPI = {
    async getNews(){
      const response = await axios.get<GetNewsType>("https://api.nytimes.com/svc/topstories/v2/science.json?api-key=DrWOmvRR5tl29hFQYw8XX5O77UkHrfdw")
        return response.data.results

    }

}



export const SidebarAPI = {
    async getWeather(){
        const response = await axios.get<GetWeatherType>("https://www.7timer.info/bin/civil.php?lon=24.03&lat=49.84&ac=0&unit=metric&output=json&tzshift=+3")
        return response.data
    }
}