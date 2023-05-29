import { InlineMath } from "react-katex";

const CustomMath = ({children}) => {
    return (
        <strong>
            <InlineMath math={children}/>
        </strong>
    )
}

export default CustomMath