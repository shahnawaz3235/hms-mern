import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const MessageForm = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleMessage = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "https://hms-mern-backend.vercel.app/api/v1/message/send",
          { firstname, lastname, phone, email, message },
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setMessage("");
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="container mx-auto px-6 py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow-xl">
      <h2 className="text-3xl font-semibold text-center mb-8">Send Us A Message</h2>
      <form onSubmit={handleMessage} className="space-y-6">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          <input
            type="text"
            value={firstname}
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full px-4 py-3 bg-white text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out"
          />
          <input
            type="text"
            value={lastname}
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
            className="w-full px-4 py-3 bg-white text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out"
          />
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          <input
            type="text"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 bg-white text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out"
          />
          <input
            type="number"
            value={phone}
            placeholder="Phone"
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-3 bg-white text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out"
          />
        </div>
        <textarea
          rows={7}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
          className="w-full px-4 py-3 bg-white text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out"
        ></textarea>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300 cursor-pointer"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default MessageForm;
