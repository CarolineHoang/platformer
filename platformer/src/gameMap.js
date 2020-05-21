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

class gameMap extends Component{

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
        <svg>
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


        {/* <!-- <polygon points="200,10 250,190 160,210" style="fill:lime;stroke:purple;stroke-width:1" /> --> */}


            {/* <!-- floor: --> */}
            
            <rect   class= "platform"   id="0"      x="5"    y="480"  width="1300" height="5" />

            {/* <!-- platforms and doors (left to right, top to bottom in column)--> */}
            

            {/* <!-- <rect   class= "door"       id="d1"     x="50"    y="calc(280 - 70)"  width="70" height="70"   /> --> */}
            <svg>
                <rect   class= "door"       id="d1"     x="calc(50 + (0.5 *100) - (0.5 * 70))"  dx="50 + (0.5 *100) - (0.5 * 70)"   y="calc(280 - 70)" dy="280 - 70"  width="70" height="70"   />
            </svg>
            <svg>
                <rect   class= "platform"   id="1"      x="50"    y="280"  width="100" height="20" />
            </svg>
            <svg>
                <rect   class= "platform"   id="2"      x="50"    y="390"  width="100" height="20" />
            </svg>
            <svg>
                <rect   class= "platform"   id="3"      x="250"   y="340"  width="100" height="20" />
            </svg>
            <svg>
                <rect   class= "platform"   id="4"      x="350"   y="310"  width="100" height="20" />
            </svg>
            <svg>
                <rect   class= "platform"   id="5"      x="350"   y="390"  width="100" height="20" />
            </svg>

            <svg>
                <image  class= "platform"   id="6"       x="500"   y="calc(310px - 25px)" width="100" height="50" href="https://raw.githubusercontent.com/CarolineHoang/platformerJS/19c63e90328416566bb401a642658b0b716ba3ae/platformersJS/groundEx.svg"/>
            </svg>
            {/* <!-- <rect class= "platform" id="1" x="500" y="310"  width="100" height="20" /> -->     */}
            <svg>
                <rect   class= "door"       id="d7"     x="calc(500 + (0.5 *100) - (0.5 * 70)"  dx="500 + (0.5 *100) - (0.5 * 70)"  y="calc(430 - 70)"  dy="430 - 70"  width="70"  height="70"   />
                <svg   class= "tooltiptext-top" >
                    <text x="50%"  y="calc(430 - 70 -40)" width="70" class="small">hello</text>
                </svg>
            </svg>
            <svg>
                <rect   class= "platform"   id="7"      x="500"   y="430"  width="100" height="20" />
            </svg>
            <svg>
                <rect   class= "platform"   id="8"      x="650"   y="350"  width="100" height="20" />
            </svg>
            <svg>
                <rect   class= "platform"   id="9"      x="650"   y="430"  width="100" height="20" />
            </svg>

            


            
            

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