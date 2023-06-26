const BASE_PATH = "https://gateway.marvel.com:443";
const API_KEY = process.env.REACT_APP_PUBLIC_KEY

export async function comicList() {
    return await fetch(
        `${BASE_PATH}/v1/public/comics?apikey=${API_KEY}`
        ).then(res =>res.json() )
}


export async function eventsList() {
    return await fetch(
        `${BASE_PATH}/v1/public/events?orderBy=name&limit=30&apikey=${API_KEY}`
    ).then(res =>res.json() )
}

export async function charactersList(){
    return await fetch(
        `${BASE_PATH}/v1/public/characters?apikey=${API_KEY}`
        ).then(res =>res.json())
}