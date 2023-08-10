import { useState } from "react"
import Button from "../KeyPad/Button"
import InputField from "../KeyPad/InputField"

const RenameKeys = ({copyVal,rename_objects,alertMessage}) => {

    const [objectName,setObjectName] = useState('')

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
                onClick={() => copyVal(rename_objects(objectName),null,alertMessage)}
            />
        </div>
    )
}

export default RenameKeys