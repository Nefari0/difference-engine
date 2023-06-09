import { KeyBox } from "../input.styles";
// import { derivative } from "mathjs";

import { 
    Book,
    CalculatorIcon,
    CogWheel,
    beaker,
    CopyIcon,
    // LockOpen,
    // LockClosed
 } from "../../SVG";

import { useContext } from "react";
import { ViewContext } from "../../../Context/view.context";
import Button from "../Button";

// --- kaytex --- //
import 'katex/dist/katex.min.css';

const vp = 80 // -- Vertical Position

const KeyPad = (props) => {

    const {
        setCurrentView,currentView,

        setDisplayKeymap,
        displayKeymap,
        setInformation,

        darkmode,

        // scrollSnap,setScrollSnap,

        // scrollBar

        showPlotValues,setShowPlotValues
    } = useContext(ViewContext)

    const {
        linearVector,
        polarVector,
        state,
        returnPlots,
        setState,
        findDerivative
    } = props

    const { mathFunc,degrees,polars } = state

    const copy = () => {
        if (returnPlots()[0]) {
          navigator.clipboard.writeText(JSON.stringify(returnPlots()))
          setState({...state,noticeContent:"X and Y coordinates copied to clipboard"})
        } else {
          setState({...state,alert:`There are no coordinates yet. Please run the calculation by pressing the "Cartesian" or "Polar" button below`})
        }
    }

    return (
        <KeyBox
            displayKeymap={displayKeymap}
            darkmode={darkmode}
        >

            {!currentView &&
                <Button
                    p={'copy coordinates'}
                    styles={{
                        position:'absolute',
                        width:'75px',
                        height:'75px',
                        left:'10px',
                        top:'-560px',
                        zIndex:'2',
                    }}
                    buttonClass={'translucent'}
                    onClick={() => copy()}
                    text={CopyIcon()}
                />
            }

            {!currentView && !polars &&
                <Button
                    p={'Show coordinate values'}
                    styles={{
                        position:'absolute',
                        width:'75px',
                        height:'45px',
                        left:'10px',
                        top:'-480px',
                        zIndex:'1',
                    }}
                    buttonClass={'translucent'}
                    onClick={() => setShowPlotValues(!showPlotValues)}
                    text={'values'}
                />
            }
            

            <Button
                styles={{position:'absolute',right:`${10}px`,fontSize:'22px'}}
                onClick={() => setCurrentView('plots')}
                darkmode={darkmode}
                buttonType={'image'}
                text={`f(x)`}
                p={'Algebraic Functions'}
            />

            <Button
               styles={{position:'absolute',right:`${90}px`,zIndex:'3',fontSize:'24px'}}
               onClick={() => setCurrentView('unit_circle')}
               darkmode={darkmode}
               text={`\\phase{${degrees.toString().substring(0,3).replace(/^0/, '')}^\\circ}`}
               p={'Unit circle and trig functions'}
               buttonType={'image'}
            />

            {/*  PERCENTAGES */}
            <Button
                styles={{right:'170px',top:`${vp}px`,zIndex:'2',fontSize:'24px'}}
                onClick={(e) => setCurrentView('percentages')}
                darkmode={darkmode}
                text={`\\%`}
                p={'Percenage Calculator'}
                buttonType={'image'}
            />

            {/* STANDARD CALCULATOR */}
            <Button
                styles={{right:`${170}px`,zIndex:'2'}}
                onClick={(e) => setCurrentView('standard')}
                darkmode={darkmode}
                text={CalculatorIcon()}
                p={'Standard calculator'}
            />

            {/* FRACTIONS */}
            <Button
                styles={{position:'absolute',right:'90px',top:`${vp}px`,zIndex:'2',fontSize:'32px'}}
                onClick={(e) => setCurrentView('fracs')}
                darkmode={darkmode}
                text={`\\frac{${'a'} }{${'b'}}`}
                buttonType={'image'}
                p={'Decimal to fraction'}
            />

            <Button
                styles={{right:'10px',top:`${vp}px`,zIndex:'2'}}
                onClick={() => setCurrentView('gear_calculator')}
                darkmode={darkmode}
                text={CogWheel()}
                p={'Gear Calculator'}
            />

            <Button
                onClick={(e) => setInformation('trig')}
                styles={{right:'10px',top:`${vp*2}px`,zIndex:'1'}}
                darkmode={darkmode}
                text={Book()}
                p={'Documentation and resources'}
            />

            <Button
                styles={{right:'170px',top:`${vp*2}px`,zIndex:'1'}}
                buttonType={'image'}
                onClick={() => setDisplayKeymap(true)}
                darkmode={darkmode}
                text={'?'}
                buttonClass={'help'}
            />
            
            <Button
                darkmode={darkmode}
                onClick={() => setCurrentView('unit_converter')}
                styles={{right:'90px',top:'160px',zIndex:'1'}}
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

            <Button
                darkmode={darkmode}
                style={{top:'160px',left:'0px',zIndex:'1',width:'125px',fontSize:'16px'}}
                onClick={() => findDerivative(mathFunc)}
                p={'Find derivative'}
                text={'derivative'}
                buttonType={'textage'}
                buttonClass={'large'}
            />

            {/* <Button
                buttonClass={'all_clear'}
                text={'AC'}
                styles={{color:'blue'}}
                // buttonType={'i'}
                p={'All Clear'}
                onClick={(e) => execute(e,'mathFunc','')}
                style={{left:'0px',bottom:'-115px'}}
            /> */}

        </KeyBox>
    )
}

export default KeyPad