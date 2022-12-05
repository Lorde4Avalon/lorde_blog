import React, { useState, useEffect } from 'react'

import type { author } from '../types'

interface Props {
  author: author
}
const host = process.env.CMS_ENDPOINT

const PersonalWidget = ({ author }: Props) => {

  return (
    <div className=" bg-white rounded-lg shadow-lg p-8 mb-8">
      <div className="flex justify-center">
        <img src={host + author.avatar?.data.attributes.url} alt={author.name}
          className="rounded-full" height="100px" width="100px" />
      </div>
      <p className='text-center mt-1 text-lg'>
        {author.name}
      </p>
      <div className="block lg:flex text-center items-center justify-center p-2 text-lg font-medium">
        <a href='https://github.com/Lorde4Avalon' target="_blank" className="inline-block mx-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" className="bi bi-github inline mr-1 mb-1" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
          </svg>
          GitHub
        </a>
        <div className="flex mx-3 text-center items-center justify-center cursor-pointer">
          <svg className='mr-0.5' width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19q0-.825.587-1.413Q4.175 17 5 17q.825 0 1.412.587Q7 18.175 7 19q0 .825-.588 1.413Q5.825 21 5 21Zm12 0q0-2.9-1.1-5.438q-1.1-2.537-3.012-4.45Q10.975 9.2 8.438 8.1Q5.9 7 3 7V4q3.525 0 6.625 1.338q3.1 1.337 5.4 3.637q2.3 2.3 3.638 5.4Q20 17.475 20 21Zm-6 0q0-3.325-2.338-5.662Q6.325 13 3 13v-3q2.3 0 4.3.863q2 .862 3.488 2.349q1.487 1.488 2.349 3.488Q14 18.7 14 21Z" /></svg>
          Subscribe
        </div>
      </div>
      <p className='text-center text-lg font-normal pt-6'>
        {author.bio}
      </p>
    </div>
  )
}

export default PersonalWidget