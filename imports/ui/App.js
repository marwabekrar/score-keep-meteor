import React from 'react';
import PropTypes from 'prop-types'
import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';
import Players from './../api/players';







export default class App extends React.Component{
  
  
render (){
    return (
      <div> 
          
       <TitleBar title = {this.props.title} Subtitle='Created by Marwa bekrar'/>
      <div className = 'wrapper'> 
      
       <PlayerList players ={this.props.players}/>   
      <AddPlayer/>
      </div>
     
      </div>
    );
  }
  
  
};

App.propTypes ={
  title : PropTypes.string.isRequired,
  players :PropTypes.array.isRequired
  
  
  
}