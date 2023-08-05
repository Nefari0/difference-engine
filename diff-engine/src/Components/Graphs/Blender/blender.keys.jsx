import { useContext } from "react";
import { ViewContext } from "../../Context/view.context";
import { KeyBox } from "../KeyPad/input.styles";
import Button from "../KeyPad/Button";
import { backButton } from "../SVG";
import { BlenderKeys } from "./blender.styles";
import { motor_gen } from "../../../py-scripts/motor-rigging/motor-rig";
import { create_mesh } from "../../../py-scripts/mesh-generator/create_mesh.py";
import { studio_setup } from "../../../py-scripts/backdrop-generator/backdrop.py";

const alertMessage = 'code has been copied to the clipboard'

const BlenderScripts = () => {
    const { setCurrentView,darkmode,alert,setAlert } = useContext(ViewContext)
    const copyVal = (val,name,message) => {
        navigator.clipboard.writeText(val)
        setAlert(message)
    }
    return (
        <BlenderKeys darkmode={darkmode}>
            <Button
                styles={{
                    right:'0px'
                }}
                text={backButton()}
                onClick={() => setCurrentView(null)}
            />
            <a
            
            >
                motor-rigging
            </a>

            <a
            
            >
                create mesh
            </a>

            <a
                onClick={() => copyVal(studio_setup(),null,alertMessage)}
            >
                studio setup
            </a>
        </BlenderKeys>
    )
}

export default BlenderScripts