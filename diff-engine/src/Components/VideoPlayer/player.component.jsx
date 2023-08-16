import { PlayerContainer,PlayerHeader } from "./player.styles";
import './player.css'
import ReactPlayer from "react-player";
import { CloseX } from "../Graphs/SVG";
import Button from "../Graphs/KeyPad/Button";

const playerWidth=298
const playerHeight=191

const Player = () => {
    const video_url = 'https://vimeo.com/852046580'
    return (
        <PlayerContainer>
            <PlayerHeader style={{width:`${playerWidth}px`}}>
                <Button 
                    text={CloseX()}
                />
            </PlayerHeader>
            
            <ReactPlayer
                className='react-player'
                url={video_url}
                width={`${playerWidth}px`}
                height={`${playerHeight}px`}
                controls={true}
            />
        </PlayerContainer>
    )
}

export default Player