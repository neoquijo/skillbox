import css from './App.module.css'
import { FC } from 'react'
import { WebRouter } from './Providers/WebRouter/WebRouter'

interface IPProps {

}
export const App: FC<IPProps> = ({ }) => {



    return (<div className={css.wrapper}>
        <WebRouter />
    </div>)
}