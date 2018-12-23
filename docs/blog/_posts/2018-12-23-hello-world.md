---
title: 開発者向けのポータルサイト「Annict Developers」を公開しました
sidebar: false
permalink: /blog/2018-12-23-hello-world/
publishedOn: 2018-12-23
---

# 開発者向けのポータルサイト「Annict Developers」を公開しました

<BlogPublishedDate />

Annict Developersというサイトを公開しました。主なコンテンツは[GraphQL APIのドキュメント](/graphql-api/)とこのブログになります。

今までは [GitBook](https://www.gitbook.com) を使用して [Annict Docs](https://docs.annict.com/ja/) というドキュメントサイトを公開していました。
REST APIのドキュメントだけを公開していたときは良かったのですが、GraphQL APIのドキュメントを追加したときサイドバーの構成が中々見づらくなりました。また、GraphQL APIのリファレンスを手動で更新するという厳しい管理体制でした。

Annict Developersでも[GraphQL APIのリファレンス](/graphql-api/reference/)を公開していますが、今回から [graphql-docs](https://github.com/gjtorikian/graphql-docs) を使用してソースコードから自動生成するようにしました。まだフィールドの説明文が無かったりするので、これから少しずつ更新していきたいと思います。GraphQL APIのドキュメントをここで公開し始めたので、Annict DocsからはGraphQL APIのドキュメントを削除しています。

また、Annict Developersの公開に伴い開発者向けのTwitterアカウントも用意しました。
今後開発者向けの情報は↓のTwitterアカウントやこのブログでお知らせしようかと思います。

[twitter.com/AnnictDevJP](https://twitter.com/AnnictDevJP)

Annict Developersは [VuePress](https://vuepress.vuejs.org/) で作成しています。ソースコードは [github.com/annict/developers-jp](https://github.com/annict/developers-jp) で公開しているので、ドキュメントなどに不備等あったときはプルリクエストを頂けるとありがたいです。

開発者向けの情報が取得しやすくなったような気がするAnnictをよろしくお願いします。
