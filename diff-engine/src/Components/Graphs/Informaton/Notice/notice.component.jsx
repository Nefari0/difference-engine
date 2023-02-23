import { NoticeContainer } from './notice.styles'
import { useState,useEffect,useContext } from 'react'

import { ViewContext } from '../../../Context/view.context'

const Notice = (props) => {

    const { state,setState } = props
    const { noticeContent } = state
    const [ text, setText ] = useState('')
    const {darkmode} = useContext(ViewContext)

    useEffect(() => {update()},[noticeContent])

    const update = () => {
            if (noticeContent != null) {
            setText(noticeContent)
            setState({
                ...state,
                noticeContent:null
            })
        }
    }

    return (
        <NoticeContainer noticeContent={noticeContent} darkmode={darkmode}>
            <strong>{text}</strong>
        </NoticeContainer>
    )
}

export default Notice