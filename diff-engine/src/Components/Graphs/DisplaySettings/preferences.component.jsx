import { useContext,useState } from "react";
import { ViewContext } from "../../Context/view.context";
// import { OverLay } from "../../../App.styles";
import { ViewControlContainer,ViewControllerOverlay } from "./view-settings.styles"
import Button from "../KeyPad/Button";
import DeviceSelection from "./device-selection.component";
import { zoomIn,zoomOut } from "../SVG";
import { resetSize,changeSize } from "./viewLogic";

const zoomButton = {width:'40px',height:'40px'}
const wideButton = {width:'95%',height:'25px'}

const ViewController = () => {
    
    const {
        viewPrefs,openViewPrefs,
        viewScale,setViewScale,
        darkmode,
    } = useContext(ViewContext)

    const [localState,setLocalState] = useState({
        selectDeviceMenu:false
    })

    const {
        selectDeviceMenu
    } = localState

    return (
        <ViewControllerOverlay>

            {selectDeviceMenu && <DeviceSelection localState={localState} setLocalState={setLocalState} />}
            
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
                    onClick={() => resetSize(setViewScale,.5)}
                    styles={wideButton}
                    buttonClass={'tiny'}
                    text={'reset size'}
                />

                <Button 
                    text={'my device'}
                    buttonClass={'tiny'}
                    styles={wideButton}
                    onClick={() => setLocalState({...localState,selectDeviceMenu:!selectDeviceMenu})}
                />

                <Button
                    onClick={() => openViewPrefs(!viewPrefs)}
                    styles={wideButton}
                    buttonClass={'tiny'}
                    text={'done'}
                />

            </ViewControlContainer>
        </ViewControllerOverlay>
    )
}

export default ViewController