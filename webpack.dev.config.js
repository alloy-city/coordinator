const path = require('path');

const opts = {
    DEBUG: true,
    "ifdef-verbose": true,
    "ifdef-triple-slash": true
};

module.exports = {
    entry: './index.js',
    module: {
        rules: [{
            use: [{ loader: "ifdef-loader", options: opts }],
            exclude: /node_modules/
        }]
    },
    output: {
        filename: 'coordinator-bundle.js',
        path: path.resolve("../../alloy-server/apps/pantoufle/public/static-files/modules")
    },
    mode: "development",
    devtool: "inline-source-map"
};
