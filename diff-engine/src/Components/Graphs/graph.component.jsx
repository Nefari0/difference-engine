import {
  Table,
  Row,
  GridCell,
  Origin,
  MathFormula,
  Enclosure,
} from "./graph.styles";

import ViewSettings from "./ViewSettings/view-settings.component";
// import { DisplayScreen } from "./KeyPad/keypad.styles";
import InputField from "./KeyPad/InputField";
import Document from "./Informaton/Help/info.component";


import UnitCircle from "./Plots/Trig/AngleConversion/angle_keys.component";
// import UnitCirclDisplay from "./Plots/Trig/AngleConversion/display.component";

// import CircleGraph from "./Plots/Trig/overlay.component";
import Gaussian from "./Plots/Gaussian/gaus.component";
// import NumberLine from "./NumberLines/nums.component";

import Alert from "./Informaton/Alert/alert.component";
import Notice from "./Informaton/Notice/notice.component";

import StandardKeys from "./Standard/standard.keys";
// import StandarMathDisplay from "./Standard/standard.display";

// import FractionCalc from "./Fractions/frac.display";
import FractionKeys from "./Fractions/frac.keys";

import ParabKeys from "./Plots/Parabolas/parab.keys";
// import ParabolaDisplay from "./Plots/Parabolas/parab.display";

import DisplayKeyInfo from "./KeyPad/KeyInformation/keymap.component";
import { EscapeSheild } from "./KeyPad/KeyInformation/keymap.styles";

import CogKeys from "./GearCalculators/involute.keys";
// import CogDisplay from "./GearCalculators/involute.display";

import UnitsKeys from "./UnitConverter/units.keys";
// import Units from "./UnitConverter/units.display";

import PercentKeys from "./Percentages/percent.keys";
// import PercentDisplay from "./Percentages/percent.display";

import AboutPage from "./Informaton/About/about.component";

// import { BaseButton, TinyButton, KeyBox } from "./KeyPad/keypad.styles";
// import { CopyIcon } from "./SVG";

import DisplayModule from "./Display/display.component";

import {
  // evaluate,
  parser,
  // parse,
  // derivative,
  // simplify,
  // exp,
  // log
} from "mathjs";
 
import KeyPad from "./KeyPad/keypad.component";
import { vNumParams,hNumParams } from "./NumberLines/numlineParams";
import { MathComponent } from "mathjax-react";
import { useEffect, useState, useContext, useRef } from "react";
import { ViewContext } from "../Context/view.context";
import { checkDeviceSize } from "./ViewSettings/viewLogic";

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

  const {
    setCurrentView,currentView,

    displayKeymap,setDisplayKeymap,

    information,

    darkmode,

    about,
  } = useContext(ViewContext)

  const location = window.location.pathname.split('/') // This is for linking to a specific calculator feature

  const [state, setState] = useState({
    xAspect:50,yAspect:50, // Grid scale

    otherPlots:[], // Second, optional parameter for linear and polar vectors
    
    // currentView:null,
    matrix: [],
    polarCoords: [],
    cartCoords:[],
    polars:false, // Display polars or cartesian
    mathFunc:'cos(3 * x) + sin(2 * x)', // INPUT
    displayInput:true, // Toggles main input on/off 

    unitCircle:null, // Display Unit Circle ?
    showUnitCircleAngles:false,

    // --- Radian / Degree conversion --- //
    showDegrees:true,
    degrees:45, // Converting between degrees and radians // INPUT
    radians:.79, // Converting between degrees and radians // INPUT


    // --- Help / Information display --- //
    help:false,
    alert:null,
    noticeContent:null,

    // --- For using standard calculator --- //
    calculation:0,
    history:[],

    // --- Involute gear calculator --- //
    uMax:1,
    refRadius:5,
    involute:[],

    // --- Parabolas --- //
    // h:'0',k:'0',

    // --- Unit converter --- //
    units:'in',
    unitType:'Length',
    
    // otherItems:null,

    // --- Zoom in/out --- //
    viewScale:.5,
    verticalAdjustment:0,

    // --- Percentages --- //
    findPercentValue:'percent',// --- Selected value to find (value of percent or percent of value)
    totalValue:'',
    partialValue:'',  // --- Value to find

  
  });
  const {
    xAspect,yAspect, // Grid acale
    matrix,
    polars,
    cartCoords,
    polarCoords,
    mathFunc,
    // currentView,
    displayInput,
    help,
    alert,
    noticeContent,
    // calculation,
    history,
    showUnitCircleAngles,
    // h,k, // -- parabola

    otherPlots,

    // --- Zoom in / out
    viewScale,
    verticalAdjustment,

  } = state;

  useEffect(() => {
    boardFactory()

      try {

        if (location[1].length > 0) {
          setCurrentView(location[1])
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
    setState({
      ...state,
      viewScale:checkDeviceSize(state,setState),
      matrix: matrix
    });
  };

  const vectorMap = (coordArray) => {
    const mappedItems = coordArray.map((el,i) => {
      var locations = {
        bottom: `${yAspect*el[1]}px`,
        left: `${xAspect*el[0]}px`,
        borderRadius: "50%",
        backgroundColor: `${darkmode ? 'white' : 'red'}`,
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
    // console.log(returnPlots()[0])
    if (returnPlots()[0]) {
      navigator.clipboard.writeText(JSON.stringify(returnPlots()))
      setState({...state,noticeContent:"X and Y coordinates copied to clipboard"})
    } else {
      setState({...state,alert:`There are no coordinates yet. Please run the calculation by pressing the "Cartesian" or "Polar" button below`})
    }
  }

  const close = (e) => {
    e.preventDefault()
    setState({
        ...state,
        displayInput:true,
        currentView:null,
        polars:false,
        mathFunc:'cos(3 * x) + sin(2 * x)',    
        showUnitCircleAngles:false
    })
    setCurrentView(null)
    if (window.location.pathname.length > 1){
      window.location.pathname = '/'
    }
  }

  return (
    <Enclosure
      viewScale={viewScale}
      displayKeymap={displayKeymap}
      darkmode={darkmode}
      verticalAdjustment={verticalAdjustment}
    >

      {/* ---------------------------------------- */}
      {/* ---------------- DISPLAY --------------- */}
      {/* ---------------------------------------- */}

      {about && <AboutPage/>}

      <ViewSettings
        darkmode={darkmode}
        state={state}
        execute={execute}
      />

      {information && <Document
        state={state}
        setState={setState}
      />}

      {alert && <Alert
        state={state}
        execute={execute}
      />}

      <Notice
        state={state}
        setState={setState}
      />

      {/* MATH DISPLAY - (all calculation results displayed here)*/}
      <DisplayModule
        state={state}
        setState={setState}
        vectorMap={vectorMap}
        returnPlots={returnPlots}
        execute={execute}
        copy={copy}
      />

      {/* ---------------------------------------- */}
      {/* ------------------ KEYS ---------------- */}
      {/* ---------------------------------------- */}

      {/* KEY GUIDE */}
      {<DisplayKeyInfo execute={execute}/>}
      {displayKeymap && <EscapeSheild onClick={() => setDisplayKeymap(false)}/>}

      {/* MAIN USER INPUT */}
      {displayInput && <InputField
          darkmode={darkmode}
          type='text'
          onChange={inputHandler}
          value={mathFunc}
          name="mathFunc"
          inputClass={'large'}
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
        close={close}
      />}

      {currentView === 'fracs' && <FractionKeys
        state={state}
        setState={setState}
        inputHandler={inputHandler}
        execute={execute}
        close={close}
        />}

      {currentView === 'gaus' && <Gaussian
        state={state}
        setState={setState}
        formatFunction={formatFunction}
        linearVector={linearVector}
        execute={execute}
        inputHandler={inputHandler}
        close={close}
      />}

      {currentView === "parabolas" &&
      <ParabKeys
        state={state}
        setState={setState}
        execute={execute}
        linearVector={linearVector}
        inputHandler={inputHandler}
        close={close}
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
        close={close}
      />}

      {currentView === 'gear_calculator' &&
        <CogKeys
        execute={execute}
        inputHandler={inputHandler}
        state={state}
        setState={setState}
        close={close}
      />}

      {currentView === 'unit_converter' &&
        <UnitsKeys
          inputHandler={inputHandler}
          state={state}
          setState={setState}
          close={close}
          execute={execute}
          calculate={calculate}
        />}

      {currentView === 'percentages' &&
        <PercentKeys 
          close={close}
          state={state}
          setState={setState}
          execute={execute}
        />}

    </Enclosure>
  );
};
