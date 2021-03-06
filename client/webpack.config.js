var path = require("path");
var config = require("./js/config.js");

module.exports = {
    entry: {
        app: [
            './js/app.js',
            'webpack-dev-server/client?'+config.root,
            'webpack/hot/only-dev-server'
        ]
    },

    output: {
        publicPath: config.root+'/',
        filename: '[name].js'
    },

    devServer:{
         proxy: {
	    		'/socket.io/*':{
					target: 'http://localhost:9095',
	    		},
	    		'/comms/*':{
					target: 'http://localhost:9095',
	    		},
	    		'/apps/*':{
	    			target: 'http://localhost:9095',
	    		},
	    		'/debug/*':{
	    			target: 'http://localhost:9095',
	    		},
                '/ui/*':{
                    target: 'http://localhost:9095',
                },
        }
    },

    module: {
        loaders:[
                { test: /\.js$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
                { test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
                { test: /\.css$/, loaders: ['style', 'css'] },
                { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192'},
                { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff/[name].[ext]" },
                { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader?limit=8192" },
        ],
    },

};
