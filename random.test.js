const { Chromeless } = require("chromeless");
process.env.FOO = "bar";
it("google something", async () => {
  const chromeless = new Chromeless();
  console.log(process.env.FOO);
  console.log(process.env.foo);
  const result = await chromeless.goto("https://www.google.com").screenshot();
  expect(result).toBeDefined();
  await chromeless.end();
});
