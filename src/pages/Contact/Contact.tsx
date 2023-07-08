import React from "react";

export default function Contact() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact to Me</h1>
      <form className="max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block mb-2 font-medium" htmlFor="name">
            Name
          </label>
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded"
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-medium" htmlFor="email">
            Email
          </label>
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-medium" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full px-4 py-2 border border-gray-300 rounded"
            id="message"
            name="message"
            placeholder="Type your message here..."
            //rows="5"
            required
          ></textarea>
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
