import React, { useContext } from 'react';
import { StoreContext } from '../Store/StoreProvider';
import { Grid, Segment, Icon, List, Header, Divider, Label } from 'semantic-ui-react';

import LabelItems from '../components/LabelItems'
import ListItems from '../components/ListItems'

const SkillsSui = () => {

    const  { skills, aboutMe } = useContext(StoreContext);

    const projects = skills

    const ProjectContent = (
        <Grid columns={2} divided inverted stackable padded='very'>
          <Grid.Row>
            <Grid.Column inverted color='black'>
              <Grid.Row divided>

                <Header inverted color='violet' as='h2'>
                  <Icon name={aboutMe.headerIcon} />
                  <Header.Content>{aboutMe.headerContent}</Header.Content>
                </Header> 

              </Grid.Row>
               <Grid.Row>

                <Divider horizontal inverted>Info</Divider>
                  <Header as="h2" inverted color='white'>{aboutMe.dividerKeywords[0]} <br/>
                  </Header>
                  <Header as="h3" inverted color='white'>{aboutMe.dividerKeywords[1]} <br/>
                                                         {aboutMe.dividerKeywords[2]} <br/>
                                                         {aboutMe.dividerKeywords[3]} <br/>
                                                         {aboutMe.dividerKeywords[4]} <br/> 
                  </Header>
                  <Label.Group tag size="large">
                    <LabelItems
                      LabelItemsProps={aboutMe.labelItems} />
                  </Label.Group>


              </Grid.Row>
            </Grid.Column>

            <Grid.Column inverted color='black'>
              <Grid.Row divided>

                <Header inverted color='violet' as='h2'>
                  <Icon name={projects.headerIcon} />
                <Header.Content>{projects.headerContent}</Header.Content>
                </Header> 

              </Grid.Row>
              <Grid.Row>

                <Divider horizontal inverted>Skills</Divider>
                  {projects.dividerKeywords} 
                    <List inverted animated celled selection size="big">
                      <ListItems 
                        ListItemsProps={skills}
                      />
                    </List>

                </Grid.Row>
            </Grid.Column>
            
          </Grid.Row> 
      </Grid>
      )


    return (
<>

<Segment inverted color='black' vertical padded="very"> 
{ProjectContent}
</Segment> 

</>
     );
}
 
export default SkillsSui;