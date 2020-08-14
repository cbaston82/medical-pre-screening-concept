import * as React from 'react'

class Greeting extends React.Component{
  render () {
    const data = this.props.data
    if (!data) {
      return <div />
    }
    return(
      <div>
        <h3 className="display-5 text-muted">Screening for <strong>{data.name}</strong></h3>
        {/* <p className="text-danger">The following information blah blah blah ...</p> */}
        <hr className="my-4" />
      </div>
    )
  }
}

export default Greeting