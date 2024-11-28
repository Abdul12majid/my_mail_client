// components/ComposeModal.tsx
"use client"; // Only if you are using client-side logic like modals

import { useState } from "react";

const ComposeModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    to: "",
    subject: "",
    body: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email Sent:", formData);
    setFormData({ to: "", subject: "", body: "" }); // Reset form
    setIsOpen(false); // Close modal after sending
  };

  return (
    <>
      {/* Button to open modal */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
      >
        Compose Email
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Compose Email</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="to" className="block font-medium mb-2">
                  To:
                </label>
                <input
                  id="to"
                  type="email"
                  value={formData.to}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, to: e.target.value }))
                  }
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block font-medium mb-2">
                  Subject:
                </label>
                <input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, subject: e.target.value }))
                  }
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="body" className="block font-medium mb-2">
                  Body:
                </label>
                <textarea
                  id="body"
                  value={formData.body}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, body: e.target.value }))
                  }
                  className="w-full border rounded px-3 py-2 h-28"
                  required
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ComposeModal;
