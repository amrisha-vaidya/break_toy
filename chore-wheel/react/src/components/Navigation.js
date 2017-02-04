import React, { Component } from 'react';

class Navigation extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (<h3> navigation </h3>)
    // return(
    //   <div class="top-left-bar" id="main-menu">
    //     <div class="top-bar-left">
    //       <ul class="dropdown menu" data-dropdown-menu>
    //         <strong><a href="#">ChoreStore</a></strong>
    //       </ul>
    //     </div>
    //   </div>
    //   <div class="top-bar align">
    //     <ul class="menu" data-responsive-menu="drilldown medium-dropdown">
    //       <li>Logged in as <strong><a href="#"> Name </strong></li>
    //       <li><a href="#">Log Out </a></li>
    //     </ul>
    //   </div>
    // )
  }
}

export default Navigation;
