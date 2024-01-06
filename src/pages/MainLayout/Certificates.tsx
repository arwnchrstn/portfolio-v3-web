import CertificateCard from '@/components/MainPage/CertificateCard'
import TweetCard from '@/components/ui/TweetCard'
import ProfileHeader from '@/components/ui/TweetCard/ProfileHeader'
import TweetLayout from '@/components/ui/TweetLayout'
import useSetPageTitle from '@/hooks/useSetPageTitle'
import { TCertificates } from '@/models/TCertificates'

const certificates: TCertificates[] = [
  {
    learningPlatform: 'Udemy',
    title: 'React Testing Library and Jest: The Complete Guide',
    link: 'https://ude.my/UC-ea619819-72aa-4dd5-8f5f-821574148b12/'
  },
  {
    learningPlatform: 'Udemy',
    title: 'JavaScript Unit Testing - The Practical Guide',
    link: 'https://ude.my/UC-b06575a9-2ddf-4231-a549-91d46be1c54d/'
  },
  {
    learningPlatform: 'Udemy',
    title: 'Docker and Kubernetes',
    link: 'https://ude.my/UC-75603f65-b7e7-44c0-bfca-5374271b064b/'
  },
  {
    learningPlatform: 'Udemy',
    title: 'Modern React with Redux',
    link: 'https://ude.my/UC-ac90dc3d-69d9-44f8-8ee2-90b46dc2ac92/'
  },
  {
    learningPlatform: 'Udemy',
    title: 'Understanding TypeScript',
    link: 'https://ude.my/UC-dd80a91f-178a-4a7b-9efe-06378adedcbe/'
  }
]

function Certificates() {
  useSetPageTitle('Certificates')

  return (
    <TweetLayout title="Certificates">
      <ProfileHeader />

      {certificates.map((c, index) => (
        <TweetCard
          key={index}
          tweet={
            <CertificateCard
              learningPlatform={c.learningPlatform}
              title={c.title}
              link={c.link}
              key={index}
            />
          }
        />
      ))}
    </TweetLayout>
  )
}

export default Certificates
