import * as React from 'react'
import NextHead from 'next/head'
import hashcode from '../hashcode'

const defaultProps = {
  title: 'kat.cafe',
  description: 'weird stuff katalina made',
  image: 'https://kat.cafe/static/social.png',
  useGenerated: true
}

const SocialCards = (props) => {
  props = {
    ...defaultProps,
    ...props
  }

  if (props.useGenerated && props.title !== 'kat.cafe') {
    props.image = `https://kat.cafe/static/generated/${hashcode(props.title)}.png`
  }

  return <NextHead>
    <meta key='og:title' property='og:title' content={props.title} />
    <meta key='og:description' property='og:description' content={props.description} />
    <meta key='twitter:card' name='twitter:card' content='summary_large_image' />
    <meta key='twitter:image' name='twitter:image' content={props.image} />
    <meta key='og:image' property='og:image' content={props.image} />
    <meta key='og:image:width' property='og:image:width' content={400} />
    <meta key='og:image:height' property='og:image:height' content={300} />
  </NextHead>
}

export default SocialCards
