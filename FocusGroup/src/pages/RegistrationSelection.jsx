import RegistrationCard from '../components/RegistrationCard.tsx';
import companyImage from '../assets/company_image.jpg';
import reviewerImage from '../assets/happy_teens_group_pic.jpg';


const RegistrationSelection = () => {

  return (
    <div>
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 h-screen w-screen p-8 flex flex-col items-center justify-center">
        <h1>Choose your account type</h1>
        <div className='flex flex-row'>
          <RegistrationCard
            logo={companyImage}
            title="Company"
            description="A Company Account will be able to post Focus Group opportunities for young Reviewers to give feedback."
            buttonLabel="Pick"
            link = "/registration/company"
          />
          <RegistrationCard
            logo={reviewerImage}
            title="Reviewer"
            description="A Reviewer Account will be able to attend Focus Group opportunities to give feedback on products they care about."
            buttonLabel="Pick"
            link = "/registration/reviewer"
          />
        </div>
      </div>
    </div>
  );
}

export default RegistrationSelection;