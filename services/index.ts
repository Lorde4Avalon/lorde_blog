import { request, gql } from "graphql-request";

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

  return Object.values(result.posts)
}

export const getPostDetail = async (slug: string) => {
  const query = gql`
    query {
      posts(filters: { slug: {eq: "${slug}"} } ) {
        data {
          attributes {
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
  return result.post.data.attributes
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