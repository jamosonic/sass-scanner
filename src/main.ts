import * as core from '@actions/core'
import {getSassGraph} from './sass'
import {createCheck} from './github'
import {buildReport} from './report'

export async function run(): Promise<void> {
  try {
    const graph = await getSassGraph('./')
    const report = buildReport(graph)
    const token = core.getInput('repo-token')
    await createCheck({token, report})
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
