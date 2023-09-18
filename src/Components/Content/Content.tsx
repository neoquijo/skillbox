import { APIRequest } from 'src/Shared/API/Client'
import css from './Content.module.css'
import { FC, useEffect, useState } from 'react'
import { IPosts } from 'src/Shared/API/Interfaces'
import { useParams } from 'react-router-dom'

interface IPProps {
    client: APIRequest
}
export const Content: FC<IPProps> = ({ client }) => {

    const [post, setPost] = useState<IPosts | never>()
    const { id } = useParams()
    const getPost = async (id: string | undefined) => {
        if (id) {
            const post = await client.getPost(id)
            post ? setPost(post) : setPost(undefined)
        } else setPost(undefined)
    }

    useEffect(() => {
        getPost(id)
    }, [id])

    return (<div className={css.wrapper}>
        {post?.body}

    </div>)
}