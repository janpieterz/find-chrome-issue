const { Chromeless } = require("chromeless");
process.env.NODE_ENV = "test";
async function run() {
  const chromeless = new Chromeless();
  const result = await chromeless.goto("https://www.google.com").screenshot();
  console.log(result);
  await chromeless.end();
}

run().catch(console.error.bind(console));
