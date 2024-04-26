import { useContext,useState } from 'react';
import { ViewContext } from '../../Context/view.context';
// import { resetSize } from './viewLogic';
import { devices } from './deviceData'
import { DeviceSelectionContainer } from "./view-settings.styles";
import Button from '../KeyPad/Button';
// onClick={() => resetSize(setViewScale)}
const DeviceSelection = ({setLocalState,localState}) => {

    const { 
        setViewScale
    } = useContext(ViewContext)

    function setDeviceHandler(device,scale) {
        setViewScale(scale)
        localStorage.setItem('screenWidth',parseFloat(scale))
        setLocalState({...localState, selectDeviceMenu:false})
        // setCurrentDevice(device)
    }

    return (
        <DeviceSelectionContainer>
            {devices.map((el,i) => {
                return (
                    <li key={i}>
                        <Button
                            text={el.deviceName}
                            buttonClass={'tiny'}
                            // onClick={(e) => setDeviceHandler(el.scale)}
                            onClick={() => setDeviceHandler(el.deviceName,el.scale)}
                            // selected={currentDevice === el.deviceName}
                            // styles={{
                            //     fontSize:`${currentDevice === el.deviceName ? '10px' : '12px'}`
                            // }}
                        />
                    </li>
                )
            })}
        </DeviceSelectionContainer>
    )
}

export default DeviceSelection