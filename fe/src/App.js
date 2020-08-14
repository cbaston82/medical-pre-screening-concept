import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionTypes from './store/actions'

// UI Imports
import { BarLoader } from 'react-spinners'
import ScrollUpButton from "react-scroll-up-button"

// Components Imports
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Accordion from './components/accordion/Accordion'
import Loader from './Loader';

class App extends Component {
  state = {
    loading: true
  }

  async componentWillMount () {
    const data = await this.getPersonData()
    this.props.addPersonData(data)
    setTimeout(() => {
      this.setState({loading: false})
    }, 1000)
  }

  async getPersonData () {
    try {
      let response = await fetch('http://127.0.0.1:3001/db')
      let data = await response.json()
      return data
    } catch (e) {
      console.log(e)
    }
  }

  render () {
    if (this.state.loading) {
      return (
          <Loader id="loader">
            <BarLoader
              sizeUnit={"px"}
              height={12}
              size={150}
              width={200}
              color={'#005c42'}
              loading={this.state.loading}
            />
          </Loader>
      )
    }
    return (
        <div className='App'>
          <ScrollUpButton
            style={{
              zIndex: 1,
              backgroundColor: '#F78F1E',
              border: '1px solid #005C42'
            }}/>
          <Navbar />
          <Accordion personData={this.props.personData} />
          <Footer data={this.props.appData} />
        </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    appData: state.app.appData,
    personData: state.person.personData
  }
}

const matchDispachToProps = dispatch => {
  return {
    addPersonData: (data) => dispatch({type: actionTypes.GET_PERSON_DATA, payload: data}),
  }
}

export default connect(mapStateToProps, matchDispachToProps)(App)
