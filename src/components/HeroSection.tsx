import React from 'react';
import { Sparkles } from 'lucide-react';

/**
 * ヒーローセクション
 * サイトのトップに表示される大きな見出し部分です
 */
export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* 背景装飾 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-36 h-36 bg-sky-200 rounded-full opacity-20 blur-3xl"></div>
      </div>

      {/* メインコンテンツ */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        
        {/* 名前 */}
        <h1 className="text-5xl md:text-7xl mb-6 font-black">
          えいでん
        </h1>

        {/* サブタイトル */}
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          Portfolio
        </p>

        {/* スクロール促進（三角アイコン） */}
        <div className="mt-16 flex justify-center animate-bounce">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="16,24 6,12 26,12" fill="#60A5FA" />
          </svg>
        </div>
      </div>
    </section>
  );
}