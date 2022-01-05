 import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.punkapi.com/v2/',

})

// api
export const punkAPI = {
    getPunk(page: number = 1,per_page:number=5) {
            return  instance.get<any>(`beers?page=${page}&per_page=5`);
    },

}


//types
export type PunkType = {

}