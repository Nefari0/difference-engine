import { useContext } from "react";
import { ViewContext } from "../../../../Context/view.context";
import { KeyBox } from "../../../KeyPad/input.styles";
import Button from "../../../KeyPad/Button";
import { uturnArrow } from "../../../SVG";
import InputField from "../../../KeyPad/InputField";

const LeverageKeys = (props) => {

    const { state,setState } = props

    const { F_e,d_e,d_r } = state

    const { setCurrentView,setDisplayKeymap,darkmode } = useContext(ViewContext)

    const input = (prop,e) => {
        e.preventDefault()
        const { value } = e.target
        const intValue = parseInt(value)
        setState({
            ...state,
            [prop]:intValue
        })
    }

    return (
        <KeyBox>
            <Button 
                styles={{right:'10px'}}
                onClick={() => setCurrentView('physics')}
                text={uturnArrow()}
            />

            <Button
                style={{right:'10px',top:'80px'}}
                buttonType={'image'}
                onClick={() => setDisplayKeymap(true)}
                text={'?'}
                buttonClass={'help'}
            />

            <InputField
                onChange={(e) => input('F_e',e)}
                value={F_e}
                name="F_e"
                type="number"
                mathRendering={'F_e = '}
                styles={{width:'160px',color:`${darkmode ? '#fff' : '#555'}`}}
            />

            <InputField
                onChange={(e) => input('d_e',e)}
                value={d_e}
                name="d_e"
                type="number"
                mathRendering={'d_e = '}
                styles={{width:'160px',color:`${darkmode ? '#fff' : '#555'}`}}
            />

            <InputField
                onChange={(e) => input('d_r',e)}
                value={d_r}
                name="d_r"
                type="number"
                mathRendering={'d_r = '}
                styles={{width:'160px',color:`${darkmode ? '#fff' : '#555'}`}}
            />
        </KeyBox>
    )
}

export default LeverageKeys