import { Numbers } from "./nums.styles"

const NumberLine = ({parameters,darkmode}) => {

    const nums = [-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12]

    const mappedNumber = nums.map(el => {
        const middle = (el === -5 && '0')
        return (
            <li 
                key={el} 
                style={{opacity:middle}}
            >
                <strong >
                    {el}
                </strong>
            </li>
        )
    })

    return (
        <Numbers
            parameters={parameters}
            darkmode={darkmode}
        >
            {mappedNumber}
        </Numbers>
    )
}

export default NumberLine