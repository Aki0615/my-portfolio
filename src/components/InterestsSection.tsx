import React from 'react';
import { Heart } from 'lucide-react';
import { FaLaptopCode, FaPaintBrush, FaBookOpen, FaBaseballBall } from 'react-icons/fa';

/**
 * 好きなことセクション
 * 趣味や好きなことを自由に書き加えられるセクションです
 */
export function InterestsSection() {
  // 好きなことのリスト（ここを編集して追加・変更できます）
  const interests = [
    {
      title: 'プログラミング',
      description: '新しい技術を学んで、アプリやWebサイトを作ることが好きです',
      icon: <FaLaptopCode className="text-cyan-500 text-5xl mb-4 drop-shadow" />,
    },
    {
      title: 'デザイン',
      description: 'FigmaやCanvaを使って、きれいなデザインを作るのが楽しいです',
      icon: <FaPaintBrush className="text-cyan-500 text-5xl mb-4 drop-shadow" />,
    },
    {
      title: '学習',
      description: '新しいことを学んで、成長していくことにやりがいを感じます',
      icon: <FaBookOpen className="text-cyan-500 text-5xl mb-4 drop-shadow" />,
    },
    {
      title: 'スポーツ',
      description: '小・中学校までは野球と高校はバドミントンをしていました。体を動かすことが大好きです。',
      icon: <FaBaseballBall className="text-cyan-500 text-5xl mb-4 drop-shadow" />,
    }
    // ここに新しい趣味を追加できます
    // 例：
    // {
    //   title: '音楽',
    //   description: '音楽を聴くことが好きです',
    //   emoji: '🎵',
    // },
  ];

  return (
    <section id="interests" className="py-20 px-4 bg-white/50">
      <div className="max-w-6xl mx-auto">
        {/* セクションタイトル */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <Heart className="w-8 h-8 text-cyan-500" />
          <h2 className="text-4xl">Interests</h2>
        </div>

        {/* カードグリッド */}
        <div className="grid md:grid-cols-3 gap-6">
          {interests.map((interest, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              {/* アイコン */}
              <div>{interest.icon}</div>
              {/* タイトル */}
              <h3 className="text-2xl mb-3 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                {interest.title}
              </h3>
              {/* 説明 */}
              <p className="text-gray-600 leading-relaxed">
                {interest.description}
              </p>
            </div>
          ))}
        </div>

        {/* 追加メモ */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-cyan-100 to-blue-100 rounded-2xl px-8 py-4">
            <p className="text-gray-700">
              ✨ ここに好きなことを自由に追加・編集できます ✨
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}