import React from 'react';
import { Icon, List, Divider } from 'semantic-ui-react';

const ListItems = ({ListItemsProps}) => {

    const ListItemsPropsIcons = ListItemsProps.listIcons

    const itemsList = ListItemsPropsIcons.map((item) => {
        return (
            <List.Item key={item.listHeader}>
            <Icon name={item.listIcon} size='big' />
            <List.Content>
              <List.Header>{item.listHeader}</List.Header>
              <List.Description>
              {item.listDescr}
              </List.Description>
            </List.Content>
          </List.Item>
        );
      });

    const additionalDividerAndItemList = (
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
    )


    return ( 
        <>
        {itemsList}
        {ListItemsProps.isAddDivider === true 
            ? additionalDividerAndItemList
            : null}
    </>
    )
}
export default ListItems;