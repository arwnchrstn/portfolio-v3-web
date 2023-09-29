import { Box, Link } from '@mui/material'

import ALogo from '@/assets/Logo.png'

type TLogoProps = {
  width: number
} & Omit<JSX.IntrinsicElements['img'], 'alt' | 'src'>

export default function Logo({ width, ...rest }: TLogoProps) {
  return (
    <Box>
      <Link href="/" display="flex" alignItems="center">
        <img alt="rwnchrstn.dev logo" src={ALogo} width={width} {...rest} />
      </Link>
    </Box>
  )
}
