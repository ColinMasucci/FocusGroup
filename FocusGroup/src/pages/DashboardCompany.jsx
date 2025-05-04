import supabase from '../config/supabaseClient'
import CompanyHome from '../components/CompanyTabs/CompanyHome'
import CompanySessions from '../components/CompanyTabs/CompanySessions'
import CompanyReviews from '../components/CompanyTabs/CompanyReviews'
import CompanyPayments from '../components/CompanyTabs/CompanyPayments'
import CompanyBonus from '../components/CompanyTabs/CompanyBonus'
import CompanySettings from '../components/CompanyTabs/CompanySettings'
import CompanySidebar from '../components/CompanyTabs/CompanySidebar'
import { useState } from 'react';

const DashboardCompany = () => {

    //console.log(supabase)

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const [activeTab, setActiveTab] = useState("home");

    const renderContent = () => {
      switch (activeTab) {
        case 'home':
          return <CompanyHome/>;
        case 'sessions':
          return <CompanySessions/>;
        case 'reviews':
          return <CompanyReviews />;
        case 'payments':
          return <CompanyPayments />;
        case 'bonus':
          return <CompanyBonus />;
        case 'settings':
          return <CompanySettings/>;
        default:
          return <CompanyHome />;
      }
    };

    return (
    //   <div>
    //     {/* Hamburger Menu for Mobile */}
    //     <div className="sm:hidden fixed top-4 left-4 z-50">
    //         <GiHamburgerMenu
    //         size={30}
    //         onClick={toggleSidebar}
    //         className="cursor-pointer text-white"
    //         />
    //     </div>

    //     <div
    //     className={`fixed top-0 left-0 h-screen max-h-screen w-48 bg-blue-950 transition-transform transform ${
    //       isOpen ? 'translate-x-0' : '-translate-x-full'
    //     } sm:translate-x-0 sm:flex sm:flex-col sm:visible z-40`}
    //     >
    //       <div className="flex flex-col items-center h-full">
    //         {/* Close Icon for Mobile */}
    //         <div className="self-end p-4 sm:hidden">
    //             <MdClose
    //             size={30}
    //             onClick={toggleSidebar}
    //             className="cursor-pointer text-white"
    //             />
    //         </div>

    //         {/* Sidebar Links */}
    //         <div className="flex flex-col justify-center items-start gap-8 ml-10 mt-20 w-full">
    //             <div className="flex items-center gap-3 cursor-pointer" onClick={() => onSelect('Quiz')}>
    //                 <MdOutlineQuiz size={24} className="text-yellow-300" />
    //                 <h3 className="text-white text-lg hover:text-yellow-300">Quiz</h3>
    //             </div>
    //             <div className="flex items-center gap-3 cursor-pointer" onClick={() => onSelect('History')}>
    //                 <FaHistory size={24} className="text-yellow-300" />
    //                 <h3 className="text-white text-lg hover:text-yellow-300">History</h3>
    //             </div>
    //             <div className="flex items-center gap-3 cursor-pointer" onClick={() => onSelect('FlashcardPage')}>
    //                 <RxCardStack size={24} className="text-yellow-300" />
    //                 <h3 className="text-white text-lg hover:text-yellow-300">Flashcards</h3>
    //             </div>
    //             <div className="flex items-center gap-3 cursor-pointer" onClick={() => onSelect('MatchingGame')}>
    //                 <TbGoGame size={24} className="text-yellow-300" />
    //                 <h3 className="text-white text-lg hover:text-yellow-300">Matching Game</h3>
    //             </div>
    //         </div>
    //       </div>
    //     </div>
            
            
    <main className="flex flex-col sm:flex-row  bg-gray-500 min-h-screen">
      {/* Sidebar */}
      <div className="sm:sticky sm:top-0 sm:h-screen">
        <CompanySidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      

      {/* Main Content */}
      <div className="flex-grow p-4 bg-gradient-to-br from-blue-50 to-indigo-50 z-0 overflow-y-auto h-screen">
        {renderContent()}
      </div>
    </main>
    
      
    
  
    );
  }
  
  export default DashboardCompany;