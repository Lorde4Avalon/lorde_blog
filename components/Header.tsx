import Link from 'next/link'
import React, { ReactNode, useContext } from 'react'

type category = {
    name: String;
    slug: React.Key;
}

const categories: Array<category> = [{ name: 'Font Dev', slug: 'font' }, { name: 'golang', slug: 'golang' }]

const Header = () => {
    return (
        <div className='container mx-auto px-10 mb-8'>
            <div className="border-b-2 w-full inline-block border-blue-400 py-8">
                <div className="md:float-left block">
                    <Link href="/">
                        <span className='cursor-pointer font-bold text-4xl text-blue-300'>
                            Avalon
                        </span>
                    </Link>
                </div>
                <div className="md:float-right md:contents">
                    {categories.map((category) => {
                        <Link key={category.slug} href={`/category/${category.slug}`}>
                            <span className='md:float-right mt-2 align-middle text-blue-300 ml-4'>
                                {category.name}
                            </span>
                        </Link>
                    }) as ReactNode}
                </div>
            </div>
        </div>
    )
}

export default Header