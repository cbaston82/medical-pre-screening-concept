
import * as React from 'react'
import TbiHistoryFormData from './TbiHistoryFormData';

const tbiHistory = (props) => (
  <div className="card">
    <div className="card-header" id="headingTbiHistory">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTbiHistory" aria-expanded="false" aria-controls="collapseTbiHistory">
          Tbi History and Concussions
        </button>
      </h5>
    </div>
    <div id="collapseTbiHistory" className="collapse" aria-labelledby="headingTbiHistory" data-parent="#accordion">
      <div className="card-body">
        <TbiHistoryFormData data={props.data} />
      </div>
    </div>
  </div>
)

export default tbiHistory