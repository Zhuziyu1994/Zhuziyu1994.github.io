const {defaultTheme} = require('@vuepress/theme-default')
const { backToTopPlugin } = require('@vuepress/plugin-back-to-top')
const { searchPlugin } = require('@vuepress/plugin-search')

module.exports = {
    lang: 'zh-CN',
    title: 'Java 问题集合',
    description: 'by 黄老师',
    head: [
        ['link', {
            rel: 'icon',
            href: '/img/index/java.png'
        }]
    ],

    plugins: [
        backToTopPlugin(),
        searchPlugin({
            // 配置项
        }),
    ],
    theme: defaultTheme({
        navbar: [
            {
                text: '点我回到首页',
                link: '/'
            },
            {
                text: 'JAVA SE',
                children: [
                    {
                        text: "Java基础",
                        link: '/md/test',

                    },
                    {
                        text: "Java高级",
                        link: '/md/test',

                    }
                ],
            },
            // 控制元素何时被激活
            {
                text: 'JAVA WEB',
                children: [
                    {
                        text: 'tomcat',
                        link: '/md/test',
                    },
                    {
                        text: '前端相关',
                        link: '/md/not-foo/',
                        activeMatch: '^/foo/',
                    },
                ],
            },
            {
                text: "idea相关",
                link: '/md/idea',
                activeMatch: '/md/idea'
            },
            {
                text: '关于',
                link: '/md/about/about.md',
            }
        ],
        logo: '/img/index/java.png',


    }),

}