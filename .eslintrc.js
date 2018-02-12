module.exports = {
    "env": {
        "browser": true,
        "node": true,
				"mocha": true
    },
    "extends": ["airbnb-base", "eslint:recommended"],
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-console":0,
    }
};