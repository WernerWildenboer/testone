const { DEV = "" } = process.env;
const isDev: boolean = DEV === "true";

if (isDev) {
  console.log("ghg");
} else {
  console.log("Hi");
}
