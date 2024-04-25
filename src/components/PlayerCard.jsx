import React from "react";
function PlayerCard(props) {
    return (
        <div className="player-card">
            <img src={props.player.img} alt={props.player.name} className="player-img" />
            <div className="player-info">
                
                <p className="player-name">{props.player.name}</p>
                <p className="position">{props.player.position}</p>
                <p className="value">€{props.player.value}m</p>
            </div>
        </div>
    )
}

export default PlayerCard

// <div className="player-card">
        //     <img src={props.player.image} alt="foden" className="player-img" />
        //     <div className="player-info">
        //         <p className="player-name">{props.player.name}</p>
        //         <p className="position">{props.player.position}</p>
        //         <p className="value">€{props.player.value}m</p>
        //     </div>
        // </div>