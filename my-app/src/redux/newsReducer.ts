import {NewsAPI} from './API'
import {Dispatch} from 'redux';
import {RootStateType} from './store-redux';
import {ThunkAction} from 'redux-thunk';

const SET_NEWS = 'NEWS/SET-NEWS'

let initialState = {
    newsList: null
}

export type newsReducerType = typeof initialState

const newsReducer = (state = initialState, action: any): newsReducerType => {
    switch (action.type){
        case SET_NEWS:
            return {...state,
                newsList: action.news
            }
        default:
            return state
    }
}

type ActionTypes = SetNewsType

type DispatchType = Dispatch<ActionTypes>

type UsualThunkActionType = ThunkAction<void, RootStateType, unknown, ActionTypes>

type NewsType = Array<{section: string, subsection: any, title: string, abstract: string, url: string, uri: string,byline: string,
    item_type: string, updated_date: string, created_date: string, published_date: string, material_type_facet: string,
    kicker: string, des_facet: Array<string>, org_facet: Array<string>, per_facet: Array<string>, geo_facet: Array<string>,
    multimedia: any, short_url: string}>
type SetNewsType = {
    type: typeof SET_NEWS,
    news: NewsType
}
export const SetNews = (news: NewsType): SetNewsType => ({type: SET_NEWS, news})

export const SetNewsTrunk = (): UsualThunkActionType =>
    async (dispatch: DispatchType) => {
    try{
        let response = await NewsAPI.getNews()
        dispatch(SetNews(response))
    } catch (error) {
        console.log(error)
    }


}




export default newsReducer;