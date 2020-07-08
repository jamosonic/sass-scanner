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
      summary: summary,
      text: 'what is this',
      annotations: [
        {
          path: 'README.md',
          annotation_level: 'warning',
          title: 'Spell Checker',
          message: "Check your spelling for 'banaas'.",
          raw_details: "Do you mean 'bananas' or 'banana'?",
          start_line: 2,
          end_line: 2
        },
        {
          path: 'README.md',
          annotation_level: 'warning',
          title: 'Spell Checker',
          message: "Check your spelling for 'aples'",
          raw_details: "Do you mean 'apples' or 'Naples'",
          start_line: 4,
          end_line: 4
        }
      ],
      images: [
        {
          alt: 'Super bananas',
          image_url: 'http://example.com/images/42'
        }
      ]
    },
    // Set this later
    conclusion: 'neutral'
  })

  if (response.status !== 201) {
    throw new Error(`Failed to create check: ${response.status}`)
  }

  core.info(`Created check ${response.data}`)
}
