import React from 'react'
import { CardStyle } from './styles'
export const Card = ({ title }) => {
  return (
    <CardStyle>
      <h2>{title}</h2>
    </CardStyle>
  )
}
