import React from 'react';
import { Grid, Segment, Icon, List, Header, Divider, Label, Accordion } from 'semantic-ui-react';
import LabelItems from '../components/LabelItems'
import ListItems from '../components/ListItems'
import Slider from '../components/Slider2';
import ContactForm from '../components/ContactForm'

const LayoutGrid = ({ dataLeft, dataRight, dataSelector }) => {

    const ProjectContent = (
        <Grid columns={2} divided inverted={dataSelector.layoutGridIsInverted} stackable padded="horizontally">
          <Grid.Row>

            {/* LEFT SIDE */}

            <Grid.Column color={dataSelector.layoutGridColumnColor}>

            {/* 1st Row - Header of left side, only on skills/about and contact */}

            {dataSelector.layoutType === "Skills" || dataSelector.layoutType === "Contact"
            ? <>

              <Grid.Row divided>

                <Header inverted color='violet' as='h2'>
                  <Icon name={dataLeft.headerIcon} />
                  <Header.Content>{dataLeft.headerContent}</Header.Content>
                </Header> 

              </Grid.Row>
              </>
            :
            null}

               <Grid.Row>

            {/* 2nd row - Content of left side */}

            {dataSelector.layoutType === "Skills"
            ? <>
                <Divider horizontal inverted>Info</Divider>
                  <Header as="h2" inverted>{dataLeft.dividerKeywords[0]} <br/>
                  </Header>
                  <Header as="h3" inverted>{dataLeft.dividerKeywords[1]} <br/>
                                                         {dataLeft.dividerKeywords[2]} <br/>
                                                         {dataLeft.dividerKeywords[3]} <br/>
                                                         {dataLeft.dividerKeywords[4]} <br/> 
                  </Header>
                  <Label.Group tag size="large">
                    <LabelItems
                      LabelItemsProps={dataLeft.labelItems} />
                  </Label.Group>
              </>
            : null}


            {dataSelector.layoutType === "Contact" 
            ? <>
                <Divider horizontal inverted>Contact</Divider>
                  {dataRight.dividerKeywords} 
                    <List inverted animated celled selection size="big">
                      <ListItems 
                        ListItemsProps={dataLeft}
                      />
                    </List>
                    </>
            : null}

            {dataSelector.layoutType === "Projects" 
            ? <Slider  items = {dataLeft} /> 
            : null}

              </Grid.Row>
            </Grid.Column>

           {/* RIGHT SIDE */}
        
            <Grid.Column color={dataSelector.layoutGridColumnColor}>

            {dataSelector.layoutType === "Skills" || dataSelector.layoutType === "Contact"
            ? <> 
              <Grid.Row divided>

                <Header inverted color='violet' as='h2'>
                  <Icon name={dataRight.headerIcon} />
                <Header.Content>{dataRight.headerContent}</Header.Content>
                </Header> 

              </Grid.Row>
              </>
            : null}
              <Grid.Row>
                  
            {dataSelector.layoutType === "Skills"  || dataSelector.layoutType === "Projects"
            ? <>
                <Divider horizontal inverted={dataSelector.layoutGridIsInverted}>{dataSelector.layoutType === "Skills" ? "Skills" : "Keywords"}</Divider>
                  {dataRight.dividerKeywords} 
                    <List inverted={dataSelector.layoutGridIsInverted} animated celled={dataSelector.layoutGridIsCelled} selection size="big">
                      <ListItems 
                        ListItemsProps={dataRight}
                      />
                    </List>
                    </>
            : null}


            {dataSelector.layoutType === "Contact" 
            ? <>
                <Divider horizontal inverted>Contact Form</Divider>
                <ContactForm />
                    </>
            : null}

                </Grid.Row>
            </Grid.Column>
            
          </Grid.Row> 
      </Grid>
      )

      const projectAccPanels = [
        {
          key: 'accordrionKey',
          title: {
            as: Header,
            content: dataRight.headerContent,
            icon: dataRight.headerIcon,
          },
          content: {
            content:  ProjectContent,
            
          },
        },
      ]



    return (
        <>
        {dataSelector.layoutType === "Projects" 
        ? 
          <>
            <Segment padded="very">
              <Accordion defaultActiveIndex={1} panels={projectAccPanels} />
            </Segment> 
          </>
        :
          <>
            <Segment inverted color={dataSelector.layoutGridColumnColor} vertical padded="very"> 
                {ProjectContent}
            </Segment> 
          </>
        }
        </>
      );
}
 
export default LayoutGrid;