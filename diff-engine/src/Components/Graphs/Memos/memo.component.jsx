import { useState,useContext,useEffect } from "react";
import { ViewContext } from "../../Context/view.context";
import { MemoContainer } from "./memo.styles";
import Button from "../KeyPad/Button";
import { CloseX,InArrows,OutArrows,PencilNote } from "../SVG";
const defaultNotebook = { text:'' }

const MemoPad = () => {
    
    const NOTEBOOK_NAME = 'DIFF_ENGINE_NOTEBOOK'
    const [localState,setLocalState] = useState({
        text:'',
    })

    const {text} = localState
    const { darkmode,setOpenMemo } = useContext(ViewContext)
    const savedNoteBook = localStorage.getItem(NOTEBOOK_NAME)

    const textHandler = (e) => {
        e.preventDefault()
        const {name,value} = e.target
        setLocalState({...localState,[name]:value})
        localStorage.setItem(NOTEBOOK_NAME,value)
    }

    useEffect(() => {
        try {
            if (!savedNoteBook) {
                localStorage.setItem(NOTEBOOK_NAME,defaultNotebook)
            } else {
                setLocalState({...localState, text:savedNoteBook})
            }
        } catch (error) {return}
    },[])

    return (
            <MemoContainer darkmode={darkmode}>
                <Button 
                    styles={{
                        position:'relative',    
                        width:'50px',
                        height:'50px'
                    }}
                    onClick={() => setOpenMemo(false)}
                    text={CloseX()}
                    buttonClass={'translucent'}
                />

                <textarea
                    value={text}
                    name='text'
                    onChange={textHandler}
                />
            
            </MemoContainer>
    )
}
// (${({viewScale}) => viewScale});
export default MemoPad