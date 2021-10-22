import axios from "axios";


const config = {

    baseURL: "https://hacker-news.firebaseio.com/v0/"

}

const APIInstance = axios.create(config)

export const API = {
    getNewsId() {
       return  APIInstance.get<Array<number>>("newstories.json")
    },

    getItem(id: number) {
        return APIInstance.get<itemType>(`item/${id}.json`)
    }
}

type commentType = {
    by: string
    id: number
    kids?: number[]
    parent: number
    text: string
    time: number
    type: string
}

export interface itemType {
    by: string
    deleted?: boolean
    descendants?: number
    id: number
    kids?: Array<number>
    score?: number
    time: number
    title: string
    type?: string
    url?: string
    parent?: number
    text?: string
}
