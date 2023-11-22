//トップレベルのプロフィールコンポーネント
import React from "react";
import Layout from '../components/layouts';

export default function profile() {
  return (
    <Layout>
      <main className="flex flex-col flex-1 p-4 overflow-auto items-center">
        <div className="mt-5 flex flex-col items-center w-6/12 py-2 border-4 border-blue-400 rounded-lg">
          <h1 className="mt-10 text-2xl text-gray-400 font-banana">プロフィール</h1>
          <div className="flex items-center mt-5 w-8/12">
            <label className="text-gray-600 w-1/4">氏名（漢字）</label>
            <input className="p-2 border-2 rounded-lg w-3/4 px-10" />
          </div>
          <div className="flex items-center mt-3 w-8/12">
            <label className="text-gray-600 w-1/4">氏名（カナ）</label>
            <input className="p-2 border-2 rounded-lg w-3/4 px-10" />
          </div>
          <div className="flex items-center mt-3 w-8/12">
            <label className="text-gray-600 w-1/3">電話番号</label>
            <input className="p-2 border-2 rounded-lg w-2/3 px-10" />
          </div>
          <div className="flex items-center mt-3 w-8/12">
            <label className="text-gray-600 w-1/3">性別</label>
            <input className="p-2 border-2 rounded-lg w-2/3 px-10" />
          </div>
          <div className="flex items-center mt-3 w-8/12">
            <label className="text-gray-600 w-1/3">学科</label>
            <input className="p-2 border-2 rounded-lg w-2/3 px-10" />
          </div>
          <div className="flex items-center mt-3 w-8/12">
            <label className="text-gray-600 w-1/3">学年</label>
            <input className="p-2 border-2 rounded-lg w-2/3 px-10" />
          </div>
          <div className="flex items-center mt-3 w-8/12">
            <label className="text-gray-600 w-1/3">卒業予定</label>
            <input className="p-2 border-2 rounded-lg w-2/3 px-10" />
          </div>
          <div className="flex items-center mt-3 w-8/12">
            <label className="text-gray-600 w-1/3">志望業界</label>
            <input className="p-2 border-2 rounded-lg w-2/3 px-10" />
          </div>
          <div className="flex items-center mt-3 w-8/12">
            <label className="text-gray-600 w-1/3">志望勤務地</label>
            <input className="p-2 border-2 rounded-lg w-2/3 px-10" />
          </div>
          <div className="flex items-center mt-3 w-8/12">
            <label className="text-gray-600 w-1/3">保有資格</label>
            <input className="p-2 border-2 rounded-lg w-2/3 px-10" />
          </div>

          <button className="flex items-center px-20 py-3 text-center text-white bg-blue-600 rounded-xl hover:bg-blue-700 mt-7 mb-4">確認する</button>
        </div>
      </main>

    </Layout>
  );
}
