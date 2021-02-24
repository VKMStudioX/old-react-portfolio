import React, { useContext } from 'react';
import { StoreContext } from '../Store/StoreProvider';
import { Grid, Segment, Icon, List, Header, Divider, Card } from 'semantic-ui-react';

import ListItems from '../components/ListItems'
import CardGroupItems from '../components/CardGroupItems'

import { InlineIcon as IconifyInlineIcon } from '@iconify/react';
import mongodbIcon from '@iconify-icons/logos/mongodb';
import expressIcon from '@iconify-icons/logos/express';
import nodejsIcon from '@iconify-icons/logos/nodejs';
import reactIcon from '@iconify-icons/logos/react';
import reduxIcon from '@iconify-icons/logos/redux';
import reactRouter from '@iconify-icons/logos/react-router';
import sassIcon from '@iconify-icons/logos/sass';
import nodeRed from '@iconify-icons/cib/node-red';
import html5Icon from '@iconify-icons/cib/html5';
import css3Shiled from '@iconify-icons/cib/css3-shiled';
import javascriptIcon from '@iconify-icons/logos/javascript';
import vueIcon from '@iconify-icons/logos/vue';


const SkillsSui = () => {

    const  { aboutMe } = useContext(StoreContext);

    const iconifyIconsList = [
      {name: mongodbIcon,      color:'' },
      {name: expressIcon,      color:'' },
      {name: reactIcon,        color:'' },
      {name: nodejsIcon,       color:'' },
      {name: reduxIcon,        color:'' },
      {name: reactRouter,      color:'' },
      {name: javascriptIcon,   color:'' },
      {name: nodeRed,          color:'red' },
      {name: html5Icon,        color:'#e34c26' },
      {name: css3Shiled,       color:'#264de4' },
      {name: sassIcon,         color:'' },
      {name: vueIcon,          color:'' },
    ]

    const iconifyHeight = '7.4vh'

    const skillsContent = (
      <>
        <Grid inverted stackable padded centered vertical>

        <Grid.Row>
            <Grid.Column widescreen={13}>
              <Grid.Row divided>
                <Header inverted color='grey' as='h2'>
                  <Icon name={aboutMe.headerIcon} />
                <Header.Content>
                  {aboutMe.headerContent}
                </Header.Content>
                </Header> 
              </Grid.Row>
              <Grid.Row>
                <Divider horizontal inverted>SHort BReifing of my work-life</Divider>
                    <List inverted animated celled selection size="big" floated="right" className='text'> 
                      <ListItems ListItemsProps={aboutMe} />
                      <List.Item>
                      <Card fluid centered className='skillsCardITTechnology' >
                        <Card.Content>
                          {iconifyIconsList.map((icon) =>  <IconifyInlineIcon key={icon.name} icon={icon.name} className='iconifyIcon' height={iconifyHeight} color={icon.color} />)}
                        </Card.Content>
                      </Card>
                      </List.Item>
                    </List>
                    
                </Grid.Row>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row >
            <Grid.Column widescreen={13}>
              <Grid.Row divided>
                <Header inverted color='grey' as='h2'>
                  <Icon name={aboutMe.cardHeaderIcon} />
                  <Header.Content>{aboutMe.cardHeaderContent}</Header.Content>
                </Header> 
              </Grid.Row>
               <Grid.Row>
                <Divider horizontal inverted>Tags</Divider>     
                  <Card.Group centered stackable>     
                    <CardGroupItems CardItemsProps={aboutMe.cardItems} />
                  </Card.Group>   
              </Grid.Row>
            </Grid.Column>
            </Grid.Row>

      </Grid>
      </>
      )


    return (
<>

<Segment vertical padded='very'> 
{skillsContent}
</Segment> 

</>
     );
}
 
export default SkillsSui;