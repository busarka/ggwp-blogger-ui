import React from 'react'
import Logo from '../../assets/Logo'
import Arrow from '../../assets/Arrow'
import { Link } from 'react-router-dom'
import Contacts from './Contacts'

export default function Header() {
    return (
        <header className='flex justify-between items-center h-[72px] bg-header-blue sm:w-full'>
            <div className='flex items-center align-bottom h-full'>
                <Logo></Logo>
                <div className='flex items-baseline'>
                    <Link to="/" className='hidden xl:table-cell align-middle text-white mr-4 font-bold text-[24px]'>
                        Главная
                    </Link>
                    <div className='hidden md:table-cell align-middle sm:mr-1 mr-[10px]'>
                        <Arrow></Arrow>
                    </div>
                    <div className='flex-col md:table-cell md:align-middle w-min md:w-full  whitespace-nowrap'>
                        <div className='flex leading-6 items-center text-white text-[18px]/[21px] border-b-2 border-b-white md:border-none'>
                            <div className='md:hidden table-cell align-middle sm:mr-1 mr-[10px]'>
                                <Arrow></Arrow>
                            </div>
                            Game's name
                        </div>
                        <div className='md:hidden'>
                            <Contacts></Contacts>
                        </div>
                    </div>
                </div>
            </div>
            <div className='hidden md:flex md:items-baseline pr-[48px]'>
                <Contacts></Contacts>
            </div>
        </header>
    )
}
