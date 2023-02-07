import { useState,useContext } from "react";
import { ViewContext } from "../../Context/view.context";

import {
  ZoomInButton,
  ZoomOutButton,
  ViewSettingsPanel,
  ResetViewButton,
  ArrowButton,
  Zoom,
  AboutButton
} from "./view-settings.styles";

import {
  zoomIn,
  zoomOut,
  RefreshButton,
  backButton,
  upArrow,
  downArrow
} from "../SVG";

import {
  checkDeviceSizem,
  screenSizeExtraction,
  changeSize,
  resetSize,
  verticalTranslation 
} from "./viewLogic";

const ViewSettings = (props) => {

    const { state,execute } = props

    const { viewScale } = state

    const [openSettings,setOpenSettings] = useState(false)

    const {
      about,
      setAbout
    } = useContext(ViewContext)

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

        {/* --- OPEN ABOUT PAGE --- */}
        <AboutButton
          onClick={() => setAbout(!about)}
        >
          about
        </AboutButton>



      </ViewSettingsPanel>
    )
}

export default ViewSettings