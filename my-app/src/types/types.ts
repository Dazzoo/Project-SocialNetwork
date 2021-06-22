export type MessagesType = Array<{id: number, message: Array<string>}>
export type DialogsType = Array<{id: number, name: string, avatar: string}>
export type PostType = { id: number, likeCount: number, text: string }
export type ContactsType = {
    github: string | null, vk: string | null, facebook: string | null, instagram: string | null, twitter: string | null,
    website: string | null, youtube: string | null, mainLink: string | null
}
export type PhotosType = {
    small: string | null,
    large: string | null
}
export type ProfileType = {
    userId: number | null,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: ContactsType,
    photos: PhotosType,
    aboutMe?: string | null
}
export type SidebarType = {friendsOnline: Array<{id: number, name: string}>}
export type WeatherType = {product: string,init: string, dataseries: Array<{timepoint: number, cloudcover: number, lifted_index: number,
        prec_type: string, prec_amount: number, temp2m: number, rh2m: string, wind10m: {direction: string, speed: number},
        weather: string}>}
export type WeatherDataseriesType = {timepoint: number, cloudcover: number, lifted_index: number,
    prec_type: string, prec_amount: number, temp2m: number, rh2m: string, wind10m: {direction: string, speed: number},
    weather: string}
export type UsersType = Array<{name: string, id: number, uniqueUrlName: null, photos: {small: null | string, large: null | string}, status: null | string, followed: boolean}>

export type formDataType = {aboutMe: string, userId: number, lookingForAJob: boolean, lookingForAJobDescription: string | null,
    fullName: string | null, github: string | null, vk: string | null, facebook: string | null,
    instagram: string | null, twitter: string | null, website: string | null, youtube: string | null,
    mainLink: string | null}

