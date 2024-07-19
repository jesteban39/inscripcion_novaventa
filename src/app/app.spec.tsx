import Layout, {metadata} from '@/app/layout'
import Page from '@/app/page'
import {render, screen} from '@testing-library/react'

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
  })
  it('renders a metadata', async () => {
    expect(metadata.title).toBeDefined()
    expect(metadata.description).toBeDefined()
  })
})
