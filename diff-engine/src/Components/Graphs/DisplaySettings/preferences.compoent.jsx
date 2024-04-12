import { useContext } from "react";
import { ViewContext } from "../../Context/view.context";
import { OverLay } from "../../../App.styles";
import { ViewControlContainer } from "./view-settings.styles"
import Button from "../KeyPad/Button";
import { zoomIn,zoomOut } from "../SVG";
import { resetSize,changeSize } from "./viewLogic";

const zoomButton = {width:'40px',height:'40px'}
const wideButton = {width:'95%',height:'25px'}

const ViewController = () => {


    
    const {
        viewPrefs,openViewPrefs,
        viewScale,setViewScale,
        darkmode,
        fullscreen,setFullScreen
    } = useContext(ViewContext)
    
    const saveSettings = (prop,val,setFunction) => {
        localStorage.setItem(`${prop}`,!val)
        setFunction(!val)
    }

    return (
        <OverLay>
            <ViewControlContainer darkmode={darkmode}>
                <Button
                    onClick={(e) => changeSize(e,viewScale,.01,setViewScale)}
                    styles={zoomButton}
                    text={zoomIn()}
                />
                <Button
                    onClick={(e) => changeSize(e,viewScale,-.01,setViewScale)}
                    styles={zoomButton}
                    text={zoomOut()}
                />
                <Button
                    onClick={() => resetSize(setViewScale)}
                    styles={wideButton}
                    buttonClass={'tiny'}
                    text={'reset size'}
                />

                <Button
                    onClick={() => saveSettings('FULLSCREEN',fullscreen,setFullScreen)}
                    styles={wideButton}
                    text={`${fullscreen ? 'fullscreen' : 'partial'}`}
                />

                <Button
                    onClick={() => openViewPrefs(!viewPrefs)}
                    styles={wideButton}
                    buttonClass={'tiny'}
                    text={'close'}
                />

            </ViewControlContainer>
        </OverLay>
    )
}

export default ViewController