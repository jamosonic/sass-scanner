import * as core from '@actions/core'
import * as github from '@actions/github'

export async function createCheck({
  token,
  summary
}: {
  token: string
  summary: string
}): Promise<void> {
  const octokit = github.getOctokit(token)
  const {context} = github

  const response = await octokit.checks.create({
    owner: context.repo.owner,
    repo: context.repo.repo,
    head_sha: context.sha,
    name: 'Sass scanner',
    output: {
      title: 'Sass scanner',
      summary: summary
    },
    // Set this later
    conclusion: 'neutral'
  })

  if (response.status !== 201) {
    throw new Error(`Failed to create check: ${response.status}`)
  }

  core.info(`Created check ${response.data}`)
}
