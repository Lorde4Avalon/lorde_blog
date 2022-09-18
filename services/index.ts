import { request, gql } from "graphql-request";

const graphAPI = process.env.CMS_ENDPOINT ?? ''
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
              Excerpt
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
    const result = await request(graphAPI, query, null, requestHeader)

    return Object.values(result.posts)
}