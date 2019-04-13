---
title: GraphQL APIで作品に紐づくシリーズ情報が取得できるようになりました
sidebar: false
permalink: /blog/2019-04-14-series-list/
publishedOn: 2019-04-14
---

# GraphQL APIで作品に紐づくシリーズ情報が取得できるようになりました

<BlogPublishedDate />

Workオブジェクトに `seriesList` というシリーズ情報が取得できるフィールドを追加しました。以下のようなクエリで作品に紐づくシリーズ情報が取得できます。

```graphql
{
  viewer {
    works(state: WATCHED, first: 5, orderBy: {field: SEASON, direction: DESC}) {
      nodes {
        title
        seriesList {
          edges {
            node {
              name
              works(orderBy: { field: SEASON, direction: DESC }) {
                edges {
                  summary
                  node {
                    title
                    seasonYear
                    seasonName
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
```

```json
{
  "data": {
    "viewer": {
      "works": {
        "nodes": [
          {
            "title": "劇場版 幼女戦記",
            "seriesList": {
              "edges": [
                {
                  "node": {
                    "name": "幼女戦記",
                    "works": {
                      "edges": [
                        {
                          "summary": "劇場版",
                          "node": {
                            "title": "劇場版 幼女戦記",
                            "seasonYear": 2019,
                            "seasonName": "WINTER"
                          }
                        },
                        {
                          "summary": "TVシリーズ",
                          "node": {
                            "title": "幼女戦記",
                            "seasonYear": 2017,
                            "seasonName": "WINTER"
                          }
                        }
                      ]
                    }
                  }
                }
              ]
            }
          },
...
```

GraphQL APIの詳細は<a href="/graphql-api/reference/object/work/">リファレンス</a>からご参照ください。

じわじわとAPIから取得できるデータが増えているAnnictをよろしくお願いします。
