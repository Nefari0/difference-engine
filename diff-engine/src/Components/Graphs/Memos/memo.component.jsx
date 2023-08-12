import { useState,useContext,useEffect } from "react";
import { ViewContext } from "../../Context/view.context";
import { MemoContainer } from "./memo.styles";
import Button from "../KeyPad/Button";
import { CloseX,InArrows,OutArrows,PencilNote } from "../SVG";
const defaultNotebook = { text:'' }

const MemoPad = () => {
    
    const NOTEBOOK_NAME = 'DIFF_ENGINE_NOTEBOOK'
    const [localState,setLocalState] = useState({
        large:false,
        text:'',
        minimize:true,
    })

    const {large,text,minimize} = localState
    const { openMemo,setOpenMemo,darkmode } = useContext(ViewContext)
    const savedNoteBook = localStorage.getItem(NOTEBOOK_NAME)

    const textHandler = (e) => {
        e.preventDefault()
        const {name,value} = e.target
        setLocalState({...localState,[name]:value})
        localStorage.setItem(NOTEBOOK_NAME,value)
        console.log(localStorage.DIFF_ENGINE_NOTEBOOK)
    }

    useEffect(() => {
        try {
            if (!savedNoteBook) {
                localStorage.setItem(NOTEBOOK_NAME,JSON.stringify(defaultNotebook))
            } else {
                setLocalState({...localState, text:savedNoteBook})
            }
        } catch (error) {return}
    },[])

    return (
            <MemoContainer large={large} darkmode={darkmode} minimize={minimize}>
                <Button 
                    style={{
                        transform:'scale(.3)',
                        right:'-20px',
                        top:'-20px'
                    }}
                    onClick={() => setLocalState({...localState, minimize:!minimize})}
                    text={minimize ? PencilNote() : CloseX()}
                />

                {!minimize && <>
                    <Button 
                        style={{
                            transform:'scale(.3)',
                            right:'10px',
                            top:'-20px'
                        }}
                        onClick={() => setLocalState({...localState, large:!large})}
                        text={large ? InArrows() : OutArrows()}
                    />
                    <textarea
                        value={text}
                        name='text'
                        onChange={textHandler}
                    />
                </>}
            </MemoContainer>
    )
}
// (${({viewScale}) => viewScale});
export default MemoPad