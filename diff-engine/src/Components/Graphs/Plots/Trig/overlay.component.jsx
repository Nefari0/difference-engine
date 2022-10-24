import { CircleOverlay, Crosshair } from "./overlay.styles"

const CircleGraph = () => {

    const right = {top:'190px',right:'-46px'}
    const left = {top:'190px',left:'-46px'}
    const top ={top:'-36px',left:'190px'}
    const bottom = {bottom:'-35px',left:'190px'}

    return (
        <CircleOverlay>
            {/* VERTICAL */}
            <i style={top}>(0,1)</i>
            <Crosshair rotation={0}></Crosshair>
            <i style={bottom}>(0,-1)</i>
            
            {/* HORIZONTAL */}
            <i style={right}>(1,0)</i>
            <Crosshair rotation={90}></Crosshair>
            <i style={left}>(-1,0)</i>
        </CircleOverlay>
    )
}

export default CircleGraph