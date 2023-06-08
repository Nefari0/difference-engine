import { useContext,useEffect } from "react"
import { derivative } from "mathjs"
import { ViewContext } from "../../Context/view.context"
import { backgroundColors } from "../global.styles"
import StandarMathDisplay from "../Calculators/Standard/standard.display"
import FractionCalc from "../Calculators/Fractions/frac.display"
import Units from "../Calculators/UnitConverter/units.display"
import PercentDisplay from "../Calculators/Percentages/percent.display"
import GraphingModule from "./graphing.module"
import { 
    OriginContainer,
    ViewPort,
    Row,
    GridCell,
    MathFormula,
    ZeroMarker
 } from "./display.styles"

import NumberLine from "./NumberLines/nums.component"
import Loading from "./Loading/loading.component"
import { vNumParams,hNumParams } from "./NumberLines/numlineParams"
import { MathComponent } from "mathjax-react"

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
        cartCoords,
    } = state

    const {
        darkmode,
        currentView,
        scrollBar,
        scrollSnap,
        setScrollSnap,
        isLoading
    } = useContext(ViewContext)

    useEffect(() => {setScrollSnap(false)},[])

    const vectorMap = (coordArray) => {
        const mappedItems = coordArray.map((el,i) => {
          var locations = {
            bottom: `${yAspect*el[1]}px`,
            left: `${xAspect*el[0]}px`,
            borderRadius: "50%",
            backgroundColor: `${darkmode ? 'white' : 'red'}`,
            position: "absolute",
            transition: "all 1000ms",
            width: "3px",
            height: "3px"
          };
          return <p style={locations} key={i}></p>;
        })
        return <div>{mappedItems}</div>
    }
      
    const returnPlots = () => {
        return (polars === true ? polarCoords : cartCoords)
    }

    const mappedTiles = matrix.map((row, id1) => {
        return row.map((col, id2) => {
          return <GridCell key={id2} darkmode={darkmode}></GridCell>;
        });
      });

    return (
        <ViewPort
            darkmode={darkmode} 
            scrollBar={scrollBar}
            scrollSnap={scrollSnap}
        >
            {isLoading && <Loading/>}

            <Row>
                {/* GRID CELLS */}
                {!polars && mappedTiles}
                {/* NUMBER LINES */}
                {!polars &&
                    <div>
                        <NumberLine parameters={vNumParams} darkmode={darkmode} />
                        <NumberLine parameters={hNumParams} darkmode={darkmode} />
                        <ZeroMarker darkmode={darkmode} color={blue}/>
                        <ZeroMarker rotation={90} darkmode={darkmode} color={red}/>
                    </div>
                }

            </Row>

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
                    {!showUnitCircleAngles && state.derivative && 
                    <div onClick={(e) => execute(e,'mathFunc',state.derivative)}>
                        <MathComponent 
                            tex={String.raw`${'\\frac{d}{dx} = '+state.derivative.replace(/ /g, "").replace(/\*/g, ' \\cdot ')}`} 
                        />
                    </div>
                    }
                </MathFormula>                

                {/* <MathFormula darkmode={darkmode} >
                    
                </MathFormula> */}

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