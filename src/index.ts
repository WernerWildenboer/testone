const { DEV = "" } = process.env;
const isDev: boolean = DEV === "true";

if (isDev) {
  console.log("posudhfioshdfosdhfoush");
} else {
  console.log("Hi");
}
