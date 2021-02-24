import React from 'react';
import { Grid, Segment, List, Header, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

const FooterSui = () => {

return (
<Segment inverted vertical className='footerBg' style={{ padding: '3em 0em' }}>
<Container>
  <Grid divided inverted stackable={false}>
    <Grid.Row>
      <Grid.Column width={4} floated='right'>
        <Header inverted as='h4' content='Sitemap' />
        <List link inverted>
          <List.Item as='a'><Link to='/'>Info&Skills</Link></List.Item>
          <List.Item as='a'><Link to='/projects'>Projects</Link></List.Item>
         <List.Item as='a'> <Link to='/contact'>Contact</Link></List.Item>
          <List.Item as='a'><Link to='/github'>GitHub</Link></List.Item>
        </List>
      </Grid.Column>
      <Grid.Column width={8} floated='left'>
        <Header as='h4' inverted>
         &copy; 2021 by VKM Studio / Krzysztof Meyer 
        </Header>
        <p>
          If you are interested of my services, you can contact me at: <br />
          <a href='mailto:vkmstudiox@gmail.com' className="link-white">VKMStudioX@gmail.com</a> or
          <a href='mailto:meact@wp.pl' className="link-white">meact@wp.pl</a>,<br/>
          {/* <a href='http://facebook.com/vkmstudiox/'>fb.com/VKMStudioX</a><br/> */}
          {/* or try the form from Contact section. */}
        </p>
      </Grid.Column>

    </Grid.Row>
  </Grid>
</Container>
</Segment>
)

}

export default FooterSui