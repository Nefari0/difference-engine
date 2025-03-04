import { useContext,useEffect } from "react"
import { ViewContext } from "../../Context/view.context"
import { backgroundColors } from "../../../global.styles"
import StandarMathDisplay from "../Calculators/Standard/standard.display"
// import FractionCalc from "../Calculators/Fractions/frac.display"
import FractionCalc from "../Calculators/Converters/Fractions/frac.display"
import Units from "../Calculators/Converters/UnitConverter/units.display"
import PercentDisplay from "../Calculators/Converters/Percentages/percent.display"
import GraphingModule from "./graphing.module"
import LeverageDisplay from "../Calculators/Physics/Leverage/LeverageDisplay/leverage.main"
import RelativePhysicsDisplay from "../Calculators/Physics/Relativity/relative.display"
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
        pasteFromClipboard
    } = props

    const {
        // xAspect,
        // yAspect,
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
        isLoading,
        // setAlert,
    } = useContext(ViewContext)

    useEffect(() => {setScrollSnap(false)},[])
      
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

            {/* GENERATES AND DISPLAYS GRID CELLS AND NUMBERLINES */}
            <Row>
                {/* GRID CELLS */}
                {!polars && mappedTiles}
                {/* NUMBER LINES */}
                {!polars && cartCoords.length > 0 &&
                    <div>
                        <NumberLine parameters={vNumParams} darkmode={darkmode} />
                        <NumberLine parameters={hNumParams} darkmode={darkmode} />
                        <ZeroMarker darkmode={darkmode} color={blue}/>
                        <ZeroMarker rotation={90} darkmode={darkmode} color={red}/>
                    </div>
                }

            </Row>

            {/* THIS IS LAYERED ONTO THE ROW COMPONENT ABOVE */}
            <OriginContainer>

                <GraphingModule
                    state={state}
                    setState={setState}
                    returnPlots={returnPlots}
                />

                {/* CURRENT MATH FORMULA */}
                <MathFormula darkmode={darkmode} >
                    {!showUnitCircleAngles && <MathComponent tex={String.raw`${mathFunc.replace(/ /g, "").replace(/\*/g, ' \\cdot ')}`} />}
                    {!showUnitCircleAngles && state.derivative && !currentView &&
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
                    pasteFromClipboard={pasteFromClipboard}
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

                {currentView === 'leverage' &&
                    <LeverageDisplay 
                        state={state}
                        setState={setState}
                    />
                }

                {/* RELATIVE PHYISICS */}
                {
                    currentView === 'relativity' && 
                    <RelativePhysicsDisplay
                        state={state}
                        setState={setState}
                    />
                }
                
            </OriginContainer>
            
        </ViewPort>
    )
}

export default DisplayModule