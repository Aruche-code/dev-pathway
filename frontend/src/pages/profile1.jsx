//トップレベルのプロフィールコンポーネント
import Layout from '../components/layouts';

export default function profile() {
  return (
    <Layout>
      
    <div class="flex flex-col">
      <div class="p-1.5 px-2 inline-block align-middle">
        <div class="bg-white border border-gray-500 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
        <div class="px-6 py-2 border-gray-200 dark:border-gray-700">
            <h2 class="text-xl font-semibold flex justify-center text-gray-800 dark:text-gray-200">
              メールアドレス
            </h2>
            <div class="flex justify-center">
            <div class="flex-shrink-0">
              <img class="h-20 w-20 rounded-full sm:h-24 sm:w-24" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description"></img>
            </div>
            </div>
   
        </div>
        
      <div class="flex flex-col">
        <div class="p-10 inline-block align-middle">
          <div class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
          <div class="px-0 py-0 border-gray-200 dark:border-gray-700">
            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            
            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
              <td scope="col" class="px-6 py-3 text-start min-w-[16rem] border-r">
                  <span class="text-xs font-semibold uppercase tracking-wide flex justify-center text-gray-800 dark:text-gray-200">
                    氏名(漢字)
                  </span>
                </td>
                <td scope="col" class="px-6 py-3 text-start min-w-[16rem]">
                  <span class="text-xs font-semibold uppercase tracking-wide flex justify-center text-gray-800 dark:text-gray-200">
                    杉浦怜奈
                  </span>
                </td>
              </tr>
              </tbody>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
              <td scope="col" class="px-6 py-3 text-start min-w-[16rem] border-r">
                  <span class="text-xs font-semibold uppercase tracking-wide flex justify-center text-gray-800 dark:text-gray-200">
                    氏名(カナ)
                  </span>
                </td>
                <td scope="col" class="px-6 py-3 text-start min-w-[16rem]">
                  <span class="text-xs font-semibold uppercase tracking-wide flex justify-center text-gray-800 dark:text-gray-200">
                    スギウラレイナ
                  </span>
                </td>
              </tr>
              </tbody>
              <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
              <td scope="col" class="px-6 py-3 text-start min-w-[16rem] border-r">
                  <span class="text-xs font-semibold uppercase tracking-wide flex justify-center text-gray-800 dark:text-gray-200">
                    電話番号
                  </span>
                </td>
                <td scope="col" class="px-6 py-3 text-start min-w-[16rem]">
                  <span class="text-xs font-semibold uppercase tracking-wide flex justify-center text-gray-800 dark:text-gray-200">
                    000-0000-0000
                  </span>
                </td>
              </tr>
              </tbody>
              <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
              <td scope="col" class="px-6 py-3 text-start min-w-[16rem] border-r">
                  <span class="text-xs font-semibold uppercase tracking-wide flex justify-center text-gray-800 dark:text-gray-200">
                    学科
                  </span>
                </td>
                <td scope="col" class="px-6 py-3 text-start min-w-[16rem]">
                  <span class="text-xs font-semibold uppercase tracking-wide flex justify-center text-gray-800 dark:text-gray-200">
                    ITエキスパート
                  </span>
                </td>
              </tr>
              </tbody>
              <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
              <td scope="col" class="px-6 py-3 text-start min-w-[16rem] border-r">
                  <span class="text-xs font-semibold uppercase tracking-wide flex justify-center text-gray-800 dark:text-gray-200">
                    学年
                  </span>
                </td>
                <td scope="col" class="px-6 py-3 text-start min-w-[16rem]">
                  <span class="text-xs font-semibold uppercase tracking-wide flex justify-center text-gray-800 dark:text-gray-200">
                    3年
                  </span>
                </td>
              </tr>
              </tbody>
              <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
              <td scope="col" class="px-6 py-3 text-start min-w-[16rem] border-r">
                  <span class="text-xs font-semibold uppercase tracking-wide flex justify-center text-gray-800 dark:text-gray-200">
                    卒業予定
                  </span>
                </td>
                <td scope="col" class="px-6 py-3 text-start min-w-[16rem]">
                  <span class="text-xs font-semibold uppercase tracking-wide flex justify-center text-gray-800 dark:text-gray-200">
                    2025年3月
                  </span>
                </td>
              </tr>
              </tbody>
              <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
              <td scope="col" class="px-6 py-3 text-start min-w-[16rem] border-r">
                  <span class="text-xs font-semibold uppercase tracking-wide flex justify-center text-gray-800 dark:text-gray-200">
                    志望業界
                  </span>
                </td>
                <td scope="col" class="px-6 py-3 text-start whitespace-nowrap min-w-[16rem]">
                  <span class="text-xs font-semibold uppercase tracking-wide flex justify-center text-gray-800 dark:text-gray-200">
                    IT系
                  </span>
                </td>
              </tr>
              </tbody>
              <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
              <td scope="col" class="px-6 py-3 text-start min-w-[16rem] border-r">
                  <span class="text-xs font-semibold uppercase tracking-wide flex justify-center text-gray-800 dark:text-gray-200">
                    志望勤務地
                  </span>
                </td>
                <td scope="col" class="px-6 py-3 text-start min-w-[16rem]">
                  <span class="text-xs font-semibold uppercase tracking-wide flex justify-center text-gray-800 dark:text-gray-200">
                    兵庫県
                  </span>
                </td>
              </tr>
              </tbody>
              <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
              <td scope="col" class="px-6 py-3 text-start min-w-[16rem] border-r">
                  <span class="text-xs font-semibold uppercase tracking-wide flex justify-center text-gray-800 dark:text-gray-200">
                    保有資格
                  </span>
                </td>
                <td scope="col" class="px-6 py-3 text-start min-w-[16rem]">
                  <span class="text-xs font-semibold uppercase tracking-wide flex justify-center text-gray-800 dark:text-gray-200">
                    基本情報技術者試験
                  </span>
                </td>
              </tr>
              </tbody>
              
            </table>
            </div>
          </div>
          </div>
          </div>
          <div class="flex justify-end">
          <button class="mr-10 mb-5 py-2 px-6 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-green-500 text-white shadow-sm hover:bg-green-700 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
          編集
          </button>
          </div>
          
          </div>
          </div>
          </div>
          
    
    </Layout>
  );
}
