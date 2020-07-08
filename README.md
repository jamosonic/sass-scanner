# Sass scanner

Trying to eradicate sass in your codebase? This simple github action lets you know how much you have left.  

## Inputs

### `repo-token`

**Required** To post github checks.

## Outputs

Nothing yet, but posts a github check.

![Image of github check output](https://raw.githubusercontent.com/jamos99/sass-scanner/main/github-check-screenshot.png)

## Example usage

```
name: "Sass scanner"
on:
  - push

jobs:
  scan-sass:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: jamos99/sass-scanner@v1
        with:
          repo-token: "${{ secrets.GITHUB_TOKEN }}"
```