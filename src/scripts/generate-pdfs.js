// scripts/generate-pdfs.js
// Usage: run dev server (npm run dev) then: node scripts/generate-pdfs.js
const fs = require('fs')
const path = require('path')
const puppeteer = require('puppeteer')
const projects = require('../src/data/projects').projects || require('../src/data/projects')

const BASE = process.env.BASE_URL || 'http://localhost:5173'

;(async () => {
  console.log('Launching Puppeteer (this will download/run Chromium)...')
  const browser = await puppeteer.launch({ headless: true, args:['--no-sandbox','--disable-setuid-sandbox'] })
  const page = await browser.newPage()
  await page.setViewport({ width: 1200, height: 800 })

  const outDir = path.resolve(process.cwd(), 'out')
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir)

  for (const p of projects) {
    const url = `${BASE}/?pdf=${encodeURIComponent(p.id)}`
    console.log('Rendering', p.id, '→', url)
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 0 })
    // wait for specific selector if your print layout needs it
    const file = path.join(outDir, `${p.id}.pdf`)
    await page.pdf({ path: file, format: 'A4', printBackground: true, margin: { top: '20mm', bottom: '20mm', left: '12mm', right: '12mm' } })
    console.log('Saved', file)
  }

  await browser.close()
  console.log('Done. PDFs are in ./out')
})().catch(err=>{ console.error(err); process.exit(1) })
