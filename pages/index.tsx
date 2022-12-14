import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'
import type { post } from '../types'

import { PostCard, PersonalWidget, PostWidget, RelateWidget, Categories, Pagination } from '../components'
import { getAuthor, getPosts } from '../services'
import { useState } from 'react'

const pageSize = 3

const Home: NextPage = ({ posts, author }: InferGetStaticPropsType<GetStaticProps>) => {
  const postsData: post[] = posts.data

  const [currentPage, setCurrentPage] = useState(1)

  const firstPageIndex = (currentPage - 1) * pageSize
  const lastPageIndex = firstPageIndex + pageSize
  const pageCount = Math.ceil(postsData.length / pageSize)

  const pagination = {
    pageCount,
    currentPage
  }

  const currentData = postsData.slice(firstPageIndex, lastPageIndex)
  const recentData = postsData.slice(0, 5); // display 4 recent posts

  return (
    <div className="container mx-auto px-10 mb-8">

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {/* render posts */}
          {currentData.map((post) => {
            return <PostCard post={post.attributes} key={post.id} />
          })}
          {/* show pagination at totalCount > pageSize */}
          {postsData.length > currentData.length &&
            <Pagination pagination={pagination} onPageChange={(page: number) => setCurrentPage(page)} />}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PersonalWidget author={author}/>
            <PostWidget posts={recentData}/>
            <RelateWidget />
            {/* <Categories /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const posts = (await getPosts()) || []
  const author = await getAuthor()
  return {
    props: {
      posts,
      author
    },
    revalidate: 60
  }
}

export default Home
