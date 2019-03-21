
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        "targets": {
          "browsers": [">0.25%", "not ie 11", "not op_mini all"]
        },
        "useBuiltIns": "usage"
      }
    ],
    "@babel/preset-react"
  ],
    plugins: [
      // Self
      "emotion",
      "graphql-tag",
      "react-hot-loader/babel",
      "transform-inline-environment-variables",
      "@babel/plugin-transform-runtime",
      "@babel/plugin-proposal-object-rest-spread",
      ["transform-react-remove-prop-types", { "mode": "remove" }],
      // Stage 2
      ["@babel/plugin-proposal-decorators", { "legacy": true }],
      "@babel/plugin-proposal-function-sent",
      "@babel/plugin-proposal-export-namespace-from",
      "@babel/plugin-proposal-numeric-separator",
      "@babel/plugin-proposal-throw-expressions",
      // Stage 3
      "@babel/plugin-syntax-dynamic-import",
      "@babel/plugin-syntax-import-meta",
      ["@babel/plugin-proposal-class-properties", { "loose": false }],
      "@babel/plugin-proposal-json-strings",
    ]
}