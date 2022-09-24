import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'
import type { post } from '../types'
import Head from 'next/head'

import { PostCard, PersonalWidget, PostWidget, RelateWidget, Categories, Pagination } from '../components'
import { getPosts } from '../services'
import { useState } from 'react'

const pageSize = process.env.PER_PAGESIZE

const Home: NextPage = ({ posts }: InferGetStaticPropsType<GetStaticProps>) => {
  const postsData: post[] = posts.data

  const [currentPage, setCurrentPage] = useState(1)

  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Avalon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {postsData.map((post) => {
            return <PostCard post={post.attributes} key={post.id}></PostCard>
          })}
          {posts.meta.pagination.pageCount > 1 && <Pagination pagination={posts.meta.pagination} />}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PersonalWidget />
            <RelateWidget />
            {/* <PostWidget />
            <Categories /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const posts = (await getPosts()) || []
  return {
    props: {
      posts
    }
  }
}

export default Home
