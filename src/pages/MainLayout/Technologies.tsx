import TechChip from '@/components/MainPage/TechChip'
import TweetCard from '@/components/ui/TweetCard'
import ProfileHeader from '@/components/ui/TweetCard/ProfileHeader'
import TweetLayout from '@/components/ui/TweetLayout'
import useSetPageTitle from '@/hooks/useSetPageTitle'
import { TTechnologies } from '@/models/TTechnologies'

const techs: TTechnologies[] = [
  {
    label: 'JavaScript',
    iconName: 'SiJavascript'
  },
  {
    label: 'TypeScript',
    iconName: 'SiTypescript'
  },
  {
    label: 'React JS',
    iconName: 'SiReact'
  },
  {
    label: 'Vite',
    iconName: 'SiVite'
  },
  {
    label: 'Next JS',
    iconName: 'SiNextdotjs'
  },
  {
    label: 'CSS',
    iconName: 'SiCss3'
  },
  {
    label: 'Material UI',
    iconName: 'SiMui'
  },
  {
    label: 'Bootstrap',
    iconName: 'SiBootstrap'
  },
  {
    label: 'Node JS',
    iconName: 'SiNodedotjs'
  },
  {
    label: 'Express JS',
    iconName: 'SiExpress'
  },
  {
    label: 'Mongo DB',
    iconName: 'SiMongodb'
  },
  {
    label: 'MySql',
    iconName: 'SiMysql'
  },
  {
    label: 'Postman',
    iconName: 'SiPostman'
  },
  {
    label: 'Docker',
    iconName: 'SiDocker'
  },
  {
    label: 'Azure',
    iconName: 'SiMicrosoftazure'
  },
  {
    label: 'GitHub',
    iconName: 'SiGithub'
  }
]

function Technologies() {
  useSetPageTitle('Technologies')

  return (
    <TweetLayout title="Technologies">
      <ProfileHeader />

      <TweetCard
        tweet={techs.map((t, index) => (
          <TechChip label={t.label} iconName={t.iconName} key={index} />
        ))}
      />
    </TweetLayout>
  )
}

export default Technologies
