import { useContext,useState,useEffect } from "react";
import { ViewContext } from "../../Context/view.context";
import Button from "../KeyPad/Button";
import { backButton,uturnArrow } from "../SVG";
import { BlenderKeys } from "./blender.styles";
import MotorKeys from "./motor.keys";
import { motor_gen } from "../../../py-scripts/motor-rigging/motor-rig";
import { create_mesh } from "../../../py-scripts/mesh-generator/create_mesh.py";
import { studio_setup } from "../../../py-scripts/backdrop-generator/backdrop.py";

const alertMessage = 'code has been copied to the clipboard'

const BlenderScripts = (props) => {

    const { close,state,setState } = props
    const [localState,setLocalState] = useState({
        selectedScript:null
    })
    const { selectedScript } = localState
    const { darkmode,setAlert } = useContext(ViewContext)
    const copyVal = (val,name,message) => {
        navigator.clipboard.writeText(val)
        setAlert(message)
    }

    useEffect(() => {
        setState({...state,displayInput:false})
    },[])
    
    return (
        <BlenderKeys darkmode={darkmode}>
            <Button
                styles={{
                    right:'0px',
                    zIndex:'1'
                }}
                text={!selectedScript ? backButton() : uturnArrow()}
                onClick={(e) => {!selectedScript ? close(e) : setLocalState({...localState,selectedScript:null})}}
            />
            {!selectedScript &&
                <>
                    <a onClick={() => setLocalState({...localState, selectedScript:'motors'})}>motor-rigging</a>

                    <a onClick={() => copyVal(create_mesh(),null,alertMessage)}>create mesh</a>

                    <a onClick={() => copyVal(studio_setup(),null,alertMessage)}>studio setup</a>
                </>
            }

            {selectedScript === 'motors' && 
                <MotorKeys 
                    copyVal={copyVal} 
                    motor_gen={motor_gen} 
                    alertMessage={alertMessage}
            />}
            
        </BlenderKeys>
    )
}

export default BlenderScripts