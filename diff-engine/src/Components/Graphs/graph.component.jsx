import {
  Table,
  Row,
  GridCell,
  Origin,
  BaseButton,
  MathFormula,
  Enclosure,
} from "./graph.styles";

import { DisplayScreen } from "./KeyPad/keypad.styles";

import UnitCircle from "./Plots/Trig/AngleConversion/angle_keys.component";
import UnitCirclDisplay from "./Plots/Trig/AngleConversion/display.component";
import CircleGraph from "./Plots/Trig/overlay.component";
import Gaussian from "./Plots/Gaussian/gaus.component";
import NumberLine from "./NumberLines/nums.component";
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
var par = parser()

// Vectors
const max = 250
const min = -250

// Linear vector generator
var xVector = []
for (let i = min; i < max; i++) {xVector.push(i)}

// Circular vector generator
const circleVector = []
const fragment = 2*Math.PI/max
var iteration = 0
  for (let i = 0; i < (max*2); i++) {
  iteration += fragment
  circleVector.push(iteration)
}

export default function Graph() {

  const [state, setState] = useState({
    currentView:null,
    matrix: [],
    polarCoords: [],
    cartCoords:[],
    polars:false, // Display polars or cartesian
    mathFunc:'cos(3 * x) + sin(2 * x)',
    unitCircle:null, // Display Unit Circle ?

    // --- Radian / Degree conversion --- //
    showDegrees:true,
    degrees:45, // Converting between degrees and radians
    radians:.79, // Converting between degrees and radians

    displayInput:true // Toggles main input on/off 
  });
  const {
    matrix,
    polars,
    cartCoords,
    polarCoords,
    mathFunc,
    currentView,
    displayInput,
  } = state;

  useEffect(() => {boardFactory()},[]);
  
  const polarVector = async (mathFunc) => {
    var func = [];
    var coords = [];

    try {

      await circleVector.forEach((i) => {
        par.set('x',i)
        par.set('y',i)
        par.set('u',i)
        func.push(par.evaluate(mathFunc))
      });

    } catch (err) {linearVector('cos(3 * x) + sin(2 * x)')}

    
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
  const linearVector = async (mathFunc) => {
    // console.log('hit linear vector')
    var func = []
    var coords =[]

    try {

      await xVector.forEach((i) => {
        i = i / 100
        par.set('x',i)
        par.set('y',i)
        par.set('u',i)
        func.push(par.evaluate(mathFunc))
      });

    } catch (err) {linearVector('cos(3 * x) + sin(2 * x)')}
    
    await func.forEach((el,x) => {
      x = x / 100
      coords.push([x,el])
    });

    await setState({
      ...state,
      cartCoords:coords,
      polars:false
    })
    return
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
        bottom: `${50*el[1]}px`,
        left: `${50*el[0]}px`,
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
    setState({...state,[name]:value})
  }

  const formatFunction = (string) => {
    return(string.replace(/ /g, "").replace(/\*/g, ''))
  }

  const execute = async (e,prop,val) => {
    e.preventDefault()
    await setState({...state,[prop]:val})
  }

  return (
    <Enclosure>

      <Table className="Table">
        <Row>
          
          <Origin polars={polars}>

            {vectorMap(returnPlots())}

            {currentView === 'unit_circle' ? <UnitCirclDisplay
              formatFunction={formatFunction}
              linearVector={linearVector}
              polarVector={polarVector}
              execute={execute}
              state={state}
              />:null}
              {polars && <CircleGraph />}

          </Origin>
          
          <MathFormula>
            <MathComponent tex={String.raw`${mathFunc.replace(/ /g, "").replace(/\*/g, '')}`} />
          </MathFormula>
          
          {!polars && mappedTiles}
          <NumberLine parameters={hNumParams} />
          <NumberLine parameters={vNumParams} />
          
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
      />}

      {currentView === 'gaus' ? <Gaussian
        state={state}
        setState={setState}
        formatFunction={formatFunction}
        linearVector={linearVector}
        execute={execute}
        inputHandler={inputHandler}
      />:null}

      {currentView === 'unit_circle' ? 
      <UnitCircle
        state={state}
        setState={setState}
        formatFunction={formatFunction}
        linearVector={linearVector}
        polarVector={polarVector}
        execute={execute}
        inputHandler={inputHandler}
      />
      :null}

    </Enclosure>
  );
};
