import * as core from '@actions/core'
import {run} from '../src/main'
import {assert} from 'console'

jest.mock('@actions/core')

describe('When we run the action', () => {
  const fakeSetOutput = core.setOutput as jest.MockedFunction<
    typeof core.setOutput
  >

  it('should set the release url output parameter ', async () => {
    await run()
    expect(fakeSetOutput).toHaveBeenCalledWith('release-url', expect.anything())
  })
})
