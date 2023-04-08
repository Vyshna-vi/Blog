import React, { useRef, useState } from 'react'
import '../allblog/allblog.css'
import { useNavigate } from 'react-router-dom'

function SelectBoxComponent() {

    const navigate = useNavigate()
    async function getByCategories(e) {
        navigate('/viewcategory', { state: e.target.value })
    }


    return (
        <div class="dropdown">
            <select class="navbtns  dropdown-options" name='select-category' onChange={getByCategories} >
                <option className='linkcat' value="">Category</option>
                <option className='linkcat' value="React">React</option>
                <option className='linkcat' value="HTML-CSS">HTML-CSS</option>
                <option className='linkcat' value="Express">Express</option>
                <option className='linkcat' value="MongoDB">MongoDB</option>
            </select>
        </div>
    )
}

export default SelectBoxComponent