import React from 'react'
import { AiTwotoneHeart } from 'react-icons/ai'

const Footer = () => {
    return (
        <footer className='container mx-auto px-10 '>
            <div className="flex flex-wrap justify-center text-gray-300 px-6 py-1">
                @2022 code & design with <AiTwotoneHeart className='mt-1 mx-1'/> by
                <a className='px-2 underline ' href="https://github.com/Lorde4Avalon" target="_blank">Lorde</a>
            </div>
            <div className="flex text-center justify-center text-gray-300">
                Made by NextJs TailwindCSS
            </div>
        </footer>
    )
}

export default Footer