export const displayUser = ({ name, age, ...rest }) => {
    const ageDisplay = age ? `${age} years old` : "Age not provided";
    console.log(`[USER INFO]: ${name}, ${ageDisplay}, Address: ${rest.address}, City: ${rest.city}`);
};

export const countdownStarted = (...users) => {
    const [user1, user2, interval = 1000] = users;

    let count = 10;

    const time = setInterval(() => {
        console.log(count--);

        if (count < 0) {
            clearInterval(time);

            displayUser(user1);

            setTimeout(() => {
                displayUser(user2);
            }, 5000);
        }
    }, interval);
};