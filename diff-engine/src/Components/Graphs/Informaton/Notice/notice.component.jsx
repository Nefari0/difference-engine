import { NoticeContainer } from './notice.styles'
import { useState,useEffect } from 'react'

const Notice = (props) => {

    const { state,setState } = props
    const { noticeContent } = state
    const [ text, setText ] = useState('')

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
        <NoticeContainer noticeContent={noticeContent}>
            <strong>{text}</strong>
        </NoticeContainer>
    )
}

export default Notice