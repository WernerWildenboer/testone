const { DEV = "" } = process.env;
const isDev: boolean = DEV === "true";

if (isDev) {
  console.log("Helloss");
} else {
  console.log("Hi");
}
