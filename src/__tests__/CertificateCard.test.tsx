import { TCertificates } from '@/models/TCertificates'
import { render, screen } from '@testing-library/react'
import CertificateCard from '@/components/MainPage/CertificateCard'

const certificates: TCertificates = {
  learningPlatform: 'Udemy',
  title: 'React Testing Library and Jest: The Complete Guide',
  link: 'https://ude.my/UC-ea619819-72aa-4dd5-8f5f-821574148b12/'
}

describe('CertificateCard', () => {
  it('should render certificates', () => {
    render(<CertificateCard {...certificates} />)

    const svgLogo = screen.getByTestId('EmojiEventsIcon')
    const certPlatform = screen.getByText(certificates.learningPlatform)
    const certTitle = screen.getByText(certificates.title)
    const certLink = screen.getByRole('link', {
      name: /view certificate/i
    })

    expect(svgLogo).toBeInTheDocument()
    expect(certPlatform).toBeInTheDocument()
    expect(certTitle).toBeInTheDocument()
    expect(certLink).toBeInTheDocument()
    expect(certLink).toHaveAttribute('href', certificates.link)
  })
})
