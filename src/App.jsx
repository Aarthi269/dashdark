import { useState } from 'react';
import { FaUsers, FaUserPlus, FaHeart, FaUserCircle } from 'react-icons/fa';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import UserCard from './components/UserCard';
import UserTable from './components/UserTable';
import SettingsForm from './components/SettingsForm'; // <-- new import


function App() {
  const [selectedView, setSelectedView] = useState('');

  return (
    <div className="flex h-screen bg-[#0f172a] text-white">
      <Sidebar onSelectView={setSelectedView} />
      <div className="flex-1 p-4 overflow-y-auto">
        {selectedView === 'Reports' && (
          <>
            <Topbar />
            <div className="grid grid-cols-4 gap-4 my-4">
              <UserCard title="Total Users" value="250" color="purple" icon={<FaUsers />} />
              <UserCard title="New Users" value="15" color="yellow" icon={<FaUserPlus />} />
              <UserCard title="Top Users" value="200" color="green" icon={<FaHeart />} />
              <UserCard title="Other Users" value="35" color="blue" icon={<FaUserCircle />} />
            </div>
            <UserTable />
          </>
        )}

        {selectedView === 'Settings V2' && (
          <>
            <Topbar />
            <SettingsForm />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
