import WorkCard from "../components/WorkCard";

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6 py-10 text-center">
      <h1 className="text-5xl font-bold">hi ted here 👋</h1>
      <p className="text-gray-400 mt-3 max-w-2xl">
        28-year-old software developer from Singapore. I like to develop full-stack,
        drink instant coffee, and get coding advice from my cat, Luffy.
      </p>
      <div className="mt-6 flex space-x-4">
        <button className="bg-gray-700 px-6 py-3 rounded-lg shadow-md hover:bg-gray-600 transition">Resume</button>
        <button className="bg-gray-700 px-6 py-3 rounded-lg shadow-md hover:bg-gray-600 transition">LinkedIn</button>
        <button className="bg-gray-700 px-6 py-3 rounded-lg shadow-md hover:bg-gray-600 transition">GitHub</button>
      </div>
      <section className="p-6 w-full max-w-4xl mt-10">
        <h2 className="text-3xl font-bold mb-6">Work</h2>
        <WorkCard
          company="DBS Bank"
          role="Graduate Associate"
          description={[
            "Developed Java backend for bank account servicing.",
            "Built a migration tool with Python and MariaDB."
          ]}
        />
      </section>
    </div>
  );
}

export default Home;