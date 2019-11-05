var path = require('path');
module.exports={
	mode:"development",
	entry: "./web/js/app.js",
	output:{
		path: path.resolve(__dirname, 'dist'), 
		filename:"bundle.web.js"
	},
	module: {
		rules: [
			{
		      test: /src\/\.m?js$/,
		      exclude: /(node_modules)/,
		      use: 'babel-loader',
		    }
		]
	}
}