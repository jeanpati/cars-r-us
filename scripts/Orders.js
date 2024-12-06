export const Orders = async () => {
  const [paintColors, interiors, wheels, teches, fetchResponse] =
    await Promise.all([
      fetch("http://localhost:8088/paintColors").then((res) => res.json()),
      fetch("http://localhost:8088/interiors").then((res) => res.json()),
      fetch("http://localhost:8088/wheels").then((res) => res.json()),
      fetch("http://localhost:8088/teches").then((res) => res.json()),
      fetch(
        "http://localhost:8088/orders?_expand=paintColor&_expand=interior&_expand=tech&_expand=wheel"
      ).then((res) => res.json()),
    ]);

  const orders = await fetchResponse;

  // Use map() to generate new array of strings
  const divStringArray = orders.map((order) => {
    console.log(order);
    console.log(order.paintColorId);
    console.log(
      paintColors.find((color) => Number(color.id) === order.paintColorId)
    );

    const paintColorPrice = paintColors.find(
      (color) => Number(color.id) === order.paintColorId
    )?.price;
    const interiorPrice = interiors.find(
      (interior) => Number(interior.id) === order.interiorId
    )?.price;
    const wheelPrice = wheels.find(
      (wheel) => Number(wheel.id) === order.wheelId
    )?.price;
    const techPrice = teches.find(
      (tech) => Number(tech.id) === order.techId
    )?.price;

    let orderPrice = paintColorPrice + interiorPrice + wheelPrice + techPrice;
    console.log(order.vehicleTypeId);

    if (order.vehicleTypeId === 2) {
      orderPrice =
        (paintColorPrice + interiorPrice + wheelPrice + techPrice) * 1.5;
    } else if (order.vehicleTypeId === 3) {
      orderPrice =
        (paintColorPrice + interiorPrice + wheelPrice + techPrice) * 2.25;
    }

    // To automatically format the number as currency
    const USD = orderPrice.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    return `<section>
                        <div>Order #${order.id} cost ${USD}</div>
                    </section>`;
  });

  // This function needs to return a single string, not an array of strings
  const ordersHTML = divStringArray.join("");
  return ordersHTML;
};
