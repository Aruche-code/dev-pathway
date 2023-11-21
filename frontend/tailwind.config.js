/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    //「src」ディレクトリを使用する場合:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {},
    },
    fontFamily: {
      banana: ['MS Ｐゴシック', 'MS PGothic', 'sans-serif'],
      ringo: ['Hiragino Sans', 'ヒラギノ角ゴシック', 'メイリオ', 'Meiryo'],
    },
  },
  //Tailwind CSSを使う際に起きるHTMLタグのデフォルトスタイルのリセットを有効化,無効化するオプション
  //Tailwind CSSにより適用されるスタイルリセットのもう1つの特長は、マージンと余白がすべて削除される
  corePlugins: {
    preflight: true,
  },
  plugins: [],

};
