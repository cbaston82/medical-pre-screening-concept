import * as React from 'react'
import GeneralInfoFormData from './GeneralInfoFormData';

const GeneralInfo = (props) => (
  <div className="card">
    <div className="card-header" id="headingGenralInfo">
      <h5 className="mb-0">
        <button className="btn btn-link" data-toggle="collapse" data-target="#collapseGeneralInfo" aria-expanded="true" aria-controls="collapseGeneralInfo">
          General Info
        </button>
      </h5>
    </div>
    <div id="collapseGeneralInfo" className="collapse show" aria-labelledby="headingGeneralInfo" data-parent="#accordion">
      <div className="card-body">
        <GeneralInfoFormData data={props.data} />
      </div>
    </div>
  </div>
)

export default GeneralInfo