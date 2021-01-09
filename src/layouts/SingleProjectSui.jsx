import React from 'react';
import { Grid, Segment, Icon, List, Header, Divider, Accordion } from 'semantic-ui-react';
import Slider from '../components/Slider2';

const SingleProjectSui = ({projects, images}) => {

    const projectsListIcons = projects.listIcons
    const ListItems = projectsListIcons.map((item) => {
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
        <Divider horizontal>{projects.addDividerKeywords}</Divider>
        <List.Item>
          <Icon name={projects.addListIcon} size='big' />
          <List.Content>
            <List.Header>{projects.addListHeader}</List.Header>
            <List.Description>
              {projects.addListDescr[0]} <br/>
              {projects.addListDescr[1]} <br/>
              {projects.addListDescr[2]} <br/>
              {projects.addListDescr[3]}
            </List.Description>
          </List.Content>
        </List.Item>
        </>
    )

    const ProjectContent = (
        <Grid columns={2} divided stackable padded='horizontally' >
        <Grid.Row>
        <Grid.Column>
        <Slider
        items = {images}
        /> 
        </Grid.Column>
       <Grid.Column>
            <Grid.Row divided>
  </Grid.Row>
    <Divider horizontal>Keywords</Divider>
        {projects.dividerKeywords} 
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

<Segment padded="very">
  <Accordion defaultActiveIndex={1} panels={panels} />
</Segment> 

</>
     );
}
 
export default SingleProjectSui;