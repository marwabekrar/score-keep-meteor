import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Players, calculatePlayerPositions} from  './../imports/api/players';
import {tracker} from 'meteor/tracker';
import App from './../imports/ui/App';











Meteor.startup(()=>{
  // tu synchronises ici
  Tracker.autorun(()=>{
  let players = Players.find({}, {sort : {score : -1 }}).fetch();
  let positionedPlayers = calculatePlayerPositions(players);
  let title = "Score Keep";
  let Subtitle = 'marwa' ;
 
  ReactDOM.render(<App title = {title}  players = {positionedPlayers} />, document.getElementById('app'));
});
    
   
  });
  
  
  