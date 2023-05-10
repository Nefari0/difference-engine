import { useContext } from "react"
import { ViewContext } from "../../Context/view.context"
import StandarMathDisplay from "../Standard/standard.display"
import FractionCalc from "../Fractions/frac.display"
import Units from "../UnitConverter/units.display"
import PercentDisplay from "../Percentages/percent.display"
import { Table,Row,GridCell,MathFormula } from "./display.styles"
import NumberLine from "../NumberLines/nums.component"
import { vNumParams,hNumParams } from "../NumberLines/numlineParams"
import { MathComponent } from "mathjax-react"
import GraphingModule from "./graphing.module"


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
    } = state

    const {
        darkmode,
        currentView
    } = useContext(ViewContext)

    const mappedTiles = matrix.map((row, id1) => {
        return row.map((col, id2) => {
          return <GridCell key={id2} darkmode={darkmode}></GridCell>;
        });
      });

    return (
        <Table
            darkmode={darkmode}   
        >
            <Row>

                {/* GRID CELLS */}
                {!polars && mappedTiles}

                {/* NUMBER LINES */}
                {!polars &&
                    <div>
                        <NumberLine parameters={hNumParams} darkmode={darkmode} />
                        <NumberLine parameters={vNumParams} darkmode={darkmode} />
                    </div>
                }

                {/* GRAPH */}
                <GraphingModule
                    state={state}
                    setState={setState}
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

            </Row>
            
        </Table>
    )
}

export default DisplayModule