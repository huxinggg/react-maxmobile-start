
#### 快速启动

```
yarn && yarn start
```
#### 构建开发环境对应.env.development配置文件
```
yarn build:dev
```

#### 构建测试环境对应.env.test配置文件
```
yarn build:test
```

#### 构建生产环境对应.env.production配置文件
```
yarn build
```

#### 关于px转换，请修改config-overrides.js文件中如下代码

```
require('postcss-px-to-viewport')({
    unitToConvert: 'px',
    viewportWidth: 320,
    unitPrecision: 5,
    propList: ['*'],
    viewportUnit: 'vw',
    fontViewportUnit: 'vw',
    selectorBlackList: [],
    minPixelValue: 1,
    mediaQuery: false,
    replace: true,
    exclude: undefined,
    include: undefined,
    landscape: false,
    landscapeUnit: 'vw',
    landscapeWidth: 568
})

参考：https://github.com/evrone/postcss-px-to-viewport/blob/master/README_CN.md
```

#### 关于配置项
```
参考：https://create-react-app.bootcss.com/docs/getting-started
```
