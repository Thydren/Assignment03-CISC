// 1. Write code to display a triangle in the console that looks similar to the following.
// You should use a loop to accomplish this.
// #
// ##
// ###
// ####
// ###
// ##
// #
let output = ""; 
for (i = 1; i <= 4; i++) {
    output = output + "#";
    console.log(output);
}
for (i = 3; i>= 1; i--) {
    output = output.substring(0, i);
    console.log(output);
}
