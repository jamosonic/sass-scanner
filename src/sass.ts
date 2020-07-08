import {Graph, parseDir} from 'sass-graph'

export async function getSassGraph(dirPath: string): Promise<Graph> {
  return parseDir(dirPath)
}
