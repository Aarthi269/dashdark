import { FaEllipsisV } from 'react-icons/fa';

function UserCard({ title, value, color, icon }) {
  const colorMap = {
    purple: 'bg-purple-600',
    yellow: 'bg-yellow-500',
    green: 'bg-green-600',
    blue: 'bg-blue-600',
  };

  return (
    <div className={`p-4 mr-8 ml-4 h-20 w-70 rounded-lg shadow-md bg-[#14133c] relative`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className={`text-3xl p-2 rounded-full ${colorMap[color]} text-white`}>
            {icon} 
          </div>
          <div>
            <h3 className="text-md font-medium text-gray-400">{title}</h3>
            <p className="text-md font-bold mt-1">{value}</p>
          </div>
        </div>
        <FaEllipsisV className="text-gray-400 hover:text-white cursor-pointer" />
      </div>
    </div>
  );
}

export default UserCard;
