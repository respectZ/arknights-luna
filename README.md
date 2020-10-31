# arknights-luna
Arknights Proxy with data modification

This won't update nor save your account progress, because it's only client-side

just my oldddd project, too lazy to port it into python

Use with your own risk

# Setup
Use NodeJS, mitmdump, and Python
```javascript
npm i request
npm i express
npm i body-parser
node index.js
```
```
mitmdump.exe -s ak.py
```
then use the proxy

### NOTE :

If you're using Android 7.0 or later, you have to bypass ssl pinning (?). You can do that by using EdExposed Module SSLUnpinning or something. frida can do this maybe ?

Idk though for iOS

# Configuration
## Data Configuration
data/character_table.json

data/skin_table.json

OR

```javascript
//character_table = JSON.parse(await getRequest('https://raw.githubusercontent.com/Dimbreath/ArknightsData/master/en-US/gamedata/excel/character_table.json'));
//dataSkin = JSON.parse(await getRequest('https://raw.githubusercontent.com/Dimbreath/ArknightsData/master/en-US/gamedata/excel/skin_table.json'));
```
uncomment to fetch directly from Dimbreath's github
## Account
account/sample.json for base account

fetch it from capturing /account/syncData

I'll provide it later
## Account Configuration
```javascript
var orundum = 123456789; //Orundum
var paidPO = 12345; //OrginitePrime
var name = "Luna"; //Name
var nickNumber = -1; //nickNumbeer
var level = -1; //Level
var exp = 0; //Exp
var resume = "Luna"; //Resume
var secretary = "char_113_cqbw"; //Secretary (W)
var secretarySkinId = "char_113_cqbw#2" //Secretary Skin (W E2)
```

# Features
* All Operators and Skins, based table
* Battle, no reward though, no consumption ~~annihilation~~
* Gacha (Ten pulls only, see Gacha Configuration) ~~single pull~~
* Orginite Prime Conversion into Orundum

# Screenshots
