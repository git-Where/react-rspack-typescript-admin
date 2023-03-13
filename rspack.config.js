const path = require('path')
const isProduction = process.env.NODE_ENV === "production"

module.exports = {
    mode:process.env.NODE_ENV,
    devTool: !isProduction ? 'source-map' : false,
    entry:{
        main:'./src/index.tsx'
    },
    output:{
        filename:'main.js',
        path:path.resolve(__dirname,'dist')
    },
    builtins:{ // 配置html
        html:[
            {
                template:"./public/index.html",
                title:"moment",
                inject:"head"
            }
        ]
    },
    devServer:{
        hot:true,
        compress:true, // 是否启用gzip压缩
        historyApiFallback:true, // 解决前端路由刷新404现象
        client:{
            logging:"info",
            overlay:false
        },
        open:true
    },
    resolve:{
        alias:{
            "@":path.resolve(__dirname,'./src/pages'),
            "~":path.resolve(__dirname,'./src')
        }
    },
    module:{
        rules:[
            {
                test:/\.scss$/,
                use:[
                    {
                        loader:"sass-loader",
                        options:{

                        }
                    }
                ],
                type:"css"
            }
        ]
    }
}