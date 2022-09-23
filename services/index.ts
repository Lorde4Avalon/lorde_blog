import { request, gql } from "graphql-request";
import type { post } from '../types'

const graphAPI = process.env.CMS_ENDPOINT + "/graphql" ?? ''
const apiToken = process.env.API_TOKEN

const requestHeader = {
  Authorization: 'Bearer ' + apiToken
}

export const getPosts = async () => {
  const query = gql`
    query {
        posts {
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
  const result = await request(graphAPI, query, null, requestHeader)

  const res = {
    createComment: false
  }

  if (result) {
    res.createComment = true
    return res
  }

  return res
}