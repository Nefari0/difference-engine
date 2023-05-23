import { InlineMath } from "react-katex";

const CustomMath = ({children}) => {
    return (
        <div>
            <InlineMath math={children}/>
        </div>
    )
}

export default CustomMath