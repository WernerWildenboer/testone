const { DEV = "" } = process.env;
const isDev: boolean = DEV === "true";

if (isDev) {
  console.log("ghghjgh");
} else {
  console.log("Hi");
}
