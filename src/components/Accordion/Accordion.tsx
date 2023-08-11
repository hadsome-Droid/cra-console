import React from "react";

function Accordion(props: any) {
    return <div>
        <AccordionTitle title={props.title}/>
        <AccordionMenu/>
    </div>
}

function AccordionTitle(props: any) {
    return (
        <h3>{props.title}</h3>
    )
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

export default Accordion;