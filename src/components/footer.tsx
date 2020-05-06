/** @jsx jsx */

import { FC } from 'react'
import { Box, Flex, jsx, Text, useColorMode } from 'theme-ui'

const links = [
  { href: `https://github.com/benjaminRomano/`, children: `GitHub` },
  { href: `https://www.linkedin.com/in/benjaminhromano/`, children: `LinkedIn` },
]

const Footer: FC = () => {
  const [colorMode] = useColorMode()

  return (
    <Box as="footer" sx={{ pb: 5 }}>
      <Box
        sx={{
          mt: 4,
          borderTopWidth: 1,
          borderTopStyle: `solid`,
          borderTopColor: `divider`,
          pt: 5,
          px: 2,
        }}
      >
        <a
          href="mailto:me@benromano.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            borderWidth: 1,
            borderStyle: `solid`,
            borderColor: `transparent`,
            px: 2,
            display: `inline-block`,
            fontFamily: `Georgia, serif`,
            color: `text`,
            bg: `tag`,
          }}
        >
          Feel free to reach out :)
        </a>
      </Box>

      <Flex
        sx={{
          mt: 4,
          px: [2, 0],
          flexWrap: `wrap`,
        }}
      >
        {links.map(({ href, children }) => (
          <Flex key={href} sx={{ flexBasis: [`calc(100% / 3)`, `auto`] }}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              {...{ href, children }}
              sx={{ height: 48, display: `flex`, alignItems: `center`, px: [2, 3] }}
            />
          </Flex>
        ))}
      </Flex>

      <Box sx={{ mt: 4, px: 3 }}>
        <Text as="small" sx={{ display: [`block`] }}>
          &copy; 2020 Ben Romano
        </Text>
        <span sx={{ display: [`none`] }}> &middot; </span>
        <Text as="small">
          <a href="https://github.com/benjaminromano/benromano-dot-com" target="_blank" rel="noopener noreferrer">
            Source
          </a>
        </Text>
      </Box>

      <Box as="p" sx={{ mt: 4, mx: 3 }}>
        <Text as="small">
          Theme by <a href="https://chrisnager.com/">Chris Nager</a>
        </Text>
      </Box>
    </Box>
  )
}

export default Footer
