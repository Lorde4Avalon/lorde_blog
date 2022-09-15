import Link from 'next/link'
import React, { ReactNode, useContext, useState } from 'react'
type category = {
    name: String;
    slug: String;
}

const categories: Array<category> = [
    { name: 'Font Dev', slug: 'font' },
    { name: 'golang', slug: 'golang' }
]

const Header = () => {
    // const [categories, setCategories] = useState([])


    return (
        <div className='container mx-auto px-10 mb-8'>
            <div className="border-b-2 w-full inline-block border-blue-400 py-8">
                <div className="md:float-left block">
                    <Link href="/">
                        <span className='cursor-pointer font-bold text-4xl text-white'>
                            Avalon
                        </span>
                    </Link>
                </div>
                <div className="hidden md:float-left md:contents">
                    {categories.map((category, index) => {
                        return <Link key={index} href={`/category/${category.slug}`}>
                            <span className='cursor-pointer md:float-right mt-2 align-middle text-white ml-4'>
                                {category.name}
                            </span>
                        </Link>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Header