import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Navigate } from "react-router-dom";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { isAuthenticated } = useContext(Context);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/message/getall",
          { withCredentials: true }
        );
        setMessages(data.messages);
      } catch (error) {
        toast.error(error.response?.data?.message || "Failed to load messages.");
      }
    };
    fetchMessages();
  }, []);

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <section className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Messages</h1>
        <div className="space-y-4">
          {messages && messages.length > 0 ? (
            messages.map((element) => {
              return (
                <div className="bg-gray-100 p-6 rounded-lg shadow-sm" key={element._id}>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">
                      <strong>First Name:</strong> <span className="text-gray-800">{element.firstName}</span>
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Last Name:</strong> <span className="text-gray-800">{element.lastName}</span>
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Email:</strong> <span className="text-gray-800">{element.email}</span>
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Phone:</strong> <span className="text-gray-800">{element.phone}</span>
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Message:</strong> <span className="text-gray-800">{element.message}</span>
                    </p>
                  </div>
                </div>
              );
            })
          ) : (
            <h1 className="text-center text-gray-600">No Messages!</h1>
          )}
        </div>
      </div>
    </section>
  );
};

export default Messages;
