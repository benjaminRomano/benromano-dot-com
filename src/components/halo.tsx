/** @jsx jsx */

import { FC } from 'react'
import Helmet from 'react-helmet'
import { jsx, useColorMode } from 'theme-ui'

const base = {
  title: `Ben Romano`,
  url: `https://benromano.com`,
  description: `Engineer.`,
  image: `https://benromano.com/logo.png`,
  author: `@benromano`,
  hasCodePenEmbed: false,
}

export interface HaloProps {
  title?: string
  url?: string
  description?: string
  image?: string
  author?: string
  hasCodePenEmbed?: boolean
}

const Halo: FC<HaloProps> = ({
  title = base.title,
  url = base.url,
  description = base.description,
  image = base.image,
  author = base.author,
  hasCodePenEmbed = base.hasCodePenEmbed,
}) => {
  const [colorMode] = useColorMode()

  return (
    <Helmet>
      <title>{`${title}${title === base.title ? `` : ` / Ben Romano`}`}</title>
      <link rel="canonical" href={url} />
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <meta name="application-name" content="Ben Romano" />
      <meta name="apple-mobile-web-app-title" content="Ben Romano" />
      <meta name="theme-color" content={colorMode === `dark` ? `#0e1010` : `#dfeff3`} />
      <link rel="icon" href="favicon.svg" />
      <link rel="mask-icon" href="favicon.svg" color="#000000" />
      <link rel="apple-touch-icon" href="apple-touch-icon.png" />
      <link rel="manifest" href="manifest.json" />

      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Ben Romano" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="628" />
      <meta property="og:image:alt" content={`"Ben Romano" displayed in black on a light blue background`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content={author} />
      <meta name="twitter:creator" content={author} />

      {hasCodePenEmbed && <script async src="https://static.codepen.io/assets/embed/ei.js"></script>}
    </Helmet>
  )
}

export default Halo
