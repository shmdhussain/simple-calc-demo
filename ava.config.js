export default {
	"files": [
		"test/**/*",
	],
	
	"sources": [
		"src/**/*"
	],
	
	"cache": true,
	"concurrency": 5,
	"failFast": true,
	"failWithoutAssertions": false,
	
	"verbose": true,
	// "compileEnhancements": false,
	"require": [
		"esm"
	],
	"extensions": [
		"mjs"
	],
	"babel": {
		"extensions": ["js"],
		"testOptions": {
			"babelrc": false,
			"configFile": false,
			"presets": [
					["module:ava/stage-4", {"modules": false}]
			 ]
		}
	}
}