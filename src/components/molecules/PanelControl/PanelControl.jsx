import React from 'react'
import { Btn } from './styles'
import { Flex } from '../../atoms'
export const PanelControl = ({ handlePanel }) => {
  return (
    <Flex>
      <Btn onClick={() => handlePanel(false)}>Ships</Btn>
      <Btn onClick={() => handlePanel(true)}>Modify Ship</Btn>
    </Flex>
  )
}
