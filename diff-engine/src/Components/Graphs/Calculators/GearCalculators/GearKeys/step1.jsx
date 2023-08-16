// Enter number of teeth
import { useContext } from "react";
import { ViewContext } from "../../../../Context/view.context";
import Button from "../../../KeyPad/Button";

const video_url = 'https://vimeo.com/852046580'
// const iStyle = {
//     width:'300px',
//     height:'50px',
//     // backgroundColor:'blue',
//     fontSize:'30px',
//     position:'absolute',
//     marginLeft:'100px'
// }

const Step1 = (props) => {

    const { gears } = props

    const { openPlayer,setOpenPlayer } = useContext(ViewContext)

    return (
        <div>
            <Button 
                onClick={() => gears(0)}
                style={{
                    left:'10px',top:'90px',
                    width:'300px',fontSize:'30px',
                    fontWeight:'200'
                }}
                text={'NEXT'}
                buttonClass={'large'}
                />
                <i
                    style={{
                        position:'absolute',
                        top:'200px',
                        left:'0px',
                        // color:'blue',
                        fontSize:'20px',
                        cursor:'pointer'
                    }}
                    onClick={() => setOpenPlayer(video_url)}
                >
                    gears built with this calculator
                </i>
        </div>
    )
}

export default Step1