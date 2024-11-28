// app/email/[id]/page.tsx
import { emails } from "../../../data/emails"; // Relative path to the data file

const EmailDetail = ({ params }: { params: { id: string } }) => {
  const email = emails.find((e) => e.id === parseInt(params.id));

  if (!email) {
    return <p>Email not found</p>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">{email.subject}</h1>
      <p className="text-sm text-gray-600">{email.sender}</p>
      <div className="mt-4">{email.body}</div>
    </div>
  );
};

export default EmailDetail;
