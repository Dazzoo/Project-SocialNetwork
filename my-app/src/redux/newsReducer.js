import {NewsAPI} from './API'

let initialState = {
    newsList: null

}

const newsReducer = (state = initialState, action) => {
    switch (action.type){
        case 'SET-NEWS':
            return {...state,
                newsList: action.news
            }
        default:
            return state
    }
}

export const SetNews = (news) => ({type: 'SET-NEWS', news})

export const SetNewsTrunk = () => async (dispatch) => {
    try{
        let response = await NewsAPI.getNews()
        dispatch(SetNews(response))
    } catch (error) {
        console.log(error)
    }


}




export default newsReducer;