import * as core from '@actions/core'
import {getSassGraph} from './sass'
import {createCheck} from './github'

export async function run(): Promise<void> {
  try {
    const graph = await getSassGraph('./')
    const sassFileCount = Object.keys(graph.index).length.toString()

    core.setOutput(
      'sass-file-count',
      Object.keys(graph.index).length.toString()
    )

    const token = core.getInput('repo-token')
    await createCheck({token, summary: `${sassFileCount} sass files left`})
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
