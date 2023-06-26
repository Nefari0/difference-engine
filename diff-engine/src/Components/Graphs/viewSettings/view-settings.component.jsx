import { useState,useContext,useEffect } from "react";
import { ViewContext } from "../../Context/view.context";
import Button from "../KeyPad/Button";

import {
  ZoomInButton,
  ZoomOutButton,
  ViewSettingsPanel,
  ResetViewButton,
  ArrowButton,
  Zoom,
  AboutButton,
  DarkmodeButton,
  ResetViewMessage,
  ActivateScrollingButton
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

const resetViewMessageText = 'If this app does not fit on your display, please click the "reset view" button.'

const ViewSettings = (props) => {

    const { state,execute } = props

    const { viewScale } = state

    // const [openSettings,setOpenSettings] = useState(false)
    const [localState,setLocalState] = useState({
      hovered:false
    })


    const {
      about,setAbout,

      darkmode,setDarkMode,

      scrollBar,setScrollBar

    } = useContext(ViewContext)

    useEffect(() => {checkIfDarkmodeIsOn()},[])

    const checkIfDarkmodeIsOn = () => {
      try {
        const savedMode = localStorage.getItem('DARKMODE')
        if (savedMode) {setDarkMode(JSON.parse(savedMode))}

      } catch (error) {return}
    }

    const settingDarkmode = () => {
      localStorage.setItem('DARKMODE',!darkmode)
      setDarkMode(!darkmode)
    }

    return (
        <ViewSettingsPanel>

        <Zoom
          viewScale={viewScale}
          onClick={(e) => changeSize(e,.01,state,execute)}
          >
            {zoomIn()}
        </Zoom>

        <ZoomOutButton
          viewScale={viewScale}
          onClick={(e) => changeSize(e,-.01,state,execute)}
        >
          {zoomOut()}
        </ZoomOutButton>

        <ResetViewButton
          onClick={(e) => resetSize(e,execute)}
        >
          reset view
        </ResetViewButton>

        <DarkmodeButton
          onClick={() => settingDarkmode(!darkmode)}
        >
          {!darkmode ? 'dark mode' : 'light mode'}
        </DarkmodeButton>

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

        <ActivateScrollingButton
          onClick={() => setScrollBar(!scrollBar)}
          scrollBar={scrollBar}
        >
          scrolling {scrollBar ? 'on' : 'off'}
        </ActivateScrollingButton>

        <ResetViewMessage
          visited={localStorage.getItem('NO_MESSAGE_PLEASE')}
          darkmode={darkmode}
          onMouseEnter={() => setLocalState({...localState,hovered:true})}
        >
          <p>{resetViewMessageText}</p>

          <Button 
            buttonClass={'tiny'}
            style={{position:'relative',margin:'auto',height:'20px'}}
            text={'got it!'}
            onClick={() => localStorage.setItem('NO_MESSAGE_PLEASE',true)}
          />
        </ResetViewMessage>

      </ViewSettingsPanel>
    )
}

export default ViewSettings