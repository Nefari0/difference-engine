import { useContext } from "react";
import { ViewContext } from "../../Context/view.context";
import {
    InputWrapper,
    BaseInput,
    ParamInput,
    DisplayScreen
} from "./input.styles";
import CustomMath from "./CostomMath";

const INPUT_CLASSES = {
    small:'small',
    large:'large'
}

const getInputClass = (inputClass = INPUT_CLASSES.small) =>
    ({
        [INPUT_CLASSES.small]:ParamInput,
        [INPUT_CLASSES.large]:DisplayScreen
    }[inputClass]);


const InputField = (props) => {
    const { 
        type,
        inputClass,
        styles,
        value,
        name,
        i,
        mathRendering,
        executionMethod,
        iStyle,
        placeholder,
        ...otherProps
    } = props
    const CustomInput = getInputClass(inputClass);
    const { darkmode } = useContext(ViewContext)
    return (
        <InputWrapper
            style={styles}
            inputClass={inputClass}
            onSubmit={(e) => executionMethod(value,null,e)}
        >
            {i && <i style={iStyle ? iStyle : {color:`${darkmode?'#fff':'#333'}`,marginRight:'4px'}}>{i}</i>}
            {mathRendering &&  <CustomMath>{mathRendering}</CustomMath>}
            <CustomInput
                darkmode={darkmode}
                type={type}
                {...otherProps}
                value={value}
                name={`${name}`}
                placeholder={placeholder}
            />
        </InputWrapper>
    )
}

export default InputField