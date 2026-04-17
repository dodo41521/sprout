/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import React from 'react';
import { 
  Leaf, 
  Film, 
  Instagram, 
  Users, 
  Phone, 
  Mail, 
  Calendar, 
  GraduationCap, 
  Award,
  ChevronDown
} from "lucide-react";

const SectionTitle = ({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) => (
  <div className="mb-10 text-left">
    <motion.h2 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl font-serif text-sprout-green mb-2 flex items-center gap-3 after:content-[''] after:h-[1px] after:flex-grow after:bg-sprout-accent"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-[11px] text-sprout-green/60 font-bold uppercase tracking-[0.2em]"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const Card = ({ title, description, badge, icon: Icon }: { title: string; description: string; badge?: string, icon?: any }) => (
  <motion.div 
    whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.95)" }}
    className="glass p-6 rounded-[25px] transition-colors flex flex-col h-full group"
  >
    <div className="flex-1">
      {badge && (
        <span className="inline-block px-3 py-1 bg-sprout-accent text-slate-700 text-[10px] font-bold rounded-[10px] mb-4 uppercase tracking-wider">
          {badge}
        </span>
      )}
      <h3 className="text-lg font-serif mb-2 text-slate-800 group-hover:text-sprout-green transition-colors">{title}</h3>
      <p className="text-slate-600 leading-relaxed text-[12px]">{description}</p>
    </div>
  </motion.div>
);

export default function App() {
  return (
    <div className="p-4 md:p-8 selection:bg-sprout-green selection:text-white">
      <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-[350px_1fr] gap-8 items-start">
        
        {/* Left Sidebar: Hero & Contact */}
        <div className="space-y-6 lg:sticky lg:top-8">
          
          {/* Hero Card */}
          <motion.section 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass rounded-[40px] p-10 md:p-14 lg:p-10 flex flex-col justify-center min-h-[400px] lg:min-h-[500px]"
          >
            <div className="w-10 h-10 bg-sprout-green rounded-tl-full rounded-br-full mb-8" />
            <h1 className="text-7xl lg:text-8xl font-serif italic text-sprout-green leading-none mb-6 tracking-tighter">
              sprout
            </h1>
            <p className="text-lg text-slate-700 leading-relaxed font-sans">
              작은 떨림에서 시작된 이야기를,<br />
              천천히 피워내는 사람.<br />
              <strong className="text-sprout-green">김윤진입니다.</strong>
            </p>
          </motion.section>

          {/* Contact Card (Connection) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass rounded-[30px] p-8"
          >
            <h3 className="text-[11px] font-bold text-sprout-green uppercase tracking-[0.2em] mb-6">Connection</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-[13px]">
                <span className="opacity-50">Phone</span>
                <span className="font-medium">010-3338-3543</span>
              </div>
              <div className="flex justify-between items-center text-[13px]">
                <span className="opacity-50">Email</span>
                <span className="font-medium lowercase">dodo41521@gmail.com</span>
              </div>
              <div className="flex justify-between items-center text-[13px]">
                <span className="opacity-50">Birth</span>
                <span className="font-medium">2006.09.08</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Content: About & Work */}
        <div className="mt-8 lg:mt-0 space-y-8">
          
          {/* About Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-[40px] p-8 md:p-12 shadow-sm"
          >
            <SectionTitle subtitle="Growing Soul">About & Journey</SectionTitle>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h4 className="font-bold text-sm mb-6 flex items-center gap-2">
                    <GraduationCap size={16} className="text-sprout-green" /> Education
                  </h4>
                  <div className="space-y-4">
                    <div className="border-l-2 border-sprout-accent pl-5 py-1">
                      <p className="text-[11px] font-bold text-sprout-green">2026</p>
                      <p className="text-[14px] text-slate-800">한성대학교 문학문화콘텐츠학과 전공</p>
                    </div>
                    <div className="border-l-2 border-sprout-accent pl-5 py-1">
                      <p className="text-[11px] font-bold text-sprout-green">2025</p>
                      <p className="text-[14px] text-slate-800">한성대학교 상상력인재학부 입학</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="font-bold text-sm mb-6 flex items-center gap-2">
                    <Award size={16} className="text-sprout-green" /> Activities
                  </h4>
                  <div className="space-y-4">
                    <div className="border-l-2 border-sprout-accent pl-5 py-1">
                      <p className="text-[11px] font-bold text-sprout-green">2026 ~</p>
                      <p className="text-[14px] text-slate-800">한성대학교 영화 동아리 '영화 다솜' 감독 팀장</p>
                      <p className="text-[11px] text-slate-400 mt-1">FHFP 2026 운영위원회 기획팀원</p>
                    </div>
                    <div className="border-l-2 border-sprout-accent pl-5 py-1">
                      <p className="text-[11px] font-bold text-sprout-green">2025 ~</p>
                      <p className="text-[14px] text-slate-800">한성대학교 영화 동아리 '영화 다솜' 활동</p>
                      <p className="text-[11px] text-slate-400 mt-1">한국사능력검정시험 2급 취득 (2025.08.09)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Work Section */}
          <section className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card 
                badge="Film / Thriller"
                title="단편영화 <독>"
                description="심리 스릴러 장르의 감독 및 제작 총괄. 긴장감 넘치는 연출과 미장센을 통해 인간의 내면을 탐구했습니다."
              />
              <Card 
                badge="Film / Buddy"
                title="단편영화 <너에게 닿기를>"
                description="청춘의 우정을 다룬 버디무비. 2026 동계 영화제 당선작으로 따뜻한 감성과 서사를 담았습니다."
              />
              <Card 
                badge="Social Media"
                title="교회 인스타그램 운영"
                description="콘텐츠 기획 및 릴스 제작을 담당하여 누적 조회수 3.3만을 기록하는 등 커뮤니티 활성화에 기여했습니다."
              />
              <Card 
                badge="Festival Planning"
                title="FHFP 영화제 기획"
                description="전국 대학 연합 영화제의 전반적인 기획 단계에 참여하여 문화 예술의 장을 마련하는 경험을 쌓았습니다."
              />
            </div>
          </section>

          {/* Footer Footer */}
          <footer className="pt-12 pb-8 text-center text-slate-400 text-[10px] uppercase tracking-[0.3em]">
            <p className="font-serif italic text-slate-500 normal-case tracking-normal mb-4">
              "작은 새싹이 커다란 나무가 되듯, 제 이야기도 끊임없이 성장하고 있습니다."
            </p>
            &copy; 2026 Kim Yoon-jin. All Rights Reserved.
          </footer>
        </div>
      </div>
    </div>
  );
}
