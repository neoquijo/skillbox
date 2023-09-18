import { UserModal } from '../../Providers/ModalProvider/Modals/UserModal/UserModal'
import { ModalWrapper } from '../../Providers/ModalProvider/ModalProvider'
import css from './Header.module.css'
import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface IPProps {

}
export const Header: FC<IPProps> = ({ }) => {

    const [userModal, setUserModal] = useState(false)
    const navigate = useNavigate()

    return (<div className={css.wrapper}>
        <div onClick={() => navigate('/')} className={css.st}>Logo</div>
        <div onClick={() => setUserModal(true)} className={css.nd}>User</div>
        {userModal && <ModalWrapper cb={() => setUserModal(false)} modal={<UserModal hide={() => setUserModal(false)} />} />}
    </div>)
}