import React from 'react';
import Timeline from 'react-timeline-semantic-ui';
import { Grid, Segment, Icon, Menu, Image } from 'semantic-ui-react'


const TimelineSui = (props) => {


    const TimeLineItems = props.Education.map((item) => {
        return (
            <Timeline
                key={item.id}
                direction={item.direction}
                icon={item.icon}
                title={item.title}
                time={item.time}
                description={item.description}
                color={item.color}
                tags={[item.tags[0],item.tags[1],item.tags[2],item.tags[3]]}
                // lineHeight={2}
              />
        );
      });

    return ( 
<>

<Grid container fluid stackable>
<Grid.Row>
  <Grid.Column>
    {TimeLineItems}
  </Grid.Column>
</Grid.Row>
</Grid>
</>
     );
}
 
export default TimelineSui;