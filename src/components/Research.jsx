import React from "react";
import CategorySection from "./Research/CategorySection";

const structuredPatentData = [
  {
    category: "International Patent",
    items: [
      {
        title:
          "A device for non-invasive treatment of neurodegenerative diseases.",
        inventors:
          "Vibin Ramakrishnan, Gaurav Pandey, Harshal B. Nemade, Jahnu Saikia, Sajitha S, & Nitin Chaudhary.",
        patentNo: "WO/2019/012556",
        status: "Published",
      },
    ],
  },
  {
    category: "Indian Patents",
    items: [
      {
        title:
          "Generation and usage of Di-Histidine based stimulus responsive nanostructures",
        inventors:
          "Vibin Ramakrishnan, Sajitha S, Nitin Chaudhary & Gaurav Pandey.",
        patentNo: "243/KOL/2015",
        date: "09.03.2015",
        status: "Published",
      },
      {
        title: "Antimicrobial Peptides.",
        inventors:
          "Vibin Ramakrishnan, Prakash Kishore Hazam, Nitin Chaudhary, Vishal Trivedi and Gaurav Jerath.",
        patentNo: "333/KOL/2015",
        date: "26.03.2015",
        status: "Published",
      },
    ],
  },
  {
    category: "Computational Tools/Web servers",
    items: [
      {
        name: "Protein Barcode",
        description: "Tool structure based barcoding of proteins (MID IITG)",
        reference:
          "Structure Based Barcoding of Proteins Rahul Metri, Gaurav Jerath, Govind Kailas, Nitin Gachhe , Adityabarna Pal & Vibin Ramakrishnan (2014) Protein Science 23:117–120",
        status: "Active",
      },
      {
        name: "Basic Protein Engineering Toolkit (bPE Toolkit, MID IITG)",
        description: "Consists of six useful protein modeling tools",
        reference:
          "bPE toolkit:Toolkit for Computational Protein Engineering Gaurav Jerath, Prakash K. Hazam and Vibin Ramakrishnan. Systems and Synthetic Biology. (2014) 8:337–341.",
        status: "Active",
      },
    ],
  },
];

function Research() {
  return (
    <div className="min-w-full bg-linear-to-br from-gray-50 via-blue-50/20 to-purple-50/20">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-linear-to-br from-indigo-600 via-purple-700 to-pink-800 text-white py-20 px-8">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold mb-4 border border-white/20">
            Innovation & Discovery
          </div>
          <h1 className="text-6xl font-bold mb-4 leading-tight">
            Research & Patents
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl leading-relaxed">
            Explore our groundbreaking patents and computational tools that are
            shaping the future of molecular medicine and biotechnology.
          </p>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-bold mb-2">
                {structuredPatentData.reduce(
                  (acc, cat) => acc + cat.items.length,
                  0
                )}
              </div>
              <div className="text-purple-100 text-sm uppercase tracking-wide font-semibold">
                Total Patents & Tools
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-bold mb-2">
                {structuredPatentData.length}
              </div>
              <div className="text-purple-100 text-sm uppercase tracking-wide font-semibold">
                Categories
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-bold mb-2">2014+</div>
              <div className="text-purple-100 text-sm uppercase tracking-wide font-semibold">
                Years of Innovation
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        {structuredPatentData.map((categoryData, index) => (
          <CategorySection
            key={index}
            categoryData={categoryData}
            index={index}
          />
        ))}

        {/* Call to Action */}
        <div className="mt-16 bg-linear-to-r from-indigo-600 to-purple-700 rounded-3xl p-12 text-white shadow-2xl text-center">
          <h3 className="text-3xl font-bold mb-4">
            Interested in Collaboration?
          </h3>
          <p className="text-lg text-indigo-100 mb-6 max-w-2xl mx-auto">
            We're always looking for opportunities to collaborate on innovative
            research projects and technology development.
          </p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-bold hover:bg-indigo-50 transition-colors duration-300 shadow-lg hover:shadow-xl">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
}

export default Research;
