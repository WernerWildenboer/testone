const { DEV = "" } = process.env;
const isDev: boolean = DEV === "true";

if (isDev) {
  console.log("ssdsddddad");
} else {
  console.log("Hi");
}
