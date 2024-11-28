// app/inbox/page.tsx
import ComposeModal from "@/components/ComposeModal"; // Ensure correct path to the modal
import { emails } from "@/data/emails"; // Mock email data

const Inbox = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Inbox</h1>
        {/* Compose Modal Button */}
        <ComposeModal />
      </div>
      <ul className="space-y-4">
        {emails.map((email) => (
          <li key={email.id} className="p-4 bg-white shadow rounded hover:bg-gray-50">
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
