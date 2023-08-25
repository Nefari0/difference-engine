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

            <NumberPad
                state={state}
                setState={setState}
            />

            <Button 
                onClick={() => setCurrentView('converters')}
                styles={{right:'10px'}}
                text={uturnArrow()}
            />

        </KeyBox>
    )
}

export default FractionKeys