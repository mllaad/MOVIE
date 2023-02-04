import {useState} from 'react'
import { DOTS, usePagination } from "./usepagination-bar"
import {TiChevronLeft, TiChevronRight} from 'react-icons/ti'

const PaginationBar = ({totalPage , currentPage, setCurrentPage, params}) => {
    
    

    const paginationBars = usePagination(totalPage, currentPage)


    const onNext = () => setCurrentPage({...params, page : currentPage + 1})
    const onPrevious = () => setCurrentPage({...params, page: currentPage - 1})
    const isFristPage = currentPage === 1 ? true : false
    const isLastPage = currentPage === totalPage ? true : false
    return (
        // PAGINATION
        <ul className="text-white flex justify-between items-center w-80 m-auto pt-5">

            {/* // ARROW // */}
            <div 
            className="text-orange text-xl cursor-pointer text-[#EB8307]"
            onClick={isFristPage ? null : onPrevious}
            ><TiChevronLeft/></div>
            {/* /// */}
            {
                paginationBars.map((paginationBar, i) => {
                    const isSelected = currentPage === paginationBar
                    if(paginationBar === DOTS) return  <li className="text-xl " key={i}>{DOTS}</li>
                    
                    return (
                    <li 
                    key={i}
                    className={`rounded-full text-l cursor-pointer text-[#EB8307] hover:underline ${ isSelected ? 'text-xl underline' : '' }`}
                    onClick={(e) => setCurrentPage({...params, page : parseInt(e.target.innerText)} )}
                    >{paginationBar}</li>)
                })
            }
            {/* // ARROW // */}
            <li 
            className='text-orange text-xl cursor-pointer text-[#EB8307]'
            onClick={isLastPage ? null : onNext}
            ><TiChevronRight/></li>
            {/* /// */}
        </ul>
    )
}

export default PaginationBar