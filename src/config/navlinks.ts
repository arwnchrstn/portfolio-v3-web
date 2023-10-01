import CodeIcon from '@mui/icons-material/Code'
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact'
import PersonIcon from '@mui/icons-material/Person'
import SchoolIcon from '@mui/icons-material/School'
import WorkIcon from '@mui/icons-material/Work'
import CardMembershipIcon from '@mui/icons-material/CardMembership'

export const navLinks = [
  { text: 'About', icon: PersonIcon, path: 'about' },
  { text: 'Experience', icon: WorkIcon, path: 'experience' },
  { text: 'Education', icon: SchoolIcon, path: 'education' },
  { text: 'Techologies', icon: CodeIcon, path: 'technologies' },
  {
    text: 'Certificates',
    icon: CardMembershipIcon,
    path: 'certificates'
  },
  {
    text: "Let's Connect",
    icon: ConnectWithoutContactIcon,
    path: 'connect'
  }
]
