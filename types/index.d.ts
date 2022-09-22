export interface post {
    id: string
    attributes: {
        title: string,
        slug: string,
        Excerpt: string,
        author: Object,
        FeaturedImage: Object,
        createdAt: string,
        updatedAt: string,
        categories: Object
    }
    meta: {
        pagination: {
            page: number
            pageCount: pageCount
            pageSize: number
            total: number
        }
    }
}


export interface author {
    name: string
    bio: string
    avatar: {
        data: {
            attributes: {
                url: string
            }
        }
    }
}