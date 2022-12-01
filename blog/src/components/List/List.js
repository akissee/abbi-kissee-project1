import React from 'react'
import PropTypes from 'prop-types'
import { BaseContainer } from '../BaseContainer'

export const List = ({ children, ...rest }) => (
  <BaseContainer
    flex
    flexDirection='row'
    mx="auto"
    as='ol'
    {...rest}
  >
    {children}
  </BaseContainer>
)

List.propTypes = {
  children: PropTypes.node.isRequired
}