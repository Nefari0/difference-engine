import { useState,useEffect,useContext } from "react";
import { KeyBox,Param,ParamInput } from "../../KeyPad/keypad.styles";
import { backButton,ExecuteButton } from "../../SVG";
import Button from "../../KeyPad/Button";

import { ViewContext } from "../../../Context/view.context";

const eButton = {
    right:'10px',
    top:'5px',
}
const backB = {
    right:'10px',
    top:'85px'
}

const ParabKeys = (props) => {

    const { darkmode } = useContext(ViewContext)

    const {
        state,
        setState,
        linearVector,
        close
    } = props

    const [localState,setLocalState] = useState({
        a:'1',
        h:'0',
        k:'0',
    })
    const {a,h,k} = localState

    useEffect(() => {
        setState({
            ...state,
            mathFunc:`y = a*(x-h)^2 + k`,
            displayInput:false,
        })
    },[])

    const p = 1/(4*a)
    const focus = [parseFloat(h),parseFloat(k)+p,'blue']

    const directrix = [
        h-2,
        k-p,
        'orange',
        '200',
        '2',
        '0'
    ]

    const vertex = [parseFloat(h),parseFloat(k),'green']

    const otherPlots = [focus,vertex,directrix]

    const y = `(${a}*(x-${h})^2 + ${k})`

    const localInput = (e) => {
        e.preventDefault()
        const {name,value} = e.target
        setLocalState({...localState,[name]:value})
    }

    return (
        <KeyBox style={{color:`${darkmode ? '#fff':'black'}`}}>
            <Param>
                <i style={{marginRight:'6px'}}>a</i>
                <ParamInput
                    type="text"
                    onChange={localInput}
                    value={a}
                    name="a"
                />
            </Param>

            <Param style={{top:'60px'}}>
                <i style={{marginRight:'6px'}}>h</i>
                <ParamInput
                    type="text"
                    onChange={localInput}
                    value={h}
                    name="h"
                />
            </Param>

            <Param style={{top:'120px'}}>
                <i style={{marginRight:'6px'}}>k</i>
                <ParamInput
                    type="text"
                    onChange={localInput}
                    value={k}
                    name="k"
                />
            </Param>

            <Button
                onClick={() => {linearVector(y,otherPlots)}}
                styles={eButton}
                text={ExecuteButton()}
            />

            <Button
                onClick={(e) => close(e)}
                styles={backB}
                text={backButton()}
            />

        </KeyBox>
    )
}

export default ParabKeys