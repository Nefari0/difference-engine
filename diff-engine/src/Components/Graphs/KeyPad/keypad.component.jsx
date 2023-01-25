import { KeyBox,BaseButton,LargeButton,CloseHelp } from "./keypad.styles";
import { MathComponent } from "mathjax-react";
import { Book,CalculatorIcon,CogWheel,beaker } from "../SVG";
import { useContext } from "react";
import { ViewContext } from "../../Context/view.context";

// --- kaytex --- //
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';
{/* <InlineMath math={frac} /> */}
// const frac = `\\frac{${'string1'}\\pi }{${'string2'}}` 

const vp = 80 // -- Vertical Position

const LGbtnLabel = {
    fontSize:'18px',
    letterSpacing:'2px',
    fontWeight:'600'
}

const KeyPad = (props) => {

    const {
        setCurrentView,
        setDisplayKeymap,
        displayKeymap,
        setInformation
    } = useContext(ViewContext)

    const {
        execute,
        linearVector,
        polarVector,
        state,
    } = props

    const { mathFunc,degrees } = state 

    return (
        <KeyBox displayKeymap={displayKeymap}>

            {/* <Hover /> */}

            <BaseButton
                state={state}
                style={{position:'absolute',right:`${10}px`}}
                onClick={() => setCurrentView('gaus')}
            >
                <div style={{fontSize:'32px'}}>
                    <InlineMath math={`\\mu`} />
                </div>
                <p>Guasian</p>
            </BaseButton>

            <BaseButton
                style={{position:'absolute',right:`${90}px`,zIndex:'2'}}
                onClick={() => setCurrentView('unit_circle')}
            >
                <div style={{fontSize:'22px'}}>
                    <InlineMath math={`\\phase{${degrees.toString().substring(0,3)}^\\circ}`} />
                </div>
                <p>Unit circle and trig functions</p>
            </BaseButton>

            {/*  STANDARD CALCULATOR */}
            <BaseButton
                style={{right:`${170}px`,zIndex:'1'}}
                onClick={(e) => setCurrentView('standard')}
            >
                {CalculatorIcon()}
                <p>Standard calculator</p>
            </BaseButton>

            {/* FRACTIONS */}
            <BaseButton
                style={{position:'absolute',right:'90px',top:`${vp}px`,zIndex:'1'}}
                onClick={(e) => setCurrentView('fracs')}
            >
                <div style={{fontWeight:'600',fontSize:'42px'}}>
                    <InlineMath math={`\\frac{${'a'} }{${'b'}}`} />
                </div>
                <p>Decimal to fraction</p>
            </BaseButton>

            <BaseButton
                style={{right:'170px',top:`${vp}px`,fontSize:'10px'}}
                onClick={() => setCurrentView('parabolas')}
            >
                <div style={{fontWeight:'600',fontSize:'32px'}}>
                    <InlineMath math={`\ax^2`} />
                </div>
                <p>Quadratics</p>
            </BaseButton>

            <BaseButton
                style={{right:'10px',top:`${vp}px`,zIndex:'1'}}
                onClick={() => setCurrentView('gear_calculator')}
            >
                {CogWheel()}
                <p>Gear calculator</p>
            </BaseButton>

            <BaseButton
                onClick={(e) => setInformation('trig')}
                style={{right:'10px',top:`${vp*2}px`,zIndex:'0'}}
            >
                {Book()}
                <p>Documentation and resources</p>
            </BaseButton>

            <BaseButton
                style={{right:'170px',top:`${vp*2}px`}}
                onClick={(e) => setDisplayKeymap(true)}
            >
                <strong style={{fontWeight:'600',fontSize:'32px'}}>
                    ?
                </strong>
            </BaseButton>

            <BaseButton
                onClick={() => setCurrentView('unit_converter')}
                style={{right:'90px',top:'160px'}}
            >
                <div>{beaker()}</div>
                <p>Unit Converter</p>
            </BaseButton>

            <LargeButton
                style={{left:'0px',width:'125px'}}
                onClick={() => linearVector(mathFunc)}
            >
                <i style={LGbtnLabel}>cartesian</i>
                <p>Execute cartesian coordinates</p>
            </LargeButton>

            <LargeButton
                style={{top:'80px',left:'0px',zIndex:'0',width:'125px'}}
                onClick={() => polarVector(mathFunc)}
            >
                <i style={LGbtnLabel}>polar</i>
                <p>Execute polar coordinates</p>
            </LargeButton>

        </KeyBox>
    )
}

export default KeyPad