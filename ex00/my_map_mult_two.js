/*
**
** QWASAR.IO -- my_map_mult_two
**
**
** @param {Integer[]} param_1
** @return {integer[]}

**
*/


function my_map_mult_two(param_1) {
/*  for (i = 0; i < param_1.length; i++)
    return param_1[i] * 2;*/
//  param_1.map( function f(x) { return ( x * 2 ); } );
  for (i = 0; i < param_1.length; i++) {
    param_1[i] *= 2;
  };
  return param_1;
};