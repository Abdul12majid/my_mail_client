"use client";

import { useState } from "react";
import ComposeModal from "@/components/ComposeModal"; // Compose modal
import { emails } from "@/data/emails"; // Mock emails

const Inbox = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEmails = emails.filter((email) =>
    email.subject.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Inbox</h1>
        <ComposeModal />
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search emails..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Email List */}
      <ul className="space-y-4">
        {filteredEmails.map((email) => (
          <li
            key={email.id}
            className="p-4 bg-white shadow rounded hover:bg-gray-50"
          >
            <a href={`/email/${email.id}`} className="block">
              <h2 className="font-bold">{email.subject}</h2>
              <p className="text-sm text-gray-600">{email.sender}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Inbox;
