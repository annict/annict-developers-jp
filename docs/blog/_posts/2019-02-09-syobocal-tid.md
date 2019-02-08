---
title: APIで「しょぼいカレンダー」のタイトルID (TID) が取得できるようになりました
sidebar: false
permalink: /blog/2019-02-09-syobocal-tid/
publishedOn: 2019-02-09
---

# APIで「しょぼいカレンダー」の作品ID (TID) が取得できるようになりました

<BlogPublishedDate />

なぜ今まで取得できなかったという感じですが、作品情報を取得するときに「[しょぼいカレンダー](http://cal.syoboi.jp)」のタイトルID (TID) を返すようにしました。REST APIでは `syobocal_tid` で、GraphQL APIでは `syobocalTid` というプロパティ名で取得できます。

REST APIの詳細は[Annict Docs](https://docs.annict.com/ja/api/v1/works.html)を、GraphQL APIの詳細は<a href="/graphql-api/reference/object/work/">リファレンス</a>からご参照ください。

しょぼいカレンダーと連携しやすくなった気がするAnnictをよろしくお願いします。
