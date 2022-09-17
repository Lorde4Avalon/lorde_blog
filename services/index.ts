import { request, gql } from "graphql-request";

const graphAPI = process.env.CMS_ENDPOINT ?? ''
const apiToken = process.env.API_TOKEN

const requestHeader = {
    Authorization: 'Bearer ' + apiToken
}

export const getPosts = async () => {
    const query = gql`
    query {
        authors {
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
        categories {
          data {
            id
            attributes {
              name
            }
          }
        }
        posts {
          data {
            id
            attributes {
              title
              FeaturedPost
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

    return await request(graphAPI, query, null, requestHeader)
}