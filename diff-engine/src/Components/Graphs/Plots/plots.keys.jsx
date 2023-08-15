import { useContext } from "react";
import { ViewContext } from "../../Context/view.context";
import { KeyBox } from "../KeyPad/input.styles";
import Button from "../KeyPad/Button";
import { backButton,RefreshButton,uturnArrow } from "../SVG";

const PlotKeys = (props) => {

    const { close } = props

    const { setCurrentView,setDisplayKeymap } = useContext(ViewContext)

    return (
        <KeyBox>
            <Button
                styles={{position:'absolute',left:`0px`,fontSize:'32px'}}
                onClick={() => setCurrentView('gaus')}
                buttonType={'image'}
                text={`\\mu`}
                p={'Guasian'}
            />

            <Button
                styles={{left:'0px',top:`${80}px`,fontSize:'32px'}}
                onClick={() => setCurrentView('parabolas')}
                text={`\ax^2`}
                buttonType={'image'}
                p={'Quadric Surface'}
            />

            {/* ELLIPSE - Currently not functional */}
            {/* <Button
                styles={{left:'0px',top:`${160}px`,fontSize:'32px'}}
                text={'ellipse'}
                onClick={() => setCurrentView('ellipse')}
            /> */}

            <Button
                style={{right:'10px',top:'0px'}}
                // text={backButton()}
                text={backButton()}
                p={'Home'}
                onClick={(e) => close(e)}
            />

            <Button
                style={{right:'10px',top:'80px',zIndex:'0'}}
                buttonType={'image'}
                text={'?'}
                onClick={(e) => setDisplayKeymap(true)}
                buttonClass={'help'}
            />

            {/* <Button
                style={{right:'10px',top:'160px'}}
                // text={backButton()}
                text={backButton()}
                onClick={(e) => close(e)}
            /> */}
        </KeyBox>
    )
}

export default PlotKeys