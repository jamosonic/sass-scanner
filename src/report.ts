import * as SassGraph from 'sass-graph'

export interface Report {
  title: string
  summary: string
  text: string
}

export function buildReport(graphIndex: SassGraph.Graph['index']): Report {
  const title = `Sass scanner`
  const internalSassCount = Object.keys(graphIndex).length

  const summary = `
## :eyeglasses: You have sass

| Internal sass files |
| -- |
| ${internalSassCount} |
`

  const fileList = Object.keys(graphIndex)
    .map(filePath => `${filePath}`)
    .join('\n')

  return {
    title,
    summary,
    text: fileList
  }
}
