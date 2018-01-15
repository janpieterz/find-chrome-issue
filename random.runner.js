const { Chromeless } = require("chromeless");
process.env.FOO = "bar";
async function run() {
  const chromeless = new Chromeless();
  const result = await chromeless.goto("https://www.google.com").screenshot();
  console.log(result);
  console.log(process.env.FOO);
  console.log(process.env.foo);
  await chromeless.end();
}

run().catch(console.error.bind(console));
