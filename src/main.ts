import * as core from '@actions/core'

export async function run(): Promise<void> {
  try {
    core.setOutput('sass-file-count', '253')
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
