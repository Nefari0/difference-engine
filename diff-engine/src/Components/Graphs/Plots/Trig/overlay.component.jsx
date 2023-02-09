import { useContext } from "react"
import { ViewContext } from "../../../Context/view.context"

import { CircleOverlay, Crosshair } from "./overlay.styles"
import Rotations from "./UnitCircle/unitcircle.component"
import {angleData} from './angle.data'
import { ThetaOrigin } from "./AngleConversion/display.styles"

const tOrigin = {
    // position:'',
    top:'200px',
    left:'200px'
}

const CircleGraph = ({showUnitCircleAngles}) => {

    const { darkmode } = useContext(ViewContext)

    const mappedAngles = angleData.map(el => {
        return <Rotations key={el.degrees} items={el} />
    })

    const right = {top:'190px',right:'-46px'}
    const left = {top:'190px',left:'-46px'}
    const top ={top:'-36px',left:'190px'}
    const bottom = {bottom:'-35px',left:'190px'}

    return (
        <CircleOverlay
            darkmode={darkmode}
        >
            {/* VERTICAL */}
            <i style={top}>(0,1)</i>
            <Crosshair rotation={0}></Crosshair>
            <i style={bottom}>(0,-1)</i>

            {/* <ThetaOrigin style={tOrigin}> */}
                {showUnitCircleAngles && mappedAngles}
            {/* </ThetaOrigin> */}
            
            {/* HORIZONTAL */}
            <i style={right}>(1,0)</i>
            <Crosshair rotation={90}></Crosshair>
            <i style={left}>(-1,0)</i>
        </CircleOverlay>
    )
}

export default CircleGraph