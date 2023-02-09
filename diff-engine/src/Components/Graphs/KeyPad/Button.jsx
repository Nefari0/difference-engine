// import styled from "styled-components";
// import { InlineMath } from "react-katex";
// import styled from "styled-components";

import { useContext } from "react";
import { ViewContext } from "../../Context/view.context";

import CustomMath from "./CostomMath";
import {
    TinyButton,
    BaseButton,
    LargeButton,
    Buttoni,
} from "./keypad.styles";

export const BUTTON_CLASSES = {
    base:'base',
    large:'large',
    tiny:'tiny',
    rare:'rare'
}

{/* <InlineMath math={`\\frac{${'a'} }{${'b'}}`} /> */}

const getButtonClass = (buttonClass = BUTTON_CLASSES.base) =>
  ({
    [BUTTON_CLASSES.tiny]: TinyButton,
    [BUTTON_CLASSES.base]: BaseButton,
    [BUTTON_CLASSES.large]: LargeButton,
  }[buttonClass]);

export const BUTTON_TYPE = {
    image:'image',
    textage:'textage',
    i:'i'
}

const getButtonType = (buttonType = BUTTON_TYPE.textage) => 
    ({
        [BUTTON_TYPE.image]:CustomMath,
        [BUTTON_TYPE.textage]:'strong',
        [BUTTON_TYPE.i]:Buttoni
    }[buttonType])

const Button = ({ text, buttonType, buttonClass, styles, p, ...otherProps }) => {
    const CustomButton = getButtonClass(buttonClass);
    const ButtonType = getButtonType(buttonType)
    const { darkmode } = useContext(ViewContext)
    return (
        <CustomButton
            darkmode={darkmode}
            style={styles}
            {...otherProps}
        >

            <ButtonType>
                {text}
            </ButtonType>

            <p>{p}</p>

        </CustomButton>
    )
}

export default Button