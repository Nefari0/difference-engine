import { useState,useContext } from "react";
import { ViewContext } from "../../Context/view.context";
import { MemoContainer,MemoOverlay } from "./memo.styles";
import Button from "../KeyPad/Button";
import { CloseX,InArrows,OutArrows } from "../SVG";

const MemoPad = () => {

    const [localState,setLocalState] = useState({
        large:false,
    })

    const { openMemo,setOpenMemo } = useContext(ViewContext)

    const {large} = localState

    return (
        <MemoOverlay>
            <MemoContainer large={large}>
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
                <textarea/>
            </MemoContainer>
        </MemoOverlay>
    )
}
// (${({viewScale}) => viewScale});
export default MemoPad