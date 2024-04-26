import { useContext,useState } from 'react';
import { ViewContext } from '../../Context/view.context';
// import { resetSize } from './viewLogic';
import { devices } from './deviceData'
import { DeviceSelectionContainer } from "./view-settings.styles";
import Button from '../KeyPad/Button';
const DeviceSelection = ({setLocalState,localState}) => {

    const { 
        setViewScale
    } = useContext(ViewContext)

    function setDeviceHandler(scale) {
        setViewScale(scale)
        localStorage.setItem('screenWidth',parseFloat(scale))
        setLocalState({...localState, selectDeviceMenu:false})
    }

    return (
        <DeviceSelectionContainer>
            {devices.map((el,i) => {
                return (
                    <Button
                        text={el.deviceName}
                        buttonClass={'tiny'}
                        onClick={() => setDeviceHandler(el.deviceName,el.scale)}
                        key={i}
                    />
                )
            })}
        </DeviceSelectionContainer>
    )
}

export default DeviceSelection