import { UserInformation } from "./class-based.js";
import { countdownStarted } from "./functional-based.js";

const user1 = { name: "Harry", age: 24, address: "Jhamsikhel", city: "Lalitpur" };
const user2 = { name: "Ram", address: "Boudha", city: "Kathmandu" };


const app = new UserInformation(user1, user2);
app.startSystem();

countdownStarted(user1, user2);