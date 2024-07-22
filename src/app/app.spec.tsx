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
    const RegistrationOption = screen.getAllByTestId('RegistrationOption')
    expect(RegistrationOption.length).toBe(2)
    fireEvent.click(RegistrationOption[0])
    fireEvent.click(RegistrationOption[1])
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
