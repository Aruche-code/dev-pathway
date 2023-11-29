//トップレベルのプロフィールコンポーネント
import Layout from '../components/layouts';
import Link from 'next/link';

export default function profile() {
  return (
    <Layout>

      <div class="flex flex-col justify-center items-center">
        <div class="p-1.5 px-2 inline-block w-6/12">
          <div class="bg-white border-4 border-blue-400 rounded-lg shadow-sm overflow-hidden">
            <div class="px-6 py-2 border-gray-200">
              <h2 class="text-xl font-semibold flex justify-center text-gray-800 mt-6">
                メールアドレス
              </h2>
            </div>

            <div class="flex flex-col justify-center items-center">
              <div class="p-2 inline-block w-8/12">
                <div class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                  <div class="px-0 py-0 border-gray-200">
                    <table class="min-w-full divide-y divide-gray-200">

                      <tbody class="divide-y divide-gray-200">
                        <tr>
                          <td scope="col" class="px-6 py-3 text-start   border-r">
                            <span class="text-xs font-semibold uppercase tracking-wide flex justify-center text-gray-800">
                              氏名(漢字)
                            </span>
                          </td>
                          <td scope="col" class="px-6 py-3 text-start  ">
                            <span class="text-xs font-semibold uppercase tracking-wide flex justify-center text-gray-800">
                              杉浦怜奈
                            </span>
                          </td>
                        </tr>
                      </tbody>
                      <tbody class="divide-y divide-gray-200">
                        <tr>
                          <td scope="col" class="px-6 py-3 text-start   border-r">
                            <span class="text-xs font-semibold uppercase tracking-wide flex justify-center text-gray-800">
                              氏名(カナ)
                            </span>
                          </td>
                          <td scope="col" class="px-6 py-3 text-start  ">
                            <span class="text-xs font-semibold uppercase tracking-wide flex justify-center text-gray-800">
                              スギウラレイナ
                            </span>
                          </td>
                        </tr>
                      </tbody>
                      <tbody class="divide-y divide-gray-200">
                        <tr>
                          <td scope="col" class="px-6 py-3 text-start   border-r">
                            <span class="text-xs font-semibold uppercase tracking-wide flex justify-center text-gray-800">
                              電話番号
                            </span>
                          </td>
                          <td scope="col" class="px-6 py-3 text-start  ">
                            <span class="text-xs font-semibold uppercase tracking-wide flex justify-center text-gray-800">
                              000-0000-0000
                            </span>
                          </td>
                        </tr>
                      </tbody>
                      <tbody class="divide-y divide-gray-200">
                        <tr>
                          <td scope="col" class="px-6 py-3 text-start   border-r">
                            <span class="text-xs font-semibold uppercase tracking-wide flex justify-center text-gray-800">
                              学科
                            </span>
                          </td>
                          <td scope="col" class="px-6 py-3 text-start  ">
                            <span class="text-xs font-semibold uppercase tracking-wide flex justify-center text-gray-800">
                              ITエキスパート
                            </span>
                          </td>
                        </tr>
                      </tbody>
                      <tbody class="divide-y divide-gray-200">
                        <tr>
                          <td scope="col" class="px-6 py-3 text-start   border-r">
                            <span class="text-xs font-semibold uppercase tracking-wide flex justify-center text-gray-800">
                              学年
                            </span>
                          </td>
                          <td scope="col" class="px-6 py-3 text-start  ">
                            <span class="text-xs font-semibold uppercase tracking-wide flex justify-center text-gray-800">
                              3年
                            </span>
                          </td>
                        </tr>
                      </tbody>
                      <tbody class="divide-y divide-gray-200">
                        <tr>
                          <td scope="col" class="px-6 py-3 text-start   border-r">
                            <span class="text-xs font-semibold uppercase tracking-wide flex justify-center text-gray-800">
                              卒業予定
                            </span>
                          </td>
                          <td scope="col" class="px-6 py-3 text-start  ">
                            <span class="text-xs font-semibold uppercase tracking-wide flex justify-center text-gray-800">
                              2025年3月
                            </span>
                          </td>
                        </tr>
                      </tbody>
                      <tbody class="divide-y divide-gray-200">
                        <tr>
                          <td scope="col" class="px-6 py-3 text-start   border-r">
                            <span class="text-xs font-semibold uppercase tracking-wide flex justify-center text-gray-800">
                              志望業界
                            </span>
                          </td>
                          <td scope="col" class="px-6 py-3 text-start whitespace-nowrap  ">
                            <span class="text-xs font-semibold uppercase tracking-wide flex justify-center text-gray-800">
                              IT系
                            </span>
                          </td>
                        </tr>
                      </tbody>
                      <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                        <tr>
                          <td scope="col" class="px-6 py-3 text-start   border-r">
                            <span class="text-xs font-semibold uppercase tracking-wide flex justify-center text-gray-800">
                              志望勤務地
                            </span>
                          </td>
                          <td scope="col" class="px-6 py-3 text-start  ">
                            <span class="text-xs font-semibold uppercase tracking-wide flex justify-center text-gray-800">
                              兵庫県
                            </span>
                          </td>
                        </tr>
                      </tbody>
                      <tbody class="divide-y divide-gray-200">
                        <tr>
                          <td scope="col" class="px-6 py-3 text-start   border-r">
                            <span class="text-xs font-semibold uppercase tracking-wide flex justify-center text-gray-800">
                              保有資格
                            </span>
                          </td>
                          <td scope="col" class="px-6 py-3 text-start  ">
                            <span class="text-xs font-semibold uppercase tracking-wide flex justify-center text-gray-800">
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
              <Link href="/profile">
                <button class="mr-10 mb-5 py-2 px-6 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-green-500 text-white shadow-sm hover:bg-green-700 disabled:opacity-50 disabled:pointer-events-none ">
                  編集
                </button>
              </Link>
            </div>

          </div>
        </div>
      </div>


    </Layout>
  );
}
