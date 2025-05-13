import { React, useState, useEffect, useRef } from 'react';
import Header from './Header';
import Footer from './Footer';
import { supabase } from '../config/supabaseClient';

// Reusable animation hook
const useScrollAnimation = (direction = 'left') => {
  const ref = useRef();

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.remove('opacity-0');
          node.classList.add(direction === 'left' ? 'slide-in-left' : 'slide-in-right');
        }
      },
      { threshold: 0.2 }
    );

    node.classList.add('opacity-0');
    observer.observe(node);

    return () => observer.disconnect();
  }, [direction]);

  return ref;
};

const Admissions = () => {
  const [feeStructure, setFeeStructure] = useState([]);
  const [admissionDocument, setAdmissionDocument] = useState([]);
  const [loading, setLoading] = useState({
    feeStructure: true,
    admissionDocument: true
  });

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes slide-in-left {
        from { transform: translateX(-100px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      @keyframes slide-in-right {
        from { transform: translateX(100px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      .slide-in-left {
        animation: slide-in-left 0.8s ease-out forwards;
      }
      .slide-in-right {
        animation: slide-in-right 0.8s ease-out forwards;
      }
      .opacity-0 {
        opacity: 0;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  useEffect(() => {
    const getFeeStructure = async () => {
      try {
        const { data: fee_structures, error } = await supabase.from('fee_structures').select('*');
        if (error) throw error;
        setFeeStructure(fee_structures || []);
      } catch (error) {
        console.error('Error fetching fee structure:', error);
      } finally {
        setLoading(prev => ({ ...prev, feeStructure: false }));
      }
    };

    const getAdmissionDocument = async () => {
      try {
        const { data: admission_document, error } = await supabase
          .from('admission_documents')
          .select('*')
          .order('updated_at', { ascending: false })
          .limit(1);
        if (error) throw error;
        setAdmissionDocument(admission_document || []);
      } catch (error) {
        console.error('Error fetching admission document:', error);
      } finally {
        setLoading(prev => ({ ...prev, admissionDocument: false }));
      }
    };

    getFeeStructure();
    getAdmissionDocument();
  }, []);

  const processRef = useScrollAnimation('left');
  const feeRef = useScrollAnimation('right');
  const contactRef = useScrollAnimation('left');

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
            {loading.admissionDocument ? (
              <div className="flex justify-center items-center space-x-2">
                <div className="w-4 h-4 rounded-full bg-blue-600 animate-pulse"></div>
                <div className="w-4 h-4 rounded-full bg-blue-600 animate-pulse"></div>
                <div className="w-4 h-4 rounded-full bg-blue-600 animate-pulse"></div>
              </div>
            ) : admissionDocument.length > 0 ? (
              <>
                <a
                  href={admissionDocument[0]?.file_url}
                  download
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 cursor-pointer"
                >
                  Download Admission Form
                </a>
                <p className="mt-2 text-sm text-gray-500">Click the button to download our admission application form.</p>
              </>
            ) : (
              <p className="text-red-500">Admission form is currently unavailable.</p>
            )}
          </div>

          {/* Admission Process */}
          <div ref={processRef} className="bg-white rounded-xl shadow-md p-8 mb-10 transition-all duration-700">
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
          <div ref={feeRef} className="bg-white rounded-xl shadow-md p-8 mb-10 transition-all duration-700">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Fee Structure</h2>
            {loading.feeStructure ? (
              <div className="flex flex-col space-y-4">
                <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
              </div>
            ) : feeStructure.length > 0 ? (
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
                    {feeStructure.map((info, index) => (
                      <tr key={index}>
                        <td className="p-3 border">{info.class}</td>
                        <td className="p-3 border">₹{info.tuition_fee}</td>
                        <td className="p-3 border">₹{info.admission_fee}</td>
                        <td className="p-3 border">₹{info.other_charges}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-red-500">Fee structure information is currently unavailable.</p>
            )}
          </div>

          {/* Contact Information */}
          <div ref={contactRef} className="bg-white rounded-xl shadow-md p-8 transition-all duration-700">
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