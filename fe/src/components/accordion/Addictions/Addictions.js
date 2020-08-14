import * as React from 'react'
import AddictionsData from './AddictionsFormData'

const Addictions = (props) => (
  <div className="card">
    <div className="card-header" id="headingProcessAddiction">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseProcessAddiction" aria-expanded="false" aria-controls="collapseProcessAddiction">
          Process Addiction
        </button>
      </h5>
    </div>
    <div id="collapseProcessAddiction" className="collapse" aria-labelledby="headingProcessAddiction" data-parent="#accordion">
      <div className="card-body">
        <AddictionsData data={props.data} />
      </div>
    </div>
  </div>
)
export default Addictions