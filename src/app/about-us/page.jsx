'use client';
import React from 'react';

const teamMembers = [
  {
    name: "Dr. A.P. Sharma",
    role: "Founder & Director",
    qualifications: "Ph.D. in Education, 20+ years of experience in academic leadership",
    image: "/images/team1.jpg", // Replace with actual image paths
  },
  {
    name: "Ms. Neha Gupta",
    role: "Senior Faculty - Science",
    qualifications: "M.Sc (Physics), B.Ed, 10+ years teaching NEET & CBSE",
    image: "/images/team2.jpg",
  },
  {
    name: "Mr. Rohit Verma",
    role: "Mathematics Faculty",
    qualifications: "M.Sc (Maths), IIT Graduate, 8+ years coaching JEE aspirants",
    image: "/images/team3.jpg",
  },
];

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-800 px-6 py-12 max-w-7xl mx-auto space-y-16">
      {/* Title */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-700">About Kalam Learning Centre</h1>
        <p className="mt-4 text-lg text-gray-600">
          Igniting Minds. Shaping Futures.
        </p>
      </div>

      {/* History and Mission */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-blue-600">Our Story</h2>
        <p>
          Founded in 2015, Kalam Learning Centre was born out of a passion for quality education and
          a commitment to nurturing talent in every corner of the nation. Inspired by the legacy of
          Dr. A.P.J. Abdul Kalam, our mission is to empower young minds with knowledge, skills, and
          character to excel in academics and beyond.
        </p>
        <p>
          From a humble beginning with just 10 students, we’ve grown into a trusted coaching centre
          serving hundreds of aspiring students every year, helping them realize their academic and
          career dreams.
        </p>
      </section>

      {/* Unique Proposition */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-blue-600">What Sets Us Apart</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Personalized attention through small batch sizes</li>
          <li>Interactive learning using modern tech-enabled classrooms</li>
          <li>Highly qualified and passionate educators</li>
          <li>Regular assessments with detailed performance analytics</li>
          <li>Affordable and accessible education with scholarship support</li>
        </ul>
      </section>

      {/* Services Offered */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-blue-600">Our Services</h2>
        <p>
          We offer specialized coaching for:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>School Curriculum:</strong> Classes 8 to 12 (CBSE & State Board)</li>
          <li><strong>Competitive Exams:</strong> NEET, JEE, CUET, NTSE, Olympiads</li>
          <li><strong>Foundation Programs:</strong> For middle school students (Classes 6–8)</li>
          <li><strong>Mentoring & Counseling:</strong> Academic planning, career guidance, and stress management</li>
        </ul>
      </section>

      {/* Team */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-blue-600">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl shadow p-4 text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
              <p className="text-sm mt-2 text-gray-500">{member.qualifications}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vision Statement */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-blue-600">Our Vision</h2>
        <p>
          Kalam Learning Centre envisions a future where quality education is not a privilege, but a
          right accessible to every child. We strive to become a beacon of academic excellence by
          continuously evolving our teaching practices, embracing innovation, and remaining deeply
          committed to our students' holistic growth.
        </p>
        <p className="italic text-blue-700 font-medium">
          “Dream, Dream, Dream. Dreams transform into thoughts and thoughts result in action.” – Dr. A.P.J. Abdul Kalam
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
