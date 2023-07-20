const puppeteer = require("puppeteer");
const { generateText, checkAndGenerate } = require("./util");

test("should output name and age", () => {
  const text = generateText("hazem", 20);
  expect(text).toBe("hazem (20 years old)");
});

test("should generate a valid text ouput", () => {
  const text = checkAndGenerate("Hazem", 20);
  expect(text).toBe("Hazem (20 years old)");
});

test("should create an element with text and correct class ", async () => {
  const browser = await puppeteer.launch({
    headless: true,
    // slowMo: 80,
    // args: ["--window-size=1920,1080"],
  });
  const page = await browser.newPage();
  await page.goto(
    "file:///C:/Kalbonian_Almarsos/JavaScript_course/Section-31/testing-01-starting-setup/index.html"
  );
  await page.click("input#name");
  await page.type("input#name", "Hazem");
  await page.type("input#age", "20");
  await page.click("#btnAddUser");
  const finalText = await page.$eval(".user-item", (el) => el.textContent);
  expect(finalText).toBe("Hazem (20 years old)");
}, 10000);
