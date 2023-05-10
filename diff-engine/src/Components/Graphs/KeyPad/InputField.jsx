import { useContext } from "react";
import { ViewContext } from "../../Context/view.context";
import {
    InputWrapper,
    BaseInput,
    ParamInput,
    DisplayScreen
} from "./input.styles";

const INPUT_CLASSES = {
    small:'small',
    large:'large'
}

const getInputClass = (inputClass = INPUT_CLASSES.small) =>
    ({
        [INPUT_CLASSES.small]:ParamInput,
        [INPUT_CLASSES.large]:DisplayScreen
    }[inputClass]);


const InputField = ({ type,inputClass,styles,value,name,i,...otherProps}) => {
    const CustomInput = getInputClass(inputClass);
    const { darkmode } = useContext(ViewContext)
    return (
        <InputWrapper
            style={styles}
            inputClass={inputClass}
        >
            {i && <i style={{color:`${darkmode?'#fff':'#333'}`,marginRight:'4px'}}>{i}</i>}
            <CustomInput
                darkmode={darkmode}
                type='text'
                // onChange={inputHandler}
                {...otherProps}
                value={value}
                name={`${name}`}
            />
        </InputWrapper>
    )
}

export default InputField