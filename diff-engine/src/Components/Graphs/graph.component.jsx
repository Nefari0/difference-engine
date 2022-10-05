import { Table,Row,GridCell,PolarQuadrants } from "./graph.styles";
import { useEffect, useState } from "react";
import { evaluate,parser,parse,derivative,simplify } from "mathjs";
var par = parser()

// Vectors
const max = 250

// Linear vector generator
var xVector = []
for (let i = -max; i < max; i++) {xVector.push(i)}

// Circular vector generator
const circleVector = []
const fragment = 2*Math.PI/max
var iteration = 0
for (let i = 0; i < max; i++) {
  iteration += fragment
  circleVector.push(iteration)
}

export default function Graph() {

  const [state, setState] = useState({
    matrix: [],
    polarCoords: [],
    cartCoords:[],
    polars:false,
    mathFunc:'cos(3 * x) + sin(2 * x)'
  });
  const { matrix, polars, cartCoords, polarCoords, mathFunc } = state;

  useEffect(() => {boardFactory()},[]);
  
  const polarVector = async () => {
    var func = [];
    var coords = [];

    await circleVector.forEach((i) => {
      par.set('x',i)
      func.push(par.evaluate(mathFunc))
    });
    
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
  const linearVector = async () => {
    var func = []
    var coords =[]

    await xVector.forEach((i) => {
      i = i / 100
      par.set('x',i)
      func.push(par.evaluate(mathFunc))
    });
    
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
        bottom: `${100*el[1]}px`,
        left: `${100*el[0]}px`,
        borderRadius: "50%",
        backgroundColor: `red`,
        position: "absolute",
        transition: "all 1000ms",
        width: "5px",
        height: "5px"
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

  return (
    <div className="App">
      <Table className="Table">
        <Row>
          <PolarQuadrants polars={polars}>
            {vectorMap(returnPlots())}
          </PolarQuadrants>
          {mappedTiles}
          <input
            type='text'
            onChange={inputHandler}
            placeholder={mathFunc}
            name="mathFunc"
          />
          <button style={{left:'0px'}} onClick={linearVector}>Cartesian</button>
          <button style={{right:'0px'}} onClick={polarVector}>Polar</button>
        </Row>
      </Table>
    </div>
  );
}
