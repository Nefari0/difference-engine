import { useContext } from "react";
import { ViewContext } from "../../Context/view.context";
import { KeyBox } from "../KeyPad/input.styles";
import Button from "../KeyPad/Button";
import { backButton } from "../SVG";
import { BlenderKeys } from "./blender.styles";
import { motor_gen } from "../../../py-scripts/motor-rigging/motor-rig";
import { create_mesh } from "../../../py-scripts/mesh-generator/create_mesh.py";

const BlenderScripts = () => {
    const { setCurrentView } = useContext(ViewContext)
    return (
        <BlenderKeys>
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
        </BlenderKeys>
    )
}

export default BlenderScripts