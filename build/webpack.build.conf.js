const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const webpack = require('webpack');


const PATHS = require('./PATHS');

module.exports = merge(baseWebpackConfig, {
    mode: 'production',

    entry: {
        main: `${PATHS.src}/js/main/main.js`, 
        home: `${PATHS.src}/js/pages/home/home.js`,
        admin: `${PATHS.src}/js/pages/admin/admin.js`,

        lessons: `${PATHS.src}/js/pages/lessons/lessons.js`,
        lesson: `${PATHS.src}/js/pages/lesson/lesson.js`,
        tests: `${PATHS.src}/js/pages/tests/tests.js`,
        test: `${PATHS.src}/js/pages/test/test.js`,


        



    },


});

