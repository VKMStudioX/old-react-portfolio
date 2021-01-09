import React, { Component } from 'react'
import { Grid, Segment, Icon, Menu, Image, Header, Sticky, Responsive, Sidebar, Dropdown } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import VKM_Logo from '../img/VKM_logo_v4.png';
import LayoutActivator from './LayoutActivator';

export default class HeaderSui extends Component {
  state = { activeItem: 'home', menuVisible: false }

  
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    const MenuList = [
      {
        nameActive: 'Info&Skills',
        nameIcon: 'wrench',
        to: '/'
      }, 
      {
        nameActive: 'Projects',
        nameIcon: 'folder open',
        to: '/projects'
      }, 
      {
        nameActive: 'Contact',
        nameIcon: 'call',
        to: '/contact'
      }, 
      {
        nameActive: 'GitHub',
        nameIcon: 'github',
        to: '/github'
      },
    ]

    
  const MenuItems = MenuList.map((item) => {
    return (
      <Link to={item.to} key={item.nameActive}>
        <Menu.Item
          name={item.nameActive}
          active={activeItem === item.nameActive}
          onClick={this.handleItemClick}
        >
          <Icon name={item.nameIcon} />
          {item.nameActive}
        </Menu.Item>
      </Link>
    );
  });

  


const MenuHeader = (
  <Menu icon='labeled' color="violet" inverted borderless floated='right'>
{MenuItems}
      </Menu>
  )

  const MenuHeaderMobile = (
    <Menu icon='labeled' color="violet" inverted borderless floated='right'>
         <Menu.Item name='Menu' open={this.state.menuVisible} onClick={() => this.setState({ menuVisible: !this.state.menuVisible })}>
          <Icon name='list ul' /></Menu.Item>
        </Menu>
    )

    return (
      <>

<Grid columns='equal' inverted padded='vertically'>
<Grid.Row color='violet' textAlign='left'>
  <Grid.Column> 
    
    <Image src={VKM_Logo} alt="logo" width="300" style={{ padding:0, margin:0}} />
    
  </Grid.Column>
  <Grid.Column only='wideScreen largeScreen computer'>
    <Segment color="violet" inverted>
    <Header as='h1'>
    <Header.Content><i>Krzysztof Meyer</i></Header.Content>
  </Header> Portfolio
    </Segment>
  </Grid.Column>
  <Grid.Column only='wideScreen largeScreen computer'>
    <Segment color="violet" inverted textAlign='right'>
      {MenuHeader}
    </Segment>
  </Grid.Column>
  <Grid.Column only='mobile tablet'>
    <Segment color="violet" inverted textAlign='right'>
{MenuHeaderMobile}
{this.state.menuVisible ? MenuHeader : null}
    </Segment>
  </Grid.Column>
</Grid.Row>
</Grid>


<LayoutActivator 
  active={this.state.activeItem}
/>

</>
    )
  }
}