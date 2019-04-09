import * as React from 'react'
import styled from 'styled-components'

const Iframe = styled.iframe`
  border: 1px solid #efefef;
  overflow-y: hidden;
  width: 400px;
  height: 300px;
`

export default ({ id, ...props }) => <Iframe src={`https://gfycat.com/ifr/${id}?controls=0`} {...props} />
