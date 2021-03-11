/*
**
** QWASAR.IO -- my_count_on_it
**
**
** @param {String[]} param_1
** @return {integer[]}

**
*/


function my_count_on_it(param_1) {
  for (i = 0; i < param_1.length; i++) {
    param_1[i] = param_1[i].length;
  };
  return param_1;
};