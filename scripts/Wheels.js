import { setWheelChoice } from "./TransitionState.js"

export const WheelOptions = async () => {
    document.addEventListener("change", handleWheelChoice)
    const response = await fetch("http://localhost:8088/wheels")
    const wheels = await response.json()

    // const divStringArray = wheels.map(
    //     (wheel) => {
    //         return `<div>
    //         <input type='radio' name='wheels' value='${wheel.id}' /> ${wheel.type}
    //         </div>`
    //     }
    // )
    // const optionsHTML = divStringArray.join("")
    // return optionsHTML

    let optionsHTML = `<select id="wheel">
    <option value="0">Select a wheel type</option>`

    const divStringArray = wheels.map(
        (wheel) => {
            return `
                <option value="${wheel.id}">${wheel.type}</option>
                `
        }
    )
    optionsHTML += divStringArray.join("")
    optionsHTML += `</select>`
    return optionsHTML
}

// const handleWheelChoice = (changeEvent) => { 
//     if (changeEvent.target.name === "wheels") {
//         setWheelChoice(parseInt(changeEvent.target.value))
//     }
// }

const handleWheelChoice = (changeEvent) => {
    if (changeEvent.target.id === "wheel") {
        setWheelChoice(parseInt(changeEvent.target.value))
    }
 }