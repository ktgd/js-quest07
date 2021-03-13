/*
**
** QWASAR.IO -- my_array_uniq
**
**
** @param {Integer[]} param_1
** @return {integer[]}

**
*/


function my_array_uniq(param_1) {
/*  var A = [];

  for ( i = 0; i < param_1.length; i++ ) {
    if ( param_1[i] != param_1[i-1] ) {
      A.push(param_1[i]);
    }
  }
  return param_1; // This won't work, because the input array is not always sorted.*/
  return _.uniq(param_1, false); // What the fuck?
};