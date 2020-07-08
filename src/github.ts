import * as core from '@actions/core'
import * as github from '@actions/github'
import {Report} from './report'

export async function createCheck({
  token,
  report
}: {
  token: string
  report: Report
}): Promise<void> {
  const octokit = github.getOctokit(token)
  const {context} = github
  const {title, summary, text} = report

  const response = await octokit.checks.create({
    owner: context.repo.owner,
    repo: context.repo.repo,
    head_sha: context.sha,
    name: 'Sass scanner',
    output: {
      title,
      summary,
      text
      // annotations: [
      //   {
      //     path: 'README.md',
      //     annotation_level: 'notice',
      //     message: 'Sass file detected',
      //     start_line: 2,
      //     end_line: 2
      //   },
      //   {
      //     path: 'README.md',
      //     annotation_level: 'notice',
      //     message: 'Sass file detected',
      //     start_line: 4,
      //     end_line: 4
      //   }
      // ],
      // images: [
      //   {
      //     alt: 'Super bananas',
      //     image_url: 'http://example.com/images/42'
      //   }
      // ]
    },
    // Set this later
    conclusion: 'neutral'
  })

  if (response.status !== 201) {
    throw new Error(`Failed to create check: ${response.status}`)
  }

  core.info(`Created check ${response.data}`)
}
