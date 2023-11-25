import { useState,useContext,useEffect } from "react";
import { ViewContext } from "../../Context/view.context";
import Button from "../KeyPad/Button";
import { backgroundColors } from "../global.styles";

import {
  // ZoomInButton,
  ZoomOutButton,
  ViewSettingsPanel,
  ResetViewButton,
  // ArrowButton,
  Zoom,
  AboutButton,
  DarkmodeButton,
  ResetViewMessage,
  // ActivateScrollingButton
} from "./view-settings.styles";

import {
  zoomIn,
  zoomOut,
} from "../SVG";

import {
  changeSize,
  resetSize,
} from "./viewLogic";

const { blue,red } = backgroundColors

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

      // scrollBar,setScrollBar
      setScrollLock,scrollLock

    } = useContext(ViewContext)

    useEffect(() => {getSavedViewSettings()},[])

    // --- Updates state to settings saved in the browser (if applicable)
    const getSavedViewSettings = () => {
      try {
        const savedMode = localStorage.getItem('DARKMODE')
        if (savedMode) {setDarkMode(JSON.parse(savedMode))}

      } catch (error) {return}
    }

    // --- This changes the settings saved in the browser, and updates state to those settings on useEffect
    // --- Prop should be string. val is the current state/context item. setFunction updates the current state/context item
    const saveSettingts = (prop,val,setFunction) => {
      localStorage.setItem(`${prop}`,!val)
      setFunction(!val)
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
          onClick={() => saveSettingts('DARKMODE',darkmode,setDarkMode)}
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

        <Button 
          style={{left:'105px',
          height:'30px',
          width:'100px',
          backgroundColor:`${scrollLock ? red : blue}`,
          color:'#fff',
          fontSize:'12px',
          letterSpacing:'1px',
        }}
          onClick={() => setScrollLock(!scrollLock)}
          text={scrollLock ? 'locked' : 'unlocked '}
          p={`scroll lock ${scrollLock? 'on' : 'off'}`}
        />

        {/* <ActivateScrollingButton
          onClick={() => setScrollBar(!scrollBar)}
          scrollBar={scrollBar}
        >
          scrolling {scrollBar ? 'on' : 'off'}
        </ActivateScrollingButton> */}

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