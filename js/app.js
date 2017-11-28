/*
 * Funcionalidad de tu producto
 */


// suma total de estudiantes presentes por sede y generacion
// por sede:
var dataLIM20162 = data.LIM['2016-2'].students.length + 1;
console.log(dataLIM20162);
var dataLIM20171 = data.LIM['2017-1'].students.length + 1;
console.log(dataLIM20171);
var dataLIM20172 = data.LIM['2017-2'].students.length + 1;
console.log(dataLIM20172);

var numberEstudentsSeat = [dataLIM20162, dataLIM20171, dataLIM20172];

for (var i = 0; i < numberEstudentsSeat.length; i++) {
console.log(numberEstudentsSeat[i]);
};
