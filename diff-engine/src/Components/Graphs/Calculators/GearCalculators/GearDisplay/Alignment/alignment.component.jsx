import { ToothAlignmentWrapper } from "./alignment.styles";

const ToothAlignment = (props) => {

    const { mappedGears2,state } = props
    const { degrees,baseDiameter } = state

    return (
        <ToothAlignmentWrapper degrees={degrees}>
            <div style={{
                position:'absolute',
                width:`${baseDiameter/2}px`,
                height:'0px',
                top:'0px',
                backgroundColor:'blue',
            }}>
                {mappedGears2}
            </div>
        </ToothAlignmentWrapper>
    )
}

export default ToothAlignment