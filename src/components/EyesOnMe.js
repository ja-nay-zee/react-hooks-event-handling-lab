// Code EyesOnMe Component Here
//////// MY CODE ////////
// import React from "react";

// function Eyes() {
//     function focus(){
//       console.log("Good!");
//     }
//     return <button onClick={focus}>Good!</button>

//     function blur() {
//         console.log("Hey! Eyes on me!");
//     }
//     return <button onClick={blur}>Hey! Eyes on me!</button>
// }

// export default Eyes


//////// SOLUTION ////////
import React from "react";

function Eyes(){
    function focus(){
        console.log("Good!");
    }

    function blur(){
        console.log("Hey! Eyes on me!");
    }

    return (
    <button onFocus={focus} onBlur={blur}>Eyes on me</button>
    );
}


export default Eyes

///// NOTES //////
// 1. didn't carefully read that the event handlers were legit FOCUS AND BLUR
// 2. had the right idea of how to make two functions but was trying to use two return statements 
// 3. GREAT JOB!




// Steps:
// 1. In the components/EyesOnMe.js file, create a EyesOnMe React component.
// 2. In that component, render a button with the text 'Eyes on me'.
// 3. On that button, add event handlers that listen for the focus and blur events.
// 4. When the focus event fires, use console.log to print out the text 'Good!'.
// 5. When the blur event fires, use console.log to print out the text 'Hey! Eyes on me!'.