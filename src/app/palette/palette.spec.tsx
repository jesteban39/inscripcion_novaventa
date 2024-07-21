import {render, screen} from '@testing-library/react'
import Palette from '@/app/palette/page'

describe('Palette', () => {
  it('renders a Palette', () => {
    render(<Palette />)
    const palette = screen.getByText(/Palette/i)
    expect(palette).toBeInTheDocument()
  })
})
