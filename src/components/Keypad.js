// Code Keypad Component Here
//////// MY CODE ////////
// function keypad() {
//     function keypadChange(event) {
//         console.log(`${event.target}: ${event.target.value}`)
//     }
//     return(
//         <div>
//             <input
//               tagName="INPUT"
//               type="password"
//               onChange={keypadChange}
//               placeholder="Entering password..."
//             />
//         </div>
//     )
// }

//////// SOLUTION ////////
import { getElementsByTagName } from "domutils";
import React from "react";

function Keypad(){
    function keypadChange(){
        console.log("Entering password...")
    }
    return (
        <input type="password" onChange={keypadChange} />
    )
}

export default Keypad


//////// NOTES ////////

// 1. didn't put the import from React.... at the top
// 2. capitalize the variable after the function 
// 3. didn't put export default at the end 
// 4. you're not suppose to add a parameter
// 5. you basically copied the example from Canvas and didn't look back at the  steps
// 6. you used tagName, type, and placeholder within the input when you only needed type


// STEPS:
// 1. In the components/Keypad.js file, create a Keypad React component.
// 2. In that component, render an input with the right type.
// 3. On that input, add an event handler that listens for the change event.
// 4. When that event fires, use console.log to print out the text 'Entering password...'.