import React from 'react';
import { Heart } from 'lucide-react';

/**
 * フッターコンポーネント
 * サイトの一番下に表示される部分です
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 bg-gradient-to-r from-cyan-100 via-blue-100 to-sky-100">
      <div className="max-w-4xl mx-auto text-center">
        {/* メッセージ */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <p className="text-gray-600">Made with</p>
          <p className="text-gray-600">by えいでん</p>
        </div>

        {/* コピーライト */}
        <p className="text-gray-500 text-sm">
          © {currentYear} eiden. All rights reserved.
        </p>

        {/* 装飾的な区切り線 */}
        <div className="mt-6 flex items-center justify-center gap-2">
          <div className="w-8 h-1 bg-cyan-300 rounded-full"></div>
          <div className="w-8 h-1 bg-blue-300 rounded-full"></div>
          <div className="w-8 h-1 bg-sky-300 rounded-full"></div>
        </div>
      </div>
    </footer>
  );
}