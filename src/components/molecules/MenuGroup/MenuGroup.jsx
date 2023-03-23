import React from 'react'
import { Card, LinkTo, Flex, FlexGrow, Title } from '../../atoms'

export const MenuGroup = () => {
  const listMenu = [
    { title: 'My Ships', url: 'ships' },
    { title: 'Add Ship', url: 'add-ship' }
  ]
  return (
    <>
      <Title>Menu Group</Title>

      <Flex>
        {listMenu.map(({ title, url }, i) => (
          <FlexGrow key={i}>
            <LinkTo to={url}>
              <Card title={title} />
            </LinkTo>
          </FlexGrow>
        ))}
      </Flex>
    </>
  )
}
