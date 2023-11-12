import React from 'react';
import {dev, messages} from "./05";

export const CallTest05 = () => {

    console.log(dev, '<<<')
    console.log(messages, '>>>>')
// const str = 'East 101st StreetWest 42nd StreetMadison AvenueBroadway Wall Street'
//     const generateData = (count: number) => {
//         const result = [];
//         for (let i = 0; i < count; i++) {
//             result.push({
//                 address: `address${i + 1}`,
//                 yearBuilt: Math.floor(Math.random() * 100) + 1900,
//                 houseNumber: i + 1,
//                 occupants: Math.floor(Math.random() * 20) + 1
//             });
//         }
//         return result;
//     };

    // const data = generateData(10);
    // console.table(data);

    return (
        <div>
            Test 05
        </div>
    );
};

