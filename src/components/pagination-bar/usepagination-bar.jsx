import { useMemo } from "react"
export const DOTS = '...'
export const usePagination = (totalPage, currentPage, siblingCount=2) => {
    
    const firstPage = 1
    const lastPage = totalPage

    const range = (first, last) => {
        const length = last - first
        return Array.from({length}, (_, indx) => first + indx)
    }
    
    const paginationBar = useMemo(()=> {
        // first, DOTS, current, DOTS, last
        const TotalPageCustom = 5 + siblingCount
        
        // index of siblings                  5               5
        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)

        const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPage)
        // is show? of sibling
       
        const showLeftDots = leftSiblingIndex > 2 
        const showRightDots = rightSiblingIndex <= totalPage - 2

        // (!showLeftSibling && !showRightSibling)
        if(TotalPageCustom >= totalPage) return range(1, totalPage)

        if(!showLeftDots && showRightDots) {
            ///  3 => its should be > 2    || 1 => its becuse of range method
            const leftItemCount = 3 +  1 + siblingCount 
            const leftRange = range(1, leftItemCount)
            return [ ...leftRange, DOTS, lastPage]
        }
        if(showLeftDots && !showRightDots) {
            const rightItemCount = 3 + 1 + siblingCount
            const rightRange = range(totalPage - rightItemCount + 1 ,  totalPage  )
            return [firstPage, DOTS, ...rightRange, lastPage]
        }
        if(showLeftDots && showRightDots) {
            const middleRange = range(leftSiblingIndex, rightSiblingIndex + 1)
            return [firstPage, DOTS, ...middleRange, DOTS, lastPage]
        }
    },[totalPage, siblingCount, currentPage])
    
    return paginationBar
}