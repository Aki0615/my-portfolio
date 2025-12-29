import React from 'react';
import { Code2, Palette } from 'lucide-react';
import { SiHtml5, SiCss3, SiC, SiPython, SiFlutter, SiJupyter, SiGithub, SiFigma, SiCanva } from 'react-icons/si';

/**
 * スキルセクション
 * 技術スキルとツールを表示します
 */
export function SkillsSection() {
  // プログラミング言語とツールのリスト
  const programmingSkills = [
    { name: 'HTML', color: 'from-orange-400 to-orange-500', icon: <SiHtml5 className="w-5 h-5 mr-2" /> },
    { name: 'CSS', color: 'from-blue-400 to-blue-500', icon: <SiCss3 className="w-5 h-5 mr-2" /> },
    { name: 'C', color: 'from-cyan-400 to-cyan-500', icon: <SiC className="w-5 h-5 mr-2" /> },
    { name: 'Python', color: 'from-sky-400 to-sky-500', icon: <SiPython className="w-5 h-5 mr-2" /> },
    { name: 'Flutter', color: 'from-cyan-400 to-blue-500', icon: <SiFlutter className="w-5 h-5 mr-2" /> },
    { name: 'Jupyter', color: 'from-blue-400 to-indigo-500', icon: <SiJupyter className="w-5 h-5 mr-2" /> },
  ];

  const toolSkills = [
    { name: 'GitHub', color: 'from-gray-700 to-gray-800', icon: <SiGithub className="w-5 h-5 mr-2" /> },
    { name: 'Figma', color: 'from-cyan-400 to-blue-500', icon: <SiFigma className="w-5 h-5 mr-2" /> },
    { name: 'Canva', color: 'from-teal-400 to-cyan-500', icon: <SiCanva className="w-5 h-5 mr-2" /> },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-white/50">
      <div className="max-w-6xl mx-auto">
        {/* セクションタイトル */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <Code2 className="w-8 h-8 text-cyan-500" />
          <h2 className="text-4xl">Skills</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* プログラミング言語 */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <div className="flex items-center gap-2 mb-6">
              <Code2 className="w-6 h-6 text-cyan-500" />
              <h3 className="text-2xl">プログラミング言語</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {programmingSkills.map((skill) => (
                <div
                  key={skill.name}
                  className={`flex items-center px-6 py-3 bg-gradient-to-r ${skill.color} text-white rounded-full shadow-md hover:scale-105 transition-transform`}
                >
                  {skill.icon}
                  {skill.name}
                </div>
              ))}
            </div>
          </div>

          {/* デザイン・ツール */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <div className="flex items-center gap-2 mb-6">
              <Palette className="w-6 h-6 text-cyan-500" />
              <h3 className="text-2xl">デザイン・ツール</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {toolSkills.map((skill) => (
                <div
                  key={skill.name}
                  className={`flex items-center px-6 py-3 bg-gradient-to-r ${skill.color} text-white rounded-full shadow-md hover:scale-105 transition-transform`}
                >
                  {skill.icon}
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}