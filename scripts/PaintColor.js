// export const PaintColorOptions = async () => {
//     const response = await fetch("http://localhost:8088/paintColors")
//     const paintColors = await response.json()

import { setPaintColorChoice } from "./TransitionState.js"

//     let paintOptionsHTML =`<select id="resource">
//     <option value="0">Prompt to select resource...</option>`
//     const divStringArray = paintColors.map(
//         (paintColor) => {
//             return `
//             <option value='${paintColor.id}'>${paintColor.style}</option>
//             `
//         }
//     )
//     paintOptionsHTML += divStringArray.join("")
//     paintOptionsHTML += `</select>`
// }


export const PaintColorOptions = async () => {
    document.addEventListener("change", handlePaintColorChoice)
    const response = await fetch("http://localhost:8088/paintColors")
    const paintColors = await response.json()

    const divStringArray = paintColors.map(
        (paintColor) => {
            return `
            <input type='radio' name='paintColors' value='${paintColor.id}' /> ${paintColor.color}
            `
        }
    )
    const optionsHTML = divStringArray.join("")
    return optionsHTML
}

// Change the name of the setter function to the one you created.
const handlePaintColorChoice = (changeEvent) => {
    // Make sure you change this condition if you named your inputs differently
    if (changeEvent.target.name === "paintColors") {
        setPaintColorChoice(parseInt(changeEvent.target.value))
    }
}