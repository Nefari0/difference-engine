import { KeyBox,BaseButton,LargeButton,CloseHelp } from "./keypad.styles";
import { Book,CalculatorIcon,CogWheel,beaker } from "../SVG";
import { useContext } from "react";
import { ViewContext } from "../../Context/view.context";
import Button from "./Button";

// --- kaytex --- //
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

const vp = 80 // -- Vertical Position

const KeyPad = (props) => {

    const {
        setCurrentView,
        setDisplayKeymap,
        displayKeymap,
        setInformation,

        darkmode,
    } = useContext(ViewContext)

    const {
        linearVector,
        polarVector,
        state,
    } = props

    const { mathFunc,degrees } = state 

    return (
        <KeyBox
            displayKeymap={displayKeymap}
            darkmode={darkmode}
        >

            <Button
                styles={{position:'absolute',right:`${10}px`,fontSize:'32px'}}
                onClick={() => setCurrentView('gaus')}
                darkmode={darkmode}
                buttonType={'image'}
                text={`\\mu`}
                p={'Guasian'}
            />

            <Button
               styles={{position:'absolute',right:`${90}px`,zIndex:'2',fontSize:'24px'}}
               onClick={() => setCurrentView('unit_circle')}
               darkmode={darkmode}
               text={`\\phase{${degrees.toString().substring(0,3)}^\\circ}`}
               p={'Unit circle and trig functions'}
               buttonType={'image'}
            />

            {/*  PERCENTAGES */}
            <Button
                styles={{right:`${250}px`,zIndex:'1',zIndex:'2',fontSize:'24px'}}
                onClick={(e) => setCurrentView('percentages')}
                darkmode={darkmode}
                text={`\\%`}
                p={'Percenage Calculator'}
                buttonType={'image'}
            />

            {/* STANDARD CALCULATOR */}
            <Button
                styles={{right:`${170}px`,zIndex:'1'}}
                onClick={(e) => setCurrentView('standard')}
                darkmode={darkmode}
                text={CalculatorIcon()}
                p={'Standard calculator'}
            />

            {/* FRACTIONS */}
            <Button
                styles={{position:'absolute',right:'90px',top:`${vp}px`,zIndex:'1',fontSize:'32px'}}
                onClick={(e) => setCurrentView('fracs')}
                darkmode={darkmode}
                text={`\\frac{${'a'} }{${'b'}}`}
                buttonType={'image'}
                p={'Decimal to fraction'}
            />

            <Button
                styles={{right:'170px',top:`${vp}px`,fontSize:'32px'}}
                onClick={() => setCurrentView('parabolas')}
                darkmode={darkmode}
                text={`\ax^2`}
                buttonType={'image'}
                p={'Quadradics'}
            />

            <Button
                styles={{right:'10px',top:`${vp}px`,zIndex:'1'}}
                onClick={() => setCurrentView('gear_calculator')}
                darkmode={darkmode}
                text={CogWheel()}
                p={'Gear Calculator'}
            />

            <Button
                onClick={(e) => setInformation('trig')}
                styles={{right:'10px',top:`${vp*2}px`}}
                darkmode={darkmode}
                text={Book()}
                p={'Documentation and resources'}
            />

            <Button
                styles={{fontSize:'32px',right:'170px',top:`${vp*2}px`}}
                onClick={() => setDisplayKeymap(true)}
                darkmode={darkmode}
                text={'?'}
            />
            
            <Button
                darkmode={darkmode}
                onClick={() => setCurrentView('unit_converter')}
                styles={{right:'90px',top:'160px'}}
                text={beaker()}
                p={'Unit Converter'}
            />

            <Button
                style={{left:'0px',width:'125px',zIndex:'2',fontSize:'16px'}}
                onClick={() => linearVector(mathFunc)}
                darkmode={darkmode}
                p={'Execute cartesian coordinates'}
                text={'cartesian'}
                buttonType={'textage'}
                buttonClass={'large'}
            />



            <Button
                darkmode={darkmode}
                style={{top:'80px',left:'0px',zIndex:'1',width:'125px',fontSize:'16px'}}
                onClick={() => polarVector(mathFunc)}
                p={'Execute polar coordinates'}
                text={'polar'}
                buttonType={'textage'}
                buttonClass={'large'}
            />

        </KeyBox>
    )
}

export default KeyPad