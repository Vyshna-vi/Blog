import React from 'react'
import ViewOneCategory from './ViewOneCategory'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';

function ViewCategory() {

    const navigate = useNavigate()

    function backView() {
        navigate('/')
    }

    return (
        <div className='viewonecategory'>
            <button className='view' onClick={backView}>Back</button>
            <ViewOneCategory />
        </div>
    )
}

export default ViewCategory