export class UserInformation {
    constructor(...users) { 
        [this.user1, this.user2] = users;
    }

    countdown(interval = 1000) {
        let count = 10;

        const time = setInterval(() => {
            console.log(count--);

            if (count < 0) {
                clearInterval(time);

                this.displayUser(this.user1);

                setTimeout(() => {
                    this.displayUser(this.user2);
                }, 5000);
            }
        }, interval);
    }

    displayUser({ name, age, ...rest }) { 
        const ageDisplay = age ? `${age} years old` : "Age not provided";
        console.log(`[User Info]: ${name}, ${ageDisplay}, Lives in ${rest.address}, ${rest.city}`);
    }

    startSystem(interval) {
        this.countdown(interval);
    }
}