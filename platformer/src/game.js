import React, { Component, useState, useContext, useEffect, useRef } from 'react';
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

const AvatarStyles = styled.svg`
    /* position: relative; 
    bottom: calc(-100% + 0vw); */
    transform:  translate(${props => props.moveX}, ${props => props.moveY});
`;





// var screen = document.getElementById("screen");
// var player = document.getElementById("player");
// var platform = document.getElementsByClassName("platform");

var SpaceBar = " ";
var RENDER_FPS = 30;

// var xVar = 10;
// var yVar = 200




// // idea: past present future / backstory objectives prophecy
var platPositions = [
  [5,480,1300,5,      0,   null ],

  [50,280,100,20,     1,   {"doorName": "About Me", "doorLink": "aboutMe.html"} ], 
  [50,390,100,20,     0,   null ],

  [250,340,100,20,    0,   null ],

  [350,310,100,20,    0,   null ],
  [350,390,100,20,    0,   null ],
  
  [500,310,100,20,    0,   null ],
  [500,430,100,20,    1,   {"doorName": "Projects", "doorLink": "http://www.w3schools.com"} ],
  
  [650,350,100,20,    0,   null ],
  [650,430,100,20,    0,   null ],
  
]

var height = 500, //determines how many pixels away from the top of the screen is our baseline where the box will lie at rest/ y=0
    width = 1300, //width of screen //"9vw"
    basePlayerHeight =60, //63=60(baseplayer img height)+3(extra px of hight between ground and "feet") //NOTE: I went back to 60 this time!
    playerHeight = basePlayerHeight, //actual box height ["tallness"] is determined in html; here we determine how high the base of the box is to the y=0 hight line
    //height -playerHeight = pixels between the bottom of the box and the green base line
    playerWidth = 40;

    var MAX_SPEED = 4;
    var speed = 0;


    //this is originally how the size was set but now it's in the css style sheet
// screen.setAttribute("width", width);
// screen.setAttribute("height", height);








// var worldData = {
//     "player": {
//       "x" : Math.floor(width / 2) - Math.floor(playerWidth / 2),
//       "y" : 8, //height - playerHeight
//       "fallingSpeed": 30,
//       "currentDir": null,
//       "jumpDisplacement": 1,
//       "playerFacing":"left"
//     },
//     // Stores the current held keys. Can be inspected.
//     "keysDown": []
//   }


//   let update = () => {
//     // Bind svg rectangle to worldData
//     player.setAttribute("x", worldData.player.x);
//     player.setAttribute("y", worldData.player.y);
//   }
//   update();

var worldData = {
    "player": {
      "x" : Math.floor(width / 2) - Math.floor(playerWidth / 2),
      "y" : 8, //height - playerHeight
      "fallingSpeed": 5,
      "currentDir": "LEFT",
      "jumpDisplacement": 1,
      "playerFacing":"left",
      "currentAnimation": "walkLeft",
      "maxProjectedJumpY": 0,
      "grounded": true
    },
    // Stores the current held keys. Can be inspected.
    "keysDown": ["sdf"]
  }


function Game() {//must be capitalized
    const avatarRef = useRef(null);
    const avatarImgRef = useRef(null);
    const [ x, setX] = useState(0);
    const [ y, setY] = useState(0);
    const [currentDir, setCurrentDir] = useState("RIGHT");
    const [ fallingSpeed , setFallingSpeed] = useState(0);
    const [keysDown, setKeysDown ] = useState([]);

    useEffect(()=>{
        window.addEventListener('keydown', handleKeyDown, false);
        window.addEventListener('keyup', handleKeyUp, false);
        setInterval((callback)=>{
            // console.log( "Accepted Projection : " + worldData.player.maxProjectedJumpY);

            // moveAvatar();
            //console\.log\(([^)]+)\)
            //console\.log\(([^)]+)\)
            // worldData.player.y +=speed;

            checkForPlatform (worldData.player.x, worldData.player.y)

            //console\.log\(([^)]+)\) console.log("GROUNDEDED!!!!!!!!!!!!!!!!!")
            if (worldData.player.currentDir == "RIGHT"){
                worldData.player.x += speed;
                moveAvatar("RELOCATE_X", worldData.player.x, null)
                if (speed != 0 ){
                    speed -=1  //to slide at the end of his walk [later distringuish between falling and walking]
                }
            }
            else if (worldData.player.currentDir == "LEFT"){
                worldData.player.x -= speed;
                moveAvatar("RELOCATE_X", worldData.player.x, null)
                if (speed != 0){
                    speed -=1 //to slide at the end of his walk
                }
            }
            
            if (isKeyDown("ArrowRight")){
                //console\.log\(([^)]+)\)
                if (worldData.player.x>=width-playerWidth){
                    worldData.player.x=width-playerWidth
                    moveAvatar("RELOCATE_X", worldData.player.x, null)
                }
                else{
                    speed = MAX_SPEED;
                    worldData.player.x +=speed;
                    moveAvatar("RELOCATE_X", worldData.player.x, null)
                    worldData.player.currentDir = "RIGHT";
                    updateAnimation("walkRight");
                    // avatarRef.current.setAttribute("class", "walkRight" )
                    changeAnimation("walkRight");
                }
            }
            else if (isKeyDown("ArrowLeft")){
                //console\.log\(([^)]+)\)
                if (worldData.player.x<=0){
                    worldData.player.x=0
                    moveAvatar("RELOCATE_X", worldData.player.x, null)
                }
                else{
                    speed = MAX_SPEED;
                    worldData.player.x -=speed;
                    moveAvatar("RELOCATE_X", worldData.player.x, null)
                    worldData.player.currentDir = "LEFT";
                    addClass("hi");
                    // updateAnimation("walkLeft");
                    changeAnimation("walkLeft");
                }
            }

            if (!isKeyDown("ArrowLeft") && !isKeyDown("ArrowRight") && !isKeyDown("ArrowUp" )) {
                // console.log ("WE SHOULD BE STANDING!!")
                if (worldData.player.currentDir == "LEFT"){
                    changeAnimation("pauseLeft");
                }
                else if ( worldData.player.currentDir == "RIGHT"){
                    changeAnimation("pauseRight");
                }
            }

           

    // Adding gravity
    if (height - worldData.player.y <= playerHeight && worldData.player.fallingSpeed >= 0){
        worldData.player.y = height - playerHeight;
        worldData.player.fallingSpeed = 0;
    } 

    else {
        // The player is falling
        worldData.player.y += worldData.player.fallingSpeed;
        worldData.player.fallingSpeed += .5;
    }
          
    if (isKeyDown("ArrowUp") && worldData.player.fallingSpeed === 0 && height - worldData.player.y === playerHeight){
        worldData.player.fallingSpeed = -8;
        document.getElementById("player").classList.add("player-walking");
    }

    moveAvatar( "RELOCATE_Y", null,worldData.player.y )
        },30);
    });


        const isKeyDown = (keyName)=>{
            return worldData.keysDown.indexOf(keyName) !== -1
        }   
        const fireKeyAction =(key, isDown)=>{
            var keysDown = worldData.keysDown;
            switch(key){
                case "ArrowLeft":
                case "ArrowRight":
                case "ArrowUp":
                case "ArrowDown":
                case SpaceBar:
                    if (isDown) {
                        if (keysDown.indexOf(key) === -1) {
                            worldData.keysDown.push(key);
                        }
                    } else {
                        worldData.keysDown.splice(keysDown.indexOf(key), 1);
                    };
            }
        }
        const handleKeyDown = (e) => {
            var key = e.key;
            fireKeyAction(key, true)
        }
        const handleKeyUp = (e) => {
            var key = e.key;
            fireKeyAction(key, false)
        }
        function addClass(c){
            avatarRef.current.classList="";
            avatarRef.current.classList.add("walkLeft");
        }   
        
    useEffect(()=>{
        avatarRef.current.setAttribute("y", 400  )
    });
    function getAvatarX(e){
        setX(e.target.value);
    } 
    function getAvatarY(e){
        setY(e.target.value);
    } 
    function moveAvatar(command, xCoord, yCoord){
        if (command == "RELOCATE_X"){
            avatarRef.current.setAttribute("x", xCoord )
        }
        if (command == "RELOCATE_Y"){
            avatarRef.current.setAttribute("y", yCoord )
        }
    }

    function updateAnimation(animation){
        worldData.player.currentAnimation = animation;
    }

    function animateAvatar(animation){
        var ani = worldData.player.currentAnimation;
        switch(ani){
            case "pauseLeft":
            case "pauseRight":
            case "walkLeft":
            case "walkRight":
                return ani
                break;
            default:
                return "pauseLeft"
        }
    }

    function changeAnimation(animation){
        switch(animation){
            case "pauseLeft":
            case "pauseRight":
            case "walkLeft":
            case "walkRight":
                avatarImgRef.current.classList = "";
                avatarImgRef.current.classList.add(animation);
                break;
            default:
                return avatarImgRef.current.classList.add("pauseLeft");
        }
        
    }
    

    function accessDoor (doorNum, xVal, yVal){
        var doorID= "d"+doorNum
        if (platPositions[doorNum][5] != null && platPositions[doorNum][4]==1){
            var currDoor = document.getElementById(doorID)
            var doorXVal = eval(currDoor.getAttribute("dx"));
            var doorYVal = eval(currDoor.getAttribute("dy"));
            if (      xVal <= (parseInt(currDoor.getAttribute("width"))+doorXVal )  
                  &&  xVal >= doorXVal-playerWidth  
                  &&  yVal <= (parseInt(currDoor.getAttribute("height"))+doorYVal )  
                  &&  yVal >= doorYVal-(basePlayerHeight)
                  && !(worldData.player.fallingSpeed == 0 && platPositions[doorNum][4]==0)
                  
                ){
                currDoor.style.fill='yellow'
                if(isKeyDown(SpaceBar)){
                    window.location.href =  platPositions[doorNum][5]["doorLink"]//"http://www.w3schools.com";
                }
            }
            else{
                currDoor.style.fill='purple'
            }
        }
        else{
          currDoor.style.fill='purple'
        }
      }


    function checkForPlatform (xVal, yVal){
        var cred = false;
        var currPlat;
        for (var i=0;i<platPositions.length;i+=1){
        // for (i=0;i<platPos.length;i+=4){
          
    
            // if (yVal<=(platPositions[i][1]-basePlayerHeight) && yVal> (platPositions[i][1] -(1.5*basePlayerHeight)) && (xVal >=(platPositions[i][0]-playerWidth)) && (xVal <=(platPositions[i][0] + platPositions[i][2]))   ) {
            if (yVal<=(platPositions[i][1]-basePlayerHeight) && (xVal >=(platPositions[i][0]-playerWidth)) && (xVal <=(platPositions[i][0] + platPositions[i][2]))   ) {
                if (platPositions[i][4]===1 && platPositions[i][5]!==null ){
                    
                    accessDoor(i, xVal, yVal);
                }
                else if (platPositions[i][5]!==null ){
                    document.getElementById("d"+i).style.fill='purple'
                }
                if ( yVal> (platPositions[i][1] -(1.5*basePlayerHeight)) ){
                //console\.log\(([^)]+)\) console.log("GROUNDEDED!!!!!!!!!!!!!!!!!")
                // worldData.player.fallingSpeed =0;
                // worldData.player.y = platPositions[i][1];
                // worldData.player.grounded =true;
                playerHeight = basePlayerHeight + height-platPositions[i][1] ;
                // moveAvatar("RELOCATE_Y", null , worldData.player.y);
                console.log("GROUNDEDED!!!!!!!!!!!!!!!!!")
                return true;   //chance that the charater will phase through a platform that is directly above another if we remove this
                }
            }
            else if (yVal==(platPositions[i][1]-basePlayerHeight)  && ( (xVal < (platPositions[i][0]-playerWidth)) || (xVal >(platPositions[i][0] + platPositions[i][2])) ) ){
                //console\.log\(([^)]+)\) console.log("GROUNDEDED!!!!!!!!!!!!!!!!!")
                playerHeight =5; //set to ground???
                // if (!worldData.player.grounded){
                    worldData.player.fallingSpeed += .5;
                // }
            }
        } 
        console.log ("x= "+xVal+ "          y="+ yVal);
    }
    




      
    return(
        <body>
            <div class= "header">
                <input value={x} onChange= {getAvatarX}></input>
                <div>{x}</div>
                <input value={worldData.player.y} onChange= {getAvatarY}></input>
                <div>{keysDown}</div>
            </div>

            {/* <div id="walk-container">
                <div id="walk"></div>
            </div> */}

            <div class= "game">
                <svg id="screen">
                    {/* <!-- rending background graphics:--------------------------------------> */}
                    <GameMap></GameMap>
                    {/* <!-- viewBox="<xPos> <ypos> <width> <height>" -->
                    <!-- width!= viewbox to show that we "cut out the image to show with a width of only 40px" -->
                    <!-- height = viewbox becuase that is to the scale we originally set -->
                    <!-- xMinYMin = align to top right   |    slice= don't show whatever doesn't fit in the "view" defined by width and height    |  Note: it's confusingly named, but viewbox does not define the viewable so much as the whole thing, height and width is for what is viewable --> */}
                    <AvatarStyles id="player"  
                    // moveX={x ? 0 : x} moveY={500 ? 0 : 500} 
                    ref={avatarRef}
                    x="500" y="200" 
                    width="40px" height="63px" viewBox="0 0 320 63" preserveAspectRatio="xMinYMin slice">
                        <image id="playerAvatar" 
                        ref={avatarImgRef}
                        // class= {animateAvatar(worldData.player.currentAnimation)}
                        class="pauseLeft"
                         href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/walk-sequence.svg" x="0" y="12" width="320px" height="60px" />
                    </AvatarStyles>
                </svg>
            </div>
        </body>
      );
}
export default Game;