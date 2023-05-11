import { InlineMath } from "react-katex";

const CustomMath = ({children}) => {
    return (
        <div style={{fontWeight:'800'}}>
            <InlineMath math={children} />
        </div>
    )
}

export default CustomMath