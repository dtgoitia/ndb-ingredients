import React from 'react';

const headerData = [ 'Schedules', 'Ingredient Search' ]

class NavigationBar extends React.Component {
  render(){
    return (
      <ul className='navBar'>
        {headerData.map((navigationBarItem) => {          
          return (
            <li
              style={navigationBarItem === this.props.activeTab ? { color: 'var(--color-header-active)' } : null}
              onClick={this.props.changeActiveTab.bind(null, navigationBarItem)}
              key={navigationBarItem}
            >
              {navigationBarItem}
            </li>
          )
        })}
      </ul>
    )
  }
}

module.exports = NavigationBar;