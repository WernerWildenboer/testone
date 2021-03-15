const { DEV = "" } = process.env;
const isDev: boolean = DEV === "true";

if (isDev) {
  console.log("ssdsdad");
} else {
  console.log("Hi");
}
