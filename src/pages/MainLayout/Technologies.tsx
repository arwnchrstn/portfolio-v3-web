import TechChip from '@/components/MainPage/TechChip'
import TweetCard from '@/components/ui/TweetCard'
import ProfileHeader from '@/components/ui/TweetCard/ProfileHeader'
import TweetLayout from '@/components/ui/TweetLayout'
import useSetPageTitle from '@/hooks/useSetPageTitle'
import * as Icons from 'react-icons/si'
import { GrDocumentMissing } from 'react-icons/gr'
import { TTechnologies } from '@/models/TTechnologies'

console.log([
  'JavaScript',
  'TypeScript',
  'React JS',
  'Next JS',
  'CSS',
  'Material UI',
  'Bootstrap',
  'Node JS',
  'Express JS',
  'Mongo DB',
  'MySQL',
  'Postman',
  'Docker',
  'Github',
  'Azure'
])

const TECHS: TTechnologies[] = [
  {
    label: 'JavaScript',
    iconName: 'SiJavascript'
  }
]

function Technologies() {
  useSetPageTitle('Technologies')

  return (
    <TweetLayout title="Technologies">
      <ProfileHeader />

      <TweetCard tweet={<TechChip text="Sample" />} />
    </TweetLayout>
  )
}

export default Technologies
