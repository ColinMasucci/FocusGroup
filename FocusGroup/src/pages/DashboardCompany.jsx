import supabase from '../config/supabaseClient'

const DashboardCompany = () => {

    console.log(supabase)

    return (
      <div>
        <div className="bg-gray-100 h-screen w-screen p-8 flex flex-col items-center justify-center">
          <h1>This is the Company Dashboard!</h1>
        </div>
      </div>
    );
  }
  
  export default DashboardCompany;