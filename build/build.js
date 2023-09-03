const { rimraf } = require('rimraf')

const ora = require('ora') // terminal转圈圈的插件

const chalk = require('chalk') // 为终端打印不同的颜色文字的插件

const webpack = require('webpack')
const webpackConfig = require('./webpack.config')()

// 控制台转圈圈
const spinner = ora('building for ' + process.env.NODE_ENV + '...')
spinner.start()

// 移除dist目录的内容，让后执行打包
rimraf(webpackConfig.output.path).then(
    () => doWepack()
).catch(err => {throw err})


function doWepack() {    webpack(webpackConfig, (err, stats) => {
        spinner.stop()
        if(err) {throw err}
        process.stdout.write(stats.toString({
            colors: true,
            module: false,
            children: false,
            chunls: false,
            chunkModules: false
        }) + '\n\n')
        console.log(chalk.cyan('Build complete.\n'))
    })
}


