import React, { useRef, useState } from 'react'


const CommentsForm = () => {
  const [error, setError] = useState(false)
  const [localStorage, setLocalStorage] = useState(null)
  const [successMsg, setSuccessMsg] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', comment: '' })

  //useRef() with mutable data
  const nameEl = useRef(null)
  const emailEl = useRef(null)
  const commentEl = useRef(null)



  return (
    <div className='bg-white shadow-lg rounded-lg p-8 pb-16 mb-8'>
      <h3 className='text-xl font-semibold pb-3 border-b'>Leave a comment</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-1">
        <input value={formData.name} type="text" className='my-2 p-2 outline-none focus:ring-2 focus:ring-gray-200 bg-gray-100 rounded-lg' placeholder='Name'/>
        <input value={formData.email} type="text" className='my-2 p-2 outline-none focus:ring-2 focus:ring-gray-200 bg-gray-100 rounded-lg' placeholder='Email(optional)'/>
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea value={formData.comment} className='w-full outline-none rounded-lg p-4 mt-2 h-40 focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700' placeholder='Comment' />
      </div>
      <div className="mt-3">
        <button type='button' className='float-right p-3 px-4 mb-3 rounded-full hover:bg-blue-600 bg-zinc-700 text-white'>Submit Comment</button>
      </div>
    </div>
  )
}

export default CommentsForm