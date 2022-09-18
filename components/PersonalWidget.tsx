import React, { useState, useEffect } from 'react'

import type { author } from '../types'
import { getAuthor } from '../services'

const host = process.env.CMS_ENDPOINT

const PersonalWidget = () => {
  const [author, setAuthor] = useState<author>({})

  useEffect(() => {
    getAuthor().then((result) => {
      console.log(result.author.data.attributes);
      setAuthor(result.author.data.attributes);
    })
  }, [])

  return (
    <div className=" bg-white rounded-lg shadow-lg p-8 mb-8">
      <div className="flex justify-center">
        <img src={host + author.avatar?.data.attributes.url} alt={author.name}
          className="rounded-full" height="100px" width="100px" />
      </div>
      <p className='text-center mt-1 text-lg'>
        {author.name}
      </p>
    </div>
  )
}

export default PersonalWidget