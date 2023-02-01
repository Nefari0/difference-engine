import { ZoomInButton,ZoomOutButton,ViewSettingsPanel,ResetViewButton,ArrowButton,Zoom } from "./view-settings.styles";
import { zoomIn,zoomOut,RefreshButton,backButton,upArrow,downArrow } from "../SVG";
import { useState } from "react";
import { checkDeviceSizem,screenSizeExtraction,changeSize,resetSize,verticalTransform } from "./viewLogic";

const ViewSettings = (props) => {

    const { state,execute } = props

    const { viewScale } = state

    const [openSettings,setOpenSettings] = useState(false)

    return (
        <ViewSettingsPanel>

        <ZoomInButton
          viewScale={viewScale}
          onClick={(e) => changeSize(e,.01,state,execute)}
          >
            {zoomIn()}
        </ZoomInButton>

        <ZoomOutButton
          viewScale={viewScale}
          onClick={(e) => changeSize(e,-.01,state,execute)}
        >
          {zoomOut()}
        </ZoomOutButton>

        <ResetViewButton
          onClick={(e) => resetSize(e,execute)}
        >
          reset
        </ResetViewButton>

        {/* --- VERTICAL ADJUSTMENTS --- */}
        {/* <Zoom
          style={{right:'105px'}}
          onClick={(e) => verticalTransform(e,5,state,execute)}
        >
          {upArrow()}
        </Zoom>

        <Zoom style={{right:'145px'}}>
          {downArrow()}
        </Zoom> */}



      </ViewSettingsPanel>
    )
}

export default ViewSettings