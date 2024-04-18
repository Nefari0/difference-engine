import { useContext,useEffect,useState } from "react";
import { ViewContext } from "../../Context/view.context";
import Button from "../KeyPad/Button";
import { backgroundColors } from "../global.styles";

import {
  ViewSettingsPanel,
  ResetViewButton,
  AboutButton,
  DarkmodeButton,
  ResetViewMessage
} from "./view-settings.styles";

const { blue,red } = backgroundColors

const resetViewMessageText = 'If this app does not fit on your device, you can adjust the size in the preferences menu'

const ViewSettings = (props) => {

    const {
      about,setAbout,

      darkmode,setDarkMode,

      viewPrefs,openViewPrefs,

      fullscreen,setFullScreen

    } = useContext(ViewContext)
    
    const [localState,setLocalState] = useState({
      display:true
    })
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

    return (
      <ViewSettingsPanel>

        <ResetViewButton
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

        <ResetViewMessage
          visited={localStorage.getItem('NO_MESSAGE_PLEASE')}
          darkmode={darkmode}
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