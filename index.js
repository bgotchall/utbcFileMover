//this util moves "src" folders around for learning react.  It:
//1) renames the local ./src folder to ./src_exN
//2) copies the src folder from the next exercise N+1 into the current directory as "src".
// in this way with one command you save the work you did on the current exercise and stage
// the next with one command.
// useage: utbcfm [n][--help] where n is the number of the excercise you just performed.  
// if n is omitted, it assumes n=1 and will increment n each execution so that if you start 
// with the first exercise you can just use it without arguments.  
// examples:
// utbcfm 2         Moves ./src to ./src_ex2 and copies ../..03*/src/* to ./src
// utbcfm           Moves ./src to ./src_ex3 and copies ../..04*/src/* to ./src
// 
// 
var mv = require('mv');


exports.printMsg = function () {
    console.log("This is a message from the demo package");
    console.log("hi, I am installed properly");
}


exports.move = function () {

    //do a dumb test:
    mv('./sourceFile.txt','./destFile.txt');
    
}






mv('source/file', 'dest/file', function (err) {
    // done. it tried fs.rename first, and then falls back to
    // piping the source file to the dest file and then unlinking
    // the source file.
});
//Another example:

mv('source/dir', 'dest/a/b/c/dir', { mkdirp: true }, function (err) {
    // done. it first created all the necessary directories, and then
    // tried fs.rename, then falls back to using ncp to copy the dir
    // to dest and then rimraf to remove the source dir
});
//Another example:

mv('source/file', 'dest/file', { clobber: false }, function (err) {
    // done. If 'dest/file' exists, an error is returned
    // with err.code === 'EEXIST'.
});