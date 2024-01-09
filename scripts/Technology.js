import { setTechChoice } from "./TransitionState.js"

export const TechOptions = async () => {
    document.addEventListener("change", handleTechChoice)
    const response = await fetch("http://localhost:8088/teches")
    const teches = await response.json()

    let optionsHTML = `<select id="tech">
    <option value="0">Select a technology package</option>`

    const divStringArray = teches.map(
        (tech) => {
            return `
                <option value="${tech.id}">${tech.type}</option>
                `
        }
    )
    optionsHTML += divStringArray.join("")
    optionsHTML += `</select>`
    return optionsHTML
}

const handleTechChoice = (changeEvent) => {
    if (changeEvent.target.id === "tech") {
        setTechChoice(parseInt(changeEvent.target.value))
    }
 }