import React from 'react'

const RelateWidget = () => {
    return (
        <div className='bg-white rounded-lg shadow-lg p-8'>
            <h2 className='font-semibold text-lg border-b mb-6'>Relate & Friends</h2>
            <a href="https://csd.moe" target="_blank">
                <div className="m-3 cursor-pointer rounded-full ease-out hover:bg-blue-600 transition duration-700 hover:-translate-y-1 bg-zinc-700 text-white text-center text-lg">
                    CSD
                </div>
            </a>
            <a href="https://yuuza.net/" target="_blank">
                <div className="m-3 cursor-pointer rounded-full ease-out hover:bg-blue-600 transition duration-700 hover:-translate-y-1 bg-zinc-700 text-white text-center text-lg">
                    Yuuza
                </div>
            </a>
            <a href="https://www.z233.me/" target="_blank">
                <div className="m-3 cursor-pointer rounded-full ease-out hover:bg-blue-600 transition duration-700 hover:-translate-y-1 bg-zinc-700 text-white text-center text-lg">
                    Fronz
                </div>
            </a>
        </div>
    )
}

export default RelateWidget