import React from "react";
import styled from 'styled-components';

export default function CharacterCard(props) {

const StyledDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 40px;
background-color: lightblue;
border: 1.2px solid black;
color:white;
font-family: 'Bangers', cursive;
`;

  return (
    <StyledDiv>
      <img src={props.char.image}></img>
      <p>{props.char.name}</p>
      <p>{props.char.species}</p>
      <p>{props.char.gender}</p>
      <p>{props.char.status}</p>
    </StyledDiv>
  );
}
