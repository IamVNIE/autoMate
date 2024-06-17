type SqlActionType = 'findAll' | 'findOne' | 'create' | 'update' | 'del'

type CategoryType = {
    id: number
    name: string
    createdAt: string
}

type ContentType = {
    id: number
    title: string
    content: string
    category_id: string
    created_at: string
}