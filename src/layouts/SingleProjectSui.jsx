import React from 'react';
import { Grid, Icon, List, Header, Divider, Segment, Accordion } from 'semantic-ui-react';
import Slider from '../components/Slider2';
import { Link } from 'react-router-dom';

const SingleProjectSui = ({projects, images}) => {

    const projectsListIcons = projects.listIcons
    const projectsAddListIcons = projects.addlistIcons

    const ListItems = projectsListIcons.map((item) => {
        return (
            <List.Item key={item.listHeader} className="no-pointer">
            <Icon name={item.listIcon} size='big' />
            <List.Content className="no-pointer">
              <List.Header>{item.listHeader}</List.Header>
              <List.Description>
              {item.listDescr}
              </List.Description>
            </List.Content>
          </List.Item>
        );
      });

      const additionalItems = projectsAddListIcons.map((item) => {
        return (
            <List.Item key={item.listHeader}> 
            <Icon name={item.listIcon} size='big' className="link" />
            <List.Content>
              <List.Header><Link to={{ pathname: item.listLink }} target="_blank" className="link">{item.listHeader}</Link></List.Header>
              <List.Description>
              <Link to={{ pathname: item.listLink }} target="_blank" className="link">{item.listDescr}</Link>
              </List.Description>
            </List.Content>
          </List.Item>
        )
      });
      
    const additionalDividerAndItemList = (
        <>
        <Divider horizontal>{projects.addDividerKeywords}</Divider>
        {additionalItems}
        </>
    )

    const ProjectContent = (
        <Grid columns={1} divided stackable padded='horizontally' >
        <Grid.Row>
        <Grid.Column>
        <Slider
        items = {images}
        /> 
            <Grid.Row divided>
  </Grid.Row>
    <Divider horizontal>Keywords</Divider>
        <Header as='h3'>{projects.dividerKeywords}</Header> 
         <List animated  selection size="big">
         {ListItems}
         {projects.isAddDivider === true 
         ? additionalDividerAndItemList
         : null}
    </List>
        </Grid.Column>
      </Grid.Row> 
      </Grid>
      )

      const panels = [
        {
          key: 'accordrionKey',
          title: {
            as: Header,
            content: projects.headerContent,
            icon: projects.headerIcon,
          },
          content: {
            content:  ProjectContent,
            
          },
        },
      ]

    return (
<>

<Segment padded="very" className='projectBg'>
  <Accordion defaultActiveIndex={1} panels={panels} />
</Segment> 

</>
     );
}
 
export default SingleProjectSui;