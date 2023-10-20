import { useContext } from "react";
import { ViewContext } from "../../../Context/view.context";
import { Toolbar } from "./graph-tools.styles";
import { CopyIcon,MathVariable,OutArrows } from "../../SVG";
import Button from "../Button";

const iconStyles = {
    width:'30px'
}

const ToolPanel = (props) => {

    const { copy,state } = props
    const  { polars } = state
    const { 
        currentView,
        showPlotValues,
        setShowPlotValues,
        scrollBar,setScrollBar
    } = useContext(ViewContext)

    return (
        <Toolbar>
            {!currentView &&
            <>
            <Button
                text={CopyIcon(iconStyles)}
                buttonClass={'translucent'}
                styles={{zIndex:'2',}}
                p={'Copy coordinates'}
                onClick={() => copy()}
            />
            <Button 
                text={OutArrows(iconStyles)}
                buttonClass={'translucent'}
                styles={{zIndex:'1'}}
                p={`Scrolling ${scrollBar ? 'ON' : 'OFF'}`}
                onClick={() => setScrollBar(!scrollBar)}
                scrollBar={scrollBar}
                selected={scrollBar}
            />
            </>
            }
            {!currentView && !polars &&
            <Button
                text={MathVariable(iconStyles)}
                buttonClass={'translucent'}
                p={`Show values ${showPlotValues ? "ON" : "OFF"}`}
                styles={{zIndex:'0'}}
                onClick={() => setShowPlotValues(!showPlotValues)}
                selected={showPlotValues}
            />}
        </Toolbar>
    )
}

export default ToolPanel