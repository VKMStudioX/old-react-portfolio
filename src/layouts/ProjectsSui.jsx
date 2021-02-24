import React, { useContext } from 'react';
import { StoreContext } from '../Store/StoreProvider';
import SingleProjectSui from './SingleProjectSui';
import { Grid, Segment, Icon, Header, Divider } from 'semantic-ui-react';

const ProjectsSui = () => {

    const  { desertShopProjects, desertShopImages, pCOWebProjects, pCOWebImages, hmiProjects, hmiImages, vueProjects, vueImages } = useContext(StoreContext);

    return (
<>
<Segment vertical padded='very' >

<Grid inverted stackable padded centered vertical>
          <Grid.Row >
            <Grid.Column widescreen={13}>
              <Grid.Row divided>

                <Header inverted color='grey' as='h2'>
                  <Icon name='folder open' />
                  <Header.Content>Projects</Header.Content>
                </Header> 

              </Grid.Row>
               <Grid.Row>

                <Divider horizontal inverted>Projects</Divider>

             <SingleProjectSui
                projects={desertShopProjects}
                images={desertShopImages}
            />

            <SingleProjectSui
                projects={pCOWebProjects}
                images={pCOWebImages}
            />

            <SingleProjectSui
                projects={hmiProjects}
                images={hmiImages}
            />

            <SingleProjectSui
                projects={vueProjects}
                images={vueImages}
            />
            
</Grid.Row>
</Grid.Column>
</Grid.Row>
</Grid>

</Segment>
</>
     );
}
 
export default ProjectsSui;