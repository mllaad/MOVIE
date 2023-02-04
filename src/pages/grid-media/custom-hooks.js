import { useEffect, useState } from "react"
import { axiosClient, tmdbList } from "../../api/axios"

export const useListInGrid = (category, type, page) => {
    const [list, setList] = useState([]) 
    const params = {page}
    const url = `/${category}/${type}`

    // if type change's jsut change the list
    useEffect(() => {
        axiosClient.get(url, params)
        .then(res => setList(res.results))
        .catch(() => console.error('cant fetch'))
    },[type])
    
    // if page change's just add to list
    useEffect(() => {
        if(params.page === 1)  return;
        axiosClient.get(url, {params})
        .then(res => setList(list => [...list, ...res.results]))
        .catch(() => console.error('cant fetch'))
    },[page])

    return list
}
