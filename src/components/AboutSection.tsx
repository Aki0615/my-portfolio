import React from 'react';
import { User } from 'lucide-react';

/**
 * 自己紹介セクション
 * 名前と概要を表示します
 */
export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* セクションタイトル */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <User className="w-8 h-8 text-cyan-500" />
          <h2 className="text-4xl">About Me</h2>
        </div>

        {/* カード */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          {/* 名前 */}
          <div className="mb-8">
            <h3 className="text-2xl mb-2 text-cyan-600">えいでん</h3>
            <p className="text-lg text-gray-500">eiden</p>
          </div>

          {/* 概要エリア */}
          <div className="space-y-4">
            <h4 className="text-xl text-gray-700">概要</h4>
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-6">
              <p className="text-gray-700 leading-relaxed">
                こんにちは！<br />
                打越 映伝（うちこし あきつぐ）こと、えいでんです。<br />
                愛知工業大学電気学科電子情報工学専攻に在籍するB1の学生です。システム工学研究会に所属し、様々な技術を学んでいます。<br />
                最近はFlutterを中心にフロントエンド開発をしています。<br />
                よろしくお願いします。
              </p>
              {/* ここに自由に概要を追加・編集できます */}
            </div>
          </div>

          {/* 出身地 */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-600">
              <span className="inline-block w-24">出身地：</span>
              <span className="text-gray-800">和歌山県新宮市</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}