import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Players} from './../api/players'





export default class AddPlayer extends React.Component{
  handleSubmit = (e) => {
  e.preventDefault();
  let playerName= e.target.playerName.value;
  if (playerName) {
                    e.target.playerName.value='';
                    Players.insert({
                    name : playerName,
                    score : 0
                    });
                  }
  } 

  render(){
    return (
      <div className='item'>  
     
      <form className='form' onSubmit={this.handleSubmit.bind(this)}>
         <input className='form__input' type = 'text' name = 'playerName' placeholder= 'Player name'/>
        <button className='button'> Add player </button>
         </form>
 </div>
    );
    
    
    
    
    /*let playerslist = Players.find().fetch();
    return playerslist.map((player) => {
    return (
      <p key={player._id}>
      {player.name} has {player.score} point(s) 
    <button onClick={() => {Players.update (player._id, {$inc: {score : 1}})} }> +1 </button>
    <button onClick={() => {Players.update (player._id, {$inc: {score : -1}})} }> -1 </button>
      
    <button onClick={() => Players.remove (player._id) }> X </button>
    </p>                          
                      
    );
  } );*/
    
    
  }
}