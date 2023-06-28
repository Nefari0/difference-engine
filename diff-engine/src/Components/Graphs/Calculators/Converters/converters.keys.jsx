import { useContext,useEffect } from "react";
import { ViewContext } from "../../../Context/view.context";
import { KeyBox } from "../../KeyPad/input.styles";
import Button from "../../KeyPad/Button";
import { backButton,beaker } from "../../SVG";

const Converters = (props) => {

    const  { close,state,setState } = props

    const { setCurrentView,setDisplayKeymap,darkmode } = useContext(ViewContext)

    useEffect(() => {setState({...state,displayInput:false})},[])

    return (
        <KeyBox>
            <Button
                styles={{position:'absolute',left:`0px`,fontSize:'32px'}}
                onClick={() => setCurrentView('unit_converter')}
                // buttonType={'image'}
                text={beaker()}
                p={'Unit Converter'}
            />

            <Button
                styles={{position:'absolute',left:'0px',top:`${80}px`,zIndex:'3',fontSize:'32px'}}
                onClick={(e) => setCurrentView('fracs')}
                darkmode={darkmode}
                text={`\\frac{${'a'} }{${'b'}}`}
                buttonType={'image'}
                p={'Decimal to fraction'}
            />

            <Button
                styles={{left:'0px',top:`${160}px`,zIndex:'2',fontSize:'24px'}}
                onClick={(e) => setCurrentView('percentages')}
                darkmode={darkmode}
                text={`\\%`}
                p={'Percenage Calculator'}
                buttonType={'image'}
            />

            <Button
                style={{right:'10px',top:'0px'}}
                // text={backButton()}
                text={backButton()}
                p={'Home'}
                onClick={(e) => close(e)}
            />

            <Button
                style={{right:'10px',top:'80px',zIndex:'0'}}
                buttonType={'image'}
                text={'?'}
                onClick={(e) => setDisplayKeymap(true)}
                buttonClass={'help'}
            />
        </KeyBox>
    )
}

export default Converters