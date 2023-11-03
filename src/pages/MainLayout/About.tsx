import TweetCard from '@/components/ui/TweetCard'
import ProfileHeader from '@/components/ui/TweetCard/ProfileHeader'
import TweetLayout from '@/components/ui/TweetLayout'
import useSetPageTitle from '@/hooks/useSetPageTitle'

function About() {
  useSetPageTitle('About')

  return (
    <TweetLayout title="About Me">
      <ProfileHeader />

      <TweetCard tweet="Hi, I am Arwen Christian Ceres, a Full Stack Web Developer based in the Philippines" />
      <TweetCard tweet="I mainly use JavaScript / TypeScript for both front-end and back-end development" />
      <TweetCard tweet="I have been into some engagements/projects building user interface and writing server side code based on client requirements" />
    </TweetLayout>
  )
}

export default About
