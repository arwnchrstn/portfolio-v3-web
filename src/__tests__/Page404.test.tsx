import { screen, render } from '@testing-library/react'
import Page404 from '@/pages/Page404'
import { MemoryRouter } from 'react-router-dom'

const renderComponent = () => {
  render(
    <MemoryRouter>
      <Page404 />
    </MemoryRouter>
  )
}

describe('Render Page404', () => {
  it('should render 404 | Page not found text', () => {
    renderComponent()

    const textToRender = '404 | Page not found'

    const foundText = screen.getByText(textToRender)

    expect(foundText).toBeInTheDocument()
  })

  it('should render a button that will redirect to homepage', () => {
    renderComponent()

    const link = screen.getByRole('link', {
      name: /back to home/i
    })

    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/')
  })
})
