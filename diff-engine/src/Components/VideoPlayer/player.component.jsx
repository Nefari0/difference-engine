import { useContext } from "react";
import { ViewContext } from "../Context/view.context";
import { PlayerContainer,PlayerHeader,VideoPlaceholder } from "./player.styles";
import './player.css'
import ReactPlayer from "react-player";
import { CloseX } from "../Graphs/SVG";
import Button from "../Graphs/KeyPad/Button";

const playerWidth=298
const playerHeight=191

const Player = () => {
    const { openPlayer,setOpenPlayer,isOnline } = useContext(ViewContext)
    return (
        <PlayerContainer>
            
            <PlayerHeader style={{width:`${playerWidth}px`}}>
                <h2>{isOnline === false && `you are offline`}</h2>
                <Button 
                    text={CloseX()}
                    onClick={() => setOpenPlayer(null)}
                />
            </PlayerHeader>
            
            {isOnline ? 
            <ReactPlayer
                className='react-player'
                url={openPlayer}
                width={`${playerWidth}px`}
                height={`${playerHeight}px`}
                controls={true}
            />
            :
            <VideoPlaceholder style={{height:playerHeight,width:playerWidth}}>
                <h1>video not available</h1>
            </VideoPlaceholder>
            }
        </PlayerContainer>
    )
}

export default Player