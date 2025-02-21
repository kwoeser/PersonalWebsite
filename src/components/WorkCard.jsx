

const WorkCard = ({ company, role, description }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg mt-4 text-white shadow-lg">

      <h3 className="text-xl font-semibold">{role}</h3>
      <p className="text-gray-400 text-lg">{company}</p>
      
      <ul className="list-disc list-inside mt-2 text-gray-400">
        {description.map((item, index) => (
          <li key={index} className="leading-relaxed">{item}</li>
        ))}
      </ul>


    </div>
  );
};

export default WorkCard;