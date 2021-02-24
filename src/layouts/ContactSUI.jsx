import React, { useContext } from 'react';
import { StoreContext } from '../Store/StoreProvider';
import { Grid, Segment, Icon, List, Header, Divider } from 'semantic-ui-react';
// import ContactForm  from '../components/ContactForm'
import ListItems from '../components/ListItems'


const Contact = () => {

    const  { contact } = useContext(StoreContext);

    const contactContent = (
  <>
    <Grid inverted stackable padded centered vertical className="contact">

      <Grid.Row>
        <Grid.Column widescreen={13}>
          <Grid.Row divided>
            <Header inverted color='grey' as='h2'>
              <Icon name={contact.headerIcon} />
              <Header.Content>{contact.headerContent}</Header.Content>
            </Header>  
          </Grid.Row>
          <Grid.Row>
            <Divider horizontal inverted>Contact</Divider>  
              <List inverted className='listColor' animated celled selection size="big">
                <ListItems ListItemsProps={contact}  />
              </List>
          </Grid.Row>
        </Grid.Column>
      </Grid.Row>
{/* 
      <Grid.Row>
        <Grid.Column widescreen={13}>
          <Grid.Row divided>
            <Header inverted color='white' as='h2'>
              <Icon name={contact.headerMailIcon} />
              <Header.Content>{contact.headerMailContent}</Header.Content>
            </Header> 
          </Grid.Row>
          <Grid.Row>
                <Divider horizontal inverted>Contact Form</Divider>
                <ContactForm />
          </Grid.Row>
        </Grid.Column>    
      </Grid.Row>  */}
    </Grid>
  </>
      )



  return (
<>

<Segment vertical padded="very"> 
{contactContent}
</Segment> 

</>
     );
}
 
export default Contact;