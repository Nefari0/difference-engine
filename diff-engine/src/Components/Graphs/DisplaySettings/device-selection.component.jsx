import { useContext,useState } from 'react';
import { ViewContext } from '../../Context/view.context';
// import { resetSize } from './viewLogic';
import { devices } from './deviceData'
import { DeviceSelectionContainer } from "./view-settings.styles";
import Button from '../KeyPad/Button';
import { backgroundColors } from '../../../global.styles';
const DeviceSelection = ({setLocalState,localState}) => {

    const { 
        setViewScale,
        darkmode
    } = useContext(ViewContext)

    function setDeviceHandler(scale) {
        setViewScale(scale)
        localStorage.setItem('screenWidth',parseFloat(scale))
        setLocalState({...localState, selectDeviceMenu:false})
    }

    return (
        <DeviceSelectionContainer darkmode={darkmode}>
            {devices.map((el,i) => {
                return (
                    <Button
                        text={el.deviceName}
                        buttonClass={'tiny'}
                        onClick={() => setDeviceHandler(el.scale)}
                        key={i}
                    />
                )
            })}
            <Button
                text={'Close'}
                buttonClass={'tiny'}
                onClick={() => setLocalState({...localState, selectDeviceMenu:false})}
                styles={{
                    backgroundColor:backgroundColors.blue,
                }}
            />
        </DeviceSelectionContainer>
    )
}

export default DeviceSelection