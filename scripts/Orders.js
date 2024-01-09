export const Orders = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders?_expand=paintColor&_expand=interior&_expand=tech&_expand=wheel")
    const orders = await fetchResponse.json()

        // Use map() to generate new array of strings
        const divStringArray = orders.map(
            (order) => {
            const orderPrice = order.paintColor.price + order.interior.price + order.wheel.price + order.tech.price
            // To automatically format the number as currency
            const USD = orderPrice.toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
            })

              return `<section>
                        <div>Order #${order.id} cost ${USD}</div>
                    </section>`
            }
        )
    
        // This function needs to return a single string, not an array of strings
        const ordersHTML = divStringArray.join("")
        return ordersHTML
}