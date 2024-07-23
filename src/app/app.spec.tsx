import Layout, {metadata} from '@/app/layout'
import Page from '@/app/page'
import {render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

jest.mock('next/navigation', () => ({
  useServerInsertedHTML: jest.fn((callback) => callback())
}))

describe('HomeApp', () => {
  it('renders a HomeApp', async () => {
    render(
      <Layout>
        <Page />
      </Layout>
    )
    expect(screen.getByTestId('navBar')).toBeInTheDocument()
    const option1 = screen.getByTestId('option1')
    expect(option1).toBeInTheDocument()
    userEvent.click(option1)
    const option2 = screen.getByTestId('option2')
    expect(option2).toBeInTheDocument()
    userEvent.click(option2)
    await waitFor(() => {
      const action1 = screen.getByTestId('action1')
      expect(action1).toBeInTheDocument()
      userEvent.click(action1)
    })
    await waitFor(() => {
      const action2 = screen.getByTestId('action2')
      expect(action2).toBeInTheDocument()
      userEvent.click(action2)
    })
    await waitFor(() => {
      expect(screen.getByTestId('action1')).toBeInTheDocument()
    })
  })
  it('renders a metadata', async () => {
    expect(metadata.title).toBeDefined()
    expect(metadata.description).toBeDefined()
  })
})
