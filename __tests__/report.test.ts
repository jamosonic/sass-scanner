import {buildReport} from '../src/report'

const graphIndex = {
  '/fixtures/_c.scss': {
    imports: [],
    importedBy: [],
    modified: '2020-07-07T12:43:57.983Z'
  },
  '/fixtures/nested/_d.scss': {
    imports: [],
    importedBy: [],
    modified: '2020-07-07T12:44:38.002Z'
  },
  '/fixtures/nested/_e.scss': {
    imports: [],
    importedBy: [],
    modified: '2020-07-07T12:44:28.976Z'
  },
  '/fixtures/app1.scss': {
    imports: [],
    importedBy: [],
    modified: '2020-07-07T12:42:51.852Z'
  },
  '/fixtures/b.scss': {
    imports: [],
    importedBy: [],
    modified: '2020-07-07T12:43:43.646Z'
  },
  '/fixtures/app2.scss': {
    imports: [],
    importedBy: [],
    modified: '2020-07-07T12:51:47.136Z'
  }
}

describe('buildReport', () => {
  test('returns a report ready for github checks', async () => {
    const report = buildReport(graphIndex)
    const expectedSummary = `
## :eyeglasses: You have sass

| Internal sass files | External sass imports | Orphans |
| -- | -- | -- |
| 3 | 4 | 3 |
`

    const expectedText = `/fixtures/_c.scss
/fixtures/nested/_d.scss
/fixtures/nested/_e.scss
/fixtures/app1.scss
/fixtures/b.scss
/fixtures/app2.scss`

    expect(report.title).toBe('Sass scanner')
    expect(report.summary).toBe(expectedSummary)
    expect(report.text).toBe(expectedText)
  })
})
