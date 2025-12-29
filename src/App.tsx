import React from 'react';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { HistorySection } from './components/HistorySection';
import { InterestsSection } from './components/InterestsSection';
import { Footer } from './components/Footer';
import { MenuBar } from './components/MenuBar';

/**
 * メインアプリケーションコンポーネント
 * 各セクションを順番に表示します
 */
export default function App() {
  return (
    <>
      <MenuBar />
      <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-sky-50">
        {/* ヒーローセクション（トップの大きな見出し部分） */}
        <HeroSection />
        
        {/* 自己紹介セクション */}
        <AboutSection />
        
        {/* スキルセクション */}
        <SkillsSection />
        
        {/* 履歴セクション */}
        <HistorySection />
        
        {/* 好きなことセクション */}
        <InterestsSection />
        
        {/* フッター */}
        <Footer />
      </div>
    </>
  );
}