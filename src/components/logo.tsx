/** @jsx jsx */

import { FC } from 'react'
import { Box, jsx } from 'theme-ui'

const Logo: FC = () => (
  <Box
    as="svg"
    // @ts-ignore
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
    sx={{ width: '2.5rem', height: '2.5rem', display: `block` }}
  >
    <title>Logo which is two offset orange circles</title>

    <svg height="200" width="200" x={15} y={50}>
      <circle cx="60" cy="60" r="40" stroke="black" stroke-width="3" fill="orange" />
    </svg>
    <svg height="200" width="200" x={65} y={50}>
      <circle cx="60" cy="60" r="40" stroke="black" stroke-width="3" fill="orange" />
    </svg>
  </Box>
)

export default Logo
