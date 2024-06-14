const puppeteer = require("puppeteer");

(async () => {
  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();
    await page.setContent(`
        <html>
          <h1>Hello World</h1>
        </html>
      `);
    await page.pdf({ path: "ejemplo.pdf", format: "A4" });
    await browser.close();
    console.log("PDF Generado");
  } catch (error) {
    console.error("Error al generar el pdf");
  }
})();
