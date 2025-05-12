import { useState } from 'react';
import { FaUser, FaUsers, FaCreditCard, FaBell, FaMobileAlt, FaEnvelope, FaImage, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';

export default function SettingsForm() {
  const [formData, setFormData] = useState({
  paymentMethod: 'Visa',
  cards: [
    { type: 'Visa', last4: '8292', expires: '12/26' },
    { type: 'MasterCard', last4: '9802', expires: '12/26' },
    { type: 'American Express', last4: '8092', expires: '12/26' }
  ],
  showModal: false,
  newCardType: '',
  newCardLast4: '',
  newCardExpires: '',
  rank: '',
  name: '',
  email: '',
  Location: '',
  Website: '',
  phone: '',
  position: '',
  website: '',
  bio: '',
  photo: '',
});


  const [activeTab, setActiveTab] = useState('Personal Information'); // Track active tab
  const [showAddUserModal, setShowAddUserModal] = useState(false); // State for Add User modal

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const tabs = [
    { icon: <FaUser />, label: 'Personal Information' },
    { icon: <FaUsers />, label: 'Team' },
    { icon: <FaCreditCard />, label: 'Billing' },
    { icon: <FaBell />, label: 'Notifications' },
  ];

  return (
   <div className="flex min-h-screen bg-[#0f0e37] text-white">
  <aside className="w-74 border-r border-gray-700 p-6">
    <h2 className="text-xl font-semibold mb-8">Credentials</h2>
    <nav className="space-y-4">
      {tabs.map(({ icon, label }) => (
        <div
          key={label}
          className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer transition-colors duration-200 
            ${activeTab === label
              ? 'bg-blue-500 text-white'
              : 'bg-[#0f0e37] hover:bg-blue-900 hover:text-white'
            }`}
          onClick={() => setActiveTab(label)}
        >
          {icon}
          <span>{label}</span>
        </div>
      ))}
    </nav>
  </aside>


      <main className="flex-1 p-6 space-y-6 ml-15 mr-10">
      

        <div className="space-y-10">
          {/* Conditional rendering of the form section based on the active tab */}
          {activeTab === 'Personal Information' && (
            <section>
              <h2 className="text-lg font-semibold mb-1">Personal information</h2>
              <p className="text-sm text-gray-400 mb-4">Lorem ipsum dolor sit amet consectetur adipiscing.</p>
              <div className="grid gap-6 bg-[#1a194c] p-6 rounded-lg">
                <div className="flex items-center">
                  <label className="mb-1 flex items-center gap-2">
                    <FaUser /> Full name
                  </label>
                  <input
                    name="name"
                    className="w-180 px-4 py-2 bg-[#1a194c] text-white rounded border border-gray-600 ml-auto mr-6"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <hr className="border-t border-gray-600 mt-4" />
                
                <div className="flex items-center">
                  <label className="mb-1 flex items-center gap-2">
                    <FaEnvelope /> Email address
                  </label>
                  <input
                    name="email"
                    type="email"
                    className="w-180 px-4 py-2 bg-[#1a194c] text-white rounded border border-gray-600 ml-auto mr-6"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <hr className="border-t border-gray-600 mb-4" />
                <div className="flex items-center">
                  <label className="mb-1 flex items-center gap-2">
                    <FaImage /> Photo
                  </label>
                  <div className="flex items-center">
                    <div className="flex flex-col items-center">
                      
                    </div>
                    <div className="flex flex-col items-center ml-78">
                      <label
                        htmlFor="photo-upload"
                        className="cursor-pointer flex flex-col items-center text-blue-400 hover:underline"
                      >
                        <FaImage className="text-2xl mb-1" />
                        Click to upload
                      </label>
                      <input
                        id="photo-upload"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleChange({ target: { name: 'photo', value: e.target.files[0] } })}
                      />
                      <p className="text-xs text-gray-400 mt-1">SVG, PNG, JPG or GIF (max. 800 x 400px)</p>
                    </div>
                  </div>
                </div>
                
                <hr className="border-t border-gray-600 mt-4" />
                <div className="flex items-center">
                  <label className="block mb-1">Short description</label>
                  <textarea
                    name="bio"
                    className="w-180 px-4 py-2 bg-[#1a194c] text-white rounded border border-gray-600 ml-auto mr-6"
                    rows={3}
                    value={formData.bio}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
               <h2 className="text-lg font-semibold mb-1">Basic information</h2>
              <p className="text-sm text-gray-400 mb-4">Lorem ipsum dolor sit amet consectetur adipiscing.</p>
              <div className="grid gap-6 bg-[#1a194c] p-6 rounded-lg">
                <div className="flex items-center">
                  <label className="block mb-1 flex items-center gap-2">
                    <FaMobileAlt /> Phone
                  </label>
                  <input
                    name="name"
                    className="w-180 px-4 py-2 bg-[#1a194c] text-white rounded border border-gray-600 ml-auto mr-6"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <hr className="border-t border-gray-600 mt-4" />

                <div className="flex items-center">
                  <label className="block mb-1 flex items-center gap-2">
                    <FaUser /> Position
                  </label>
                  <input
                    name="email"
                    type="email"
                    className="w-180 px-4 py-2 bg-[#1a194c] text-white rounded border border-gray-600 ml-auto mr-6"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <hr className="border-t border-gray-600 mt-4" />
                <div className="flex items-center">
                  <label className="block mb-1 flex items-center gap-2">
                    <FaMapMarkerAlt /> Location
                  </label>
                  <input
                    name="Location"
                    type="Location"
                    className="w-180 px-4 py-2 bg-[#1a194c] text-white rounded border border-gray-600 ml-auto mr-6"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <hr className="border-t border-gray-600 mt-4" />
                <div className="flex items-center">
                  <label className="block mb-1 flex items-center gap-2">
                    <FaGlobe /> Website
                  </label>
                  <input
                    name="Website"
                    type="Website"
                    className="w-180 px-4 py-2 bg-[#1a194c] text-white rounded border border-gray-600 ml-auto mr-6"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </section>
            
          )}

          {activeTab === 'Team' && (
            <section>
              <h2 className="text-lg font-semibold mb-1">Team Details</h2>           
              <p className="text-sm text-gray-400 mb-4">Lorem ipsum dolor sit amet consectetur adipiscing.</p>
              <div className="grid gap-6 bg-[#1a194c] p-6 rounded-lg">
                <div className="flex items-center">
                  <label className="mb-1 flex items-center gap-2">
                    <FaUsers /> Team Name
                  </label>
                  <input
                    name="name"
                    className="w-180 px-4 py-2 bg-[#1a194c] text-white rounded border border-gray-600 ml-auto mr-6"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <hr className="border-t border-gray-600 mt-4" />
                <div className="flex items-center">
                  <label className="mb-1 flex items-center gap-2">
                    <FaUser /> Rank
                  </label>
                  <select
                    name="rank"
                    className="w-180 px-4 py-2 bg-[#1a194c] text-white rounded border border-gray-600 ml-auto mr-6"
                    value={formData.rank}
                    onChange={handleChange}
                  >
                    <option value="CEO and Founder">CEO and Founder</option>
                    <option value="Manager">Manager</option>
                    <option value="Senior Developer">Senior Developer</option>
                    <option value="Junior Developer">Junior Developer</option>
                    <option value="Trainee">Trainee</option>
                  </select>
                </div>
                <hr className="border-t border-gray-600 mt-4" />
                <div className="flex items-center">
                  <label className="mb-1 flex items-center gap-2">
                    <FaMapMarkerAlt /> Office
                  </label>
                  <input
                    name="Location"
                    type="Location"
                    className="w-180 px-4 py-2 bg-[#1a194c] text-white rounded border border-gray-600 ml-auto mr-6"
                    value={formData.Location}
                    onChange={handleChange}
                  />
                </div>
                <hr className="border-t border-gray-600 mt-4" />
                <div className="flex items-center">
                  <label className="mb-1 flex items-center gap-2">
                    <FaEnvelope /> Mail
                  </label>
                  <input
                    name="Website"
                    type="Website"
                    className="w-180 px-4 py-2 bg-[#1a194c] text-white rounded border border-gray-600 ml-auto mr-6"
                    value={formData.Website}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </section>
          )}

          {activeTab === 'Billing' && (
  <section>
    <h2 className="text-lg font-semibold mb-1 text-white">Billing Information</h2>
    <p className="text-sm text-gray-400 mb-4">
      Lorem ipsum dolor sit amet consectetur adipiscing.
    </p>

    <div className="grid gap-6 bg-[#1a194c] p-6 rounded-lg">
      {/* Payment Methods Styled as Cards */}
      <div>
        <label className="block text-white mb-2">Payment Method</label>
        <div className="space-y-2">
          {formData.cards?.map((card, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-4 rounded-lg cursor-pointer border ${
                formData.paymentMethod === card.type
                  ? 'bg-[#2a28a4] border-blue-400'
                  : 'bg-[#1a194c] border-gray-600'
              }`}
              onClick={() =>
                handleChange({
                  target: { name: 'paymentMethod', value: card.type },
                })
              }
            >
              <div className="flex items-center space-x-4 text-white">
                <div className="text-xl">💳</div>
                <div>
                  <div className="font-semibold">
                    {card.type} •••• {card.last4}
                  </div>
                  <div className="text-xs text-gray-300">
                    Expires on {card.expires}
                  </div>
                </div>
              </div>
              <button
                className="text-gray-400 hover:text-red-400 text-sm"
                onClick={(e) => {
                  e.stopPropagation();
                  const updatedCards = formData.cards.filter((_, i) => i !== index);
                  handleChange({
                    target: { name: 'cards', value: updatedCards },
                  });
                  if (formData.paymentMethod === card.type) {
                    handleChange({
                      target: { name: 'paymentMethod', value: '' },
                    });
                  }
                }}
              >
                ✕
              </button>
            </div>
          ))}
          <button
            className="text-sm text-blue-400 hover:underline"
            onClick={() =>
              handleChange({ target: { name: 'showModal', value: true } })
            }
          >
            + Add a new payment method
          </button>
        </div>
      </div>
    
      {/* Modal */}
      {formData.showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-[#1a194c] p-6 rounded-lg w-[300px] space-y-4 border border-gray-600">
            <h3 className="text-white text-lg font-semibold">Add New Card</h3>
            <input
              type="text"
              placeholder="Card Type (Visa, etc)"
              className="w-full p-2 rounded bg-[#252360] text-white border border-gray-500"
              value={formData.newCardType} // Ensure it's controlled
              onChange={(e) =>
                handleChange({ target: { name: 'newCardType', value: e.target.value } })
              }
            />
            <input
              type="text"
              placeholder="Last 4 digits"
              className="w-full p-2 rounded bg-[#252360] text-white border border-gray-500"
              value={formData.newCardLast4} // Ensure it's controlled
              onChange={(e) =>
                handleChange({ target: { name: 'newCardLast4', value: e.target.value } })
              }
            />
            <input
              type="text"
              placeholder="Expiry (MM/YY)"
              className="w-full p-2 rounded bg-[#252360] text-white border border-gray-500"
              value={formData.newCardExpires} // Ensure it's controlled
              onChange={(e) =>
                handleChange({ target: { name: 'newCardExpires', value: e.target.value } })
              }
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={() =>
                  handleChange({ target: { name: 'showModal', value: false } })
                }
                className="text-sm text-gray-300 hover:underline"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  const newCard = {
                    type: formData.newCardType,
                    last4: formData.newCardLast4,
                    expires: formData.newCardExpires,
                  };

                  // Ensure the new card is added to the list of cards
                  const updatedCards = [...(formData.cards || []), newCard];

                  setFormData({
                    ...formData,
                    cards: updatedCards,
                    paymentMethod: newCard.type,
                    showModal: false,
                    newCardType: '',
                    newCardLast4: '',
                    newCardExpires: '',
                  });
                }}
                className="text-sm text-blue-400 hover:underline"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Billing Fields */}
      <div className="flex items-center">
        <label className="mb-1 flex items-center gap-2">
          <FaUser /> Full Name
        </label>
        <input
          name="name"
                    className="w-180 px-4 py-2 bg-[#1a194c] text-white rounded border border-gray-600 ml-auto mr-6"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <hr className="border-t border-gray-600 mt-4" />
      <div className="flex items-center">
        <label className="mb-1 flex items-center gap-2">
          <FaMapMarkerAlt /> Address
        </label>
        <input
          name="address"
          type="text"
                    className="w-180 px-4 py-2 bg-[#1a194c] text-white rounded border border-gray-600 ml-auto mr-6"
          value={formData.address}
          onChange={handleChange}
        />
      </div>
      <hr className="border-t border-gray-600 mt-4" />
      <div className="flex items-center">
        <label className="mb-1 flex items-center gap-2">
          <FaMapMarkerAlt /> State
        </label>
        <input
          name="state"
          type="text"
                    className="w-180 px-4 py-2 bg-[#1a194c] text-white rounded border border-gray-600 ml-auto mr-6"
          value={formData.state}
          onChange={handleChange}
        />
      </div>
      <hr className="border-t border-gray-600 mt-4" />
      <div className="flex items-center">
        <label className="mb-1 flex items-center gap-2">
          <FaMapMarkerAlt /> Zip-Code
        </label>
        <input
          name="zipCode"
          type="text"
                    className="w-180 px-4 py-2 bg-[#1a194c] text-white rounded border border-gray-600 ml-auto mr-6"
          value={formData.zipCode}
          onChange={handleChange}
        />
      </div>
    </div>
  </section>
)}

          {activeTab === 'Notifications' && (
  <section>
    <h2 className="text-lg font-semibold mb-1">Notification Settings</h2>
    <p className="text-sm text-gray-400 mb-4">Manage your notification preferences below.</p>

    {/* General Notifications */}
    <div className="bg-[#1a194c] p-6 rounded-lg mb-6">
      <h3 className="text-white font-semibold text-lg">General notifications</h3>
      <p className="text-sm text-gray-400 mb-4">Choose how you want to be notified for general activities.</p>
      {['I\'m mentioned in a message', 'Someone replies to any message', 'I\'m assigned a task', 'A task is overdue'].map((item, index) => (
        <div key={index} className="flex items-center justify-between mb-4">
          <span className="text-white">{item}</span>
          <div className="flex items-center space-x-4">
            <label className="flex items-center text-white space-x-1">
              <input
                type="checkbox"
                className="hidden"
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  const button = e.target.nextSibling;
                  if (isChecked) {
                    button.classList.add('bg-purple-600');
                    button.classList.remove('bg-[#38387e]');
                  } else {
                    button.classList.add('bg-[#38387e]');
                    button.classList.remove('bg-purple-600');
                  }
                }}
              />
              <span className="inline-flex items-center justify-center w-20 py-1 text-center rounded-lg cursor-pointer bg-[#38387e] text-white">
                <FaMobileAlt className="mr-1" /> In-app
              </span>
            </label>
            <label className="flex items-center text-white space-x-1">
              <input
                type="checkbox"
                className="hidden"
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  const button = e.target.nextSibling;
                  if (isChecked) {
                    button.classList.add('bg-purple-600');
                    button.classList.remove('bg-[#38387e]');
                  } else {
                    button.classList.add('bg-[#38387e]');
                    button.classList.remove('bg-purple-600');
                  }
                }}
              />
              <span className="inline-flex items-center justify-center w-20 py-1 text-center rounded-lg cursor-pointer bg-[#38387e] text-white">
                <FaEnvelope className="mr-1" /> Email
              </span>
            </label>
          </div>
        </div>
      ))}
    </div>

    {/* Summary Notifications */}
    <div className="bg-[#1a194c] p-6 rounded-lg">
      <h3 className="text-white font-semibold text-lg">Summary notifications</h3>
      <p className="text-sm text-gray-400 mb-4">Choose how you want to receive summary notifications.</p>
      {['Daily summary', 'Weekly summary', 'Monthly summary', 'Annually summary'].map((item, index) => (
        <div key={index} className="flex items-center justify-between mb-4">
          <span className="text-white">{item}</span>
          <div className="flex items-center space-x-4">
            <label className="flex items-center text-white space-x-1">
              <input
                type="checkbox"
                className="hidden"
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  const button = e.target.nextSibling;
                  if (isChecked) {
                    button.classList.add('bg-purple-600');
                    button.classList.remove('bg-[#38387e]');
                  } else {
                    button.classList.add('bg-[#38387e]');
                    button.classList.remove('bg-purple-600');
                  }
                }}
              />
              <span className="inline-flex items-center justify-center w-20 py-1 text-center rounded-lg cursor-pointer bg-[#38387e] text-white">
                <FaMobileAlt className="mr-1" /> In-app
              </span>
            </label>
            <label className="flex items-center text-white space-x-1">
              <input
                type="checkbox"
                className="hidden"
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  const button = e.target.nextSibling;
                  if (isChecked) {
                    button.classList.add('bg-purple-600');
                    button.classList.remove('bg-[#38387e]');
                  } else {
                    button.classList.add('bg-[#38387e]');
                    button.classList.remove('bg-purple-600');
                  }
                }}
              />
              <span className="inline-flex items-center justify-center w-20 py-1 text-center rounded-lg cursor-pointer bg-[#38387e] text-white">
                <FaEnvelope className="mr-1" /> Email
              </span>
            </label>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-6">
      <button
        onClick={() => setShowAddUserModal(true)}
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Add User
      </button>
    </div>

    {showAddUserModal && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-[#1e293b] p-6 rounded-lg w-96">
          <h2 className="text-lg font-semibold text-white mb-4">Add New User</h2>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 mb-4 bg-[#334155] text-white rounded border border-gray-600"
          />
          <input
            type="text"
            placeholder="Phone"
            className="w-full p-2 mb-4 bg-[#334155] text-white rounded border border-gray-600"
          />
          <input
            type="text"
            placeholder="Location"
            className="w-full p-2 mb-4 bg-[#334155] text-white rounded border border-gray-600"
          />
          <input
            type="text"
            placeholder="Company"
            className="w-full p-2 mb-4 bg-[#334155] text-white rounded border border-gray-600"
          />
          <div className="flex justify-end space-x-2">
            <button
              onClick={() => setShowAddUserModal(false)}
              className="text-gray-300 hover:underline"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                // Add user logic here
                setShowAddUserModal(false);
              }}
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    )}
  </section>
)}

        </div>
      </main>
    </div>
  );
}
