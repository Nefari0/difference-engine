import { backButton,uturnArrow } from "../../../SVG";
import { KeyBox } from "../../../KeyPad/input.styles";
import Button from "../../../KeyPad/Button";
import InputField from "../../../KeyPad/InputField";
import { useEffect,useContext,useState } from "react";
import { ViewContext } from "../../../../Context/view.context";
import 'katex/dist/katex.min.css';
import AdjustmentPanel from "./button-panel";
// import { InlineMath } from 'react-katex';
import { cogScale } from "../GearDisplay/display.component";
import { InfoMessage } from "../../../KeyPad/input.styles";
import Step1 from "./step1";
import Step2 from "./step2";
import Step4 from "./step4";
import Step3 from "./step3";

const CogKeys = (props) => {

    const {state,
        setState,
        inputHandler,
        close,
    } = props

    const { mathFunc,uMax,blenderCoords,degrees,gearBuildingStep } = state
    const {darkmode,setAlert,setDisplayKeymap} = useContext(ViewContext)

    useEffect(() => {
        setState({
            ...state,
            mathFunc:`40`,
            displayInput:false,
            polars:true,
            cartCoords:[], // Values will be plotted in this component if not empty
            polarCoords:[], // Values will be plotted in this component if not empty
            degrees:0
        })
    },[])

    const minGearTeeth = 6
    const maxGearTeeth = 100
    const z = parseInt(mathFunc);
    const ref_dia1 = z; // reference diameter
    // const ref_radi = ref_dia1 / 2;
    // const tip_dia1 = ref_dia1 + 2;
    // const tip_radi = tip_dia1 / 2;
    const base_dia1 = ref_dia1 * 0.9396950000000001;
    // const base_circ = base_dia1 * 3.1415926;

    // const base_radi = base_dia1 / 2;
    // const root_diameter = ref_dia1 - 2.5;
    // const root_radi = root_diameter / 2;
    // console.log(blenderCoords)
    const pitch = 360 / z
    // --- Conditions for gear parameters --- //
    const conditions = pitch === 'Infinity' || isNaN(pitch) === true || parseFloat(z) < minGearTeeth || parseFloat(z) > maxGearTeeth

    const gears = (increment) => {
        // e.preventDefault()
        const u1 = [];
        const uMin = 0;
        // const uMax = 30;
        const newUMaxValue = uMax+increment
        const uStep = 50;
        for (let i = uMin; i < newUMaxValue; i++) {
            u1.push(i / uStep);
        }

    
        var invCoords = [] // For displaying in this app
        var exportCoords = [] // Scaled down for blender
        const xVector = [];
        const yVector = [];

        u1.forEach((el, i) => {
            xVector.push(cogScale*((base_dia1 / 2) * (Math.cos(u1[i]) + u1[i] * Math.sin(u1[i]))));
            yVector.push(cogScale*((base_dia1 / 2) * (Math.sin(u1[i]) - u1[i] * Math.cos(u1[i]))));
        });

        xVector.map((el,i) => {
            invCoords.push([xVector[i],yVector[i]])
            exportCoords.push([xVector[i]/cogScale,yVector[i]/cogScale,0])
        })

        setState({
            ...state,
            involute:invCoords,
            blenderCoords:JSON.stringify(exportCoords),
            gearBuildingStep:'step_2',
            uMax:newUMaxValue
        })
    }

    const copyVal = (val,name,message) => {
        navigator.clipboard.writeText(val)
        setAlert(message)
    }

    const reset = () => {
        setState({
            ...state,
            mathFunc:'40',
            degrees:0,
            gearBuildingStep:'step_1',
            blenderCoords:[]
        })
    }

    const rotate = (input) => {setState({...state,degrees:degrees+input})}

    const iStyle = {
        width:'300px',
        height:'50px',
        // backgroundColor:'blue',
        fontSize:'30px',
        position:'absolute',
        marginLeft:'100px'
    }

    return (
        <KeyBox
            style={{
                color:`${darkmode ? '#fff':'#555'}`
            }} 
            darkmode={darkmode}
        >

            {!conditions && gearBuildingStep === 'step_2' && <AdjustmentPanel 
                state={state}
                execution={gears}
                inputParam1={1}
                inputParam2={-1}
                text={'Dots should extend to, but not beyond the purple line'}
            />}

            {!conditions && gearBuildingStep === 'step_3' && <AdjustmentPanel 
                state={state}
                execution={rotate}
                inputParam1={-.5}
                inputParam2={.5}
                text={'Dots should pass through the point where blue and red intersect'}
            />}

            {blenderCoords.length === 0 &&
            <InputField
                type='text'
                onChange={(e) => inputHandler(e)}
                value={mathFunc}
                name="mathFunc"
                inputClass={'small'}
                i={'Number of gear teeth'}
                iStyle={iStyle}
            />
            }

            <Button 
                onClick={(e) => close(e)}
                styles={{right:'10px',top:'170px'}}
                text={backButton()}
            />

            <Button
                style={{
                    right:'10px',top:'90px',
                    fontSize:'30px',
                }}
                text={uturnArrow()}
                p={'Reset'}
                onClick={() => reset()}
            />
            
            <Button
                styles={{right:'10px',top:`${250}px`,zIndex:'1'}}
                buttonType={'image'}
                onClick={() => setDisplayKeymap(true)}
                darkmode={darkmode}
                text={'?'}
                buttonClass={'help'}
            />

            {conditions ?
                <InfoMessage
                    style={{width:'200px',left:'100px'}}
                >
                    {`There should be ${minGearTeeth} to ${maxGearTeeth} gear teeth`}
                </InfoMessage>
                :
                <>

                    {/* INITIALIZE TOOTH PROFILE */}
                    {blenderCoords.length === 0 &&
                    <Step1 gears={gears} inputHandler={inputHandler} state={state}/>}

                    {/* ADJUST TOOTH LENGTH */}
                    {blenderCoords.length > 0 && gearBuildingStep === 'step_2' &&
                        <Step2 state={state} setState={setState} />
                    }

                    {/* ADJUST THICKNESS */}
                    {gearBuildingStep === 'step_3' && 
                        <Step3 state={state} setState={setState} />
                    }

                    {/* COPY PYTHON SCRIPT */}
                    {blenderCoords.length > 0 && gearBuildingStep === 'step_4' && 
                    <Step4 state={state} setState={setState} pitch={pitch} copyVal={copyVal} />}

                </>
            }

            <a
                style={{
                    position:'absolute',
                    left:'0px',
                    fontSize:'30px',
                    fontWeight:'200',
                    bottom:'-120px',
                    textDecoration:'none'
                }}
                href='https://jupyter.madmodels3d.com/Involute%20Gear%20Calculator'
                target="_blank"
            >
                How to build your gear
            </a>

            <a
                style={{
                    position:'absolute',
                    left:'0px',
                    fontSize:'30px',
                    fontWeight:'200',
                    bottom:'-160px',
                    textDecoration:'none'
                }}
                href="https://www.blender.org/"
                target="_blank"
            >
                Download Blender
            </a>

        </KeyBox>
    )
}

export default CogKeys

// For testing in Blender
// verts1 = [[751.7560000000001,0,0],[751.906336165214,0.0020046024805073152,0],[752.3571642594625,0.016034895486146738,0],[753.1079431988271,0.05410694898958918,0],[754.1577715775912,0.12821759763082965,0],[755.5053882692227,0.2503348374781843,0],[757.1491732672819,0.43238824009377863,0],[759.0871487657762,0.6862593896568256,0],[761.3169804783677,1.0237723488866397,0],[763.8359791956817,1.4566841594910156,0],[766.641102579855,1.9966753828479478,0],[769.7289571953108,2.655340686606693,0],[773.0958007746283,3.4441794828700023,0],[776.7375447182312,4.374586623591773,0],[780.6497568265017,5.457843158793367,0],[784.8276642627796,6.705107163169274,0],[789.2661567455932,8.127404636615523,0],[793.959789968327,9.735620484174742,0],[798.902789244411,11.540489580849886,0],[804.089053375985,13.552587926693295,0],[809.5121587438656,15.782323897528691,0],[815.1653636165247,18.23992959661401,0],[821.0416126756553,20.935452312497414,0],[827.1335417557856,23.878746088263874,0],[833.4334827952778,27.079463407308545,0],[839.9334689959296,30.547047000711704,0]]