const puppeteer = require('puppeteer');

(async () => {
    try {
        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        await page.setContent(`<html><h1>Archivo</h1></html>`)
            await page.pdf({path: 'ejemplo.pdf', format: 'A4'})
            await browser.close()
            console.log('PDF CREADO')
    }catch(error){
        console.log('Error al generar PDF')
    }
})();