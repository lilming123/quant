import {
    CaretRightOutlined,
    LaptopOutlined,
    NotificationOutlined,
    QuestionCircleOutlined,
    SyncOutlined,
    UserOutlined
} from '@ant-design/icons';
import {Checkbox, Collapse, Divider, Button, message, FloatButton, InputNumber, Layout, Select, theme} from 'antd';
import React, {useState} from 'react';
import ReactEcharts from "echarts-for-react"

const { Panel } = Collapse;
const { Header, Content, Sider } = Layout;
const CheckboxGroup = Checkbox.Group;
const plainOptions = [
    {
        label: 'cne5_盈利因子',
        value: 'cne5_盈利因子',

    },
    {
        label: 'cne5_动量因子',
        value: 'cne5_动量因子',disabled: true,
    },
    {
        label: 'cne5_波动率因子',
        value: 'cne5_波动率因子',disabled: true,

    },{
        label: 'cne5_非线性规模因子',
        value: 'cne5_非线性规模因子',disabled: true,

    },
    {
        label: 'cne5_估值因子',
        value: 'cne5_估值因子',disabled: true,

    },
    {
        label: 'cne5_流动性因子',
        value: 'cne5_流动性因子',disabled: true,

    },
];
const defaultCheckedList = ['cne5_盈利因子'];
[UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
    const key = String(index + 1);
    return {
        key: `sub${key}`,
        icon: React.createElement(icon),
        label: `subnav ${key}`,
        children: new Array(4).fill(null).map((_, j) => {
            const subKey = index * 4 + j + 1;
            return {
                key: subKey,
                label: `option${subKey}`,
            };
        }),
    };
});
const App = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
        messageApi.open({
            type: 'loading',
            content: ' 正在加载中..',
            duration: 0,
        });
        setTimeout(messageApi.destroy, 250000);
    };
    const getOption = ()=>{
        return {
            "animation": true,
            "animationThreshold": 2000,
            "animationDuration": 1000,
            "animationEasing": "cubicOut",
            "animationDelay": 0,
            "animationDurationUpdate": 300,
            "animationEasingUpdate": "cubicOut",
            "animationDelayUpdate": 0,
            "aria": {
                "enabled": false
            },
            "color": [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ],
            "series": [
                {
                    "type": "line",
                    "name": "\u6295\u8d44\u7ec4\u5408",
                    "connectNulls": false,
                    "xAxisIndex": 0,
                    "symbolSize": 4,
                    "showSymbol": true,
                    "smooth": false,
                    "clip": true,
                    "step": false,
                    "data": [
                        [
                            "2015/4/13 0:00",
                            4.042455664
                        ],
                        [
                            "2015/5/18 0:00",
                            7.51675139
                        ],
                        [
                            "2015/6/22 0:00",
                            16.23056559
                        ],
                        [
                            "2015/7/27 0:00",
                            12.40467728
                        ],
                        [
                            "2015/8/31 0:00",
                            -4.374800452
                        ],
                        [
                            "2015/10/5 0:00",
                            -2.201290416
                        ],
                        [
                            "2015/11/9 0:00",
                            12.17901146
                        ],
                        [
                            "2015/12/14 0:00",
                            9.206779188
                        ],
                        [
                            "2016/1/18 0:00",
                            -2.923174888
                        ],
                        [
                            "2016/2/22 0:00",
                            0.567083638
                        ],
                        [
                            "2016/3/28 0:00",
                            5.205936133
                        ],
                        [
                            "2016/5/2 0:00",
                            3.842818727
                        ],
                        [
                            "2016/6/6 0:00",
                            5.348417771
                        ],
                        [
                            "2016/7/11 0:00",
                            7.729031656
                        ],
                        [
                            "2016/8/15 0:00",
                            13.57549719
                        ],
                        [
                            "2016/9/19 0:00",
                            12.10418309
                        ],
                        [
                            "2016/10/24 0:00",
                            16.21276444
                        ],
                        [
                            "2016/11/28 0:00",
                            22.09120918
                        ],
                        [
                            "2017/1/2 0:00",
                            17.69894697
                        ],
                        [
                            "2017/2/6 0:00",
                            19.86006116
                        ],
                        [
                            "2017/3/13 0:00",
                            23.60366453
                        ],
                        [
                            "2017/4/17 0:00",
                            26.4370217
                        ],
                        [
                            "2017/5/22 0:00",
                            24.37709981
                        ],
                        [
                            "2017/6/26 0:00",
                            31.39956223
                        ],
                        [
                            "2017/7/31 0:00",
                            36.31199851
                        ],
                        [
                            "2017/9/4 0:00",
                            38.11293666
                        ],
                        [
                            "2017/10/9 0:00",
                            38.89322317
                        ],
                        [
                            "2017/11/13 0:00",
                            41.10229703
                        ],
                        [
                            "2017/12/18 0:00",
                            40.74060442
                        ],
                        [
                            "2018/1/22 0:00",
                            50.39303829
                        ],
                        [
                            "2018/2/26 0:00",
                            48.45390591
                        ],
                        [
                            "2018/4/2 0:00",
                            43.64125534
                        ],
                        [
                            "2018/5/7 0:00",
                            42.34814436
                        ],
                        [
                            "2018/6/11 0:00",
                            42.17500087
                        ],
                        [
                            "2018/7/16 0:00",
                            38.05025907
                        ],
                        [
                            "2018/8/20 0:00",
                            35.59960594
                        ],
                        [
                            "2018/9/24 0:00",
                            40.40742178
                        ],
                        [
                            "2018/10/29 0:00",
                            37.060224
                        ],
                        [
                            "2018/12/3 0:00",
                            39.14113022
                        ],
                        [
                            "2019/1/7 0:00",
                            35.38637133
                        ],
                        [
                            "2019/2/11 0:00",
                            39.35324786
                        ],
                        [
                            "2019/3/18 0:00",
                            52.21816335
                        ],
                        [
                            "2019/4/22 0:00",
                            59.75157208
                        ],
                        [
                            "2019/5/27 0:00",
                            48.46014756
                        ],
                        [
                            "2019/7/1 0:00",
                            54.04475149
                        ],
                        [
                            "2019/8/5 0:00",
                            52.00704737
                        ],
                        [
                            "2019/9/9 0:00",
                            56.48091136
                        ],
                        [
                            "2019/10/14 0:00",
                            56.77165142
                        ],
                        [
                            "2019/11/18 0:00",
                            53.40414121
                        ],
                        [
                            "2019/12/23 0:00",
                            58.99321663
                        ],
                        [
                            "2020/1/27 0:00",
                            61.19228492
                        ],
                        [
                            "2020/3/2 0:00",
                            68.69636639
                        ],
                        [
                            "2020/4/6 0:00",
                            64.80896185
                        ],
                        [
                            "2020/5/11 0:00",
                            67.64517533
                        ],
                        [
                            "2020/6/15 0:00",
                            67.15124845
                        ],
                        [
                            "2020/7/20 0:00",
                            79.06503734
                        ],
                        [
                            "2020/8/24 0:00",
                            83.21938313
                        ],
                        [
                            "2020/9/28 0:00",
                            80.31369096
                        ],
                        [
                            "2020/11/2 0:00",
                            81.10278082
                        ],
                        [
                            "2020/12/7 0:00",
                            88.41843616
                        ],
                        [
                            "2021/1/11 0:00",
                            89.58944598
                        ],
                        [
                            "2021/2/15 0:00",
                            93.03769063
                        ],
                        [
                            "2021/3/22 0:00",
                            93.11197358
                        ],
                        [
                            "2021/4/26 0:00",
                            94.40416514
                        ],
                        [
                            "2021/5/31 0:00",
                            97.25844959
                        ],
                        [
                            "2021/7/5 0:00",
                            96.02501712
                        ],
                        [
                            "2021/8/9 0:00",
                            95.31437122
                        ],
                        [
                            "2021/9/13 0:00",
                            107.1063317
                        ],
                        [
                            "2021/10/18 0:00",
                            103.1789367
                        ],
                        [
                            "2021/11/22 0:00",
                            101.3051097
                        ],
                        [
                            "2021/12/27 0:00",
                            103.9267509
                        ],
                        [
                            "2022/1/31 0:00",
                            105.6134294
                        ],
                        [
                            "2022/3/7 0:00",
                            107.4374971
                        ],
                        [
                            "2022/4/11 0:00",
                            106.2789448
                        ],
                        [
                            "2022/5/16 0:00",
                            102.0998185
                        ],
                        [
                            "2022/6/20 0:00",
                            106.7239799
                        ],
                        [
                            "2022/7/25 0:00",
                            105.0315156
                        ],
                        [
                            "2022/8/29 0:00",
                            104.8037862
                        ],
                        [
                            "2022/10/3 0:00",
                            102.4407055
                        ],
                        [
                            "2022/11/7 0:00",
                            101.0899568
                        ],
                        [
                            "2022/12/12 0:00",
                            108.194412
                        ],
                        [
                            "2023/1/16 0:00",
                            107.7447852
                        ],
                        [
                            "2023/2/20 0:00",
                            104.1435133
                        ],
                        [
                            "2023/3/27 0:00",
                            105.843246
                        ]
                    ],
                    "hoverAnimation": true,
                    "label": {
                        "show": false,
                        "margin": 8
                    },
                    "logBase": 10,
                    "seriesLayoutBy": "column",
                    "lineStyle": {
                        "show": true,
                        "width": 1,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid"
                    },
                    "areaStyle": {
                        "opacity": 0
                    },
                    "zlevel": 0,
                    "z": 0
                },
                {
                    "type": "line",
                    "name": "\u6caa\u6df1300\u6307\u6570",
                    "connectNulls": false,
                    "xAxisIndex": 0,
                    "symbolSize": 4,
                    "showSymbol": true,
                    "smooth": false,
                    "clip": true,
                    "step": false,
                    "data": [
                        [
                            "2015/4/13 0:00",
                            5.79
                        ],
                        [
                            "2015/5/18 0:00",
                            13.61
                        ],
                        [
                            "2015/6/22 0:00",
                            1.86
                        ],
                        [
                            "2015/7/27 0:00",
                            -9.76
                        ],
                        [
                            "2015/8/31 0:00",
                            -21.21
                        ],
                        [
                            "2015/10/5 0:00",
                            -21.84
                        ],
                        [
                            "2015/11/9 0:00",
                            -9.92
                        ],
                        [
                            "2015/12/14 0:00",
                            -9.0
                        ],
                        [
                            "2016/1/18 0:00",
                            -27.21
                        ],
                        [
                            "2016/2/22 0:00",
                            -32.42
                        ],
                        [
                            "2016/3/28 0:00",
                            -23.25
                        ],
                        [
                            "2016/5/2 0:00",
                            -26.04
                        ],
                        [
                            "2016/6/6 0:00",
                            -24.86
                        ],
                        [
                            "2016/7/11 0:00",
                            -21.28
                        ],
                        [
                            "2016/8/15 0:00",
                            -18.53
                        ],
                        [
                            "2016/9/19 0:00",
                            -21.17
                        ],
                        [
                            "2016/10/24 0:00",
                            -19.2
                        ],
                        [
                            "2016/11/28 0:00",
                            -13.63
                        ],
                        [
                            "2017/1/2 0:00",
                            -18.79
                        ],
                        [
                            "2017/2/6 0:00",
                            -16.81
                        ],
                        [
                            "2017/3/13 0:00",
                            -15.85
                        ],
                        [
                            "2017/4/17 0:00",
                            -15.21
                        ],
                        [
                            "2017/5/22 0:00",
                            -14.77
                        ],
                        [
                            "2017/6/26 0:00",
                            -9.47
                        ],
                        [
                            "2017/7/31 0:00",
                            -8.35
                        ],
                        [
                            "2017/9/4 0:00",
                            -5.14
                        ],
                        [
                            "2017/10/9 0:00",
                            -2.66
                        ],
                        [
                            "2017/11/13 0:00",
                            2.39
                        ],
                        [
                            "2017/12/18 0:00",
                            0.83
                        ],
                        [
                            "2018/1/22 0:00",
                            8.67
                        ],
                        [
                            "2018/2/26 0:00",
                            0.65
                        ],
                        [
                            "2018/4/2 0:00",
                            -3.34
                        ],
                        [
                            "2018/5/7 0:00",
                            -2.81
                        ],
                        [
                            "2018/6/11 0:00",
                            -5.9
                        ],
                        [
                            "2018/7/16 0:00",
                            -12.81
                        ],
                        [
                            "2018/8/20 0:00",
                            -17.33
                        ],
                        [
                            "2018/9/24 0:00",
                            -13.82
                        ],
                        [
                            "2018/10/29 0:00",
                            -17.85
                        ],
                        [
                            "2018/12/3 0:00",
                            -21.03
                        ],
                        [
                            "2019/1/7 0:00",
                            -23.67
                        ],
                        [
                            "2019/2/11 0:00",
                            -16.0
                        ],
                        [
                            "2019/3/18 0:00",
                            -1.75
                        ],
                        [
                            "2019/4/22 0:00",
                            0.05
                        ],
                        [
                            "2019/5/27 0:00",
                            -6.69
                        ],
                        [
                            "2019/7/1 0:00",
                            0.5
                        ],
                        [
                            "2019/8/5 0:00",
                            -6.28
                        ],
                        [
                            "2019/9/9 0:00",
                            2.77
                        ],
                        [
                            "2019/10/14 0:00",
                            0.22
                        ],
                        [
                            "2019/11/18 0:00",
                            -0.23
                        ],
                        [
                            "2019/12/23 0:00",
                            4.2
                        ],
                        [
                            "2020/1/27 0:00",
                            3.87
                        ],
                        [
                            "2020/3/2 0:00",
                            7.57
                        ],
                        [
                            "2020/4/6 0:00",
                            -1.36
                        ],
                        [
                            "2020/5/11 0:00",
                            2.46
                        ],
                        [
                            "2020/6/15 0:00",
                            7.22
                        ],
                        [
                            "2020/7/20 0:00",
                            17.28
                        ],
                        [
                            "2020/8/24 0:00",
                            24.64
                        ],
                        [
                            "2020/9/28 0:00",
                            19.33
                        ],
                        [
                            "2020/11/2 0:00",
                            25.76
                        ],
                        [
                            "2020/12/7 0:00",
                            25.94
                        ],
                        [
                            "2021/1/11 0:00",
                            37.17
                        ],
                        [
                            "2021/2/15 0:00",
                            43.18
                        ],
                        [
                            "2021/3/22 0:00",
                            29.84
                        ],
                        [
                            "2021/4/26 0:00",
                            31.65
                        ],
                        [
                            "2021/5/31 0:00",
                            34.82
                        ],
                        [
                            "2021/7/5 0:00",
                            30.82
                        ],
                        [
                            "2021/8/9 0:00",
                            28.54
                        ],
                        [
                            "2021/9/13 0:00",
                            26.89
                        ],
                        [
                            "2021/10/18 0:00",
                            29.02
                        ],
                        [
                            "2021/11/22 0:00",
                            27.01
                        ],
                        [
                            "2021/12/27 0:00",
                            28.72
                        ],
                        [
                            "2022/1/31 0:00",
                            20.95
                        ],
                        [
                            "2022/3/7 0:00",
                            15.28
                        ],
                        [
                            "2022/4/11 0:00",
                            12.58
                        ],
                        [
                            "2022/5/16 0:00",
                            10.06
                        ],
                        [
                            "2022/6/20 0:00",
                            17.69
                        ],
                        [
                            "2022/7/25 0:00",
                            12.56
                        ],
                        [
                            "2022/8/29 0:00",
                            9.01
                        ],
                        [
                            "2022/10/3 0:00",
                            3.53
                        ],
                        [
                            "2022/11/7 0:00",
                            3.48
                        ],
                        [
                            "2022/12/12 0:00",
                            7.86
                        ],
                        [
                            "2023/1/16 0:00",
                            13.6
                        ],
                        [
                            "2023/2/20 0:00",
                            10.71
                        ],
                        [
                            "2023/3/27 0:00",
                            10.56
                        ]
                    ],
                    "hoverAnimation": true,
                    "label": {
                        "show": false,
                        "margin": 8
                    },
                    "logBase": 10,
                    "seriesLayoutBy": "column",
                    "lineStyle": {
                        "show": true,
                        "width": 1,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid"
                    },
                    "areaStyle": {
                        "opacity": 0
                    },
                    "zlevel": 0,
                    "z": 0
                }
            ],
            "legend": [
                {
                    "data": [
                        "\u6295\u8d44\u7ec4\u5408",
                        "\u6caa\u6df1300\u6307\u6570"
                    ],
                    "selected": {},
                    "show": true,
                    "padding": 5,
                    "itemGap": 10,
                    "itemWidth": 25,
                    "itemHeight": 14,
                    "backgroundColor": "transparent",
                    "borderColor": "#ccc",
                    "borderWidth": 1,
                    "borderRadius": 0,
                    "pageButtonItemGap": 5,
                    "pageButtonPosition": "end",
                    "pageFormatter": "{current}/{total}",
                    "pageIconColor": "#2f4554",
                    "pageIconInactiveColor": "#aaa",
                    "pageIconSize": 15,
                    "animationDurationUpdate": 800,
                    "selector": false,
                    "selectorPosition": "auto",
                    "selectorItemGap": 7,
                    "selectorButtonGap": 10
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "enterable": false,
                "confine": false,
                "appendToBody": false,
                "transitionDuration": 0.4,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5,
                "order": "seriesAsc"
            },
            "xAxis": [
                {
                    "name": "\u65f6\u95f4\u5e8f\u5217",
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "2015/4/13 0:00",
                        "2015/5/18 0:00",
                        "2015/6/22 0:00",
                        "2015/7/27 0:00",
                        "2015/8/31 0:00",
                        "2015/10/5 0:00",
                        "2015/11/9 0:00",
                        "2015/12/14 0:00",
                        "2016/1/18 0:00",
                        "2016/2/22 0:00",
                        "2016/3/28 0:00",
                        "2016/5/2 0:00",
                        "2016/6/6 0:00",
                        "2016/7/11 0:00",
                        "2016/8/15 0:00",
                        "2016/9/19 0:00",
                        "2016/10/24 0:00",
                        "2016/11/28 0:00",
                        "2017/1/2 0:00",
                        "2017/2/6 0:00",
                        "2017/3/13 0:00",
                        "2017/4/17 0:00",
                        "2017/5/22 0:00",
                        "2017/6/26 0:00",
                        "2017/7/31 0:00",
                        "2017/9/4 0:00",
                        "2017/10/9 0:00",
                        "2017/11/13 0:00",
                        "2017/12/18 0:00",
                        "2018/1/22 0:00",
                        "2018/2/26 0:00",
                        "2018/4/2 0:00",
                        "2018/5/7 0:00",
                        "2018/6/11 0:00",
                        "2018/7/16 0:00",
                        "2018/8/20 0:00",
                        "2018/9/24 0:00",
                        "2018/10/29 0:00",
                        "2018/12/3 0:00",
                        "2019/1/7 0:00",
                        "2019/2/11 0:00",
                        "2019/3/18 0:00",
                        "2019/4/22 0:00",
                        "2019/5/27 0:00",
                        "2019/7/1 0:00",
                        "2019/8/5 0:00",
                        "2019/9/9 0:00",
                        "2019/10/14 0:00",
                        "2019/11/18 0:00",
                        "2019/12/23 0:00",
                        "2020/1/27 0:00",
                        "2020/3/2 0:00",
                        "2020/4/6 0:00",
                        "2020/5/11 0:00",
                        "2020/6/15 0:00",
                        "2020/7/20 0:00",
                        "2020/8/24 0:00",
                        "2020/9/28 0:00",
                        "2020/11/2 0:00",
                        "2020/12/7 0:00",
                        "2021/1/11 0:00",
                        "2021/2/15 0:00",
                        "2021/3/22 0:00",
                        "2021/4/26 0:00",
                        "2021/5/31 0:00",
                        "2021/7/5 0:00",
                        "2021/8/9 0:00",
                        "2021/9/13 0:00",
                        "2021/10/18 0:00",
                        "2021/11/22 0:00",
                        "2021/12/27 0:00",
                        "2022/1/31 0:00",
                        "2022/3/7 0:00",
                        "2022/4/11 0:00",
                        "2022/5/16 0:00",
                        "2022/6/20 0:00",
                        "2022/7/25 0:00",
                        "2022/8/29 0:00",
                        "2022/10/3 0:00",
                        "2022/11/7 0:00",
                        "2022/12/12 0:00",
                        "2023/1/16 0:00",
                        "2023/2/20 0:00",
                        "2023/3/27 0:00"
                    ]
                }
            ],
            "yAxis": [
                {
                    "name": "\u7d2f\u8ba1\u6536\u76ca\u7387",
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": true,
                        "lineStyle": {
                            "show": true,
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
            "title": [
                {
                    "show": true,
                    "text": "\u6caa\u6df1300\u6307\u6570\u4e0e\u6295\u8d44\u7ec4\u5408\u6536\u76ca\u7387\u8d70\u52bf\u56fe",
                    "target": "blank",
                    "subtarget": "blank",
                    "padding": 5,
                    "itemGap": 10,
                    "textAlign": "auto",
                    "textVerticalAlign": "auto",
                    "triggerEvent": false
                }
            ]
        };
    }
    const [checkedList, setCheckedList] = useState(defaultCheckedList);
    const [indeterminate, setIndeterminate] = useState(true);
    const [checkAll, setCheckAll] = useState(false);
    const onChange = (list) => {
        setCheckedList(list);
        setIndeterminate(!!list.length && list.length < plainOptions.length);
        setCheckAll(list.length === plainOptions.length);
    };
    const onCheckAllChange = (e) => {
        setCheckedList(e.target.checked ? plainOptions : []);
        setIndeterminate(false);
        setCheckAll(e.target.checked);
    };
    const { Option } = Select;
    const { token } = theme.useToken();
    const panelStyle = {
        marginBottom: 12,
        background: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: 'none',
        fontSize: 18
    };
    const selectBefore = (
        <Select defaultValue="市值因子" style={{ width: 100 }}>
            <Option value="市值因子">市值因子</Option>
            <Option value="β因子">β因子</Option>
        </Select>
    );
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout>
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
               <p style={
                   {
                    color: 'rgb(67, 176, 255)',
                    fontSize: '18px'
                   }
               }> 华尔街小狼队</p>
                <p style={
                    {color: 'rgb(67, 176, 255)',
                        fontSize: '30px',
                        right:'50%',
                        margin: 'auto'
                }}> 基于沪深300成分股的增强型选股策略</p>
            </Header>
            <Layout>
                <Sider
                    width={250}
                    style={{
                        background: colorBgContainer,
                    }}
                >
                    <Collapse bordered={false}
                              defaultActiveKey={['1','2','3','4']}
                              expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                              style={{
                                  background: token.colorBgContainer,
                              }}>
                        <Panel header="因子选择" key="1" style={panelStyle}>
                            <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
                                全选
                            </Checkbox>
                            <Divider />
                            <CheckboxGroup
                                defaultValue={defaultCheckedList} options={plainOptions} value={checkedList} onChange={onChange} />
                        </Panel>
                        <Panel header="与基准指数的偏离程度" key="2" style={panelStyle}>
                            <InputNumber
                                style={{
                                    marginBottom:15
                                }}
                                addonBefore="行业偏离程度"
                                defaultValue={5}
                                min={0}
                                max={100}
                                formatter={(value) => `${value}%`}
                                parser={(value) => value.replace('%', '')}
                            />
                            <InputNumber
                                addonBefore={selectBefore}
                                defaultValue={5}
                                min={0}
                                max={100}
                                formatter={(value) => `${value}%`}
                                parser={(value) => value.replace('%', '')}
                            />
                        </Panel>
                        <Panel header="股票权重范围" key="3" style={panelStyle}>
                            <InputNumber
                                style={{
                                    marginBottom:15
                                }}
                                addonBefore="最小值"
                                defaultValue={5}
                                min={0}
                                max={100}
                                formatter={(value) => `${value}%`}
                                parser={(value) => value.replace('%', '')}
                            />
                            <InputNumber
                                addonBefore="最大值"
                                defaultValue={0.1}
                                min={0}
                                max={100}
                                step={0.1}
                                formatter={(value) => `${value}%`}
                                parser={(value) => value.replace('%', '')}
                            />
                        </Panel>
                        <Panel key="4" header="回测区间" style={panelStyle}>

                        </Panel>
                    </Collapse>
                    {contextHolder}
                    <Button onClick={success}  style={{
                    left: 50,
                        marginTop: 15
                    }
                    } type="primary" size="large" > 生成收益率曲线 </Button>
                </Sider>
                <Layout
                    style={{
                        padding: '0 24px 24px',
                    }}
                >

                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            height: 800,
                            background: colorBgContainer,
                        }}
                    >
                        <ReactEcharts option={getOption()}
                        style={{
                            height: 600
                        }
                        }
                        />


                        <FloatButton.Group
                            shape="square"
                            style={{
                                right: 80,
                                bottom: 100
                            }}
                        >
                            <FloatButton icon={<QuestionCircleOutlined />} />
                            <FloatButton />
                            <FloatButton icon={<SyncOutlined />} />
                            <FloatButton.BackTop visibilityHeight={0} />
                        </FloatButton.Group>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};
export default App;
