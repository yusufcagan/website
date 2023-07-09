import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const sendMail = async () => {
    console.log("name:", name);
    console.log("email:", email);
    console.log("message:", message);

    await emailjs
      .send(
        "service_8ywkmha",
        "template_m3b3qeh",
        {
          from_name: name,
          message: message,
          from_email: email,
        },
        "eUZ37bFG5iC7tpN_J"
      )
      .then(
        (result) => {
          console.log("successful", result.text);
          alert("success");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log("error", error.text);
          alert("error");
        }
      );
  };

  return (
    <div className="flex dark:bg-zinc-700">
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-bold mb-6 text-center mt-12">
          Contact to Me
        </h1>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block mb-3 font-medium" htmlFor="name">
              Name
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 dark:bg-zinc-400 dark:placeholder:text-white rounded"
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-3 font-medium" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 dark:bg-zinc-400  dark:placeholder:text-white rounded"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-3 font-medium" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full px-4 py-2 border border-gray-300 dark:bg-zinc-400 rounded dark:placeholder:text-white"
              id="message"
              name="message"
              placeholder="Type your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              //rows="5"
              required
            ></textarea>
          </div>
          <button
            onClick={sendMail}
            className="bg-blue-500 text-white px-4 py-2 my-3 rounded hover:bg-blue-600"
            type="button"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
