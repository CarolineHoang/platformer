import React, { Component } from 'react';
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

// var SpaceBar = " ";

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

// var speed = 5;

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



class map extends Component{

    constructor() {
      super();
      
      this.state = {
        currentTab: 0

      };

      // for (var i = 1; i < this.props.length; i++){{

      // }

    }

    // fillCarusel(){
    //   return <CaruselItem>4</CaruselItem>;

    // }


  render(){



      
      return(
        <body>
{/* <!-- partial:index.partial.html --> */}

<div class= "header">

</div>
<div id="walk-container">
  <div id="walk"></div>
</div>
{/* <!-- <div class="up-ramp"></div> --> */}
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
            {/* <!-- It's really still 320x60 --> */}


            {/* <!-- <circle cx="50" cy="50" r="50" style="fill: red" /> -->
            <!-- <image  href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/walk-sequence.svg" x="0" y="0" width="320px" height="60px" transform="scale(-1,1) translate(-320,0)"/> -->
            <!-- x = how far from the left / right (depending on orientation) we start cutting out 40 px of the image (in this case the base image is translated and we select from the right. So, it should be negative if not 0) -->
            <!-- y = how far from the top you want to push down the image-- here used if you want to push the image toward the block underneath and close gap between feet and floor --> */}
            <image id="playerAvatar" class="pauseLeft" href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/walk-sequence.svg" x="0" y="12" width="320px" height="60px" />
        </svg>
    </svg>
   










</div>
{/* <!-- partial --> */}
  {/* <script  src="./script.js"></script> */}

</body>
      );
  }
}
export default map;