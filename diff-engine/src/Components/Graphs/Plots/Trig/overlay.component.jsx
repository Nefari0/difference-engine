import { CircleOverlay, Crosshair } from "./overlay.styles"

const CircleGraph = () => {

    return (
        <CircleOverlay>
            <Crosshair rotation={0}></Crosshair>
            <Crosshair rotation={90}></Crosshair>
        </CircleOverlay>
    )
}

export default CircleGraph