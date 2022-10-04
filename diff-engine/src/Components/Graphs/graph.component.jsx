import { Table,Row,GridCell,PolarQuadrants } from "./graph.styles";
import { useEffect, useState } from "react";

export default function Graph() {

  const [state, setState] = useState({
    matrix: [],
    polarCoords: [],
    cartCoords:[],
    polars:false
  });
  const { matrix, polars, cartCoords, polarCoords } = state;

  useEffect(() => {boardFactory()},[]);
  
  const polarVector = async () => {
    const xPoints = 600
    var func = [];
    var coords = [];
    var elements = await [...Array.from(Array(xPoints))];
    
    await elements.forEach((el, i) => {
      func.push(4 + Math.cos(3 * i) + Math.sin(2 * i));
    });
    
    await func.forEach((el, x) => {
      coords.push([el * Math.sin(x), el * Math.cos(x)]);
    });
    await setState({ ...state, polarCoords: coords });
    return
  };

  // ---- Linear ---- //
  const linearVector = async () => {  
    const xPoints = 600
    var func = []
    var coords =[]
    var elements = await [...Array.from(Array(xPoints))];

    await elements.forEach((el,i) => {
      i = i / 100
      func.push(4 + Math.cos(3 * i) + Math.sin(2 * i))
    });
    
    await func.forEach((el,x) => {
      x = x / 100
      console.log(x,el)
      coords.push([x,el])
    });

    await setState({...state,cartCoords:coords})
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

  const switchView = () => {
    // console.log(returnPlots())
    setState({...state,polars:!polars})
  }
  
  const returnPlots = () => {
    // console.log('hit returnPlots',polars)
    return (polars === true ? polarCoords : cartCoords)
  }

  const initialize = async () => {
    await polarVector();
    await linearVector();
  };

  return (
    <div className="App">
      <Table className="Table">
        <Row>
          <PolarQuadrants polars={polars}>
            {/* {vectorMap(polarCoords)} */}
            {vectorMap(returnPlots())}
          </PolarQuadrants>
          {mappedTiles}
          <button style={{right:'0px'}} onClick={switchView}>Switch Coordinates</button>
          <button style={{left:'0px'}} onClick={linearVector}>Initialize</button>
          <button style={{right:'350px'}} onClick={polarVector}>Polar</button>
        </Row>
      </Table>
    </div>
  );
}
