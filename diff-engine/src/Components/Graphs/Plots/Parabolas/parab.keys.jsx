import { useState,useEffect,useContext } from "react";
import { KeyBox,Param,ParamInput,BaseButton,LargeButton } from "../../KeyPad/keypad.styles";
import { backButton,ExecuteButton } from "../../SVG";

const backB = {
    right:'0px'
}

const ParabKeys = (props) => {

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
        <KeyBox>
            <Param>
                <i>a</i>
                <ParamInput
                    type="text"
                    onChange={localInput}
                    value={a}
                    name="a"
                />
            </Param>

            <Param style={{top:'60px'}}>
                <i>h</i>
                <ParamInput
                    type="text"
                    onChange={localInput}
                    value={h}
                    name="h"
                />
            </Param>

            <Param style={{top:'120px'}}>
                <i>k</i>
                <ParamInput
                    type="text"
                    onChange={localInput}
                    value={k}
                    name="k"
                />
            </Param>

            <LargeButton
                onClick={() => {linearVector(y,otherPlots)}}
            >
                {ExecuteButton()}
            </LargeButton>

            <BaseButton
                onClick={(e) => close(e)}
                style={backB}
            >
                {backButton()}
            </BaseButton>
        </KeyBox>
    )
}

export default ParabKeys