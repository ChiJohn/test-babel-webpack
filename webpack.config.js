const path = require('path');
module.exports = {
    mode: 'production',
    entry: {
        app :['./index.js'],
        vendors: './index1.js'
    },
    output: {
        path: path.resolve(__dirname,'./dist'),
        filename: '[name].[chunkhash:8].js'
    },
    resolveLoader: {
        modules:['node_modules','./loaders']
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:[{
                    loader:'babel-loader',
                }]
            }
        ]
    }
}