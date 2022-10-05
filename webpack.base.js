//we will creaye another webpack base file and then use that code in both files, client webpack and server webpack.

module.exports = {
 // Tell webpack to run babel on every file it runs through

    // to make sure babel takes all jsx and es 2015, 16, 17 code turns it equivalent es5.
    module: {
        rules: [
            {
                test: /\.js?$/, // tell babel to run only on js files i.e excluding css and img files by adding ssome regex exp
                loader: 'babel-loader', //webpack loader modules that executes babel functionality
                exclude: /node_modules/, // exclude rule is used to exclude running babel on certain ditrectories
                options: {
                    presets: [     // prests are used by babel to transpile our code
                        'react',   // it take jsx and turns it into normal function code            
                        'stage-0', // handling async operations
                        ['env', { targets: { browsers: ['last 2 versions']}}], // env is master presets to tell run all required rules that meet last 2 browsers versions
                    ]     
                }
            }
        ]
    } 
};