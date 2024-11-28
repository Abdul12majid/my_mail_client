// app/inbox/page.tsx
import { emails } from "../../data/emails"; // Relative path to the data file

const Inbox = () => (
  <div>
    <h1 className="text-2xl font-bold mb-4">Inbox</h1>
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

export default Inbox;
