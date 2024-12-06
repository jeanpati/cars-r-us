import { setVehicleTypeChoice } from "./TransitionState";

export const VehicleTypeOptions = async () => {
  document.addEventListener("change", handleVehicleTypeChoice);
  const vehicleTypes = await fetch("http://localhost:8088/vehicleTypes").then(
    (res) => res.json()
  );
  const divStringArray = () => {
    vehicleTypes.map((type) => {
      return `<input type='radio' name='vehicleTypes' value='${type.id}'>${type.name}</input>`;
    });
  };
  const optionsHTML = divStringArray.join("");
  return optionsHTML;
};

const handleVehicleTypeChoice = (changeEvent) => {
  if (changeEvent.target.name === "vehicleTypes") {
    setVehicleTypeChoice(parseInt(changeEvent.target.value));
  }
};
