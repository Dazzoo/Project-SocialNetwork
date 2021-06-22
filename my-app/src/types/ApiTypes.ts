import {ProfileType} from "./types";

export type GetUsersResponseType = {
    items: Array<{id: number, name: string, status: string, photos: {small: string, large: string}, followed: boolean}>,
    totalCount: number,
    error: string
}
export type FollowType = {
    resultCode: number,
    messages: Array<string>,
    data: object
}
export type GetAuthType = {
    data: {id: number, email: string, login: string},
    resultCode: number,
    messages: Array<string>
}
export type AuthType = {
    resultCode: number,
    messages: Array<string>,
    data: object
}
export type CapchaType = {
    url: string
}
export type GetProfileType = ProfileType

export type GetStatusType = any

export type PutStatusType = {
    resultCode: number,
    messages: Array<string>,
    data: object
}
export type PutPhotoType = {
    data: {
        small: string,
        large: string
    }
    resultCode: number,
    messages: Array<string>
}
export type PutProfileType = {
    resultCode: number,
    messages: Array<string>,
    data: object
}
export type GetNewsType = {
    status: string,
    copyright: string,
    section: string,
    last_updated: string,
    num_results: number,
    results: Array<{section: string, subsection: string, title: string, abstract: string, url: string, uri: string,
        byline: string, item_type: string, updated_date: string, created_date: string, published_date: string, material_type_facet: string
        kicker: string, des_facet: Array<string | null>, org_facet: Array<string | null>, per_facet: Array<string | null>
        ,geo_facet: Array<string | null>, multimedia: Array<{url: string, format: string, height: number, width: number, type: string,
            subtype: string, caption: string, copyright: string}>, short_url: string}>
}
export type GetWeatherType = {
    product: string,
    init: string,
    dataseries: Array<{timepoint: number, cloudcover: number, lifted_index: number, prec_type: string, prec_amount: number, temp2m: number,
        rh2m: string, wind10m: {direction: string, speed: number},weather: string}>
}