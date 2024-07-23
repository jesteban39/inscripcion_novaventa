import Layout, {metadata} from '@/app/layout'
import Page from '@/app/page'
import {fireEvent, render, screen, waitFor} from '@testing-library/react'

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
    fireEvent.click(option1)
    const option2 = screen.getByTestId('option2')
    expect(option2).toBeInTheDocument()
    fireEvent.click(option2)
    await waitFor(() => {
      const RegistrationOption = screen.getAllByTestId('RegistrationOption')
      expect(RegistrationOption.length).toBe(2)
    })
  })
  it('renders a metadata', async () => {
    expect(metadata.title).toBeDefined()
    expect(metadata.description).toBeDefined()
  })
})
