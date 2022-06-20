const path = require('path');
const process = require('process');
console.log(path.basename('D:/Users/NABAJYOTI/Node JS/NodeJS_CodeWithHarry/path_module.js'));
console.log(path.dirname('D:/Users/NABAJYOTI/Node JS/NodeJS_CodeWithHarry/path_module.js'));
console.log(path.extname('D:/Users/NABAJYOTI/Node JS/NodeJS_CodeWithHarry/path_module.js'));
console.log(path.extname(__filename));
console.log(__dirname);
console.log( path.parse(__filename) );
console.log(path.format(
    {
  root: 'D:\\',
  dir: 'D:\\Users\\NABAJYOTI\\Node JS\\NodeJS_CodeWithHarry',
  base: 'path_module.js',
  ext: '.js',
  name: 'path_module'
}
) );
console.log(__filename.split(path.sep));
console.log(typeof __filename);
console.log(process.env.PATH);
console.log(process.env.PATH.split(path.delimiter));
console.log( path.isAbsolute(__dirname) );
console.log( path.isAbsolute(__filename) );
console.log(path.join(__dirname,__filename));
console.log( path.join('nodejs\\node_modules\\npm') ); //-->separator in windows -- \\(2 backward slash)
console.log( path.join('nodejs','node_modules','/npm') );//-->separator in posix  -- /(forward slash)
console.log(path.join('nodejs', 'node_modules', '\npm')); //->problem, use \\
console.log( path.delimiter );  //path delimiter in windows -->; path delimiter in linux -->:
console.log(path.normalize(__dirname + '\\..'));
console.log( __dirname.split(path.sep) );
console.log( __dirname );
console.log( path.resolve('D:/Users/NABAJYOTI','Node JS','NodeJS_CodeWithHarry'));
console.log( path.resolve('D:/Users/NABAJYOTI','NodeJS_CodeWithHarry'));
console.log( path.resolve('Node JS','NodeJS_CodeWithHarry'));

// If, after processing all given path segments, an absolute path has not yet been generated, the current working directory is used.



 







