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
      {name: mongodbIcon,      color:'',  className:'technologies-grid--1', key:'1'},
      {name: expressIcon,      color:'',  className:'technologies-grid--2', key:'2' },
      {name: reactIcon,        color:'',  className:'technologies-grid--3', key:'3' },
      {name: nodejsIcon,       color:'',  className:'technologies-grid--4', key:'4' },
      {name: nodeRed,          color:'red',  className:'technologies-grid--5', key:'5' },
      {name: reduxIcon,        color:'',  className:'technologies-grid--6', key:'6' },
      {name: reactRouter,      color:'',  className:'technologies-grid--7', key:'7' },
      {name: javascriptIcon,   color:'',  className:'technologies-grid--8', key:'8' },
      {name: html5Icon,        color:'#e34c26',  className:'technologies-grid--9', key:'9' },
      {name: css3Shiled,       color:'#264de4',  className:'technologies-grid--10', key:'10' },
      {name: sassIcon,         color:'',  className:'technologies-grid--11', key:'11' },
      {name: vueIcon,          color:'',  className:'technologies-grid--12', key:'12' },
    ]

    const iconifyHeight = '5vw'

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
                <Divider horizontal inverted>Short Briefing of my work-life</Divider>
                    <List inverted animated celled selection size="big" floated="right" className='text'> 
                      <ListItems ListItemsProps={aboutMe} />
                    </List>
                    <Card fluid centered className='skillsCardITTechnology' >
                        <Card.Content className='technologies-grid'>
                          {iconifyIconsList.map((icon) =>  <IconifyInlineIcon key={icon.key} icon={icon.name} className={`${icon.className} iconifyIcon`} height={iconifyHeight} color={icon.color} />)}
                        </Card.Content>
                      </Card>
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
                <Divider horizontal inverted>Hard Skills</Divider>     
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