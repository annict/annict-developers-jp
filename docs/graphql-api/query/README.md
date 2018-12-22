# データを取得する (Query)

データを取得するときは `query` キーワードの中にクエリを記述します。
例えば以下は「2018年秋アニメの中から視聴者数が多い順に3件取得する」というクエリになります。

```graphql
query {
  searchWorks(seasons: ["2018-autumn"], orderBy: { field: WATCHERS_COUNT, direction: DESC }, first: 3) {
    edges {
      node {
        annictId
        title
        watchersCount
      }
    }
  }
}
```

上記で使用している `searchWorks` 以外にも、AnnictのGraphQL APIではクエリをいくつか提供しています。
詳細は<a href="/graphql-api/reference/operation/query/">リファレンスページ</a>をご覧ください。
