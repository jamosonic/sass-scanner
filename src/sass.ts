import {Graph, parseDir} from 'sass-graph'
import * as core from '@actions/core'

export async function getSassGraph(dirPath: string): Promise<Graph> {
  const sassGraph = parseDir(dirPath)
  core.info(`Found ${sassGraph}`)
  console.log(sassGraph)
  return sassGraph
}
