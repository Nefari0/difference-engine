import { useContext,useState,useEffect } from "react";
import { ViewContext } from "../../Context/view.context";
import Button from "../KeyPad/Button";
import { backButton,uturnArrow } from "../SVG";
import { BlenderKeys } from "./blender.styles";
import MotorKeys from "./motor.keys";
import RenameKeys from "./rename.keys";
import { motor_gen } from "../../../py-scripts/motor-rigging/motor-rig";
import { create_mesh } from "../../../py-scripts/mesh-generator/create_mesh.py";
import { studio_setup } from "../../../py-scripts/backdrop-generator/backdrop.py";
import { rename_objects } from "../../../py-scripts/rename-objects/rename.py";
import { verts_to_point } from "../../../py-scripts/verts-to-point/verts_to_point.py.jsx";
import BlenderLink from "./BlenderItem/item.component";

const alertMessage = 'code has been copied to the clipboard'

const BlenderScripts = (props) => {

    const { close,state,setState } = props
    const [localState,setLocalState] = useState({
        selectedScript:null
    })
    const { selectedScript } = localState
    const { darkmode,setAlert,displayKeymap,setDisplayKeymap } = useContext(ViewContext)
    const copyVal = (val,name,message) => {
        navigator.clipboard.writeText(val)
        setAlert(message)
    }

    useEffect(() => {
        setState({...state,displayInput:false})
    },[])
    
    return (
        <BlenderKeys 
            darkmode={darkmode}
            displayKeymap={displayKeymap}
        >
            <Button
                styles={{
                    top:'4px',
                    right:'4px',
                    zIndex:'1'
                }}
                text={!selectedScript ? backButton() : uturnArrow()}
                onClick={(e) => {!selectedScript ? close(e) : setLocalState({...localState,selectedScript:null})}}
            />

            <Button
                styles={{
                    right:'4px',
                    zIndex:'1',
                    top:'84px'
                }}
                buttonClass={'help'}
                text={'?'}
                buttonType={'image'}
                onClick={(e) => setDisplayKeymap(!displayKeymap)}
            />
            
            {!selectedScript &&
                <>
                    <BlenderLink
                        onClick={() => setLocalState({...localState, selectedScript:'motors'})}
                        title={'motor-rigging'}
                        description={'Rig an object with a motor by object name for simulations'}

                    />

                    <BlenderLink
                        onClick={() => copyVal(create_mesh(),null,alertMessage)}
                        title={'create mesh'}
                        description={'create mesh (requires additional parameters)'}
                    />

                    <BlenderLink
                        onClick={() => copyVal(studio_setup(),null,alertMessage)}
                        title={'studio setup'}
                        description={'Instantly add a backdrop with lighting and a camera. The size is scalable'}
                    />

                    <BlenderLink
                        onClick={() => setLocalState({...localState, selectedScript:'rename'})}
                        title={'rename-objects'}
                        description={'Renane selected objects'}
                    />

                    <BlenderLink
                        onClick={() => copyVal(verts_to_point(),null,alertMessage)}
                        title={'verts to point'}
                        description={'Move selected vertices to given coordinate. default value: x = 0'}
                    />
                </>
            }

            {selectedScript === 'motors' &&
                <MotorKeys 
                    functionParameters={{child:null,motor:true}}
                    copyVal={copyVal} 
                    motor_gen={motor_gen} 
                    alertMessage={alertMessage}
            />}

            {selectedScript === 'rename' &&
                <RenameKeys
                    functionParameters={{child:null,motor:true}}
                    copyVal={copyVal} 
                    rename_objects={rename_objects}
                    alertMessage={alertMessage}
            />}
            
        </BlenderKeys>
    )
}

export default BlenderScripts