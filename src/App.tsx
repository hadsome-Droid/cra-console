import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import Nodejs from "./assets/image/node-js-svgrepo-com.svg"
import Npmsvg from "./assets/image/npm-svgrepo-com.svg"
import Forest from "./assets/image/i.webp"
import Forest2 from "./assets/image/i3.webp"
import styled from "styled-components";
import {BoxTransform} from "./components/transform/BoxTransform";
import CallTest01 from "./components/Tests/test-01/callTest-01";


function App() {
    console.log('App rendered')
    return (
        <div>
            <BoxFlex>
                {/*<PageTitle title={'This is APP component'}/>*/}
                {/*<PageImg src={Nodejs}/>*/}
                {/*<PageImg src={Npmsvg}/>*/}
                {/*<PageTitle title={'My Profile'}/>*/}
                {/*<Rating value={2}/>*/}
                {/*<Accordion titleValue={'Menu'} collapsed={true}/>*/}
                {/*<Accordion titleValue={'My Contacts'} collapsed={false}/>*/}
                {/*<PageImg src={Forest}/>*/}
                {/*<Rating value={0}/>*/}
                {/*<Rating value={1}/>*/}
                {/*<Rating value={2}/>*/}
                {/*<Rating value={3}/>*/}
                {/*<Rating value={4}/>*/}
                {/*<Rating value={5}/>*/}
            </BoxFlex>
            <BoxTransform/>
            <CallTest01/>
        </div>
    );
}


const BoxFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  border: 4px solid rgba(143, 111, 185, 0.89);
  background-repeat: no-repeat;
  background-image: linear-gradient(135deg, rgba(239, 213, 107, 0.88), rgba(153, 1, 255, 0.8)), url(${Forest2});
  background-size: cover;
  background-blend-mode: color-dodge;
  background-position: center;
`


type PageTitleType = {
    title: string
}

function PageTitle(props: PageTitleType) {
    return <>
        <h1>{props.title}</h1>
    </>
}

const PageImg = styled.img`

  height: 30rem;
`

export default App;
