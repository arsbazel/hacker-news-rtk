import {newsActions} from "./types";


export const setNewsIDList = (news: Array<number>) => {
    return {
        type: newsActions.SET_NEWS_ID_LIST,
        payload: news
    } as const
}



