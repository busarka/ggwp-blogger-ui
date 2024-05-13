import React from 'react'
import MockGameCover from '../../../assets/MockGameCover'
import ButtonArrow from '../../../assets/ButtonArrow'

export default function PosterAndForm() {
    return (
        <div className='flex flex-col w-[300px] mr-14'>
            <MockGameCover></MockGameCover>
            <div className='flex justify-center items-center h-[60px] bg-header-blue rounded-b-lg text-white text-4xl font-bold shadow-[0px_-20px_20px_0px_rgba(0,15,46,1)]'>
                1000 RUB
            </div>
            <form className='flex h-[35px] w-full mt-5'>
                <input className='border-2 border-inherit rounded-md w-full rounded-l-lg rounded-r-none indent-4 placeholder:text-black' name="query" placeholder='Telegram...'/>
                <button className='flex bg-button-green py-1 px-2 text-base text-white w-1/3 rounded-r-lg' type="submit">
                    <span className='mr-2.5'>
                    Купить 
                    </span>
                    <ButtonArrow></ButtonArrow>
                </button>
            </form>
        </div>
    )
}
