import React from 'react';
import { AiFillStar } from 'react-icons/ai'

const Rating = ({ rating }) => {
    rating = parseInt(rating);

    if(rating === 5){
        return(
            <div className='rating'>
                <AiFillStar className='text-yellow-300' /> <AiFillStar className='text-yellow-300' /> <AiFillStar className='text-yellow-300' /> <AiFillStar className='text-yellow-300' /> <AiFillStar className='text-yellow-300' />
            </div>
        ) 
    }else if(rating === 4){
        return(
            <div className='rating'>
                <AiFillStar className='text-yellow-300' /> <AiFillStar className='text-yellow-300' /> <AiFillStar className='text-yellow-300' /> <AiFillStar className='text-yellow-300' />
            </div>
        ) 
    }else if(rating === 3){
        return(
            <div className='rating'>
                <AiFillStar className='text-yellow-300' /> <AiFillStar className='text-yellow-300' /> <AiFillStar className='text-yellow-300' /> 
            </div>
        ) 
    }else if(rating === 2){
        return(
            <div className='rating'>
                <AiFillStar className='text-yellow-300' /> <AiFillStar className='text-yellow-300' />
            </div>
        ) 
    }else{
        return(
            <div className='rating'>
                <AiFillStar className='text-yellow-300' />
            </div>
        ) 
    }
};

export default Rating;