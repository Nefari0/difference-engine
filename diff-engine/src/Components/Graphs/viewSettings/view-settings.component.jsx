import { ZoomInButton,ZoomOutButton,ViewSettingsPanel,ResetViewButton } from "./view-settings.styles";
import { zoomIn,zoomOut,RefreshButton,backButton } from "../SVG";
import { useState } from "react";

const ViewSettings = (props) => {

    const { changeSize,resetSize,state,execute } = props

    const { viewScale } = state

    const [openSettings,setOpenSettings] = useState(false)

    return (
        <ViewSettingsPanel>

        <ZoomInButton
          viewScale={viewScale}
          onClick={(e) => changeSize(e,.10,state,execute)}
          >
            {zoomIn()}
        </ZoomInButton>

        <ZoomOutButton
          viewScale={viewScale}
          onClick={(e) => changeSize(e,-.10,state,execute)}
        >
          {zoomOut()}
        </ZoomOutButton>

        <ResetViewButton
          onClick={(e) => resetSize(e)}
        >
          reset
        </ResetViewButton>
      </ViewSettingsPanel>
    )
}

export default ViewSettings