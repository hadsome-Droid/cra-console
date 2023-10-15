import React from 'react';
import {splitIntoWords} from "./01";

export const CallTest01 = () => {
    const sentense = 'Hello my friend!'
   let result = splitIntoWords(sentense)
    console.log(result)
    return (
        <div>
            <h2>Test-01</h2>
        </div>
    );
};

export default CallTest01;