import React, { Component } from 'react'
import { Grid, Segment, Icon, Menu, Image, Header } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import VKM_Logo from '../img/VKM_logo_v5.png';

export default class HeaderSui extends Component {
  state = { activeItem: '', menuVisible: false }
  
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
        to: ''
      },
    ]
    
  const MenuItems = MenuList.map((item) => {
    return (
      <Link 
       to={item.nameActive === 'GitHub' ? {pathname: 'https://github.com/VKMStudioX'}  : item.to }
       target={item.nameActive === 'GitHub' ? "_blank" : "_self"}
       key={item.nameActive}
      >
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

  const menuColor='violet'


const MenuHeader = (
  <Menu icon='labeled' color={menuColor} inverted borderless floated='right' size='small'> 
{MenuItems}
      </Menu>
  )

  const MenuHeaderMobile = (
    <Menu icon='labeled' color={menuColor} inverted borderless floated='right' size='small'>
         <Menu.Item name='Menu' open={this.state.menuVisible} onClick={() => this.setState({ menuVisible: !this.state.menuVisible })}>
          <Icon name='list ul' /></Menu.Item>
        </Menu>
    )


    return (
      <>
<Grid columns='equal' inverted padded={false} className='sticky'>
<Grid.Row className='headerMenuBg' textAlign='left' color={menuColor}>
  <Grid.Column> 
    <Link to='/'><Image src={VKM_Logo} alt="logo" width="275" style={{ padding:0, margin:0}} /></Link>
  </Grid.Column>
  <Grid.Column only='wideScreen largeScreen computer'>
    <Segment color={menuColor} inverted padded='vertical'>
    <Header as='h1'>
    <Header.Content className="header-km"><i>Krzysztof Meyer<br/> Automation and robotics engineer &amp; Web developer</i></Header.Content>
  </Header> 
    </Segment>
  </Grid.Column>
  <Grid.Column only='wideScreen largeScreen computer'>
    <Segment color={menuColor} inverted textAlign='right'>
      {MenuHeader}
    </Segment>
  </Grid.Column>
  <Grid.Column only='mobile tablet'>
    <Segment color={menuColor} inverted textAlign='right'>
{MenuHeaderMobile}
{this.state.menuVisible ? MenuHeader : null}
    </Segment>
  </Grid.Column>
</Grid.Row>
</Grid>
</>
    )
  }
}