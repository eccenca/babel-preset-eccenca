module.exports = {
    presets: [
        require("babel-preset-es2015-loose"),
        require("babel-preset-stage-0"),
        require("babel-preset-react")
    ],
    plugins: [
        require("babel-plugin-add-module-exports")
    ]
};