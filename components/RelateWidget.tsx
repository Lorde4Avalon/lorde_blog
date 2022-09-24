import React from 'react'

const RelateWidget = () => {
    return (
        <div className='bg-white rounded-lg shadow-lg p-8'>
            <h2 className='font-semibold text-lg border-b mb-6'>Relate & Friends</h2>
            <div className="m-3 cursor-pointer rounded-full ease-out hover:bg-blue-600 transition duration-700 hover:-translate-y-1 bg-zinc-700 text-white text-center text-lg">
                <a href="https://csd.moe" target="_blank">CSD</a>
            </div>
            <div className="m-3 cursor-pointer rounded-full ease-out hover:bg-blue-600 transition duration-700 hover:-translate-y-1 bg-zinc-700 text-white text-center text-lg">
                <a href="https://yuuza.net/" target="_blank">Yuuza</a>
            </div>
            <div className="m-3 cursor-pointer rounded-full ease-out hover:bg-blue-600 transition duration-700 hover:-translate-y-1 bg-zinc-700 text-white text-center text-lg">
                <a href="https://www.z233.me/" target="_blank">Fronz</a>
            </div>
        </div>
    )
}

export default RelateWidget