// src/components/UserTypesSection.jsx
import './UserTypesSection.css';

const userTypes = [
  {
    title: "Developers",
    description: "Developers can use this platform to manage their projects, collaborate with team members, and keep track of their progress.",
    icon: "👨‍💻",
  },
  {
    title: "Corporate Professionals",
    description: "Corporate professionals can organize their tasks, set deadlines, and ensure timely completion of projects.",
    icon: "💼",
  },
  {
    title: "Bankers",
    description: "Bankers can use this tool to streamline their workflows, track their tasks, and manage their schedules efficiently.",
    icon: "🏦",
  },
  {
    title: "Students",
    description: "Students can organize their study schedules, keep track of assignments, and collaborate with classmates on group projects.",
    icon: "🎓",
  },
  {
    title: "Freelancers",
    description: "Freelancers can manage their client projects, set milestones, and ensure timely delivery of their work.",
    icon: "📈",
  },
];

const UserTypesSection = () => {
  return (
    <section className="user-types-section">
      <h2 className="title">Who Can Benefit from This Website?</h2>
      <div className="grid">
        {userTypes.map((userType, index) => (
          <div key={index} className="card">
            <div className="flex items-center mb-4">
              <span className="icon">{userType.icon}</span>
              <h3 className="user-title">{userType.title}</h3>
            </div>
            <p>{userType.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UserTypesSection;
