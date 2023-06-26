import { useContext } from "react"
import { ViewContext } from "../../../Context/view.context"

import { CircleOverlay, Crosshair } from "./overlay.styles"
import Rotations from "../../Calculators/Trig/UnitCircle/unitcircle.component"
import {angleData} from '../../Calculators/Trig/angle.data'
// import { ThetaOrigin } from "../../Calculators/Trig/AngleConversion/display.styles"
import { useEffect } from "react"

// const tOrigin = {
//     top:'200px',
//     left:'200px'
// }

const CircleGraph = ({showUnitCircleAngles}) => {

    const { darkmode,currentView,setShowPlotValues } = useContext(ViewContext)

    const mappedAngles = angleData.map(el => {
        return <Rotations key={el.degrees} items={el} />
    })

    const right = {top:'190px',right:'-46px'}
    const left = {top:'190px',left:'-46px'}
    const top ={top:'-36px',left:'190px'}
    const bottom = {bottom:'-35px',left:'190px'}

    useEffect(() => {
        setShowPlotValues(false)
    })

    return (
        <CircleOverlay
            darkmode={darkmode}
            >

            {/* UNIT CIRCLE */}
            {showUnitCircleAngles && mappedAngles}
            
            {/* CROSSHAIR */}
            {/* VERTICAL */}
            <i style={top}>(0,{!currentView ? '4' : '1'})</i>
            <Crosshair rotation={0}></Crosshair>
            <i style={bottom}>(0,{!currentView ? '-4' : '-1'})</i>
            
            {/* HORIZONTAL */}
            <i style={right}>({!currentView ? '4':'1'},0)</i>
            <Crosshair rotation={90}></Crosshair>
            <i style={left}>({!currentView ? '-4':'-1'},0)</i>
        </CircleOverlay>
    )
}

export default CircleGraph