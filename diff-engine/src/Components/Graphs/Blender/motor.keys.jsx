import { useState } from "react"
import Button from "../KeyPad/Button"
import InputField from "../KeyPad/InputField"

const MotorKeys = ({copyVal,motor_gen,alertMessage}) => {

    const [objectName,setObjectName] = useState('')
    const pyName = '"' + objectName + '"'

    return (
        <div style={{
            position:'relative',
            zIndex:'0',
        }}>
            <InputField 
                style={{
                    position:'relative',
                    bottom:'-0px',
                    width:'400px'
                }}
                placeholder={'object name'}
                inputClass={'large'}
                onChange={(e) => setObjectName(e.target.value)}
            />
            <Button
                text={'build'}
                style={{
                    top:'75px',
                    fontSize:'20px'
                }}
                buttonClass={'large'}
                onClick={() => copyVal(motor_gen(pyName,null,true),null,alertMessage)}
            />
        </div>
    )
}

export default MotorKeys