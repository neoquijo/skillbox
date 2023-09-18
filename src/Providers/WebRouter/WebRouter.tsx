import { Route, Routes } from 'react-router-dom'
import { FC } from 'react'
import { MainLayout } from '../../Layouts/MainLayout/MainLayout'
import { Test } from '../../Components/Test/Test'
import { Articles } from '../../Pages/Articles/Articles'

interface IPProps {

}
export const WebRouter: FC<IPProps> = ({ }) => {



    return (<div>
        <Routes>
            <Route path='/' element={<MainLayout />}>
                <Route path='/:id' element={<Articles />} />
                <Route path='/' element={<Articles />} />
            </Route>
        </Routes>
    </div>)
}