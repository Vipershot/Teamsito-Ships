import React from 'react'
import { Card, LinkTo, Flex, FlexGrow, Title } from '../../atoms'

export const MenuGroup = () => {
  const listMenu = [
    { title: 'Ships', url: 'ships' },
    { title: 'Add Ship', url: 'add-ship' },
    { title: 'Add Ship', url: 'add-ship' }
  ]
  return (
    <>
      <Title>Menu Group</Title>

      <Flex>
        {listMenu.map(({ title, url }) => (
          <FlexGrow key={title}>
            <LinkTo to={url}>
              <Card title={title} />
            </LinkTo>
          </FlexGrow>
        ))}
      </Flex>
    </>
  )
}
