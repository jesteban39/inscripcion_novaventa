import {render, screen} from '@testing-library/react'
import Page from '@/app/palette/page'
import Layout, {metadata} from '@/app/palette/layout'

describe('Palette', () => {
  it('renders a Palette', () => {
    render(
      <Layout>
        <Page />
      </Layout>
    )
    const palette = screen.getByText(/Palette/i)
    expect(palette).toBeInTheDocument()
  })

  it('renders a metadata', async () => {
    expect(metadata.title).toBeDefined()
    expect(metadata.description).toBeDefined()
  })
})
