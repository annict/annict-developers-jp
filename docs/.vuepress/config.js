module.exports = {
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "ブログ", link: "/blog/" },
      {
        text: "GraphQL API",
        items: [
          { text: "ドキュメント", link: "/graphql-api/" },
          {
            text: "APIリファレンス",
            link: "http://annict.testjp:5000/graphql-api/reference/"
          }
        ]
      },
      { text: "REST API (非推奨)", link: "https://docs.annict.com/ja/" }
    ]
  }
};
