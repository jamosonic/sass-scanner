import {getSassGraph} from '../src/sass'

jest.mock('@actions/core')

describe('getSassGraph', () => {
  test('returns a sass graph', async () => {
    const graph = await getSassGraph('__tests__/fixtures')
    expect(Object.keys(graph.index).length).toBe(6)
  })
})
