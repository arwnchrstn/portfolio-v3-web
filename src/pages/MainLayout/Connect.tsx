import ConnectForm from '@/components/MainPage/ConnectForm'
import ProfileHeader from '@/components/ui/TweetCard/ProfileHeader'
import TweetLayout from '@/components/ui/TweetLayout'
import useSetPageTitle from '@/hooks/useSetPageTitle'

function Connect() {
  useSetPageTitle('Connect')
  return (
    <TweetLayout title="Let's Connect">
      <ProfileHeader />

      <ConnectForm />
    </TweetLayout>
  )
}

export default Connect
