// Optional helper: captures real screenshots of your deployed sites into public/projects/.
// Setup (one time):  npm i -D playwright && npx playwright install chromium
// Run:               npm run screenshots
import { chromium } from 'playwright'
import { mkdir } from 'node:fs/promises'

const sites = [
  { id: 'ecommerce', url: 'https://react-app-f1pq.vercel.app/' },
  { id: 'derma-glo', url: 'https://derma-glo-phi.vercel.app/' },
  // Food Delivery has no live URL – add { id: 'food-delivery', url: 'http://localhost:5173' }
  // while the app is running locally, or take a manual screenshot.
]

await mkdir('public/projects', { recursive: true })
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })

for (const { id, url } of sites) {
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 })
    await page.waitForTimeout(1500)
    await page.screenshot({ path: `public/projects/${id}.png` })
    console.log(`Saved public/projects/${id}.png`)
  } catch (err) {
    console.error(`Could not capture ${url}: ${err.message}`)
  }
}
await browser.close()
