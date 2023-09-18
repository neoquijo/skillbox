import { Outlet } from 'react-router-dom'
import css from './MainLayout.module.css'
import { FC } from 'react'
import { Header } from '../../Components/Header/Header'
import { Aside } from '../../Components/Aside/Aside'
import { Content } from '../../Components/Content/Content'


interface IPProps {

}
export const MainLayout: FC<IPProps> = ({ }) => {

    return (<div className={css.wrapper}>
        <Header />
        <Outlet />


    </div>)
}