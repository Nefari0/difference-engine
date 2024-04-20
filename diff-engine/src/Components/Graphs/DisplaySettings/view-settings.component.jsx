import { useContext,useEffect,useState } from "react";
import { ViewContext } from "../../Context/view.context";
import Button from "../KeyPad/Button";
import { widthParameters } from "../../../global.styles";
// import { backgroundColors } from "../global.styles";

import {
  ViewSettingsPanel,
  ResetViewButton,
  AboutButton,
  DarkmodeButton,
  ResetViewMessage
} from "./view-settings.styles";

// const { blue,red } = backgroundColors
// --- FITTING APP ONTO DEVICE --- //
const resetViewMessageText = 'You might have to adjust the app size settings in the preference controller'
const { enclosureWidth,enclosureHeight,enclosurePadding } = widthParameters
const appHeightOnePercent = enclosureHeight/100
const appWidthToHeightRate = (enclosureWidth+enclosurePadding)/appHeightOnePercent
const heightPerent = window.innerHeight/100
const deviceWidthToHeightRate = (window.innerWidth)/heightPerent
const outOfRange = deviceWidthToHeightRate < appWidthToHeightRate

const ViewSettings = (props) => {

    const {
      about,setAbout,

      darkmode,setDarkMode,

      viewPrefs,openViewPrefs,

      fullscreen,setFullScreen,

      viewScale

    } = useContext(ViewContext)

    useEffect(() => {getSavedViewSettings()},[])


    // --- Updates state to settings saved in the browser (if applicable)
    const getSavedViewSettings = () => {
      try {
        const savedMode = localStorage.getItem('DARKMODE')
        const fullscreen = localStorage.getItem('FULLSCREEN')
        if (savedMode) {setDarkMode(JSON.parse(savedMode))}
        if (fullscreen) {setFullScreen(JSON.parse(fullscreen))}

      } catch (error) {return}
    }

    // --- This changes the settings saved in the browser, and updates state to those settings on useEffect
    // --- Prop should be string. val is the current state/context item. setFunction updates the current state/context item
    const saveSettings = (prop,val,setFunction) => {
      localStorage.setItem(`${prop}`,!val)
      setFunction(!val)
    }

    const goFullScreen = () => {
      saveSettings('FULLSCREEN',fullscreen,setFullScreen)
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
    }

    const goToSettings = () => {
      openViewPrefs(!viewPrefs)
      localStorage.setItem('NO_MESSAGE_PLEASE',true)
    }

    return (
      <ViewSettingsPanel>

        <ResetViewButton
          selected={viewPrefs}
          onClick={() => openViewPrefs(!viewPrefs)}
        >
          preferences
        </ResetViewButton>

        <DarkmodeButton
          onClick={() => saveSettings('DARKMODE',darkmode,setDarkMode)}
        >
          {!darkmode ? 'dark mode' : 'light mode'}
        </DarkmodeButton>

        {/* --- OPEN ABOUT PAGE --- */}
        <AboutButton
          onClick={() => setAbout(!about)}
        >
          about
        </AboutButton>

        {/* --- SCROLLING LOCK --- */}
        <Button 
          style={{
          height:'30px',
          width:'130px',
          fontSize:'12px',
          letterSpacing:'1px',
        }}
          onClick={() => goFullScreen()}
          text={fullscreen ? 'fullscreen on' : 'fullscreen off '}
          p={`fullscreen ${fullscreen? 'on' : 'off'}`}
          selected={fullscreen}
        />

        {!localStorage.getItem('NO_MESSAGE_PLEASE')&&<ResetViewMessage
          // visited={localStorage.getItem('NO_MESSAGE_PLEASE')}
          visited={outOfRange}
          darkmode={darkmode}
        >
          <p>{resetViewMessageText}</p>

          <Button 
            buttonClass={'tiny'}
            style={{position:'relative',margin:'auto',height:'20px',width:'130px'}}
            text={'go to preferences'}
            // onClick={() => localStorage.setItem('NO_MESSAGE_PLEASE',true)}
            onClick={() => openViewPrefs(!viewPrefs)}
            // onClick={}
          />
        </ResetViewMessage>}

      </ViewSettingsPanel>
    )
}

export default ViewSettings