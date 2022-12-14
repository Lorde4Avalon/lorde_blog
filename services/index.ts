import { request, gql } from "graphql-request";
import type { post } from '../types'

const graphAPI = process.env.CMS_ENDPOINT + "/graphql" ?? ''
const apiToken = process.env.API_TOKEN
const pageSize: number = 4

const requestHeader = {
  Authorization: 'Bearer ' + apiToken
}

export const getPosts = async () => {
  const query = gql`
    query {
        posts (sort: "createdAt:desc") {
          data {
            id
            attributes {
              title
              slug
              Excerpt
              author {
                data {
                  attributes {
                    name
                    avatar {
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                  }
                }
              }
              FeaturedImage {
                data {
                  attributes {
                    url
                  }
                }
              }
              createdAt
              updatedAt
              categories {
                data {
                  attributes {
                      name
                  }
                }
              }
            }
          }
          meta {
            pagination {
              page
              pageSize
              total
              pageCount
            }
          }
        }
        
      }
    `
  const result = await request(graphAPI, query, null, requestHeader)

  return result.posts
}

// export const getRecentPosts = async () => {
//   const query = gql`
//     query {
//       posts(pagination: { limit: 5 }, sort: {"createdAt:desc"}) {
//         data {
//           attributes {
//             title
//             slug
//             FeaturedImage {
//               data {
//                 attributes {
//                   url
//                 }
//               }
//             }
//           }
//         }
//       } 
//     }
//   `

//   const result = await request(graphAPI, query, null, requestHeader)
//   return result.posts
// }

export const getPostDetail = async (slug: string | string[] | undefined) => {
  const query = gql`
    query {
      posts(filters: { slug: {eq: "${slug}"} } ) {
        data {
          id
          attributes {
            title
            Content
            FeaturedImage {
              data {
                attributes {
                  url
                }
              }
            }
            createdAt
            updatedAt
          }
        }
      }
    }
  `

  const result = await request(graphAPI, query, null, requestHeader)
  return result.posts
}

export const getPostComments = async (slug: string | string[] | undefined) => {
  const query = gql`
    query {
      posts(filters: { slug: {eq: "${slug}"} } ) {
        data {
          id
          attributes {
            comments {
              data {
                attributes {
                  name
                  email
                  comment
                  createdAt
                }
              }
            }
          }
        }
      }
    }
  `

  const result = await request(graphAPI, query, null, requestHeader)

  return result.posts.data[0].attributes.comments.data
}

export const getAuthor = async () => {
  const query = gql`
    query {
      author(id: 1) {
        data {
          attributes {
            bio
            name
            avatar {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      } 
    }
  `

  const result = await request(graphAPI, query, null, requestHeader)

  return result.author.data.attributes
}

export const addComment = async (commentObj: Object) => {
  const query = gql`
    mutation createComment {
      createComment(data: ${JSON.stringify(commentObj).replace(/"([^"]+)":/g, '$1:')}) {
        data {
          id
          attributes {
            name
            email
            comment
            post {
              data {
                id
              }
            }
          }
        }
      }
    }
  `

  const res = {
    createComment: false,
    errMessage: null
  }

  try {
    const result = await request(graphAPI, query, null, requestHeader)

    if (result) {
      res.createComment = true
    }
    return res
  } catch (err: any) {
    res.errMessage = err.response.errors[0].message
    return res
  };

}