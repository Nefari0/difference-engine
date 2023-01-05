import {
  Table,
  Row,
  GridCell,
  Origin,
  MathFormula,
  Enclosure,
} from "./graph.styles";

import { DisplayScreen } from "./KeyPad/keypad.styles";
import Document from "./Informaton/Help/operators.component";
import UnitCircle from "./Plots/Trig/AngleConversion/angle_keys.component";
import UnitCirclDisplay from "./Plots/Trig/AngleConversion/display.component";
import CircleGraph from "./Plots/Trig/overlay.component";
import Gaussian from "./Plots/Gaussian/gaus.component";
import NumberLine from "./NumberLines/nums.component";
import Alert from "./Informaton/Alert/alert.component";
import StandardKeys from "./Standard/standard.keys";
import StandarMathDisplay from "./Standard/standard.display";
import FractionCalc from "./Fractions/frac.display";
import FractionKeys from "./Fractions/frac.keys";
import ParabKeys from "./Plots/Parabolas/parab.keys";
import ParabolaDisplay from "./Plots/Parabolas/parab.display";
import { BaseButton } from "./KeyPad/keypad.styles";

import CogKeys from "./GearCalculators/involute.keys";
import CogDisplay from "./GearCalculators/involute.display";
// import { InvoluteCalcDisplay } from "./GearCalculators/involute.display";
// import UnitCircleDisplay from "./KeyPad/Plots/Trig/unitCircleDisplay.component";
// import { Theta, ThetaOrigin } from "./KeyPad/Plots/Trig/display.styles";

import {
  evaluate,
  parser,
  parse,
  derivative,
  simplify,
  exp,
  log
} from "mathjs";
 
import KeyPad from "./KeyPad/keypad.component";
import { vNumParams,hNumParams } from "./NumberLines/numlineParams";
import { MathComponent } from "mathjax-react";
import { useEffect, useState } from "react";

const errorMessage = "There is an error preventing this operation from continuing. Please view the documentation to learn about proper syntax structuring."
var par = parser()

// Vectors
const max = 250
const min = -250

// Linear vector generator
var xVector = []
var yVector = []
for (let i = min; i < max; i++) {
  xVector.push(i)
  yVector.push(i)
}

// Circular vector generator
const circleVector = []
const fragment = 2*Math.PI/max
var iteration = 0
  for (let i = 0; i < (max*2); i++) {
  iteration += fragment
  circleVector.push(iteration)
}

export default function Graph() {

  const location = window.location.pathname.split('/') // This is for linking to a specific calculator feature

  const [state, setState] = useState({
    xAspect:50,yAspect:50, // Grid scale

    otherPlots:[], // Second, optional parameter for linear and polar vectors
    
    currentView:null,
    matrix: [],
    polarCoords: [],
    cartCoords:[],
    polars:false, // Display polars or cartesian
    mathFunc:'cos(3 * x) + sin(2 * x)',
    unitCircle:null, // Display Unit Circle ?
    showUnitCircleAngles:false,

    // --- Radian / Degree conversion --- //
    showDegrees:true,
    degrees:45, // Converting between degrees and radians
    radians:.79, // Converting between degrees and radians

    displayInput:true, // Toggles main input on/off 

    // --- Help / Information display --- //
    help:false,
    alert:null,

    // --- For using standard calculator --- //
    calculation:0,
    history:[],

    // --- Involute gear calculator --- //
    uMax:50,
    refRadius:5,
    involute:[],

    // --- Parabolas --- //
    // h:'0',k:'0',
    

    // otherItems:null,
  
  });
  const {
    xAspect,yAspect, // Grid acale
    matrix,
    polars,
    cartCoords,
    polarCoords,
    mathFunc,
    currentView,
    displayInput,
    help,
    alert,
    // calculation,
    history,
    showUnitCircleAngles,
    // h,k, // -- parabola

    otherPlots,
    uMax,
    refRadius,
    involute
  } = state;

  useEffect(() => {
    boardFactory()

      try {

        if (location[1].length > 0) {
          setState({
            ...state,
            currentView:location[1]
          })
        }

        } catch (err) {
          return err
        }
      // gears()
    },[]);
  
  const polarVector = async (mathFunc) => {
    var func = [];
    var coords = [];

    try {

      await circleVector.forEach((i) => {
        par.set('x',i)
        par.set('y',i)
        par.set('u',i)
        par.set('X',i)
        par.set('Y',i)
        par.set('U',i)
        func.push(par.evaluate(mathFunc))
      });

    } catch (err) {
      setState({...state,alert:errorMessage+'Hint: You may be using an invalid variable'})
      return
    }

    
    await func.forEach((el, x) => {
      coords.push([el * Math.cos(circleVector[x]), el * Math.sin(circleVector[x])]);
    });
    await setState({ ...state,
      polarCoords:coords,
      polars:true
    });
    return
  };

  // ---- Linear ---- //
  const linearVector = async (mathFunc,otherPlots) => {
    var func = []
    var coords =[]

    try {

      await xVector.forEach((i) => {
        i = i / 100
        par.set('x',i)
        par.set('y',i)
        par.set('u',i)
        par.set('X',i)
        par.set('Y',i)
        par.set('U',i)
        func.push(par.evaluate(mathFunc))
      });

    } catch (err) {
      setState({...state,alert:errorMessage+'Hint: You may be using an invalid variable'})
      return
    }
    
    await func.forEach((el,x) => {
      x = x / 100
      coords.push([x,el])
    });

    await setState({
      ...state,
      cartCoords:coords,
      polars:false,
      otherPlots:(otherPlots ? otherPlots:[]),
    })
    return coords
  }

  const calculate = (e,mathFunc) => {
    const smallestVal = () => {return ( mathFunc.split('').length < 1 ? '0' : mathFunc)}
    e.preventDefault()
    try {
      const result = par.evaluate(smallestVal())
      history.push([mathFunc,result])
      setState({
        ...state,
        calculation:result.toString(),
      })
      return
    } catch (err) {
      setState({...state,alert:errorMessage+' NOTE: Variables are not allowed during standard calculations'})
      return
    }

  }

  const boardFactory = () => {
    var matrix = [];
    var numOfTiles = 10;
    var M = Array.from(Array(numOfTiles)); // rows
    for (let i = 0; i < numOfTiles; i++) {
      matrix.push(M);
    } // columns
    setState({ ...state, matrix: matrix });
  };
  
  const mappedTiles = matrix.map((row, id1) => {
    return row.map((col, id2) => {
      return <GridCell key={id2}></GridCell>;
    });
  });

  const vectorMap = (coordArray) => {
    const mappedItems = coordArray.map((el,i) => {
      var locations = {
        bottom: `${yAspect*el[1]}px`,
        left: `${xAspect*el[0]}px`,
        borderRadius: "50%",
        backgroundColor: `red`,
        position: "absolute",
        transition: "all 1000ms",
        width: "2px",
        height: "2px"
      };
      return <p style={locations} key={i}></p>;
    })
    return <div>{mappedItems}</div>
  }
  
  const returnPlots = () => {
    return (polars === true ? polarCoords : cartCoords)
  }

  const inputHandler = (e) => {
    e.preventDefault()
    const {name,value} = e.target
    setState({...state,[name]:value.toLowerCase()})
  }

  const formatFunction = (string) => {
    return(string.replace(/ /g, "").replace(/\*/g, ''))
  }

  const execute = async (e,prop,val) => {
    e.preventDefault()
    await setState({...state,[prop]:val})
  }

  if(state.calculation === "Infinity") {
    setState({...state,
      alert:'Its against the law to devide by 0',
      calculation:0
    })
  }

  const copy = () => {
    navigator.clipboard.writeText(JSON.stringify(returnPlots()))
    setState({...state,alert:"X and Y coordinates copied to clipboard"})
}

  return (
    <Enclosure>

      {help && <Document
        state={state}
        setState={setState}
      />}

      {alert && <Alert
        state={state}
        execute={execute}
      />}

      <Table className="Table">
        <Row>
          
          <Origin
            xAspect={xAspect}
            yAspect={yAspect}
            polars={polars}
          >

            {vectorMap(returnPlots())}

            {currentView === 'gear_calculator' &&
              <CogDisplay
                state={state}
              />
            }

            {currentView === 'parabolas' && <ParabolaDisplay
              otherPlots={otherPlots}
              xAspect={xAspect}
              yAspect={yAspect}
              cartCoords={cartCoords}
            />}
            
            {currentView === 'unit_circle' && !showUnitCircleAngles &&
            <UnitCirclDisplay
              vectorMap={vectorMap}
              formatFunction={formatFunction}
              linearVector={linearVector}
              polarVector={polarVector}
              execute={execute}
              state={state}
            />}

            {polars && <CircleGraph showUnitCircleAngles={showUnitCircleAngles}/>}

          </Origin>
          
          {/* CURRENT MATH FORMULA */}
            <MathFormula>
                {!showUnitCircleAngles && <MathComponent tex={String.raw`${mathFunc.replace(/ /g, "").replace(/\*/g, ' \\cdot ')}`} />}
            </MathFormula>

          {!currentView && 
            <BaseButton 
              style={{position:'absolute',width:'150px',height:'50px',left:'0',top:'0px',zIndex:'1',opacity:'.6'}}
              onClick={() => copy()}
            >
              copy coordinates
            </BaseButton>
          }

          {/* DISPLAY STANDARD CALCULATOR RESULTS */}
          {currentView === 'standard' && <StandarMathDisplay
            state={state}
            setState={setState}
            execute={execute}
          />}

          {/* DISPLAY FRACTION CALCULATOR */}
          {currentView === 'fracs' && <FractionCalc
            state={state}
            input={mathFunc}
          />}
          
          {/* GRID CELLS */}
          {!polars && mappedTiles}

          {/* NUMBER LINES */}
          {!polars &&
            <>
              <NumberLine parameters={hNumParams} />
              <NumberLine parameters={vNumParams} />
            </>
          }
          
        </Row>
      </Table>

      {displayInput && <DisplayScreen
        type='text'
        onChange={inputHandler}
        value={mathFunc}
        name="mathFunc"
      />}

      {!currentView && <KeyPad
        formatFunction={formatFunction}
        linearVector={linearVector}
        polarVector={polarVector}
        execute={execute}
        state={state}
        setState={setState}
      />}

      {currentView === 'standard' && <StandardKeys
        state={state}
        setState={setState}
        execute={execute}
        calculate={calculate}
        inputHandler={inputHandler}
      />}

      {currentView === 'fracs' && <FractionKeys
        state={state}
        setState={setState}
        inputHandler={inputHandler}
        execute={execute}
        />}

      {currentView === 'gaus' && <Gaussian
        state={state}
        setState={setState}
        formatFunction={formatFunction}
        linearVector={linearVector}
        execute={execute}
        inputHandler={inputHandler}
      />}

      {currentView === "parabolas" &&
      <ParabKeys
        state={state}
        setState={setState}
        execute={execute}
        linearVector={linearVector}
        inputHandler={inputHandler}
      />
      }

      {currentView === 'unit_circle' && 
      <UnitCircle
        state={state}
        setState={setState}
        formatFunction={formatFunction}
        linearVector={linearVector}
        polarVector={polarVector}
        execute={execute}
        inputHandler={inputHandler}
      />}

      {currentView === 'gear_calculator' &&
        <CogKeys
        execute={execute}
        inputHandler={inputHandler}
        state={state}
        setState={setState}
      />}

    </Enclosure>
  );
};
