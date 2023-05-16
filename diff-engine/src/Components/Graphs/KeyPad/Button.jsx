import { useContext } from "react";
import { ViewContext } from "../../Context/view.context";

import CustomMath from "./CostomMath";
import {
    TinyButton,
    BaseButton,
    LargeButton,
    Buttoni,
    AllClearButton,
    EqualButton
} from "./input.styles";

export const BUTTON_CLASSES = {
    base:'base',
    large:'large',
    tiny:'tiny',
    rare:'rare',
    equal:'equal',
    all_clear:'all_clear'
}

const getButtonClass = (buttonClass = BUTTON_CLASSES.base) =>
  ({
    [BUTTON_CLASSES.tiny]: TinyButton,
    [BUTTON_CLASSES.base]: BaseButton,
    [BUTTON_CLASSES.large]: LargeButton,
    [BUTTON_CLASSES.all_clear]:AllClearButton,
    [BUTTON_CLASSES.equal]:EqualButton
  }[buttonClass]);

export const BUTTON_TYPE = {
    image:'image',
    textage:'textage',
    i:'i',
    EqualButton:'EqaulButton',
    AllClearButton:'AllClearButton'
}

const getButtonType = (buttonType = BUTTON_TYPE.textage) => 
    ({
        [BUTTON_TYPE.image]:CustomMath,
        [BUTTON_TYPE.textage]:'strong',
        [BUTTON_TYPE.i]:Buttoni
    }[buttonType])

const Button = ({ text, buttonType, buttonClass, styles, p, ...otherProps }) => {
    const CustomButton = getButtonClass(buttonClass);
    const ButtonType = getButtonType(buttonType);
    const { darkmode,displayKeymap } = useContext(ViewContext);
    return (
        <CustomButton
            darkmode={darkmode}
            style={styles}
            displayKeymap={displayKeymap}
            {...otherProps}
        >

            <ButtonType>
                {text}
            </ButtonType>

            {p && <p style={{fontSize:'12px',zIndex:'1000'}}>{p}</p>}

        </CustomButton>
    )
}

export default Button