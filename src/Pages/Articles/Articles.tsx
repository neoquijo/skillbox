import { Aside } from '../../Components/Aside/Aside'
import css from './Articles.module.css'
import { FC, useEffect } from 'react'
import { Content } from '../../Components/Content/Content'
import { APIRequest } from '../../Shared/API/Client'

interface IPProps {

}
export const Articles: FC<IPProps> = ({ }) => {

    const client = new APIRequest('http://localhost:3001')

    return (<div className={css.wrapper}>
        <Aside client={client} />
        <Content client={client} />
    </div>)
}