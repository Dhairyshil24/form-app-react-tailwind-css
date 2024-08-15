import { useState } from "react";
import "./App.css";

function App() {

  const [formData, setFormData] = useState({
    firstName:"", lastName:"", email:"", country:"India",
    streetAddress:"", city:"", state:"", postalCode:"",
    comments:false, candidates:false, offers:false, pushNotifications:""
  })

  function changeHandler(event) {
    const {name, value, checked, type} = event.target;
    setFormData( (prev) => ({...prev, [name]:type === "checkbox" ? checked: value}) );
  }

  function submitHandler(event) {
    event.preventDefault();

    console.log("Finally printing the value of Form Data:");
    console.log(formData)
  }

  return (
    <div className="flex flex-col items-center mt-10">
    <form onSubmit={submitHandler} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">User Information</h2>
  
      <div className="mb-4">
        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Love"
          value={formData.firstName}
          onChange={changeHandler}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
  
      <div className="mb-4">
        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Babbar"
          value={formData.lastName}
          onChange={changeHandler}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
  
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="love@abcd.com"
          value={formData.email}
          onChange={changeHandler}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
  
      <div className="mb-4">
        <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">Country</label>
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={changeHandler}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option>India</option>
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>
      </div>
  
      <div className="mb-4">
        <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-700 mb-2">Street Address</label>
        <input
          type="text"
          name="streetAddress"
          id="streetAddress"
          placeholder="B-25C"
          value={formData.streetAddress}
          onChange={changeHandler}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
  
      <div className="mb-4">
        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">City</label>
        <input
          type="text"
          name="city"
          id="city"
          placeholder="B-25C"
          value={formData.city}
          onChange={changeHandler}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
  
      <div className="mb-4">
        <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">State / Province</label>
        <input
          type="text"
          name="state"
          id="state"
          placeholder="Bihar"
          value={formData.state}
          onChange={changeHandler}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
  
      <div className="mb-4">
        <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-2">Postal Code</label>
        <input
          type="text"
          name="postalCode"
          id="postalCode"
          placeholder="110077"
          value={formData.postalCode}
          onChange={changeHandler}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
  
      <fieldset className="mb-6">
      <legend className="text-lg font-semibold text-gray-800 mb-4">By Email</legend>

      <div className="flex items-start mb-4">
        <input
          id="comments"
          name="comments"
          type="checkbox"
          checked={formData.comments}
          onChange={changeHandler}
          className="h-4 w-4 text-blue-600 border-gray-300 rounded"
        />
        <div className="ml-3">
          <label htmlFor="comments" className="text-sm font-medium text-gray-700">Comments</label>
          <p className="text-gray-500 text-xs">Get notified when someone posts a comment on a posting.</p>
        </div>
      </div>

      <div className="flex items-start mb-4">
        <input
          id="candidates"
          name="candidates"
          type="checkbox"
          checked={formData.candidates}
          onChange={changeHandler}
          className="h-4 w-4 text-blue-600 border-gray-300 rounded"
        />
        <div className="ml-3">
          <label htmlFor="candidates" className="text-sm font-medium text-gray-700">Candidates</label>
          <p className="text-gray-500 text-xs">Get notified when a candidate applies for a job.</p>
        </div>
      </div>

      <div className="flex items-start">
        <input
          id="offers"
          name="offers"
          type="checkbox"
          checked={formData.offers}
          onChange={changeHandler}
          className="h-4 w-4 text-blue-600 border-gray-300 rounded"
        />
        <div className="ml-3">
          <label htmlFor="offers" className="text-sm font-medium text-gray-700">Offers</label>
          <p className="text-gray-500 text-xs">Get notified when a candidate accepts or rejects an offer.</p>
        </div>
      </div>
    </fieldset>

  
      <fieldset className="mb-6">
        <legend className="text-lg font-semibold text-gray-800 mb-4">Push Notifications</legend>
        <p className="text-gray-500 text-sm mb-4">These are delivered via SMS to your mobile phone.</p>
  
        <div className="flex items-center mb-2">
          <input
            type="radio"
            id="pushEverything"
            name="pushNotifications"
            value="Everything"
            onChange={changeHandler}
            className="h-4 w-4 text-blue-600 border-gray-300"
          />
          <label htmlFor="pushEverything" className="ml-3 text-sm text-gray-700">Everything</label>
        </div>
  
        <div className="flex items-center mb-2">
          <input
            type="radio"
            id="pushEmail"
            name="pushNotifications"
            value="Same as email"
            onChange={changeHandler}
            className="h-4 w-4 text-blue-600 border-gray-300"
          />
          <label htmlFor="pushEmail" className="ml-3 text-sm text-gray-700">Same as email</label>
        </div>
  
        <div className="flex items-center">
          <input
            type="radio"
            id="pushNothing"
            name="pushNotifications"
            value="No Push Notifications"
            onChange={changeHandler}
            className="h-4 w-4 text-blue-600 border-gray-300"
          />
          <label htmlFor="pushNothing" className="ml-3 text-sm text-gray-700">No Push Notifications</label>
        </div>
      </fieldset>
  
      <button
        className="w-full bg-blue-500 text-white font-bold rounded-lg py-3 px-4 hover:bg-blue-600 transition duration-300"
      >
        Save
      </button>
    </form>
  </div>
  
  );
}

export default App;
