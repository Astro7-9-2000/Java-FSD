const pizza_promise = new Promise((resolve, reject) => {
    const isAvailable = Math.random();
    console.log(isAvailable);
    if (isAvailable > 0 && isAvailable <=0.5) {
        resolve("Pizza is ready!!");
    }
    else {
        reject("Sorry!! Pizza is not available this time");
    }
});


// pizza_promise.then(pizza => console.log(pizza)).catch(error => console.error(error));

async function handlePizzaDelivery() {
    try {
        const pizza = await pizza_promise;
        console.log(pizza);
    }
    catch (error) {
        console.log(error);
    }
}

handlePizzaDelivery();