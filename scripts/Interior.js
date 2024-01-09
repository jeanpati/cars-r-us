import { setInteriorChoice } from "./TransitionState.js"

export const InteriorOptions = async () => {
    document.addEventListener("change", handleInteriorChoice)
    const response = await fetch("http://localhost:8088/interiors")
    const interiors = await response.json()

    const divStringArray = interiors.map(
        (interior) => {
            return `
            <input type='radio' name='interiors' value='${interior.id}' /> ${interior.fabric}
            `
        }
    )
    const optionsHTML = divStringArray.join("")
    return optionsHTML
}

const handleInteriorChoice = (changeEvent) => { 
    if (changeEvent.target.name === "interiors") {
        setInteriorChoice(parseInt(changeEvent.target.value))
    }
}