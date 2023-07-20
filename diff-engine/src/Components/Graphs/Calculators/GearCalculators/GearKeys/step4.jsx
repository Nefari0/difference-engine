// Copy profile generating python script
import Button from '../../../KeyPad/Button'
import { Py1 } from '../../../../../py-scripts/involute-gear-calculator/gear.py1'
const Step4 = (props) => {

    const { state, pitch, copyVal, setState } = props
    const { mathFunc,createMotor } = state

    const copyScriptMessage = `A Python script that will generate your ${mathFunc} tooth gear tooth profile has been copied to clipboard. Paste and run this script in Blender's script editor to generate your gear tooth profile`
    const copyPitch = `${pitch} saved to clipbaord`

    return (
        <div>
            <Button
                styles={{top:'170px',left:'0px',width:'170px',fontSize:'15px',zIndex:'1'}}
                onClick={() => copyVal(pitch,'noticeContent',copyPitch)}
                text={`pitch = ${pitch}^\\circ`}
                buttonType={'image'}
                p={'copy pitch'}
            />
            <Button
                styles={{top:'90px',left:'0px',width:'170px',fontSize:'15px',zIndex:'2'}}
                onClick={() => copyVal(Py1(state),'alert',copyScriptMessage)}
                text={`Generate Profile`}
                buttonClass={'large'}
                p={'Save profile generator script'}
            />

            {/* ADDING A MOTOR IN BLENDER. THERE ARE CURRENTLY BUGS THAT NEED TO BE IRONED OUT BEFORE THIS CAN BE ADDED */}
            {/* <input type="checkbox" onChange={() => setState({...state,createMotor:!createMotor})}></input>
            <label> add motor for testing in Blender?</label><br></br> */}

        </div>
    )
}

export default Step4