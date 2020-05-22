import React, { Component } from 'react';
import styled from "styled-components";
import Avatar from './avatar.js';
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


var platPositions = [];

class gameMap extends Component{

    constructor(props) {
      super(props);
      
      this.state = {
        currentTab: 0
        

      };
      this.turnOrange = this.turnOrange.bind(this);

    //   platPositions = props.mapData;
    //   this.turnOrange1 = this.turnOrange.bind(this);

      // for (var i = 1; i < this.props.length; i++){{

      // }
    //   console.log("turnOrange function started");
    }
    turnOrange=(command, e)=>{
        // console.log("ORANGE!! \n\n\n\n\ "+ e.target.id + " " + e.target.width);
        // console.log(e.target.width);
        // console.log(e.target.className);
        // console.log(e.target.className.baseVal);
        console.log("turnOrange function started");
        if (command == "add"){
        console.log(e.target.classList);
        // e.target.classList += ""
        e.target.classList.add("yellow")
        // e.style.fill='yellow'
        }
        else if (command == "remove"){
            e.target.classList= []
            e.target.classList.add("door")
        }


    }

    turnOrange1=()=>{
        // console.log("ORANGE!! \n\n\n\n\ "+ e.target.id + " " + e.target.width);
        // console.log(e.target.width);
        // console.log(e.target.className);
        // console.log(e.target.className.baseVal);
        console.log("turnOrange function started!!!!!");


    }

    generateDoor=(platInfo, idx)=>{
        console.log("generateDoor function started!!!!!");
        if (platInfo[4]){
            return (
                // <rect   class= "door"       id={"d"+idx}     x={"calc("+platInfo[0]+"(0.5*"+platInfo[2]+")-(0.5*"+"70"+"))"}  dx={""+platInfo[0]+"(0.5*"+platInfo[2]+")-(0.5*"+"70"+")"}  y={"calc("+platInfo[1]+"-"+"70"+")"} dy={platInfo[1]+"-"+"70"}  width="70" height="70"  onMouseOver={(e)=>this.turnOrange("add", e)} onMouseOut={(e)=>this.turnOrange("remove",e)} 
                // // onClick={(e)=>this.redirect("/aboutMe",e)}
                // />
                // <rect   class= "door"       id="d1"     x="calc(50 + (0.5 *100) - (0.5 * 70))"  dx="50 + (0.5 *100) - (0.5 * 70)"   y="calc(280 - 70)" dy="280-70"  width="70" height="70"  onMouseOver={(e)=>this.turnOrange("add", e)} onMouseOut={(e)=>this.turnOrange("remove",e)} />
                
                // note: if we stay in React, we won't need the calc tag and can just process the calculation. Also, we don't need dx and dy
                <rect   class= "door" id={"d"+idx}   x={"calc( "+platInfo[0]+" + ( 0.5 * "+platInfo[2]+" ) - ( 0.5 * "+platInfo[5]["doorWidth"]+" ))"} dx={platInfo[0]+" + ( 0.5 * "+platInfo[2]+" ) - ( 0.5 * "+platInfo[5]["doorWidth"]+" )"}   y={"calc( "+platInfo[1]+" - "+platInfo[5]["doorLength"]+" )"} dy={platInfo[1]+" - "+platInfo[5]["doorLength"]}  width={platInfo[5]["doorWidth"]} height={platInfo[5]["doorLength"]} />
                // <rect   class= "door" id={"d"+idx}   x={"calc( "+platInfo[0]+" + ( 0.5 * "+platInfo[2]+" ) - ( 0.5 * "+"70"+" ))"} dx={platInfo[0]+"+( 0.5 * "+platInfo[2]+" ) - ( 0.5 * "+"70"+" )"}   y={"calc( "+platInfo[1]+" - "+"70"+" )"} dy={platInfo[1]+" - "+"70"}  width="70" height="70" />
            )
        }
        else{
            return
        }


    }

    generatePlatform=(platInfo, idx)=>{
        console.log("generatePlatform function started!!!!!");
        return (
            <rect   class= "platform"   id={idx}      x={platInfo[0]}    y={platInfo[1]}  width={platInfo[2]} height={platInfo[3]} />
        )
    }


    generateMap=(platPositions)=>{
        console.log("generateMap function started!!!!!");
        console.log("platLen: " + platPositions.length);
        console.log(platPositions);
        return(
            <svg>
                {platPositions.map((platform, idx)=>{
                    return (
                        <svg>
                            {this.generatePlatform(platform, idx)}
                            {this.generateDoor(platform, idx)}
                        </svg>
                    )
                })}
            </svg>
        )
        // for (var i=0; i< platPositions.length; i++){
        //     console.log("generateMap LOOP "+ i+" !!!!!");
        //     this.generatePlatform(platPositions[i])
        //     if (platPositions[i][4]){
        //         this.generateDoor(platPositions[i])
        //     }
        // }
        // console.log("generateMap END!!!!!");

    }
    // generateFloor=()=>{
    //     console.log("generateRectangle function started!!!!!");
    // }


    // fillCarusel(){
    //   return <CaruselItem>4</CaruselItem>;

    // }

    // turnOrange1;
    render(){
        // console.log("turnOrange function started");



    
      return(


        <svg>
            
            {/* {this.turnOrange1()} */}
            <line x1="0" y1="400" x2="1000" y2="400" stroke="green" stroke-width="4" />
            <line x1="999" y1="500" x2="999" y2="0" stroke="red" stroke-width="4" />
            <line x1="0" y1="500" x2="100vw" y2="500" stroke="green" stroke-width="4" />

            {/* <!-- top right left --> */}
            <polygon points="250,320 250,360 350,360" 
            // style="fill:lime;stroke:purple;stroke-width:1" 
            />
            <line x1="250" y1="320" x2="350" y2="360" 
            // style="stroke:rgb(255,0,0);stroke-wi dth:2" 
            />



            
            {this.generateMap(this.props.mapData)}

            <svg width="200" height="100">
            <rect x="0" y="0" width="200" height="100" stroke="red" stroke-width="3px" fill="white"/>
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">TEXT</text>    
            </svg>

            {/* <!-- <rect id="player" class="player" width="50" height="60" /> --> */}
            <svg width="500" height="75" viewBox="0 0 250 75" 
                preserveAspectRatio="xMinYMin slice"
                // style="border: 1px solid red;" 
                >
                {/* <!-- <polygon points="0,0,200,100,0,100" /> --> */}
                {/* <!-- <polygon points="0,0,200,100,0,100" transform="scale(-1,1) translate(-150,0)"/> /> --> */}
                
                {/* <!-- <polygon points="100,0,100,100,0,100" transform="scale(-1,1) translate(-150,0)"/> --> */}
                <rect x="1" y="1" width="50" height="50"
                    // style="stroke: #000000; fill:none;" 
                    transform="scale(-1,1) translate(-100,0)" />
                <image class="walk" href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/walk-sequence.svg" x="0" y="0" width="320px" height="60px" transform="scale(-1,1) translate(-250,0)"/>
                <image class="walk" href="https://raw.githubusercontent.com/CarolineHoang/platformerJS/19c63e90328416566bb401a642658b0b716ba3ae/platformersJS/groundEx.svg" x="0" y="0" width="320px" height="60px" transform="scale(-1,1) translate(-250,0)"/>
            </svg>
        </svg>
      );
  }
}
export default gameMap;