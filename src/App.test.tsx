import { render } from '@testing-library/react-native'
import App from 'src/App'

describe('App', () => {
  it('should mount without errors', () => {
    expect(() => render(<App />)).not.toThrow()
  })

  it('should unmount without errors', () => {
    const { unmount } = render(<App />)
    expect(() => unmount()).not.toThrow()
  })
})
