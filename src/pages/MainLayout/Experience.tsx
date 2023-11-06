import SGV from '@/assets/sgv-logo-white.png'
import ExperienceCard from '@/components/MainPage/ExperienceCard'
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
      'Participated in brainstorming and creating user interface based on client requirements',
      'Design and code web applications using React JS and Material UI',
      'Participated in daily scrum meetings during project development',
      'Using github to have a managed codebase for development and production',
      'Design and create server side code using Node JS and MongoDB'
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
      'Participated in brainstorming of user interface',
      'Design and code using React JS',
      'Participate in creation of user stories for a web based project with guidance',
      'Create and implement user interface for web and mobile'
    ]
  }
]

function Experience() {
  useSetPageTitle('Experience')

  return (
    <TweetLayout title="Work Experience">
      <ProfileHeader />

      {experiences.map((exp, index) => (
        <TweetCard key={index} tweet={<ExperienceCard {...exp} />} />
      ))}
    </TweetLayout>
  )
}

export default Experience
