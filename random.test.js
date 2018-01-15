const { Chromeless } = require("chromeless");

it("google something", async () => {
  const chromeless = new Chromeless();
  const result = await chromeless.goto("https://www.google.com").screenshot();
  expect(result).toBeDefined();
  await chromeless.end();
});
