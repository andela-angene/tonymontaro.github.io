var n = 7; // the number of temperatures to analyse
var temps = '42 -5 12 21 5 24'.split(' '); // the n temperatures expressed as integers ranging from -273 to 5526

function print(str){
    console.log(str);
}
//
//if (temps != ""){
//    lst = [];
//    temps = temps.split(' ');
//    cmp = parseInt(temps[0]);
//    for (i=0; i<n; i++){
//        cmpa = Math.abs(parseInt(cmp));
//        tmpa = Math.abs(parseInt(temps[i]));
//        if ( cmpa > tmpa ){
//            cmp = parseInt(temps[i]);
//        }else if( cmpa == tmpa && cmp != parseInt(temps[i]) ){
//            lst.push(cmpa);
//            cmp = cmpa;
//        }
//    }
//    lst.push(cmp);
//}else{
//    lst = [0];
//}
//
//print( Math.min.apply(null, lst) );

//var sortedTemps = temps.sort((a, b) => Math.abs(a) - Math.abs(b) || b - a);
//print(sortedTemps);
//
//var result = sortedTemps[0] || 0;
//
//print(result);

print( (() => 34 > 2)() )