import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Home extends React.Component {
  render() {
    console.log("home: ",this.props.state)
    var country_names = []
    var a = this.props.state
    a.country.map(function(c,i){
      console.log(c,i)
      country_names.push(<p>
        <input type="checkbox" name="vehicle" value="Bike"/>
        {c}</p>)
    })
      return (
        <div>
          <h1>Home</h1>
          <div style={{ float:"left", "margin-left":"30%" }} >Choose countries: {country_names}
          <input type="submit" name="select"/></div>
        </div>
      )
  }
}



const mapStateToProps = state => ({
  state: state
})

export default connect(
  mapStateToProps,
  null
)(Home)
