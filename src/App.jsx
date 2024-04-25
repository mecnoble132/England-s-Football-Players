import React from 'react'
import './App.css'
import PlayerCard from "./components/PlayerCard";
import Header from './components/header';
import playersData from './assets/playersData';

const players = playersData.map(player => {
  return (
    <PlayerCard 
      key={player.id}
      player={player}
    />
  )
})

function App() {

  return (
    <div className="container">
      <Header />
      <div className="player-grid">
        {players}
      </div>
    </div>
  )
}

export default App
