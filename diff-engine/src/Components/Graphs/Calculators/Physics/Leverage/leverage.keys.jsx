import { useContext } from "react";
import { ViewContext } from "../../../../Context/view.context";
import { KeyBox,InfoMessage } from "../../../KeyPad/input.styles";
import Button from "../../../KeyPad/Button";
import { uturnArrow } from "../../../SVG";
import InputField from "../../../KeyPad/InputField";
import { InlineMath } from "react-katex";

const LeverageKeys = (props) => {

    const { state,setState } = props

    const { F_e,d_e,leverTotalLength } = state

    const { 
        setCurrentView,
        setDisplayKeymap,
        displayKeymap,
        darkmode,
    } = useContext(ViewContext)

    const input = (prop,e) => {
        e.preventDefault()
        const { value } = e.target
        const intValue = parseFloat(value)
        setState({
            ...state,
            [prop]:intValue
        })
    }

    return (
        <KeyBox>

            {displayKeymap && 
                <>
                    <InfoMessage 
                        style={{top:'-250px',left:'100px',borderRadius:'20px 0px 20px 20px'}}
                    >
                        <InlineMath>{'F_r'}</InlineMath> = output force (resistance)<br/> 
                    </InfoMessage>

                    <InfoMessage 
                        style={{top:'-400px',left:'150px',borderRadius:'20px 20px 20px 0px'}}
                    >
                        <InlineMath>{'F_e'}</InlineMath> = input force (effort) <br/> 
                    </InfoMessage>
                </>
            }

            <Button 
                styles={{right:'10px',zIndex:'0'}}
                onClick={() => setCurrentView('physics')}
                text={uturnArrow()}
            />

            <Button
                style={{right:'10px',top:'80px',zIndex:'0'}}
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
                styles={{width:'240px',color:`${darkmode ? '#fff' : '#555'}`}}
            />
            {displayKeymap && <InfoMessage style={{left:'230px',top:'20px',zIndex:'2',fontSize:'10px'}}>Force appied (input)</InfoMessage>}

            <InputField
                onChange={(e) => input('d_e',e)}
                value={d_e}
                name="d_e"
                type="number"
                mathRendering={'d_e = '}
                styles={{width:'240px',color:`${darkmode ? '#fff' : '#555'}`,zIndex:'0'}}
            />

            {displayKeymap && 
                <InfoMessage 
                    style={{left:'240px',top:'80px',zIndex:'20',fontSize:'10px'}}
                >
                    Distance of input to fulcrum<br/>
                    <InlineMath>{'(F_e)'}</InlineMath>
                </InfoMessage>}

            <InputField
                onChange={(e) => input('leverTotalLength',e)}
                value={leverTotalLength}
                name="leverTotalLength"
                type="number"
                mathRendering={'d_r+d_e = '}
                styles={{width:'200px',color:`${darkmode ? '#fff' : '#555'}`}}
            />
            {displayKeymap && 
                <InfoMessage 
                    style={{left:'253px',top:'160px',zIndex:'20',fontSize:'10px'}}
                >
                    Total length of lever<br/>
                    <InlineMath>{'(d_r)'}</InlineMath> = distance of output to fulcrum
                </InfoMessage>}

        </KeyBox>
    )
}

export default LeverageKeys