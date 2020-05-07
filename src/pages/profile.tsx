/** @jsx jsx */

import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { FC } from 'react'
import { Box, jsx } from 'theme-ui'

import Halo from '../components/halo'
import Intro from '../components/intro'
import Layout from '../components/layout'

export interface ProfileProps {
  data: {
    file: {
      childImageSharp: { fluid: any }
    }
  }
}

const Profile: FC<ProfileProps> = () => {
  return (
    <Layout>
      <Halo title="Profile" url="https://benromano.com/profile" />
      <Box sx={{ maxWidth: `70ch`, mb: 5, px: 3 }}>
        <Intro title="Profile" description="Engineer." />

        <p sx={{ fontFamily: `Georgia, serif` }}>
          I've been programming since my early teens with my first job in EdTech at Renaissance Learning in the small
          town of Wisconsin Rapids, Wisconsin. Since then I've had the opportunity to work all along the West Coast
          doing data visualizations at Mercedes-Benz in the bay area and Supply Chain Optimizations at Amazon in
          Seattle. Currently, I live in Los Angeles and work at Snap where I focused on Android app performance and
          developer experience.
        </p>
      </Box>
    </Layout>
  )
}

export default Profile
