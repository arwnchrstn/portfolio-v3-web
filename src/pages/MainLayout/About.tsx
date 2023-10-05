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
      <TweetCard tweet="I have been into some engagements/projects building user interface based on client requirements, gathering business requirements converting them into useful application and integrating external APIs" />
      <TweetCard tweet="I love cats 🐱" />
      <TweetCard tweet="Still learning different frameworks like NextJS, Angular and React Native" />
    </TweetLayout>
  )
}

export default About
