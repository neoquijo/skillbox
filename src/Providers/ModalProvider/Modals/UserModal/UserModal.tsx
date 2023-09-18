import css from './UserModal.module.css'
import { FC } from 'react'

interface IPProps {
    hide: () => void
}
export const UserModal: FC<IPProps> = ({ hide }) => {



    return (<div onClick={e => e.stopPropagation()} className={css.wrapper}>
        <div className={css.info}>User Info</div>
        <div onClick={hide} className={css.close}>Close [x]</div>
    </div>)
}