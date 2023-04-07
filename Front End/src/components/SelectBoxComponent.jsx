import React, { useRef, useState } from 'react'
import './allblog.css'
import axios from 'axios'
import { selectCategory } from '../Api/api'
import { useNavigate } from 'react-router-dom'

function SelectBoxComponent() {

    const categoriesRef = useRef()
    const navigate = useNavigate()
    const [category, setCategory] = useState("")

    async function getByCategories() {
        // console.log(categoriesRef.current.value);

        navigate('/viewcategory', { state: categoriesRef.current.value })
    }


    return (
        <div class="dropdown">
            <button className='navbtns'>Category</button>
            <select class="dropdown-options" onChange={getByCategories} ref={categoriesRef}>
                <option className='linkcat' value="">Select Category</option>
                <option className='linkcat' value="React">React</option>
                <option className='linkcat' value="HTML-CSS">HTML-CSS</option>
                <option className='linkcat' value="Express">Express</option>
                <option className='linkcat' value="MongoDB">MongoDB</option>
            </select>
        </div>
    )
}

export default SelectBoxComponent