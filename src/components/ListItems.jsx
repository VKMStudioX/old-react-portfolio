import React from 'react';
import { Icon, List, Divider } from 'semantic-ui-react';

const ListItems = ({ListItemsProps}) => {

    const ListItemsPropsIcons = ListItemsProps.listIcons

    const itemsList = ListItemsPropsIcons.map((item) => {
        return (
          <>
            <List.Item key={item.listHeader} className="no-pointer">
            <Icon name={item.listIcon} size='huge' />
            <List.Content>
              <List.Header>{item.listHeader}</List.Header>
              <List.Description>
              {item.listDescr}
              </List.Description>
            </List.Content>
          </List.Item>

{
ListItemsProps.hasOwnProperty('isAddDivider') && ListItemsProps.isAddDivider  
  ? 
  <>
  <Divider horizontal>{ListItemsProps.addDividerKeywords}</Divider>
  <List.Item>
    <Icon name={ListItemsProps.addListIcon} size='big' />
    <List.Content>
      <List.Header>{ListItemsProps.addListHeader}</List.Header>
      <List.Description>
        {ListItemsProps.addListDescr[0]} <br/>
        {ListItemsProps.addListDescr[1]} <br/>
        {ListItemsProps.addListDescr[2]} <br/>
        {ListItemsProps.addListDescr[3]}
      </List.Description>
    </List.Content>
  </List.Item>
  </>
  : null
}
        </>
    )
  });

    return ( 
        <>
        {itemsList}
        
    </>
    )
}
export default ListItems;