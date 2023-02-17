import { KeyBox,BaseButton,LargeButton,CloseHelp } from "./keypad.styles";
import { MathComponent } from "mathjax-react";
import { Book,CalculatorIcon,CogWheel,beaker } from "../SVG";
import { useContext } from "react";
import { ViewContext } from "../../Context/view.context";
import Button from "./Button";

// --- kaytex --- //
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';
{/* <InlineMath math={frac} /> */}
// const frac = `\\frac{${'string1'}\\pi }{${'string2'}}` 

const vp = 80 // -- Vertical Position

const LGbtnLabel = {
    fontSize:'18px',
    letterSpacing:'2px',
    fontWeight:'600',
}

const KeyPad = (props) => {

    const {
        setCurrentView,
        setDisplayKeymap,
        displayKeymap,
        setInformation,

        darkmode,
    } = useContext(ViewContext)

    const {
        execute,
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

            {/* <Hover /> */}

            {/* <BaseButton
                state={state}
                style={{position:'absolute',right:`${10}px`}}
                onClick={() => setCurrentView('gaus')}
                darkmode={darkmode}
            >
                <div style={{fontSize:'32px'}}>
                    <InlineMath math={`\\mu`} />
                </div>
                <p>Guasian</p>
            </BaseButton> */}
            <Button
                styles={{position:'absolute',right:`${10}px`}}
                onClick={() => setCurrentView('gaus')}
                darkmode={darkmode}
                buttonType={'image'}
                text={`\\mu`}
                p={'Guasian'}
            />

            {/* <BaseButton
                style={{position:'absolute',right:`${90}px`,zIndex:'2'}}
                onClick={() => setCurrentView('unit_circle')}
                darkmode={darkmode}
            >
                <div style={{fontSize:'22px'}}>
                    <InlineMath math={`\\phase{${degrees.toString().substring(0,3)}^\\circ}`} />
                </div>
                <p>Unit circle and trig functions</p>
            </BaseButton> */}

            <Button
               styles={{position:'absolute',right:`${90}px`,zIndex:'2',fontSize:'10px'}}
               onClick={() => setCurrentView('unit_circle')}
               darkmode={darkmode}
               text={`\\phase{${degrees.toString().substring(0,3)}^\\circ}`}
               p={'Unit circle and trig functions'}
               buttonType={'image'}
            />

            {/*  STANDARD CALCULATOR */}
            {/* <BaseButton
                style={{right:`${170}px`,zIndex:'1'}}
                onClick={(e) => setCurrentView('standard')}
                darkmode={darkmode}
            >
                {CalculatorIcon()}
                <p>Standard calculator</p>
            </BaseButton> */}

            <Button
                styles={{right:`${170}px`,zIndex:'1'}}
                onClick={(e) => setCurrentView('standard')}
                darkmode={darkmode}
                text={CalculatorIcon()}
                p={'Standard calculator'}
            />

            {/* FRACTIONS */}
            {/* <BaseButton
                style={{position:'absolute',right:'90px',top:`${vp}px`,zIndex:'1'}}
                onClick={(e) => setCurrentView('fracs')}
                darkmode={darkmode}
            >
                <div style={{fontWeight:'600',fontSize:'42px'}}>
                    <InlineMath math={`\\frac{${'a'} }{${'b'}}`} />
                </div>
                <p>Decimal to fraction</p>
            </BaseButton> */}

            <Button
                styles={{position:'absolute',right:'90px',top:`${vp}px`,zIndex:'1'}}
                onClick={(e) => setCurrentView('fracs')}
                darkmode={darkmode}
                text={`\\frac{${'a'} }{${'b'}}`}
                buttonType={'image'}
            />

            {/* <BaseButton
                style={{right:'170px',top:`${vp}px`,fontSize:'10px'}}
                onClick={() => setCurrentView('parabolas')}
                darkmode={darkmode}
            >
                <div style={{fontWeight:'600',fontSize:'32px'}}>
                    <InlineMath math={`\ax^2`} />
                </div>
                <p>Quadratics</p>
            </BaseButton> */}

            <Button
                styles={{right:'170px',top:`${vp}px`,fontSize:'10px'}}
                onClick={() => setCurrentView('parabolas')}
                darkmode={darkmode}
                text={`\ax^2`}
                buttonType={'image'}
            />

            {/* <BaseButton
                style={{right:'10px',top:`${vp}px`,zIndex:'1'}}
                onClick={() => setCurrentView('gear_calculator')}
                darkmode={darkmode}
            >
                {CogWheel()}
                <p>Gear calculator</p>
            </BaseButton> */}

            <Button
                styles={{right:'10px',top:`${vp}px`,zIndex:'1'}}
                onClick={() => setCurrentView('gear_calculator')}
                darkmode={darkmode}
                text={CogWheel()}
                p={'Gear Calculator'}
            />

            {/* <BaseButton
                onClick={(e) => setInformation('trig')}
                style={{right:'10px',top:`${vp*2}px`,zIndex:'0'}}
                darkmode={darkmode}
            >
                {Book()}
                <p>Documentation and resources</p>
            </BaseButton> */}

            <Button
                onClick={(e) => setInformation('trig')}
                styles={{right:'10px',top:`${vp*2}px`,zIndex:'0'}}
                darkmode={darkmode}
                text={Book()}
                p={'Documentation and resources'}
            />

            {/* <BaseButton
                style={{right:'170px',top:`${vp*2}px`}}
                onClick={() => setDisplayKeymap(true)}
                darkmode={darkmode}
            >
                <strong style={{fontWeight:'600',fontSize:'32px'}}>
                    ?
                </strong>
            </BaseButton> */}

            <Button
                styles={{fontSize:'32px',right:'170px',top:`${vp*2}px`}}
                onClick={() => setDisplayKeymap(true)}
                darkmode={darkmode}
                text={'?'}
            />

            {/* <BaseButton
            darkmode={darkmode}
                onClick={() => setCurrentView('unit_converter')}
                style={{right:'90px',top:'160px'}}
            >
                <div>{beaker()}</div>
                <p>Unit Converter</p>
            </BaseButton> */}
            
            <Button
                darkmode={darkmode}
                onClick={() => setCurrentView('unit_converter')}
                style={{right:'90px',top:'160px'}}
                text={beaker()}
                p={'Unit Converter'}
            />

            <LargeButton
                style={{left:'0px',width:'125px',zIndex:'1'}}
                onClick={() => linearVector(mathFunc)}
                darkmode={darkmode}
            >
                <i style={LGbtnLabel}>cartesian</i>
                <p>Execute cartesian coordinates</p>
            </LargeButton>

            <LargeButton
                darkmode={darkmode}
                style={{top:'80px',left:'0px',zIndex:'0',width:'125px'}}
                onClick={() => polarVector(mathFunc)}
            >
                <i style={LGbtnLabel}>polar</i>
                <p>Execute polar coordinates</p>
            </LargeButton>

            {/* <Button
                styles={{bottom:'-140px',left:'200px'}}
                buttonClass={'large'}
                buttonType={'image'}
                text={`\\frac{${'a'} }{${'b'}}`}
                p={'This is the text box that should be displayed'}
            />

            <Button
                styles={{bottom:'-140px',right:'0px'}}
                buttonType={'textage'}
                text={`\\frac{${'a'} }{${'b'}}`}
                p={'This is the text box that should be displayed'}
            />

            <Button
                onClick={(e) => execute(e,'mathFunc','3')}
                styles={{bottom:'-140px',right:'80px'}}
                buttonClass={'tiny'}
                buttonType={'textage'}
                text={'3'}
                p={'This is the text box that should be displayed'}
            /> */}

        </KeyBox>
    )
}

export default KeyPad