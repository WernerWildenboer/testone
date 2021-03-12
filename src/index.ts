const { DEV = "" } = process.env;
const isDev: boolean = DEV === "true";

if (isDev) {
  console.log("Hoi");
} else {
  console.log("Hi");
}
