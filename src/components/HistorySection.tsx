import React from 'react';
import { Calendar } from 'lucide-react';

/**
 * 履歴セクション
 * 生い立ちや学歴をタイムライン形式で表示します
 */
export function HistorySection() {
  // 履歴データ
  const history = [
    {
      year: '2006年6月',
      title: '誕生',
      description: '和歌山県新宮市に生まれる',
      color: 'from-cyan-400 to-cyan-500',
    },
    {
      year: '2022年4月 - 2025年3月',
      title: '高校入学',
      description: '三重県立紀南高等学校（現在は三重県立熊野青藍高等学校）',
      color: 'from-blue-400 to-blue-500',
    },
    {
      year: '2025年4月 - 2029年3月（予定）',
      title: '大学入学',
      description: '愛知工業大学 電気学科 電子情報工学専攻',
      color: 'from-sky-400 to-sky-500',
    },
    {
      year: '2025年4月',
      title: 'サークル活動',
      description: 'システム工学研究会に入る',
      color: 'from-teal-400 to-cyan-500',
    },
  ];

  return (
    <section id="history" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* セクションタイトル */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <Calendar className="w-8 h-8 text-cyan-500" />
          <h2 className="text-4xl">History</h2>
        </div>

        {/* タイムライン */}
        <div className="relative">
          {/* タイムラインの縦線 */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-300 via-blue-300 to-sky-300 transform md:-translate-x-1/2"></div>

          {/* タイムラインアイテム */}
          <div className="space-y-12">
            {history.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* 丸いマーカー */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-white border-4 border-cyan-400 rounded-full transform -translate-x-1/2 z-10"></div>

                {/* コンテンツカード */}
                <div className="ml-16 md:ml-0 md:w-5/12">
                  <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                    {/* 年 */}
                    <div
                      className={`inline-block px-4 py-2 bg-gradient-to-r ${item.color} text-white rounded-full text-sm mb-3`}
                    >
                      {item.year}
                    </div>
                    {/* タイトル */}
                    <h3 className="text-xl mb-2">{item.title}</h3>
                    {/* 説明 */}
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>

                {/* スペーサー（PCビュー用） */}
                <div className="hidden md:block md:w-2/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}