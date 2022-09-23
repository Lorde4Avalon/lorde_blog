import React, { useRef, useState } from 'react'

import { addComment } from '../services'

interface Props {
  post: {
    [key: string]: any
  }
}

interface formData {
  name: string
  email: string
  comment: string
}

interface commentObj {
  name: string
  email?: string
  comment: string
  post: number
}

const CommentsForm = ({ post }: Props) => {
  const [error, setError] = useState(false)
  const [localStorage, setLocalStorage] = useState(null)
  const [successMsg, setSuccessMsg] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', comment: '' })
  // //useRef() with mutable data
  // const nameEl = useRef(null)
  // const emailEl = useRef(null)
  // const commentEl = useRef(null)

  const onInputChange = (e: { target: any }) => {
    const { target } = e

    console.log(target.name);


    setFormData((prevState: formData) => ({
      ...prevState,
      [target.name]: target.value
    }))
  }

  const submitComment = () => {
    setError(false)
    const { name, email, comment } = formData

    console.log(formData);


    if (!name || !comment) {
      setError(true)
      return
    }



    const commentObj: commentObj = { name, email, comment, post: +post.id }

    if (commentObj.email === '') delete commentObj.email


    addComment(commentObj).then((res) => {
      if (res.createComment) {
        formData.name = ''
        formData.email = ''
        formData.comment = ''

        setFormData({ ...formData })
        setSuccessMsg(true)
        setInterval(() => setSuccessMsg(false), 3000)
      }
    })

  }



  return (
    <div className='bg-white shadow-lg rounded-lg p-8 pb-16 mb-8'>
      <h3 className='text-xl font-semibold pb-3 border-b'>Leave a comment</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-1">
        <input value={formData.name} onChange={onInputChange} name="name" type="text" className='my-2 p-2 outline-none focus:ring-2 focus:ring-gray-200 bg-gray-100 rounded-lg' placeholder='Name' />
        <input value={formData.email} onChange={onInputChange} name="email" type="text" className='my-2 p-2 outline-none focus:ring-2 focus:ring-gray-200 bg-gray-100 rounded-lg' placeholder='Email(optional)' />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea value={formData.comment} onChange={onInputChange} name="comment" className='w-full outline-none rounded-lg p-4 mt-2 h-40 focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700' placeholder='Comment' />
      </div>
      {error && <p className='text-red-600 text-lg'>Name and Comment are required</p>}
      {successMsg && <p className='text-green-500 text-lg'>Your comment already submit. Please Wait for approval</p>}
      <div className="mt-3">
        <button type='button' onClick={submitComment} className='float-right p-3 px-4 mb-3 rounded-full ease-out hover:bg-blue-600 transition duration-700 hover:-translate-y-1 bg-zinc-700 text-white'>Submit Comment</button>
      </div>
    </div>
  )
}

export default CommentsForm