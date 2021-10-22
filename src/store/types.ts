import {setNewsIDList} from "./action-creators";

export enum newsActions {
    SET_NEWS_ID_LIST = "SET_NEWS_ID_LIST"
}

export type setNewsIDListType = ReturnType<typeof setNewsIDList>

export type newsActionsTypes = setNewsIDListType

export type newsStateType = Array<number>
