import React, { Component, useState, useContext, useEffect } from 'react';
import styled from "styled-components";
import Avatar from './avatar.js';
import "./styles.css";
import GameMap from "./gameMap.js"

// import Carusel from "./Carusel";



// const Wrapper = styled.div`
// height: 90vh;
// width: 70%;
// background-color: pink;
// margin-left: 5vw;
// `;

const PageBody = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MapContainer = styled.div`
    width: 75vw;
    height: 50vw;
    background-color: lightcoral;
`;

const Ground = styled.div`
    width: 100%;
    height: 1vw;
    background-color: green;
    position: relative;
    bottom: calc(-100% + 2vw);
`;

const AvatarStyles = styled.div`
    position: relative; 
    bottom: calc(-100% + 0vw);
`;





// var screen = document.getElementById("screen");
// var player = document.getElementById("player");
// var platform = document.getElementsByClassName("platform");

var SpaceBar = " ";

// var xVar = 10;
// var yVar = 200




// // idea: past present future / backstory objectives prophecy
// var platPositions = [
//   [5,480,1000,5,      0,   null ],

//   [50,280,100,20,     1,   {"doorName": "About Me", "doorLink": "aboutMe.html"} ], 
//   [50,390,100,20,     0,   null ],

//   [250,340,100,20,    0,   null ],

//   [350,310,100,20,    0,   null ],
//   [350,390,100,20,    0,   null ],
  
//   [500,310,100,20,    0,   null ],
//   [500,430,100,20,    1,   {"doorName": "Projects", "doorLink": "http://www.w3schools.com"} ],
  
//   [650,350,100,20,    0,   null ],
//   [650,430,100,20,    0,   null ],
  
// ]

var height = 500, //determines how many pixels away from the top of the screen is our baseline where the box will lie at rest/ y=0
    width = 1300, //width of screen //"9vw"
    basePlayerHeight =60, //63=60(baseplayer img height)+3(extra px of hight between ground and "feet") //NOTE: I went back to 60 this time!
    playerHeight = basePlayerHeight, //actual box height ["tallness"] is determined in html; here we determine how high the base of the box is to the y=0 hight line
    //height -playerHeight = pixels between the bottom of the box and the green base line
    playerWidth = 40;

    var speed = 5;


    //this is originally how the size was set but now it's in the css style sheet
// screen.setAttribute("width", width);
// screen.setAttribute("height", height);








var worldData = {
    "player": {
      "x" : Math.floor(width / 2) - Math.floor(playerWidth / 2),
      "y" : 8, //height - playerHeight
      "fallingSpeed": 0,
      "currentDir": null,
      "jumpDisplacement": 1,
      "playerFacing":"left"
    },
    // Stores the current held keys. Can be inspected.
    "keysDown": []
  }


//   let update = () => {
//     // Bind svg rectangle to worldData
//     player.setAttribute("x", worldData.player.x);
//     player.setAttribute("y", worldData.player.y);
//   }
//   update();



function Game() {//must be capitalized

    const [ x, setX] = useState(0);
    const [ y, setY] = useState(0);
    const [keysDown, setKeysDown ] = useState([]);

    useEffect(()=>{  //if key is down, add to array of active keys
                     //if key is released, remove from active keys
        const fireKeyAction =(key, isDown)=>{
            // Only trigger Arrow keys.
            var keysDown = worldData.keysDown;
            console.log(keysDown)
            console.log(key)
            switch(key){
                case "ArrowLeft":
                case "ArrowRight":
                case "ArrowUp":
                case "ArrowDown":
                case SpaceBar:
                    if (isDown) {
                        // Only add the key if it's not already in the list.
                        if (keysDown.indexOf(key) === -1) {
                            keysDown.push(key);
                        }
                    } else {
                        keysDown.splice(keysDown.indexOf(key), 1);
                    };
            }
        }
        const handleKeyDown = (e) => {
            console.log("pressing!!")
            var key = e.key;
            fireKeyAction(key, true)
        }
        const handleKeyUp = (e) => {
            var key = e.key;
            fireKeyAction(key, false)
        }
        window.addEventListener('keydown', handleKeyDown, false);
        window.addEventListener('keyup', handleKeyUp, false);
    });
    function getAvatarX(e){
        setX(e.target.value);
    } 
    function getAvatarY(e){
        setY(e.target.value);
    } 
    // constructor() {
    //   super();
      
    //   this.state = {
    //     currentTab: 0

    //   }
    // }


//   render(){



      
    return(
        <body>
            <div class= "header">
                <input value={x} onChange= {getAvatarX}></input>
                <div>{x}</div>
                <input value={y} onChange= {getAvatarY}></input>
                <div>{keysDown}</div>
            </div>

            <div id="walk-container">
                <div id="walk"></div>
            </div>

            <div class= "game">
                <svg id="screen">
                    {/* <!-- rending background graphics:--------------------------------------> */}
                    <GameMap></GameMap>
                    {/* <!-- viewBox="<xPos> <ypos> <width> <height>" -->
                    <!-- width!= viewbox to show that we "cut out the image to show with a width of only 40px" -->
                    <!-- height = viewbox becuase that is to the scale we originally set -->
                    <!-- xMinYMin = align to top right   |    slice= don't show whatever doesn't fit in the "view" defined by width and height    |  Note: it's confusingly named, but viewbox does not define the viewable so much as the whole thing, height and width is for what is viewable --> */}
                    <svg id="player"  
                    // x="500" y="200" 
                    width="40px" height="63px" viewBox="0 0 320 63" preserveAspectRatio="xMinYMin slice">
                        <image id="playerAvatar" class="pauseLeft" href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/walk-sequence.svg" x="0" y="12" width="320px" height="60px" />
                    </svg>
                </svg>
            </div>
        </body>
      );
}
// }
export default Game;