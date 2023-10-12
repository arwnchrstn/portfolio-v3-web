import CertificateCard from '@/components/MainPage/CertificateCard'
import TweetCard from '@/components/ui/TweetCard'
import ProfileHeader from '@/components/ui/TweetCard/ProfileHeader'
import TweetLayout from '@/components/ui/TweetLayout'
import useSetPageTitle from '@/hooks/useSetPageTitle'
import { TCertificates } from '@/models/TCertificates'

const certificates: TCertificates[] = [
  {
    learningPlatform: 'Udemy',
    title: 'Docker and Kubernetes',
    link: 'https://ude.my/UC-75603f65-b7e7-44c0-bfca-5374271b064b/'
  },
  {
    learningPlatform: 'Udemy',
    title: 'AZ-900: Microsoft Azure Fundamentals Exam Prep',
    link: 'https://ude.my/UC-5e455899-87f7-49fb-b8bf-d861691ac767/'
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
  },
  {
    learningPlatform: 'Udemy',
    title: 'Angular - The Complete Guide',
    link: 'https://ude.my/UC-24e6c235-c330-4857-9769-3c9bc87c2f6c/'
  },
  {
    learningPlatform: 'Udemy',
    title: 'React Native - The Practical Guide',
    link: 'https://ude.my/UC-cac82b22-88db-4eed-b225-e8fdeada75e1/'
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
