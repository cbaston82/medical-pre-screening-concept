import * as React from 'react'
import EatingDisordersFormData from './EatingDisordersFormData';

const EatingDisorder = (props) => (
  <div className="card">
    <div className="card-header" id="headingEatingDisorder">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseEatingDisorder" aria-expanded="false" aria-controls="collapseEatingDisorder">
          Eating Disorder
        </button>
      </h5>
    </div>
    <div id="collapseEatingDisorder" className="collapse" aria-labelledby="headingEatingDisorder" data-parent="#accordion">
      <div className="card-body">
        <EatingDisordersFormData data={props.data} />
      </div>
    </div>
  </div>
)

export default EatingDisorder