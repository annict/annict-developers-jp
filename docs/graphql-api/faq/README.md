# よくありそうな質問

## `annictId` と `id` の違いは？

[GraphQL APIリファレンス](/graphql-api/reference/)にはよく `annictId` というフィールドと `id` というフィールドが出てきます。
`annictId` とは、Annictのデータベース内の各テーブルに存在する固有のIDになります。
例えば作品「[エロマンガ先生](https://annict.jp/works/4714)」の `annictId` は `4714` になります。
(Railsがデフォルトで提供するプライマリキーです。)

対して `id` は全てのオブジェクトにおいて固有のIDになります。
`annictId` は各テーブルに同じ値が存在し得ますが、`id` には全テーブル内の全データごとに固有の値が設定されています。
