import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const VeloxforceTeam = () => {
  const [currentMember, setCurrentMember] = useState(0);

  const teamMembers = [
    {
      name: "DIRK TUNDERMAN",
      role: "CEO",
      company: "VELOXFORCE",
      quote: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    // Add more team members here
  ];

  const nextMember = () => {
    setCurrentMember((prev) => (prev + 1) % teamMembers.length);
  };

  const prevMember = () => {
    setCurrentMember((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const member = teamMembers[currentMember];

  return (
    <section className="bg-gray-200 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl font-bold mb-12">
          Veloxforce <span className="text-orange-500">Team.</span>
        </h2>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img src={member.image} alt={member.name} className="w-full h-auto object-cover rounded-lg" />
            </div>
            <div className="md:w-1/2 md:pl-8 flex flex-col justify-between">
              <div>
                <div className="mb-4">
                  <p className="text-sm text-gray-500">NAME: {member.name}</p>
                  <p className="text-sm text-gray-500">ROLE: {member.role}</p>
                  <p className="text-sm text-gray-500">COMPANY: {member.company}</p>
                </div>
                <blockquote className="text-xl italic mb-4">"{member.quote}"</blockquote>
              </div>
              <div className="flex justify-between items-center">
                <button onClick={prevMember} className="text-orange-500 hover:text-orange-600">
                  <ChevronLeft size={24} />
                </button>
                <span className="text-sm text-gray-500">01/{teamMembers.length.toString().padStart(2, '0')}</span>
                <button onClick={nextMember} className="text-orange-500 hover:text-orange-600">
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VeloxforceTeam;
