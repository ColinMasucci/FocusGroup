import { Star, StarHalf, StarOff } from 'lucide-react'; 

const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            stars.push(<Star key={i} className="w-4 h-4 text-yellow-500 inline-block" fill="currentColor" />);
        } else if (i === fullStars && hasHalf) {
            stars.push(<StarHalf key={i} className="w-4 h-4 text-yellow-500 inline-block" />);
        } else {
            stars.push(<StarOff key={i} className="w-4 h-4 text-gray-300 inline-block" />);
        }
    }
    return stars;
};

const CompanySessionCard = ({ session }) => {
    return (
        <div className="bg-white rounded-2xl shadow-md p-6 mb-4 border border-gray-100 hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{session.title}</h3>
            <p className="text-gray-600 mb-4">{session.description}</p>

            <div className="flex items-center gap-2 mb-4">
                <span className="text-sm font-medium text-gray-800">Rating:</span>
                <div>{renderStars(session.rating ?? 0)}</div>
            </div>

            <div className="flex gap-2">
                <button className="px-4 py-2 text-sm bg-indigo-500 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                    View Details
                </button>
                <button className="px-4 py-2 text-sm bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors">
                    Edit
                </button>
            </div>
        </div>
    );
};

export default CompanySessionCard;
