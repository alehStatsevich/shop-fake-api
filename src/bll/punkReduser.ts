import {Dispatch} from "redux";
import {punkAPI} from "../api/punk-api";


export type ProductsType = {
    abv: number
    attenuation_level: number
    boil_volume: {value: number, unit: string}
    brewers_tips: string
    contributed_by: string
    description: string
    ebc: number
    first_brewed: string
    food_pairing: Array<string>
    ibu: number
    id: number
    image_url:string
    ingredients: {malt:Array<{"name": string,"amount": { "value": number, "unit": string }}>, hops: Array<{"name": string,
            "amount": { "value": number, "unit": string }, "add": string, "attribute": string}>, yeast: string}
    method: {mash_temp: Array<any>, fermentation: { "temp": { "value": number, "unit": string}}, "twist": null | string }
    name: string
    ph: number
    srm: number
    tagline: string
    target_fg: number
    target_og: number
    volume: {value: number, unit: string}
}

const initialState = {
    items: [] as Array<ProductsType>,
    page: 1,
    per_page: 5,
    pageTotalCount: 80,
};

export type initialStateType = typeof initialState;

export const beerReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case "SET-BEERS": {
            return {
                ...state,
                items: [...action.beers]
            }
        }
        default:
            return state
    }
}

const setBeers = (beers:Array<ProductsType>) => ({type: "SET-BEERS",beers} as const);
export const fetchBeersThunk = (page?: number,per_page?:number) => (dispatch: Dispatch) => {
    punkAPI
        .getPunk(page,per_page)
        .then((res) => {
            dispatch(setBeers(res.data))

        })


}
type ActionsType =
    | ReturnType<typeof setBeers>


