import React from 'react';
import './App.css';

function App() {
    return (
        <div>
            'This is APP componet' 124 32 13 4
            <Rating/>
            <Accordion/>
        </div>

    );
}

function Rating() {
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

function Accordion() {
    return <div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
    </div>
}

function Star() {
    return <div>
        <div>Star</div>
    </div>
}

export default App;
