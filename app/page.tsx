"use client";

import Link from "next/link";

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-base-100 text-base-content">
      <h1 className="text-4xl font-bold mb-6">Welcome to Your Mail Client!</h1>
      <p className="mb-6 text-lg text-gray-500">
        Manage your emails efficiently with our modern interface.
      </p>
      <div className="flex space-x-4">
        <Link href="/inbox">
          <button className="btn btn-primary">Go to Inbox</button>
        </Link>
      </div>
    </main>
  );
};

export default Home;
