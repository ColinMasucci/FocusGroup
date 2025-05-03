import { useState } from 'react';



const ReviewerHome = () => {

    const [metrics] = useState({
        totalSessions: 42,
        activeParticipants: 156,
        averageRating: 4.8,
        completionRate: "92%"
    });

    const [recentSessions] = useState([
        {
          id: 1,
          title: "Product Design Feedback",
          participants: 15,
          date: "2025-02-15",
          status: "Completed",
          rating: 4.9
        },
        {
          id: 2,
          title: "UI/UX Testing",
          participants: 20,
          date: "2025-02-16",
          status: "In Progress",
          rating: 4.7
        },
        {
          id: 3,
          title: "Brand Perception Study",
          participants: 25,
          date: "2025-02-17",
          status: "Scheduled",
          rating: null
        }
    ]);

    return(
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="text-gray-500">Total Sessions</div>
          <div className="text-2xl font-bold text-gray-800">{metrics.totalSessions}</div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="text-gray-500">Active Participants</div>
          <div className="text-2xl font-bold text-gray-800">{metrics.activeParticipants}</div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="text-gray-500">Average Rating</div>
          <div className="text-2xl font-bold text-gray-800">{metrics.averageRating}</div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="text-gray-500">Completion Rate</div>
          <div className="text-2xl font-bold text-gray-800">{metrics.completionRate}</div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Sessions</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-500 border-b">
                <th className="pb-3">Title</th>
                <th className="pb-3">Participants</th>
                <th className="pb-3">Date</th>
                <th className="pb-3">Status</th>
                <th className="pb-3">Rating</th>
              </tr>
            </thead>
            <tbody>
              {recentSessions.map((session) => (
                <tr key={session.id} className="border-b last:border-0">
                  <td className="py-4">{session.title}</td>
                  <td className="py-4">{session.participants}</td>
                  <td className="py-4">{session.date}</td>
                  <td className="py-4">
                    <span className={`px-2 py-1 rounded-full text-sm ${
                      session.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      session.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {session.status}
                    </span>
                  </td>
                  <td className="py-4">{session.rating || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    );
};

export default ReviewerHome