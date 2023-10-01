import {useEffect,useContext} from "react";
import { ViewContext } from "../../../../Context/view.context";
import { KeyBox } from "../../../KeyPad/input.styles";
import Button from "../../../KeyPad/Button";
import { uturnArrow } from "../../../SVG";
import { NumberPad } from "../../../KeyPad/NumberPad/nums.component";

const FractionKeys = (props) => {

    const {
        state,
        setState,
    } = props
    const { mathFunc } = state

    const { setCurrentView } = useContext(ViewContext)

    useEffect(() => {
        setState({
            ...state,
            mathFunc:`.25`,
            displayInput:false,
            polars:false
        })
    },[])

    return (
        <KeyBox>

            {mathFunc.split('')[0] === '.' ? // Force users to include decimal point 
            <NumberPad
                state={state}
                setState={setState}
            />
            :
            <Button
                onClick={() => setState({...state,mathFunc:'.'})}
                styles={{fontSize:'30px',left:'0'}}
                text={'.'}
            />
            }

            <Button 
                onClick={() => setCurrentView('converters')}
                styles={{right:'10px'}}
                text={uturnArrow()}
            />

        </KeyBox>
    )
}

export default FractionKeys