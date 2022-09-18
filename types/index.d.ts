export interface post {
    id: string
    attributes: Object
    meta: Object
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