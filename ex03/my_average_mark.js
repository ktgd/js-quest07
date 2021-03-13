/*
**
** QWASAR.IO -- my_average_mark
**
**
** @param {String_integer[]} param_1
** @return {float}

**
*/


/*var param_1 = [
  {"string": "Quentin", "integer": 1},
  {"string": "Fred", "integer": 1},
  {"string": "Julia", "integer": 18},
  {"string": "stephanie", "integer": 13}
]*/

function my_average_mark(param_1) {
//  return _.mean(Object.keys(param_1[i])); //return _.mean(Object.values(param_1[i]));
  var variable = param_1.map(({integer})=>({integer})) // https://stackoverflow.com/a/59599050

  for (var i = 0; i < variable.length; i++) {
//  console.log(Object.values(variable[i]).toString().replace(/\D/g, "")); //.toString().replace(/\D/g, "").Number() // https://stackoverflow.com/questions/30607419/return-only-numbers-from-string#comment92674936_30607466 https://stackoverflow.com/questions/4775206/var-replace-is-not-a-function#comment45715147_4775206
    variable[i] = Object.values(variable[i]).toString().replace(/\D/g, "");
  }

  var Sigma = 0;
  var n_max = variable.length;

  for (var i = 0; i < variable.length; i++) {
    Sigma += parseInt( variable[i], 10 ); // Base: 10;
  }

  var mu = ( Sigma / n_max ).toFixed(1);

//  console.log(mu);
  return mu;
}; // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values