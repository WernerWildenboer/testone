const { DEV = "" } = process.env;
const isDev: boolean = DEV === "true";

if (isDev) {
  console.log("sddd");
} else {
  console.log("Hi");
}
