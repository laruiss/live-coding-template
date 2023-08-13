import { render } from '@testing-library/vue'
import HomePage from './HomePage.vue'

describe('HomePage', () => {
  it('displays appropriate text', async () => {
    const { getByText } = render(HomePage)

    getByText('Search page')
  })
})
