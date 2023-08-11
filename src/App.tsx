import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    console.log('App rendered')
    return (
        <div>
            <PageTitle title={'This is APP component'}/>
            <PageTitle title={'My Profile'}/>
            <Rating value={2}/>
            <Accordion titleValue={'Menu'} collapsed={true}/>
            <Accordion titleValue={'My Contacts'} collapsed={false}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}

type PageTitleType = {
    title: string
}

function PageTitle(props: PageTitleType) {
    return <>
        <h1>{props.title}</h1>
    </>
}

export default App;
