import { Routes, Route } from "react-router-dom"
import {tmdbList} from '../../api/axios'
import GridMedia from "../../pages/grid-media/grid-media"
const InGrid = () => {
    return (
        <Routes>    
            <Route path='/movie' element={<GridMedia category={tmdbList.category.movie}/>}/>
            <Route path='/tv' element={<GridMedia category={tmdbList.category.tv}/>}/>
        </Routes>
    )
}

export default InGrid