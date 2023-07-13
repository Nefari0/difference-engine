import Button from "../../../KeyPad/Button"

const step2 = (props) => {

    const { state,setState } = props

    return (
        <div>
            <Button
                onClick={() => setState({...state,gearBuildingStep:'step_3'})}
                style={{
                    right:'10px',top:'90px',
                    width:'300px',fontSize:'30px',
                    fontWeight:'200'
                }}
                text={'NEXT'}
                p={'Next'}
                buttonClass={'large'}
            />
        </div>
    )
}

export default step2