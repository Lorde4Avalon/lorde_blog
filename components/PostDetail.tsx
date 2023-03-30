import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import moment from 'moment'

interface Props {
  post: {
    [key: string]: any
  }
}

const host = process.env.CMS_ENDPOINT

const CodeBlock = {
  code({ node, inline, className, children, ...props }: any) {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <SyntaxHighlighter
        style={vscDarkPlus}
        customStyle={{"border-radius": "0.5rem"}}
        language={match[1]}
        PreTag="div"
        {...props}
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};


const PostDetail = ({ post }: Props) => {


  return (
    <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md mb-6">
        <img src={host + post.FeaturedImage.data.attributes.url} alt="" className="object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg" />
      </div>
      <h1 className='transition duration-700 text-center mb-3 mt-3 text-3xl font-semibold'>{post.title}</h1>
      <div className="flex justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="align-middle">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
      </div>
      <div className="p-3 text-lg tracking-tight">

        <ReactMarkdown linkTarget="_blank" components={CodeBlock} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
          {post.Content}
        </ReactMarkdown>
      </div>
    </div>
  )
}

export default PostDetail