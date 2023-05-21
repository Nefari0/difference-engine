import { useState,useEffect,useContext } from "react";
import { KeyBox } from "../../KeyPad/input.styles";
import { uturnArrow,ExecuteButton } from "../../SVG";
import Button from "../../KeyPad/Button";
import InputField from "../../KeyPad/InputField";

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

    const { darkmode,setCurrentView } = useContext(ViewContext)

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
            polars:false
        })
        // linearVector(y,otherPlots)
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

    const inputMap = Object.keys(localState).map((key,i) => {
        return (
            <InputField
                styles={{top:`${(i < 1 ? i : i*60)}px`}}
                key={i}
                value={localState[key]}
                onChange={localInput}
                i={`${key} = `}
                name={key}
                inputClass={'small'}
            />
        )
    })

    return (
        <KeyBox style={{color:`${darkmode ? '#fff':'black'}`}}>

            {inputMap}

            <Button
                onClick={() => {linearVector(y,otherPlots)}}
                styles={eButton}
                text={ExecuteButton()}
            />

            <Button
                onClick={(e) => setCurrentView('plots')}
                styles={backB}
                text={uturnArrow()}
            />

        </KeyBox>
    )
}

export default ParabKeys