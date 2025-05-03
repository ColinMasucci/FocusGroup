import RegistrationSelection from '../components/RegistrationTabs/RegistrationSelection'
import RegistrationCompany from '../components/RegistrationTabs/RegistrationCompany'
import RegistrationReviewer from '../components/RegistrationTabs/RegistrationReviewer'
import { useState } from 'react';




const Onboarding = () => {

    const [role, setRole] = useState("")

    const renderContent = () => {
        switch (role) {
          case 'Company':
            return <RegistrationCompany/>;
          case 'Reviewer':
            return <RegistrationReviewer/>;
          case '':
            return <RegistrationSelection setRole={setRole}/>;
          default:
            return <RegistrationCompany/>;
        }
      };

    return(
        <div>
            {renderContent()}
        </div>
    );

}
export default Onboarding;