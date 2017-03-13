module.exports = {
    presets: [
        ["es2015", {"loose": true}],
        "stage-0",
        "react"
    ],
    plugins: [
        "add-module-exports",
        [require("babel-plugin-transform-builtin-extend").default, {
            globals: ["Error", "Array"]
        }]
    ]
};
