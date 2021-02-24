import React from 'react';
import { Grid, Icon, List, Header, Divider, Segment, Accordion } from 'semantic-ui-react';
import Slider from '../components/Slider2';
import { Link } from 'react-router-dom';

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
          <Link to={{ pathname: projects.addDividerLink }} target="_blank">
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
          </Link>
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

<Segment padded="very" className='projectBg'>
  <Accordion defaultActiveIndex={1} panels={panels} />
</Segment> 

</>
     );
}
 
export default SingleProjectSui;