const puppeteer = require('puppeteer');

(async () => {
    try {
        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        await page.setContent(`
            <html>
                <h1>Archivos</h1>
            </html>
                `)
        await page.pdf({ path: 'ejemplo.pdf', format: 'A4' })
        await browser.close()
        console.log('PDF CREADO')
    } catch (error) {
        console.error('Error de generacion de pdf')
    }
})()