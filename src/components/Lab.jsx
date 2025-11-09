import React from "react";
import ProjectCard from "./Lab/ProjectCard";
import StudentCard from "./Lab/StudentCard";
import SectionHeader from "./Lab/SectionHeader";

const projects = [
  {
    title:
      "Mapping Drug-Target Interactions and Synergy in Traditional Multimolecular Immunomodulators",
    objective:
      "Mapping drug target interactions of multi-molecular drug formulations.",
    keywords: [
      "Network Medicine",
      "Computational Biology",
      "Biochemical Informatics",
      "Systems Biology",
    ],
  },
  {
    title: "Design of peptide-based stimulus responsive nano-catalyst",
    objective:
      "This project aims to design, synthesize and characterize peptide based nano-materials for possible use as catalysts for industrial applications.",
    keywords: ["Biophysics", "Bio-nanotechnology", "Bio-organic chemistry"],
  },
  {
    title:
      "Design of peptide-based drug delivery vehicles against resistant cancer",
    objective:
      "Design and functional characterization of drug delivery vehicles using established in vitro and in vivo methods.",
    keywords: ["Biophysics", "Bio-nanotechnology", "Cancer therapy"],
  },
];

const phdStudents = [
  {
    name: "Yvonne Christian",
    title: "Senior Research Fellow",
    field: "Drug delivery vehicles",
  },
  {
    name: "Kalpana Kumari",
    title: "Prime Ministers Research Fellow",
    field: "Bio-nano catalysis",
  },
  {
    name: "Amay Sanjay Redkar",
    title: "Prime Ministers Research Fellow",
    field: "Network Medicine",
  },
  {
    name: "Mouli Sarkar",
    title: "Senior Research Fellow",
    field: "Network Medicine",
  },
  {
    name: "Naveen Kumar",
    title: "Prime Ministers Research Fellow",
    field: "Network Medicine",
  },
  {
    name: "Dikshita Hazarika",
    title: "Junior Research Fellow",
    field: "Drug delivery vehicles",
  },
  {
    name: "Kunal Das",
    title: "Junior Research Fellow",
    field: "Bionanotechnology, Bio-nano catalysis",
  },
  {
    name: "Sushmita Sen",
    title: "Junior Research Fellow",
    field: "Network Medicine",
  },
];

function Lab() {
  return (
    <div className="min-w-full bg-linear-to-br from-gray-50 via-blue-50/30 to-purple-50/30">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-linear-to-br from-blue-600 via-indigo-700 to-purple-800 text-white py-20 px-8">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold mb-4 border border-white/20">
            MID Lab @ IIT Guwahati
          </div>
          <h1 className="text-6xl font-bold mb-4 leading-tight">
            Molecular Interactions & Design Laboratory
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl leading-relaxed">
            Pioneering research in network medicine, drug delivery systems, and
            bio-nanotechnology to advance healthcare and therapeutic solutions.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        {/* Projects Section */}
        <section className="mb-20">
          <SectionHeader
            title="Research Projects"
            subtitle="Cutting-edge research initiatives driving innovation in molecular medicine"
            accentColor="blue"
          />

          <div className="grid grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </section>

        {/* PhD Students Section */}
        <section>
          <SectionHeader
            title="Ph.D. Students"
            subtitle="Meet our talented researchers shaping the future of molecular science"
            accentColor="purple"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {phdStudents.map((student, index) => (
              <StudentCard key={index} student={student} index={index} />
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mt-20 bg-linear-to-r from-blue-600 to-indigo-700 rounded-3xl p-12 text-white shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                {projects.length}
              </div>
              <div className="text-blue-100 uppercase tracking-wide text-sm font-semibold">
                Active Projects
              </div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                {phdStudents.length}
              </div>
              <div className="text-blue-100 uppercase tracking-wide text-sm font-semibold">
                PhD Researchers
              </div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                3+
              </div>
              <div className="text-blue-100 uppercase tracking-wide text-sm font-semibold">
                Research Areas
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Lab;
