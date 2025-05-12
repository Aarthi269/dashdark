import {
  FaTachometerAlt, FaUser, FaChartBar, FaCog,
  FaBox, FaTasks, FaStar, FaDollarSign, FaPlug,
  FaFileAlt, FaChevronDown, FaAddressBook, FaBuilding,
  FaProjectDiagram, FaThLarge, FaTable, FaBitcoin, FaEllipsisH
} from 'react-icons/fa';
import { useState } from 'react';

// Sidebar configuration array
const sidebarConfig = [
  {
    heading: 'Dashboard',
    icon: <FaTachometerAlt />,
    subItems: [
      { label: 'All Pages', icon: <FaChartBar /> },
      { label: 'Reports', icon: <FaChartBar /> },
      { label: 'Products', icon: <FaBox /> },
      { label: 'Task', icon: <FaTasks /> },
    ],
  },
  {
    heading: 'Features',
    icon: <FaStar />,
    subItems: [
      { label: 'All Pages', icon: <FaFileAlt /> },
      { label: 'Contacts', icon: <FaAddressBook /> },
      { label: 'Companies', icon: <FaBuilding /> },
      { label: 'Projects', icon: <FaProjectDiagram /> },
      { label: 'Tasks', icon: <FaTasks /> },
      { label: 'Board', icon: <FaThLarge /> },
      { label: 'Table', icon: <FaTable /> },
      { label: 'Crypto', icon: <FaBitcoin /> },
      { label: 'And many ore pages!', icon: <FaEllipsisH /> },
    ],
  },
  {
    heading: 'Users',
    icon: <FaUser />,
    subItems: [
      { label: 'Manage Users' },
      { label: 'Roles & Permissions' },
    ],
  },
  {
    heading: 'Pricing',
    icon: <FaDollarSign />,
    subItems: [
      { label: 'Plans' },
      { label: 'Billing Info' },
    ],
  },
  {
    heading: 'Integrations',
    icon: <FaPlug />,
    subItems: [
      { label: 'Slack' },
      { label: 'Zapier' },
    ],
  },
  {
    heading: 'Settings',
    icon: <FaCog />,
    subItems: [
      { label: 'Settings V1', icon: <FaCog /> },
      { label: 'Settings V2', icon: <FaCog /> },
      { label: 'Settings V3', icon: <FaCog /> },
    ],
  },
  {
    heading: 'Template pages',
    icon: <FaFileAlt />,
    subItems: [
      { label: 'Login' },
      { label: 'Register' },
    ],
  },
  {
    heading: 'Profile',
    icon: <img src="/path/to/profile-pic.jpg" alt="Profile" className="w-6 h-6 rounded-full" />,
    subItems: [
      { label: 'My Account' },
      { label: 'Logout' },
    ],
  },
];

export default function Sidebar({ onSelectView }) {
  const [openMenus, setOpenMenus] = useState({});
  const [activeSubMenu, setActiveSubMenu] = useState('');

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const handleSubMenuClick = (label) => {
    setActiveSubMenu(label);
    onSelectView(label); // For future routing integration
  };

  return (
    <div className="w-68 bg-[#09082d] h-full p-4 flex flex-col text-white overflow-y-auto">
      <h1 className="text-xl font-bold mb-6">🔷 Dashdark X</h1>
      <input
        type="text"
        placeholder="Search for..."
        className="mb-4 p-2 rounded bg-[#38387e] text-white placeholder-gray-400"
      />
      <nav className="flex-1 space-y-4">
        {sidebarConfig.map((section) => (
          <div key={section.heading}>
            <div
              className="flex items-center gap-2 mb-2 cursor-pointer hover:text-purple-400"
              onClick={() => toggleMenu(section.heading)}
            >
              {section.icon}
              <span>{section.heading}</span>
              <FaChevronDown
                className={`ml-auto transform transition-transform duration-200 ${
                  openMenus[section.heading] ? 'rotate-180' : ''
                }`}
              />
            </div>
            {openMenus[section.heading] && (
              <div className="ml-6 space-y-2">
                {section.subItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleSubMenuClick(item.label)}
                    className={`w-full flex items-center gap-2 p-1 rounded text-left ${
                      activeSubMenu === item.label
                        ? 'text-purple-400'
                        : 'hover:text-purple-400'
                    }`}
                  >
                    {item.icon && item.icon}
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
      <div className="mt-auto">
        <button className="w-full p-2 bg-purple-600 text-white rounded hover:bg-purple-700">
          Get template →
        </button>
      </div>
    </div>
  );
}
