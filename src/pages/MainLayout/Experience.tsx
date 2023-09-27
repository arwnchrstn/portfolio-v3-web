import SGV from '@/assets/sgv-logo-white.png'
import ExperienceCard from '@/components/MainPage/ExperienceCard'
import Title from '@/components/ui/Title'
import TweetCard from '@/components/ui/TweetCard'
import ProfileHeader from '@/components/ui/TweetCard/ProfileHeader'
import TweetLayout from '@/components/ui/TweetLayout'
import useSetPageTitle from '@/hooks/useSetPageTitle'
import { TExperienceCardProps } from '@/models/TExperienceCardProps'

const experiences: TExperienceCardProps[] = [
  {
    img: SGV,
    companySchoolName: 'SGV & Co. (EY Philippines)',
    position: 'Technology Consulting Associate (Full Stack Developer)',
    companySchoolAddr: 'Makati City, Philippines',
    yearOfStay: {
      from: 'November 2022',
      to: 'Present'
    },
    responsibilities: [
      'Create user interface base on client requirements',
      'Design and code web applications using ReactJS, NodeJS and Material UI'
    ]
  },
  {
    companySchoolName: 'iForm IT Consultancy',
    position: 'Front-end Web Developer',
    companySchoolAddr: 'Muntinlupa City, Philippines',
    yearOfStay: {
      from: 'May 2022',
      to: 'July 2022'
    },
    responsibilities: [
      'Design and develop web application using React JS',
      'Participate in creation of user stories for a web based project',
      'Create and implement user interface for web and mobile'
    ]
  }
]

function Experience() {
  useSetPageTitle('Experience')

  return (
    <TweetLayout>
      <ProfileHeader />
      <Title title="Work Experience" />

      {experiences.map((exp, index) => (
        <TweetCard key={index} tweet={<ExperienceCard {...exp} />} />
      ))}
    </TweetLayout>
  )
}

export default Experience
