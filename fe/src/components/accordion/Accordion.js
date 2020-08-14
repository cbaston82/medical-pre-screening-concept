import * as React from 'react'

// components
import GeneralInfo from './GeneralInfo/GeneralInfo'
import Motivations from './Motivations/Motivations'
import Dependencies from './Dependencies/Dependencies'
import Greeting from '../Greeting/Greeting'
import SubstanceUse from './SubstanceUse/SubstanceUse'
import Addictions from './Addictions/Addictions'
import EatingDisorders from './EatingDisorders/EatingDisorders'
import Suicide from './Suicide/Suicide'
import PsychTreatments from './PsychTreatments/PsychTreatments';
import Medications from './Medications/Medications';
import CurrentMedicalConditions from './CurrentMedicalConditions/CurrentMedicalConditions';
import OtherMedicalConditions from './OtherMedicalConditions/OtherMedicalConditions';
import Allergies from './Allergies/Allergies';
import PreviousHospitalizations from './PreviousHospitalizations/PreviousHospitalizations';
import TbiHistory from './TbiHistory/TbiHistory';
import SurgicalHistory from './SurgicalHistory/SurgicalHistory';
import SpecialNeeds from './SpecialNeeds/SpecialNeeds';

class Accordion extends React.Component {
  render () {
    const personData = this.props.personData
    if (!personData) {
      return <div />
    }
    return (
      <div className="container" id="accordion-container">
      
        <Greeting data={this.props.personData.generalInfo}/>

        <div id="accordion">

          <GeneralInfo  data={this.props.personData.generalInfo}/>
          <Motivations data={this.props.personData.motivations}/>
          <Dependencies data={this.props.personData.dependencies}/>
          <SubstanceUse data={this.props.personData.substanceUse} />
          <Addictions data={this.props.personData.addictions} />
          <EatingDisorders data={this.props.personData.eatingDisorders} />
          <Suicide data={this.props.personData.suicide} />
          <PsychTreatments data={this.props.personData.psychTreatments} />
          <Medications data={this.props.personData.medications} />
          <CurrentMedicalConditions data={this.props.personData.currentMedicalConditions} />
          <OtherMedicalConditions data={this.props.personData.otherMedicalConditions} />
          <Allergies data={this.props.personData.allergies} />
          <PreviousHospitalizations data={this.props.personData.previousHospitalizations} />
          <TbiHistory data={this.props.personData.tbiHistory} />
          <SurgicalHistory data={this.props.personData.surgicalHistory} />
          <SpecialNeeds data={this.props.personData.specialNeeds} />

          </div>
        </div>
    )
  }
}

export default Accordion