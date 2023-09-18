
import { FC } from 'react'
import { useParams } from 'react-router-dom'

interface IPProps {

}
export const Test: FC<IPProps> = ({ }) => {

    const { id } = useParams()

    return (<div>
        {id}
    </div>)
}