import {useState, useEffect} from 'react'
import { axiosClient } from '../api/axios'

export  const useGetList = (category, type) => {
        const [list , setList] = useState([])
        const url = `/${category}/${type}`
        useEffect(() => {
        axiosClient.get(url, {params:{}})
        .then(response => {
            const results = response.results.map((result) => {
                return Object.defineProperty(result, 'category', {
                    writable: true,
                    enumerable: true,
                    value: category,
                })
            })           
            setList(results)
        })
        .catch(err => console.error('cant fetch data'))
        },[])
        return list
    }