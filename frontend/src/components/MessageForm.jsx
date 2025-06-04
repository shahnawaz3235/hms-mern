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
      await axios.post(
        "https://hms-mern-backend.vercel.app/api/v1/message/send",
        { firstname, lastname, phone, email, message },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success("Message sent successfully!");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to send message");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white rounded-lg shadow-md"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <h2
        className="text-2xl font-semibold mb-6 text-[#1A237E]"
        style={{ color: "#1A237E" }}
      >
        Send Us A Message
      </h2>
      <form onSubmit={handleMessage} className="space-y-5">
        {/* First & Last Name */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label
              htmlFor="firstname"
              className="block mb-1 font-medium text-[#212121]"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstname"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="w-full px-4 py-2 border border-[#1A237E] rounded-md text-[#212121] placeholder:text-[#757575] focus:outline-none focus:ring-2 focus:ring-[#4FC3F7] transition"
              placeholder="Enter your first name"
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="lastname"
              className="block mb-1 font-medium text-[#212121]"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastname"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
              required
              className="w-full px-4 py-2 border border-[#1A237E] rounded-md text-[#212121] placeholder:text-[#757575] focus:outline-none focus:ring-2 focus:ring-[#4FC3F7] transition"
              placeholder="Enter your last name"
            />
          </div>
        </div>

        {/* Email & Phone */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label
              htmlFor="email"
              className="block mb-1 font-medium text-[#212121]"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-[#1A237E] rounded-md text-[#212121] placeholder:text-[#757575] focus:outline-none focus:ring-2 focus:ring-[#4FC3F7] transition"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="phone"
              className="block mb-1 font-medium text-[#212121]"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full px-4 py-2 border border-[#1A237E] rounded-md text-[#212121] placeholder:text-[#757575] focus:outline-none focus:ring-2 focus:ring-[#4FC3F7] transition"
              placeholder="Enter your phone number"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block mb-1 font-medium text-[#212121]"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full px-4 py-3 border border-[#1A237E] rounded-md text-[#212121] placeholder:text-[#757575] focus:outline-none focus:ring-2 focus:ring-[#4FC3F7] transition resize-none"
            placeholder="Write your message here..."
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-[#1A237E] hover:bg-[#4FC3F7] text-white px-8 py-3 rounded-full font-semibold transition"
            aria-label="Send message"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default MessageForm;
