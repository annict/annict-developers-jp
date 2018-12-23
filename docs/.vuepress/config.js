module.exports = {
  title: "Annict Developers",
  theme: "@vuepress/theme-default",
  themeConfig: {
    logo: "/logo.png",
    nav: [
      { text: "Home", link: "/" },
      {
        text: "GraphQL API (β)",
        items: [
          { text: "ドキュメント", link: "/graphql-api/" },
          {
            text: "APIリファレンス",
            link:
              process.env.NODE_ENV === "development"
                ? "http://annict.testjp:5000/graphql-api/reference/"
                : "https://developers.annict.jp/graphql-api/reference/"
          }
        ]
      },
      { text: "REST API", link: "https://docs.annict.com/ja/" },
      { text: "ブログ", link: "/blog/" },
      { text: "コミュニティ", link: "/community/" }
    ],
    sidebar: [
      ["/graphql-api/", "はじめに"],
      ["/graphql-api/setup/", "セットアップ"],
      ["/graphql-api/query/", "データを取得する (Query)"],
      ["/graphql-api/mutation/", "データを保存する (Mutation)"],
      ["/graphql-api/oauth/", "OAuth認証"],
      ["/graphql-api/personal-access-token/", "個人用アクセストークン"],
      ["/graphql-api/faq/", "よくありそうな質問"]
    ],
    search: false
  },

  plugins: ["@vuepress/blog"]
};
