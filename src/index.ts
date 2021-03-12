const { DEV = "" } = process.env;
const isDev: boolean = DEV === "true";

if (isDev) {
  console.log("Hello");
} else {
  console.log("Hi");
}
