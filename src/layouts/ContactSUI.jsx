import React, { useContext } from 'react';
import { StoreContext } from '../Store/StoreProvider';
import { Grid, Segment, Icon, List, Header, Divider, Form, Input, TextArea, Button, Message } from 'semantic-ui-react';

const Contact = () => {

    const  { contact } = useContext(StoreContext);

    const projects = contact

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
        <Divider horizontal inverted>{projects.addDividerKeywords}</Divider>
        <List.Item>
          <Icon name={projects.addListIcon} size='big' />
          <List.Content>
            <List.Header>{projects.addListHeader}</List.Header>
            <List.Description>
              {projects.addListDescr}

            </List.Description>
          </List.Content>
        </List.Item>
        </>
    )


    const ProjectContent = (
        <Grid columns={2} stackable divided inverted color="white" padded="very">
        <Grid.Row>
          
        <Grid.Column inverted color='violet'>
            <Grid.Row divided>
     <Header inverted color='white' as='h2'>
    <Icon name={projects.headerIcon} />
    <Header.Content>{projects.headerContent}</Header.Content>
  </Header> 
  </Grid.Row>
    <Divider horizontal inverted>Contact</Divider>
        {projects.dividerKeywords} 
         <List inverted className='listColor' animated celled selection size="big">
         {ListItems}
         {projects.isAddDivider === true 
         ? additionalDividerAndItemList
         : null}
    </List>
        </Grid.Column>

        <Grid.Column inverted color='violet'>
            <Grid.Row divided>
     <Header inverted color='white' as='h2'>
    <Icon name={projects.headerMailIcon} />
    <Header.Content>{projects.headerMailContent}</Header.Content>
  </Header> 
  </Grid.Row>
    <Divider horizontal inverted>Contact Form</Divider>


        <Form inverted color="white" success={false} error={false}>
    <Form.Group widths='equal'>
      <Form.Field
        id='form-input-control-first-name'
        control={Input}
        label='First name'
        placeholder='First name'
      />
      <Form.Field
        id='form-input-control-last-name'
        control={Input}
        label='Last name'
        placeholder='Last name'
      />
      <Form.Field
      id='form-input-control-error-email'
      control={Input}
      label='Email'
      placeholder='joe@schmoe.com'
      // error={{
      //   content: 'Please enter a valid email address',
      //   pointing: 'below',
      // }}
    />
    </Form.Group>
    <Form.Field
      id='form-textarea-control-opinion'
      control={TextArea}
      label='Message text'
      placeholder='Message text'
    />
    <Form.Group>
    <Form.Field
      id='form-button-control-public'
      control={Button}
      content='Send'
    />

    </Form.Group>
  <Message
      success
      header='Form Completed'
      content="You're all signed up for the newsletter"
    />
    <Message
      error
      header='Action Forbidden'
      content='You can only sign up for an account once with a given e-mail address.'
    />
  </Form>

</Grid.Column>
      </Grid.Row> 
      </Grid>
      )




    return (
<>

<Segment inverted color='violet' vertical padded="false"> 
{ProjectContent}
</Segment> 

</>
     );
}
 
export default Contact;