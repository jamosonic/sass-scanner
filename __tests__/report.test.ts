import {getSassGraph} from '../src/sass'
import {buildReport} from '../src/report'

describe('buildReport', () => {
  test('returns a report ready for github checks', async () => {
    const graph = await getSassGraph('__tests__/fixtures')
    const report = buildReport(graph)
    const expectedSummary = `
## :eyeglasses: You have sass

| Internal sass files | External sass imports | Orphans |
| -- | -- | -- |
| 3 | 4 | 3 |
`

    const expectedText = `
    /blah.scss
    /blah.scss
    `

    expect(report.title).toBe('Sass scanner')
    expect(report.summary).toBe(expectedSummary)
    expect(report.text).toBe(expectedText)
  })
})
