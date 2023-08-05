import { useContext } from "react";
import { ViewContext } from "../../Context/view.context";
import { KeyBox } from "../KeyPad/input.styles";
import Button from "../KeyPad/Button";
import { backButton } from "../SVG";
import { motor_gen } from "../../../py-scripts/motor-rigging/motor-rig";
import { create_mesh } from "../../../py-scripts/mesh-generator/create_mesh.py";

const BlenderScripts = () => {
    const { setCurrentView } = useContext(ViewContext)
    return (
        <KeyBox>
            <Button
                styles={{
                    right:'0px'
                }}
                text={backButton()}
                onClick={() => setCurrentView(null)}
            />
            <i
            
            >
                motor-rigging
            </i>
        </KeyBox>
    )
}

export default BlenderScripts