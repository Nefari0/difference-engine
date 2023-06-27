import { useContext } from "react";
import { ViewContext } from "../../../../Context/view.context";
import { KeyBox } from "../../../KeyPad/input.styles";
import Button from "../../../KeyPad/Button";
import { uturnArrow } from "../../../SVG";
import InputField from "../../../KeyPad/InputField";

const LeverageKeys = () => {

    const { setCurrentView } = useContext(ViewContext)

    return (
        <KeyBox>
            <Button 
                styles={{right:'10px'}}
                onClick={() => setCurrentView('physics')}
                text={uturnArrow()}
            />

            <InputField
                inputClass={'small'}
                
                type='number'
                // onChange={(e) => input(e)}
                // value={mathFunc}
                name="mathFunc"
                i={'fulcrum = '}
            />
        </KeyBox>
    )
}

export default LeverageKeys