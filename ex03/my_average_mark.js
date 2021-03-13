/*
**
** QWASAR.IO -- my_average_mark
**
**
** @param {String_integer[]} param_1
** @return {float}

**
*/


function my_average_mark(param_1) {
  var A = param_1;
  var x_n = 0; //var i = 0;
  var n_max = A.length;
  var Sigma = 0;
  var mu = 0;

  for ( x_n = 0; x_n < n_max; x_n++ ) { // Here's my original for loop.
    Sigma += A[x_n]['integer']; // THE QUOTES, FOR FUCK'S SAKE. THE QUOTES.   T H E   Q U O T E S .   DAMN IT. SHIT. 24 hours went down the drain for the same goddamn oversight one more time. TTHHEE QQUUOOTTEESS..
  }; // Thank you, Abraham Onoja, for reminding me of THE FUCKING QUOTES. Argh.
  mu += ( Sigma / n_max );
  return mu.toFixed(1);
}; // This was my own first-ever attempt at a solution to this problem. A un detail pres, it looked just like this; I wasn't working on a copy of param_1, variables were declared on the fly, and it failed, because I hadn't quoted 'integer'.

/*var param_1 = [
  {"string": "Quentin", "integer": 1},
  {"string": "Fred", "integer": 1},
  {"string": "Julia", "integer": 18},
  {"string": "stephanie", "integer": 13}
]*/
/*
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
}; // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values*/