import { InteriorOptions } from "./Interior.js";
import { Orders } from "./Orders.js";
import { PaintColorOptions } from "./PaintColor.js";
import { PlaceOrder } from "./PlaceOrder.js";
import { TechOptions } from "./Technology.js";
import { WheelOptions } from "./Wheels.js";

const render = async () => {
  const paintColorsHTML = await PaintColorOptions();
  const interiorHTML = await InteriorOptions();
  const techHTML = await TechOptions();
  const wheelHTML = await WheelOptions();
  const buttonHTML = await PlaceOrder();
  const ordersHTML = await Orders();

  const composedHTML = `
        <h1>Cars-R-Us</h1>

        <article class="choices">


            <section class="choices__vehicleType options">
                <h2>Vehicle Types</h2>


            </section>

            <section class="choices__paintColor options">
                <h2>Paint Colors</h2>
                ${paintColorsHTML} 

            </section>

            <section class="choices__interior options">
                <h2>Interiors</h2>
                ${interiorHTML}


            <section class="choices__tech options">
                <h2>Technologies</h2>
                ${techHTML}

            </section>

            <section class="choices__wheel options">
                <h2>Wheels</h2>
                ${wheelHTML}

            </section>
        </article>

        <article class="order">
            ${buttonHTML}

        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
            ${ordersHTML}


        </article>
    `;
  const container = document.querySelector("#container");
  container.innerHTML = composedHTML;
};

render();

document.addEventListener("newOrder", (event) => {
  console.log("State of data has changed. Regenerating HTML...");
  render();
});
