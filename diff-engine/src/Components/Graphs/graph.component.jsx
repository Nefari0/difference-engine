import { Enclosure } from "./graph.styles";
import ViewSettings from "./ViewSettings/view-settings.component";
import InputField from "./KeyPad/InputField";
import Document from "./Informaton/Help/info.component";
import Alert from "./Informaton/Alert/alert.component";
import Notice from "./Informaton/Notice/notice.component";
import DisplayKeyInfo from "./KeyPad/KeyInformation/keymap.component";
import { EscapeSheild } from "./KeyPad/KeyInformation/keymap.styles";
import AboutPage from "./Informaton/About/about.component";
import DisplayModule from "./Display/display.component";
import KeyModule from "./KeyPad/keypad.component";

import {
  // evaluate,
  parser,
  // parse,
  // derivative,
  // simplify,
  // exp,
  // log
} from "mathjs";
 
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

    // --- Unit converter --- //
    units:'in',
    unitType:'Length',

    // --- Zoom in/out --- //
    viewScale:.5,
    verticalAdjustment:0,

    // --- Percentages --- //
    findPercentValue:'percent',// --- Selected value to find (value of percent or percent of value)
    totalValue:'',
    partialValue:'',  // --- Value to find

  
  });
  const {
    // xAspect,yAspect, // Grid acale
    mathFunc,
    displayInput,
    alert,
    history,
    // --- Zoom in / out
    viewScale,
    verticalAdjustment,
    polarCoords,
    cartCoords,
    polars

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

  const returnPlots = () => {
    return (polars === true ? polarCoords : cartCoords)
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

      {information && <Document/>}

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
        execute={execute}
        returnPlots={returnPlots}
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

      <KeyModule
          state={state}
          setState={setState}
          execute={execute}
          calculate={calculate}
          inputHandler={inputHandler}
          close={close}
          linearVector={linearVector}
          polarVector={polarVector}
          formatFunction={formatFunction}
          returnPlots={returnPlots}
      />

    </Enclosure>
  );
};
