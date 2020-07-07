import {Graph} from 'sass-graph'
import * as core from '@actions/core'
import {parseDir} from 'sass-graph'

export async function getSassGraph(dirPath: string): Promise<Graph> {
  const sassGraph = parseDir(dirPath)
  core.info(`Found ${sassGraph}`)
  return sassGraph
}
