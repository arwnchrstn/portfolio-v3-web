import TweetCard from '@/components/ui/TweetCard'
import ProfileHeader from '@/components/ui/TweetCard/ProfileHeader'
import TweetLayout from '@/components/ui/TweetLayout'
import useSetPageTitle from '@/hooks/useSetPageTitle'

function Technologies() {
  useSetPageTitle('Technologies')
  return (
    <TweetLayout title="Technologies">
      <ProfileHeader />

      <TweetCard tweet="sample" />
    </TweetLayout>
  )
}

export default Technologies
