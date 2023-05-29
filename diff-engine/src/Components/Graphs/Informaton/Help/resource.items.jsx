import { useContext } from "react"
import { ViewContext } from "../../../Context/view.context"

const Resource = () => {

    const { darkmode } = useContext(ViewContext)

    return (
        <section>
            <h4>Reference notebook</h4>
            <a 
                style={{color:`${darkmode ? '#fff' : 'blue'}`}}
                href="https://jupyter.madmodels3d.com/math"
                target="_blank"
            >
                The Jupyter Complex
            </a>
        </section>
    )
}

export default Resource