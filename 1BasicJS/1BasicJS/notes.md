# Some Stuff 2Do
- Install node from the ubuntu store, or from nodesource for the latest/lts version:
```
    curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
    sudo apt-get install -y nodejs
```
- Install Visual studio code through the store
- Install Rainbow Brackets extension for making sense of braces
- Install Quakka extension for trying stuff out
    - ctrl shift p to open a quokka session
- install JavaScript (ES6) code snippets extension
- Add a shortcut for `${}` - ctrl shift p prefrences user snippets, javascript \
```
"Variable in string literal":{
		"prefix": "lit",
		"body": [
			"${$1}",
		],
		"description": "Variable in string literal"
}
```