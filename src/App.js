import React, { Component } from 'react';
import logo from './logo.svg';
import {
  CssBaseline,
  Typography
} from '@material-ui/core';

import styled from 'styled-components'
import './App.css';

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`
const StyledTypography = styled(Typography)`
  width: 400px;
  padding-top: 10px;
  padding-bottom: 100px;
`
const BoldTypography = styled.span`
  font-weight: 900 !important;
`

class App extends Component {
  render() {
    return (
      <CssBaseline>
        <StyledContainer>
          <StyledTypography>
          <BoldTypography>
            Bio:
          </BoldTypography>
          <br/>
            Hi, my name is Juan
          <br></br>
            I'm a Software Developer from Panama
            <br></br>
            <br></br>
            I've built games, apps, websites, and a bunch of data science and machine learning stuff.
            I'm profficient in Python, Javascript, and C#.
            I've also built apps using other languages and can pick up frameworks and methodologies pretty fast.
            <br></br>
            <br></br>
            <BoldTypography>
            My social links:
            </BoldTypography>
            <br></br>
            <a href="https://www.linkedin.com/in/juandeveloper/">LinkedIn</a>
            <br/>
            <a href="https://github.com/juanccs">GitHub</a>
            <br/>
            <a href="https://instagram.com/juancachafeiro">Instagram</a>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <BoldTypography>
            My Skills:
            </BoldTypography>
            <br/>
            Python ( Machine Learning, Deep Learning )
            <br/>
            Javascript ( ReactJS )
            <br/>
            Unity3d ( Games, AR )
            <br></br>
            <br></br>
            <br></br>
            <BoldTypography>
            Projects I've worked on:
            </BoldTypography>
            <br></br>
            <a href="https://www.youtube.com/watch?v=PyV6mrrx_tM">Zanshin</a>
            <br></br>
            <a href="https://mezclao-client.herokuapp.com">Mezclao</a>
            <br></br>
            <a href="https://fitboard-client.herokuapp.com/">Fitwave</a>
            <br></br>
            <a href="http://apocalypsehunters.com/">Apocalypse Hunters</a>
        </StyledTypography>
        </StyledContainer>
      </CssBaseline>
    );
  }
}

export default App;
