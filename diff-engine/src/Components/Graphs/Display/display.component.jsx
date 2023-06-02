import { useContext } from "react"
import { ViewContext } from "../../Context/view.context"
import { backgroundColors } from "../global.styles"
import StandarMathDisplay from "../Calculators/Standard/standard.display"
import FractionCalc from "../Calculators/Fractions/frac.display"
import Units from "../Calculators/UnitConverter/units.display"
import PercentDisplay from "../Calculators/Percentages/percent.display"
import { 
    OriginContainer,
    ViewPort,
    // Row,
    // GridCell,
    MathFormula,
    ZeroMarker,
 } from "./display.styles"
import { Quadrant, GridCell, Row } from "./Quadrants/quadrant.styles"
import NumberLine from "./NumberLines/nums.component"
import { vNumParams,hNumParams } from "./NumberLines/numlineParams"
import { MathComponent } from "mathjax-react"
import GraphingModule from "./graphing.module"

const { red,blue } = backgroundColors 

const DisplayModule = (props) => {

    const { 
        state,
        setState,
        execute,
    } = props

    const {
        xAspect,
        yAspect,
        polars,
        showUnitCircleAngles,
        mathFunc,
        matrix,
        polarCoords,
        cartCoords
    } = state

    const {
        darkmode,
        currentView,
        scrollBar,
        scrollSnap
    } = useContext(ViewContext)

    const copy = () => {
        if (returnPlots()[0]) {
          navigator.clipboard.writeText(JSON.stringify(returnPlots()))
          setState({...state,noticeContent:"X and Y coordinates copied to clipboard"})
        } else {
          setState({...state,alert:`There are no coordinates yet. Please run the calculation by pressing the "Cartesian" or "Polar" button below`})
        }
    }

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

    const mappedTiles = matrix.map((row, x) => {
        return row.map((col, y) => {
          return (
            <GridCell 
                key={y} 
                darkmode={darkmode}
            >
                {/* <p>{x}</p> <p>{y}</p> */}
            </GridCell>
          );
        });
      });

    // const quadrant4 = mappedTiles.slice(0,mappedTiles.length-1)
    //   console.log('tiles',quadrant4)


    return (
        <ViewPort
            darkmode={darkmode} 
            scrollBar={scrollBar}
            scrollSnap={scrollSnap}
        >

                {!polars &&
                    <div style={{position:'absolute',right:'1000px'}}>
                        {/* <NumberLine parameters={vNumParams} darkmode={darkmode} /> */}
                        <NumberLine parameters={hNumParams} darkmode={darkmode} />
                        <ZeroMarker darkmode={darkmode} color={blue}/>
                        <ZeroMarker rotation={90} darkmode={darkmode} color={red}/>
                    </div>
                }

            <Quadrant
                    x={'493'} 
                    y={'0'} 
                    // color={'blue'}
                    // main={'180deg'}
                    // section={'-1'}
                    // span={'-180deg'}
                    // p={'-1'}

                    // scaleSection={'-1,1'}
                    // sectionRotation={'1,-1'}
                    // spanRotation={'180deg'}
                    // pRotation={'-1'}
                    >

                <Row>
                    {/* GRID CELLS */}
                    {!polars && mappedTiles}
                    {/* NUMBER LINES */}
                    {/* {!polars &&
                        <div>
                            <NumberLine parameters={vNumParams} darkmode={darkmode} />
                            <NumberLine parameters={hNumParams} darkmode={darkmode} />
                            <ZeroMarker darkmode={darkmode} color={blue}/>
                            <ZeroMarker rotation={90} darkmode={darkmode} color={red}/>
                        </div>
                    } */}

                </Row>
            </Quadrant>

            
            <Quadrant
                zIndex={'0'}
                x={'0'} 
                y={'0'} 
                // color={'pink'}
                // main={'180deg'}
                // section={'-1'}
                // span={'-180deg'}
                // p={'-1'}
            >
                <Row>
                    {!polars && mappedTiles}
                </Row>
            </Quadrant>

            <Quadrant
                zIndex={'0'}
                x={'0'} 
                y={'-500'} 
                // color={'yellow'}
                // main={'180deg'}
                // section={'-1'}
                // span={'180deg'}
                // p={'-1'}
            >
                <Row>{!polars && mappedTiles}</Row>
            </Quadrant>

            <Quadrant
                x={'500'} 
                y={'-500'} 
                // color={'red'}
                // zIndex={'1'}
                // sectionRotation={'1,-1'}
                // spanRotation={'180deg'}
                // pRotation={'-1'}
            >
                <Row>{!polars && mappedTiles}</Row>
            </Quadrant>

            <OriginContainer>

                <GraphingModule
                    state={state}
                    setState={setState}
                    returnPlots={returnPlots}
                    vectorMap={vectorMap}
                />

                {/* CURRENT MATH FORMULA */}
                <MathFormula darkmode={darkmode} >
                    {!showUnitCircleAngles && <MathComponent tex={String.raw`${mathFunc.replace(/ /g, "").replace(/\*/g, ' \\cdot ')}`} />}
                </MathFormula>

                {/* PERCENT CALCULATOR */}
                {currentView === 'percentages' && <PercentDisplay
                    state={state}
                    setState={setState}
                />}

                {/* DISPLAY UNIT CONVERTER */}
                {currentView === 'unit_converter' && <Units
                    state={state}
                    setState={setState}
                    execute={execute}
                />}

                {/* DISPLAY FRACTION CALCULATOR */}
                {currentView === 'fracs' && <FractionCalc
                    state={state}
                    input={mathFunc}
                />}

                {/* DISPLAY STANDARD CALCULATOR RESULTS */}
                {currentView === 'standard' && <StandarMathDisplay
                    state={state}
                    setState={setState}
                    execute={execute}
                />}
                </OriginContainer>
            
        </ViewPort>
    )
}

export default DisplayModule