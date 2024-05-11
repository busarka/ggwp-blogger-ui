import React from 'react'
import Logo from '../../assets/Logo'
import Arrow from '../../assets/Arrow'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className='flex justify-between items-center h-[72px] bg-header-blue'>
            <div className='flex items-center align-bottom h-full'>
                <Logo></Logo>
                <div className='flex items-baseline'>
                    <Link to="/" className='text-white mr-4 font-bold text-[24px] table-cell align-middle'>Главная</Link>
                    <Arrow></Arrow>
                    <span className='text-white text-[18px]/[21px] table-cell align-middle'>название игры</span>
                </div>
            </div>
            <a href="#" className='text-white pr-[48px] text-base/[18px] font-normal'>Связаться с продавцом</a>
        </header>
    )
}
