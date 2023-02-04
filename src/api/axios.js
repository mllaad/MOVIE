import axios from "axios";
import qs from 'qs'

export const axiosConfig = {
    baseURL: 'https://api.themoviedb.org/3/',
    api_key: 'e4c3c0c4ca95046c57731f5775a86739',
    imgw500: (img) => `https://image.tmdb.org/t/p/w500${img}`,
    imgOrginal: (img) => `https://image.tmdb.org/t/p/original${img}`,
    language: 'fa-Fa'
}

export const axiosClient = axios.create({
    baseURL: axiosConfig.baseURL,
    params: {
        api_key: axiosConfig.api_key,
    },
    paramsSerializer: p => qs.stringify(p)
})

axiosClient.interceptors.response.use((response)=> {
    return response.data
})

export const tmdbList = {
    category: {
        movie: 'movie',
        tv: 'tv',
    },
    movie: {
        popular: 'popular',
        top_rated: 'top_rated',
        upcoming: 'upcoming',
    },
    tv: {
        popular: 'popular',
        top_rated: 'top_rated',
        on_the_air: 'on_the_air',
    },
    person: {
        combined_credits: 'combined_credits',
        images: 'images',
        popular: 'popular',
    },
}
export const tmdbApi = {
    getMovieList: (type, params) => {
        const url = '/movie/' + tmdbList.movie[type] 
        return axiosClient.get(url, params)
    },
    getTvList: (type, params) => {
        const url = '/tv/' + tmdbList.tv[type]
        return axiosClient.get(url, params)
    },
    getPerson: (type, id) => {
        const url = '/person/' + id + tmdbList.person[type]
        return axiosClient.get(url, {params:{}})
    },
    discover: (type, params) => {
        const url = '/discover/' + tmdbList.category[type]
        return axiosClient.get(url, params)
    },
    search: (params) => {
        const url = `search/multi`
        return axiosClient.get(url, params)
    },
    searchPerson: (params) => {
        const url = '/search/person'
        return axiosClient.get(url, params)
    },
    getVideos: (type, id) => {
        const url = tmdbList.category[type] + '/' + id + '/videos'
        return axiosClient.get(url, {params:{}})
    },
    getDetail: (type, id) => {
        const url = tmdbList.category[type] + '/' + id
        return axiosClient.get(url, {params:{}})
    },
    getCredits: (type, id) => {
        const url = tmdbList.category[type] + '/' + id + '/credits'
        return axiosClient.get(url, {params:{}})
    },
    getSimilar: (type, id) => {
        const url = tmdbList.category[type] + '/' + id + '/similar'
        return axiosClient.get(url, {params:{}})
    },
}