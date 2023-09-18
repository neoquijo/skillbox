import { APIRequest } from 'src/Shared/API/Client'
import css from './Aside.module.css'
import { FC, useEffect, useState } from 'react'
import { ILink } from 'src/Shared/API/Interfaces'
import { Link } from 'react-router-dom'

interface IPProps {
    client: APIRequest
}
export const Aside: FC<IPProps> = ({ client }) => {

    const [links, setLinks] = useState([])
    const getPosts = async () => {
        const posts = await client.getPostsTitle()
        setLinks(posts)
    }
    useEffect(() => {
        getPosts()
    }, [])

    return (<nav className={css.wrapper}>
        <ul>

            {links?.map((link: ILink, index: number) => <li>
                <Link className={css.link} to={'/' + Number(index + 1)}>
                    {/*
                    запрос по индексу по тому-что изначально хотел выборку делать по шортлинку из json-servera, 
                    но обнаружил что стандартные методы поиска возвращают масив, а уже 11 ночи))
                    */}
                    {link.title}
                </Link>
            </li>)}
        </ul>

    </nav>)
}