import React from 'react';
import './App.css';

function App() {
    console.log('App rendered')
    return (
        <div>
            <AppTitle/>
            <Rating/>
            <Accordion/>
        </div>

    );
}

function Rating() {
    console.log('Rating rendered')
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    );
}

function AppTitle() {
    return <>
        'This is APP component'
    </>
}

function Accordion() {
    return <div>
        <AccordionTitle/>
        <AccordionMenu/>

    </div>
}

function AccordionTitle() {
    return <h3> Menu </h3>
}

function AccordionMenu() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
    </ul>
}

function Star() {
    console.log('Star rendered')
    return <div>
        <div>Star</div>
    </div>
}

export default App;
