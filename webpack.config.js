module.exports = {
    context: __dirname + "/src/public",
    entry: "./module/test/main.js",
    output: {
        path: __dirname + "/dist",
        filename: '[name].js' // 模版基于上边 entry 的 key
    },
    resolve: {
        modulesDirectories : [__dirname + "/src/public/lib"]
    }
};