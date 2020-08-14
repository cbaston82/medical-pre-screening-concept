import * as React from 'react'
import SubstanceUseFormData from './SubstanceUseFormData';

const substanceAbuse = (props) => (
  <div className="card">
    <div className="card-header" id="headingSubstaceUse">
      <h5 className="mb-0">
        <button className="btn btn-link" data-toggle="collapse" data-target="#collapseSubstaceUse" aria-expanded="true" aria-controls="collapseThree">
        Substance Use History 
        </button>
      </h5>
    </div>
    <div id="collapseSubstaceUse" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
      <div className="card-body">
        <SubstanceUseFormData data={props.data} />
      </div>
    </div>
  </div>
)

export default substanceAbuse 