import * as React from 'react'

import MotivationsFormData from './MotivationsFormData';
const Motivation = (props) => (
  <div className="card">
    <div className="card-header" id="headingMotivation">
      <h5 className="mb-0">
        <button className="btn btn-link" data-toggle="collapse" data-target="#collapseMotivation" aria-expanded="true" aria-controls="collapseMotivation">
          Client Motivation
        </button>
      </h5>
    </div>
    <div id="collapseMotivation" className="collapse hide" aria-labelledby="headingMotivation" data-parent="#accordion">
      <div className="card-body">
        <MotivationsFormData data={props.data} />
      </div>
    </div>
  </div>
)

export default Motivation