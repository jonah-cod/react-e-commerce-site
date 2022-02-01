import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BiSearchAlt} from 'react-icons/bi'
import { searchedAction} from '../../redux/actions/searched'
// import { cars } from './carData'

const Navs = () => {
    let cars =  useSelector(state => state)
    const [search, setsearch] = useState("")
    const dispatch = useDispatch()
    const handleSearch = (searchvalue)=>{
        
        dispatch(searchedAction(searchvalue))
        console.log(cars)
    }

    return (
        <div className="navs">
            <button>Home</button>
            <div className="searchBar">
                <input id="input" onChange={(e)=>{setsearch(e.target.value)}} type="text" placeholder="search by model..."/> 
                <BiSearchAlt className="searchIcon" onClick={(e)=>{handleSearch(search)}}/>
            </div>
            
            
            <button>cart</button>
        </div>
    )
}

export default Navs
