/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import React, { useState } from 'react';
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
  ChevronDown,
  X,
  ChevronLeft,
  ChevronRight
} from "lucide-react";



interface Project {
  id: string;
  badge: string;
  title: string;
  description: string;
  detailTitle: string;
  subtitle: string;
  period: string;
  members: string;
  body: string;
  focusPoints: string[];
}

// Last sync attempt: 2026-04-17
const PROJECTS: Project[] = [
  {
    id: "poison",
    badge: "Film / Thriller",
    title: "단편영화 <독>",
    description: "심리 스릴러 장르의 감독 및 제작 총괄. 긴장감 넘치는 연출과 미장센을 통해 인간의 내면을 탐구했습니다.",
    detailTitle: "5분 단편 영화 <독> 제작",
    subtitle: "2025년 1학기 한성대학교 영화제작 동아리 '영화 다솜' 감독\n심리 스릴러 장르의 단편영화 <독> 을 제작하였습니다.",
    period: "2025년 5월 1일 ~ 6월 30일",
    members: "6명",
    body: `시나리오 및 콘티 작성, 일촬표 작성, 촬영 디렉팅 등 작품 제작의 총괄을 맡았습니다.\n\n1학년으로서 첫 팀 작업이었고, 팀원 대부분이 선배여서 초반에는 역할 분배와 현장 운영에 서툶이 있었습니다. 하지만 촬영 딜레이를 방지하기 위해 디렉팅을 최대한 구체적으로 준비하였고 카메라 리허설이 어려운 장면의 경우, 촬영용 콘티를 추가 제작해 공유했습니다.\n\n그 결과 촬영 현장에서 큰 딜레이 없이 장면을 완성할 수 있었습니다. 이를 토대로 팀원 간의 소통과 감독의 디렉팅이 매우 중요함을 깨달았습니다. 이후에는 팀 운영과 사전 준비를 더욱 체계적으로 설계하는 데 기준을 두게 되었습니다.`,
    focusPoints: [
      "작품 제작 전반의 총괄 디렉팅 경험",
      "구체적인 디렉팅 준비로 촬영 지연 방지",
      "팀 운영 및 체계적인 사전 준비 역량 강화"
    ]
  },
  {
    id: "reach-you",
    badge: "Film / Buddy",
    title: "단편영화 <너에게 닿기를>",
    description: "청춘의 우정을 다룬 버디무비. 2026 동계 영화제 당선작으로 따뜻한 감성과 서사를 담았습니다.",
    detailTitle: "20분 단편 영화 <너에게 닿기를> 제작",
    subtitle: "2025년 2학기 한성대학교 영화제작 동아리 '영화 다솜' 감독\n단편영화 <너에게 닿기를> 을 제작하였습니다.",
    period: "2025년 9월 14일 ~ 12월 26일",
    members: "10명",
    body: `시나리오 및 콘티 작성, 일촬표 작성, 촬영 디렉팅 등 작품 제작의 총괄을 맡았습니다.\n\n제작 1에서 미숙한 점을 보완하기 위해 효율적인 역할 분배와 체계적인 팀 운영을 위해 노력하였고 장비 및 로케이션 협의, 편집에도 더욱 신경을 썼습니다.\n\n이를 통해 보다 완성도 있는 작품을 제작했고, 동아리 상영회 때 '동계 영화 당선작'에 선정되어 현재는 이 작품을 30분 이상의 영화로 추가 제작 중에 있습니다.`,
    focusPoints: [
      "효율적인 역할 분배 및 체계적인 팀 운영",
      "로케이션 협의 및 편집 등 작품 완성도 보완",
      "동계 영화 당선 및 장편화 제작 진행"
    ]
  },
  {
    id: "insta",
    badge: "Social Media",
    title: "교회 인스타그램 운영",
    description: "콘텐츠 기획 및 릴스 제작을 담당하여 누적 조회수 3.3만을 기록하는 등 커뮤니티 활성화에 기여했습니다.",
    detailTitle: "수산교회 청소년부 인스타그램 운영",
    subtitle: "수산교회 청소년부 미디어 교사 및 인스타그램 운영진\n콘텐츠 기획 및 릴스 제작을 총괄하고 있습니다.",
    period: "2025년 1월 5일 ~ 현재",
    members: "미리캔버스, VLLO",
    body: `수산 교회 청소년부에서 미디어 교사로 활동하며 청소년부 아카이브용으로 직접 인스타그램 계정을 만들어 온라인 주보, 예배 스케치, 릴스, 수련회 영상 편집 등을 제작 및 총괄하고 있습니다.\n\n현재 트렌드에 맞추어 릴스를 제작하여 최대 조회수 3.3만 회에 도달했고, 계정을 직접 운영함으로써 콘텐츠 기획 능력과 디자인 및 편집 실력이 향상되었습니다.`,
    focusPoints: [
      "인스타그램 아카이브 계정 기획 및 운영",
      "릴스 제작을 통한 조회수 3.3만 회 달성",
      "콘텐츠 기획 및 디자인/편집 실력 향상"
    ]
  },
  {
    id: "fhfp",
    badge: "Festival Planning",
    title: "FHFP 영화제 기획",
    description: "전국 대학 연합 영화제의 전반적인 기획 단계에 참여하여 문화 예술의 장을 마련하는 경험을 쌓았습니다.",
    detailTitle: "FHFP 2026 운영위원회 기획팀원",
    subtitle: "전국 18개 이상의 대학 연합 FHFP 영화제 기획팀\n운영위원회 소속으로 영화제의 전반적인 기획을 담당합니다.",
    period: "2026.03 ~ 07",
    members: "운영진 전체",
    body: `여러 대학의 영화 동아리들이 하나의 목표를 위해 모여 영화제를 만들어가는 과정에 기획팀원으로 참여하며, 단순한 행사 준비를 넘어 다양한 사람들과의 협업과 소통을 경험하고 있습니다.\n\n각 학교마다 서로 다른 분위기와 제작 방식, 그리고 영화에 대한 관점이 존재하기 때문에 이를 조율하고 하나의 방향성으로 이끌어가는 과정은 쉽지 않지만, 그만큼 의미 있는 배움의 기회가 되고 있습니다.`,
    focusPoints: [
      "전국 18개 대학 연합 영화제 기획",
      "다양한 동아리 간의 제작 방식 조율",
      "협업과 소통 중심의 운영 경험"
    ]
  }
];

const SectionTitle = ({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) => (
  <div className="mb-12 text-left group">
    <motion.h2 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-serif italic text-sprout-green mb-4 flex items-center gap-6 after:content-[''] after:h-[1px] after:flex-grow after:bg-sprout-accent overflow-hidden relative"
    >
      <span className="uppercase tracking-tighter relative z-10">{children}</span>
      <motion.div 
        animate={{ x: ['-100%', '200%'] }}
        transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent w-full skew-x-12 z-0"
      />
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-[12px] text-sprout-green/60 font-bold uppercase tracking-[0.3em] ml-1"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const Sparkle = () => {
  const sparkles = Array.from({ length: 15 });
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {sparkles.map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            opacity: 0, 
            x: Math.random() * 100 + "%", 
            y: Math.random() * 100 + "%",
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{ 
            opacity: [0, 0.4, 0],
            y: ["-5%", "5%"],
            scale: [0.5, 1, 0.5]
          }}
          transition={{ 
            duration: Math.random() * 3 + 2, 
            repeat: Infinity, 
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
          className="absolute w-1 h-1 bg-white rounded-full blur-[1px]"
        />
      ))}
    </div>
  );
};

const Card: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => (
  <motion.div 
    layoutId={`card-${project.id}`}
    onClick={onClick}
    whileHover={{ x: 10, backgroundColor: "rgba(255, 255, 255, 0.5)" }}
    className="p-6 rounded-[20px] transition-all flex flex-col group cursor-pointer border border-transparent"
  >
    <div className="flex-1">
      <span className="inline-block px-3 py-1 bg-sprout-accent text-slate-700 text-[10px] font-bold rounded-[10px] mb-4 uppercase tracking-wider">
        {project.badge}
      </span>
      <h3 className="text-lg font-bold mb-2 text-slate-800 group-hover:text-sprout-green transition-colors">{project.title}</h3>
      <p className="text-slate-600 leading-relaxed text-[10px] font-bold">{project.description}</p>
    </div>
  </motion.div>
);


const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-slate-900/40 backdrop-blur-sm"
    onClick={onClose}
  >
    <motion.div
      layoutId={`card-${project.id}`}
      className="bg-white w-full max-w-2xl max-h-[85vh] rounded-[40px] shadow-2xl overflow-hidden flex flex-col"
      onClick={e => e.stopPropagation()}
    >
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <div className="p-8 md:p-12">
          <div className="flex justify-between items-start mb-8">
            <div className="flex-1">
              <span className="inline-block px-3 py-1 bg-sprout-accent text-slate-700 text-[10px] font-bold rounded-[10px] mb-4 uppercase tracking-wider">
                {project.badge}
              </span>
              <h2 className="text-[32px] md:text-[44px] font-bold text-slate-900 mb-4 tracking-tight leading-tight">{project.detailTitle}</h2>
              <div className="text-[16px] text-sprout-green font-bold leading-relaxed border-l-2 border-sprout-accent pl-4 font-sans">
                {project.subtitle.split("\n").map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors ml-4 shrink-0">
              <X className="text-slate-400" />
            </button>
          </div>

          <div className="space-y-12">
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-100 pb-2">작품 개요</h4>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-[10px] font-bold text-sprout-green uppercase tracking-widest mb-1 font-sans">제작 기간</p>
                  <p className="text-slate-800 font-medium">{project.period}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-sprout-green uppercase tracking-widest mb-1 font-sans">
                    {project.id === "insta" ? "제작 프로그램" : "제작 인원"}
                  </p>
                  <p className="text-slate-800 font-medium">{project.members}</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-100 pb-2">상세 이야기</h4>
              <div className="text-slate-600 leading-relaxed text-[15px] space-y-6">
                {project.body.split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-[30px] border border-slate-100">
              <h4 className="text-xs font-bold text-sprout-green uppercase tracking-widest mb-6 font-sans text-center">핵심 포인트</h4>
              <ul className="space-y-4">
                {project.focusPoints.map((point, index) => (
                  <li key={index} className="flex gap-4 items-center bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                    <span className="w-2 h-2 rounded-full bg-sprout-green shrink-0" />
                    <span className="text-sm text-slate-700 font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6 md:px-12 md:py-8 bg-slate-50 border-t border-slate-100 flex justify-center">
        <button 
          onClick={onClose}
          className="px-12 py-4 bg-slate-900 text-white rounded-full font-bold text-sm hover:scale-105 transition-all shadow-xl active:scale-95"
        >
          돌아가기
        </button>
      </div>
    </motion.div>
  </motion.div>
);

const Navbar = () => (
  <motion.nav 
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center glass border-none shadow-sm"
  >
    <div className="flex items-center gap-2">
      <div className="w-6 h-6 bg-sprout-green rounded-tl-full rounded-br-full" />
      <span className="font-serif italic text-sprout-green font-bold tracking-tight">sprout.</span>
    </div>
    <div className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest text-slate-500">
      <a href="#about" className="hover:text-sprout-green transition-colors">About</a>
      <a href="#work" className="hover:text-sprout-green transition-colors">Work</a>
    </div>
    <button className="bg-sprout-green text-white text-[10px] uppercase tracking-widest px-4 py-2 rounded-full font-bold hover:bg-slate-800 transition-colors">
      Let's Talk
    </button>
  </motion.nav>
);

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="pt-24 p-4 md:p-8 selection:bg-sprout-green selection:text-white">
      <Sparkle />
      <Navbar />
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

          {/* Contact Card (Connection) - Restored */}
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
            id="about"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-[40px] p-8 md:p-12 shadow-sm scroll-mt-28"
          >
            <SectionTitle subtitle="Growing Soul">About</SectionTitle>
            
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
                  <div className="space-y-6">
                    <div className="border-l-2 border-sprout-accent pl-5 space-y-2">
                      <p className="text-[11px] font-bold text-sprout-green">2026 ~</p>
                      <div className="space-y-1">
                        <p className="text-[14px] text-slate-800">한성대학교 영화 동아리 '영화 다솜' 감독 팀장</p>
                        <p className="text-[14px] text-slate-800">FHFP 2026 운영위원회 기획팀원</p>
                      </div>
                    </div>
                    <div className="border-l-2 border-sprout-accent pl-5 space-y-2">
                      <p className="text-[11px] font-bold text-sprout-green">2025 ~</p>
                      <div className="space-y-1">
                        <p className="text-[14px] text-slate-800">한성대학교 영화 동아리 '영화 다솜' 활동</p>
                        <p className="text-[14px] text-slate-800">한국사능력검정시험 2급 취득 (2025.08.09)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Work Section */}
          <section id="work" className="bg-white rounded-[40px] p-8 md:p-12 shadow-sm scroll-mt-28">
            <SectionTitle subtitle="Selected Projects">Work</SectionTitle>
            <div className="flex flex-col">
              {PROJECTS.map((project, index) => (
                <React.Fragment key={project.id}>
                  <Card 
                    project={project}
                    onClick={() => setSelectedProject(project)}
                  />
                  {index < PROJECTS.length - 1 && (
                    <div className="h-[1px] w-full bg-sprout-green/20 my-2" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </section>

          {/* Footer Footer */}
          <footer className="pt-12 pb-8 text-center text-slate-400 text-[10px] uppercase tracking-[0.3em]">
            <p className="font-serif italic text-slate-500 normal-case tracking-normal mb-4">
              "작은 새싹이 커다란 나무가 되듯, 제 이야기도 끊임없이 성장하고 있습니다."
            </p>
            &copy; 2026 Kim Yoon-jin. All Rights Reserved. (v1.4.6)
          </footer>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
