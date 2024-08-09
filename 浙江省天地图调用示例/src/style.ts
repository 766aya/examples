const mapStyle = {
  version: 8,
  metadata: {
    "zjditu:k": [
      {
        children: [
          {
            id: "zb",
          },
          {
            id: "vB",
          },
        ],
        id: "zb",
      },
      {
        children: [
          {
            id: "og",
          },
          {
            id: "Ax",
          },
          {
            id: "8R",
          },
          {
            id: "P9",
          },
          {
            id: "b9",
          },
        ],
        id: "vB",
      },
      {
        children: [
          {
            children: [
              {
                id: "7Y",
              },
              {
                id: "G9",
              },
            ],
            id: "9k7",
          },
          {
            children: [
              {
                id: "4v",
              },
              {
                id: "MO",
              },
            ],
            id: "zRa",
          },
          {
            children: [
              {
                id: "lx",
              },
              {
                id: "3X",
              },
            ],
            id: "vBV",
          },
          {
            children: [
              {
                id: "kR",
              },
              {
                id: "Rn",
              },
            ],
            id: "oD5",
          },
          {
            children: [
              {
                id: "JB",
              },
              {
                id: "ro",
              },
            ],
            id: "Am5",
          },
          {
            children: [
              {
                id: "2Z",
              },
              {
                id: "jP",
              },
            ],
            id: "8Vq",
          },
          {
            children: [
              {
                id: "we",
              },
              {
                id: "nX",
              },
              {
                id: "ak",
              },
            ],
            id: "PNO",
          },
          {
            children: [
              {
                id: "Kx",
              },
              {
                id: "q4",
              },
              {
                id: "e8",
              },
            ],
            id: "b1m",
          },
          {
            children: [
              {
                id: "Nr",
              },
            ],
            id: "7n7",
          },
          {
            children: [
              {
                id: "VM",
              },
              {
                id: "Yj",
              },
            ],
            id: "4QA",
          },
          {
            children: [
              {
                id: "6Q",
              },
              {
                id: "XY",
              },
              {
                id: "QV",
              },
            ],
            id: "lg7",
          },
          {
            id: "gZ",
          },
          {
            children: [
              {
                id: "1r",
              },
              {
                id: "OP",
              },
            ],
            id: "JyJ",
          },
          {
            children: [
              {
                id: "59",
              },
              {
                id: "Ba",
              },
            ],
            id: "2Br",
          },
          {
            id: "WG",
          },
          {
            children: [
              {
                id: "DG",
              },
              {
                id: "ZP",
              },
              {
                id: "xw",
              },
              {
                id: "0w",
              },
            ],
            id: "Klb",
          },
          {
            children: [
              {
                id: "ya",
              },
              {
                id: "mo",
              },
              {
                id: "90m",
              },
              {
                id: "zbb",
              },
            ],
            id: "N0k",
          },
        ],
        id: "og",
      },
      {
        children: [
          {
            children: [
              {
                id: "vxB",
              },
              {
                id: "oog",
              },
              {
                id: "A9x",
              },
              {
                id: "83R",
              },
              {
                id: "PZ9",
              },
              {
                id: "bD9",
              },
              {
                id: "7MY",
              },
              {
                id: "4Wv",
              },
              {
                id: "lPx",
              },
              {
                id: "kKR",
              },
            ],
            id: "9k7",
          },
          {
            children: [
              {
                id: "JlB",
              },
              {
                id: "25Z",
              },
              {
                id: "wDe",
              },
              {
                id: "Kox",
              },
            ],
            id: "zRa",
          },
          {
            children: [
              {
                id: "NKr",
              },
              {
                id: "GJ9",
              },
              {
                id: "rko",
              },
              {
                id: "jgP",
              },
              {
                id: "n6X",
              },
              {
                id: "a6k",
              },
            ],
            id: "vBV",
          },
          {
            children: [
              {
                id: "MDO",
              },
              {
                id: "33X",
              },
              {
                id: "Rln",
              },
            ],
            id: "oD5",
          },
        ],
        id: "Ax",
      },
    ],
  },
  sprite: "https://zhejiang.tianditu.gov.cn/vtiles/icons/img",
  glyphs:
    "https://zhejiang.tianditu.gov.cn/vtiles/fonts/{fontstack}/{range}.pbf",
  sources: {
    osm: {
      type: "vector",
      tiles: [
        "https://zhejiang.tianditu.gov.cn/vtiles/maps/tdt_zj_zw/{z}/{x}/{y}.mvt?v=2023",
      ],
      bounds: [
        118.022529663, 26.9995817330001, 123.249888933, 31.1824714530001,
      ],
    },
    "tdt-zj": {
      type: "raster",
      tiles: [
        `https://ditu.zjzwfw.gov.cn/services/wmts/imgmap/default/oss?layer=imgmap&style=default&tilematrixset=default028mm&Service=WMTS&Request=GetTile&Version=1.0.0&Format=image%2Fjpgpng&TileMatrix={z}&TileCol={x}&TileRow={y}&token=${import.meta.env.VITE_ZJ_TDT_TOKEN}`,
      ],
      tileSize: 256,
      maxzoom: 20,
      minzoom: 6,
      bounds: [111.390883, 23.780958, 129.813606, 34.911582],
    },
  },
  layers: [
    {
      id: "zb",
      type: "background",
      paint: {
        "background-color": "rgba(245, 244, 243, 1)",
      },
    },
    {
      id: "vB",
      type: "raster",
      source: "tdt-zj",
      minzoom: 6,
    },
    {
      id: "og",
      type: "line",
      source: "osm",
      "source-layer": "we",
      minzoom: 7,
      filter: ["all", ["==", "9m", "wXGy9xX"]],
      paint: {
        "line-color": "rgba(60, 60, 60, 1)",
        "line-dasharray": [30, 10, 10, 10, 10, 10],
        "line-width": 0.4,
      },
    },
    {
      id: "Ax",
      type: "line",
      source: "osm",
      "source-layer": "we",
      minzoom: 7,
      maxzoom: 14,
      filter: ["all", ["==", "9m", "wX81kDR"]],
      paint: {
        "line-color": "rgba(150,149,149, 1)",
        "line-dasharray": [30, 10, 10, 10, 10, 10],
        "line-width": 0.4,
      },
    },
    {
      id: "8R",
      type: "line",
      source: "osm",
      "source-layer": "we",
      minzoom: 9,
      maxzoom: 14,
      filter: ["all", ["==", "9m", "w5lqB2l"]],
      paint: {
        "line-color": "rgba(150,150, 150, 1)",
        "line-dasharray": [30, 10, 10, 10, 10, 10],
        "line-width": 0.4,
      },
    },
    {
      id: "P9",
      type: "line",
      source: "osm",
      "source-layer": "we",
      minzoom: 7,
      maxzoom: 14,
      filter: ["all", ["==", "9m", "w2DloQ6"]],
      paint: {
        "line-color": "rgba(150,150, 150, 1)",
        "line-dasharray": [30, 10, 10, 10, 10, 10],
        "line-width": 0.4,
      },
    },
    {
      id: "b9",
      type: "line",
      source: "osm",
      "source-layer": "we",
      minzoom: 7,
      maxzoom: 14,
      filter: ["all", ["in", "9m", "wXGyzWl", "wX81Nb6", "w5lqx4j"]],
      paint: {
        "line-color": "rgba(150,150, 150, 1)",
        "line-dasharray": [30, 10, 10, 10, 10, 10],
        "line-width": 0.4,
      },
    },
    {
      id: "7Y",
      ref: "G9",
      paint: {
        "line-color": "rgba(0,0,0, 0.4)",
        "line-width": 1,
        "line-gap-width": {
          stops: [
            [7, 1.1],
            [16, 1.8],
            [17, 2.5],
            [19, 7],
          ],
        },
      },
    },
    {
      id: "4v",
      ref: "MO",
      paint: {
        "line-color": "rgba(0,0,0, 0.4)",
        "line-width": 1,
        "line-gap-width": {
          stops: [
            [7, 1.8],
            [17, 2.5],
            [19, 7.5],
          ],
        },
      },
    },
    {
      id: "lx",
      ref: "3X",
      paint: {
        "line-color": "rgba(0,0,0, 0.4)",
        "line-width": 1,
        "line-gap-width": {
          stops: [
            [7, 1.8],
            [17, 4],
            [19, 8],
          ],
        },
      },
    },
    {
      id: "kR",
      ref: "Rn",
      paint: {
        "line-color": "rgba(0,0,0, 0.4)",
        "line-width": 1,
        "line-gap-width": {
          stops: [
            [7, 1.8],
            [15, 1.5],
            [16, 2.4],
            [17, 4],
            [19, 10.5],
          ],
        },
      },
    },
    {
      id: "JB",
      ref: "ro",
      paint: {
        "line-color": "rgba(0,0,0, 0.4)",
        "line-width": 1,
        "line-gap-width": {
          stops: [
            [7, 1.5],
            [12, 2.5],
            [16, 3],
            [17, 4.5],
            [19, 13],
          ],
        },
      },
    },
    {
      id: "2Z",
      ref: "jP",
      paint: {
        "line-color": "rgba(0,0,0, 0.4)",
        "line-width": {
          stops: [
            [9, 0],
            [10, 1],
          ],
        },
        "line-gap-width": {
          stops: [
            [7, 2],
            [12, 3],
            [16, 4.5],
            [17, 5.5],
            [19, 14],
          ],
        },
      },
    },
    {
      id: "we",
      ref: "nX",
      paint: {
        "line-color": "rgba(0,0,0, 0.4)",
        "line-width": {
          stops: [
            [9, 0],
            [10, 1],
          ],
        },
        "line-gap-width": {
          stops: [
            [7, 2],
            [12, 2.5],
            [16, 3.5],
            [17, 5.5],
            [19, 14],
          ],
        },
      },
    },
    {
      id: "Kx",
      ref: "q4",
      paint: {
        "line-color": "rgba(0,0,0, 0.4)",
        "line-width": {
          stops: [
            [9, 0],
            [10, 1],
          ],
        },
        "line-gap-width": {
          stops: [
            [7, 2],
            [12, 2.6],
            [15, 4],
            [17, 7],
            [19, 16.5],
          ],
        },
      },
    },
    {
      id: "Nr",
      type: "line",
      source: "osm",
      "source-layer": "4v",
      minzoom: 7,
      filter: [
        "all",
        [
          "in",
          "zb",
          "2r0V3B5",
          "2r0WgrZ",
          "2rv8Go9",
          "2PnPlGZ",
          "2rvOnaN",
          "2rvDvJN",
        ],
      ],
      layout: {
        "line-cap": "round",
        "line-join": "round",
      },
      paint: {
        "line-color": "rgba(0,0,0, 0.4)",
        "line-width": {
          stops: [
            [7, 1.8],
            [17, 4],
            [19, 8],
          ],
        },
        "line-dasharray": [6, 3],
      },
    },
    {
      id: "G9",
      type: "line",
      source: "osm",
      "source-layer": "4v",
      minzoom: 12,
      filter: [
        "all",
        [
          "in",
          "zb",
          "2PnGMVv",
          "wmkJyg3",
          "kkGDYle",
          "2PR14WM",
          "2PRoDvq",
          "wm6Ov76",
          "wm60xBj",
        ],
      ],
      layout: {
        "line-cap": "round",
        "line-join": "round",
      },
      paint: {
        "line-color": "rgba(254,254,254, 0.4)",
        "line-width": {
          stops: [
            [7, 1.1],
            [16, 1.8],
            [17, 2.5],
            [19, 7],
          ],
        },
      },
    },
    {
      id: "MO",
      type: "line",
      source: "osm",
      "source-layer": "4v",
      minzoom: 12,
      filter: ["all", ["in", "zb", "2rv8XzN", "2r0RNyj", "2r0WR25"]],
      layout: {
        "line-cap": "round",
        "line-join": "round",
      },
      paint: {
        "line-color": "rgba(254,254,254, 0.4)",
        "line-width": {
          stops: [
            [7, 1.8],
            [17, 2.5],
            [19, 7.5],
          ],
        },
      },
    },
    {
      id: "3X",
      type: "line",
      source: "osm",
      "source-layer": "4v",
      minzoom: 12,
      filter: ["all", ["in", "zb", "2PnPKR5"]],
      layout: {
        "line-cap": "round",
        "line-join": "round",
      },
      paint: {
        "line-color": "rgba(254,254,254, 0.4)",
        "line-width": {
          stops: [
            [7, 1.8],
            [17, 4],
            [19, 8],
          ],
        },
      },
    },
    {
      id: "Rn",
      type: "line",
      source: "osm",
      "source-layer": "4v",
      minzoom: 10,
      filter: ["all", ["in", "zb", "2rv4wjq"]],
      layout: {
        "line-cap": "round",
        "line-join": "round",
      },
      paint: {
        "line-color": "rgba(254,254,254, 0.4)",
        "line-width": {
          stops: [
            [7, 1.8],
            [15, 1.5],
            [16, 2.4],
            [17, 4],
            [19, 10.5],
          ],
        },
      },
    },
    {
      id: "ro",
      type: "line",
      source: "osm",
      "source-layer": "4v",
      minzoom: 9,
      filter: ["all", ["in", "zb", "2rvDDMq", "2Pnr80j"]],
      layout: {
        "line-cap": "round",
        "line-join": "round",
      },
      paint: {
        "line-color": "rgba(255,244,140, 0.4)",
        "line-width": {
          stops: [
            [7, 1.5],
            [12, 2.5],
            [16, 3],
            [17, 4.5],
            [19, 13],
          ],
        },
      },
    },
    {
      id: "jP",
      type: "line",
      source: "osm",
      "source-layer": "4v",
      minzoom: 7,
      filter: ["all", ["in", "zb", "2Pnrkmv"]],
      layout: {
        "line-cap": "round",
        "line-join": "round",
      },
      paint: {
        "line-color": "rgba(255,235,115, 0.4)",
        "line-width": {
          stops: [
            [7, 2],
            [12, 3],
            [16, 4.5],
            [17, 5.5],
            [19, 14],
          ],
        },
      },
    },
    {
      id: "nX",
      type: "line",
      source: "osm",
      "source-layer": "4v",
      minzoom: 7,
      filter: ["all", ["in", "zb", "2rvn4yM"]],
      layout: {
        "line-cap": "round",
        "line-join": "round",
      },
      paint: {
        "line-color": "rgba(255,235,115, 0.4)",
        "line-width": {
          stops: [
            [7, 2],
            [12, 2.5],
            [16, 3.5],
            [17, 5.5],
            [19, 14],
          ],
        },
      },
    },
    {
      id: "ak",
      type: "line",
      source: "osm",
      "source-layer": "4v",
      minzoom: 7,
      filter: ["all", ["in", "zb", "2rvnj5q"]],
      layout: {
        "line-cap": "round",
        "line-join": "round",
      },
      paint: {
        "line-color": "rgba(255,235,115, 0.4)",
        "line-width": {
          stops: [
            [7, 2],
            [12, 2.5],
            [16, 3.5],
            [17, 5.5],
            [19, 14],
          ],
        },
        "line-dasharray": [6, 3],
      },
    },
    {
      id: "q4",
      type: "line",
      source: "osm",
      "source-layer": "4v",
      minzoom: 7,
      filter: ["all", ["in", "zb", "2ro78ml"]],
      layout: {
        "line-cap": "round",
        "line-join": "round",
      },
      paint: {
        "line-color": "rgba(254,205,110, 0.4)",
        "line-width": {
          stops: [
            [7, 2],
            [12, 2.6],
            [15, 4],
            [17, 7],
            [19, 16.5],
          ],
        },
      },
    },
    {
      id: "e8",
      type: "line",
      source: "osm",
      "source-layer": "4v",
      minzoom: 7,
      filter: ["all", ["in", "zb", "2roGK0M"]],
      layout: {
        "line-cap": "round",
        "line-join": "round",
      },
      paint: {
        "line-color": "rgba(254,205,110, 0.4)",
        "line-width": {
          stops: [
            [7, 2],
            [12, 2.6],
            [15, 4],
            [17, 7],
            [19, 16.5],
          ],
        },
        "line-dasharray": [6, 3],
      },
    },
    {
      id: "VM",
      ref: "Yj",
      paint: {
        "line-color": "rgba(170, 170, 170, 0.7)",
        "line-width": 2.2,
      },
    },
    {
      id: "Yj",
      type: "line",
      source: "osm",
      "source-layer": "7Y",
      minzoom: 8,
      filter: [
        "all",
        ["in", "9m", "w4XRjwX", "w4X91YR", "w4X9NWl", "w4Xl6nR", "w4XjAXl"],
      ],
      layout: {
        "line-cap": "round",
        "line-join": "round",
      },
      paint: {
        "line-color": "rgba(255, 255, 255, 0.7)",
        "line-dasharray": [6, 8],
        "line-width": 1.6,
      },
    },
    {
      id: "6Q",
      ref: "XY",
      paint: {
        "line-color": "rgba(0,0,0, 0.4)",
        "line-width": {
          stops: [
            [9, 0],
            [10, 1],
          ],
        },
        "line-gap-width": {
          stops: [
            [7, 2.5],
            [12, 3],
            [15, 5],
            [18, 7],
            [19, 19],
          ],
        },
      },
    },
    {
      id: "XY",
      type: "line",
      source: "osm",
      "source-layer": "4v",
      minzoom: 7,
      filter: ["all", ["in", "zb", "2rorYgG", "2ro78MM", "2rvn4aq"]],
      layout: {
        "line-cap": "round",
        "line-join": "round",
      },
      paint: {
        "line-color": "rgba(255,191,36, 0.4)",
        "line-width": {
          stops: [
            [7, 2.5],
            [12, 3],
            [15, 5],
            [18, 7],
            [19, 19],
          ],
        },
      },
    },
    {
      id: "QV",
      type: "line",
      source: "osm",
      "source-layer": "4v",
      minzoom: 7,
      filter: ["all", ["in", "zb", "2rorQwl", "2rvnj3N"]],
      layout: {
        "line-cap": "round",
        "line-join": "round",
      },
      paint: {
        "line-color": "rgba(255,191,36, 0.4)",
        "line-width": {
          stops: [
            [7, 2.5],
            [12, 3],
            [15, 5],
            [18, 7],
            [19, 19],
          ],
        },
        "line-dasharray": [7, 4],
      },
    },
    {
      id: "gZ",
      type: "line",
      source: "osm",
      "source-layer": "b9",
      minzoom: 10,
      filter: ["all", ["in", "9m", "wb0bOXl"]],
      layout: {
        "line-cap": "round",
        "line-join": "round",
      },
      paint: {
        "line-color": "rgba(50, 70, 255, 0.4)",
        "line-dasharray": [6, 2],
        "line-width": {
          stops: [
            [10, 3],
            [11, 4],
            [12, 4],
            [17, 5],
            [19, 6],
          ],
        },
      },
    },
    {
      id: "1r",
      ref: "OP",
      paint: {
        "line-color": "rgba(0,0,0, 0.4)",
        "line-width": {
          stops: [
            [9, 0],
            [10, 1],
          ],
        },
        "line-gap-width": {
          stops: [
            [7, 2.5],
            [15, 5],
            [16, 7],
            [19, 8],
          ],
        },
      },
    },
    {
      id: "OP",
      type: "line",
      source: "osm",
      "source-layer": "4v",
      minzoom: 13,
      filter: ["all", ["==", "zb", "2r0xo79"]],
      layout: {
        "line-cap": "round",
        "line-join": "round",
        visibility: "none",
      },
      paint: {
        "line-color": "rgba(255,191,36, 0.4)",
        "line-width": {
          stops: [
            [7, 2.5],
            [15, 5],
            [16, 7],
            [19, 8],
          ],
        },
      },
    },
    {
      id: "59",
      ref: "Ba",
      paint: {
        "line-color": "rgba(0,0,0, 0.4)",
        "line-width": {
          stops: [
            [9, 0],
            [10, 1],
          ],
        },
        "line-gap-width": {
          stops: [
            [7, 2],
            [15, 3],
            [16, 4.5],
            [17, 7],
            [18, 8.5],
            [19, 14],
          ],
        },
      },
    },
    {
      id: "Ba",
      type: "line",
      source: "osm",
      "source-layer": "4v",
      minzoom: 7,
      filter: ["all", ["in", "zb", "wm1Wwa6", "2PnB1lq"]],
      layout: {
        "line-cap": "round",
        "line-join": "round",
      },
      paint: {
        "line-color": "rgba(254,205,110, 0.4)",
        "line-width": {
          stops: [
            [7, 2],
            [15, 3],
            [16, 4.5],
            [17, 7],
            [18, 8.5],
            [19, 14],
          ],
        },
      },
    },
    {
      id: "WG",
      type: "line",
      source: "osm",
      "source-layer": "7Y",
      minzoom: 11,
      filter: ["all", ["in", "vB", "kOKbJk3"]],
      layout: {
        "line-cap": "round",
        "line-join": "round",
      },
      paint: {
        "line-color": "rgba(255, 0, 0, 0.7)",
        "line-width": {
          stops: [
            [11, 1.4],
            [12, 1.5],
            [13, 2],
          ],
        },
      },
    },
    {
      id: "DG",
      type: "line",
      source: "osm",
      "source-layer": "7Y",
      minzoom: 11,
      filter: [
        "all",
        ["in", "vB", "kOKxzkR", "rOkx7Mo", "kOAmMje", "kOQV8mB"],
        ["in", "9m", "wm13o2l"],
      ],
      layout: {
        "line-cap": "round",
        "line-join": "round",
      },
      paint: {
        "line-color": {
          type: "categorical",
          property: "vB",
          stops: [
            ["kOKxzkR", "rgba(0, 112, 255, 0.7)"],
            ["rOkx7Mo", "rgba(212, 53, 49, 0.7)"],
            ["kOAmMje", "rgba(192, 59, 54, 0.7)"],
            ["kOQV8mB", "rgba(2, 150, 210, 0.7)"],
          ],
        },
        "line-width": {
          stops: [
            [11, 1.4],
            [12, 1.5],
            [13, 2],
          ],
        },
      },
    },
    {
      id: "ZP",
      type: "line",
      source: "osm",
      "source-layer": "7Y",
      minzoom: 11,
      filter: ["all", ["in", "9m", "wm13jwR"]],
      layout: {
        "line-cap": "round",
        "line-join": "round",
      },
      paint: {
        "line-color": "rgba(130, 130, 130, 0.7)",
        "line-dasharray": [6, 3],
        "line-width": {
          stops: [
            [11, 1.4],
            [12, 1.5],
            [13, 2],
          ],
        },
      },
    },
    {
      id: "xw",
      type: "line",
      source: "osm",
      "source-layer": "7Y",
      minzoom: 17,
      filter: [
        "all",
        ["in", "vB", "2o5AaPZ", "nO6xAwX", "2oBZyVM", "2o3lnZ9"],
        ["in", "9m", "wm13o2l"],
      ],
      layout: {
        "line-cap": "round",
        "line-join": "round",
      },
      paint: {
        "line-color": {
          type: "categorical",
          property: "vB",
          stops: [
            ["2o5AaPZ", "rgba(0, 112, 255, 0.4)"],
            ["nO6xAwX", "rgba(212, 53, 49, 0.4)"],
            ["2oBZyVM", "rgba(192, 59, 54, 0.4)"],
            ["2o3lnZ9", "rgba(2, 150, 210, 0.4)"],
          ],
        },
        "line-width": {
          stops: [
            [17, 2.8],
            [18, 3],
            [19, 4],
          ],
        },
      },
    },
    {
      id: "0w",
      type: "line",
      source: "osm",
      "source-layer": "7Y",
      minzoom: 17,
      filter: [
        "all",
        ["in", "vB", "JDlK7WB", "j3gm9lP", "JDyXnR5", "JDv14XN"],
        ["in", "9m", "wm13o2l"],
      ],
      layout: {
        "line-cap": "round",
        "line-join": "round",
      },
      paint: {
        "line-color": {
          type: "categorical",
          property: "vB",
          stops: [
            ["JDlK7WB", "rgba(0, 112, 255, 0.4)"],
            ["j3gm9lP", "rgba(212, 53, 49, 0.4)"],
            ["JDyXnR5", "rgba(192, 59, 54, 0.4)"],
            ["JDv14XN", "rgba(2, 150, 210, 0.4)"],
          ],
        },
        "line-width": {
          stops: [
            [17, 14],
            [18, 15],
            [19, 20],
          ],
        },
      },
    },
    {
      id: "ya",
      type: "line",
      source: "osm",
      "source-layer": "7Y",
      minzoom: 11,
      filter: [
        "all",
        [
          "in",
          "vB",
          "kOwjNbR",
          "rOy68wo",
          "QnqVOZV",
          "0z1qk0w",
          "bkO2bX9",
          "GnPGyY9",
          "VnjzOYM",
          "W9qm5YG",
          "oO7evzg",
          "z5Bg2Ja",
          "GnPGyBQ",
          "oO7evK5",
          "kOwyBKX",
          "rOy2QkR",
          "Qnq1Ny1",
          "0z1lB7W",
          "bkOa91m",
          "kOKbJ8Q",
          "kOAAV4Y",
          "rODDKNb",
        ],
        ["in", "9m", "wm138qR"],
      ],
      layout: {
        "line-cap": "round",
        "line-join": "round",
      },
      paint: {
        "line-color": {
          type: "categorical",
          property: "vB",
          stops: [
            ["kOwjNbR", "rgba(255, 0, 0, 0.7)"],
            ["rOy68wo", "rgba(255, 100, 0, 0.7)"],
            ["QnqVOZV", "rgba(255, 255, 0, 0.7)"],
            ["0z1qk0w", "rgba(56, 168, 0, 0.7)"],
            ["bkO2bX9", "rgba(100, 195, 190, 0.7)"],
            ["GnPGyY9", "rgba(39, 78, 233, 0.7)"],
            ["VnjzOYM", "rgba(135, 24, 157, 0.7)"],
            ["W9qm5YG", "rgba(172, 20, 90, 0.7)"],
            ["oO7evzg", "rgba(155, 100, 50, 0.7)"],
            ["z5Bg2Ja", "rgba(220, 170, 0, 0.7)"],
            ["GnPGyBQ", "rgba(255, 180, 90, 0.7)"],
            ["oO7evK5", "rgba(90, 190, 210, 0.7)"],
            ["kOwyBKX", "rgba(0, 112, 255, 0.7)"],
            ["rOy2QkR", "rgba(255, 0, 0, 0.7)"],
            ["Qnq1Ny1", "rgba(235, 163, 23, 0.7)"],
            ["0z1lB7W", "rgba(115, 242, 8, 0.7)"],
            ["bkOa91m", "rgba(0, 5, 204, 0.7)"],
            ["kOKbJ8Q", "rgba(30, 175, 242, 0.7)"],
            ["kOAAV4Y", "rgba(255, 0, 0, 0.7)"],
            ["rODDKNb", "rgba(50, 75, 150, 0.7)"],
          ],
        },
        "line-width": {
          stops: [
            [11, 1.4],
            [12, 1.5],
            [13, 2],
          ],
        },
      },
    },
    {
      id: "mo",
      type: "line",
      source: "osm",
      "source-layer": "7Y",
      minzoom: 11,
      filter: ["all", ["in", "9m", "wm13JzX"]],
      layout: {
        "line-cap": "round",
        "line-join": "round",
      },
      paint: {
        "line-color": "rgba(130, 130, 130, 0.7)",
        "line-dasharray": [6, 3],
        "line-width": {
          stops: [
            [11, 1.4],
            [12, 1.5],
            [13, 2],
          ],
        },
      },
    },
    {
      id: "90m",
      type: "line",
      source: "osm",
      "source-layer": "7Y",
      minzoom: 17,
      filter: [
        "all",
        [
          "in",
          "vB",
          "2oKV20Z",
          "nO7qzlX",
          "1vqem0r",
          "m0ka94o",
          "48q6Kxv",
          "3A5Yw6X",
          "6bn9G1Q",
          "ZoD8OXP",
          "84avyMR",
          "oO7evz5",
          "3A5YwjY",
          "84avyJq",
          "2oKwx5r",
          "nO78G6j",
          "1vqJW4D",
          "m0koGbD",
          "48qMJQA",
          "2o50Onl",
          "2oBBlYq",
          "nObb0ye",
        ],
        ["in", "9m", "wm138qR"],
      ],
      layout: {
        "line-cap": "round",
        "line-join": "round",
      },
      paint: {
        "line-color": {
          type: "categorical",
          property: "vB",
          stops: [
            ["2oKV20Z", "rgba(255, 0, 0, 0.4)"],
            ["nO7qzlX", "rgba(255, 100, 0, 0.4)"],
            ["1vqem0r", "rgba(255, 255, 0, 0.4)"],
            ["m0ka94o", "rgba(56, 168, 0, 0.4)"],
            ["48q6Kxv", "rgba(100, 195, 190, 0.4)"],
            ["3A5Yw6X", "rgba(39, 78, 233, 0.4)"],
            ["6bn9G1Q", "rgba(135, 24, 157, 0.4)"],
            ["ZoD8OXP", "rgba(172, 20, 90, 0.4)"],
            ["84avyMR", "rgba(155, 100, 50, 0.4)"],
            ["oO7evz5", "rgba(220, 170, 0, 0.4)"],
            ["3A5YwjY", "rgba(255, 180, 90, 0.4)"],
            ["84avyJq", "rgba(90, 190, 210, 0.4)"],
            ["2oKwx5r", "rgba(0, 112, 255, 0.4)"],
            ["nO78G6j", "rgba(255, 0, 0, 0.4)"],
            ["1vqJW4D", "rgba(235, 163, 23, 0.4)"],
            ["m0koGbD", "rgba(115, 242, 8, 0.4)"],
            ["48qMJQA", "rgba(0, 5, 204, 0.4)"],
            ["2o50Onl", "rgba(30, 175, 242, 0.4)"],
            ["2oBBlYq", "rgba(255, 0, 0, 0.4)"],
            ["nObb0ye", "rgba(50, 75, 150, 0.4)"],
          ],
        },
        "line-width": {
          stops: [
            [17, 2.8],
            [18, 3],
            [19, 4],
          ],
        },
      },
    },
    {
      id: "zbb",
      type: "line",
      source: "osm",
      "source-layer": "7Y",
      minzoom: 17,
      filter: [
        "all",
        [
          "in",
          "vB",
          "JDaROMB",
          "j3orKPP",
          "gNQMJoZ",
          "yOBDJra",
          "77RzyeY",
          "MZJnOYO",
          "YvKAy1j",
          "DZ3wyYG",
          "AMXkyox",
          "vZog47V",
          "MZJnO6G",
          "AMXkyr5",
          "JDa3elJ",
          "j3oxDg1",
          "gNQO8jQ",
          "yOBVv6Q",
          "77Ra1n7",
          "JDlMb44",
          "JDyy1kb",
          "j3AAVOG",
        ],
        ["in", "9m", "wm138qR"],
      ],
      layout: {
        "line-cap": "round",
        "line-join": "round",
      },
      paint: {
        "line-color": {
          type: "categorical",
          property: "vB",
          stops: [
            ["JDaROMB", "rgba(255, 0, 0, 0.4)"],
            ["j3orKPP", "rgba(255, 100, 0, 0.4)"],
            ["gNQMJoZ", "rgba(255, 255, 0, 0.4)"],
            ["yOBDJra", "rgba(56, 168, 0, 0.4)"],
            ["77RzyeY", "rgba(100, 195, 190, 0.4)"],
            ["MZJnOYO", "rgba(39, 78, 233, 0.4)"],
            ["YvKAy1j", "rgba(135, 24, 157, 0.4)"],
            ["DZ3wyYG", "rgba(172, 20, 90, 0.4)"],
            ["AMXkyox", "rgba(155, 100, 50, 0.4)"],
            ["vZog47V", "rgba(220, 170, 0, 0.4)"],
            ["M8J0BMO", "rgba(255, 180, 90, 0.4)"],
            ["AMXkyr5", "rgba(90, 190, 210, 0.4)"],
            ["JDa3elJ", "rgba(0, 112, 255, 0.4)"],
            ["j3oxDg1", "rgba(255, 0, 0, 0.4)"],
            ["gNQO8jQ", "rgba(235, 163, 23, 0.4)"],
            ["yOBVv6Q", "rgba(115, 242, 8, 0.4)"],
            ["77Ra1n7", "rgba(0, 5, 204, 0.4)"],
            ["JDlMb44", "rgba(30, 175, 242, 0.4)"],
            ["JDyy1kb", "rgba(255, 0, 0, 0.4)"],
            ["j3AAVOG", "rgba(50, 75, 150, 0.4)"],
          ],
        },
        "line-width": {
          stops: [
            [17, 14],
            [18, 15],
            [19, 20],
          ],
        },
      },
    },
    {
      id: "vxB",
      type: "symbol",
      source: "osm",
      "source-layer": "7Y",
      minzoom: 12,
      filter: [
        "all",
        ["in", "9m", "w4XRjwX", "w4X91YR", "wm13jwR", "w4Xl6nR", "w4X9NWl"],
      ],
      layout: {
        "icon-rotation-alignment": "viewport",
        "symbol-placement": "line",
        "symbol-spacing": 700,
        "text-field": "{name}",
        "text-pitch-alignment": "viewport",
        "text-size": 11,
      },
      paint: {
        "text-color": "rgba(255, 255, 255, 1)",
        "text-halo-color": "rgba(85, 85, 85, 1)",
        "text-halo-width": 2,
      },
    },
    {
      id: "oog",
      type: "symbol",
      source: "osm",
      "source-layer": "4v",
      minzoom: 7,
      filter: ["all", ["in", "9m", "2rorYgG", "2rorQwl"]],
      layout: {
        "icon-rotation-alignment": "viewport",
        "symbol-placement": "line",
        "symbol-spacing": 700,
        "text-field": "{name}",
        "text-padding": {
          stops: [
            [10, 1],
            [11, 2],
          ],
        },
        "text-pitch-alignment": "viewport",
        "text-size": {
          stops: [
            [7, 11],
            [11, 13],
          ],
        },
      },
      paint: {
        "text-color": "rgba(255, 231, 159,1)",
        "text-halo-color": "rgba(134, 70, 17, 1)",
        "text-halo-width": 2,
      },
    },
    {
      id: "A9x",
      type: "symbol",
      source: "osm",
      "source-layer": "4v",
      minzoom: 7,
      filter: ["all", ["in", "9m", "2rorYgG", "2rorQwl"], ["has", "vB"]],
      layout: {
        "icon-image": "高速",
        "icon-padding": {
          stops: [
            [7, 20],
            [12, 60],
          ],
        },
        "icon-rotation-alignment": "viewport",
        "icon-text-fit": "both",
        "icon-text-fit-padding": [2, 4, 2, 4],
        "symbol-placement": "line",
        "symbol-spacing": 700,
        "text-field": "{vB}",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-size": 11,
      },
      paint: {
        "text-color": "rgba(255, 255, 255, 1)",
        "text-halo-color": "rgba(255, 255, 255, 0.8)",
        "text-halo-width": 0.1,
      },
    },
    {
      id: "83R",
      type: "symbol",
      source: "osm",
      "source-layer": "4v",
      minzoom: 12,
      filter: ["all", ["in", "9m", "2ro78ml", "2roGK0M", "wm1Wwa6", "2PnB1lq"]],
      layout: {
        "icon-rotation-alignment": "viewport",
        "symbol-placement": "line",
        "symbol-spacing": 700,
        "text-field": "{name}",
        "text-pitch-alignment": "viewport",
        "text-size": 13,
      },
      paint: {
        "text-color": "rgba(255, 255, 255, 1)",
        "text-halo-color": "rgba(176, 98, 55, 1)",
        "text-halo-width": 2,
      },
    },
    {
      id: "PZ9",
      type: "symbol",
      source: "osm",
      "source-layer": "4v",
      minzoom: 14,
      filter: ["all", ["in", "9m", "2ro78ml", "2roGK0M"], ["has", "vB"]],
      layout: {
        "icon-image": "国道",
        "icon-padding": {
          stops: [
            [7, 20],
            [12, 60],
          ],
        },
        "icon-rotation-alignment": "viewport",
        "icon-text-fit": "both",
        "icon-text-fit-padding": [2, 2, 2, 2],
        "symbol-placement": "line",
        "symbol-spacing": 700,
        "text-field": "{vB}",
        "text-rotation-alignment": "viewport",
        "text-size": 11,
      },
      paint: {
        "text-color": "rgba(247, 244, 242, 1)",
        "text-halo-color": "rgba(255, 255, 255, 0.8)",
        "text-halo-width": 0.1,
      },
    },
    {
      id: "bD9",
      type: "symbol",
      source: "osm",
      "source-layer": "4v",
      minzoom: 14,
      filter: ["all", ["in", "9m", "2rvn4yM", "2rvnj5q", "2Pnrkmv"]],
      layout: {
        "icon-rotation-alignment": "viewport",
        "symbol-placement": "line",
        "symbol-spacing": 700,
        "text-field": "{name}",
        "text-padding": 1,
        "text-pitch-alignment": "viewport",
        "text-size": 12,
      },
      paint: {
        "text-color": "rgba(255, 255, 255, 1)",
        "text-halo-color": "rgba(104, 54, 13, 1)",
        "text-halo-width": 2,
      },
    },
    {
      id: "7MY",
      type: "symbol",
      source: "osm",
      "source-layer": "4v",
      minzoom: 12,
      filter: ["all", ["in", "9m", "2rvn4yM"], ["has", "vB"]],
      layout: {
        "icon-image": "省道",
        "icon-padding": {
          stops: [
            [7, 20],
            [12, 60],
          ],
        },
        "icon-rotation-alignment": "viewport",
        "icon-text-fit": "both",
        "icon-text-fit-padding": [2, 2, 2, 2],
        "symbol-placement": "line",
        "symbol-spacing": 700,
        "text-field": "{vB}",
        "text-padding": 1,
        "text-rotation-alignment": "viewport",
        "text-size": 11,
      },
      paint: {
        "text-color": "rgba(255, 255, 255, 1)",
        "text-halo-color": "rgba(255, 255, 255, 0.8)",
        "text-halo-width": 0.1,
      },
    },
    {
      id: "4Wv",
      type: "symbol",
      source: "osm",
      "source-layer": "4v",
      minzoom: 14,
      filter: [
        "all",
        [
          "in",
          "9m",
          "2PnGMVv",
          "wmkJyg3",
          "kkGDYle",
          "2PR14WM",
          "2PRoDvq",
          "wm6Ov76",
          "wm60xBj",
          "2rv8XzN",
          "2r0RNyj",
          "2r0WR25",
          "2PnPKR5",
          "2rv4wjq",
          "2rvDDMq",
          "2Pnr80j",
        ],
      ],
      layout: {
        "icon-rotation-alignment": "viewport",
        "symbol-placement": "line",
        "symbol-spacing": 500,
        "text-field": "{name}",
        "text-pitch-alignment": "viewport",
        "text-size": 12,
      },
      paint: {
        "text-color": "rgba(255, 255, 255,1)",
        "text-halo-color": "rgba(104, 54, 13, 1)",
        "text-halo-width": 1,
      },
    },
    {
      id: "lPx",
      type: "symbol",
      source: "osm",
      "source-layer": "b9",
      minzoom: 12,
      filter: ["all", ["in", "9m", "24Z2x3v", "KbBOe0Y", "24b9DqZ", "24b9v7r"]],
      layout: {
        "icon-rotation-alignment": "viewport",
        "symbol-placement": "line",
        "symbol-spacing": 500,
        "text-field": "{name}",
        "text-padding": 1,
        "text-pitch-alignment": "viewport",
        "text-size": {
          stops: [
            [12, 11],
            [13, 12],
          ],
        },
      },
      paint: {
        "text-color": "rgba(255, 255, 255, 1)",
        "text-halo-color": "rgba(104, 54, 13, 1)",
        "text-halo-width": {
          stops: [
            [12, 1],
            [13, 2],
          ],
        },
      },
    },
    {
      id: "kKR",
      type: "symbol",
      source: "osm",
      "source-layer": "7Y",
      minzoom: 13,
      filter: [
        "all",
        [
          "in",
          "vB",
          "kOwjNbR",
          "rOy68wo",
          "QnqVOZV",
          "0z1qk0w",
          "bkO2bX9",
          "GnPGyY9",
          "VnjzOYM",
          "W9qm5YG",
          "oO7evzg",
          "z5Bg2Ja",
          "GnPGyBQ",
          "oO7evK5",
          "kOwyBKX",
          "rOy2QkR",
          "Qnq1Ny1",
          "0z1lB7W",
          "bkOa91m",
          "GnP2ZOQ",
          "kOKbJ8Q",
          "kOAAV4Y",
          "rODDKNb",
          "kOKbJk3",
          "kOKxzkR",
          "kOAmMje",
          "kOQV8mB",
        ],
      ],
      layout: {
        "icon-rotation-alignment": "viewport",
        "symbol-placement": "line",
        "symbol-spacing": 700,
        "text-field": "{name}",
        "text-pitch-alignment": "viewport",
        "text-size": 12.5,
      },
      paint: {
        "text-color": "rgba(80, 80, 80, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 2,
      },
    },
    {
      id: "JlB",
      type: "symbol",
      source: "osm",
      "source-layer": "zb",
      minzoom: 7,
      filter: ["all", ["in", "9m", "Xb0JA7D", "Xb0w60W", "Xb0wxbq", "Xb0wNBO"]],
      layout: {
        "text-field": "{name}",
        "text-padding": 30,
        "text-size": 14,
      },
      paint: {
        "text-color": "rgba(255, 255, 255, 1)",
        "text-halo-color": "rgba(14, 122, 173, 1)",
        "text-halo-width": 2,
      },
    },
    {
      id: "25Z",
      type: "symbol",
      source: "osm",
      "source-layer": "9m",
      minzoom: 7,
      filter: ["all", ["==", "9m", "ke9NJ1n"]],
      layout: {
        "icon-rotation-alignment": "viewport",
        "symbol-placement": "line",
        "symbol-spacing": 700,
        "text-field": "{name}",
        "text-pitch-alignment": "viewport",
        "text-size": 13,
      },
      paint: {
        "text-color": "rgba(255, 255, 255, 1)",
        "text-halo-color": "rgba(46, 127, 175, 1)",
        "text-halo-width": 2,
      },
    },
    {
      id: "wDe",
      type: "symbol",
      source: "osm",
      "source-layer": "zb",
      minzoom: 10,
      filter: [
        "all",
        ["!in", "9m", "Xb0JA7D", "Xb0w60W", "Xb0wxbq", "Xb0wNBO"],
      ],
      layout: {
        "symbol-placement": "line",
        "symbol-spacing": 700,
        "text-field": "{name}",
        "text-padding": 20,
        "text-size": 12,
      },
      paint: {
        "text-color": "rgba(255, 255, 255, 1)",
        "text-halo-color": "rgba(64, 160, 216, 1)",
        "text-halo-width": 2,
      },
    },
    {
      id: "Kox",
      type: "symbol",
      source: "osm",
      "source-layer": "og",
      minzoom: 11,
      maxzoom: 17,
      filter: ["all", ["in", "9m", "9DMbOem", "9DXPy7G"]],
      layout: {
        "symbol-avoid-edges": true,
        "text-field": "{name}",
        "text-padding": 20,
        "text-size": 12,
      },
      paint: {
        "text-color": "rgba(255, 255, 255, 1)",
        "text-halo-color": "rgba(50, 50, 50, 1)",
        "text-halo-width": 2,
      },
    },
    {
      id: "NKr",
      type: "symbol",
      source: "osm",
      "source-layer": "Ax",
      minzoom: 8,
      filter: ["all", ["==", "9m", "PZZMoVmR"]],
      layout: {
        "icon-image": "山峰",
        "text-anchor": "left",
        "text-field": "{name}",
        "text-justify": "left",
        "text-offset": [0.6, 0],
        "text-padding": 4,
        "text-size": 12,
      },
      paint: {
        "text-color": "rgba(255, 255, 255, 1)",
        "text-halo-color": "rgba(80, 80, 80, 1)",
        "text-halo-width": 1.5,
      },
    },
    {
      id: "GJ9",
      type: "symbol",
      source: "osm",
      "source-layer": "Ax",
      minzoom: 9,
      filter: ["all", ["!in", "9m", "PZZMoVmR"]],
      layout: {
        "icon-text-fit": "both",
        "icon-text-fit-padding": [3, 3, 3, 3],
        "text-field": "{name}",
        "text-padding": 4,
        "text-size": 12,
      },
      paint: {
        "text-color": "rgba(255, 255, 255, 0.8)",
        "text-halo-color": "rgba(115, 115, 22, 1)",
        "text-halo-width": 1,
      },
    },
    {
      id: "MDO",
      type: "symbol",
      source: "osm",
      "source-layer": "Nr",
      minzoom: 8,
      filter: [
        "all",
        ["!in", "stylename", "地铁口", "公厕"],
        ["!in", "9m", "190101", "190102", "190103", "190104"],
      ],
      layout: {
        "icon-image": "{stylename}",
        "text-anchor": "left",
        "text-field": "{name}",
        "text-justify": "left",
        "text-keep-upright": false,
        "text-max-width": 8,
        "text-offset": [0.6, 0],
        "text-size": 12,
      },
      paint: {
        "text-color": "rgba(255, 255, 255, 1)",
        "text-halo-color": "rgba(115, 65, 65, 1)",
        "text-halo-width": 1,
      },
    },
    {
      id: "33X",
      type: "symbol",
      source: "osm",
      "source-layer": "Nr",
      minzoom: 8,
      filter: ["all", ["in", "stylename", "公厕"]],
      layout: {
        "icon-image": "{stylename}",
      },
    },
    {
      id: "Rln",
      type: "symbol",
      source: "osm",
      "source-layer": "Nr",
      minzoom: 17,
      filter: ["all", ["==", "stylename", "地铁口"]],
      layout: {
        "icon-image": "{stylename}",
        "icon-text-fit": "both",
        "icon-text-fit-padding": [4, 4, 4, 4],
        "text-field": "{name}",
        "text-keep-upright": false,
        "text-offset": [0.3, 0],
        "text-size": 10,
      },
      paint: {
        "text-color": "rgba(254, 254, 254, 1)",
      },
    },
    {
      id: "rko",
      type: "symbol",
      source: "osm",
      "source-layer": "Nr",
      minzoom: 13,
      filter: ["all", ["==", "9m", "190104"]],
      layout: {
        "icon-image": {
          type: "interval",
          stops: [
            [15, "乡级政府"],
            [16, ""],
          ],
        },
        "icon-text-fit": "both",
        "icon-text-fit-padding": [1, 4, 3, 4],
        "text-field": ["step", ["zoom"], ["get", "alias"], 16, ["get", "name"]],
        "text-offset": [0.5, 0],
        "text-keep-upright": false,
        "text-size": 12,
      },
      paint: {
        "text-color": "rgba(255, 255, 255, 1)",
        "text-halo-color": {
          type: "interval",
          stops: [
            [15, "rgba(255, 255, 255, 1)"],
            [16, "rgba(65, 65, 65, 1)"],
          ],
        },
        "text-halo-width": {
          type: "interval",
          stops: [
            [15, 0.1],
            [16, 2],
          ],
        },
      },
    },
    {
      id: "jgP",
      type: "symbol",
      source: "osm",
      "source-layer": "Nr",
      minzoom: 8,
      filter: ["all", ["in", "9m", "190103"]],
      layout: {
        "icon-image": {
          type: "interval",
          stops: [
            [13, "县级市"],
            [14, ""],
          ],
        },
        "icon-text-fit": "both",
        "icon-text-fit-padding": [1, 4, 3, 4],
        "text-field": ["step", ["zoom"], ["get", "alias"], 14, ["get", "name"]],
        "text-offset": [0.5, 0],
        "text-keep-upright": false,
        "text-size": 12,
      },
      paint: {
        "text-color": "rgba(255, 255, 255, 1)",
        "text-halo-color": {
          type: "interval",
          stops: [
            [13, "rgba(255, 255, 255, 1)"],
            [14, "rgba(65, 65, 65, 1)"],
          ],
        },
        "text-halo-width": {
          type: "interval",
          stops: [
            [14, 0.1],
            [15, 2],
          ],
        },
      },
    },
    {
      id: "n6X",
      type: "symbol",
      source: "osm",
      "source-layer": "Nr",
      minzoom: 7,
      filter: ["all", ["in", "9m", "190102"]],
      layout: {
        "icon-image": "政府机关",
        "text-anchor": "left",
        "text-field": ["step", ["zoom"], ["get", "alias"], 14, ["get", "name"]],
        "text-justify": "left",
        "text-offset": [0.5, 0],
        "text-padding": 4,
        "text-size": 16,
      },
      paint: {
        "text-color": "rgba(255, 255, 255, 1)",
        "text-halo-color": "rgba(65, 65, 65, 1)",
        "text-halo-width": 2,
      },
    },
    {
      id: "a6k",
      type: "symbol",
      source: "osm",
      "source-layer": "Nr",
      minzoom: 11,
      filter: ["all", ["==", "9m", "190101"]],
      layout: {
        "icon-image": "政府机关",
        "text-anchor": "left",
        "text-field": ["step", ["zoom"], ["get", "alias"], 14, ["get", "name"]],
        "text-justify": "left",
        "text-offset": [0.5, 0],
        "text-padding": 4,
        "text-size": 16,
      },
      paint: {
        "text-color": "rgba(255, 255, 255, 1)",
        "text-halo-color": "rgba(50, 50, 50, 1)",
        "text-halo-width": 2,
      },
    },
  ],
  id: "x04sv9tch",
};

export default mapStyle;
