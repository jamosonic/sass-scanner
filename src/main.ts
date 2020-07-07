import * as core from '@actions/core'
import {getSassGraph} from './sass'

export async function run(): Promise<void> {
  try {
    const graph = await getSassGraph('./')
    core.setOutput(
      'sass-file-count',
      Object.keys(graph.index).length.toString()
    )
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
