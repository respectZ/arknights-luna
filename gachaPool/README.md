# Gacha Configuration
Open pool.txt for example
```
[3] //3 stars
Fang
Vanilla
Plume
Melantha
...
[4] //4 stars
Haze
Gitano
Jessica
Meteor
Shirayuki
...
[5] //5 stars
Ptilopsis
Zima
Texas
Franka
Lappland
Specter
...
[6] //6 stars
Exusiai
Siege
Ifrit
Eyjafjalla
Angelina
...
[rateup] //rateup
Blaze
GreyThroat
...
```
then run
```
node picker.js
```
open the output, default is NORM_EN_6_0_2.json
look at the last index, you have to define it manually for star rateup [im lazy]
```
[
  	[],
  	[],
  	[],
  	["char_367_swllow"], //4 star rateup
  	["char_166_skfire","char_302_glaze"], //5 star rateup
  	["char_113_cqbw","char_250_phatom"] //6 star rateup
  ]
```
