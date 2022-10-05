// webpack for browser only no SSR

const path = require('path');
const merge  = require('webpack-merge'); // lib used for merge webpack
const baseConfig = require('./webpack.base.js'); // common module files for module rules

const config = { //export config for webpack client

//    target: 'node',  =>>> no need to target node in client webpack

   //Tell webpack the root file for client app i.e enrty point of our app
   entry: './src/client/client.js',

   // Tell webpack where to put output file i.e generated
   
   output: {
       filename: 'bundle.js', //by what name our output file to be created
       path: path.resolve(__dirname, 'public') // public name is used coz it is publicly available in browser 
    },
    
    // babel is same for browser and server webpack nelow code remains same
    // // Tell webpack to run babel on every file it runs through

    // // to make sure babel takes all jsx and es 2015, 16, 17 code turns it equivalent es5.
    // module: {
    //     rules: [
    //         {
    //             test: /\.js?$/, // tell babel to run only on js files i.e excluding css and img files by adding ssome regex exp
    //             loader: 'babel-loader', //webpack loader modules that executes babel functionality
    //             exclude: /node_modules/, // exclude rule is used to exclude running babel on certain ditrectories
    //             options: {
    //                 presets: [     // prests are used by babel to transpile our code
    //                     'react',   // it take jsx and turns it into normal function code            
    //                     'stage-0', // handling async operations
    //                     ['env', { targets: { browsers: ['last 2 versions']}}], // env is master presets to tell run all required rules that meet last 2 browsers versions
    //                 ]     
    //             }
    //         }
    //     ]
    // } 

        //ABOVE module Rule code is commented coz this is used same in client webpack, we will creaye another webpack base file and then use that code in both files, client webpack and server webpack.

};

module.exports = merge(baseConfig, config); //exports and merging common mdule file.