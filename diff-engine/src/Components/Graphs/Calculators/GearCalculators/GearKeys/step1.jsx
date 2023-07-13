// Enter number of teeth
import Button from "../../../KeyPad/Button";

const iStyle = {
    width:'300px',
    height:'50px',
    // backgroundColor:'blue',
    fontSize:'30px',
    position:'absolute',
    marginLeft:'100px'
}

const Step1 = (props) => {

    const { gears } = props

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
        </div>
    )
}

export default Step1