import React from 'react';

import Header from './Header';
import Footer from './Footer';


const Admissions = () => {
  return (
    <>
      <Header />
      <main className="pt-28 pb-16 px-6 md:px-16 bg-gray-50 font-sans text-gray-800">
        <section className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-blue-900 mb-10 border-b pb-4">
            Admissions
          </h1>

          {/* Download Form */}
          <div className="text-center mb-12">
            <a
              href="/downloads/form.html"
              download
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
            >
              Download Admission Form
            </a>
            <p className="mt-2 text-sm text-gray-500">Click the button to download our admission application form.</p>
          </div>

          {/* Admission Process */}
          <div className="bg-white rounded-xl shadow-md p-8 mb-10">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Admission Process</h2>
            <p className="text-lg leading-relaxed">
              Admissions are open from January to May each academic year. Parents can collect the admission form from the school or download it from the website.
              The filled form should be submitted along with required documents.
            </p>
            <ul className="list-disc list-inside mt-4 text-lg">
              <li>Birth Certificate</li>
              <li>Previous Academic Records</li>
              <li>Transfer Certificate</li>
              <li>Passport-size Photographs</li>
            </ul>
          </div>

          {/* Fee Structure */}
          <div className="bg-white rounded-xl shadow-md p-8 mb-10">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Fee Structure</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border border-collapse">
                <thead>
                  <tr className="bg-blue-100 text-blue-900">
                    <th className="p-3 border">Class</th>
                    <th className="p-3 border">Tuition Fee (Annual)</th>
                    <th className="p-3 border">Admission Fee</th>
                    <th className="p-3 border">Other Charges</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border">Pre-KG to UKG</td>
                    <td className="p-3 border">₹25,000</td>
                    <td className="p-3 border">₹5,000</td>
                    <td className="p-3 border">₹2,000</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 border">I to V</td>
                    <td className="p-3 border">₹30,000</td>
                    <td className="p-3 border">₹5,000</td>
                    <td className="p-3 border">₹2,500</td>
                  </tr>
                  <tr>
                    <td className="p-3 border">VI to X</td>
                    <td className="p-3 border">₹35,000</td>
                    <td className="p-3 border">₹5,000</td>
                    <td className="p-3 border">₹3,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Need Help?</h2>
            <p className="text-lg leading-relaxed mb-2">For more information about admissions, please contact:</p>
            <p className="text-lg"><strong>Phone:</strong> +91 98765 43210</p>
            <p className="text-lg"><strong>Email:</strong> admissions@schoolname.edu.in</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Admissions;
