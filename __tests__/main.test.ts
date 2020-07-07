import * as core from '@actions/core'
import {run} from '../src/main'

jest.mock('@actions/core')

describe('When we run the action', () => {
  const fakeSetOutput = core.setOutput as jest.MockedFunction<
    typeof core.setOutput
  >

  it('should set the sass-file-count output parameter ', async () => {
    await run()
    expect(fakeSetOutput).toHaveBeenCalledWith('sass-file-count', '6')
  })
})
