import React from 'react';

import Header from './Header';
import Footer from './Footer';


const Careers = () => {
  return (
    <>
      <Header />
      <main className="pt-28 pb-16 px-6 md:px-16 bg-gray-50 font-sans text-gray-800">
        <section className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-blue-900 mb-10 border-b pb-4">Join Our Team</h1>
          <p className="text-lg text-center mb-12">
            At Global International School, we’re building a team of passionate educators and professionals dedicated to nurturing future leaders. Explore opportunities across academic and non-academic domains.
          </p>

          <div className="text-center mt-12">
            <p className="text-lg font-semibold mb-4">
              To apply, please send your updated resume and a cover letter to:
            </p>
            <a href="mailto:careers@schoolname.edu.in" className="text-blue-700 font-bold underline">
              careers@schoolname.edu.in
            </a>
          </div> <br></br>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Teaching Faculty (All Subjects)',
                description: 'We are looking for experienced and innovative teachers for subjects across all grades. Candidates must hold relevant qualifications and a passion for education.',
              },
              {
                title: 'Lab Assistants (Physics, Chemistry, Biology, Computer)',
                description: 'Support our science and technology faculty by maintaining labs, helping students, and ensuring safety protocols are followed.',
              },
              {
                title: 'Library Coordinator',
                description: 'Manage our growing digital and physical library resources. Prior experience in library management and cataloging systems preferred.',
              },
              {
                title: 'Administrative Officers',
                description: 'Assist in school operations, admissions, and communication. Strong organizational and interpersonal skills are essential.',
              },
              {
                title: 'Front Desk Receptionist',
                description: 'Be the face of our school. Excellent communication skills and a friendly personality required.',
              },
              {
                title: 'Sports Coaches (Multiple Disciplines)',
                description: 'Foster students’ physical development and team spirit. We are hiring for football, athletics, yoga, and more.',
              }
            ].map((role, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
                <h2 className="text-xl font-semibold text-blue-800 mb-2">{role.title}</h2>
                <p className="text-gray-700">{role.description}</p>
              </div>
            ))}
          </div>

          
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Careers;
