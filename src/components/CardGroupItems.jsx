import React from 'react'
import LabelItems from './LabelItems'
import { Card, Header, Icon, Label, Segment, Divider } from 'semantic-ui-react'

const CardGroupItems = ({CardItemsProps}) => {

    const cardItems = CardItemsProps.map((item) => {
        return (
    <Card className={item.cardItemClassName} key={item.cardItemName}>
    <Segment inverted className='cardSegment'>
    <Card.Content>
      <Card.Header>
      <Header inverted={item.cardItemHeaderIsInverted}  as='h2'>
          <Icon name={item.cardItemIconName} />
          <Header.Content>{item.cardItemName}</Header.Content></Header> 
        </Card.Header>
    </Card.Content>
    <Card.Content>
    <Divider />
    <Label.Group tag size="big">
                    <LabelItems
                      LabelItemsProps={item.cardLabelItems} />
                  </Label.Group>
    </Card.Content>
    </Segment>
  </Card>
        )})

    return (
        <>
            {cardItems}
        </>
    )
}

export default CardGroupItems
