# セットアップ

GraphQL APIを操作するにはアクセストークンが必要になります。まずはアクセストークンを生成します。


## アクセストークンを生成する

アクセストークンは下記の2つの方法で生成することができます。詳細はそれぞれのページでご紹介します。

1. [OAuth認証して生成する](/graphql-api/oauth/)
2. [個人用アクセストークンを生成する](/graphql-api/personal-access-token/)

個人的にGraphQL APIを試したいという方は、2の個人用アクセストークンの使用をオススメします。(簡単に生成できるため)


## クエリの実行環境を用意する

GraphQL APIは以下のような方法で操作することができます。

- `curl` コマンド
- GUIクライアント

GUIクライアントは「[GraphiQL](https://github.com/graphql/graphiql)」や「[Insomnia](https://insomnia.rest/)」が有名です。
GraphiQLをMacで利用するときは「[GraphiQL.app](https://github.com/skevy/graphiql-app)」がオススメです。


## クエリを実行する

### curlコマンドで実行する

`curl` コマンドを使用して実行する場合は以下のようなオプションを付加します。

```bash
$ curl https://api.annict.com/graphql \
-H "Authorization: bearer (アクセストークン)" \
-X POST \
-d "query=query { viewer { name } }"
```

`query` パラメータに `query { viewer { name } }` というクエリを付加してPOSTリクエストを送っています。
上記コマンドを実行すると下記のようなJSONデータが返ります。

```json
{"data":{"viewer":{"name":"Koji Shimba"}}}
```


### GraphiQLで実行する

GraphiQLを立ち上げると下の画像ようなウィンドウが表示されます。
「Welcome to GraphiQL」と書かれている左側のカラムがGraphQLのクエリを入力する場所で、その右はクエリの実行結果を表示する場所になります。
ちなみに「Welcome to GraphiQL」など書かれている文書はGraphQLのコメントなので、消してしまって問題ありません。

![image](https://user-images.githubusercontent.com/56767/50376336-1e2d9e80-064f-11e9-853f-465071d29c90.png)

「GraphQL Endpoint」の入力欄に下記エンドポイントを入力します。

```
https://api.annict.com/graphql
```

GraphQL APIにリクエストを投げるとき、エンドポイントは常にこのURLになります。

次にアクセストークンをヘッダに登録します。
「Edit HTTP Headers」という青いボタンをクリックすると、リクエストヘッダを設定することができます。

![image](https://user-images.githubusercontent.com/56767/50376381-65b42a80-064f-11e9-9d3b-7acfb85d56c5.png)

「Add Header」をクリックして以下のように Authorization ヘッダを設定します。

![image](https://user-images.githubusercontent.com/56767/50376385-72388300-064f-11e9-92b6-e6662a82b004.png)

| Header name | Header value |
| --- | --- |
| Authorization | Bearer (アクセストークン) |

以上でGraphQL APIを操作するための設定が終わりました。左側のクエリ入力欄に以下のクエリを書いてみます。

```graphql
query {
  viewer {
    username
    name
  }
}
```

クエリを入力したあと、入力欄の上にある再生ボタンみたいなものをクリックすると、右側に取得結果が表示されます。

![image](https://user-images.githubusercontent.com/56767/50376405-c6436780-064f-11e9-8650-c4c77ebf8ece.png)
