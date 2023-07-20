import { useState,useContext,useEffect } from "react";
import { ViewContext } from "../../Context/view.context";
import { MemoContainer,MemoOverlay } from "./memo.styles";
import Button from "../KeyPad/Button";
import { CloseX,InArrows,OutArrows } from "../SVG";
const defaultNotebook = { text:'' }

const MemoPad = () => {
    
    const NOTEBOOK_NAME = 'DIFF_ENGINE_NOTEBOOK'
    const [localState,setLocalState] = useState({
        large:false,
        text:''
    })

    const {large,text} = localState
    const { openMemo,setOpenMemo,darkmode } = useContext(ViewContext)
    const savedNoteBook = localStorage.getItem(NOTEBOOK_NAME)
    // const textAreaValue = JSON.parse(savedNoteBook).text

    const textHandler = (e) => {
        e.preventDefault()
        const {name,value} = e.target
        setLocalState({...localState,[name]:value})
        localStorage.setItem(NOTEBOOK_NAME,localState.text)
    }

    useEffect(() => {
        try {
            if (!savedNoteBook) {
                localStorage.setItem(NOTEBOOK_NAME,JSON.stringify(defaultNotebook))
            } else {
                setLocalState({...localState, text:savedNoteBook})
            }
        } catch (error) {
            console.log('HERE IS THE ERROR',error)
            return
        }
    },[])

    return (
        <MemoOverlay>
            <MemoContainer large={large} darkmode={darkmode}>
                <Button 
                    style={{
                        transform:'scale(.3)',
                        right:'-20px',
                        top:'-20px'
                    }}
                    onClick={() => setOpenMemo(!openMemo)}
                    text={CloseX()}
                />

                <Button 
                    style={{
                        transform:'scale(.3)',
                        right:'10px',
                        top:'-20px'
                    }}
                    onClick={() => setLocalState({...localState, large:!large})}
                    text={large ? InArrows() : OutArrows()}
                />
                {/* {CloseX({width:'20px'})} */}
                <textarea
                    value={text}
                    name='text'
                    onChange={textHandler}
                />
            </MemoContainer>
        </MemoOverlay>
    )
}
// (${({viewScale}) => viewScale});
export default MemoPad