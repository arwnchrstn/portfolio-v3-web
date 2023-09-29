import PSHS from '@/assets/PSHS.png'
import PUP from '@/assets/PUPLogo.png'
import ExperienceCard from '@/components/MainPage/ExperienceCard'
import TweetCard from '@/components/ui/TweetCard'
import ProfileHeader from '@/components/ui/TweetCard/ProfileHeader'
import TweetLayout from '@/components/ui/TweetLayout'
import useSetPageTitle from '@/hooks/useSetPageTitle'
import { TExperienceCardProps } from '@/models/TExperienceCardProps'

const education: TExperienceCardProps[] = [
  {
    img: PUP,
    companySchoolName:
      'Polytechnic University of the Philippines - Santa Rosa Campus',
    position: 'Bachelor of Science in Information Technology',
    companySchoolAddr: 'Santa Rosa City, Laguna',
    yearOfStay: {
      from: '2018',
      to: '2022'
    }
  },
  {
    img: PSHS,
    companySchoolName: 'Pulo Senior High School',
    position: 'TVL-ICT Strand',
    companySchoolAddr: 'Cabuyao City, Laguna',
    yearOfStay: {
      from: '2016',
      to: '2018'
    }
  }
]

function Education() {
  useSetPageTitle('Education')

  return (
    <TweetLayout title="Education">
      <ProfileHeader />

      {education.map((exp, index) => (
        <TweetCard key={index} tweet={<ExperienceCard {...exp} />} />
      ))}
    </TweetLayout>
  )
}

export default Education
