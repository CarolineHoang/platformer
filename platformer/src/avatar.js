import React, { Component } from 'react';
import styled from "styled-components";
// import Carusel from "./Carusel";



// const Wrapper = styled.div`
// height: 90vh;
// width: 70%;
// background-color: pink;
// margin-left: 5vw;
// `;

const AvatarBox = styled.div`
    height: 2vw;
    width: 1vw;
    border: solid 1px red;
    background-color: transparent;
    /* position: relative; */
    /* bottom: calc(-100% - 2vw); */
`;


class avatar extends Component{

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
        <div type="text" id="one" onKeyPress={this.handleKeyPress} >
            <AvatarBox>
                {/* asdf */}

            </AvatarBox>
        </div>

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
export default avatar;