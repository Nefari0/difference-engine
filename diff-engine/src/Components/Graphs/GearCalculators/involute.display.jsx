import { 
    CogOrigin,
    CogContainer,
    ReferenceCircle
} from "./involute.styles"


const CogDisplay = ({state}) => {

    const { refRadius,involute,mathFunc } = state

    const mappedGears = involute.map((el,i) => {
          var locations = {
            top: `${-el[1]}px`,
            right: `${-el[0]}px`,
            backgroundColor: `red`,
            position: "absolute",
            transition: "all 1000ms",
            width: "2px",
            height: "2px"
          };
          return <p style={locations} key={i}></p>;
      })
    
    return(
        <CogContainer>
            <ReferenceCircle mathFunc={mathFunc}>
                <CogOrigin mathFunc={mathFunc}>
                        {mappedGears}
                </CogOrigin>
            </ReferenceCircle>
        </CogContainer>
    )
}

export default CogDisplay