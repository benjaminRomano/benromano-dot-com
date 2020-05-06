/** @jsx jsx */

import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { FC } from 'react'
import { Box, jsx } from 'theme-ui'

import Halo from '../../components/halo'
import Intro from '../../components/intro'
import Layout from '../../components/layout'

export interface BlogPostTodo {}

const BlogPostTodo: FC<BlogPostTodo> = () => {
  return (
    <Layout>
      <Halo title="TODO" url="https://benromano.com/blog/todo" description="I need to write something" />

      <Box as="article" sx={{ maxWidth: `70ch`, mb: 5, px: 3 }}>
        <Intro date="May 5th, 2020" title="TODO" description="." />

        <hr sx={{ my: 5, border: 0, height: 1, bg: `divider` }} />
      </Box>
    </Layout>
  )
}

export default BlogPostTodo
