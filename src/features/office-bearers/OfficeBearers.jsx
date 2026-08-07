import React from 'react';
import { motion } from 'framer-motion';
import Reveal from '../../components/Reveal';
import Footer from '../../components/Footer';

/* ════════════════════════════════════════════════════════════
   OFFICE BEARERS DATA
   ─────────────────────────────────────────────────────────
   Edit names, roles, departments, and photo paths below.
   Photos are stored in src/features/office-bearers/assets/
   or public/images/team/.
════════════════════════════════════════════════════════════ */

// Chairman
const chairman = {
  name: 'Dr. K N Subramanya',
  role: 'Chairman',
  designation: 'Principal, RV College of Engineering',
  photo: '/images/princi.jpg',
};

// Faculty Advisors
const facultyAdvisors = [
  {
    name: 'Dr. K.S. Geetha',
    role: 'Faculty Advisor',
    designation: 'Vice Principal, RVCE',
    photo: '/images/vp.jpeg',
  },
  {
    name: 'Dr. Shanmukha Nagaraj',
    role: 'Faculty Advisor',
    designation: 'HoD, Mechanical Engineering',
    photo: '/images/dean.jpg',
  },
];

// Faculty Coordinator
const facultyCoordinator = {
  name: 'Dr. Prapulla S B',
  role: 'Faculty Coordinator',
  designation: 'Assistant Professor, CSE',
  photo: '/images/psb.jpg',
};

// Core Team — UPDATE NAMES & PHOTOS HERE
const coreTeam = [
  {
    name: 'Your Name',
    role: 'President',
    dept: 'Department',
    photo: '/images/team/prathik.jpg',
  },
  {
    name: 'Your Name',
    role: 'Vice President',
    dept: 'Department',
    photo: '/images/team/rupini.jpg',
  },
  {
    name: 'Your Name',
    role: 'Secretary',
    dept: 'Department',
    photo: '/images/team/sunidhi.jpg',
  },
  {
    name: 'Your Name',
    role: 'Joint Secretary',
    dept: 'Department',
    photo: '/images/team/prajwal.jpg',
  },
  {
    name: 'Your Name',
    role: 'Treasurer',
    dept: 'Department',
    photo: '/images/team/tejas.jpeg',
  },
];

// Wing Heads — UPDATE NAMES & PHOTOS HERE
const wingHeads = [
  {
    wing: 'Activities & Events',
    name: 'Your Name',
    dept: 'Department',
    photo: '/images/team/dhruthi.jpg',
  },
  {
    wing: 'Industrial Connect',
    name: 'Your Name',
    dept: 'Department',
    photo: '/images/team/harshit.jpg',
  },
  {
    wing: 'Projects, R & D',
    name: 'Your Name',
    dept: 'Department',
    photo: '/images/team/shriyansh.jpg',
  },
  {
    wing: 'Social Media',
    name: 'Your Name',
    dept: 'Department',
    photo: '/images/team/sachin.jpg',
  },
  {
    wing: 'Women Empowerment',
    name: 'Your Name',
    dept: 'Department',
    photo: '/images/team/aarushi.jpg',
  },
];

/* Reusable card components */
const FeaturedCard = ({ name, role, designation, photo }) => (
  <div className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 max-w-md w-full">
    <div className="h-64 bg-gradient-to-br from-sparkBlue to-sparkLightBlue relative overflow-hidden">
      <img
        src={photo}
        alt={name}
        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        onError={(e) => { e.target.style.display = 'none'; }}
      />
    </div>
    <div className="p-6 text-center">
      <h3 className="text-xl font-black text-sparkBlue">{name}</h3>
      <p className="text-sparkAccent font-semibold text-sm mt-1">{role}</p>
      <p className="text-slate-500 text-sm mt-1">{designation}</p>
    </div>
  </div>
);

const MemberCard = ({ name, role, dept, photo, wing }) => (
  <div className="group bg-white rounded-2xl overflow-hidden shadow-md border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
    <div className="h-52 bg-gradient-to-br from-sparkBlue/90 to-sparkLightBlue relative overflow-hidden">
      <img
        src={photo}
        alt={name}
        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        onError={(e) => { e.target.style.display = 'none'; }}
      />
    </div>
    <div className="p-5 text-center">
      <h4 className="text-lg font-bold text-sparkBlue">{name}</h4>
      <p className="text-sparkAccent font-semibold text-xs mt-1 uppercase tracking-wider">{wing || role}</p>
      {dept && <p className="text-slate-400 text-xs mt-1">{dept}</p>}
    </div>
  </div>
);

const OfficeBearers = () => {
  return (
    <>
      <section className="relative pt-32 pb-20 px-6 text-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #051525 0%, #0B2447 35%, #0d2f5c 60%, #19376D 100%)' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-sparkAccent/10 blur-[120px]" />
          <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-sparkAccent/8 blur-[100px]" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10"
        >
          <span className="text-xs font-bold tracking-widest uppercase text-sparkAccent mb-4 block">Our Team</span>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-none mb-4">Office Bearers</h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">The leadership that drives SPARK forward — from faculty guidance to student-led innovation across every wing.</p>
        </motion.div>
      </section>

      <div className="bg-white relative z-20">

        {/* Chairman */}
        <section className="w-full px-6 md:px-12 xl:px-20 py-20">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-black text-sparkBlue">Chairman</h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex justify-center">
              <FeaturedCard {...chairman} />
            </div>
          </Reveal>
        </section>

        {/* Faculty */}
        <section className="w-full bg-slate-50 px-6 md:px-12 xl:px-20 py-20 border-t border-slate-100">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-black text-sparkBlue">Faculty</h2>
            </div>
          </Reveal>
          <div className="flex flex-wrap justify-center gap-8">
            {facultyAdvisors.map((fa, i) => (
              <Reveal key={fa.name} delay={i * 0.1}>
                <FeaturedCard {...fa} />
              </Reveal>
            ))}
            <Reveal delay={0.2}>
              <FeaturedCard {...facultyCoordinator} />
            </Reveal>
          </div>
        </section>

        {/* Core Team */}
        <section className="w-full px-6 md:px-12 xl:px-20 py-20">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-black text-sparkBlue">Core Team</h2>
            </div>
          </Reveal>
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {coreTeam.map((m, i) => (
              <Reveal key={m.role} delay={i * 0.07}>
                <MemberCard {...m} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* Wing Heads */}
        <section className="w-full bg-slate-50 px-6 md:px-12 xl:px-20 py-20 border-t border-slate-100">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-black text-sparkBlue">Wing Heads</h2>
            </div>
          </Reveal>
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {wingHeads.map((m, i) => (
              <Reveal key={m.wing} delay={i * 0.07}>
                <MemberCard name={m.name} wing={m.wing} dept={m.dept} photo={m.photo} />
              </Reveal>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default OfficeBearers;
