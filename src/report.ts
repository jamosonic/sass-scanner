import * as SassGraph from 'sass-graph'

export interface Report {
  title: string
  summary: string
  text: string
}

export function buildReport(graph: SassGraph.Graph): Report {
  const title = `Sass scanner`
  const summary = `
## :eyeglasses: You have sass

| Internal sass files | External sass imports | Orphans |
| -- | -- | -- |
| 3 | 4 | 3 |
`
  const text = `
    /blah.scss
    /blah.scss
    `
  return {
    title,
    summary,
    text
  }
}
