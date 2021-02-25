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
        <List link >
          <List.Item as='a' className='footer-link'>
            <Link to='/' className='footer-link'>Info&amp;Skills</Link></List.Item>
          <List.Item as='a' className='footer-link'><Link to='/projects' className='footer-link'>Projects</Link></List.Item>
         <List.Item as='a' className='footer-link'> <Link to='/contact' className='footer-link'>Contact</Link></List.Item>
          <List.Item as='a' className='footer-link'><Link to={{pathname: 'https://github.com/VKMStudioX'}}  target='_blank' className='footer-link'>GitHub</Link></List.Item>
        </List>
      </Grid.Column>
      <Grid.Column width={8}  floated='left'>
        {/* <Header as='h3' inverted>
         &copy; 2021 by VKM Studio / Krzysztof Meyer 
        </Header> */}
        <div class="Words">
  <div class="Words-line">
    <p>&nbsp;</p>
    <p>Maybe you</p>
  </div>
  <div class="Words-line">
    <p>Maybe you</p>
    <p>want to</p>
  </div>
  <div class="Words-line">
    <p>want to</p>
    <p>help me</p>
  </div>
  <div class="Words-line">
    <p>help me</p>
    <p>realize</p>
  </div>
  <div class="Words-line">
    <p>realize</p>
    <p>my dreams?</p>
  </div>
  <div class="Words-line">
    <p>my dreams?</p>
    <p>&nbsp;</p>
  </div>
</div>


      </Grid.Column>

    </Grid.Row>
  </Grid>
</Container>
</Segment>
)

}

export default FooterSui