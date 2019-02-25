import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import ListCommunities from './components/LeftBar/ListCommunities'

export class Home extends Component {
  constructor (props) {
    super(props) 
    this.state = {
      communities: ['react', 'gunners', 'game of thrones']
    }
  }

  render() {
    return (
      <div>
        <ListCommunities communities={this.state.communities} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
