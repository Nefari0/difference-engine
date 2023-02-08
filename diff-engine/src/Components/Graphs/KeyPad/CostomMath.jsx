import { InlineMath } from "react-katex";

const CustomMath = ({children}) => {
    return (
        <div style={{fontWeight:'600',fontSize:'42px'}}>
            <InlineMath math={children} />
        </div>
    )
}

export default CustomMath