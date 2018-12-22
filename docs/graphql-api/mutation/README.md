# データを保存する (Mutation)

データを保存するときは `mutation` キーワードの中にクエリを記述します。
例えば以下はエピソードに記録するクエリになります。

```graphql
mutation {
  createRecord(input: { episodeId: "RXBpc29kZS05NTkyMg==", comment: "おもしろかった。" }) {
    record {
      annictId
    }
  }
}
```

上記の `createRecord` 以外にもAnnict GraphQL APIではいくつかのクエリを提供しています。
詳細は<a href="/graphql-api/reference/operation/mutation/">リファレンスページ</a>をご覧ください。
