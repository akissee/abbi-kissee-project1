import React from 'react'
import { BaseHeading } from './BaseHeading'

const Heading1 = props => 
  <BaseHeading as='h1' fontSize={[4, 6, 8]} {...props} />

export { Heading1 as H1}