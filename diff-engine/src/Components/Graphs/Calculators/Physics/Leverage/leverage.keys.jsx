import { useContext } from "react";
import { ViewContext } from "../../../../Context/view.context";
import { KeyBox,InfoMessage } from "../../../KeyPad/input.styles";
import Button from "../../../KeyPad/Button";
import { uturnArrow } from "../../../SVG";
import InputField from "../../../KeyPad/InputField";
import { InlineMath } from "react-katex";

const LeverageKeys = (props) => {

    const { state,setState } = props

    const { F_e,d_e,d_r } = state

    const { 
        setCurrentView,
        setDisplayKeymap,
        displayKeymap,
        darkmode,
    } = useContext(ViewContext)

    const input = (prop,e) => {
        e.preventDefault()
        const { value } = e.target
        const intValue = parseInt(value)
        setState({
            ...state,
            [prop]:intValue
        })
    }

    const messageStyle={zIndex:'2',top:'-200px',left:'100px',width:'300px',transform:'rotateY(180deg'}

    return (
        <KeyBox>

            {/* {displayKeymap && 
                <InfoMessage style={{zIndex:'2',top:'-200px',left:'100px',maxWidth:'300px',transform:'rotateY(180deg'}}>
                    <p style={{transform:'rotateY(180deg)'}}>
                        Leverage/Force multiplication:
                    </p>
                    <InlineMath>{'F_r'}</InlineMath>
                </InfoMessage>
            } */}

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
                styles={{width:'160px',color:`${darkmode ? '#fff' : '#555'}`}}
            />
            {displayKeymap && <InfoMessage style={{left:'188px',top:'20px',zIndex:'2',fontSize:'10px'}}>Force appied (input)</InfoMessage>}

            <InputField
                onChange={(e) => input('d_e',e)}
                value={d_e}
                name="d_e"
                type="number"
                mathRendering={'d_e = '}
                styles={{width:'160px',color:`${darkmode ? '#fff' : '#555'}`,zIndex:'0'}}
            />

            {displayKeymap && 
                <InfoMessage 
                    style={{left:'200px',top:'80px',zIndex:'20',fontSize:'10px'}}
                >
                    Distance of force to fulcrum
                </InfoMessage>}

            <InputField
                onChange={(e) => input('d_r',e)}
                value={d_r}
                name="d_r"
                type="number"
                mathRendering={'d_r = '}
                styles={{width:'160px',color:`${darkmode ? '#fff' : '#555'}`}}
            />
            {displayKeymap && 
                <InfoMessage 
                    style={{left:'220px',top:'140px',zIndex:'20',fontSize:'10px'}}
                >
                    Distance of fulcrum to resistance
                    <InlineMath>{'(F_r)'}</InlineMath>
                </InfoMessage>}

        </KeyBox>
    )
}

export default LeverageKeys