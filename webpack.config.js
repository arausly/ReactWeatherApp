module.exports = {
    entry:'./app/app.jsx',
    output:{
        path:__dirname,
        filename:'./public/bundle.js'
    },
    resolve:{
        modules:[__dirname,'node_modules'],
        alias:{
            Main:'app/components/Main.jsx',
            NavBar: 'app/components/NavBar.jsx',
            Weather: 'app/components/Weather.jsx',
            WeatherForm:'app/components/WeatherForm.jsx',
            WeatherReport:'app/components/WeatherReport.jsx',
            About: 'app/components/About.jsx',
            Example: 'app/components/Example.jsx',
            openWeatherMap: 'app/api/openWeatherMap.jsx',
        
        },
        extensions:['.js','.jsx']
    },
    module:{
       loaders:[
             {
              loader:'babel-loader',
              query:{
                  presets: ['react','es2015','stage-0']
              },
              test:/\.jsx?$/,
              exclude:/(node_modules | bower_component)/
                 
             } 
       ]
    }
};