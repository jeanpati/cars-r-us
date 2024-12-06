// Set up the transient state data structure and provide initial values
let transientState = {
  vehicleTypeId: 0,
  paintColorId: 0,
  interiorId: 0,
  techId: 0,
  wheelId: 0,
};
//need to be paintColorId to be recognized and expanded in postman

// Functions to modify each property of transient state
export const setVehicleTypeChoice = (chosenType) => {
  transientState.vehicleTypeId = chosenType;
  console.log(transientState);
};
export const setPaintColorChoice = (chosenColor) => {
  transientState.paintColorId = chosenColor;
  console.log(transientState);
};
export const setInteriorChoice = (chosenInterior) => {
  transientState.interiorId = chosenInterior;
  console.log(transientState);
};
export const setTechChoice = (chosenTech) => {
  transientState.techId = chosenTech;
  console.log(transientState);
};
export const setWheelChoice = (chosenWheel) => {
  transientState.wheelId = chosenWheel;
  console.log(transientState);
};

// Function to convert transient state to permanent state
export const placeOrder = async () => {
  /*
        Add the required keys to the object below that are
        needed for a POST operation.
    */
  const postOptions = {
    method: "POST", //POST means to create
    headers: {
      // make the key a string bc the key name has a dash in it so surround with quotes
      "Content-Type": "application/json",
    },
    //can only send strings, convert to string
    body: JSON.stringify(transientState),
  };
  // Send the transient state to your API
  const response = await fetch("http://localhost:8088/orders", postOptions);

  const customEvent = new CustomEvent("newOrder");
  document.dispatchEvent(customEvent);

  transientState = {
    vehicleTypeId: 0,
    paintColorId: 0,
    interiorId: 0,
    techId: 0,
    wheelId: 0,
  };
};
