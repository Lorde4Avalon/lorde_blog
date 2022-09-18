import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'

import { PostCard, PostWidget, Categories } from '../components'
import { getPosts } from '../services'

type post = {
  attributes: Object
  id:string
}

const Home: NextPage = ({ posts }: InferGetStaticPropsType<GetStaticProps>) => {
  const postsData: post[] = Object.values(posts)

  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Lorde's Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {postsData.map((post) => {
            return <PostCard post={post.attributes} key={post.id}></PostCard>
          })}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const posts = (await getPosts())[0] || []
  return {
    props: {
      posts
    }
  }
}

export default Home
