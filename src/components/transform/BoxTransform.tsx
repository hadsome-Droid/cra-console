import React from 'react';
import styled from "styled-components";

export const BoxTransform = () => {
    return (
        <TransformContainer>
            <ElementTransform>Good Morning!!</ElementTransform>
            <Element></Element>
        </TransformContainer>
    );
};

const TransformContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 2rem;
  color: darkslateblue;
`

const ElementTransform = styled.div`
  width: 350px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #b0afaf;
  transition: 0.5s;

  &:hover {
    //transform: translate(-50%, 50%);
    transform: rotate(-90deg);
    transform-origin: 50px 50px;
  }
`

const Element = styled.div`
  width: 350px;
  height: 350px;
  background-color: rgba(176, 67, 137, 0.92);
`