"use client";
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'

const Navigation = () => {
    const currentPath = usePathname();
    const [toggle, setToggle] = useState(false);
    return (
        <nav className='w-full h-fit mx-auto border-b bg-white'>
            <div className="container flex justify-between h-[14vh] items-center">
                <div className="logo">
                    <Link href={'/'}><h4 className='text-2xl tracking-tight font-bold'>active <span className=' text-green-500 uppercase'>Linktest</span></h4></Link>
                </div>

                <div className='text-3xl text-slate-600 cursor-pointer lg:hidden' onClick={() => setToggle(prev => !prev)}>
                    {toggle ? <BiMenuAltRight /> : <AiOutlineClose />}
                </div>

                <div className="hidden lg:flex links gap-10 text-slate-600">
                    <Link href={'/page-one'} className={currentPath === "/page-one" ? "text-green-500 font-semibold" : "text-slate-600"}>Page One</Link>
                    <Link href={'/page-two'} className={currentPath === "/page-two" ? "text-green-500 font-semibold" : "text-slate-600"}>Page Two</Link>
                    <Link href={'/page-three'} className={currentPath === "/page-three" ? "text-green-500 font-semibold" : "text-slate-600"}>Page Three</Link>
                </div>
            </div>
            {!toggle && <div className='w-full lg:hidden'>
                <div className='container flex flex-col gap-6 py-10'>
                    <Link href={'/page-one'} className={`${currentPath === "/page-one" ? "text-white font-semibold px-3 bg-green-500 rounded-md" : "text-slate-600"} py-3 text-center`}>Page One</Link>
                    <Link href={'/page-two'} className={`${currentPath === "/page-two" ? "text-white font-semibold px-3 bg-green-500 rounded-md" : "text-slate-600"} py-3 text-center`}>Page Two</Link>
                    <Link href={'/page-three'} className={`${currentPath === "/page-three" ? "text-white font-semibold px-3 bg-green-500 rounded-md" : "text-slate-600"} py-3 text-center`}>Page Three</Link>
                </div>
            </div>}
        </nav>
    )
}


export default Navigation

