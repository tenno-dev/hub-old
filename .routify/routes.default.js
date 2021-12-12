

export default {
  "meta": {},
  "id": "_default",
  "module": () => import('../src/routes/_module.svelte'),
  "file": {
    "path": "src/routes/_module.svelte",
    "dir": "src/routes",
    "base": "_module.svelte",
    "ext": ".svelte",
    "name": "_module"
  },
  "rootName": "default",
  "routifyDir": import.meta.url,
  "children": [
    {
      "meta": {
        "fallback": true
      },
      "id": "_default__fallback_svelte",
      "name": "_fallback",
      "module": () => import('../src/routes/_fallback.svelte'),
      "file": {
        "path": "src/routes/_fallback.svelte",
        "dir": "src/routes",
        "base": "_fallback.svelte",
        "ext": ".svelte",
        "name": "_fallback"
      },
      "children": []
    },
    {
      "meta": {},
      "id": "_default_index_svelte",
      "name": "index",
      "module": () => import('../src/routes/index.svelte'),
      "file": {
        "path": "src/routes/index.svelte",
        "dir": "src/routes",
        "base": "index.svelte",
        "ext": ".svelte",
        "name": "index"
      },
      "children": []
    },
    {
      "meta": {},
      "id": "_default_patchnotes_svelte",
      "name": "patchnotes",
      "module": () => import('../src/routes/patchnotes.svelte'),
      "file": {
        "path": "src/routes/patchnotes.svelte",
        "dir": "src/routes",
        "base": "patchnotes.svelte",
        "ext": ".svelte",
        "name": "patchnotes"
      },
      "children": []
    },
    {
      "meta": {},
      "id": "_default_rivendata_svelte",
      "name": "rivendata",
      "module": () => import('../src/routes/rivendata.svelte'),
      "file": {
        "path": "src/routes/rivendata.svelte",
        "dir": "src/routes",
        "base": "rivendata.svelte",
        "ext": ".svelte",
        "name": "rivendata"
      },
      "children": []
    },
    {
      "meta": {},
      "id": "_default_warframes",
      "name": "warframes",
      "module": false,
      "file": {
        "path": "src/routes/warframes",
        "dir": "src/routes",
        "base": "warframes",
        "ext": "",
        "name": "warframes"
      },
      "children": [
        {
          "meta": {
            "dynamic": true
          },
          "id": "_default_warframes__name__svelte",
          "name": "[name]",
          "module": () => import('../src/routes/warframes/[name].svelte'),
          "file": {
            "path": "src/routes/warframes/[name].svelte",
            "dir": "src/routes/warframes",
            "base": "[name].svelte",
            "ext": ".svelte",
            "name": "[name]"
          },
          "children": []
        },
        {
          "meta": {},
          "id": "_default_warframes_index_svelte",
          "name": "index",
          "module": () => import('../src/routes/warframes/index.svelte'),
          "file": {
            "path": "src/routes/warframes/index.svelte",
            "dir": "src/routes/warframes",
            "base": "index.svelte",
            "ext": ".svelte",
            "name": "index"
          },
          "children": []
        }
      ]
    }
  ]
}