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
        <PageBody>
            <MapContainer>
                <Ground></Ground>
                <AvatarStyles>
                    <Avatar/>
                </AvatarStyles>
            </MapContainer>


        </PageBody>
        //   <Wrapper>
        //     <TopBarWrapper>
        //       <LogoContainer href= {this.props.eyePage}>
        //         <Logo logoImg = {this.props.logoImg}></Logo>
        //       </LogoContainer>

        //       <BarWrapper>
        //         <Tabs href= {this.props.urls[0]}>FEATURES</Tabs>
        //         <Tabs href= {this.props.urls[1]}>VIEW FROM HERE</Tabs>
        //         <Tabs href= {this.props.urls[2]}>LETTERS FROM THE EDITORS</Tabs>
        //         <Tabs href= {this.props.urls[3]}>THE EAR</Tabs>
        //         <Tabs href= {this.props.urls[4]}>PAST ISSUES</Tabs> 
        //         {/* <Tabs href= {this.props.urls[0]}>FEATURES</Tabs>
        //         <Tabs href= {this.props.urls[1]}>VIEW FROM HERE</Tabs>
        //         <Tabs href= {this.props.urls[2]}>LETTERS FROM THE EDITORS</Tabs>
        //         <Tabs href= {this.props.urls[3]}>THE EAR</Tabs>
        //         <Tabs href= {this.props.urls[4]}>PAST ISSUES</Tabs> */}
        //       </BarWrapper>
        //     </TopBarWrapper>
        //     <FeaturedArticleContainer>
        //       <FeaturedArticleNameBlock>
        //         <FeaturedArticleTitle>
        //         <Tag>{this.props.leadTagData[this.state.currentTab][0]} </Tag>
        //         <Title>{this.props.articles[this.state.currentTab][0][0]} </Title>
        //         </FeaturedArticleTitle>
        //         <FeaturedArticleAuthor>
        //             By<BoldAuthor> {this.props.articles[this.state.currentTab][0][1]} </BoldAuthor>  &#8226; <ArticleDate> {this.props.articles[this.state.currentTab][0][2]} </ArticleDate>
        //             <Tag><i>{this.props.leadTagData[this.state.currentTab][1]} </i></Tag>
        //         </FeaturedArticleAuthor>

        //       </FeaturedArticleNameBlock>
        //       <FeaturedArticleImage logoImg = {this.props.logoImg} width= "45%"/>

        //     </FeaturedArticleContainer>
            
        //     <CaruselItems>
        //       <CaruselItem></CaruselItem>

        //     </CaruselItems>

        //   </Wrapper>
      );
  }
}
export default map;