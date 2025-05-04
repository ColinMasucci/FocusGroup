import ReviewerHome from '../components/ReviewerTabs/ReviewerHome'
import ReviewerMySessions from '../components/ReviewerTabs/ReviewerMySessions'
import ReviewerHelp from '../components/ReviewerTabs/ReviewerHelp'
import ReviewerAnalytics from '../components/ReviewerTabs/ReviewerAnalytics'
import ReviewerSettings from '../components/ReviewerTabs/ReviewerSettings'
import ReviewerSidebar from '../components/ReviewerTabs/ReviewerSidebar'
import { useState } from 'react';

const DashboardReviewer = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const [activeTab, setActiveTab] = useState("home");

    const renderContent = () => {
      switch (activeTab) {
        case 'home':
          return <ReviewerHome/>;
        case 'my_sessions':
          return <ReviewerMySessions/>;
        case 'analytics':
          return <ReviewerAnalytics />;
        case 'settings':
          return <ReviewerSettings />;
        case 'help':
          return <ReviewerHelp />;
        default:
          return <ReviewerHome />;
      }
    };

    return (
    <main className="flex flex-col sm:flex-row  bg-gray-500 min-h-screen">
      {/* Sidebar */}
      <div className="sm:sticky sm:top-0 sm:h-screen">
        <ReviewerSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* Main Content */}
      <div className="flex-grow p-4 bg-gradient-to-br from-blue-50 to-indigo-50 z-0 overflow-y-auto h-screen">
        {renderContent()}
      </div>
    </main>
    );
  }
  
  export default DashboardReviewer;