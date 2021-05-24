/**
 * @description 邮件配置
 */
export const mailconfig = {
    '杨高春': 'yanggc@leading-group.cn',
    '陈乐丽': 'chenll@leading-group.cn',
    '周贤磊': 'zhou_32@qq.com',
    '陈雅兰': 'chenyl0929@leading-group.cn',
    '周雪丽': 'zhouxueli@leading-group.cn',
};

/**
 * @description 账户配置
 */
export const config = {
    '杨高春': 'yanggc',
    '陈乐丽': 'chenll',
    '周贤磊': 'zhouxl0121',
    '陈雅兰': 'chenyl0929',
    '周雪丽': 'zhouxl0627',
}

/**
 * @description 系统配置信息
 */
export const system = {
    config: {
        regexp: {
            mail: /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/,
            mobile: '',
        }
    }
}

/**
 * @description 工作组配置
 */
export const group = {
    Group_LD: {
        seal: 'yanggc,chenll,zhouxl0121,zhaozy1028',
        front: 'zhouxl0627,zhaozy1028',
        archive: 'chenyl0929,zhaozy1028',
        prefix: 'LD',
        name: 'Group_LD',
    },
    ENTRY_JOB: {
        GROUP0: {
            JOB_HR_ADMIN: 'zhaozy1028,guojy0508,tangjw1227,zhengm1105',
            JOB_EXEC_ADMIN: 'yanggc,chenll',
            JOB_MEAL_ADMIN: 'longjing',
            JOB_FRONT_ADMIN: 'shur0411,zhouxl0627,wuzy0518,haoqw0515,chenal0625,zhaozy1028',
        }
    },
}

/**
 * @description 行政管理用印状态类型
 */
export const statusType = {
    'none': '待用印',
    'seal': '已用印',
    'receive': '已领取',
    'sending': '已寄送', //我方先用印，则已用印后，将合同寄给对方
    'getback': '已寄回', //收到对方盖章后的合同后，接收人，将合同设置为已返回
    'front': '移交前台',
    'archive': '归档完成',
    'done': '已归档',
}

/**
 * @description 合同类别对应编号名称
 */
export const sealTypeNoName = {
    '合同类': '合同编号',
    '非合同类': '流水编号',
}

/**
 * @description 下拉组件选择类型
 */
export const compcolumns = {
    commonTypeColumns: ['是', '否'],
    archiveTypeColumns: ['财务归档', '档案归档'],
    orderTypeColumns: ['我方先印', '常规用印'],
    sealTypeColumns: ['合同类', '非合同类'],
    sealStatusColumns: ['待用印', '已用印', '已领取', '已寄送', '移交前台', '档案归档', '财务归档', '已退回', '已作废'],
    diplomaTypeColumns: ['博士', '硕士', '本科', '专科', '高中', '初中', '小学'],
    acceptType: ['*/*'],
    approveColumns: ['OA系统', 'ERP系统', '费控系统', '创达OA系统', 'CRM系统', 'EHR系统', '资金系统', '领地HR', '宝瑞商管'],
}

/**
 * @description 物品领用管理
 */
export const goodstype = {
    'office': '办公用品',
    'drug': '药品',
    'prevent': '防疫物资',
    '办公用品': 'office',
    '药品': 'drug',
    '防疫物资': 'prevent',
};

/**
 * @description 物品借用管理
 */
export const goodsborrowtype = {
    'common': '信息设备',
    'box': '传屏设备',
};

/**
 * @description 物品借用管理
 */
export const rewardtype = {
    '0': '业绩考核奖',
    '1': '总裁专项奖',
    '2': '总经理专项奖',
    '3': '特殊贡献奖',
    '4': '其他诉讼案件',
};

/**
 * @description 诉讼案件界面默认配置
 */
export const reward = ($router) => {
    return [{
        id: 'task-pane',
        title: '任务面板',
        taskflows: [{
            name: "我的知会",
            avatar: `//cdn.jsdelivr.net/gh/Miazzy/xdata-stock-service@v1.0.5/src/assets/img/liebiao_jy.png`,
            href: "/account/myrewardlist",
            description: '查看我的案件知会信息',
            click: () => {
                $router.push(`/legal/message?panename=myrewardlist&type=7&back=/legal/workspace`, '_blank');
            },
        }, {
            name: "我的待办",
            avatar: `//cdn.jsdelivr.net/gh/Miazzy/yunwisdom_cdn@v1.0.0/images/time_00.png`,
            href: "/account/todolist",
            description: '查看待处理的案件审批流程',
            click: () => {
                $router.push(`/legal/message?panename=mytodolist&type=7&back=/legal/workspace`, '_blank');
            }
        }, {
            name: "我的已办",
            avatar: `//cdn.jsdelivr.net/gh/Miazzy/yunwisdom_cdn@v1.0.0/images/home_00.png`,
            href: "/account/donelist",
            description: '查看已处理的案件审批流程',
            click: () => {
                $router.push(`/legal/message?panename=mydonelist&type=7&back=/legal/workspace`, '_blank');
            }
        }, {
            name: "我的申请",
            avatar: `//cdn.jsdelivr.net/gh/Miazzy/yunwisdom_cdn@v1.0.0/images/hire.png`,
            href: "/account/donelist",
            description: '查看我发起的案件审批流程',
            click: () => {
                $router.push(`/legal/message?panename=myapplylist&type=7&back=/legal/workspace`, '_blank');
            }
        }],
    }, {
        id: 'task-pane',
        title: '案件管控',
        taskflows: [{
            name: "起诉案件发起",
            avatar: `https://cdn.jsdelivr.net/gh/Miazzy/xdata-stock-service@v1.0.5/src/assets/img/qiandao_jy.png`,
            href: "/account/todolist",
            description: '公司主动起诉案件发起申请',
            click: () => {
                $router.push(`/legal/legalapply?type=0&legalTname=起诉`, '_blank');
            }
        }, {
            name: "应诉案件发起",
            avatar: `https://cdn.jsdelivr.net/gh/Miazzy/xdata-stock-service@v1.0.5/src/assets/img/qiandaohuizong_jy.png`,
            href: "/account/donelist",
            description: '公司应诉案件发起申请',
            click: () => {
                $router.push(`/legal/legalapply?type=1&legalTname=应诉`, '_blank');
            }
        }, {
            name: "案件管理",
            avatar: `https://cdn.jsdelivr.net/gh/Miazzy/xdata-stock-service@v1.0.5/src/assets/img/yanglaodaiyuzigerenzheng.png`,
            href: "/account/donelist",
            description: '查看/管理案件列表信息',
            click: () => {
                $router.push(`/legal/legallist?type=99&&status=all&legalTname=all`, '_blank');
            }
        }, {
            name: "结案记录",
            avatar: `//cdn.jsdelivr.net/gh/Miazzy/yunwisdom_cdn@v1.0.0/images/shenpi.png`,
            href: "/account/myanalyse",
            description: '查看已结案案件列表信息',
            click: () => {
                $router.push(`/legal/lawsuitlist?&type=99&status=finish&legalTname=all`, '_blank');
            },
        }, {
            name: "一审管理",
            avatar: `https://cdn.jsdelivr.net/gh/Miazzy/xdata-stock-service@v1.0.5/src/assets/img/fenbufenxiang_jy.png`,
            href: "/account/myrewards",
            description: '对案件进展处于一审阶段的案件进行管理',
            click: () => {
                // $router.push(`/legal/legalapply?type=3&reward_name=特殊贡献`, '_blank');
            },
        }, {
            name: "二审管理",
            avatar: `https://cdn.jsdelivr.net/gh/Miazzy/xdata-stock-service@v1.0.5/src/assets/img/laodongnenglijianding.png`,
            href: "/account/myanalyse",
            description: '对案件进展处于二审阶段的案件进行管理',
            click: () => {
                // $router.push(`/legal/legalapply?type=4&reward_name=其他诉讼案件`, '_blank');
            },
        }, {
            name: "执行管理",
            avatar: `https://cdn.jsdelivr.net/gh/Miazzy/xdata-stock-service@v1.0.5/src/assets/img/paimai.png`,
            href: "/account/myanalyse",
            description: '对案件进展处于执行阶段的案件进行管理',
            click: () => {
                // $router.push(`/legal/legalmonth?type=month`);
            },
        }, {
            name: "再审管理",
            avatar: `https://cdn.jsdelivr.net/gh/Miazzy/xdata-stock-service@v1.0.5/src/assets/img/jungongyanshou_jy.png`,
            href: "/account/myanalyse",
            description: '对案件进展处于再审阶段的案件进行管理',
            click: () => {
                // $router.push(`/legal/legalmonth?type=quarter`);
            },
        }],
    }, {
        id: 'common-pane',
        title: '律所律师',
        taskflows: [{
            name: "律所录入",
            avatar: `//cdn.jsdelivr.net/gh/Miazzy/xdata-stock-service@v1.0.5/src/assets/img/xinwen_jy.png`,
            href: "/account/todolist",
            description: '律师事务所录入申请',
            click: () => {
                $router.push(`/legal/firmapply?type=1&tname=律所录入&apply=申请`, '_blank');
            }
        }, {
            name: "律师录入",
            avatar: `//cdn.jsdelivr.net/gh/Miazzy/xdata-stock-service@v1.0.5/src/assets/img/xiangmuxinxi_jy.png`,
            href: "/account/donelist",
            description: '律师事务所下律师录入申请',
            click: () => {
                $router.push(`/legal/lawyerapply?type=1&tname=律师录入&apply=申请`, '_blank');
            }
        }, {
            name: "律所管理",
            avatar: `//cdn.jsdelivr.net/gh/Miazzy/xdata-stock-service@v1.0.5/src/assets/img/xiezuowendangku_jy.png`,
            href: "/account/todolist",
            description: '律师事务所管理',
            click: () => {
                $router.push(`/legal/firmlist?type=1&tname=律所管理&apply=管理`, '_blank');
            }
        }, {
            name: "律师管理",
            avatar: `//cdn.jsdelivr.net/gh/Miazzy/xdata-stock-service@v1.0.5/src/assets/img/baomingfei.png`,
            href: "/account/todolist",
            description: '律师管理',
            click: () => {
                $router.push(`/legal/lawyerlist?type=1&tname=律师管理&apply=管理`, '_blank');
            }
        }],
    }, {
        id: 'law-pane',
        title: '法院法官',
        taskflows: [{
            name: "法院录入",
            avatar: `https://cdn.jsdelivr.net/gh/Miazzy/xdata-stock-service@v1.0.5/src/assets/img/anqiantiaojie.png`,
            href: "/account/todolist",
            description: '律师事务所录入申请',
            click: () => {
                $router.push(`/legal/firmapply?type=1&tname=律所录入&apply=申请`, '_blank');
            }
        }, {
            name: "法官录入",
            avatar: `https://cdn.jsdelivr.net/gh/Miazzy/xdata-stock-service@v1.0.5/src/assets/img/building-type-180000-18.png`,
            href: "/account/donelist",
            description: '律师事务所下律师录入申请',
            click: () => {
                $router.push(`/legal/lawyerapply?type=1&tname=律师录入&apply=申请`, '_blank');
            }
        }, {
            name: "法院管理",
            avatar: `https://cdn.jsdelivr.net/gh/Miazzy/xdata-stock-service@v1.0.5/src/assets/img/qiyehaozujian_jy.png`,
            href: "/account/todolist",
            description: '律师事务所管理',
            click: () => {
                $router.push(`/legal/firmlist?type=1&tname=律所管理&apply=管理`, '_blank');
            }
        }, {
            name: "法官管理",
            avatar: `https://cdn.jsdelivr.net/gh/Miazzy/xdata-stock-service@v1.0.5/src/assets/img/dushu_sn01.png`,
            href: "/account/todolist",
            description: '律师管理',
            click: () => {
                $router.push(`/legal/lawyerlist?type=1&tname=律师管理&apply=管理`, '_blank');
            }
        }],
    }]
};

export const getRewardQuickTag = ($router) => {
    return [{
        name: '我的待办',
        color: 'purple',
        click: () => {

        },
    }, {
        name: '我的已办',
        color: 'cyan',
        click: () => {

        },
    }, {
        name: '我的申请',
        color: 'cyan',
        click: () => {

        },
    }, {
        name: '我的知会',
        color: 'pink',
        click: () => {

        },
    }, {
        name: '统计分析',
        color: 'blue',
        click: () => {

        },
    }, ];
};

export const getRewardWflow = ($router) => {
    return [{
            name: "月度流程",
            avatar: "//cdn.jsdelivr.net/gh/Miazzy/yunwisdom_cdn@v1.0.0/images/icon-file-04.svg",
            href: "/account/center",
            click: () => {

            }
        },
        {
            name: "季度流程",
            avatar: "//cdn.jsdelivr.net/gh/Miazzy/yunwisdom_cdn@v1.0.0/images/icon-file-04.svg",
            href: "/account/authors/index",
            click: () => {

            }
        },
        {
            name: "年度流程",
            avatar: "//cdn.jsdelivr.net/gh/Miazzy/yunwisdom_cdn@v1.0.0/images/icon-file-04.svg",
            href: "/blog/rank",
            click: () => {

            }
        },
        {
            name: "流程报表",
            avatar: "//cdn.jsdelivr.net/gh/Miazzy/yunwisdom_cdn@v1.0.0/images/icon-rank-01.svg",
            href: "/blog/center",
            click: () => {

            }
        }
    ];
}

export const getLawWebsiteflow = ($router) => {
    return [{
            name: "中国裁判文书网",
            span: 24,
            href: "https://wenshu.court.gov.cn/",
            click: () => {
                window.open('https://wenshu.court.gov.cn/', '_blank');
            }
        },
        {
            name: "人民法院公告网",
            span: 24,
            href: "https://rmfygg.court.gov.cn/",
            click: () => {
                window.open("https://rmfygg.court.gov.cn/", '_blank');
            }
        },
        {
            name: "中国执行信息公开网",
            span: 24,
            href: "http://zxgk.court.gov.cn/zhzxgk/",
            click: () => {
                window.open("http://zxgk.court.gov.cn/zhzxgk/", '_blank');
            }
        },
        {
            name: "中国法院网",
            span: 24,
            href: "https://www.chinacourt.org/index.shtml",
            click: () => {
                window.open("https://www.chinacourt.org/index.shtml", '_blank');
            }
        },
        {
            name: "中国庭审公开网",
            span: 24,
            href: "http://tingshen.court.gov.cn/",
            click: () => {
                window.open("http://tingshen.court.gov.cn/", '_blank');
            }
        },
        {
            name: "人民法院诉讼资产网",
            span: 24,
            href: "https://www.rmfysszc.gov.cn/",
            click: () => {
                window.open("http://tingshen.court.gov.cn/", '_blank');
            }
        },
        {
            name: "中国政府网",
            span: 24,
            href: "http://www.gov.cn/",
            click: () => {
                window.open("http://www.gov.cn/", '_blank');
            }
        },
        {
            name: "中国政府网-法律法规",
            span: 24,
            href: "http://www.gov.cn/ziliao/flfg/index.htm",
            click: () => {
                window.open("http://www.gov.cn/ziliao/flfg/index.htm", '_blank');
            }
        },
        {
            name: "法律法规数据库",
            span: 24,
            href: "http://search.chinalaw.gov.cn/search2.html",
            click: () => {
                window.open("http://search.chinalaw.gov.cn/search2.html", '_blank');
            }
        },
        {
            name: "中国法院网法律文库",
            span: 24,
            href: "https://www.chinacourt.org/law",
            click: () => {
                window.open("https://www.chinacourt.org/law", '_blank');
            }
        },
        {
            name: "企查查",
            span: 6,
            href: "https://www.qcc.com/",
            click: () => {
                window.open("https://www.qcc.com/", '_blank');
            }
        },
        {
            name: "天眼查",
            span: 6,
            href: "https://www.tianyancha.com/",
            click: () => {
                window.open("https://www.tianyancha.com/", '_blank');
            }
        },
        {
            name: "启信宝",
            span: 6,
            href: "https://www.qixin.com/",
            click: () => {
                window.open("https://www.qixin.com/", '_blank');
            }
        },
        {
            name: "爱企查",
            span: 6,
            href: "https://aiqicha.baidu.com/",
            click: () => {
                window.open("https://aiqicha.baidu.com/", '_blank');
            }
        },
    ];
}

export const courtList = () => {
    return [
        { "label": "", "value": "" },
        {
            "label": "北京市高级人民法院",
            "value": "北京市高级人民法院",
            "children": [
                { "label": "", "value": "" },
                {
                    "label": "北京市第一中级人民法院",
                    "value": "北京市第一中级人民法院",
                    "children": [
                        { "label": "", "value": "" },
                        { "label": "北京市石景山区人民法院", "value": "北京市石景山区人民法院" },
                        { "label": "北京市海淀区人民法院", "value": "北京市海淀区人民法院" },
                        { "label": "北京市门头沟区人民法院", "value": "北京市门头沟区人民法院" },
                        { "label": "北京市昌平区人民法院", "value": "北京市昌平区人民法院" },
                        { "label": "北京市延庆区人民法院", "value": "北京市延庆区人民法院" },
                    ]
                },
                {
                    "label": "北京市第二中级人民法院",
                    "value": "北京市第二中级人民法院",
                    "children": [
                        { "label": "", "value": "" },
                        { "label": "北京市东城区人民法院", "value": "北京市东城区人民法院" },
                        { "label": "北京市丰台区人民法院", "value": "北京市丰台区人民法院" },
                        { "label": "北京市西城区人民法院", "value": "北京市西城区人民法院" },
                        { "label": "北京市房山区人民法院", "value": "北京市房山区人民法院" },
                        { "label": "北京市大兴区人民法院", "value": "北京市大兴区人民法院" },
                    ]
                },
                {
                    "label": "北京市第三中级人民法院",
                    "value": "北京市第三中级人民法院",
                    "children": [
                        { "label": "", "value": "" },
                        { "label": "北京市朝阳区人民法院", "value": "北京市朝阳区人民法院" },
                        { "label": "北京市顺义区人民法院", "value": "北京市顺义区人民法院" },
                        { "label": "北京市通州区人民法院", "value": "北京市通州区人民法院" },
                        { "label": "北京市平谷区人民法院", "value": "北京市平谷区人民法院" },
                        { "label": "北京市怀柔区人民法院", "value": "北京市怀柔区人民法院" },
                        { "label": "北京市密云区人民法院", "value": "北京市密云区人民法院" },
                    ]
                },
                {
                    "label": "北京市第四中级人民法院",
                    "value": "北京市第四中级人民法院",
                    "children": [
                        { "label": "", "value": "" },
                        { "label": "北京铁路运输法院", "value": "北京铁路运输法院" },
                        { "label": "北京互联网法院", "value": "北京互联网法院" },
                    ]
                },
                {
                    "label": "北京铁路运输中级法院",
                    "value": "北京铁路运输中级法院",
                    "children": [
                        { "label": "", "value": "" },
                        { "label": "北京铁路运输法院", "value": "北京铁路运输法院" },
                        { "label": "北京互联网法院", "value": "北京互联网法院" },
                    ]
                },
                { "label": "北京知识产权法院", "value": "北京知识产权法院" },
            ]
        },
        {
            "label": "天津市高级人民法院",
            "value": "天津市高级人民法院",
            "children": [
                { "label": "", "value": "" },
                {
                    "label": "天津市第一中级人民法院",
                    "value": "天津市第一中级人民法院",
                    "children": [
                        { "label": "", "value": "" },
                        { "label": "天津市和平区人民法院", "value": "天津市和平区人民法院" },
                        { "label": "天津市南开区人民法院", "value": "天津市南开区人民法院" },
                        { "label": "天津市红桥区人民法院", "value": "天津市红桥区人民法院" },
                        { "label": "天津市西青区人民法院", "value": "天津市西青区人民法院" },
                        { "label": "天津市武清区人民法院", "value": "天津市武清区人民法院" },
                        { "label": "天津市宝坻区人民法院", "value": "天津市宝坻区人民法院" },
                        { "label": "天津市蓟州区人民法院", "value": "天津市蓟州区人民法院" },
                        { "label": "天津铁路运输法院", "value": "天津铁路运输法院" },
                    ]
                },
                {
                    "label": "天津市第二中级人民法院",
                    "value": "天津市第二中级人民法院",
                    "children": [
                        { "label": "", "value": "" },
                        { "label": "天津市河东区人民法院", "value": "天津市河东区人民法院" },
                        { "label": "天津市河西区人民法院", "value": "天津市河西区人民法院" },
                        { "label": "天津市河北区人民法院", "value": "天津市河北区人民法院" },
                        { "label": "天津市津南区人民法院", "value": "天津市津南区人民法院" },
                        { "label": "天津市北辰区人民法院", "value": "天津市北辰区人民法院" },
                        { "label": "天津市静海区人民法院", "value": "天津市静海区人民法院" },
                    ]
                },
                {
                    "label": "天津市第三中级人民法院",
                    "value": "天津市第三中级人民法院",
                    "children": [
                        { "label": "", "value": "" },
                        { "label": "天津市滨海新区人民法院", "value": "天津市滨海新区人民法院" },
                        { "label": "天津市东丽区人民法院", "value": "天津市东丽区人民法院" },
                        { "label": "天津市宁河区人民法院", "value": "天津市宁河区人民法院" },
                    ]
                },
                { "label": "天津海事法院", "value": "天津海事法院" }
            ]
        },
        {
            "label": "河北省高级人民法院",
            "value": "河北省高级人民法院",
            "children": [
                { "label": "", "value": "" },
                {
                    "label": "河北省石家庄市中级人民法院",
                    "value": "河北省石家庄市中级人民法院",
                    "children": [
                        { "label": "", "value": "" },
                        { "label": "石家庄市长安区人民法院", "value": "石家庄市长安区人民法院" },
                        { "label": "石家庄市桥西区人民法院", "value": "石家庄市桥西区人民法院" },
                        { "label": "石家庄市新华区人民法院", "value": "石家庄市新华区人民法院" },
                        { "label": "石家庄市裕华区人民法院", "value": "石家庄市裕华区人民法院" },
                        { "label": "井陉县人民法院", "value": "井陉县人民法院" },
                        { "label": "石家庄市鹿泉区人民法院", "value": "石家庄市鹿泉区人民法院" },
                        { "label": "正定县人民法院", "value": "正定县人民法院" },
                        { "label": "石家庄市栾城区人民法院", "value": "石家庄市栾城区人民法院" },
                        { "label": "辛集市人民法院", "value": "辛集市人民法院" },
                        { "label": "石家庄市藁城区人民法院", "value": "石家庄市藁城区人民法院" },
                        { "label": "晋州市人民法院", "value": "晋州市人民法院" },
                        { "label": "深泽县人民法院", "value": "深泽县人民法院" },
                        { "label": "无极县人民法院", "value": "无极县人民法院" },
                        { "label": "赵县人民法院", "value": "赵县人民法院" },
                        { "label": "新乐市人民法院", "value": "新乐市人民法院" },
                        { "label": "高邑县人民法院", "value": "高邑县人民法院" },
                        { "label": "元氏县人民法院", "value": "元氏县人民法院" },
                        { "label": "赞皇县人民法院", "value": "赞皇县人民法院" },
                        { "label": "平山县人民法院", "value": "平山县人民法院" },
                        { "label": "灵寿县人民法院", "value": "灵寿县人民法院" },
                        { "label": "行唐县人民法院", "value": "行唐县人民法院" },
                        { "label": "石家庄市井陉矿区人民法院", "value": "石家庄市井陉矿区人民法院" },
                        { "label": "石家庄高新技术产业开发区人民法院", "value": "石家庄高新技术产业开发区人民法院" },
                        { "label": "石家庄铁路运输法院", "value": "石家庄铁路运输法院" },
                    ],
                },
                {
                    "label": "河北省唐山市中级人民法院",
                    "value": "河北省唐山市中级人民法院",
                    "children": [
                        { "label": "", "value": "" },
                        { "label": "唐山市路南区人民法院", "value": "唐山市路南区人民法院" },
                        { "label": "唐山市路北区人民法院", "value": "唐山市路北区人民法院" },
                        { "label": "唐山市古冶区人民法院", "value": "唐山市古冶区人民法院" },
                        { "label": "唐山市开平区人民法院", "value": "唐山市开平区人民法院" },
                        { "label": "唐山市丰润区人民法院", "value": "唐山市丰润区人民法院" },
                        { "label": "唐山市丰南区人民法院", "value": "唐山市丰南区人民法院" },
                        { "label": "滦县人民法院", "value": "滦县人民法院" },
                        { "label": "滦南县人民法院", "value": "滦南县人民法院" },
                        { "label": "乐亭县人民法院", "value": "乐亭县人民法院" },
                        { "label": "迁安市人民法院", "value": "迁安市人民法院" },
                        { "label": "迁西县人民法院", "value": "迁西县人民法院" },
                        { "label": "遵化市人民法院", "value": "遵化市人民法院" },
                        { "label": "玉田县人民法院", "value": "玉田县人民法院" },
                        { "label": "唐山市曹妃甸区人民法院", "value": "唐山市曹妃甸区人民法院" },
                        { "label": "唐山高新技术产业开发区人民法院", "value": "唐山高新技术产业开发区人民法院" },

                    ],
                },
                {
                    "label": "河北省秦皇岛市中级人民法院",
                    "value": "河北省秦皇岛市中级人民法院",
                    "children": [
                        { "label": "", "value": "" },
                        { "label": "秦皇岛市海港区人民法院", "value": "秦皇岛市海港区人民法院" },
                        { "label": "秦皇岛市山海关区人民法院", "value": "秦皇岛市山海关区人民法院" },
                        { "label": "秦皇岛市北戴河区人民法院", "value": "秦皇岛市北戴河区人民法院" },
                        { "label": "昌黎县人民法院", "value": "昌黎县人民法院" },
                        { "label": "秦皇岛市抚宁区人民法院", "value": "秦皇岛市抚宁区人民法院" },
                        { "label": "卢龙县人民法院", "value": "卢龙县人民法院" },
                        { "label": "青龙满族自治县人民法院", "value": "青龙满族自治县人民法院" },
                        { "label": "秦皇岛经济技术开发区人民法院", "value": "秦皇岛经济技术开发区人民法院" },
                        { "label": "秦皇岛北戴河新区人民法院", "value": "秦皇岛北戴河新区人民法院" },
                    ],
                },
                {
                    "label": "河北省邯郸市中级人民法院",
                    "value": "河北省邯郸市中级人民法院",
                    "children": [
                        { "label": "", "value": "" },
                        { "label": "邯郸市邯山区人民法院", "value": "邯郸市邯山区人民法院" },
                        { "label": "邯郸市丛台区人民法院", "value": "邯郸市丛台区人民法院" },
                        { "label": "邯郸市复兴区人民法院", "value": "邯郸市复兴区人民法院" },
                        { "label": "邯郸市峰峰矿区人民法院", "value": "邯郸市峰峰矿区人民法院" },
                        { "label": "武安市人民法院", "value": "武安市人民法院" },
                        { "label": "邯郸经济技术开发区人民法院", "value": "邯郸经济技术开发区人民法院" },
                        { "label": "大名县人民法院", "value": "大名县人民法院" },
                        { "label": "魏县人民法院", "value": "魏县人民法院" },
                        { "label": "曲周县人民法院", "value": "曲周县人民法院" },
                        { "label": "邱县人民法院", "value": "邱县人民法院" },
                        { "label": "鸡泽县人民法院", "value": "鸡泽县人民法院" },
                        { "label": "肥乡区人民法院", "value": "肥乡区人民法院" },
                        { "label": "广平县人民法院", "value": "广平县人民法院" },
                        { "label": "成安县人民法院", "value": "成安县人民法院" },
                        { "label": "临漳县人民法院", "value": "临漳县人民法院" },
                        { "label": "磁县人民法院", "value": "磁县人民法院" },
                        { "label": "涉县人民法院", "value": "涉县人民法院" },
                        { "label": "永年区人民法院", "value": "永年区人民法院" },
                        { "label": "馆陶县人民法院", "value": "馆陶县人民法院" },
                    ],
                },
                {
                    "label": "河北省邢台市中级人民法院",
                    "value": "河北省邢台市中级人民法院",
                    "children": [
                        { "label": "", "value": "" },
                        { "label": "邢台市襄都区人民法院", "value": "邢台市襄都区人民法院" },
                        { "label": "邢台市信都区人民法院", "value": "邢台市信都区人民法院" },
                        { "label": "南宫市人民法院", "value": "南宫市人民法院" },
                        { "label": "沙河市人民法院", "value": "沙河市人民法院" },
                        { "label": "临城县人民法院", "value": "临城县人民法院" },
                        { "label": "内丘县人民法院", "value": "内丘县人民法院" },
                        { "label": "柏乡县人民法院", "value": "柏乡县人民法院" },
                        { "label": "隆尧县人民法院", "value": "隆尧县人民法院" },
                        { "label": "邢台市任泽区人民法院", "value": "邢台市任泽区人民法院" },
                        { "label": "邢台市南和区人民法院", "value": "邢台市南和区人民法院" },
                        { "label": "宁晋县人民法院", "value": "宁晋县人民法院" },
                        { "label": "巨鹿县人民法院", "value": "巨鹿县人民法院" },
                        { "label": "新河县人民法院", "value": "新河县人民法院" },
                        { "label": "广宗县人民法院", "value": "广宗县人民法院" },
                        { "label": "平乡县人民法院", "value": "平乡县人民法院" },
                        { "label": "威县人民法院", "value": "威县人民法院" },
                        { "label": "清河县人民法院", "value": "清河县人民法院" },
                        { "label": "临西县人民法院", "value": "临西县人民法院" },
                        { "label": "邢台经济开发区人民法院", "value": "邢台经济开发区人民法院" },
                    ],
                },
                {
                    "label": "河北省保定市中级人民法院",
                    "value": "河北省保定市中级人民法院",
                    "children": [
                        { "label": "", "value": "" },
                        { "label": "河北省石家庄市中级人民法院", "value": "河北省石家庄市中级人民法院" },
                        { "label": "河北省唐山市中级人民法院", "value": "河北省唐山市中级人民法院" },
                        { "label": "河北省秦皇岛市中级人民法院", "value": "河北省秦皇岛市中级人民法院" },
                        { "label": "河北省邯郸市中级人民法院", "value": "河北省邯郸市中级人民法院" },
                        { "label": "河北省邢台市中级人民法院", "value": "河北省邢台市中级人民法院" },
                        { "label": "河北省保定市中级人民法院", "value": "河北省保定市中级人民法院" },
                        { "label": "河北省张家口市中级人民法院", "value": "河北省张家口市中级人民法院" },
                        { "label": "河北省承德市中级人民法院", "value": "河北省承德市中级人民法院" },
                        { "label": "河北省沧州市中级人民法院", "value": "河北省沧州市中级人民法院" },
                        { "label": "河北省廊坊市中级人民法院", "value": "河北省廊坊市中级人民法院" },
                        { "label": "河北省衡水市中级人民法院", "value": "河北省衡水市中级人民法院" },
                        { "label": "河北雄安新区中级人民法院", "value": "河北雄安新区中级人民法院" },
                    ],
                },
                {
                    "label": "河北省张家口市中级人民法院",
                    "value": "河北省张家口市中级人民法院",
                    "children": [
                        { "label": "", "value": "" },
                        { "label": "张家口市桥东区人民法院", "value": "张家口市桥东区人民法院" },
                        { "label": "张家口市桥西区人民法院", "value": "张家口市桥西区人民法院" },
                        { "label": "张家口市宣化区人民法院", "value": "张家口市宣化区人民法院" },
                        { "label": "张家口市下花园区人民法院", "value": "张家口市下花园区人民法院" },
                        { "label": "张家口市万全区人民法院", "value": "张家口市万全区人民法院" },
                        { "label": "张家口市崇礼区人民法院", "value": "张家口市崇礼区人民法院" },
                        { "label": "张北县人民法院", "value": "张北县人民法院" },
                        { "label": "康保县人民法院", "value": "康保县人民法院" },
                        { "label": "沽源县人民法院", "value": "沽源县人民法院" },
                        { "label": "尚义县人民法院", "value": "尚义县人民法院" },
                        { "label": "蔚县人民法院", "value": "蔚县人民法院" },
                        { "label": "阳原县人民法院", "value": "阳原县人民法院" },
                        { "label": "怀安县人民法院", "value": "怀安县人民法院" },
                        { "label": "怀来县人民法院", "value": "怀来县人民法院" },
                        { "label": "涿鹿县人民法院", "value": "涿鹿县人民法院" },
                        { "label": "赤城县人民法院", "value": "赤城县人民法院" },
                        { "label": "张家口经济开发区人民法院", "value": "张家口经济开发区人民法院" },
                    ],
                },
                {
                    "label": "河北省承德市中级人民法院",
                    "value": "河北省承德市中级人民法院",
                    "children": [
                        { "label": "", "value": "" },
                        { "label": "承德市双桥区人民法院", "value": "承德市双桥区人民法院" },
                        { "label": "承德市双滦区人民法院", "value": "承德市双滦区人民法院" },
                        { "label": "承德市鹰手营子矿区人民法院", "value": "承德市鹰手营子矿区人民法院" },
                        { "label": "承德县人民法院", "value": "承德县人民法院" },
                        { "label": "兴隆县人民法院", "value": "兴隆县人民法院" },
                        { "label": "平泉县人民法院", "value": "平泉县人民法院" },
                        { "label": "滦平县人民法院", "value": "滦平县人民法院" },
                        { "label": "隆化县人民法院", "value": "隆化县人民法院" },
                        { "label": "丰宁满族自治县人民法院", "value": "丰宁满族自治县人民法院" },
                        { "label": "围场满族蒙古族自治县人民法院", "value": "围场满族蒙古族自治县人民法院" },
                        { "label": "宽城满族自治县人民法院", "value": "宽城满族自治县人民法院" },
                    ],
                },
                {
                    "label": "河北省沧州市中级人民法院",
                    "value": "河北省沧州市中级人民法院",
                    "children": [
                        { "label": "", "value": "" },
                        { "label": "沧州市新华区人民法院", "value": "沧州市新华区人民法院" },
                        { "label": "沧州市运河区人民法院", "value": "沧州市运河区人民法院" },
                        { "label": "沧县人民法院", "value": "沧县人民法院" },
                        { "label": "青县人民法院", "value": "青县人民法院" },
                        { "label": "泊头市人民法院", "value": "泊头市人民法院" },
                        { "label": "任丘市人民法院", "value": "任丘市人民法院" },
                        { "label": "黄骅市人民法院", "value": "黄骅市人民法院" },
                        { "label": "河间市人民法院", "value": "河间市人民法院" },
                        { "label": "肃宁县人民法院", "value": "肃宁县人民法院" },
                        { "label": "献县人民法院", "value": "献县人民法院" },
                        { "label": "吴桥县人民法院", "value": "吴桥县人民法院" },
                        { "label": "东光县人民法院", "value": "东光县人民法院" },
                        { "label": "南皮县人民法院", "value": "南皮县人民法院" },
                        { "label": "盐山县人民法院", "value": "盐山县人民法院" },
                        { "label": "海兴县人民法院", "value": "海兴县人民法院" },
                        { "label": "孟村回族自治县人民法院", "value": "孟村回族自治县人民法院" },
                    ],
                },
                {
                    "label": "河北省廊坊市中级人民法院",
                    "value": "河北省廊坊市中级人民法院",
                    "children": [
                        { "label": "", "value": "" },
                        { "label": "廊坊市安次区人民法院", "value": "廊坊市安次区人民法院" },
                        { "label": "霸州市人民法院", "value": "霸州市人民法院" },
                        { "label": "三河市人民法院", "value": "三河市人民法院" },
                        { "label": "香河县人民法院", "value": "香河县人民法院" },
                        { "label": "永清县人民法院", "value": "永清县人民法院" },
                        { "label": "固安县人民法院", "value": "固安县人民法院" },
                        { "label": "文安县人民法院", "value": "文安县人民法院" },
                        { "label": "大城县人民法院", "value": "大城县人民法院" },
                        { "label": "大厂回族自治县人民法院", "value": "大厂回族自治县人民法院" },
                        { "label": "廊坊市经济技术开发区人民法院", "value": "廊坊市经济技术开发区人民法院" },
                        { "label": "廊坊市广阳区人民法院", "value": "廊坊市广阳区人民法院" },
                    ],
                },
                {
                    "label": "河北省衡水市中级人民法院",
                    "value": "河北省衡水市中级人民法院",
                    "children": [
                        { "label": "", "value": "" },
                        { "label": "衡水市桃城区人民法院", "value": "衡水市桃城区人民法院" },
                        { "label": "衡水市冀州区人民法院", "value": "衡水市冀州区人民法院" },
                        { "label": "枣强县人民法院", "value": "枣强县人民法院" },
                        { "label": "武邑县人民法院", "value": "武邑县人民法院" },
                        { "label": "深州市人民法院", "value": "深州市人民法院" },
                        { "label": "武强县人民法院", "value": "武强县人民法院" },
                        { "label": "饶阳县人民法院", "value": "饶阳县人民法院" },
                        { "label": "安平县人民法院", "value": "安平县人民法院" },
                        { "label": "故城县人民法院", "value": "故城县人民法院" },
                        { "label": "景县人民法院", "value": "景县人民法院" },
                        { "label": "阜城县人民法院", "value": "阜城县人民法院" },
                    ],
                },
                {
                    "label": "河北雄安新区中级人民法院",
                    "value": "河北雄安新区中级人民法院",
                    "children": [
                        { "label": "", "value": "" },
                        { "label": "安新县人民法院", "value": "安新县人民法院" },
                        { "label": "雄县人民法院", "value": "雄县人民法院" },
                        { "label": "容城县人民法院", "value": "容城县人民法院" },
                    ],
                },
            ]
        },
        {
            "label": "山西省高级人民法院",
            "value": "山西省高级人民法院",
            "children": [
                { "label": "", "value": "" },
                {
                    "label": "山西省太原市中级人民法院",
                    "value": "山西省太原市中级人民法院",
                    "children": [
                        { "label": "", "value": "" },
                        { "label": "太原市小店区人民法院", "value": "太原市小店区人民法院" },
                        { "label": "太原市迎泽区人民法院", "value": "太原市迎泽区人民法院" },
                        { "label": "太原市杏花岭区人民法院", "value": "太原市杏花岭区人民法院" },
                        { "label": "太原市尖草坪区人民法院", "value": "太原市尖草坪区人民法院" },
                        { "label": "太原市万柏林区人民法院", "value": "太原市万柏林区人民法院" },
                        { "label": "古交市人民法院", "value": "古交市人民法院" },
                        { "label": "清徐县人民法院", "value": "清徐县人民法院" },
                        { "label": "阳曲县人民法院", "value": "阳曲县人民法院" },
                        { "label": "娄烦县人民法院", "value": "娄烦县人民法院" },
                        { "label": "太原市晋源区人民法院", "value": "太原市晋源区人民法院" },
                    ],
                },
                {
                    "label": "山西省大同市中级人民法院",
                    "value": "山西省大同市中级人民法院",
                    "children": [
                        { "label": "", "value": "" },
                        { "label": "大同市平城区人民法院", "value": "大同市平城区人民法院" },
                        { "label": "大同市云冈区人民法院", "value": "大同市云冈区人民法院" },
                        { "label": "大同市新荣区人民法院", "value": "大同市新荣区人民法院" },
                        { "label": "阳高县人民法院", "value": "阳高县人民法院" },
                        { "label": "天镇县人民法院", "value": "天镇县人民法院" },
                        { "label": "广灵县人民法院", "value": "广灵县人民法院" },
                        { "label": "灵丘县人民法院", "value": "灵丘县人民法院" },
                        { "label": "浑源县人民法院", "value": "浑源县人民法院" },
                        { "label": "左云县人民法院", "value": "左云县人民法院" },
                        { "label": "大同市云州区人民法院", "value": "大同市云州区人民法院" },
                    ],
                },
                {
                    "label": "山西省阳泉市中级人民法院",
                    "value": "山西省阳泉市中级人民法院",
                    "children": [
                        { "label": "", "value": "" },
                        { "label": "阳泉市城区人民法院", "value": "阳泉市城区人民法院" },
                        { "label": "阳泉市矿区人民法院", "value": "阳泉市矿区人民法院" },
                        { "label": "阳泉市郊区人民法院", "value": "阳泉市郊区人民法院" },
                        { "label": "平定县人民法院", "value": "平定县人民法院" },
                        { "label": "盂县人民法院", "value": "盂县人民法院" },
                    ],
                },
                {
                    "label": "山西省长治市中级人民法院",
                    "value": "山西省长治市中级人民法院",
                    "children": [
                        { "label": "", "value": "" },
                        { "label": "长治市潞州区人民法院", "value": "长治市潞州区人民法院" },
                        { "label": "长治市上党区人民法院", "value": "长治市上党区人民法院" },
                        { "label": "长治市潞城区人民法院", "value": "长治市潞城区人民法院" },
                        { "label": "襄垣县人民法院", "value": "襄垣县人民法院" },
                        { "label": "长治市屯留区人民法院", "value": "长治市屯留区人民法院" },
                        { "label": "平顺县人民法院", "value": "平顺县人民法院" },
                        { "label": "黎城县人民法院", "value": "黎城县人民法院" },
                        { "label": "壶关县人民法院", "value": "壶关县人民法院" },
                        { "label": "长子县人民法院", "value": "长子县人民法院" },
                        { "label": "武乡县人民法院", "value": "武乡县人民法院" },
                        { "label": "沁县人民法院", "value": "沁县人民法院" },
                        { "label": "沁源县人民法院", "value": "沁源县人民法院" },
                    ],
                },
                {
                    "label": "山西省晋城市中级人民法院",
                    "value": "山西省晋城市中级人民法院",
                    "children": [
                        { "label": "", "value": "" },
                        { "label": "晋城市城区人民法院", "value": "晋城市城区人民法院" },
                        { "label": "泽州县人民法院", "value": "泽州县人民法院" },
                        { "label": "沁水县人民法院", "value": "沁水县人民法院" },
                        { "label": "阳城县人民法院", "value": "阳城县人民法院" },
                        { "label": "高平市人民法院", "value": "高平市人民法院" },
                        { "label": "陵川县人民法院", "value": "陵川县人民法院" },
                    ],
                },
                {
                    "label": "山西省朔州市中级人民法院",
                    "value": "山西省朔州市中级人民法院",
                    "children": [
                        { "label": "", "value": "" },
                        { "label": "朔州市朔城区人民法院", "value": "朔州市朔城区人民法院" },
                        { "label": "朔州市平鲁区人民法院", "value": "朔州市平鲁区人民法院" },
                        { "label": "山阴县人民法院", "value": "山阴县人民法院" },
                        { "label": "应县人民法院", "value": "应县人民法院" },
                        { "label": "右玉县人民法院", "value": "右玉县人民法院" },
                        { "label": "怀仁县人民法院", "value": "怀仁县人民法院" },
                    ],
                },
                {
                    "label": "山西省忻州市中级人民法院",
                    "value": "山西省忻州市中级人民法院",
                    "children": [
                        { "label": "", "value": "" },
                        { "label": "忻州市忻府区人民法院", "value": "忻州市忻府区人民法院" },
                        { "label": "定襄县人民法院", "value": "定襄县人民法院" },
                        { "label": "五台县人民法院", "value": "五台县人民法院" },
                        { "label": "原平市人民法院", "value": "原平市人民法院" },
                        { "label": "代县人民法院", "value": "代县人民法院" },
                        { "label": "繁峙县人民法院", "value": "繁峙县人民法院" },
                        { "label": "宁武县人民法院", "value": "宁武县人民法院" },
                        { "label": "静乐县人民法院", "value": "静乐县人民法院" },
                        { "label": "神池县人民法院", "value": "神池县人民法院" },
                        { "label": "五寨县人民法院", "value": "五寨县人民法院" },
                        { "label": "岢岚县人民法院", "value": "岢岚县人民法院" },
                        { "label": "河曲县人民法院", "value": "河曲县人民法院" },
                        { "label": "保德县人民法院", "value": "保德县人民法院" },
                        { "label": "偏关县人民法院", "value": "偏关县人民法院" },
                    ],
                },
                {
                    "label": "山西省吕梁市中级人民法院",
                    "value": "山西省吕梁市中级人民法院",
                    "children": [
                        { "label": "", "value": "" },
                        { "label": "汾阳市人民法院", "value": "汾阳市人民法院" },
                        { "label": "文水县人民法院", "value": "文水县人民法院" },
                        { "label": "交城县人民法院", "value": "交城县人民法院" },
                        { "label": "孝义市人民法院", "value": "孝义市人民法院" },
                        { "label": "兴县人民法院", "value": "兴县人民法院" },
                        { "label": "临县人民法院", "value": "临县人民法院" },
                        { "label": "柳林县人民法院", "value": "柳林县人民法院" },
                        { "label": "石楼县人民法院", "value": "石楼县人民法院" },
                        { "label": "岚县人民法院", "value": "岚县人民法院" },
                        { "label": "方山县人民法院", "value": "方山县人民法院" },
                        { "label": "吕梁市离石区人民法院", "value": "吕梁市离石区人民法院" },
                        { "label": "中阳县人民法院", "value": "中阳县人民法院" },
                        { "label": "交口县人民法院", "value": "交口县人民法院" },
                    ],
                },
                {
                    "label": "山西省晋中市中级人民法院",
                    "value": "山西省晋中市中级人民法院",
                    "children": [
                        { "label": "", "value": "" },
                        { "label": "晋中市榆次区人民法院", "value": "晋中市榆次区人民法院" },
                        { "label": "榆社县人民法院", "value": "榆社县人民法院" },
                        { "label": "左权县人民法院", "value": "左权县人民法院" },
                        { "label": "和顺县人民法院", "value": "和顺县人民法院" },
                        { "label": "昔阳县人民法院", "value": "昔阳县人民法院" },
                        { "label": "寿阳县人民法院", "value": "寿阳县人民法院" },
                        { "label": "太谷县人民法院", "value": "太谷县人民法院" },
                        { "label": "祁县人民法院", "value": "祁县人民法院" },
                        { "label": "平遥县人民法院", "value": "平遥县人民法院" },
                        { "label": "介休市人民法院", "value": "介休市人民法院" },
                        { "label": "灵石县人民法院", "value": "灵石县人民法院" },
                    ],
                },
                {
                    "label": "山西省临汾市中级人民法院",
                    "value": "山西省临汾市中级人民法院",
                    "children": [
                        { "label": "", "value": "" },
                        { "label": "临汾市尧都区人民法院", "value": "临汾市尧都区人民法院" },
                        { "label": "侯马市人民法院", "value": "侯马市人民法院" },
                        { "label": "霍州市人民法院", "value": "霍州市人民法院" },
                        { "label": "曲沃县人民法院", "value": "曲沃县人民法院" },
                        { "label": "翼城县人民法院", "value": "翼城县人民法院" },
                        { "label": "襄汾县人民法院", "value": "襄汾县人民法院" },
                        { "label": "洪洞县人民法院", "value": "洪洞县人民法院" },
                        { "label": "古县人民法院", "value": "古县人民法院" },
                        { "label": "安泽县人民法院", "value": "安泽县人民法院" },
                        { "label": "浮山县人民法院", "value": "浮山县人民法院" },
                        { "label": "吉县人民法院", "value": "吉县人民法院" },
                        { "label": "乡宁县人民法院", "value": "乡宁县人民法院" },
                        { "label": "蒲县人民法院", "value": "蒲县人民法院" },
                        { "label": "大宁县人民法院", "value": "大宁县人民法院" },
                        { "label": "永和县人民法院", "value": "永和县人民法院" },
                        { "label": "隰县人民法院", "value": "隰县人民法院" },
                        { "label": "汾西县人民法院", "value": "汾西县人民法院" },
                    ],
                },
                {
                    "label": "山西省运城市中级人民法院",
                    "value": "山西省运城市中级人民法院",
                    "children": [
                        { "label": "", "value": "" },
                        { "label": "运城市盐湖区人民法院", "value": "运城市盐湖区人民法院" },
                        { "label": "永济市人民法院", "value": "永济市人民法院" },
                        { "label": "芮城县人民法院", "value": "芮城县人民法院" },
                        { "label": "临猗县人民法院", "value": "临猗县人民法院" },
                        { "label": "万荣县人民法院", "value": "万荣县人民法院" },
                        { "label": "新绛县人民法院", "value": "新绛县人民法院" },
                        { "label": "稷山县人民法院", "value": "稷山县人民法院" },
                        { "label": "河津市人民法院", "value": "河津市人民法院" },
                        { "label": "闻喜县人民法院", "value": "闻喜县人民法院" },
                        { "label": "夏县人民法院", "value": "夏县人民法院" },
                        { "label": "绛县人民法院", "value": "绛县人民法院" },
                        { "label": "平陆县人民法院", "value": "平陆县人民法院" },
                        { "label": "垣曲县人民法院", "value": "垣曲县人民法院" },
                    ],
                },
                {
                    "label": "太原铁路运输中级法院",
                    "value": "太原铁路运输中级法院",
                    "children": [
                        { "label": "", "value": "" },
                        { "label": "太原铁路运输法院", "value": "太原铁路运输法院" },
                        { "label": "大同铁路运输法院", "value": "大同铁路运输法院" },
                        { "label": "临汾铁路运输法院", "value": "临汾铁路运输法院" },
                    ],
                },
            ]
        },
        {
            "label": "内蒙古自治区高级人民法院",
            "value": "内蒙古自治区高级人民法院",
            "children": [
                { "label": "", "value": "" },
                {
                    "label": "内蒙古自治区呼和浩特市中级人民法院",
                    "value": "内蒙古自治区呼和浩特市中级人民法院",
                    "children": [
                        { "label": "", "value": "" },
                        { "label": "呼和浩特市新城区人民法院", "value": "呼和浩特市新城区人民法院" },
                        { "label": "呼和浩特市回民区人民法院", "value": "呼和浩特市回民区人民法院" },
                        { "label": "呼和浩特市玉泉区人民法院", "value": "呼和浩特市玉泉区人民法院" },
                        { "label": "呼和浩特市赛罕区人民法院", "value": "呼和浩特市赛罕区人民法院" },
                        { "label": "土默特左旗人民法院", "value": "土默特左旗人民法院" },
                        { "label": "托克托县人民法院", "value": "托克托县人民法院" },
                        { "label": "武川县人民法院", "value": "武川县人民法院" },
                        { "label": "和林格尔县人民法院", "value": "和林格尔县人民法院" },
                        { "label": "清水河县人民法院", "value": "清水河县人民法院" },
                    ],
                },
                {
                    "label": "内蒙古自治区包头市中级人民法院",
                    "value": "内蒙古自治区包头市中级人民法院",
                    "children": [
                        { "label": "", "value": "" },
                        { "label": "包头市东河区人民法院", "value": "包头市东河区人民法院" },
                        { "label": "包头市昆都仑区人民法院", "value": "包头市昆都仑区人民法院" },
                        { "label": "包头市青山区人民法院", "value": "包头市青山区人民法院" },
                        { "label": "包头市石拐区人民法院", "value": "包头市石拐区人民法院" },
                        { "label": "包头市白云鄂博矿区人民法院", "value": "包头市白云鄂博矿区人民法院" },
                        { "label": "包头市九原区人民法院", "value": "包头市九原区人民法院" },
                        { "label": "土默特右旗人民法院", "value": "土默特右旗人民法院" },
                        { "label": "固阳县人民法院", "value": "固阳县人民法院" },
                        { "label": "达尔罕茂明安联合旗人民法院", "value": "达尔罕茂明安联合旗人民法院" },
                        { "label": "包头稀土高新技术产业开发区人民法院", "value": "包头稀土高新技术产业开发区人民法院" },
                    ],
                },
                {
                    "label": "内蒙古自治区乌海市中级人民法院",
                    "value": "内蒙古自治区乌海市中级人民法院",
                    "children": [
                        { "label": "", "value": "" },
                        { "label": "乌海市海勃湾区人民法院", "value": "乌海市海勃湾区人民法院" },
                        { "label": "乌海市海南区人民法院", "value": "乌海市海南区人民法院" },
                        { "label": "乌海市乌达区人民法院", "value": "乌海市乌达区人民法院" },
                    ],
                },
                {
                    "label": "内蒙古自治区赤峰市中级人民法院",
                    "value": "内蒙古自治区赤峰市中级人民法院",
                    "children": [
                        { "label": "", "value": "" },
                        { "label": "赤峰市红山区人民法院", "value": "赤峰市红山区人民法院" },
                        { "label": "赤峰市元宝山区人民法院", "value": "赤峰市元宝山区人民法院" },
                        { "label": "赤峰市松山区人民法院", "value": "赤峰市松山区人民法院" },
                        { "label": "阿鲁科尔沁旗人民法院", "value": "阿鲁科尔沁旗人民法院" },
                        { "label": "巴林左旗人民法院", "value": "巴林左旗人民法院" },
                        { "label": "巴林右旗人民法院", "value": "巴林右旗人民法院" },
                        { "label": "林西县人民法院", "value": "林西县人民法院" },
                        { "label": "克什克腾旗人民法院", "value": "克什克腾旗人民法院" },
                        { "label": "翁牛特旗人民法院", "value": "翁牛特旗人民法院" },
                        { "label": "喀喇沁旗人民法院", "value": "喀喇沁旗人民法院" },
                        { "label": "宁城县人民法院", "value": "宁城县人民法院" },
                        { "label": "敖汉旗人民法院", "value": "敖汉旗人民法院" },
                    ],
                },
                {
                    "label": "内蒙古自治区呼伦贝尔市中级人民法院",
                    "value": "内蒙古自治区呼伦贝尔市中级人民法院",
                    "children": [
                        {"id":490,"label":"呼伦贝尔市海拉尔区人民法院","value":"呼伦贝尔市海拉尔区人民法院"},
                        {"id":491,"label":"扎兰屯市人民法院","value":"扎兰屯市人民法院"},
                        {"id":492,"label":"阿荣旗人民法院","value":"阿荣旗人民法院"},
                        {"id":493,"label":"莫力达瓦达斡尔族自治旗人民法院","value":"莫力达瓦达斡尔族自治旗人民法院"},
                        {"id":494,"label":"额尔古纳市人民法院","value":"额尔古纳市人民法院"},
                        {"id":495,"label":"根河市人民法院","value":"根河市人民法院"},
                        {"id":496,"label":"鄂伦春自治旗人民法院","value":"鄂伦春自治旗人民法院"},
                        {"id":497,"label":"鄂温克族自治旗人民法院","value":"鄂温克族自治旗人民法院"},
                        {"id":498,"label":"新巴尔虎右旗人民法院","value":"新巴尔虎右旗人民法院"},
                        {"id":499,"label":"新巴尔虎左旗人民法院","value":"新巴尔虎左旗人民法院"},
                        {"id":500,"label":"陈巴尔虎旗人民法院","value":"陈巴尔虎旗人民法院"},
                        {"id":501,"label":"满洲里市人民法院","value":"满洲里市人民法院"},
                        {"id":502,"label":"牙克石市人民法院","value":"牙克石市人民法院"},
                        {"id":5011,"label":"呼伦贝尔市扎赉诺尔区人民法院","value":"呼伦贝尔市扎赉诺尔区人民法院"},
                    ],
                },
                {
                    "label": "内蒙古自治区兴安盟中级人民法院",
                    "value": "内蒙古自治区兴安盟中级人民法院",
                    "children": [
                        {"id":504,"label":"乌兰浩特市人民法院"},
                        {"id":505,"label":"阿尔山市人民法院"},
                        {"id":506,"label":"科尔沁右翼前旗人民法院"},
                        {"id":507,"label":"科尔沁右翼中旗人民法院"},
                        {"id":508,"label":"扎赉特旗人民法院"},
                        {"id":509,"label":"突泉县人民法院"},
                    ],
                },
                {
                    "label": "内蒙古自治区通辽市中级人民法院",
                    "value": "内蒙古自治区通辽市中级人民法院",
                    "children": [
                        {"id":511,"label":"通辽市科尔沁区人民法院"},
                        {"id":512,"label":"科尔沁左翼中旗人民法院"},
                        {"id":513,"label":"科尔沁左翼后旗人民法院"},
                        {"id":514,"label":"开鲁县人民法院"},
                        {"id":515,"label":"奈曼旗人民法院"},
                        {"id":516,"label":"霍林郭勒市人民法院"},
                        {"id":517,"label":"库伦旗人民法院"},
                        {"id":518,"label":"扎鲁特旗人民法院"},
                    ],
                },
                {
                    "label": "内蒙古自治区锡林郭勒盟中级人民法院",
                    "value": "内蒙古自治区锡林郭勒盟中级人民法院",
                    "children": [
                        {"id":520,"label":"二连浩特市人民法院"},
                        {"id":521,"label":"阿巴嘎旗人民法院"},
                        {"id":522,"label":"苏尼特右旗人民法院"},
                        {"id":523,"label":"东乌珠穆沁旗人民法院"},
                        {"id":524,"label":"西乌珠穆沁旗人民法院"},
                        {"id":525,"label":"太仆寺旗人民法院"},
                        {"id":526,"label":"正镶白旗人民法院"},
                        {"id":527,"label":"多伦县人民法院"},
                        {"id":528,"label":"锡林浩特市人民法院"},
                        {"id":529,"label":"苏尼特左旗人民法院"},
                        {"id":530,"label":"镶黄旗人民法院"},
                        {"id":531,"label":"正蓝旗人民法院"},
                        {"id":5012,"label":"锡林郭勒乌拉盖管理区人民法院"},
                    ],
                },
                {
                    "label": "内蒙古自治区乌兰察布市中级人民法院",
                    "value": "内蒙古自治区乌兰察布市中级人民法院",
                    "children": [
                        {"id":533,"label":"乌兰察布市集宁区人民法院"},
                        {"id":534,"label":"卓资县人民法院"},
                        {"id":535,"label":"化德县人民法院"},
                        {"id":536,"label":"商都县人民法院"},
                        {"id":537,"label":"兴和县人民法院"},
                        {"id":538,"label":"丰镇市人民法院"},
                        {"id":539,"label":"凉城县人民法院"},
                        {"id":540,"label":"察哈尔右翼前旗人民法院"},
                        {"id":541,"label":"察哈尔右翼中旗人民法院"},
                        {"id":542,"label":"察哈尔右翼后旗人民法院"},
                        {"id":543,"label":"四子王旗人民法院"},
                    ],
                },
                {
                    "label": "内蒙古自治区鄂尔多斯市中级人民法院",
                    "value": "内蒙古自治区鄂尔多斯市中级人民法院",
                    "children": [
                        {"id":545,"label":"鄂尔多斯市东胜区人民法院"},
                        {"id":546,"label":"达拉特旗人民法院"},
                        {"id":547,"label":"准格尔旗人民法院"},
                        {"id":548,"label":"鄂托克前旗人民法院"},
                        {"id":549,"label":"鄂托克旗人民法院"},
                        {"id":550,"label":"杭锦旗人民法院"},
                        {"id":551,"label":"乌审旗人民法院"},
                        {"id":552,"label":"伊金霍洛旗人民法院"},
                        {"id":569,"label":"鄂尔多斯康巴什区人民法院"},
                    ],
                },
                {
                    "label": "内蒙古自治区巴彦淖尔市中级人民法院",
                    "value": "内蒙古自治区巴彦淖尔市中级人民法院",
                    "children": [
                        {"id":554,"label":"巴彦淖尔市临河区人民法院"},
                        {"id":555,"label":"磴口县人民法院"},
                        {"id":556,"label":"乌拉特中旗人民法院"},
                        {"id":557,"label":"杭锦后旗人民法院"},
                        {"id":558,"label":"五原县人民法院"},
                        {"id":559,"label":"乌拉特前旗人民法院"},
                        {"id":560,"label":"乌拉特后旗人民法院"},
                    ],
                },
                {
                    "label": "内蒙古自治区阿拉善盟中级人民法院",
                    "value": "内蒙古自治区阿拉善盟中级人民法院",
                    "children": [
                        {"id":562,"label":"阿拉善左旗人民法院"},
                        {"id":563,"label":"额济纳旗人民法院"},
                        {"id":564,"label":"阿拉善右旗人民法院"},
                    ],
                },
                {
                    "label": "呼和浩特铁路运输中级法院",
                    "value": "呼和浩特铁路运输中级法院",
                    "children": [
                        {"id":566,"label":"包头铁路运输法院"},
                        {"id":567,"label":"呼和浩特铁路运输法院"},
                        {"id":1010,"label":"海拉尔铁路运输法院"},
                        {"id":728,"label":"通辽铁路运输法院"}
                    ],
                },
            ]
        },
        {
            "label": "辽宁省高级人民法院",
            "value": "辽宁省高级人民法院",
            "children": [
                { "label": "", "value": "" },
                {
                    "label": "辽宁省沈阳市中级人民法院",
                    "value": "辽宁省沈阳市中级人民法院",
                    "children": [
                        
                    ],
                },
                {
                    "label": "辽宁省大连市中级人民法院",
                    "value": "辽宁省大连市中级人民法院",
                    "children": [
                        { "label": "", "value": "" },
                        {"id":618,"label":"大连市中山区人民法院"},
                        {"id":619,"label":"大连市西岗区人民法院"},
                        {"id":620,"label":"大连市沙河口区人民法院"},
                        {"id":621,"label":"大连市金州区人民法院"},
                        {"id":622,"label":"大连市甘井子区人民法院"},
                        {"id":623,"label":"大连市旅顺口区人民法院"},
                        {"id":624,"label":"大连经济技术开发区人民法院"},
                        {"id":625,"label":"瓦房店市人民法院"},
                        {"id":626,"label":"庄河市人民法院"},
                        {"id":627,"label":"大连市普兰店区人民法院"},
                        {"id":628,"label":"长海县人民法院"},
                        {"id":5003,"label":"大连长兴岛经济技术开发区人民法院"},
                        {"id":5004,"label":"大连高新技术产业园区人民法院"},
                    ],
                },
                {
                    "label": "辽宁省鞍山市中级人民法院",
                    "value": "辽宁省鞍山市中级人民法院",
                    "children": [
                        {"id":630,"label":"鞍山市铁东区人民法院"},
                        {"id":631,"label":"鞍山市铁西区人民法院"},
                        {"id":632,"label":"鞍山市立山区人民法院"},
                        {"id":636,"label":"鞍山市千山区人民法院"},
                        {"id":633,"label":"海城市人民法院"},
                        {"id":634,"label":"台安县人民法院"},
                        {"id":635,"label":"岫岩满族自治县人民法院"},
                    ],
                },
                {
                    "label": "辽宁省抚顺市中级人民法院",
                    "value": "辽宁省抚顺市中级人民法院",
                    "children": [
                        {"id":638,"label":"抚顺市新抚区人民法院"},
                        {"id":639,"label":"抚顺市东洲区人民法院"},
                        {"id":640,"label":"抚顺市望花区人民法院"},
                        {"id":641,"label":"抚顺市顺城区人民法院"},
                        {"id":642,"label":"抚顺县人民法院"},
                        {"id":643,"label":"新宾满族自治县人民法院"},
                        {"id":644,"label":"清原满族自治县人民法院"},
                    ],
                },
                {
                    "label": "辽宁省本溪市中级人民法院",
                    "value": "辽宁省本溪市中级人民法院",
                    "children": [
                        {"id":646,"label":"本溪市平山区人民法院"},
                        {"id":647,"label":"本溪市溪湖区人民法院"},
                        {"id":648,"label":"本溪市明山区人民法院"},
                        {"id":649,"label":"本溪市南芬区人民法院"},
                        {"id":650,"label":"本溪满族自治县人民法院"},
                        {"id":651,"label":"桓仁满族自治县人民法院"},
                    ],
                },
                {
                    "label": "辽宁省丹东市中级人民法院",
                    "value": "辽宁省丹东市中级人民法院",
                    "children": [
                        {"id":653,"label":"丹东市元宝区人民法院"},
                        {"id":654,"label":"丹东市振兴区人民法院"},
                        {"id":655,"label":"丹东市振安区人民法院"},
                        {"id":656,"label":"东港市人民法院"},
                        {"id":657,"label":"凤城市人民法院"},
                        {"id":658,"label":"宽甸满族自治县人民法院"},
                    ],
                },
                {
                    "label": "辽宁省锦州市中级人民法院",
                    "value": "辽宁省锦州市中级人民法院",
                    "children": [{"id":660,"label":"锦州市古塔区人民法院"},
                        {"id":661,"label":"锦州市凌河区人民法院"},
                        {"id":662,"label":"锦州市太和区人民法院"},
                        {"id":663,"label":"凌海市人民法院"},
                        {"id":664,"label":"黑山县人民法院"},
                        {"id":665,"label":"义县人民法院"},
                        {"id":666,"label":"北镇市人民法院"}],
                },
                {
                    "label": "辽宁省营口市中级人民法院",
                    "value": "辽宁省营口市中级人民法院",
                    "children": [{"id":669,"label":"营口市站前区人民法院"},
                        {"id":670,"label":"营口市西市区人民法院"},
                        {"id":671,"label":"营口市鲅鱼圈区人民法院"},
                        {"id":672,"label":"营口市老边区人民法院"},
                        {"id":673,"label":"大石桥市人民法院"},
                        {"id":674,"label":"盖州市人民法院"}],
                },
                {
                    "label": "辽宁省阜新市中级人民法院",
                    "value": "辽宁省阜新市中级人民法院",
                    "children": [{"id":676,"label":"阜新市海州区人民法院"},
                        {"id":677,"label":"阜新市新邱区人民法院"},
                        {"id":678,"label":"阜新市太平区人民法院"},
                        {"id":679,"label":"阜新市清河门区人民法院"},
                        {"id":680,"label":"阜新市细河区人民法院"},
                        {"id":681,"label":"彰武县人民法院"},
                        {"id":682,"label":"阜新蒙古族自治县人民法院"}],
                },
                {
                    "label": "辽宁省辽阳市中级人民法院",
                    "value": "辽宁省辽阳市中级人民法院",
                    "children": [{"id":684,"label":"辽阳市白塔区人民法院"},
                        {"id":685,"label":"辽阳市文圣区人民法院"},
                        {"id":686,"label":"辽阳市宏伟区人民法院"},
                        {"id":687,"label":"辽阳市弓长岭区人民法院"},
                        {"id":688,"label":"辽阳市太子河区人民法院"},
                        {"id":689,"label":"辽阳县人民法院"},
                        {"id":690,"label":"灯塔市人民法院"}],
                },
                {
                    "label": "辽宁省盘锦市中级人民法院",
                    "value": "辽宁省盘锦市中级人民法院",
                    "children": [{"id":692,"label":"盘锦市双台子区人民法院"},
                        {"id":693,"label":"盘锦市兴隆台区人民法院"},
                        {"id":694,"label":"盘锦市大洼区人民法院"},
                        {"id":695,"label":"盘山县人民法院"}],
                },
                {
                    "label": "辽宁省铁岭市中级人民法院",
                    "value": "辽宁省铁岭市中级人民法院",
                    "children": [{"id":697,"label":"铁岭市银州区人民法院"},
                        {"id":698,"label":"铁岭市清河区人民法院"},
                        {"id":699,"label":"调兵山市人民法院"},
                        {"id":700,"label":"开原市人民法院"},
                        {"id":701,"label":"铁岭县人民法院"},
                        {"id":702,"label":"西丰县人民法院"},
                        {"id":703,"label":"昌图县人民法院"}],
                },
                {
                    "label": "辽宁省朝阳市中级人民法院",
                    "value": "辽宁省朝阳市中级人民法院",
                    "children": [{"id":705,"label":"朝阳市双塔区人民法院"},
                        {"id":706,"label":"朝阳市龙城区人民法院"},
                        {"id":707,"label":"北票市人民法院"},
                        {"id":708,"label":"朝阳县人民法院"},
                        {"id":709,"label":"建平县人民法院"},
                        {"id":710,"label":"凌源市人民法院"},
                        {"id":711,"label":"喀喇沁左翼蒙古族自治县人民法院"}],
                },
                {
                    "label": "辽宁省葫芦岛市中级人民法院",
                    "value": "辽宁省葫芦岛市中级人民法院",
                    "children": [{"id":713,"label":"葫芦岛市连山区人民法院"},
                        {"id":714,"label":"葫芦岛市南票区人民法院"},
                        {"id":715,"label":"葫芦岛市龙港区人民法院"},
                        {"id":716,"label":"绥中县人民法院"},
                        {"id":717,"label":"建昌县人民法院"},
                        {"id":718,"label":"兴城市人民法院"}],
                },
                {
                    "label": "沈阳铁路运输中级法院",
                    "value": "沈阳铁路运输中级法院",
                    "children": [{"id":720,"label":"沈阳铁路运输法院"},
                        {"id":722,"label":"锦州铁路运输法院"},
                        {"id":723,"label":"大连铁路运输法院"},
                        {"id":725,"label":"丹东铁路运输法院"}],
                },
                {
                    "label": "辽宁省辽河中级人民法院",
                    "value": "辽宁省辽河中级人民法院",
                    "children": [{"id":731,"label":"辽河人民法院"}],
                },
                {
                    "label": "大连海事法院",
                    "value": "大连海事法院",
                },
            ]
        },
        {
            "label": "吉林省高级人民法院",
            "value": "吉林省高级人民法院",
            "children": [
                { "label": "", "value": "" },
                {
                    "label": "吉林省长春市中级人民法院",
                    "value": "吉林省长春市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "吉林省吉林市中级人民法院",
                    "value": "吉林省吉林市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "吉林省四平市中级人民法院",
                    "value": "吉林省四平市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "吉林省辽源市中级人民法院",
                    "value": "吉林省辽源市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "吉林省通化市中级人民法院",
                    "value": "吉林省通化市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "吉林省白山市中级人民法院",
                    "value": "吉林省白山市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "吉林省白城市中级人民法院",
                    "value": "吉林省白城市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "吉林省延边朝鲜族自治州中级人民法院",
                    "value": "吉林省延边朝鲜族自治州中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "吉林省延边林区中级法院",
                    "value": "吉林省延边林区中级法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "吉林省松原市中级人民法院",
                    "value": "吉林省松原市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "吉林省长春林区中级法院",
                    "value": "吉林省长春林区中级法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "长春铁路运输中级法院",
                    "value": "长春铁路运输中级法院",
                    "children": [{ "label": "", "value": "" }],
                },
            ]
        },
        {
            "label": "黑龙江省高级人民法院",
            "value": "黑龙江省高级人民法院",
            "children": [
                { "label": "", "value": "" },
                {
                    "label": "黑龙江省哈尔滨市中级人民法院",
                    "value": "黑龙江省哈尔滨市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "黑龙江省齐齐哈尔市中级人民法院",
                    "value": "黑龙江省齐齐哈尔市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "黑龙江省鸡西市中级人民法院",
                    "value": "黑龙江省鸡西市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "黑龙江省鹤岗市中级人民法院",
                    "value": "黑龙江省鹤岗市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "黑龙江省双鸭山市中级人民法院",
                    "value": "黑龙江省双鸭山市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "黑龙江省大庆市中级人民法院",
                    "value": "黑龙江省大庆市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "黑龙江省伊春市中级人民法院",
                    "value": "黑龙江省伊春市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "黑龙江省佳木斯市中级人民法院",
                    "value": "黑龙江省佳木斯市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "黑龙江省七台河市中级人民法院",
                    "value": "黑龙江省七台河市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "黑龙江省牡丹江市中级人民法院",
                    "value": "黑龙江省牡丹江市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "黑龙江省绥化市中级人民法院",
                    "value": "黑龙江省绥化市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "黑龙江省黑河市中级人民法院",
                    "value": "黑龙江省黑河市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "黑龙江省大兴安岭地区中级人民法院",
                    "value": "黑龙江省大兴安岭地区中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "哈尔滨铁路运输中级法院",
                    "value": "哈尔滨铁路运输中级法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "黑龙江省林区中级人民法院",
                    "value": "黑龙江省林区中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "黑龙江省农垦中级法院",
                    "value": "黑龙江省农垦中级法院",
                    "children": [{ "label": "", "value": "" }],
                },
            ]
        },
        {
            "label": "上海市高级人民法院",
            "value": "上海市高级人民法院",
            "children": [
                { "label": "", "value": "" },
                {
                    "label": "上海市第一中级人民法院",
                    "value": "上海市第一中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "上海市第二中级人民法院",
                    "value": "上海市第二中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "上海铁路运输中级法院",
                    "value": "上海铁路运输中级法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "上海海事法院",
                    "value": "上海海事法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "上海市第三中级人民法院",
                    "value": "上海市第三中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "上海知识产权法院",
                    "value": "上海知识产权法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "上海金融法院",
                    "value": "上海金融法院",
                    "children": [{ "label": "", "value": "" }],
                },
            ]
        },
        {
            "label": "江苏省高级人民法院",
            "value": "江苏省高级人民法院",
            "children": [
                { "label": "", "value": "" },
                {
                    "label": "江苏省南京市中级人民法院",
                    "value": "江苏省南京市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "江苏省无锡市中级人民法院",
                    "value": "江苏省无锡市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "江苏省徐州市中级人民法院",
                    "value": "江苏省徐州市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "江苏省常州市中级人民法院",
                    "value": "江苏省常州市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "江苏省苏州市中级人民法院",
                    "value": "江苏省苏州市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "江苏省南通市中级人民法院",
                    "value": "江苏省南通市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "江苏省连云港市中级人民法院",
                    "value": "江苏省连云港市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "江苏省淮安市中级人民法院",
                    "value": "江苏省淮安市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "江苏省盐城市中级人民法院",
                    "value": "江苏省盐城市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "江苏省扬州市中级人民法院",
                    "value": "江苏省扬州市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "江苏省镇江市中级人民法院",
                    "value": "江苏省镇江市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "江苏省泰州市中级人民法院",
                    "value": "江苏省泰州市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "江苏省宿迁市中级人民法院",
                    "value": "江苏省宿迁市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "南京铁路运输法院",
                    "value": "南京铁路运输法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "徐州铁路运输法院",
                    "value": "徐州铁路运输法院",
                    "children": [{ "label": "", "value": "" }],
                },
            ]
        },
        {
            "label": "浙江省高级人民法院",
            "value": "浙江省高级人民法院",
            "children": [
                { "label": "", "value": "" },
                {
                    "label": "浙江省杭州市中级人民法院",
                    "value": "浙江省杭州市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "浙江省宁波市中级人民法院",
                    "value": "浙江省宁波市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "浙江省温州市中级人民法院",
                    "value": "浙江省温州市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "浙江省嘉兴市中级人民法院",
                    "value": "浙江省嘉兴市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "浙江省湖州市中级人民法院",
                    "value": "浙江省湖州市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "浙江省绍兴市中级人民法院",
                    "value": "浙江省绍兴市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "浙江省金华市中级人民法院",
                    "value": "浙江省金华市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "浙江省衢州市中级人民法院",
                    "value": "浙江省衢州市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "浙江省舟山市中级人民法院",
                    "value": "浙江省舟山市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "浙江省丽水市中级人民法院",
                    "value": "浙江省丽水市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "浙江省台州市中级人民法院",
                    "value": "浙江省台州市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "宁波海事法院",
                    "value": "宁波海事法院",
                    "children": [{ "label": "", "value": "" }],
                },
            ]
        },
        {
            "label": "安徽省高级人民法院",
            "value": "安徽省高级人民法院",
            "children": [
                { "label": "", "value": "" },
                {
                    "label": "安徽省合肥市中级人民法院",
                    "value": "安徽省合肥市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "安徽省芜湖市中级人民法院",
                    "value": "安徽省芜湖市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "安徽省蚌埠市中级人民法院",
                    "value": "安徽省蚌埠市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "安徽省淮南市中级人民法院",
                    "value": "安徽省淮南市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "安徽省马鞍山市中级人民法院",
                    "value": "安徽省马鞍山市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "安徽省淮北市中级人民法院",
                    "value": "安徽省淮北市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "安徽省铜陵市中级人民法院",
                    "value": "安徽省铜陵市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "安徽省安庆市中级人民法院",
                    "value": "安徽省安庆市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "安徽省黄山市中级人民法院",
                    "value": "安徽省黄山市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "安徽省阜阳市中级人民法院",
                    "value": "安徽省阜阳市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "安徽省宿州市中级人民法院",
                    "value": "安徽省宿州市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "安徽省滁州市中级人民法院",
                    "value": "安徽省滁州市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "安徽省六安市中级人民法院",
                    "value": "安徽省六安市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "安徽省宣城市中级人民法院",
                    "value": "安徽省宣城市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "安徽省池州市中级人民法院",
                    "value": "安徽省池州市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "安徽省亳州市中级人民法院",
                    "value": "安徽省亳州市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
            ]
        },
        {
            "label": "福建省高级人民法院",
            "value": "福建省高级人民法院",
            "children": [
                { "label": "", "value": "" },
                {
                    "label": "福建省福州市中级人民法院",
                    "value": "福建省福州市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "福建省厦门市中级人民法院",
                    "value": "福建省厦门市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "福建省莆田市中级人民法院",
                    "value": "福建省莆田市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "福建省三明市中级人民法院",
                    "value": "福建省三明市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "福建省泉州市中级人民法院",
                    "value": "福建省泉州市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "福建省漳州市中级人民法院",
                    "value": "福建省漳州市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "福建省南平市中级人民法院",
                    "value": "福建省南平市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "福建省宁德市中级人民法院",
                    "value": "福建省宁德市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "福建省龙岩市中级人民法院",
                    "value": "福建省龙岩市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "厦门海事法院",
                    "value": "厦门海事法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "福州铁路运输法院",
                    "value": "福州铁路运输法院",
                    "children": [{ "label": "", "value": "" }],
                },
            ]
        },
        {
            "label": "江西省高级人民法院",
            "value": "江西省高级人民法院",
            "children": [
                { "label": "", "value": "" },
                {
                    "label": "江西省南昌市中级人民法院",
                    "value": "江西省南昌市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "江西省景德镇市中级人民法院",
                    "value": "江西省景德镇市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "江西省萍乡市中级人民法院",
                    "value": "江西省萍乡市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "江西省九江市中级人民法院",
                    "value": "江西省九江市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "江西省新余市中级人民法院",
                    "value": "江西省新余市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "江西省鹰潭市中级人民法院",
                    "value": "江西省鹰潭市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "江西省赣州市中级人民法院",
                    "value": "江西省赣州市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "江西省宜春市中级人民法院",
                    "value": "江西省宜春市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "江西省上饶市中级人民法院",
                    "value": "江西省上饶市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "江西省吉安市中级人民法院",
                    "value": "江西省吉安市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "江西省抚州市中级人民法院",
                    "value": "江西省抚州市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "南昌铁路运输中级法院",
                    "value": "南昌铁路运输中级法院",
                    "children": [{ "label": "", "value": "" }],
                },
            ]
        },
        {
            "label": "山东省高级人民法院",
            "value": "山东省高级人民法院",
            "children": [
                { "label": "", "value": "" },
                {
                    "label": "山东省济南市中级人民法院",
                    "value": "山东省济南市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "山东省青岛市中级人民法院",
                    "value": "山东省青岛市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "山东省淄博市中级人民法院",
                    "value": "山东省淄博市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "山东省枣庄市中级人民法院",
                    "value": "山东省枣庄市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "山东省东营市中级人民法院",
                    "value": "山东省东营市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "山东省烟台市中级人民法院",
                    "value": "山东省烟台市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "山东省潍坊市中级人民法院",
                    "value": "山东省潍坊市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "山东省济宁市中级人民法院",
                    "value": "山东省济宁市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "山东省泰安市中级人民法院",
                    "value": "山东省泰安市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "山东省威海市中级人民法院",
                    "value": "山东省威海市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "山东省日照市中级人民法院",
                    "value": "山东省日照市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "山东省滨州市中级人民法院",
                    "value": "山东省滨州市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "山东省德州市中级人民法院",
                    "value": "山东省德州市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "山东省聊城市中级人民法院",
                    "value": "山东省聊城市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "山东省临沂市中级人民法院",
                    "value": "山东省临沂市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "山东省菏泽市中级人民法院",
                    "value": "山东省菏泽市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "济南铁路运输中级法院",
                    "value": "济南铁路运输中级法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "青岛海事法院",
                    "value": "青岛海事法院",
                    "children": [{ "label": "", "value": "" }],
                },
            ]
        },
        {
            "label": "河南省高级人民法院",
            "value": "河南省高级人民法院",
            "children": [
                { "label": "", "value": "" },
                {
                    "label": "河南省郑州市中级人民法院",
                    "value": "河南省郑州市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "河南省开封市中级人民法院",
                    "value": "河南省开封市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "河南省洛阳市中级人民法院",
                    "value": "河南省洛阳市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "河南省平顶山市中级人民法院",
                    "value": "河南省平顶山市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "河南省安阳市中级人民法院",
                    "value": "河南省安阳市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "河南省鹤壁市中级人民法院",
                    "value": "河南省鹤壁市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "河南省新乡市中级人民法院",
                    "value": "河南省新乡市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "河南省焦作市中级人民法院",
                    "value": "河南省焦作市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "河南省濮阳市中级人民法院",
                    "value": "河南省濮阳市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "河南省许昌市中级人民法院",
                    "value": "河南省许昌市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "河南省漯河市中级人民法院",
                    "value": "河南省漯河市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "河南省三门峡市中级人民法院",
                    "value": "河南省三门峡市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "河南省商丘市中级人民法院",
                    "value": "河南省商丘市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "河南省周口市中级人民法院",
                    "value": "河南省周口市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "河南省驻马店市中级人民法院",
                    "value": "河南省驻马店市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "河南省南阳市中级人民法院",
                    "value": "河南省南阳市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "河南省信阳市中级人民法院",
                    "value": "河南省信阳市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "郑州铁路运输中级法院",
                    "value": "郑州铁路运输中级法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "河南省济源中级人民法院",
                    "value": "河南省济源中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
            ]
        },
        {
            "label": "湖北省高级人民法院",
            "value": "湖北省高级人民法院",
            "children": [
                { "label": "", "value": "" },
                {
                    "label": "湖北省武汉市中级人民法院",
                    "value": "湖北省武汉市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "湖北省黄石市中级人民法院",
                    "value": "湖北省黄石市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "湖北省十堰市中级人民法院",
                    "value": "湖北省十堰市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "湖北省荆州市中级人民法院",
                    "value": "湖北省荆州市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "湖北省宜昌市中级人民法院",
                    "value": "湖北省宜昌市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "湖北省襄阳市中级人民法院",
                    "value": "湖北省襄阳市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "湖北省鄂州市中级人民法院",
                    "value": "湖北省鄂州市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "湖北省荆门市中级人民法院",
                    "value": "湖北省荆门市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "湖北省黄冈市中级人民法院",
                    "value": "湖北省黄冈市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "湖北省孝感市中级人民法院",
                    "value": "湖北省孝感市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "湖北省咸宁市中级人民法院",
                    "value": "湖北省咸宁市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "湖北省恩施土家族苗族自治州中级人民法院",
                    "value": "湖北省恩施土家族苗族自治州中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "湖北省汉江中级人民法院",
                    "value": "湖北省汉江中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "湖北省随州市中级人民法院",
                    "value": "湖北省随州市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "武汉海事法院",
                    "value": "武汉海事法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "武汉铁路运输中级法院",
                    "value": "武汉铁路运输中级法院",
                    "children": [{ "label": "", "value": "" }],
                },
            ]
        },
        {
            "label": "湖南省高级人民法院",
            "value": "湖南省高级人民法院",
            "children": [
                { "label": "", "value": "" },
                {
                    "label": "湖南省长沙市中级人民法院",
                    "value": "湖南省长沙市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "湖南省株洲市中级人民法院",
                    "value": "湖南省株洲市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "湖南省湘潭市中级人民法院",
                    "value": "湖南省湘潭市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "湖南省衡阳市中级人民法院",
                    "value": "湖南省衡阳市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "湖南省邵阳市中级人民法院",
                    "value": "湖南省邵阳市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "湖南省岳阳市中级人民法院",
                    "value": "湖南省岳阳市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "湖南省常德市中级人民法院",
                    "value": "湖南省常德市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "湖南省张家界市中级人民法院",
                    "value": "湖南省张家界市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "湖南省益阳市中级人民法院",
                    "value": "湖南省益阳市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "湖南省娄底市中级人民法院",
                    "value": "湖南省娄底市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "湖南省郴州市中级人民法院",
                    "value": "湖南省郴州市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "湖南省永州市中级人民法院",
                    "value": "湖南省永州市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "湖南省怀化市中级人民法院",
                    "value": "湖南省怀化市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "湖南省湘西土家族苗族自治州中级人民法院",
                    "value": "湖南省湘西土家族苗族自治州中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "长沙铁路运输法院",
                    "value": "长沙铁路运输法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "衡阳铁路运输法院",
                    "value": "衡阳铁路运输法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "怀化铁路运输法院",
                    "value": "怀化铁路运输法院",
                    "children": [{ "label": "", "value": "" }],
                },
            ]
        },
        {
            "label": "广东省高级人民法院",
            "value": "广东省高级人民法院",
            "children": [
                { "label": "", "value": "" },
                {
                    "label": "广东省广州市中级人民法院",
                    "value": "广东省广州市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "广东省韶关市中级人民法院",
                    "value": "广东省韶关市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "广东省深圳市中级人民法院",
                    "value": "广东省深圳市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "广东省珠海市中级人民法院",
                    "value": "广东省珠海市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "广东省汕头市中级人民法院",
                    "value": "广东省汕头市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "广东省佛山市中级人民法院",
                    "value": "广东省佛山市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "广东省江门市中级人民法院",
                    "value": "广东省江门市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "广东省湛江市中级人民法院",
                    "value": "广东省湛江市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "广东省茂名市中级人民法院",
                    "value": "广东省茂名市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "广东省中山市中级人民法院",
                    "value": "广东省中山市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "广东省东莞市中级人民法院",
                    "value": "广东省东莞市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "广东省梅州市中级人民法院",
                    "value": "广东省梅州市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "广东省惠州市中级人民法院",
                    "value": "广东省惠州市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "广东省肇庆市中级人民法院",
                    "value": "广东省肇庆市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "广东省汕尾市中级人民法院",
                    "value": "广东省汕尾市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "广东省河源市中级人民法院",
                    "value": "广东省河源市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "广东省阳江市中级人民法院",
                    "value": "广东省阳江市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "广东省清远市中级人民法院",
                    "value": "广东省清远市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "广东省潮州市中级人民法院",
                    "value": "广东省潮州市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "广东省揭阳市中级人民法院",
                    "value": "广东省揭阳市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "广州铁路运输中级法院",
                    "value": "广州铁路运输中级法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "广州海事法院",
                    "value": "广州海事法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "广东省云浮市中级人民法院",
                    "value": "广东省云浮市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "广州知识产权法院",
                    "value": "广州知识产权法院",
                    "children": [{ "label": "", "value": "" }],
                },
            ]
        },
        {
            "label": "广西壮族自治区高级人民法院",
            "value": "广西壮族自治区高级人民法院",
            "children": [
                { "label": "", "value": "" },
                {
                    "label": "广西壮族自治区南宁市中级人民法院",
                    "value": "广西壮族自治区南宁市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "广西壮族自治区柳州市中级人民法院",
                    "value": "广西壮族自治区柳州市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "广西壮族自治区桂林市中级人民法院",
                    "value": "广西壮族自治区桂林市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "广西壮族自治区梧州市中级人民法院",
                    "value": "广西壮族自治区梧州市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "广西壮族自治区北海市中级人民法院",
                    "value": "广西壮族自治区北海市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "广西壮族自治区崇左市中级人民法院",
                    "value": "广西壮族自治区崇左市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "广西壮族自治区来宾市中级人民法院",
                    "value": "广西壮族自治区来宾市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "广西壮族自治区贺州市中级人民法院",
                    "value": "广西壮族自治区贺州市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "广西壮族自治区玉林市中级人民法院",
                    "value": "广西壮族自治区玉林市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "广西壮族自治区百色市中级人民法院",
                    "value": "广西壮族自治区百色市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "广西壮族自治区河池市中级人民法院",
                    "value": "广西壮族自治区河池市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "广西壮族自治区钦州市中级人民法院",
                    "value": "广西壮族自治区钦州市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "南宁铁路运输中级法院",
                    "value": "南宁铁路运输中级法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "广西壮族自治区防城港市中级人民法院",
                    "value": "广西壮族自治区防城港市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "广西壮族自治区贵港市中级人民法院",
                    "value": "广西壮族自治区贵港市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "北海海事法院",
                    "value": "北海海事法院",
                    "children": [{ "label": "", "value": "" }],
                },
            ]
        },
        {
            "label": "海南省高级人民法院",
            "value": "海南省高级人民法院",
            "children": [
                { "label": "", "value": "" },
                {
                    "label": "海南省海口市中级人民法院",
                    "value": "海南省海口市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "海南省三亚市中级人民法院",
                    "value": "海南省三亚市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "海南省第一中级人民法院",
                    "value": "海南省第一中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "海口海事法院",
                    "value": "海口海事法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "海南省第二中级人民法院",
                    "value": "海南省第二中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "海南省三沙市中级人民法院",
                    "value": "海南省三沙市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
            ]
        },
        {
            "label": "重庆市高级人民法院",
            "value": "重庆市高级人民法院",
            "children": [
                { "label": "", "value": "" },
                {
                    "label": "重庆市第一中级人民法院",
                    "value": "重庆市第一中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "重庆市第二中级人民法院",
                    "value": "重庆市第二中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "重庆市第三中级人民法院",
                    "value": "重庆市第三中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "重庆市第四中级人民法院",
                    "value": "重庆市第四中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "重庆市第五中级人民法院",
                    "value": "重庆市第五中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
            ]
        },
        {
            "label": "四川省高级人民法院",
            "value": "四川省高级人民法院",
            "children": [
                { "label": "", "value": "" },
                {
                    "label": "四川省成都市中级人民法院",
                    "value": "四川省成都市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "四川省自贡市中级人民法院",
                    "value": "四川省自贡市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "四川省攀枝花市中级人民法院",
                    "value": "四川省攀枝花市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "四川省泸州市中级人民法院",
                    "value": "四川省泸州市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "四川省德阳市中级人民法院",
                    "value": "四川省德阳市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "四川省绵阳市中级人民法院",
                    "value": "四川省绵阳市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "四川省广元市中级人民法院",
                    "value": "四川省广元市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "四川省遂宁市中级人民法院",
                    "value": "四川省遂宁市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "四川省内江市中级人民法院",
                    "value": "四川省内江市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "四川省宜宾市中级人民法院",
                    "value": "四川省宜宾市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "四川省南充市中级人民法院",
                    "value": "四川省南充市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "四川省达州市中级人民法院",
                    "value": "四川省达州市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "四川省雅安市中级人民法院",
                    "value": "四川省雅安市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "四川省阿坝藏族羌族自治州中级人民法院",
                    "value": "四川省阿坝藏族羌族自治州中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "四川省甘孜藏族自治州中级人民法院",
                    "value": "四川省甘孜藏族自治州中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "四川省凉山彝族自治州中级人民法院",
                    "value": "四川省凉山彝族自治州中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "成都铁路运输中级法院",
                    "value": "成都铁路运输中级法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "四川省广安市中级人民法院",
                    "value": "四川省广安市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "四川省巴中市中级人民法院",
                    "value": "四川省巴中市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "四川省眉山市中级人民法院",
                    "value": "四川省眉山市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "四川省资阳市中级人民法院",
                    "value": "四川省资阳市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
            ]
        },
        {
            "label": "贵州省高级人民法院",
            "value": "贵州省高级人民法院",
            "children": [
                { "label": "", "value": "" },
                {
                    "label": "贵州省贵阳市中级人民法院",
                    "value": "贵州省贵阳市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "贵州省六盘水市中级人民法院",
                    "value": "贵州省六盘水市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "贵州省遵义市中级人民法院",
                    "value": "贵州省遵义市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "贵州省铜仁市中级人民法院",
                    "value": "贵州省铜仁市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "贵州省黔西南布依族苗族自治州中级人民法院",
                    "value": "贵州省黔西南布依族苗族自治州中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "贵州省毕节市中级人民法院",
                    "value": "贵州省毕节市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "贵州省安顺市中级人民法院",
                    "value": "贵州省安顺市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "贵州省黔东南苗族侗族自治州中级人民法院",
                    "value": "贵州省黔东南苗族侗族自治州中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "贵州省黔南布依族苗族自治州中级人民法院",
                    "value": "贵州省黔南布依族苗族自治州中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
            ]
        },
        {
            "label": "云南省高级人民法院",
            "value": "云南省高级人民法院",
            "children": [
                { "label": "", "value": "" },
                {
                    "label": "云南省昆明市中级人民法院",
                    "value": "云南省昆明市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "云南省昭通市中级人民法院",
                    "value": "云南省昭通市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "云南省曲靖市中级人民法院",
                    "value": "云南省曲靖市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "云南省玉溪市中级人民法院",
                    "value": "云南省玉溪市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "云南省普洱市中级人民法院",
                    "value": "云南省普洱市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "云南省保山市中级人民法院",
                    "value": "云南省保山市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "云南省丽江市中级人民法院",
                    "value": "云南省丽江市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "云南省临沧市中级人民法院",
                    "value": "云南省临沧市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "云南省楚雄彝族自治州中级人民法院",
                    "value": "云南省楚雄彝族自治州中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "云南省红河哈尼族彝族自治州中级人民法院",
                    "value": "云南省红河哈尼族彝族自治州中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "云南省文山壮族苗族自治州中级人民法院",
                    "value": "云南省文山壮族苗族自治州中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "云南省西双版纳傣族自治州中级人民法院",
                    "value": "云南省西双版纳傣族自治州中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "云南省大理白族自治州中级人民法院",
                    "value": "云南省大理白族自治州中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "云南省德宏傣族景颇族自治州中级人民法院",
                    "value": "云南省德宏傣族景颇族自治州中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "云南省怒江傈僳族自治州中级人民法院",
                    "value": "云南省怒江傈僳族自治州中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "云南省迪庆藏族自治州中级人民法院",
                    "value": "云南省迪庆藏族自治州中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "昆明铁路运输中级法院",
                    "value": "昆明铁路运输中级法院",
                    "children": [{ "label": "", "value": "" }],
                },
            ]
        },
        {
            "label": "西藏自治区高级人民法院",
            "value": "西藏自治区高级人民法院",
            "children": [
                { "label": "", "value": "" },
                {
                    "label": "西藏自治区拉萨市中级人民法院",
                    "value": "西藏自治区拉萨市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "西藏自治区昌都市中级人民法院",
                    "value": "西藏自治区昌都市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "西藏自治区山南市中级人民法院",
                    "value": "西藏自治区山南市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "西藏自治区日喀则市中级人民法院",
                    "value": "西藏自治区日喀则市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "西藏自治区那曲市中级人民法院",
                    "value": "西藏自治区那曲市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "西藏自治区阿里地区中级人民法院",
                    "value": "西藏自治区阿里地区中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "西藏自治区林芝市中级人民法院",
                    "value": "西藏自治区林芝市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
            ]
        },
        {
            "label": "陕西省高级人民法院",
            "value": "陕西省高级人民法院",
            "children": [
                { "label": "", "value": "" },
                {
                    "label": "陕西省西安市中级人民法院",
                    "value": "陕西省西安市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "陕西省铜川市中级人民法院",
                    "value": "陕西省铜川市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "陕西省宝鸡市中级人民法院",
                    "value": "陕西省宝鸡市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "陕西省咸阳市中级人民法院",
                    "value": "陕西省咸阳市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "陕西省渭南市中级人民法院",
                    "value": "陕西省渭南市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "陕西省汉中市中级人民法院",
                    "value": "陕西省汉中市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "陕西省安康市中级人民法院",
                    "value": "陕西省安康市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "陕西省商洛市中级人民法院",
                    "value": "陕西省商洛市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "陕西省延安市中级人民法院",
                    "value": "陕西省延安市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "陕西省榆林市中级人民法院",
                    "value": "陕西省榆林市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "西安铁路运输中级法院",
                    "value": "西安铁路运输中级法院",
                    "children": [{ "label": "", "value": "" }],
                },
            ]
        },
        {
            "label": "甘肃省高级人民法院",
            "value": "甘肃省高级人民法院",
            "children": [
                { "label": "", "value": "" },
                {
                    "label": "甘肃省兰州市中级人民法院",
                    "value": "甘肃省兰州市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "甘肃省嘉峪关市中级人民法院",
                    "value": "甘肃省嘉峪关市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "甘肃省金昌市中级人民法院",
                    "value": "甘肃省金昌市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "甘肃省白银市中级人民法院",
                    "value": "甘肃省白银市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "甘肃省天水市中级人民法院",
                    "value": "甘肃省天水市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "甘肃省酒泉市中级人民法院",
                    "value": "甘肃省酒泉市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "甘肃省张掖市中级人民法院",
                    "value": "甘肃省张掖市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "甘肃省武威市中级人民法院",
                    "value": "甘肃省武威市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "甘肃省定西市中级人民法院",
                    "value": "甘肃省定西市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "甘肃省陇南市中级人民法院",
                    "value": "甘肃省陇南市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "甘肃省平凉市中级人民法院",
                    "value": "甘肃省平凉市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "甘肃省庆阳市中级人民法院",
                    "value": "甘肃省庆阳市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "甘肃省临夏回族自治州中级人民法院",
                    "value": "甘肃省临夏回族自治州中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "甘肃省甘南藏族自治州中级人民法院",
                    "value": "甘肃省甘南藏族自治州中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "甘肃矿区人民法院",
                    "value": "甘肃矿区人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "甘肃省林区中级法院",
                    "value": "甘肃省林区中级法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "兰州铁路运输中级法院",
                    "value": "兰州铁路运输中级法院",
                    "children": [{ "label": "", "value": "" }],
                },
            ]
        },
        {
            "label": "青海省高级人民法院",
            "value": "青海省高级人民法院",
            "children": [
                { "label": "", "value": "" },
                {
                    "label": "青海省西宁市中级人民法院",
                    "value": "青海省西宁市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "青海省海东市中级人民法院",
                    "value": "青海省海东市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "青海省海北藏族自治州中级人民法院",
                    "value": "青海省海北藏族自治州中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "青海省黄南藏族自治州中级人民法院",
                    "value": "青海省黄南藏族自治州中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "青海省海南藏族自治州中级人民法院",
                    "value": "青海省海南藏族自治州中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "青海省果洛藏族自治州中级人民法院",
                    "value": "青海省果洛藏族自治州中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "青海省玉树藏族自治州中级人民法院",
                    "value": "青海省玉树藏族自治州中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "青海省海西蒙古族藏族自治州中级人民法院",
                    "value": "青海省海西蒙古族藏族自治州中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "西宁铁路运输法院",
                    "value": "西宁铁路运输法院",
                    "children": [{ "label": "", "value": "" }],
                },
            ]
        },
        {
            "label": "宁夏回族自治区高级人民法院",
            "value": "宁夏回族自治区高级人民法院",
            "children": [
                { "label": "", "value": "" },
                {
                    "label": "宁夏回族自治区银川市中级人民法院",
                    "value": "宁夏回族自治区银川市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "宁夏回族自治区石嘴山市中级人民法院",
                    "value": "宁夏回族自治区石嘴山市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "宁夏回族自治区吴忠市中级人民法院",
                    "value": "宁夏回族自治区吴忠市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "宁夏回族自治区固原市中级人民法院",
                    "value": "宁夏回族自治区固原市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "宁夏回族自治区中卫市中级人民法院",
                    "value": "宁夏回族自治区中卫市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "银川铁路运输法院",
                    "value": "银川铁路运输法院",
                    "children": [{ "label": "", "value": "" }],
                },
            ]
        },
        {
            "label": "新疆维吾尔自治区高级人民法院",
            "value": "新疆维吾尔自治区高级人民法院",
            "children": [
                { "label": "", "value": "" },
                {
                    "label": "新疆维吾尔自治区乌鲁木齐市中级人民法院",
                    "value": "新疆维吾尔自治区乌鲁木齐市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "新疆维吾尔自治区克拉玛依市中级人民法院",
                    "value": "新疆维吾尔自治区克拉玛依市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "新疆维吾尔自治区吐鲁番市中级人民法院",
                    "value": "新疆维吾尔自治区吐鲁番市中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "新疆维吾尔自治区哈密地区中级人民法院",
                    "value": "新疆维吾尔自治区哈密地区中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "新疆维吾尔自治区昌吉回族自治州中级人民法院",
                    "value": "新疆维吾尔自治区昌吉回族自治州中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "新疆维吾尔自治区博尔塔拉蒙古自治州中级人民法院",
                    "value": "新疆维吾尔自治区博尔塔拉蒙古自治州中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "新疆维吾尔自治区巴音郭楞蒙古自治州中级人民法院",
                    "value": "新疆维吾尔自治区巴音郭楞蒙古自治州中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "新疆维吾尔自治区阿克苏地区中级人民法院",
                    "value": "新疆维吾尔自治区阿克苏地区中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "新疆维吾尔自治区克孜勒苏柯尔克孜自治州中级人民法院",
                    "value": "新疆维吾尔自治区克孜勒苏柯尔克孜自治州中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "新疆维吾尔自治区喀什地区中级人民法院",
                    "value": "新疆维吾尔自治区喀什地区中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "新疆维吾尔自治区和田地区中级人民法院",
                    "value": "新疆维吾尔自治区和田地区中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "新疆维吾尔自治区高级人民法院伊犁哈萨克自治州分院",
                    "value": "新疆维吾尔自治区高级人民法院伊犁哈萨克自治州分院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "新疆维吾尔自治区伊犁哈萨克自治州塔城地区中级人民法院",
                    "value": "新疆维吾尔自治区伊犁哈萨克自治州塔城地区中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "新疆维吾尔自治区伊犁哈萨克自治州阿勒泰地区中级人民法院",
                    "value": "新疆维吾尔自治区伊犁哈萨克自治州阿勒泰地区中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "乌鲁木齐铁路运输中级法院",
                    "value": "乌鲁木齐铁路运输中级法院",
                    "children": [{ "label": "", "value": "" }],
                },
            ]
        },
        {
            "label": "新疆维吾尔自治区高级人民法院生产建设兵团分院",
            "value": "新疆维吾尔自治区高级人民法院生产建设兵团分院",
            "children": [
                { "label": "", "value": "" },
                {
                    "label": "新疆生产建设兵团第一师中级人民法院",
                    "value": "新疆生产建设兵团第一师中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "新疆生产建设兵团第二师中级人民法院",
                    "value": "新疆生产建设兵团第二师中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "新疆生产建设兵团第三师中级人民法院",
                    "value": "新疆生产建设兵团第三师中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "新疆生产建设兵团第四师中级人民法院",
                    "value": "新疆生产建设兵团第四师中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "新疆生产建设兵团第五师中级人民法院",
                    "value": "新疆生产建设兵团第五师中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "新疆生产建设兵团第六师中级人民法院",
                    "value": "新疆生产建设兵团第六师中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "新疆生产建设兵团第七师中级人民法院",
                    "value": "新疆生产建设兵团第七师中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "新疆生产建设兵团第八师中级人民法院",
                    "value": "新疆生产建设兵团第八师中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "新疆生产建设兵团第九师中级人民法院",
                    "value": "新疆生产建设兵团第九师中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "新疆生产建设兵团第十师中级人民法院",
                    "value": "新疆生产建设兵团第十师中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "新疆生产建设兵团第十二师中级人民法院",
                    "value": "新疆生产建设兵团第十二师中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "新疆生产建设兵团第十三师中级人民法院",
                    "value": "新疆生产建设兵团第十三师中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
                {
                    "label": "新疆生产建设兵团第十四师中级人民法院",
                    "value": "新疆生产建设兵团第十四师中级人民法院",
                    "children": [{ "label": "", "value": "" }],
                },
            ]
        },
    ];
};

/**
 * @description 诉讼案件明细默认配置
 */
export const columns = {
    reward: {
        items: [{
                title: '分配性质',
                dataIndex: 'type',
                key: 'type',
                scopedSlots: { customRender: 'name' },
            },
            {
                title: '发放期间',
                dataIndex: 'period',
                key: 'period',
            },
            {
                title: '员工姓名',
                dataIndex: 'username',
                key: 'username',
                ellipsis: true,
            },
            {
                title: '员工OA',
                dataIndex: 'account',
                key: 'account',
                ellipsis: true,
            },
            {
                title: '所属单位',
                dataIndex: 'company',
                key: 'company',
                ellipsis: true,
            },
            {
                title: '所属部门',
                dataIndex: 'department',
                key: 'department',
                ellipsis: true,
            },
            {
                title: '员工职务',
                dataIndex: 'position',
                key: 'position',
                ellipsis: true,
            },
            {
                title: '分配金额',
                dataIndex: 'amount',
                key: 'amount',
                ellipsis: true,
            },
        ],
        wfcolumns: [{
            title: '流程顺序',
            dataIndex: 'key',
            key: 'key',
            ellipsis: true,
        }, {
            title: '审批人员',
            dataIndex: 'username',
            key: 'username',
            ellipsis: true,
        }, {
            title: '审批账户',
            dataIndex: 'userid',
            key: 'userid',
            ellipsis: true,
        }, {
            title: '所属单位',
            dataIndex: 'company',
            key: 'company',
            ellipsis: true,
        }, {
            title: '所属部门',
            dataIndex: 'department',
            key: 'department',
            ellipsis: true,
        }, {
            title: '审批职务',
            dataIndex: 'position',
            key: 'position',
            ellipsis: true,
        }, {
            title: '联系电话',
            dataIndex: 'mobile',
            key: 'mobile',
            ellipsis: true,
        }, ],
    }
}

/**
 * @description 领用物品说明
 */
export const objects = {
    officeObjects: [
        '笔记本',
        '签字笔（黑）',
        '签字笔（红）',
        '订书机',
        '订书针',
        '回形针',
        'U盘',
        '笔筒',
        '便利贴',
        '标签贴',
        '彩色便签',
        '鼠标（有线）',
        '鼠标垫',
        '鼠标（无线）',
        '插板',
        '电池（5号）',
        '电池（7号）',
        '剪刀',
        '胶棒',
        '胶水',
        '透明文件袋',
        '美工刀',
        '燕尾夹（大号）',
        '燕尾夹（中号）',
        '燕尾夹（小号）',
        '抽杆文件夹',
        '牛皮档案袋',
        '牛皮档案盒',
        '塑料档案盒',
        '双面胶',
        '透明胶带',
        '橡皮擦',
        '铅笔',
        '荧光笔',
        '文件夹',
        '资料册',
        '文件架',
        '文件盘',
        '印泥',
        '起钉器',
        '名片夹',
        '派通笔',
        '中性笔',
        '名片盒',
        '计算器',
        '圆珠笔（黑）',
        '圆珠笔（红）',
        '彩色卡纸',
    ],
    drugObjects: [
        '感冒灵(999)',
        '板蓝根',
        '创口贴',
        '碘伏',
        '阿莫西林',
        '和香正气',
        '金嗓子',
        '元和正胃片',
        '蒙脱石散',
        '感康',
        '散列通',
        '棉签纱布',
    ],
};



/**
 * @description 暴露查询API接口
 */
export const queryAPI = {
    autoSerialAPI: 'https://api.yunwisdom.club:30443/api/v2/mysql/serial/bs_seal_regist/serialid/id',
    tableSerialAPI: 'https://api.yunwisdom.club:30443/api/v2/mysql/serial/{table_name}/serialid/id',
    patchSerialAPI: 'https://api.yunwisdom.club:30443/api/v2/mysql/patchserial/bs_seal_regist/serialid/id',
}

/**
 * @description 表单验证说明
 */
export const compValidation = {
    seal: {
        message: {
            filename: '',
            count: '',
            dealDepart: '',
            dealManager: '',
            dealMail: '',
            signman: '',
            workno: '',
            sealtype: '',
            ordertype: '',
            approveType: '',
            mobile: '',
            username: '',
            contractId: '',
            sealman: '',
            front: '',
            archive: '',
            prefix: '',
            meal_account: '',
            message: '',
            company: '',
            finance: '',
            record: '',
        },
        valid: {
            filename: '请输入文件名称！',
            count: '请输入文件份数！',
            dealDepart: '请输入经办部门！',
            dealManager: '请输入经办人!',
            dealMail: '请输入经办人邮箱!',
            signman: '请输入签收人！',
            workno: '请输入流程编号！',
            sealtype: '请选择用印类型！',
            ordertype: '请选择用印顺序！',
            approveType: '请输入审批类型！',
            mobile: '请输入经办人电话!',
            username: '请输入经办人的OA账号!',
            contractId: '请输入合同编号！',
            sealman: '请输入印章管理员(盖印人)！',
            front: '请输入前台人员名称！',
            archive: '请输入归档人员名称！',
            prefix: '请输入合同对应的编号前缀！',
            meal_account: '请输入新员工的食堂账户！',
            message: '请印章管理员输入用印意见或备注说明！',
            company: '请输入用印公司名称！',
            finance: '请输入财务归档人员！',
            record: '请输入档案归档人员！',
        },
    },
    entryjob: {
        message: {
            username: '',
            department: '', //入职岗位
            position: '', //入职岗位
            picture: '', //员工照片
            computer: '', //是否需要电脑配置
            seat: '', //是否需要办公座椅
            drawer: '', //是否需要办公抽屉drawer
            other_equip: '', //是否需要其他办公配置
            notebook: '', //是否需要笔记本子
            manual: '', //是否需要入职手册
            writingtools: '', //是否需要签字笔/擦
            badge: '', //员工工牌
            othertools: '', //其他用品
            driving_license: '', //行驶证
            driver_license: '', //驾驶证
            idcard: '', //身份证号
            diploma: '', //学历编号
            bachelor: '', //学位编号
            join_time: '', //入职时间
            hr_name: '', //对接HR
            bank_card: '',
            mobile: '',
            meal_account: '',
        },
        valid: {
            username: '请输入您的员工姓名！',
            department: '请输入您的入职部门！', //入职部门
            position: '请输入您的入职岗位！', //入职岗位
            picture: '请上传您的一寸照片！', //员工照片
            computer: '请选择是否需要电脑配置！', //是否需要电脑配置
            seat: '请选择是否需要办公座椅！', //是否需要办公座椅
            drawer: '请选择是否是否需要办公抽屉！', //是否需要办公抽屉drawer
            other_equip: '如果您有其他的办公配置要求，请填写在此处！', //是否需要其他办公配置
            notebook: '请选择是否需要笔记/记事本等！', //是否需要笔记本子
            manual: '请选择是否需要入职手册！', //是否需要入职手册
            writingtools: '请选择是否需要签字笔/擦！', //是否需要签字笔/擦
            badge: '请选择是否需要制作员工工牌！', //员工工牌
            othertools: '请输入您的其他办公用品需求！', //其他用品
            driving_license: '请输入您的行驶证编号！', //行驶证
            driver_license: '请输入您的驾驶证编号！', //驾驶证
            idcard: '请输入您的身份证编号！', //身份证号
            diploma: '请输入您的学历证件编号！', //学历编号
            bachelor: '请输入您的学位证件编号！', //学位编号
            join_time: '请选择您的入职时间！', //入职时间
            hr_name: '请选择您的对接HR姓名！', //对接HR
            bank_card: '请输入您的工资银行卡号！', //
            mobile: '请输入您的电话号码！', //
            meal_account: '请输入新员工的食堂账户！', //
        },
    },
    goodsreceive: {
        message: {
            create_time: '',
            create_by: '',
            receive_time: '', //领用时间
            user_admin_name: '',
            name: '', //领用物品名称
            amount: '', //领用数量
            receive_name: '', //领用人员名称
            department: '', //领用部门名称
            remark: '', //备注说明
            type: '', //领用类别
            company: '', //单位名称
        },
        valid: {
            create_time: '请输入登记时间！',
            create_by: '请输入登记人员！',
            receive_time: '请输入领用时间！', //领用时间
            user_admin_name: '请输入物品领用管理员！',
            name: '请输入领用物品名称！', //领用物品名称
            amount: '请输入领用物品数量及单位！', //领用数量
            receive_name: '请输入领用人员姓名！', //领用人员名称
            department: '请输入领用人员所属部门！', //领用部门名称
            remark: '请输入领用备注说明！', //备注说明
            type: '请输入领用类别！', //领用类别
            company: '请输入领用人员所属单位/公司名称！', //单位名称
        }
    },
    borrowreceive: {
        message: {
            create_time: '',
            create_by: '',
            receive_time: '', //领用时间
            user_admin_name: '',
            name: '', //领用物品名称
            amount: '', //领用数量
            receive_name: '', //领用人员名称
            department: '', //领用部门名称
            remark: '', //备注说明
            type: '', //领用类别
            company: '', //单位名称
        },
        valid: {
            create_time: '请输入登记时间！',
            create_by: '请输入登记人员！',
            receive_time: '请输入物品借用时间！', //领用时间
            user_admin_name: '请输入物品借用管理员！',
            name: '请输入借用物品/设备名称！', //领用物品名称
            amount: '请输入借用物品/设备数量及单位！', //领用数量
            receive_name: '请输入借用人员姓名！', //领用人员名称
            department: '请输入借用人员所属部门！', //领用部门名称
            remark: '请输入物品借用备注说明！', //备注说明
            type: '请输入物品借用类别！', //领用类别
            company: '请输入借用人员所属单位/公司名称！', //单位名称
        }
    },
    lostproperty: {
        message: {
            lost_name: '', //领用物品名称
            lost_amount: '', //领用数量
            user_admin_name: '',
        },
        valid: {
            lost_name: '请输入物品名称！', //领用物品名称
            lost_amount: '请输入物品数量及单位！', //领用数量
            user_admin_name: '请输入失物招领处的物品管理员姓名！',
        }
    },
    visitorapply: {
        message: {
            time: '',
            visitor_name: '',
            visitor_company: '',
            visitor_mobile: '',
            visitor_position: '',
            visitor_name1: '',
            visitor_mobile1: '',
            visitor_name2: '',
            visitor_mobile2: '',
            visitor_name3: '',
            visitor_mobile3: '',
            visitor_name4: '',
            visitor_mobile4: '',
            visitor_name5: '',
            visitor_mobile5: '',
            visitor_name6: '',
            visitor_mobile6: '',
            visitor_name7: '',
            visitor_mobile7: '',
            visitor_name8: '',
            visitor_mobile8: '',
            visitor_name9: '',
            visitor_mobile9: '',
            visitor_name10: '',
            visitor_mobile10: '',
            visitor_name11: '',
            visitor_mobile11: '',
            visitor_name12: '',
            visitor_mobile12: '',
            visitor_name13: '',
            visitor_mobile13: '',
            visitor_name14: '',
            visitor_mobile14: '',
            visitor_name15: '',
            visitor_mobile15: '',
            visitor_name16: '',
            visitor_mobile16: '',
            visitor_name17: '',
            visitor_mobile17: '',
            visitor_name18: '',
            visitor_mobile18: '',
            visitor_name19: '',
            visitor_mobile19: '',
            visitor_name20: '',
            visitor_mobile20: '',
            employee: '',
            mobile: '',
            position: '',
            user_admin_name: '',
        },
        valid: {
            time: '请输入预约时间！',
            visitor_name: '请输入访客姓名！',
            visitor_company: '请输入访客单位名称！',
            visitor_mobile: '请输入访客电话！',
            visitor_position: '请输入访客职务！',
            visitor_name1: '请输入访客姓名！',
            visitor_mobile1: '请输入访客电话！',
            visitor_name2: '请输入访客姓名！',
            visitor_mobile2: '请输入访客电话！',
            visitor_name3: '请输入访客姓名！',
            visitor_mobile3: '请输入访客电话！',
            visitor_name4: '请输入访客姓名！',
            visitor_mobile4: '请输入访客电话！',
            visitor_name5: '请输入访客姓名！',
            visitor_mobile5: '请输入访客电话！',
            visitor_name6: '请输入访客姓名！',
            visitor_mobile6: '请输入访客电话！',
            visitor_name7: '请输入访客姓名！',
            visitor_mobile7: '请输入访客电话！',
            visitor_name8: '请输入访客姓名！',
            visitor_mobile8: '请输入访客电话！',
            visitor_name9: '请输入访客姓名！',
            visitor_mobile9: '请输入访客电话！',
            visitor_name10: '请输入访客姓名！',
            visitor_mobile10: '请输入访客电话！',
            visitor_name11: '请输入访客姓名！',
            visitor_mobile11: '请输入访客电话！',
            visitor_name12: '请输入访客姓名！',
            visitor_mobile12: '请输入访客电话！',
            visitor_name13: '请输入访客姓名！',
            visitor_mobile13: '请输入访客电话！',
            visitor_name14: '请输入访客姓名！',
            visitor_mobile14: '请输入访客电话！',
            visitor_name15: '请输入访客姓名！',
            visitor_mobile15: '请输入访客电话！',
            visitor_name16: '请输入访客姓名！',
            visitor_mobile16: '请输入访客电话！',
            visitor_name17: '请输入访客姓名！',
            visitor_mobile17: '请输入访客电话！',
            visitor_name18: '请输入访客姓名！',
            visitor_mobile18: '请输入访客电话！',
            visitor_name19: '请输入访客姓名！',
            visitor_mobile19: '请输入访客电话！',
            visitor_name20: '请输入访客姓名！',
            visitor_mobile20: '请输入访客电话！',
            employee: '请输入填报人姓名！',
            mobile: '请输入填报人电话！',
            position: '请输入填报人职务！',
            user_admin_name: '请输入客服接待！',
        },
    },
    legalapply: {
        message: {
            title: '',
            company: '',
            department: '',
            content: '',
            remark: '', //备注
            amount: '',
            reward_type: '',
            reward_name: '',
            reward_period: '',
            hr_name: '',
            files: '',
            apply_realname: '',
        },
        valid: {
            title: '请输入案件审批的标题！',
            company: '请输入申请人员的所在公司！',
            department: '请输入申请人员的所在部门！',
            content: '请输入案件审批流程的申请事由！',
            remark: '请输入备注信息！', //备注
            amount: '请输入本次案件审批的单项奖金总额！',
            reward_type: '请输入诉讼案件类型！',
            reward_name: '请输入诉讼案件名称！',
            reward_period: '请输入诉讼案件所属周期！',
            hr_name: '请输入负责薪资管理的人力经理！',
            files: '请上传诉讼案件明细的Excel文档！',
            apply_realname: '请输入申请人姓名！',
        }
    },
    firmapply: {
        message: {
            title: '',
            create_by: '',
            in_zone: '',
            firm_name: '',
            in_time: '',
            tags: '',
            plate: '',
            establish_time: '',
            address: '',
            phone: '',
            scale: '',
            brief: '',
            firm_count: '',
            team_brief: '',
            fee: '',
            major_fee: '',
            common_fee: '',
            diligence_fee: '',
            notice_fee: '',
            penal_fee: '',
            coop_flag: '',
            out_flag: '',
        },
        valid: {
            title: '请输入流程标题！',
            create_by: '请输入填报人员！',
            in_zone: '请输入所属区域！',
            firm_name: '请输入律所名称！',
            in_time: '请选择入库时间！',
            tags: '请选择律所业务标签！',
            plate: '请选择律所业务板块！',
            establish_time: '请输入成立日期！',
            address: '请输入律所所在地址！',
            phone: '请输入律所联系电话！',
            scale: '请选择律所规模大小！',
            brief: '请输入律所简介！',
            firm_count: '请输入律所服务团队人数！',
            team_brief: '请输入律所服务团队简介！',
            fee: '请输入律所常务法律费用！',
            major_fee: '请输入律所重大诉讼费用！',
            common_fee: '请输入律所一般诉讼费用！',
            diligence_fee: '请输入律所尽调专项费用！',
            notice_fee: '',
            penal_fee: '',
            coop_flag: '',
            out_flag: '',
        }
    }
}

/**
 * @param {*} 普通用户 (扫码用户)
 */
export const commonUserInfo = { username: 'common', realname: '', main_department: '', department: { name: '' }, parent_company: { name: '' }, };

/**
 * @description 左侧菜单列表
 */
export function getPaneflows(that) {
    return [{
            id: 100,
            name: "我的知会",
            ename: "myrewardlist",
            avatar: `//cdn.jsdelivr.net/gh/Miazzy/xdata-stock-service@v1.0.5/src/assets/img/liebiao_jy.png`,
            href: "/account/myrewardlist",
            description: "查看我的案件审批知会流程",
            show: true,
            css: "",
            all: '全部',
            periodTabsFlag: false,
            tabs: ['全部', '待审批', '审批中', '已完成', '已驳回'],
            dataSource: [],
            click: () => {
                that.panename = 'myrewardlist';
            },
        }, {
            id: 200,
            name: "我的待办",
            ename: "mytodolist",
            avatar: `//cdn.jsdelivr.net/gh/Miazzy/yunwisdom_cdn@v1.0.0/images/time_00.png`,
            href: "/account/mytodolist",
            description: "查看待处理的案件审批流程",
            show: true,
            css: "",
            all: '全部',
            periodTabsFlag: false,
            tabs: ['全部', '待审批', '知会我'],
            dataSource: [],
            click: () => {
                that.panename = 'mytodolist';
            },
        },
        {
            id: 300,
            name: "我的已办",
            ename: "mydonelist",
            avatar: `//cdn.jsdelivr.net/gh/Miazzy/yunwisdom_cdn@v1.0.0/images/home_00.png`,
            href: "/account/mydonelist",
            description: "查看已处理的案件审批流程",
            show: true,
            css: "",
            all: '全部',
            periodTabsFlag: false,
            tabs: ['全部', '我发起', '已审批', '已驳回', '知会我'],
            dataSource: [],
            click: () => {
                that.panename = 'mydonelist';
            },
        },
        {
            id: 400,
            name: "我的申请",
            ename: "myapplylist",
            avatar: `//cdn.jsdelivr.net/gh/Miazzy/yunwisdom_cdn@v1.0.0/images/hire.png`,
            href: "/account/myapplylist",
            description: "查看我发起的案件审批流程",
            show: true,
            css: "",
            all: '全部',
            periodTabsFlag: false,
            tabs: ['全部', '待审批', '审批中', '已完成', '已驳回'],
            dataSource: [],
            click: () => {
                that.panename = 'myapplylist';
            },
        },
    ];
}

//最高人民法院
var court_0=[{"id":1,"label":"北京市高级人民法院"},{"id":51,"label":"天津市高级人民法院"},{"id":100,"label":"河北省高级人民法院"},{"id":300,"label":"山西省高级人民法院"},{"id":451,"label":"内蒙古自治区高级人民法院"},{"id":600,"label":"辽宁省高级人民法院"},{"id":750,"label":"吉林省高级人民法院"},{"id":850,"label":"黑龙江省高级人民法院"},{"id":1100,"label":"上海市高级人民法院"},{"id":1150,"label":"江苏省高级人民法院"},{"id":1300,"label":"浙江省高级人民法院"},{"id":1451,"label":"安徽省高级人民法院"},{"id":1600,"label":"福建省高级人民法院"},{"id":1700,"label":"江西省高级人民法院"},{"id":1850,"label":"山东省高级人民法院"},{"id":2050,"label":"河南省高级人民法院"},{"id":2250,"label":"湖北省高级人民法院"},{"id":2400,"label":"湖南省高级人民法院"},{"id":2550,"label":"广东省高级人民法院"},{"id":2750,"label":"广西壮族自治区高级人民法院"},{"id":2900,"label":"海南省高级人民法院"},{"id":2950,"label":"重庆市高级人民法院"},{"id":3000,"label":"四川省高级人民法院"},{"id":3250,"label":"贵州省高级人民法院"},{"id":3350,"label":"云南省高级人民法院"},{"id":3500,"label":"西藏自治区高级人民法院"},{"id":3600,"label":"陕西省高级人民法院"},{"id":3750,"label":"甘肃省高级人民法院"},{"id":3900,"label":"青海省高级人民法院"},{"id":4000,"label":"宁夏回族自治区高级人民法院"},{"id":4050,"label":"新疆维吾尔自治区高级人民法院"},{"id":4166,"label":"新疆维吾尔自治区高级人民法院生产建设兵团分院"}];
//北京市高级人民法院
var court_1=[{"id":2,"label":"北京市第一中级人民法院"},{"id":12,"label":"北京市第二中级人民法院"},{"id":29,"label":"北京市第三中级人民法院"},{"id":22,"label":"北京市第四中级人民法院（又名北京铁路运输中级法院）"},{"id":30,"label":"北京知识产权法院"}];
//北京市第一中级人民法院
var court_2=[{"id":5,"label":"北京市石景山区人民法院"},{"id":6,"label":"北京市海淀区人民法院"},{"id":7,"label":"北京市门头沟区人民法院"},{"id":9,"label":"北京市昌平区人民法院"},{"id":11,"label":"北京市延庆区人民法院"}];
//北京市第二中级人民法院
var court_12=[{"id":13,"label":"北京市东城区人民法院"},{"id":16,"label":"北京市丰台区人民法院"},{"id":3,"label":"北京市西城区人民法院"},{"id":8,"label":"北京市房山区人民法院"},{"id":10,"label":"北京市大兴区人民法院"}];
//北京市第三中级人民法院
var court_29=[{"id":15,"label":"北京市朝阳区人民法院"},{"id":17,"label":"北京市顺义区人民法院"},{"id":18,"label":"北京市通州区人民法院"},{"id":19,"label":"北京市平谷区人民法院"},{"id":20,"label":"北京市怀柔区人民法院"},{"id":21,"label":"北京市密云区人民法院"}];
//北京市第四中级人民法院（又名北京铁路运输中级法院）
var court_22=[{"id":23,"label":"北京铁路运输法院"},{"id":32,"label":"北京互联网法院"}];
//天津市高级人民法院
var court_51=[{"id":52,"label":"天津市第一中级人民法院"},{"id":62,"label":"天津市第二中级人民法院"},{"id":5015,"label":"天津市第三中级人民法院"},{"id":72,"label":"天津海事法院"}];
//天津市第一中级人民法院
var court_52=[{"id":53,"label":"天津市和平区人民法院"},{"id":54,"label":"天津市南开区人民法院"},{"id":56,"label":"天津市红桥区人民法院"},{"id":57,"label":"天津市西青区人民法院"},{"id":59,"label":"天津市武清区人民法院"},{"id":61,"label":"天津市宝坻区人民法院"},{"id":73,"label":"天津市蓟州区人民法院"},{"id":24,"label":"天津铁路运输法院"}];
//天津市第二中级人民法院
var court_62=[{"id":63,"label":"天津市河东区人民法院"},{"id":64,"label":"天津市河西区人民法院"},{"id":55,"label":"天津市河北区人民法院"},{"id":69,"label":"天津市津南区人民法院"},{"id":58,"label":"天津市北辰区人民法院"},{"id":60,"label":"天津市静海区人民法院"}];
//天津市第三中级人民法院
var court_5015=[{"id":74,"label":"天津市滨海新区人民法院"},{"id":68,"label":"天津市东丽区人民法院"},{"id":70,"label":"天津市宁河区人民法院"}];
//河北省高级人民法院
var court_100=[{"id":101,"label":"河北省石家庄市中级人民法院"},{"id":126,"label":"河北省唐山市中级人民法院"},{"id":144,"label":"河北省秦皇岛市中级人民法院"},{"id":153,"label":"河北省邯郸市中级人民法院"},{"id":173,"label":"河北省邢台市中级人民法院"},{"id":193,"label":"河北省保定市中级人民法院"},{"id":220,"label":"河北省张家口市中级人民法院"},{"id":239,"label":"河北省承德市中级人民法院"},{"id":251,"label":"河北省沧州市中级人民法院"},{"id":268,"label":"河北省廊坊市中级人民法院"},{"id":280,"label":"河北省衡水市中级人民法院"},{"id":5032,"label":"河北雄安新区中级人民法院"}];
//河北省石家庄市中级人民法院
var court_101=[{"id":102,"label":"石家庄市长安区人民法院"},{"id":104,"label":"石家庄市桥西区人民法院"},{"id":105,"label":"石家庄市新华区人民法院"},{"id":106,"label":"石家庄市裕华区人民法院"},{"id":107,"label":"井陉县人民法院"},{"id":108,"label":"石家庄市鹿泉区人民法院"},{"id":109,"label":"正定县人民法院"},{"id":110,"label":"石家庄市栾城区人民法院"},{"id":111,"label":"辛集市人民法院"},{"id":112,"label":"石家庄市藁城区人民法院"},{"id":113,"label":"晋州市人民法院"},{"id":114,"label":"深泽县人民法院"},{"id":115,"label":"无极县人民法院"},{"id":116,"label":"赵县人民法院"},{"id":117,"label":"新乐市人民法院"},{"id":118,"label":"高邑县人民法院"},{"id":119,"label":"元氏县人民法院"},{"id":120,"label":"赞皇县人民法院"},{"id":121,"label":"平山县人民法院"},{"id":122,"label":"灵寿县人民法院"},{"id":123,"label":"行唐县人民法院"},{"id":124,"label":"石家庄市井陉矿区人民法院"},{"id":125,"label":"石家庄高新技术产业开发区人民法院"},{"id":25,"label":"石家庄铁路运输法院"}];
//河北省唐山市中级人民法院
var court_126=[{"id":127,"label":"唐山市路南区人民法院"},{"id":128,"label":"唐山市路北区人民法院"},{"id":129,"label":"唐山市古冶区人民法院"},{"id":130,"label":"唐山市开平区人民法院"},{"id":132,"label":"唐山市丰润区人民法院"},{"id":133,"label":"唐山市丰南区人民法院"},{"id":134,"label":"滦县人民法院"},{"id":135,"label":"滦南县人民法院"},{"id":136,"label":"乐亭县人民法院"},{"id":137,"label":"迁安市人民法院"},{"id":138,"label":"迁西县人民法院"},{"id":139,"label":"遵化市人民法院"},{"id":140,"label":"玉田县人民法院"},{"id":141,"label":"唐山市曹妃甸区人民法院"},{"id":296,"label":"唐山高新技术产业开发区人民法院"}];
//河北省秦皇岛市中级人民法院
var court_144=[{"id":145,"label":"秦皇岛市海港区人民法院"},{"id":146,"label":"秦皇岛市山海关区人民法院"},{"id":147,"label":"秦皇岛市北戴河区人民法院"},{"id":148,"label":"昌黎县人民法院"},{"id":149,"label":"秦皇岛市抚宁区人民法院"},{"id":150,"label":"卢龙县人民法院"},{"id":151,"label":"青龙满族自治县人民法院"},{"id":152,"label":"秦皇岛经济技术开发区人民法院"},{"id":295,"label":"秦皇岛北戴河新区人民法院"}];
//河北省邯郸市中级人民法院
var court_153=[{"id":154,"label":"邯郸市邯山区人民法院"},{"id":155,"label":"邯郸市丛台区人民法院"},{"id":156,"label":"邯郸市复兴区人民法院"},{"id":157,"label":"邯郸市峰峰矿区人民法院"},{"id":158,"label":"武安市人民法院"},{"id":159,"label":"邯郸经济技术开发区人民法院"},{"id":160,"label":"大名县人民法院"},{"id":161,"label":"魏县人民法院"},{"id":162,"label":"曲周县人民法院"},{"id":163,"label":"邱县人民法院"},{"id":164,"label":"鸡泽县人民法院"},{"id":165,"label":"肥乡区人民法院"},{"id":166,"label":"广平县人民法院"},{"id":167,"label":"成安县人民法院"},{"id":168,"label":"临漳县人民法院"},{"id":169,"label":"磁县人民法院"},{"id":170,"label":"涉县人民法院"},{"id":171,"label":"永年区人民法院"},{"id":172,"label":"馆陶县人民法院"}];
//河北省邢台市中级人民法院
var court_173=[{"id":174,"label":"邢台市襄都区人民法院"},{"id":175,"label":"邢台市信都区人民法院"},{"id":177,"label":"南宫市人民法院"},{"id":178,"label":"沙河市人民法院"},{"id":179,"label":"临城县人民法院"},{"id":180,"label":"内丘县人民法院"},{"id":181,"label":"柏乡县人民法院"},{"id":182,"label":"隆尧县人民法院"},{"id":183,"label":"邢台市任泽区人民法院"},{"id":184,"label":"邢台市南和区人民法院"},{"id":185,"label":"宁晋县人民法院"},{"id":186,"label":"巨鹿县人民法院"},{"id":187,"label":"新河县人民法院"},{"id":188,"label":"广宗县人民法院"},{"id":189,"label":"平乡县人民法院"},{"id":190,"label":"威县人民法院"},{"id":191,"label":"清河县人民法院"},{"id":192,"label":"临西县人民法院"},{"id":294,"label":"邢台经济开发区人民法院"}];
//河北省保定市中级人民法院
var court_193=[{"id":194,"label":"保定市竞秀区人民法院"},{"id":197,"label":"保定市满城区人民法院"},{"id":198,"label":"保定市清苑区人民法院"},{"id":199,"label":"定州市人民法院"},{"id":200,"label":"涿州市人民法院"},{"id":201,"label":"安国市人民法院"},{"id":202,"label":"易县人民法院"},{"id":203,"label":"保定市徐水区人民法院"},{"id":204,"label":"涞源县人民法院"},{"id":205,"label":"定兴县人民法院"},{"id":206,"label":"顺平县人民法院"},{"id":207,"label":"唐县人民法院"},{"id":208,"label":"望都县人民法院"},{"id":209,"label":"涞水县人民法院"},{"id":210,"label":"高阳县人民法院"},{"id":214,"label":"高碑店市人民法院"},{"id":215,"label":"曲阳县人民法院"},{"id":216,"label":"阜平县人民法院"},{"id":218,"label":"博野县人民法院"},{"id":219,"label":"蠡县人民法院"},{"id":297,"label":"保定市莲池区人民法院"},{"id":5001,"label":"保定高新技术产业开发区人民法院"}];
//河北省张家口市中级人民法院
var court_220=[{"id":221,"label":"张家口市桥东区人民法院"},{"id":222,"label":"张家口市桥西区人民法院"},{"id":223,"label":"张家口市宣化区人民法院"},{"id":224,"label":"张家口市下花园区人民法院"},{"id":234,"label":"张家口市万全区人民法院"},{"id":238,"label":"张家口市崇礼区人民法院"},{"id":227,"label":"张北县人民法院"},{"id":228,"label":"康保县人民法院"},{"id":229,"label":"沽源县人民法院"},{"id":230,"label":"尚义县人民法院"},{"id":231,"label":"蔚县人民法院"},{"id":232,"label":"阳原县人民法院"},{"id":233,"label":"怀安县人民法院"},{"id":235,"label":"怀来县人民法院"},{"id":236,"label":"涿鹿县人民法院"},{"id":237,"label":"赤城县人民法院"},{"id":293,"label":"张家口经济开发区人民法院"}];
//河北省承德市中级人民法院
var court_239=[{"id":240,"label":"承德市双桥区人民法院"},{"id":241,"label":"承德市双滦区人民法院"},{"id":242,"label":"承德市鹰手营子矿区人民法院"},{"id":243,"label":"承德县人民法院"},{"id":244,"label":"兴隆县人民法院"},{"id":245,"label":"平泉县人民法院"},{"id":246,"label":"滦平县人民法院"},{"id":247,"label":"隆化县人民法院"},{"id":248,"label":"丰宁满族自治县人民法院"},{"id":249,"label":"围场满族蒙古族自治县人民法院"},{"id":250,"label":"宽城满族自治县人民法院"}];
//河北省沧州市中级人民法院
var court_251=[{"id":252,"label":"沧州市新华区人民法院"},{"id":253,"label":"沧州市运河区人民法院"},{"id":254,"label":"沧县人民法院"},{"id":255,"label":"青县人民法院"},{"id":256,"label":"泊头市人民法院"},{"id":257,"label":"任丘市人民法院"},{"id":258,"label":"黄骅市人民法院"},{"id":259,"label":"河间市人民法院"},{"id":260,"label":"肃宁县人民法院"},{"id":261,"label":"献县人民法院"},{"id":262,"label":"吴桥县人民法院"},{"id":263,"label":"东光县人民法院"},{"id":264,"label":"南皮县人民法院"},{"id":265,"label":"盐山县人民法院"},{"id":266,"label":"海兴县人民法院"},{"id":267,"label":"孟村回族自治县人民法院"}];
//河北省廊坊市中级人民法院
var court_268=[{"id":269,"label":"廊坊市安次区人民法院"},{"id":270,"label":"霸州市人民法院"},{"id":271,"label":"三河市人民法院"},{"id":272,"label":"香河县人民法院"},{"id":273,"label":"永清县人民法院"},{"id":274,"label":"固安县人民法院"},{"id":275,"label":"文安县人民法院"},{"id":276,"label":"大城县人民法院"},{"id":277,"label":"大厂回族自治县人民法院"},{"id":278,"label":"廊坊市经济技术开发区人民法院"},{"id":279,"label":"廊坊市广阳区人民法院"}];
//河北省衡水市中级人民法院
var court_280=[{"id":281,"label":"衡水市桃城区人民法院"},{"id":282,"label":"衡水市冀州区人民法院"},{"id":283,"label":"枣强县人民法院"},{"id":284,"label":"武邑县人民法院"},{"id":285,"label":"深州市人民法院"},{"id":286,"label":"武强县人民法院"},{"id":287,"label":"饶阳县人民法院"},{"id":288,"label":"安平县人民法院"},{"id":289,"label":"故城县人民法院"},{"id":290,"label":"景县人民法院"},{"id":291,"label":"阜城县人民法院"}];
//河北雄安新区中级人民法院
var court_5032=[{"id":211,"label":"安新县人民法院"},{"id":212,"label":"雄县人民法院"},{"id":213,"label":"容城县人民法院"}];
//山西省高级人民法院
var court_300=[{"id":301,"label":"山西省太原市中级人民法院"},{"id":312,"label":"山西省大同市中级人民法院"},{"id":324,"label":"山西省阳泉市中级人民法院"},{"id":330,"label":"山西省长治市中级人民法院"},{"id":344,"label":"山西省晋城市中级人民法院"},{"id":351,"label":"山西省朔州市中级人民法院"},{"id":358,"label":"山西省忻州市中级人民法院"},{"id":373,"label":"山西省吕梁市中级人民法院"},{"id":387,"label":"山西省晋中市中级人民法院"},{"id":399,"label":"山西省临汾市中级人民法院"},{"id":417,"label":"山西省运城市中级人民法院"},{"id":431,"label":"太原铁路运输中级法院"}];
//山西省太原市中级人民法院
var court_301=[{"id":302,"label":"太原市小店区人民法院"},{"id":303,"label":"太原市迎泽区人民法院"},{"id":304,"label":"太原市杏花岭区人民法院"},{"id":305,"label":"太原市尖草坪区人民法院"},{"id":306,"label":"太原市万柏林区人民法院"},{"id":307,"label":"古交市人民法院"},{"id":308,"label":"清徐县人民法院"},{"id":309,"label":"阳曲县人民法院"},{"id":310,"label":"娄烦县人民法院"},{"id":311,"label":"太原市晋源区人民法院"}];
//山西省大同市中级人民法院
var court_312=[{"id":313,"label":"大同市平城区人民法院"},{"id":315,"label":"大同市云冈区人民法院"},{"id":316,"label":"大同市新荣区人民法院"},{"id":317,"label":"阳高县人民法院"},{"id":318,"label":"天镇县人民法院"},{"id":319,"label":"广灵县人民法院"},{"id":320,"label":"灵丘县人民法院"},{"id":321,"label":"浑源县人民法院"},{"id":322,"label":"左云县人民法院"},{"id":323,"label":"大同市云州区人民法院"}];
//山西省阳泉市中级人民法院
var court_324=[{"id":325,"label":"阳泉市城区人民法院"},{"id":326,"label":"阳泉市矿区人民法院"},{"id":327,"label":"阳泉市郊区人民法院"},{"id":328,"label":"平定县人民法院"},{"id":329,"label":"盂县人民法院"}];
//山西省长治市中级人民法院
var court_330=[{"id":331,"label":"长治市潞州区人民法院"},{"id":333,"label":"长治市上党区人民法院"},{"id":334,"label":"长治市潞城区人民法院"},{"id":335,"label":"襄垣县人民法院"},{"id":336,"label":"长治市屯留区人民法院"},{"id":337,"label":"平顺县人民法院"},{"id":338,"label":"黎城县人民法院"},{"id":339,"label":"壶关县人民法院"},{"id":340,"label":"长子县人民法院"},{"id":341,"label":"武乡县人民法院"},{"id":342,"label":"沁县人民法院"},{"id":343,"label":"沁源县人民法院"}];
//山西省晋城市中级人民法院
var court_344=[{"id":345,"label":"晋城市城区人民法院"},{"id":346,"label":"泽州县人民法院"},{"id":347,"label":"沁水县人民法院"},{"id":348,"label":"阳城县人民法院"},{"id":349,"label":"高平市人民法院"},{"id":350,"label":"陵川县人民法院"}];
//山西省朔州市中级人民法院
var court_351=[{"id":352,"label":"朔州市朔城区人民法院"},{"id":353,"label":"朔州市平鲁区人民法院"},{"id":354,"label":"山阴县人民法院"},{"id":355,"label":"应县人民法院"},{"id":356,"label":"右玉县人民法院"},{"id":357,"label":"怀仁县人民法院"}];
//山西省忻州市中级人民法院
var court_358=[{"id":359,"label":"忻州市忻府区人民法院"},{"id":360,"label":"定襄县人民法院"},{"id":361,"label":"五台县人民法院"},{"id":362,"label":"原平市人民法院"},{"id":363,"label":"代县人民法院"},{"id":364,"label":"繁峙县人民法院"},{"id":365,"label":"宁武县人民法院"},{"id":366,"label":"静乐县人民法院"},{"id":367,"label":"神池县人民法院"},{"id":368,"label":"五寨县人民法院"},{"id":369,"label":"岢岚县人民法院"},{"id":370,"label":"河曲县人民法院"},{"id":371,"label":"保德县人民法院"},{"id":372,"label":"偏关县人民法院"}];
//山西省吕梁市中级人民法院
var court_373=[{"id":374,"label":"汾阳市人民法院"},{"id":375,"label":"文水县人民法院"},{"id":376,"label":"交城县人民法院"},{"id":377,"label":"孝义市人民法院"},{"id":378,"label":"兴县人民法院"},{"id":379,"label":"临县人民法院"},{"id":380,"label":"柳林县人民法院"},{"id":381,"label":"石楼县人民法院"},{"id":382,"label":"岚县人民法院"},{"id":383,"label":"方山县人民法院"},{"id":384,"label":"吕梁市离石区人民法院"},{"id":385,"label":"中阳县人民法院"},{"id":386,"label":"交口县人民法院"}];
//山西省晋中市中级人民法院
var court_387=[{"id":388,"label":"晋中市榆次区人民法院"},{"id":389,"label":"榆社县人民法院"},{"id":390,"label":"左权县人民法院"},{"id":391,"label":"和顺县人民法院"},{"id":392,"label":"昔阳县人民法院"},{"id":393,"label":"寿阳县人民法院"},{"id":394,"label":"太谷县人民法院"},{"id":395,"label":"祁县人民法院"},{"id":396,"label":"平遥县人民法院"},{"id":397,"label":"介休市人民法院"},{"id":398,"label":"灵石县人民法院"}];
//山西省临汾市中级人民法院
var court_399=[{"id":400,"label":"临汾市尧都区人民法院"},{"id":401,"label":"侯马市人民法院"},{"id":402,"label":"霍州市人民法院"},{"id":403,"label":"曲沃县人民法院"},{"id":404,"label":"翼城县人民法院"},{"id":405,"label":"襄汾县人民法院"},{"id":406,"label":"洪洞县人民法院"},{"id":407,"label":"古县人民法院"},{"id":408,"label":"安泽县人民法院"},{"id":409,"label":"浮山县人民法院"},{"id":410,"label":"吉县人民法院"},{"id":411,"label":"乡宁县人民法院"},{"id":412,"label":"蒲县人民法院"},{"id":413,"label":"大宁县人民法院"},{"id":414,"label":"永和县人民法院"},{"id":415,"label":"隰县人民法院"},{"id":416,"label":"汾西县人民法院"}];
//山西省运城市中级人民法院
var court_417=[{"id":418,"label":"运城市盐湖区人民法院"},{"id":419,"label":"永济市人民法院"},{"id":420,"label":"芮城县人民法院"},{"id":421,"label":"临猗县人民法院"},{"id":422,"label":"万荣县人民法院"},{"id":423,"label":"新绛县人民法院"},{"id":424,"label":"稷山县人民法院"},{"id":425,"label":"河津市人民法院"},{"id":426,"label":"闻喜县人民法院"},{"id":427,"label":"夏县人民法院"},{"id":428,"label":"绛县人民法院"},{"id":429,"label":"平陆县人民法院"},{"id":430,"label":"垣曲县人民法院"}];
//太原铁路运输中级法院
var court_431=[{"id":432,"label":"太原铁路运输法院"},{"id":433,"label":"大同铁路运输法院"},{"id":434,"label":"临汾铁路运输法院"}];
//内蒙古自治区高级人民法院
var court_451=[{"id":452,"label":"内蒙古自治区呼和浩特市中级人民法院"},{"id":462,"label":"内蒙古自治区包头市中级人民法院"},{"id":472,"label":"内蒙古自治区乌海市中级人民法院"},{"id":476,"label":"内蒙古自治区赤峰市中级人民法院"},{"id":489,"label":"内蒙古自治区呼伦贝尔市中级人民法院"},{"id":503,"label":"内蒙古自治区兴安盟中级人民法院"},{"id":510,"label":"内蒙古自治区通辽市中级人民法院"},{"id":519,"label":"内蒙古自治区锡林郭勒盟中级人民法院"},{"id":532,"label":"内蒙古自治区乌兰察布市中级人民法院"},{"id":544,"label":"内蒙古自治区鄂尔多斯市中级人民法院"},{"id":553,"label":"内蒙古自治区巴彦淖尔市中级人民法院"},{"id":561,"label":"内蒙古自治区阿拉善盟中级人民法院"},{"id":565,"label":"呼和浩特铁路运输中级法院"}];
//内蒙古自治区呼和浩特市中级人民法院
var court_452=[{"id":453,"label":"呼和浩特市新城区人民法院"},{"id":454,"label":"呼和浩特市回民区人民法院"},{"id":455,"label":"呼和浩特市玉泉区人民法院"},{"id":456,"label":"呼和浩特市赛罕区人民法院"},{"id":457,"label":"土默特左旗人民法院"},{"id":458,"label":"托克托县人民法院"},{"id":459,"label":"武川县人民法院"},{"id":460,"label":"和林格尔县人民法院"},{"id":461,"label":"清水河县人民法院"}];
//内蒙古自治区包头市中级人民法院
var court_462=[{"id":463,"label":"包头市东河区人民法院"},{"id":464,"label":"包头市昆都仑区人民法院"},{"id":465,"label":"包头市青山区人民法院"},{"id":466,"label":"包头市石拐区人民法院"},{"id":467,"label":"包头市白云鄂博矿区人民法院"},{"id":468,"label":"包头市九原区人民法院"},{"id":469,"label":"土默特右旗人民法院"},{"id":470,"label":"固阳县人民法院"},{"id":471,"label":"达尔罕茂明安联合旗人民法院"},{"id":568,"label":"包头稀土高新技术产业开发区人民法院"}];
//内蒙古自治区乌海市中级人民法院
var court_472=[{"id":473,"label":"乌海市海勃湾区人民法院"},{"id":474,"label":"乌海市海南区人民法院"},{"id":475,"label":"乌海市乌达区人民法院"}];
//内蒙古自治区赤峰市中级人民法院
var court_476=[{"id":477,"label":"赤峰市红山区人民法院"},{"id":478,"label":"赤峰市元宝山区人民法院"},{"id":479,"label":"赤峰市松山区人民法院"},{"id":480,"label":"阿鲁科尔沁旗人民法院"},{"id":481,"label":"巴林左旗人民法院"},{"id":482,"label":"巴林右旗人民法院"},{"id":483,"label":"林西县人民法院"},{"id":484,"label":"克什克腾旗人民法院"},{"id":485,"label":"翁牛特旗人民法院"},{"id":486,"label":"喀喇沁旗人民法院"},{"id":487,"label":"宁城县人民法院"},{"id":488,"label":"敖汉旗人民法院"}];
//内蒙古自治区呼伦贝尔市中级人民法院
var court_489=
//内蒙古自治区兴安盟中级人民法院
var court_503=
//内蒙古自治区通辽市中级人民法院
var court_510=
//内蒙古自治区锡林郭勒盟中级人民法院
var court_519=
//内蒙古自治区乌兰察布市中级人民法院
var court_532=
//内蒙古自治区鄂尔多斯市中级人民法院
var court_544=
//内蒙古自治区巴彦淖尔市中级人民法院
var court_553=
//内蒙古自治区阿拉善盟中级人民法院
var court_561=
//呼和浩特铁路运输中级法院
var court_565=
//辽宁省高级人民法院
var court_600=
//辽宁省沈阳市中级人民法院
var court_601=
//辽宁省大连市中级人民法院
var court_617=
//辽宁省鞍山市中级人民法院
var court_629=[{"id":630,"label":"鞍山市铁东区人民法院"},{"id":631,"label":"鞍山市铁西区人民法院"},{"id":632,"label":"鞍山市立山区人民法院"},{"id":636,"label":"鞍山市千山区人民法院"},{"id":633,"label":"海城市人民法院"},{"id":634,"label":"台安县人民法院"},{"id":635,"label":"岫岩满族自治县人民法院"}];
//辽宁省抚顺市中级人民法院
var court_637=
//辽宁省本溪市中级人民法院
var court_645=[{"id":646,"label":"本溪市平山区人民法院"},{"id":647,"label":"本溪市溪湖区人民法院"},{"id":648,"label":"本溪市明山区人民法院"},{"id":649,"label":"本溪市南芬区人民法院"},{"id":650,"label":"本溪满族自治县人民法院"},{"id":651,"label":"桓仁满族自治县人民法院"}];
//辽宁省丹东市中级人民法院
var court_652=[{"id":653,"label":"丹东市元宝区人民法院"},{"id":654,"label":"丹东市振兴区人民法院"},{"id":655,"label":"丹东市振安区人民法院"},{"id":656,"label":"东港市人民法院"},{"id":657,"label":"凤城市人民法院"},{"id":658,"label":"宽甸满族自治县人民法院"}];
//辽宁省锦州市中级人民法院
var court_659=;
//辽宁省营口市中级人民法院
var court_668=;
//辽宁省阜新市中级人民法院
var court_675=;
//辽宁省辽阳市中级人民法院
var court_683=;
//辽宁省盘锦市中级人民法院
var court_691=;
//辽宁省铁岭市中级人民法院
var court_696=;
//辽宁省朝阳市中级人民法院
var court_704=;
//辽宁省葫芦岛市中级人民法院
var court_712=;
//沈阳铁路运输中级法院
var court_719=;
//辽宁省辽河中级人民法院
var court_730=;
//吉林省高级人民法院
var court_750=[{"id":751,"label":"吉林省长春市中级人民法院"},{"id":763,"label":"吉林省吉林市中级人民法院"},{"id":773,"label":"吉林省四平市中级人民法院"},{"id":780,"label":"吉林省辽源市中级人民法院"},{"id":785,"label":"吉林省通化市中级人民法院"},{"id":793,"label":"吉林省白山市中级人民法院"},{"id":800,"label":"吉林省白城市中级人民法院"},{"id":806,"label":"吉林省延边朝鲜族自治州中级人民法院"},{"id":815,"label":"吉林省延边林区中级法院"},{"id":826,"label":"吉林省松原市中级人民法院"},{"id":835,"label":"吉林省长春林区中级法院"},{"id":848,"label":"长春铁路运输中级法院"}];
//吉林省长春市中级人民法院
var court_751=[{"id":752,"label":"长春市南关区人民法院"},{"id":753,"label":"长春市宽城区人民法院"},{"id":754,"label":"长春市朝阳区人民法院"},{"id":755,"label":"长春市二道区人民法院"},{"id":756,"label":"长春市绿园区人民法院"},{"id":757,"label":"长春市九台区人民法院"},{"id":758,"label":"榆树市人民法院"},{"id":759,"label":"农安县人民法院"},{"id":760,"label":"德惠市人民法院"},{"id":761,"label":"长春市双阳区人民法院"},{"id":762,"label":"长春经济技术开发区人民法院"},{"id":843,"label":"长春汽车经济技术开发区人民法院"},{"id":844,"label":"长春新区人民法院"},{"id":847,"label":"长春净月高新技术产业开发区人民法院"}];
//吉林省吉林市中级人民法院
var court_763=[{"id":764,"label":"吉林市昌邑区人民法院"},{"id":765,"label":"吉林市龙潭区人民法院"},{"id":766,"label":"吉林市船营区人民法院"},{"id":767,"label":"吉林市丰满区人民法院"},{"id":768,"label":"桦甸市人民法院"},{"id":769,"label":"蛟河市人民法院"},{"id":770,"label":"永吉县人民法院"},{"id":771,"label":"舒兰市人民法院"},{"id":772,"label":"磐石市人民法院"},{"id":842,"label":"吉林高新技术产业开发区人民法院"}];
//吉林省四平市中级人民法院
var court_773=[{"id":774,"label":"四平市铁西区人民法院"},{"id":775,"label":"四平市铁东区人民法院"},{"id":776,"label":"公主岭市人民法院"},{"id":777,"label":"梨树县人民法院"},{"id":778,"label":"双辽市人民法院"},{"id":779,"label":"伊通满族自治县人民法院"}];
//吉林省辽源市中级人民法院
var court_780=[{"id":781,"label":"辽源市龙山区人民法院"},{"id":782,"label":"辽源市西安区人民法院"},{"id":783,"label":"东丰县人民法院"},{"id":784,"label":"东辽县人民法院"}];
//吉林省通化市中级人民法院
var court_785=[{"id":786,"label":"通化市东昌区人民法院"},{"id":787,"label":"通化市二道江区人民法院"},{"id":788,"label":"梅河口市人民法院"},{"id":789,"label":"集安市人民法院"},{"id":790,"label":"通化县人民法院"},{"id":791,"label":"辉南县人民法院"},{"id":792,"label":"柳河县人民法院"}];
//吉林省白山市中级人民法院
var court_793=[{"id":794,"label":"白山市浑江区人民法院"},{"id":795,"label":"白山市江源区人民法院"},{"id":796,"label":"临江市人民法院"},{"id":797,"label":"抚松县人民法院"},{"id":798,"label":"靖宇县人民法院"},{"id":799,"label":"长白朝鲜族自治县人民法院"}];
//吉林省白城市中级人民法院
var court_800=[{"id":801,"label":"白城市洮北区人民法院"},{"id":802,"label":"洮南市人民法院"},{"id":803,"label":"大安市人民法院"},{"id":804,"label":"镇赉县人民法院"},{"id":805,"label":"通榆县人民法院"}];
//吉林省延边朝鲜族自治州中级人民法院
var court_806=[{"id":807,"label":"延吉市人民法院"},{"id":808,"label":"图们市人民法院"},{"id":809,"label":"敦化市人民法院"},{"id":810,"label":"龙井市人民法院"},{"id":811,"label":"珲春市人民法院"},{"id":812,"label":"和龙市人民法院"},{"id":813,"label":"汪清县人民法院"},{"id":814,"label":"安图县人民法院"}];
//吉林省延边林区中级法院
var court_815=[{"id":818,"label":"汪清林区基层法院"},{"id":819,"label":"和龙林区基层法院"},{"id":821,"label":"白河林区基层法院"},{"id":822,"label":"敦化林区基层法院"},{"id":825,"label":"珲春林区基层法院"}];
//吉林省松原市中级人民法院
var court_826=[{"id":827,"label":"松原市宁江区人民法院"},{"id":829,"label":"乾安县人民法院"},{"id":830,"label":"前郭尔罗斯蒙古族自治县人民法院"},{"id":831,"label":"长岭县人民法院"},{"id":828,"label":"扶余市人民法院"}];
//吉林省长春林区中级法院
var court_835=[{"id":836,"label":"临江林区基层法院"},{"id":833,"label":"白石山林区基层法院"},{"id":834,"label":"红石林区基层法院"},{"id":845,"label":"抚松林区基层法院"},{"id":846,"label":"江源林区基层法院"}];
//长春铁路运输中级法院
var court_848=[{"id":724,"label":"长春铁路运输法院"},{"id":721,"label":"吉林铁路运输法院"},{"id":726,"label":"通化铁路运输法院"},{"id":729,"label":"白城铁路运输法院"},{"id":727,"label":"延边铁路运输法院"}];
//黑龙江省高级人民法院
var court_850=[{"id":851,"label":"黑龙江省哈尔滨市中级人民法院"},{"id":871,"label":"黑龙江省齐齐哈尔市中级人民法院"},{"id":888,"label":"黑龙江省鸡西市中级人民法院"},{"id":900,"label":"黑龙江省鹤岗市中级人民法院"},{"id":909,"label":"黑龙江省双鸭山市中级人民法院"},{"id":918,"label":"黑龙江省大庆市中级人民法院"},{"id":928,"label":"黑龙江省伊春市中级人民法院"},{"id":950,"label":"黑龙江省佳木斯市中级人民法院"},{"id":962,"label":"黑龙江省七台河市中级人民法院"},{"id":967,"label":"黑龙江省牡丹江市中级人民法院"},{"id":978,"label":"黑龙江省绥化市中级人民法院"},{"id":988,"label":"黑龙江省黑河市中级人民法院"},{"id":995,"label":"黑龙江省大兴安岭地区中级人民法院"},{"id":1007,"label":"哈尔滨铁路运输中级法院"},{"id":1013,"label":"黑龙江省林区中级人民法院"},{"id":1038,"label":"黑龙江省农垦中级法院"}];
//黑龙江省哈尔滨市中级人民法院
var court_851=[{"id":852,"label":"哈尔滨市道里区人民法院"},{"id":853,"label":"哈尔滨市南岗区人民法院"},{"id":854,"label":"哈尔滨市道外区人民法院"},{"id":855,"label":"哈尔滨市松北区人民法院"},{"id":856,"label":"哈尔滨市香坊区人民法院"},{"id":858,"label":"哈尔滨市平房区人民法院"},{"id":859,"label":"哈尔滨市阿城区人民法院"},{"id":860,"label":"哈尔滨市呼兰区人民法院"},{"id":861,"label":"宾县人民法院"},{"id":862,"label":"方正县人民法院"},{"id":863,"label":"依兰县人民法院"},{"id":864,"label":"哈尔滨市双城区人民法院"},{"id":865,"label":"尚志市人民法院"},{"id":866,"label":"五常市人民法院"},{"id":867,"label":"巴彦县人民法院"},{"id":868,"label":"木兰县人民法院"},{"id":869,"label":"通河县人民法院"},{"id":870,"label":"延寿县人民法院"}];
//黑龙江省齐齐哈尔市中级人民法院
var court_871=[{"id":872,"label":"齐齐哈尔市龙沙区人民法院"},{"id":873,"label":"齐齐哈尔市建华区人民法院"},{"id":874,"label":"齐齐哈尔市铁锋区人民法院"},{"id":875,"label":"齐齐哈尔市昂昂溪区人民法院"},{"id":876,"label":"齐齐哈尔市富拉尔基区人民法院"},{"id":877,"label":"齐齐哈尔市碾子山区人民法院"},{"id":878,"label":"齐齐哈尔市梅里斯达斡尔族区人民法院"},{"id":879,"label":"龙江县人民法院"},{"id":880,"label":"讷河市人民法院"},{"id":881,"label":"依安县人民法院"},{"id":882,"label":"泰来县人民法院"},{"id":883,"label":"甘南县人民法院"},{"id":884,"label":"富裕县人民法院"},{"id":885,"label":"克山县人民法院"},{"id":886,"label":"克东县人民法院"},{"id":887,"label":"拜泉县人民法院"}];
//黑龙江省鸡西市中级人民法院
var court_888=[{"id":889,"label":"鸡西市鸡冠区人民法院"},{"id":890,"label":"鸡西市恒山区人民法院"},{"id":891,"label":"鸡西市滴道区人民法院"},{"id":892,"label":"鸡西市梨树区人民法院"},{"id":893,"label":"鸡西市城子河区人民法院"},{"id":894,"label":"鸡西市麻山区人民法院"},{"id":895,"label":"鸡东县人民法院"},{"id":896,"label":"虎林市人民法院"},{"id":897,"label":"密山市人民法院"}];
//黑龙江省鹤岗市中级人民法院
var court_900=[{"id":901,"label":"鹤岗市向阳区人民法院"},{"id":902,"label":"鹤岗市工农区人民法院"},{"id":903,"label":"鹤岗市南山区人民法院"},{"id":904,"label":"鹤岗市兴安区人民法院"},{"id":905,"label":"鹤岗市东山区人民法院"},{"id":906,"label":"鹤岗市兴山区人民法院"},{"id":907,"label":"绥滨县人民法院"},{"id":908,"label":"萝北县人民法院"}];
//黑龙江省双鸭山市中级人民法院
var court_909=[{"id":910,"label":"双鸭山市尖山区人民法院"},{"id":911,"label":"双鸭山市岭东区人民法院"},{"id":912,"label":"双鸭山市四方台区人民法院"},{"id":913,"label":"双鸭山市宝山区人民法院"},{"id":914,"label":"集贤县人民法院"},{"id":915,"label":"宝清县人民法院"},{"id":916,"label":"友谊县人民法院"},{"id":917,"label":"饶河县人民法院"}];
//黑龙江省大庆市中级人民法院
var court_918=[{"id":919,"label":"大庆市萨尔图区人民法院"},{"id":920,"label":"大庆市龙凤区人民法院"},{"id":921,"label":"大庆市让胡路区人民法院"},{"id":922,"label":"大庆市红岗区人民法院"},{"id":923,"label":"大庆市大同区人民法院"},{"id":924,"label":"林甸县人民法院"},{"id":925,"label":"杜尔伯特蒙古族自治县人民法院"},{"id":926,"label":"肇源县人民法院"},{"id":927,"label":"肇州县人民法院"},{"id":1047,"label":"大庆高新技术产业开发区人民法院"}];
//黑龙江省伊春市中级人民法院
var court_928=[{"id":929,"label":"伊春市伊春区人民法院"},{"id":930,"label":"伊春市南岔区人民法院"},{"id":931,"label":"伊春市友好区人民法院"},{"id":932,"label":"伊春市西林区人民法院"},{"id":933,"label":"伊春市翠峦区人民法院"},{"id":934,"label":"伊春市新青区人民法院"},{"id":935,"label":"伊春市美溪区人民法院"},{"id":936,"label":"伊春市汤旺河区人民法院"},{"id":937,"label":"伊春市金山屯区人民法院"},{"id":938,"label":"伊春市五营区人民法院"},{"id":939,"label":"伊春市乌马河区人民法院"},{"id":940,"label":"伊春市带岭区人民法院"},{"id":941,"label":"伊春市乌伊岭区人民法院"},{"id":942,"label":"伊春市红星区人民法院"},{"id":943,"label":"伊春市上甘岭区人民法院"},{"id":944,"label":"铁力市人民法院"},{"id":945,"label":"嘉荫县人民法院"}];
//黑龙江省佳木斯市中级人民法院
var court_950=[{"id":952,"label":"佳木斯市向阳区人民法院"},{"id":953,"label":"佳木斯市前进区人民法院"},{"id":954,"label":"佳木斯市东风区人民法院"},{"id":955,"label":"佳木斯市郊区人民法院"},{"id":956,"label":"同江市人民法院"},{"id":957,"label":"富锦市人民法院"},{"id":961,"label":"抚远市人民法院"},{"id":958,"label":"桦南县人民法院"},{"id":959,"label":"桦川县人民法院"},{"id":960,"label":"汤原县人民法院"}];
//黑龙江省七台河市中级人民法院
var court_962=[{"id":963,"label":"七台河市新兴区人民法院"},{"id":964,"label":"七台河市桃山区人民法院"},{"id":965,"label":"七台河市茄子河区人民法院"},{"id":966,"label":"勃利县人民法院"}];
//黑龙江省牡丹江市中级人民法院
var court_967=[{"id":968,"label":"牡丹江市东安区人民法院"},{"id":969,"label":"牡丹江市阳明区人民法院"},{"id":970,"label":"牡丹江市爱民区人民法院"},{"id":971,"label":"牡丹江市西安区人民法院"},{"id":972,"label":"绥芬河市人民法院"},{"id":973,"label":"宁安市人民法院"},{"id":974,"label":"海林市人民法院"},{"id":975,"label":"穆棱市人民法院"},{"id":976,"label":"东宁市人民法院"},{"id":977,"label":"林口县人民法院"}];
//黑龙江省绥化市中级人民法院
var court_978=[{"id":979,"label":"安达市人民法院"},{"id":980,"label":"肇东市人民法院"},{"id":981,"label":"海伦市人民法院"},{"id":982,"label":"望奎县人民法院"},{"id":983,"label":"兰西县人民法院"},{"id":984,"label":"青冈县人民法院"},{"id":985,"label":"庆安县人民法院"},{"id":986,"label":"明水县人民法院"},{"id":987,"label":"绥棱县人民法院"},{"id":1026,"label":"绥化市北林区人民法院"}];
//黑龙江省黑河市中级人民法院
var court_988=[{"id":989,"label":"黑河市爱辉区人民法院"},{"id":990,"label":"北安市人民法院"},{"id":991,"label":"五大连池市人民法院"},{"id":992,"label":"嫩江县人民法院"},{"id":993,"label":"逊克县人民法院"},{"id":994,"label":"孙吴县人民法院"}];
//黑龙江省大兴安岭地区中级人民法院
var court_995=[{"id":996,"label":"大兴安岭地区加格达奇区人民法院"},{"id":997,"label":"大兴安岭地区松岭区人民法院"},{"id":998,"label":"大兴安岭地区新林区人民法院"},{"id":999,"label":"大兴安岭地区呼中区人民法院"},{"id":1000,"label":"呼玛县人民法院"},{"id":1001,"label":"塔河县人民法院"},{"id":1002,"label":"漠河县人民法院"}];
//哈尔滨铁路运输中级法院
var court_1007=[{"id":1008,"label":"哈尔滨铁路运输法院"},{"id":1009,"label":"牡丹江铁路运输法院"},{"id":1011,"label":"佳木斯铁路运输法院"},{"id":1012,"label":"齐齐哈尔铁路运输法院"}];
//黑龙江省第二中级人民法院
var court_1013=[{"id":5020,"label":"亚布力人民法院"},{"id":5021,"label":"绥阳人民法院"},{"id":5022,"label":"东方红人民法院"},{"id":5023,"label":"鹤北人民法院"},{"id":5024,"label":"双桦人民法院"},{"id":5025,"label":"沿江人民法院"},{"id":5026,"label":"诺敏河人民法院"}];
//黑龙江省第一中级人民法院
var court_1038=[{"id":1039,"label":"宝泉岭人民法院"},{"id":1040,"label":"建三江人民法院"},{"id":5027,"label":"红兴隆人民法院"},{"id":5028,"label":"九三人民法院"},{"id":5029,"label":"绥北人民法院"}];
//上海市高级人民法院
var court_1100=[{"id":1101,"label":"上海市第一中级人民法院"},{"id":1112,"label":"上海市第二中级人民法院"},{"id":1123,"label":"上海铁路运输中级法院"},{"id":1129,"label":"上海海事法院"},{"id":1131,"label":"上海市第三中级人民法院"},{"id":1132,"label":"上海知识产权法院"},{"id":5014,"label":"上海金融法院"}];
//上海市第一中级人民法院
var court_1101=[{"id":1104,"label":"上海市徐汇区人民法院"},{"id":1105,"label":"上海市长宁区人民法院"},{"id":1106,"label":"上海市闵行区人民法院"},{"id":1107,"label":"上海市浦东新区人民法院"},{"id":1109,"label":"上海市奉贤区人民法院"},{"id":1110,"label":"上海市松江区人民法院"},{"id":1111,"label":"上海市金山区人民法院"}];
//上海市第二中级人民法院
var court_1112=[{"id":1113,"label":"上海市黄浦区人民法院"},{"id":1114,"label":"上海市静安区人民法院"},{"id":1115,"label":"上海市普陀区人民法院"},{"id":1117,"label":"上海市虹口区人民法院"},{"id":1118,"label":"上海市杨浦区人民法院"},{"id":1119,"label":"上海市宝山区人民法院"},{"id":1120,"label":"上海市嘉定区人民法院"},{"id":1121,"label":"上海市青浦区人民法院"},{"id":1122,"label":"上海市崇明区人民法院"}];
//上海铁路运输中级法院
var court_1123=[{"id":1124,"label":"上海铁路运输法院"}];
//江苏省高级人民法院
var court_1150=[{"id":1151,"label":"江苏省南京市中级人民法院"},{"id":1167,"label":"江苏省无锡市中级人民法院"},{"id":1177,"label":"江苏省徐州市中级人民法院"},{"id":1189,"label":"江苏省常州市中级人民法院"},{"id":1197,"label":"江苏省苏州市中级人民法院"},{"id":1209,"label":"江苏省南通市中级人民法院"},{"id":1218,"label":"江苏省连云港市中级人民法院"},{"id":1227,"label":"江苏省淮安市中级人民法院"},{"id":1237,"label":"江苏省盐城市中级人民法院"},{"id":1247,"label":"江苏省扬州市中级人民法院"},{"id":1255,"label":"江苏省镇江市中级人民法院"},{"id":1262,"label":"江苏省泰州市中级人民法院"},{"id":1269,"label":"江苏省宿迁市中级人民法院"},{"id":1125,"label":"南京铁路运输法院"},{"id":1130,"label":"徐州铁路运输法院"}];
//江苏省南京市中级人民法院
var court_1151=[{"id":1152,"label":"南京市玄武区人民法院"},{"id":1154,"label":"南京市秦淮区人民法院"},{"id":1155,"label":"南京市建邺区人民法院"},{"id":1156,"label":"南京市鼓楼区人民法院"},{"id":1158,"label":"南京市浦口区人民法院"},{"id":1160,"label":"南京市栖霞区人民法院"},{"id":1161,"label":"南京市雨花台区人民法院"},{"id":1162,"label":"南京市江宁区人民法院"},{"id":1164,"label":"南京市六合区人民法院"},{"id":1165,"label":"南京市溧水区人民法院"},{"id":1166,"label":"南京市高淳区人民法院"},{"id":5035,"label":"江宁经济技术开发区人民法院"}];
//江苏省无锡市中级人民法院
var court_1167=[{"id":1171,"label":"无锡市惠山区人民法院"},{"id":1172,"label":"无锡市滨湖区人民法院"},{"id":1290,"label":"无锡市梁溪区人民法院"},{"id":1291,"label":"无锡市新吴区人民法院"},{"id":1173,"label":"江阴市人民法院"},{"id":1174,"label":"宜兴市人民法院"},{"id":1175,"label":"无锡市锡山区人民法院"},{"id":1176,"label":"无锡高新技术产业开发区人民法院"}];
//江苏省徐州市中级人民法院
var court_1177=[{"id":1178,"label":"徐州市鼓楼区人民法院"},{"id":1179,"label":"徐州市云龙区人民法院"},{"id":1181,"label":"徐州市贾汪区人民法院"},{"id":1182,"label":"徐州市泉山区人民法院"},{"id":1183,"label":"新沂市人民法院"},{"id":1184,"label":"丰县人民法院"},{"id":1185,"label":"沛县人民法院"},{"id":1186,"label":"徐州市铜山区人民法院"},{"id":1187,"label":"睢宁县人民法院"},{"id":1188,"label":"邳州市人民法院"},{"id":1280,"label":"徐州经济技术开发区人民法院"}];
//江苏省常州市中级人民法院
var court_1189=[{"id":1190,"label":"常州市天宁区人民法院"},{"id":1191,"label":"常州市钟楼区人民法院"},{"id":1193,"label":"常州市新北区人民法院"},{"id":1194,"label":"常州市武进区人民法院"},{"id":1195,"label":"常州市金坛区人民法院"},{"id":1196,"label":"溧阳市人民法院"},{"id":1283,"label":"常州高新技术产业开发区人民法院"},{"id":1289,"label":"常州经济开发区人民法院"}];
//江苏省苏州市中级人民法院
var court_1197=[{"id":1201,"label":"苏州市虎丘区人民法院"},{"id":1202,"label":"张家港市人民法院"},{"id":1203,"label":"常熟市人民法院"},{"id":1204,"label":"昆山市人民法院"},{"id":1205,"label":"太仓市人民法院"},{"id":1206,"label":"苏州市吴中区人民法院"},{"id":1207,"label":"苏州市吴江区人民法院"},{"id":1208,"label":"苏州市相城区人民法院"},{"id":1275,"label":"苏州工业园区人民法院"},{"id":5002,"label":"苏州高新技术产业开发区人民法院"},{"id":1279,"label":"苏州市姑苏区人民法院"}];
//江苏省南通市中级人民法院
var court_1209=[{"id":1210,"label":"南通市崇川区人民法院"},{"id":1211,"label":"南通市港闸区人民法院"},{"id":1212,"label":"启东市人民法院"},{"id":1213,"label":"如皋市人民法院"},{"id":1214,"label":"海安县人民法院"},{"id":1215,"label":"如东县人民法院"},{"id":1216,"label":"南通市通州区人民法院"},{"id":1217,"label":"海门市人民法院"},{"id":1276,"label":"南通经济技术开发区人民法院"}];
//江苏省连云港市中级人民法院
var court_1218=[{"id":1219,"label":"连云港市连云区人民法院"},{"id":1222,"label":"连云港市海州区人民法院"},{"id":1223,"label":"连云港市赣榆区人民法院"},{"id":1224,"label":"东海县人民法院"},{"id":1225,"label":"灌云县人民法院"},{"id":1226,"label":"灌南县人民法院"},{"id":1285,"label":"连云港经济技术开发区人民法院"}];
//江苏省淮安市中级人民法院
var court_1227=[{"id":1230,"label":"淮安市淮安区人民法院"},{"id":1232,"label":"淮安市淮阴区人民法院"},{"id":1233,"label":"涟水县人民法院"},{"id":1234,"label":"淮安市洪泽区人民法院"},{"id":1235,"label":"盱眙县人民法院"},{"id":1236,"label":"金湖县人民法院"},{"id":1282,"label":"淮安经济技术开发区人民法院"},{"id":1292,"label":"淮安市清江浦区人民法院"}];
//江苏省盐城市中级人民法院
var court_1237=[{"id":1238,"label":"盐城市亭湖区人民法院"},{"id":1239,"label":"盐城市盐都区人民法院"},{"id":1240,"label":"东台市人民法院"},{"id":1241,"label":"响水县人民法院"},{"id":1242,"label":"滨海县人民法院"},{"id":1243,"label":"阜宁县人民法院"},{"id":1244,"label":"射阳县人民法院"},{"id":1245,"label":"建湖县人民法院"},{"id":1246,"label":"盐城市大丰区人民法院"},{"id":1286,"label":"盐城经济技术开发区人民法院"}];
//江苏省扬州市中级人民法院
var court_1247=[{"id":1248,"label":"扬州市广陵区人民法院"},{"id":1250,"label":"仪征市人民法院"},{"id":1251,"label":"高邮市人民法院"},{"id":1252,"label":"宝应县人民法院"},{"id":1253,"label":"扬州市邗江区人民法院"},{"id":1254,"label":"扬州市江都区人民法院"},{"id":1284,"label":"扬州经济技术开发区人民法院"}];
//江苏省镇江市中级人民法院
var court_1255=[{"id":1256,"label":"镇江市京口区人民法院"},{"id":1257,"label":"镇江市润州区人民法院"},{"id":1258,"label":"丹阳市人民法院"},{"id":1259,"label":"镇江市丹徒区人民法院"},{"id":1260,"label":"句容市人民法院"},{"id":1261,"label":"扬中市人民法院"},{"id":1278,"label":"镇江经济开发区人民法院"}];
//江苏省泰州市中级人民法院
var court_1262=[{"id":1263,"label":"泰州市海陵区人民法院"},{"id":1264,"label":"兴化市人民法院"},{"id":1265,"label":"靖江市人民法院"},{"id":1266,"label":"泰兴市人民法院"},{"id":1267,"label":"泰州市姜堰区人民法院"},{"id":1268,"label":"泰州市高港区人民法院"},{"id":1281,"label":"泰州医药高新技术产业开发区人民法院"}];
//江苏省宿迁市中级人民法院
var court_1269=[{"id":1270,"label":"宿迁市宿城区人民法院"},{"id":1271,"label":"宿迁市宿豫区人民法院"},{"id":1272,"label":"泗阳县人民法院"},{"id":1273,"label":"泗洪县人民法院"},{"id":1274,"label":"沭阳县人民法院"}];
//浙江省高级人民法院
var court_1300=[{"id":1301,"label":"浙江省杭州市中级人民法院"},{"id":1315,"label":"浙江省宁波市中级人民法院"},{"id":1327,"label":"浙江省温州市中级人民法院"},{"id":1339,"label":"浙江省嘉兴市中级人民法院"},{"id":1347,"label":"浙江省湖州市中级人民法院"},{"id":1352,"label":"浙江省绍兴市中级人民法院"},{"id":1359,"label":"浙江省金华市中级人民法院"},{"id":1370,"label":"浙江省衢州市中级人民法院"},{"id":1377,"label":"浙江省舟山市中级人民法院"},{"id":1382,"label":"浙江省丽水市中级人民法院"},{"id":1392,"label":"浙江省台州市中级人民法院"},{"id":1402,"label":"宁波海事法院"}];
//浙江省杭州市中级人民法院
var court_1301=[{"id":1302,"label":"杭州市上城区人民法院"},{"id":1303,"label":"杭州市下城区人民法院"},{"id":1304,"label":"杭州市江干区人民法院"},{"id":1305,"label":"杭州市拱墅区人民法院"},{"id":1306,"label":"杭州市西湖区人民法院"},{"id":1307,"label":"杭州市滨江区人民法院"},{"id":1308,"label":"杭州市萧山区人民法院"},{"id":1309,"label":"桐庐县人民法院"},{"id":1310,"label":"杭州市富阳区人民法院"},{"id":1311,"label":"杭州市临安区人民法院"},{"id":1312,"label":"杭州市余杭区人民法院"},{"id":1313,"label":"建德市人民法院"},{"id":1314,"label":"淳安县人民法院"},{"id":1404,"label":"杭州经济技术开发区人民法院"},{"id":5009,"label":"杭州互联网法院"},{"id":1127,"label":"杭州铁路运输法院"}];
//浙江省宁波市中级人民法院
var court_1315=[{"id":1316,"label":"宁波市海曙区人民法院"},{"id":1318,"label":"宁波市江北区人民法院"},{"id":1319,"label":"宁波市北仑区人民法院"},{"id":1320,"label":"宁波市镇海区人民法院"},{"id":1321,"label":"余姚市人民法院"},{"id":1322,"label":"慈溪市人民法院"},{"id":1323,"label":"宁波市奉化区人民法院"},{"id":1324,"label":"象山县人民法院"},{"id":1325,"label":"宁海县人民法院"},{"id":1326,"label":"宁波市鄞州区人民法院"},{"id":5005,"label":"宁波高新技术产业开发区人民法院"}];
//浙江省温州市中级人民法院
var court_1327=[{"id":1328,"label":"温州市鹿城区人民法院"},{"id":1329,"label":"温州市龙湾区人民法院"},{"id":1330,"label":"温州市瓯海区人民法院"},{"id":1331,"label":"瑞安市人民法院"},{"id":1332,"label":"温州市洞头区人民法院"},{"id":1333,"label":"乐清市人民法院"},{"id":1334,"label":"永嘉县人民法院"},{"id":1335,"label":"平阳县人民法院"},{"id":1336,"label":"苍南县人民法院"},{"id":1337,"label":"文成县人民法院"},{"id":1338,"label":"泰顺县人民法院"}];
//浙江省嘉兴市中级人民法院
var court_1339=[{"id":1340,"label":"嘉兴市南湖区人民法院"},{"id":1341,"label":"嘉兴市秀洲区人民法院"},{"id":1342,"label":"海宁市人民法院"},{"id":1343,"label":"平湖市人民法院"},{"id":1344,"label":"嘉善县人民法院"},{"id":1345,"label":"海盐县人民法院"},{"id":1346,"label":"桐乡市人民法院"}];
//浙江省湖州市中级人民法院
var court_1347=[{"id":1348,"label":"湖州市吴兴区人民法院"},{"id":1349,"label":"德清县人民法院"},{"id":1350,"label":"长兴县人民法院"},{"id":1351,"label":"安吉县人民法院"},{"id":1403,"label":"湖州市南浔区人民法院"},{"id":5036,"label":"湖州南太湖新区人民法院"}];
//浙江省绍兴市中级人民法院
var court_1352=[{"id":1353,"label":"绍兴市越城区人民法院"},{"id":1354,"label":"诸暨市人民法院"},{"id":1355,"label":"绍兴市柯桥区人民法院"},{"id":1356,"label":"绍兴市上虞区人民法院"},{"id":1357,"label":"嵊州市人民法院"},{"id":1358,"label":"新昌县人民法院"}];
//浙江省金华市中级人民法院
var court_1359=[{"id":1360,"label":"金华市婺城区人民法院"},{"id":1361,"label":"金华市金东区人民法院"},{"id":1362,"label":"兰溪市人民法院"},{"id":1363,"label":"东阳市人民法院"},{"id":1364,"label":"义乌市人民法院"},{"id":1366,"label":"永康市人民法院"},{"id":1367,"label":"武义县人民法院"},{"id":1368,"label":"浦江县人民法院"},{"id":1369,"label":"磐安县人民法院"}];
//浙江省衢州市中级人民法院
var court_1370=[{"id":1371,"label":"衢州市柯城区人民法院"},{"id":1372,"label":"江山市人民法院"},{"id":1373,"label":"衢州市衢江区人民法院"},{"id":1374,"label":"常山县人民法院"},{"id":1375,"label":"开化县人民法院"},{"id":1376,"label":"龙游县人民法院"}];
//浙江省舟山市中级人民法院
var court_1377=[{"id":1378,"label":"舟山市定海区人民法院"},{"id":1379,"label":"舟山市普陀区人民法院"},{"id":1380,"label":"岱山县人民法院"},{"id":1381,"label":"嵊泗县人民法院"}];
//浙江省丽水市中级人民法院
var court_1382=[{"id":1383,"label":"丽水市莲都区人民法院"},{"id":1384,"label":"龙泉市人民法院"},{"id":1385,"label":"青田县人民法院"},{"id":1386,"label":"云和县人民法院"},{"id":1387,"label":"庆元县人民法院"},{"id":1388,"label":"缙云县人民法院"},{"id":1389,"label":"遂昌县人民法院"},{"id":1390,"label":"松阳县人民法院"},{"id":1391,"label":"景宁畲族自治县人民法院"}];
//浙江省台州市中级人民法院
var court_1392=[{"id":1393,"label":"台州市椒江区人民法院"},{"id":1394,"label":"台州市黄岩区人民法院"},{"id":1395,"label":"台州市路桥区人民法院"},{"id":1396,"label":"临海市人民法院"},{"id":1397,"label":"温岭市人民法院"},{"id":1398,"label":"仙居县人民法院"},{"id":1399,"label":"天台县人民法院"},{"id":1400,"label":"三门县人民法院"},{"id":1401,"label":"玉环市人民法院"}];
//安徽省高级人民法院
var court_1451=[{"id":1452,"label":"安徽省合肥市中级人民法院"},{"id":1461,"label":"安徽省芜湖市中级人民法院"},{"id":1469,"label":"安徽省蚌埠市中级人民法院"},{"id":1477,"label":"安徽省淮南市中级人民法院"},{"id":1484,"label":"安徽省马鞍山市中级人民法院"},{"id":1489,"label":"安徽省淮北市中级人民法院"},{"id":1494,"label":"安徽省铜陵市中级人民法院"},{"id":1499,"label":"安徽省安庆市中级人民法院"},{"id":1511,"label":"安徽省黄山市中级人民法院"},{"id":1519,"label":"安徽省阜阳市中级人民法院"},{"id":1531,"label":"安徽省宿州市中级人民法院"},{"id":1537,"label":"安徽省滁州市中级人民法院"},{"id":1546,"label":"安徽省六安市中级人民法院"},{"id":1554,"label":"安徽省宣城市中级人民法院"},{"id":1568,"label":"安徽省池州市中级人民法院"},{"id":1573,"label":"安徽省亳州市中级人民法院"}];
//安徽省合肥市中级人民法院
var court_1452=[{"id":1453,"label":"合肥市瑶海区人民法院"},{"id":1454,"label":"合肥市庐阳区人民法院"},{"id":1455,"label":"合肥市蜀山区人民法院"},{"id":1456,"label":"合肥市包河区人民法院"},{"id":1457,"label":"长丰县人民法院"},{"id":1458,"label":"肥东县人民法院"},{"id":1459,"label":"肥西县人民法院"},{"id":1460,"label":"合肥高新技术产业开发区人民法院"},{"id":1563,"label":"巢湖市人民法院"},{"id":1564,"label":"庐江县人民法院"},{"id":1126,"label":"合肥铁路运输法院"}];
//安徽省芜湖市中级人民法院
var court_1461=[{"id":1462,"label":"芜湖市镜湖区人民法院"},{"id":1463,"label":"芜湖市弋江区人民法院"},{"id":1465,"label":"芜湖市鸠江区人民法院"},{"id":1466,"label":"芜湖县人民法院"},{"id":1467,"label":"繁昌县人民法院"},{"id":1468,"label":"南陵县人民法院"},{"id":1575,"label":"芜湖市三山区人民法院"},{"id":1565,"label":"无为县人民法院"},{"id":1578,"label":"芜湖经济技术开发区人民法院"}];
//安徽省蚌埠市中级人民法院
var court_1469=[{"id":1470,"label":"蚌埠市龙子湖区人民法院"},{"id":1471,"label":"蚌埠市蚌山区人民法院"},{"id":1472,"label":"蚌埠市禹会区人民法院"},{"id":1473,"label":"蚌埠市淮上区人民法院"},{"id":1474,"label":"怀远县人民法院"},{"id":1475,"label":"五河县人民法院"},{"id":1476,"label":"固镇县人民法院"}];
//安徽省淮南市中级人民法院
var court_1477=[{"id":1478,"label":"淮南市大通区人民法院"},{"id":1479,"label":"淮南市田家庵区人民法院"},{"id":1480,"label":"淮南市谢家集区人民法院"},{"id":1481,"label":"淮南市八公山区人民法院"},{"id":1482,"label":"淮南市潘集区人民法院"},{"id":1483,"label":"凤台县人民法院"},{"id":1548,"label":"寿县人民法院"}];
//安徽省马鞍山市中级人民法院
var court_1484=[{"id":1486,"label":"马鞍山市花山区人民法院"},{"id":1487,"label":"马鞍山市雨山区人民法院"},{"id":1488,"label":"当涂县人民法院"},{"id":1566,"label":"含山县人民法院"},{"id":1567,"label":"和县人民法院"},{"id":1579,"label":"马鞍山市博望区人民法院"}];
//安徽省淮北市中级人民法院
var court_1489=[{"id":1490,"label":"淮北市杜集区人民法院"},{"id":1491,"label":"淮北市相山区人民法院"},{"id":1492,"label":"淮北市烈山区人民法院"},{"id":1493,"label":"濉溪县人民法院"}];
//安徽省铜陵市中级人民法院
var court_1494=[{"id":1581,"label":"铜陵市铜官区人民法院"},{"id":1497,"label":"铜陵市郊区人民法院"},{"id":1498,"label":"铜陵市义安区人民法院"},{"id":1505,"label":"枞阳县人民法院"}];
//安徽省安庆市中级人民法院
var court_1499=[{"id":1500,"label":"安庆市迎江区人民法院"},{"id":1501,"label":"安庆市大观区人民法院"},{"id":1502,"label":"安庆市宜秀区人民法院"},{"id":1503,"label":"桐城市人民法院"},{"id":1504,"label":"怀宁县人民法院"},{"id":1506,"label":"潜山县人民法院"},{"id":1507,"label":"太湖县人民法院"},{"id":1508,"label":"宿松县人民法院"},{"id":1509,"label":"望江县人民法院"},{"id":1510,"label":"岳西县人民法院"}];
//安徽省黄山市中级人民法院
var court_1511=[{"id":1512,"label":"黄山市黄山区人民法院"},{"id":1513,"label":"黄山市屯溪区人民法院"},{"id":1514,"label":"黄山市徽州区人民法院"},{"id":1515,"label":"歙县人民法院"},{"id":1516,"label":"休宁县人民法院"},{"id":1517,"label":"黟县人民法院"},{"id":1518,"label":"祁门县人民法院"}];
//安徽省阜阳市中级人民法院
var court_1519=[{"id":1520,"label":"阜阳市颍州区人民法院"},{"id":1521,"label":"界首市人民法院"},{"id":1522,"label":"临泉县人民法院"},{"id":1523,"label":"太和县人民法院"},{"id":1526,"label":"阜南县人民法院"},{"id":1527,"label":"颍上县人民法院"},{"id":1529,"label":"阜阳市颍东区人民法院"},{"id":1530,"label":"阜阳市颍泉区人民法院"}];
//安徽省宿州市中级人民法院
var court_1531=[{"id":1532,"label":"宿州市埇桥区人民法院"},{"id":1533,"label":"砀山县人民法院"},{"id":1534,"label":"萧县人民法院"},{"id":1535,"label":"灵璧县人民法院"},{"id":1536,"label":"泗县人民法院"}];
//安徽省滁州市中级人民法院
var court_1537=[{"id":1538,"label":"滁州市琅琊区人民法院"},{"id":1539,"label":"天长市人民法院"},{"id":1540,"label":"来安县人民法院"},{"id":1541,"label":"全椒县人民法院"},{"id":1542,"label":"定远县人民法院"},{"id":1543,"label":"凤阳县人民法院"},{"id":1544,"label":"明光市人民法院"},{"id":1545,"label":"滁州市南谯区人民法院"}];
//安徽省六安市中级人民法院
var court_1546=[{"id":1547,"label":"六安市金安区人民法院"},{"id":1549,"label":"霍邱县人民法院"},{"id":1550,"label":"舒城县人民法院"},{"id":1551,"label":"金寨县人民法院"},{"id":1552,"label":"霍山县人民法院"},{"id":1553,"label":"六安市裕安区人民法院"},{"id":1580,"label":"六安市叶集区人民法院"}];
//安徽省宣城市中级人民法院
var court_1554=[{"id":1555,"label":"宣城市宣州区人民法院"},{"id":1556,"label":"郎溪县人民法院"},{"id":1557,"label":"广德县人民法院"},{"id":1558,"label":"宁国市人民法院"},{"id":1559,"label":"绩溪县人民法院"},{"id":1560,"label":"旌德县人民法院"},{"id":1561,"label":"泾县人民法院"}];
//安徽省池州市中级人民法院
var court_1568=[{"id":1569,"label":"池州市贵池区人民法院"},{"id":1570,"label":"东至县人民法院"},{"id":1571,"label":"石台县人民法院"},{"id":1572,"label":"青阳县人民法院"},{"id":1577,"label":"九华山风景区人民法院"}];
//安徽省亳州市中级人民法院
var court_1573=[{"id":1574,"label":"亳州市谯城区人民法院"},{"id":1524,"label":"涡阳县人民法院"},{"id":1525,"label":"蒙城县人民法院"},{"id":1528,"label":"利辛县人民法院"}];
//福建省高级人民法院
var court_1600=[{"id":1601,"label":"福建省福州市中级人民法院"},{"id":1615,"label":"福建省厦门市中级人民法院"},{"id":1623,"label":"福建省莆田市中级人民法院"},{"id":1628,"label":"福建省三明市中级人民法院"},{"id":1641,"label":"福建省泉州市中级人民法院"},{"id":1652,"label":"福建省漳州市中级人民法院"},{"id":1664,"label":"福建省南平市中级人民法院"},{"id":1675,"label":"福建省宁德市中级人民法院"},{"id":1685,"label":"福建省龙岩市中级人民法院"},{"id":1693,"label":"厦门海事法院"},{"id":1128,"label":"福州铁路运输法院"}];
//福建省福州市中级人民法院
var court_1601=[{"id":1602,"label":"福州市鼓楼区人民法院"},{"id":1603,"label":"福州市台江区人民法院"},{"id":1604,"label":"福州市仓山区人民法院"},{"id":1605,"label":"福州市马尾区人民法院"},{"id":1606,"label":"福州市晋安区人民法院"},{"id":1607,"label":"福清市人民法院"},{"id":1608,"label":"闽侯县人民法院"},{"id":1609,"label":"连江县人民法院"},{"id":1610,"label":"罗源县人民法院"},{"id":1611,"label":"闽清县人民法院"},{"id":1612,"label":"永泰县人民法院"},{"id":1613,"label":"长乐市人民法院"},{"id":1614,"label":"平潭县人民法院"},{"id":1699,"label":"平潭综合实验区人民法院"}];
//福建省厦门市中级人民法院
var court_1615=[{"id":1617,"label":"厦门市思明区人民法院"},{"id":1620,"label":"厦门市湖里区人民法院"},{"id":1621,"label":"厦门市集美区人民法院"},{"id":1622,"label":"厦门市同安区人民法院"},{"id":1697,"label":"厦门市海沧区人民法院"},{"id":1698,"label":"厦门市翔安区人民法院"}];
//福建省莆田市中级人民法院
var court_1623=[{"id":1624,"label":"莆田市城厢区人民法院"},{"id":1625,"label":"莆田市涵江区人民法院"},{"id":1627,"label":"仙游县人民法院"},{"id":1695,"label":"莆田市荔城区人民法院"},{"id":1696,"label":"莆田市秀屿区人民法院"}];
//福建省三明市中级人民法院
var court_1628=[{"id":1629,"label":"三明市梅列区人民法院"},{"id":1630,"label":"三明市三元区人民法院"},{"id":1631,"label":"永安市人民法院"},{"id":1632,"label":"明溪县人民法院"},{"id":1633,"label":"清流县人民法院"},{"id":1634,"label":"宁化县人民法院"},{"id":1635,"label":"大田县人民法院"},{"id":1636,"label":"尤溪县人民法院"},{"id":1637,"label":"沙县人民法院"},{"id":1638,"label":"将乐县人民法院"},{"id":1639,"label":"泰宁县人民法院"},{"id":1640,"label":"建宁县人民法院"}];
//福建省泉州市中级人民法院
var court_1641=[{"id":1642,"label":"泉州市鲤城区人民法院"},{"id":1643,"label":"泉州市丰泽区人民法院"},{"id":1644,"label":"泉州市洛江区人民法院"},{"id":1645,"label":"石狮市人民法院"},{"id":1646,"label":"泉州市泉港区人民法院"},{"id":1647,"label":"晋江市人民法院"},{"id":1648,"label":"南安市人民法院"},{"id":1649,"label":"安溪县人民法院"},{"id":1650,"label":"永春县人民法院"},{"id":1651,"label":"德化县人民法院"},{"id":1694,"label":"惠安县人民法院"}];
//福建省漳州市中级人民法院
var court_1652=[{"id":1653,"label":"漳州市芗城区人民法院"},{"id":1654,"label":"漳州市龙文区人民法院"},{"id":1655,"label":"龙海市人民法院"},{"id":1656,"label":"云霄县人民法院"},{"id":1657,"label":"漳浦县人民法院"},{"id":1658,"label":"诏安县人民法院"},{"id":1659,"label":"长泰县人民法院"},{"id":1660,"label":"东山县人民法院"},{"id":1661,"label":"南靖县人民法院"},{"id":1662,"label":"平和县人民法院"},{"id":1663,"label":"华安县人民法院"}];
//福建省南平市中级人民法院
var court_1664=[{"id":1665,"label":"南平市延平区人民法院"},{"id":1666,"label":"邵武市人民法院"},{"id":1667,"label":"顺昌县人民法院"},{"id":1668,"label":"南平市建阳区人民法院"},{"id":1669,"label":"建瓯市人民法院"},{"id":1670,"label":"浦城县人民法院"},{"id":1671,"label":"武夷山市人民法院"},{"id":1672,"label":"光泽县人民法院"},{"id":1673,"label":"松溪县人民法院"},{"id":1674,"label":"政和县人民法院"}];
//福建省宁德市中级人民法院
var court_1675=[{"id":1676,"label":"宁德市蕉城区人民法院"},{"id":1677,"label":"福安市人民法院"},{"id":1678,"label":"福鼎市人民法院"},{"id":1679,"label":"霞浦县人民法院"},{"id":1680,"label":"古田县人民法院"},{"id":1681,"label":"屏南县人民法院"},{"id":1682,"label":"寿宁县人民法院"},{"id":1683,"label":"周宁县人民法院"},{"id":1684,"label":"柘荣县人民法院"}];
//福建省龙岩市中级人民法院
var court_1685=[{"id":1686,"label":"龙岩市新罗区人民法院"},{"id":1687,"label":"长汀县人民法院"},{"id":1688,"label":"龙岩市永定区人民法院"},{"id":1689,"label":"上杭县人民法院"},{"id":1690,"label":"武平县人民法院"},{"id":1691,"label":"漳平市人民法院"},{"id":1692,"label":"连城县人民法院"}];
//江西省高级人民法院
var court_1700=[{"id":1701,"label":"江西省南昌市中级人民法院"},{"id":1711,"label":"江西省景德镇市中级人民法院"},{"id":1716,"label":"江西省萍乡市中级人民法院"},{"id":1722,"label":"江西省九江市中级人民法院"},{"id":1736,"label":"江西省新余市中级人民法院"},{"id":1739,"label":"江西省鹰潭市中级人民法院"},{"id":1743,"label":"江西省赣州市中级人民法院"},{"id":1762,"label":"江西省宜春市中级人民法院"},{"id":1773,"label":"江西省上饶市中级人民法院"},{"id":1786,"label":"江西省吉安市中级人民法院"},{"id":1801,"label":"江西省抚州市中级人民法院"},{"id":1813,"label":"南昌铁路运输中级法院"}];
//江西省南昌市中级人民法院
var court_1701=[{"id":1702,"label":"南昌市东湖区人民法院"},{"id":1703,"label":"南昌市西湖区人民法院"},{"id":1704,"label":"南昌市青云谱区人民法院"},{"id":1705,"label":"南昌市湾里区人民法院"},{"id":1706,"label":"南昌市青山湖区人民法院"},{"id":1707,"label":"南昌县人民法院"},{"id":1708,"label":"南昌市新建区人民法院"},{"id":1709,"label":"安义县人民法院"},{"id":1710,"label":"进贤县人民法院"},{"id":1815,"label":"南昌高新技术产业开发区人民法院"},{"id":1816,"label":"南昌经济技术开发区人民法院"}];
//江西省景德镇市中级人民法院
var court_1711=[{"id":1712,"label":"景德镇市昌江区人民法院"},{"id":1713,"label":"景德镇市珠山区人民法院"},{"id":1714,"label":"乐平市人民法院"},{"id":1715,"label":"浮梁县人民法院"}];
//江西省萍乡市中级人民法院
var court_1716=[{"id":1717,"label":"萍乡市安源区人民法院"},{"id":1718,"label":"上栗县人民法院"},{"id":1719,"label":"芦溪县人民法院"},{"id":1720,"label":"萍乡市湘东区人民法院"},{"id":1721,"label":"莲花县人民法院"}];
//江西省九江市中级人民法院
var court_1722=[{"id":1723,"label":"九江市濂溪区人民法院"},{"id":1724,"label":"九江市浔阳区人民法院"},{"id":1725,"label":"瑞昌市人民法院"},{"id":1726,"label":"九江市柴桑区人民法院"},{"id":1727,"label":"武宁县人民法院"},{"id":1728,"label":"修水县人民法院"},{"id":1729,"label":"永修县人民法院"},{"id":1730,"label":"德安县人民法院"},{"id":1731,"label":"庐山市人民法院"},{"id":1732,"label":"都昌县人民法院"},{"id":1733,"label":"湖口县人民法院"},{"id":1734,"label":"彭泽县人民法院"},{"id":1735,"label":"共青城市人民法院"},{"id":1817,"label":"庐山人民法院"}];
//江西省新余市中级人民法院
var court_1736=[{"id":1737,"label":"新余市渝水区人民法院"},{"id":1738,"label":"分宜县人民法院"}];
//江西省鹰潭市中级人民法院
var court_1739=[{"id":1740,"label":"鹰潭市月湖区人民法院"},{"id":1741,"label":"贵溪市人民法院"},{"id":1742,"label":"鹰潭市余江区人民法院"}];
//江西省赣州市中级人民法院
var court_1743=[{"id":1744,"label":"赣州市章贡区人民法院"},{"id":1745,"label":"赣州市赣县区人民法院"},{"id":1746,"label":"赣州市南康区人民法院"},{"id":1747,"label":"信丰县人民法院"},{"id":1748,"label":"大余县人民法院"},{"id":1749,"label":"上犹县人民法院"},{"id":1750,"label":"崇义县人民法院"},{"id":1751,"label":"安远县人民法院"},{"id":1752,"label":"龙南县人民法院"},{"id":1753,"label":"定南县人民法院"},{"id":1754,"label":"全南县人民法院"},{"id":1755,"label":"宁都县人民法院"},{"id":1756,"label":"于都县人民法院"},{"id":1757,"label":"兴国县人民法院"},{"id":1758,"label":"瑞金市人民法院"},{"id":1759,"label":"会昌县人民法院"},{"id":1760,"label":"寻乌县人民法院"},{"id":1761,"label":"石城县人民法院"},{"id":1819,"label":"赣州经济技术开发区人民法院"}];
//江西省宜春市中级人民法院
var court_1762=[{"id":1763,"label":"宜春市袁州区人民法院"},{"id":1764,"label":"丰城市人民法院"},{"id":1765,"label":"樟树市人民法院"},{"id":1766,"label":"高安市人民法院"},{"id":1767,"label":"奉新县人民法院"},{"id":1768,"label":"万载县人民法院"},{"id":1769,"label":"上高县人民法院"},{"id":1770,"label":"宜丰县人民法院"},{"id":1771,"label":"靖安县人民法院"},{"id":1772,"label":"铜鼓县人民法院"}];
//江西省上饶市中级人民法院
var court_1773=[{"id":1774,"label":"上饶市信州区人民法院"},{"id":1775,"label":"上饶县人民法院"},{"id":1776,"label":"德兴市人民法院"},{"id":1777,"label":"上饶市广丰区人民法院"},{"id":1778,"label":"玉山县人民法院"},{"id":1779,"label":"铅山县人民法院"},{"id":1780,"label":"横峰县人民法院"},{"id":1781,"label":"弋阳县人民法院"},{"id":1782,"label":"余干县人民法院"},{"id":1783,"label":"鄱阳县人民法院"},{"id":1784,"label":"万年县人民法院"},{"id":1785,"label":"婺源县人民法院"}];
//江西省吉安市中级人民法院
var court_1786=[{"id":1787,"label":"吉安市吉州区人民法院"},{"id":1788,"label":"吉安市青原区人民法院"},{"id":1789,"label":"井冈山市人民法院"},{"id":1790,"label":"吉安县人民法院"},{"id":1791,"label":"吉水县人民法院"},{"id":1792,"label":"峡江县人民法院"},{"id":1793,"label":"新干县人民法院"},{"id":1794,"label":"永丰县人民法院"},{"id":1795,"label":"泰和县人民法院"},{"id":1796,"label":"遂川县人民法院"},{"id":1797,"label":"万安县人民法院"},{"id":1798,"label":"安福县人民法院"},{"id":1799,"label":"永新县人民法院"}];
//江西省抚州市中级人民法院
var court_1801=[{"id":1802,"label":"抚州市临川区人民法院"},{"id":1803,"label":"南城县人民法院"},{"id":1804,"label":"黎川县人民法院"},{"id":1805,"label":"南丰县人民法院"},{"id":1806,"label":"崇仁县人民法院"},{"id":1807,"label":"乐安县人民法院"},{"id":1808,"label":"宜黄县人民法院"},{"id":1809,"label":"金溪县人民法院"},{"id":1810,"label":"资溪县人民法院"},{"id":1811,"label":"抚州市东乡区人民法院"},{"id":1812,"label":"广昌县人民法院"}];
//南昌铁路运输中级法院
var court_1813=[{"id":1814,"label":"南昌铁路运输法院"}];
//山东省高级人民法院
var court_1850=[{"id":1851,"label":"山东省济南市中级人民法院"},{"id":1862,"label":"山东省青岛市中级人民法院"},{"id":1875,"label":"山东省淄博市中级人民法院"},{"id":1884,"label":"山东省枣庄市中级人民法院"},{"id":1891,"label":"山东省东营市中级人民法院"},{"id":1897,"label":"山东省烟台市中级人民法院"},{"id":1911,"label":"山东省潍坊市中级人民法院"},{"id":1924,"label":"山东省济宁市中级人民法院"},{"id":1937,"label":"山东省泰安市中级人民法院"},{"id":1944,"label":"山东省威海市中级人民法院"},{"id":1949,"label":"山东省日照市中级人民法院"},{"id":1954,"label":"山东省滨州市中级人民法院"},{"id":1962,"label":"山东省德州市中级人民法院"},{"id":1974,"label":"山东省聊城市中级人民法院"},{"id":1983,"label":"山东省临沂市中级人民法院"},{"id":1996,"label":"山东省菏泽市中级人民法院"},{"id":2006,"label":"济南铁路运输中级法院"},{"id":2010,"label":"青岛海事法院"}];
//山东省济南市中级人民法院
var court_1851=[{"id":1852,"label":"济南市历下区人民法院"},{"id":1853,"label":"济南市市中区人民法院"},{"id":1854,"label":"济南市槐荫区人民法院"},{"id":1855,"label":"济南市天桥区人民法院"},{"id":1856,"label":"济南市历城区人民法院"},{"id":1857,"label":"济南市章丘区人民法院"},{"id":1858,"label":"济南市长清区人民法院"},{"id":2012,"label":"济南市钢城区人民法院"},{"id":2013,"label":"济南市莱芜区人民法院"},{"id":1859,"label":"平阴县人民法院"},{"id":1860,"label":"商河县人民法院"},{"id":1861,"label":"济南市济阳区人民法院"},{"id":2015,"label":"济南高新技术产业开发区人民法院"}];
//山东省青岛市中级人民法院
var court_1862=[{"id":1863,"label":"青岛市市南区人民法院"},{"id":1864,"label":"青岛市市北区人民法院"},{"id":1866,"label":"青岛市李沧区人民法院"},{"id":1867,"label":"青岛市城阳区人民法院"},{"id":1868,"label":"青岛市黄岛区人民法院"},{"id":1869,"label":"青岛市崂山区人民法院"},{"id":1870,"label":"青岛市即墨区人民法院"},{"id":1871,"label":"胶州市人民法院"},{"id":1872,"label":"平度市人民法院"},{"id":1874,"label":"莱西市人民法院"}];
//山东省淄博市中级人民法院
var court_1875=[{"id":1876,"label":"淄博市淄川区人民法院"},{"id":1877,"label":"淄博市张店区人民法院"},{"id":1878,"label":"淄博市博山区人民法院"},{"id":1879,"label":"淄博市临淄区人民法院"},{"id":1880,"label":"淄博市周村区人民法院"},{"id":1881,"label":"桓台县人民法院"},{"id":1882,"label":"高青县人民法院"},{"id":1883,"label":"沂源县人民法院"},{"id":2014,"label":"淄博高新技术产业开发区人民法院"}];
//山东省枣庄市中级人民法院
var court_1884=[{"id":1885,"label":"枣庄市市中区人民法院"},{"id":1886,"label":"枣庄市薛城区人民法院"},{"id":1887,"label":"枣庄市峄城区人民法院"},{"id":1888,"label":"枣庄市台儿庄区人民法院"},{"id":1889,"label":"枣庄市山亭区人民法院"},{"id":1890,"label":"滕州市人民法院"}];
//山东省东营市中级人民法院
var court_1891=[{"id":1892,"label":"东营市东营区人民法院"},{"id":1893,"label":"东营市河口区人民法院"},{"id":1894,"label":"东营市垦利区人民法院"},{"id":1895,"label":"利津县人民法院"},{"id":1896,"label":"广饶县人民法院"},{"id":2024,"label":"东营经济技术开发区人民法院"}];
//山东省烟台市中级人民法院
var court_1897=[{"id":1898,"label":"烟台市芝罘区人民法院"},{"id":1899,"label":"烟台市福山区人民法院"},{"id":1900,"label":"烟台市莱山区人民法院"},{"id":1901,"label":"烟台市牟平区人民法院"},{"id":1902,"label":"烟台经济技术开发区人民法院"},{"id":1903,"label":"蓬莱市人民法院"},{"id":1904,"label":"龙口市人民法院"},{"id":1905,"label":"莱州市人民法院"},{"id":1906,"label":"招远市人民法院"},{"id":1907,"label":"栖霞市人民法院"},{"id":1908,"label":"莱阳市人民法院"},{"id":1909,"label":"海阳市人民法院"},{"id":1910,"label":"长岛县人民法院"},{"id":2025,"label":"烟台高新技术产业开发区人民法院"}];
//山东省潍坊市中级人民法院
var court_1911=[{"id":1912,"label":"潍坊市潍城区人民法院"},{"id":1913,"label":"潍坊市寒亭区人民法院"},{"id":1914,"label":"潍坊市坊子区人民法院"},{"id":1915,"label":"诸城市人民法院"},{"id":1916,"label":"青州市人民法院"},{"id":1917,"label":"安丘市人民法院"},{"id":1918,"label":"寿光市人民法院"},{"id":1919,"label":"临朐县人民法院"},{"id":1920,"label":"昌乐县人民法院"},{"id":1921,"label":"昌邑市人民法院"},{"id":1922,"label":"高密市人民法院"},{"id":1923,"label":"潍坊市奎文区人民法院"},{"id":2022,"label":"潍坊高新技术产业开发区人民法院"},{"id":2030,"label":"潍坊滨海经济技术开发区人民法院"}];
//山东省济宁市中级人民法院
var court_1924=[{"id":1926,"label":"济宁市任城区人民法院"},{"id":1927,"label":"曲阜市人民法院"},{"id":1928,"label":"济宁市兖州区人民法院"},{"id":1929,"label":"邹城市人民法院"},{"id":1930,"label":"微山县人民法院"},{"id":1931,"label":"鱼台县人民法院"},{"id":1932,"label":"金乡县人民法院"},{"id":1933,"label":"嘉祥县人民法院"},{"id":1934,"label":"汶上县人民法院"},{"id":1935,"label":"泗水县人民法院"},{"id":1936,"label":"梁山县人民法院"},{"id":2019,"label":"济宁高新技术产业开发区人民法院"}];
//山东省泰安市中级人民法院
var court_1937=[{"id":1938,"label":"泰安市泰山区人民法院"},{"id":1939,"label":"泰安市岱岳区人民法院"},{"id":1940,"label":"新泰市人民法院"},{"id":1941,"label":"宁阳县人民法院"},{"id":1942,"label":"肥城市人民法院"},{"id":1943,"label":"东平县人民法院"},{"id":2016,"label":"泰安高新技术产业开发区人民法院"}];
//山东省威海市中级人民法院
var court_1944=[{"id":1945,"label":"威海市环翠区人民法院"},{"id":1946,"label":"荣成市人民法院"},{"id":1947,"label":"威海市文登区人民法院"},{"id":1948,"label":"乳山市人民法院"},{"id":2021,"label":"威海火炬高技术产业开发区人民法院"},{"id":2020,"label":"威海经济技术开发区人民法院"}];
//山东省日照市中级人民法院
var court_1949=[{"id":1950,"label":"日照市东港区人民法院"},{"id":1951,"label":"莒县人民法院"},{"id":1952,"label":"五莲县人民法院"},{"id":1953,"label":"日照经济技术开发区人民法院"},{"id":2017,"label":"日照市岚山区人民法院"}];
//山东省滨州市中级人民法院
var court_1954=[{"id":1955,"label":"滨州市滨城区人民法院"},{"id":1956,"label":"惠民县人民法院"},{"id":1957,"label":"阳信县人民法院"},{"id":1958,"label":"无棣县人民法院"},{"id":1959,"label":"滨州市沾化区人民法院"},{"id":1960,"label":"博兴县人民法院"},{"id":1961,"label":"邹平市人民法院"},{"id":2026,"label":"滨州经济技术开发区人民法院"}];
//山东省德州市中级人民法院
var court_1962=[{"id":1963,"label":"德州市德城区人民法院"},{"id":1964,"label":"乐陵市人民法院"},{"id":1965,"label":"德州市陵城区人民法院"},{"id":1966,"label":"平原县人民法院"},{"id":1967,"label":"夏津县人民法院"},{"id":1968,"label":"武城县人民法院"},{"id":1969,"label":"齐河县人民法院"},{"id":1970,"label":"禹城市人民法院"},{"id":1971,"label":"临邑县人民法院"},{"id":1972,"label":"宁津县人民法院"},{"id":1973,"label":"庆云县人民法院"},{"id":2023,"label":"德州经济开发区人民法院"}];
//山东省聊城市中级人民法院
var court_1974=[{"id":1975,"label":"聊城市东昌府区人民法院"},{"id":1976,"label":"临清市人民法院"},{"id":1977,"label":"阳谷县人民法院"},{"id":1978,"label":"莘县人民法院"},{"id":1979,"label":"茌平县人民法院"},{"id":1980,"label":"东阿县人民法院"},{"id":1981,"label":"冠县人民法院"},{"id":1982,"label":"高唐县人民法院"},{"id":2027,"label":"聊城经济技术开发区人民法院"}];
//山东省临沂市中级人民法院
var court_1983=[{"id":1984,"label":"临沂市兰山区人民法院"},{"id":1985,"label":"郯城县人民法院"},{"id":1986,"label":"兰陵县人民法院"},{"id":1987,"label":"莒南县人民法院"},{"id":1988,"label":"沂水县人民法院"},{"id":1989,"label":"蒙阴县人民法院"},{"id":1990,"label":"平邑县人民法院"},{"id":1991,"label":"费县人民法院"},{"id":1992,"label":"沂南县人民法院"},{"id":1993,"label":"临沭县人民法院"},{"id":1994,"label":"临沂市罗庄区人民法院"},{"id":1995,"label":"临沂市河东区人民法院"},{"id":2028,"label":"临沂经济技术开发区人民法院"},{"id":2029,"label":"临沂高新技术产业开发区人民法院"}];
//山东省菏泽市中级人民法院
var court_1996=[{"id":1997,"label":"菏泽市牡丹区人民法院"},{"id":1999,"label":"菏泽市定陶区人民法院"},{"id":1998,"label":"曹县人民法院"},{"id":2000,"label":"成武县人民法院"},{"id":2001,"label":"单县人民法院"},{"id":2002,"label":"巨野县人民法院"},{"id":2003,"label":"郓城县人民法院"},{"id":2004,"label":"鄄城县人民法院"},{"id":2005,"label":"东明县人民法院"},{"id":2018,"label":"菏泽经济开发区人民法院"}];
//济南铁路运输中级法院
var court_2006=[{"id":2007,"label":"济南铁路运输法院"},{"id":2008,"label":"青岛铁路运输法院"}];
//河南省高级人民法院
var court_2050=[{"id":2051,"label":"河南省郑州市中级人民法院"},{"id":2065,"label":"河南省开封市中级人民法院"},{"id":2076,"label":"河南省洛阳市中级人民法院"},{"id":2093,"label":"河南省平顶山市中级人民法院"},{"id":2105,"label":"河南省安阳市中级人民法院"},{"id":2115,"label":"河南省鹤壁市中级人民法院"},{"id":2121,"label":"河南省新乡市中级人民法院"},{"id":2134,"label":"河南省焦作市中级人民法院"},{"id":2146,"label":"河南省濮阳市中级人民法院"},{"id":2153,"label":"河南省许昌市中级人民法院"},{"id":2159,"label":"河南省漯河市中级人民法院"},{"id":2164,"label":"河南省三门峡市中级人民法院"},{"id":2171,"label":"河南省商丘市中级人民法院"},{"id":2181,"label":"河南省周口市中级人民法院"},{"id":2192,"label":"河南省驻马店市中级人民法院"},{"id":2203,"label":"河南省南阳市中级人民法院"},{"id":2217,"label":"河南省信阳市中级人民法院"},{"id":2228,"label":"郑州铁路运输中级法院"},{"id":2235,"label":"河南省济源中级人民法院"}];
//河南省郑州市中级人民法院
var court_2051=[{"id":2052,"label":"郑州市中原区人民法院"},{"id":2053,"label":"郑州市二七区人民法院"},{"id":2054,"label":"郑州市金水区人民法院"},{"id":2055,"label":"郑州市上街区人民法院"},{"id":2056,"label":"郑州市惠济区人民法院"},{"id":2057,"label":"郑州市管城回族区人民法院"},{"id":2058,"label":"巩义市人民法院"},{"id":2059,"label":"荥阳市人民法院"},{"id":2060,"label":"中牟县人民法院"},{"id":2061,"label":"新郑市人民法院"},{"id":2062,"label":"登封市人民法院"},{"id":2063,"label":"新密市人民法院"},{"id":2238,"label":"郑州高新技术产业开发区人民法院"},{"id":2241,"label":"郑州航空港经济综合实验区人民法院"}];
//河南省开封市中级人民法院
var court_2065=[{"id":2066,"label":"开封市龙亭区人民法院"},{"id":2067,"label":"开封市顺河回族区人民法院"},{"id":2068,"label":"开封市鼓楼区人民法院"},{"id":2069,"label":"开封市禹王台区人民法院"},{"id":2070,"label":"开封市金明区人民法院"},{"id":2071,"label":"杞县人民法院"},{"id":2072,"label":"通许县人民法院"},{"id":2073,"label":"尉氏县人民法院"},{"id":2074,"label":"开封市祥符区人民法院"},{"id":2075,"label":"兰考县人民法院"}];
//河南省洛阳市中级人民法院
var court_2076=[{"id":2077,"label":"洛阳市老城区人民法院"},{"id":2078,"label":"洛阳市西工区人民法院"},{"id":2079,"label":"洛阳市瀍河回族区人民法院"},{"id":2080,"label":"洛阳市涧西区人民法院"},{"id":2081,"label":"洛阳市吉利区人民法院"},{"id":2082,"label":"洛阳市洛龙区人民法院"},{"id":2083,"label":"偃师市人民法院"},{"id":2084,"label":"孟津县人民法院"},{"id":2085,"label":"新安县人民法院"},{"id":2086,"label":"栾川县人民法院"},{"id":2087,"label":"嵩县人民法院"},{"id":2088,"label":"汝阳县人民法院"},{"id":2089,"label":"宜阳县人民法院"},{"id":2090,"label":"洛宁县人民法院"},{"id":2091,"label":"伊川县人民法院"},{"id":2092,"label":"洛阳高新技术产业开发区人民法院"}];
//河南省平顶山市中级人民法院
var court_2093=[{"id":2094,"label":"舞钢市人民法院"},{"id":2095,"label":"平顶山市新华区人民法院"},{"id":2096,"label":"平顶山市卫东区人民法院"},{"id":2098,"label":"平顶山市湛河区人民法院"},{"id":2099,"label":"汝州市人民法院"},{"id":2100,"label":"宝丰县人民法院"},{"id":2101,"label":"叶县人民法院"},{"id":2102,"label":"鲁山县人民法院"},{"id":2103,"label":"郏县人民法院"},{"id":2239,"label":"平顶山市石龙区人民法院"}];
//河南省安阳市中级人民法院
var court_2105=[{"id":2106,"label":"安阳市文峰区人民法院"},{"id":2107,"label":"安阳市北关区人民法院"},{"id":2108,"label":"安阳市殷都区人民法院"},{"id":2109,"label":"安阳市龙安区人民法院"},{"id":2110,"label":"林州市人民法院"},{"id":2111,"label":"安阳县人民法院"},{"id":2112,"label":"汤阴县人民法院"},{"id":2113,"label":"滑县人民法院"},{"id":2114,"label":"内黄县人民法院"}];
//河南省鹤壁市中级人民法院
var court_2115=[{"id":2116,"label":"鹤壁市鹤山区人民法院"},{"id":2117,"label":"鹤壁市山城区人民法院"},{"id":2118,"label":"鹤壁市淇滨区人民法院"},{"id":2119,"label":"浚县人民法院"},{"id":2120,"label":"淇县人民法院"}];
//河南省新乡市中级人民法院
var court_2121=[{"id":2122,"label":"新乡市红旗区人民法院"},{"id":2123,"label":"新乡市卫滨区人民法院"},{"id":2124,"label":"新乡市凤泉区人民法院"},{"id":2125,"label":"新乡市牧野区人民法院"},{"id":2126,"label":"卫辉市人民法院"},{"id":2127,"label":"辉县市人民法院"},{"id":2128,"label":"新乡县人民法院"},{"id":2129,"label":"获嘉县人民法院"},{"id":2130,"label":"原阳县人民法院"},{"id":2131,"label":"延津县人民法院"},{"id":2132,"label":"封丘县人民法院"},{"id":2133,"label":"长垣县人民法院"}];
//河南省焦作市中级人民法院
var court_2134=[{"id":2135,"label":"焦作市解放区人民法院"},{"id":2136,"label":"焦作市中站区人民法院"},{"id":2137,"label":"焦作市马村区人民法院"},{"id":2138,"label":"焦作市山阳区人民法院"},{"id":2140,"label":"沁阳市人民法院"},{"id":2141,"label":"修武县人民法院"},{"id":2142,"label":"博爱县人民法院"},{"id":2143,"label":"武陟县人民法院"},{"id":2144,"label":"温县人民法院"},{"id":2145,"label":"孟州市人民法院"}];
//河南省濮阳市中级人民法院
var court_2146=[{"id":2147,"label":"濮阳市华龙区人民法院"},{"id":2148,"label":"濮阳县人民法院"},{"id":2149,"label":"清丰县人民法院"},{"id":2150,"label":"南乐县人民法院"},{"id":2151,"label":"范县人民法院"},{"id":2152,"label":"台前县人民法院"}];
//河南省许昌市中级人民法院
var court_2153=[{"id":2154,"label":"许昌市魏都区人民法院"},{"id":2155,"label":"禹州市人民法院"},{"id":2156,"label":"长葛市人民法院"},{"id":2157,"label":"许昌市建安区人民法院"},{"id":2158,"label":"鄢陵县人民法院"},{"id":2236,"label":"襄城县人民法院"}];
//河南省漯河市中级人民法院
var court_2159=[{"id":2160,"label":"漯河市源汇区人民法院"},{"id":2161,"label":"舞阳县人民法院"},{"id":2162,"label":"临颍县人民法院"},{"id":2163,"label":"漯河市郾城区人民法院"},{"id":2240,"label":"漯河市召陵区人民法院"}];
//河南省三门峡市中级人民法院
var court_2164=[{"id":2165,"label":"三门峡市湖滨区人民法院"},{"id":2166,"label":"义马市人民法院"},{"id":2167,"label":"渑池县人民法院"},{"id":2168,"label":"三门峡市陕州区人民法院"},{"id":2169,"label":"灵宝市人民法院"},{"id":2170,"label":"卢氏县人民法院"}];
//河南省商丘市中级人民法院
var court_2171=[{"id":2172,"label":"商丘市梁园区人民法院"},{"id":2173,"label":"虞城县人民法院"},{"id":2174,"label":"商丘市睢阳区人民法院"},{"id":2175,"label":"民权县人民法院"},{"id":2176,"label":"宁陵县人民法院"},{"id":2177,"label":"睢县人民法院"},{"id":2178,"label":"夏邑县人民法院"},{"id":2179,"label":"柘城县人民法院"},{"id":2180,"label":"永城市人民法院"}];
//河南省周口市中级人民法院
var court_2181=[{"id":2182,"label":"周口市川汇区人民法院"},{"id":2183,"label":"扶沟县人民法院"},{"id":2184,"label":"西华县人民法院"},{"id":2185,"label":"商水县人民法院"},{"id":2186,"label":"太康县人民法院"},{"id":2187,"label":"鹿邑县人民法院"},{"id":2188,"label":"郸城县人民法院"},{"id":2189,"label":"淮阳县人民法院"},{"id":2190,"label":"沈丘县人民法院"},{"id":2191,"label":"项城市人民法院"}];
//河南省驻马店市中级人民法院
var court_2192=[{"id":2193,"label":"驻马店市驿城区人民法院"},{"id":2194,"label":"确山县人民法院"},{"id":2195,"label":"泌阳县人民法院"},{"id":2196,"label":"遂平县人民法院"},{"id":2197,"label":"西平县人民法院"},{"id":2198,"label":"上蔡县人民法院"},{"id":2199,"label":"汝南县人民法院"},{"id":2200,"label":"平舆县人民法院"},{"id":2201,"label":"新蔡县人民法院"},{"id":2202,"label":"正阳县人民法院"}];
//河南省南阳市中级人民法院
var court_2203=[{"id":2204,"label":"南阳市宛城区人民法院"},{"id":2205,"label":"邓州市人民法院"},{"id":2206,"label":"南召县人民法院"},{"id":2207,"label":"方城县人民法院"},{"id":2208,"label":"西峡县人民法院"},{"id":2209,"label":"南阳市卧龙区人民法院"},{"id":2210,"label":"镇平县人民法院"},{"id":2211,"label":"内乡县人民法院"},{"id":2212,"label":"淅川县人民法院"},{"id":2213,"label":"社旗县人民法院"},{"id":2214,"label":"唐河县人民法院"},{"id":2215,"label":"新野县人民法院"},{"id":2216,"label":"桐柏县人民法院"},{"id":5013,"label":"南阳高新技术产业开发区人民法院"}];
//河南省信阳市中级人民法院
var court_2217=[{"id":2218,"label":"信阳市浉河区人民法院"},{"id":2219,"label":"息县人民法院"},{"id":2220,"label":"淮滨县人民法院"},{"id":2221,"label":"信阳市平桥区人民法院"},{"id":2222,"label":"潢川县人民法院"},{"id":2223,"label":"固始县人民法院"},{"id":2224,"label":"光山县人民法院"},{"id":2225,"label":"商城县人民法院"},{"id":2226,"label":"罗山县人民法院"},{"id":2227,"label":"新县人民法院"}];
//郑州铁路运输中级法院
var court_2228=[{"id":2229,"label":"郑州铁路运输法院"},{"id":2230,"label":"洛阳铁路运输法院"}];
//河南省济源中级人民法院
var court_2235=[{"id":2237,"label":"济源市人民法院"}];
//湖北省高级人民法院
var court_2250=[{"id":2251,"label":"湖北省武汉市中级人民法院"},{"id":2266,"label":"湖北省黄石市中级人民法院"},{"id":2273,"label":"湖北省十堰市中级人民法院"},{"id":2283,"label":"湖北省荆州市中级人民法院"},{"id":2293,"label":"湖北省宜昌市中级人民法院"},{"id":2309,"label":"湖北省襄阳市中级人民法院"},{"id":2321,"label":"湖北省鄂州市中级人民法院"},{"id":2325,"label":"湖北省荆门市中级人民法院"},{"id":2332,"label":"湖北省黄冈市中级人民法院"},{"id":2343,"label":"湖北省孝感市中级人民法院"},{"id":2351,"label":"湖北省咸宁市中级人民法院"},{"id":2358,"label":"湖北省恩施土家族苗族自治州中级人民法院"},{"id":2368,"label":"湖北省汉江中级人民法院"},{"id":2372,"label":"湖北省随州市中级人民法院"},{"id":2367,"label":"武汉海事法院"},{"id":2376,"label":"武汉铁路运输中级法院"}];
//湖北省武汉市中级人民法院
var court_2251=[{"id":2252,"label":"武汉市汉阳区人民法院"},{"id":2253,"label":"武汉市青山区人民法院"},{"id":2254,"label":"武汉市新洲区人民法院"},{"id":2255,"label":"武汉市洪山区人民法院"},{"id":2256,"label":"武汉市江夏区人民法院"},{"id":2257,"label":"武汉市硚口区人民法院"},{"id":2258,"label":"武汉市江汉区人民法院"},{"id":2259,"label":"武汉市武昌区人民法院"},{"id":2260,"label":"武汉市东西湖区人民法院"},{"id":2261,"label":"武汉市江岸区人民法院"},{"id":2262,"label":"武汉市汉南区人民法院"},{"id":2263,"label":"武汉经济技术开发区人民法院"},{"id":2264,"label":"武汉市黄陂区人民法院"},{"id":2265,"label":"武汉市蔡甸区人民法院"},{"id":2375,"label":"武汉东湖新技术开发区人民法院"}];
//湖北省黄石市中级人民法院
var court_2266=[{"id":2267,"label":"黄石市黄石港区人民法院"},{"id":2268,"label":"黄石市西塞山区人民法院"},{"id":2269,"label":"黄石市下陆区人民法院"},{"id":2270,"label":"黄石市铁山区人民法院"},{"id":2271,"label":"大冶市人民法院"},{"id":2272,"label":"阳新县人民法院"}];
//湖北省十堰市中级人民法院
var court_2273=[{"id":2274,"label":"十堰市茅箭区人民法院"},{"id":2275,"label":"十堰市张湾区人民法院"},{"id":2276,"label":"丹江口市人民法院"},{"id":2277,"label":"十堰市郧阳区人民法院"},{"id":2278,"label":"郧西县人民法院"},{"id":2279,"label":"竹山县人民法院"},{"id":2280,"label":"竹溪县人民法院"},{"id":2281,"label":"房县人民法院"}];
//湖北省荆州市中级人民法院
var court_2283=[{"id":2284,"label":"荆州市沙市区人民法院"},{"id":2285,"label":"荆州市荆州区人民法院"},{"id":2286,"label":"江陵县人民法院"},{"id":2287,"label":"石首市人民法院"},{"id":2288,"label":"洪湖市人民法院"},{"id":2289,"label":"松滋市人民法院"},{"id":2290,"label":"公安县人民法院"},{"id":2291,"label":"监利县人民法院"}];
//湖北省宜昌市中级人民法院
var court_2293=[{"id":2294,"label":"宜昌市西陵区人民法院"},{"id":2295,"label":"宜昌市伍家岗区人民法院"},{"id":2296,"label":"宜昌市点军区人民法院"},{"id":2297,"label":"宜昌市三峡坝区人民法院"},{"id":2298,"label":"宜昌市猇亭区人民法院"},{"id":2299,"label":"葛洲坝人民法院"},{"id":2300,"label":"宜昌市夷陵区人民法院"},{"id":2301,"label":"宜都市人民法院"},{"id":2302,"label":"枝江市人民法院"},{"id":2303,"label":"当阳市人民法院"},{"id":2304,"label":"远安县人民法院"},{"id":2305,"label":"兴山县人民法院"},{"id":2306,"label":"秭归县人民法院"},{"id":2307,"label":"长阳土家族自治县人民法院"},{"id":2308,"label":"五峰土家族自治县人民法院"},{"id":2282,"label":"神农架林区人民法院"}];
//湖北省襄阳市中级人民法院
var court_2309=[{"id":2310,"label":"襄阳市樊城区人民法院"},{"id":2311,"label":"襄阳市襄城区人民法院"},{"id":2312,"label":"老河口市人民法院"},{"id":2313,"label":"枣阳市人民法院"},{"id":2314,"label":"襄阳市襄州区人民法院"},{"id":2315,"label":"宜城市人民法院"},{"id":2316,"label":"南漳县人民法院"},{"id":2317,"label":"谷城县人民法院"},{"id":2318,"label":"保康县人民法院"},{"id":2319,"label":"襄阳高新技术产业开发区人民法院"}];
//湖北省鄂州市中级人民法院
var court_2321=[{"id":2322,"label":"鄂州市鄂城区人民法院"},{"id":2323,"label":"鄂州市华容区人民法院"},{"id":2324,"label":"鄂州市梁子湖区人民法院"}];
//湖北省荆门市中级人民法院
var court_2325=[{"id":2326,"label":"荆门市东宝区人民法院"},{"id":2327,"label":"钟祥市人民法院"},{"id":2328,"label":"京山县人民法院"},{"id":2329,"label":"沙洋县人民法院"},{"id":2330,"label":"沙洋人民法院"},{"id":2331,"label":"荆门市掇刀区人民法院"}];
//湖北省黄冈市中级人民法院
var court_2332=[{"id":2333,"label":"黄冈市黄州区人民法院"},{"id":2334,"label":"团风县人民法院"},{"id":2335,"label":"浠水县人民法院"},{"id":2336,"label":"蕲春县人民法院"},{"id":2337,"label":"武穴市人民法院"},{"id":2338,"label":"黄梅县人民法院"},{"id":2339,"label":"红安县人民法院"},{"id":2340,"label":"罗田县人民法院"},{"id":2341,"label":"麻城市人民法院"},{"id":2342,"label":"英山县人民法院"}];
//湖北省孝感市中级人民法院
var court_2343=[{"id":2344,"label":"孝感市孝南区人民法院"},{"id":2345,"label":"汉川市人民法院"},{"id":2346,"label":"应城市人民法院"},{"id":2347,"label":"云梦县人民法院"},{"id":2348,"label":"安陆市人民法院"},{"id":2349,"label":"大悟县人民法院"},{"id":2350,"label":"孝昌县人民法院"}];
//湖北省咸宁市中级人民法院
var court_2351=[{"id":2352,"label":"咸宁市咸安区人民法院"},{"id":2353,"label":"赤壁市人民法院"},{"id":2354,"label":"嘉鱼县人民法院"},{"id":2355,"label":"通城县人民法院"},{"id":2356,"label":"崇阳县人民法院"},{"id":2357,"label":"通山县人民法院"}];
//湖北省恩施土家族苗族自治州中级人民法院
var court_2358=[{"id":2359,"label":"恩施市人民法院"},{"id":2360,"label":"咸丰县人民法院"},{"id":2361,"label":"鹤峰县人民法院"},{"id":2362,"label":"利川市人民法院"},{"id":2363,"label":"建始县人民法院"},{"id":2364,"label":"巴东县人民法院"},{"id":2365,"label":"宣恩县人民法院"},{"id":2366,"label":"来凤县人民法院"}];
//湖北省汉江中级人民法院
var court_2368=[{"id":2369,"label":"仙桃市人民法院"},{"id":2370,"label":"潜江市人民法院"},{"id":2371,"label":"天门市人民法院"}];
//湖北省随州市中级人民法院
var court_2372=[{"id":2373,"label":"随州市曾都区人民法院"},{"id":2374,"label":"广水市人民法院"},{"id":2377,"label":"随县人民法院"}];
//武汉铁路运输中级法院
var court_2376=[{"id":2231,"label":"武汉铁路运输法院"},{"id":2232,"label":"襄阳铁路运输法院"}];
//湖南省高级人民法院
var court_2400=[{"id":2401,"label":"湖南省长沙市中级人民法院"},{"id":2411,"label":"湖南省株洲市中级人民法院"},{"id":2421,"label":"湖南省湘潭市中级人民法院"},{"id":2427,"label":"湖南省衡阳市中级人民法院"},{"id":2440,"label":"湖南省邵阳市中级人民法院"},{"id":2453,"label":"湖南省岳阳市中级人民法院"},{"id":2463,"label":"湖南省常德市中级人民法院"},{"id":2473,"label":"湖南省张家界市中级人民法院"},{"id":2478,"label":"湖南省益阳市中级人民法院"},{"id":2485,"label":"湖南省娄底市中级人民法院"},{"id":2491,"label":"湖南省郴州市中级人民法院"},{"id":2503,"label":"湖南省永州市中级人民法院"},{"id":2515,"label":"湖南省怀化市中级人民法院"},{"id":2529,"label":"湖南省湘西土家族苗族自治州中级人民法院"},{"id":2697,"label":"长沙铁路运输法院"},{"id":2699,"label":"衡阳铁路运输法院"},{"id":2698,"label":"怀化铁路运输法院"}];
//湖南省长沙市中级人民法院
var court_2401=[{"id":2402,"label":"长沙市芙蓉区人民法院"},{"id":2403,"label":"长沙市天心区人民法院"},{"id":2404,"label":"长沙市岳麓区人民法院"},{"id":2405,"label":"长沙市开福区人民法院"},{"id":2406,"label":"长沙市雨花区人民法院"},{"id":2407,"label":"长沙县人民法院"},{"id":2408,"label":"长沙市望城区人民法院"},{"id":2409,"label":"浏阳市人民法院"},{"id":2410,"label":"宁乡县人民法院"}];
//湖南省株洲市中级人民法院
var court_2411=[{"id":2412,"label":"株洲市荷塘区人民法院"},{"id":2413,"label":"株洲市石峰区人民法院"},{"id":2414,"label":"株洲市芦淞区人民法院"},{"id":2415,"label":"株洲市天元区人民法院"},{"id":2416,"label":"醴陵市人民法院"},{"id":2417,"label":"株洲县人民法院"},{"id":2418,"label":"攸县人民法院"},{"id":2419,"label":"茶陵县人民法院"},{"id":2420,"label":"炎陵县人民法院"}];
//湖南省湘潭市中级人民法院
var court_2421=[{"id":2422,"label":"湘潭市雨湖区人民法院"},{"id":2423,"label":"湘潭市岳塘区人民法院"},{"id":2424,"label":"韶山市人民法院"},{"id":2425,"label":"湘乡市人民法院"},{"id":2426,"label":"湘潭县人民法院"}];
//湖南省衡阳市中级人民法院
var court_2427=[{"id":2428,"label":"衡阳市珠晖区人民法院"},{"id":2429,"label":"衡阳市雁峰区人民法院"},{"id":2430,"label":"衡阳市石鼓区人民法院"},{"id":2431,"label":"衡阳市蒸湘区人民法院"},{"id":2432,"label":"衡阳市南岳区人民法院"},{"id":2433,"label":"耒阳市人民法院"},{"id":2434,"label":"衡阳县人民法院"},{"id":2435,"label":"衡南县人民法院"},{"id":2436,"label":"衡山县人民法院"},{"id":2437,"label":"衡东县人民法院"},{"id":2438,"label":"常宁市人民法院"},{"id":2439,"label":"祁东县人民法院"}];
//湖南省邵阳市中级人民法院
var court_2440=[{"id":2441,"label":"邵阳市双清区人民法院"},{"id":2442,"label":"邵阳市大祥区人民法院"},{"id":2443,"label":"邵阳市北塔区人民法院"},{"id":2444,"label":"邵东县人民法院"},{"id":2445,"label":"新邵县人民法院"},{"id":2446,"label":"邵阳县人民法院"},{"id":2447,"label":"隆回县人民法院"},{"id":2448,"label":"洞口县人民法院"},{"id":2449,"label":"武冈市人民法院"},{"id":2450,"label":"绥宁县人民法院"},{"id":2451,"label":"新宁县人民法院"},{"id":2452,"label":"城步苗族自治县人民法院"}];
//湖南省岳阳市中级人民法院
var court_2453=[{"id":2454,"label":"岳阳市岳阳楼区人民法院"},{"id":2455,"label":"岳阳市云溪区人民法院"},{"id":2456,"label":"岳阳市君山区人民法院"},{"id":2457,"label":"汨罗市人民法院"},{"id":2458,"label":"岳阳县人民法院"},{"id":2459,"label":"临湘市人民法院"},{"id":2460,"label":"华容县人民法院"},{"id":2461,"label":"湘阴县人民法院"},{"id":2462,"label":"平江县人民法院"},{"id":2539,"label":"屈原管理区人民法院"}];
//湖南省常德市中级人民法院
var court_2463=[{"id":2464,"label":"常德市武陵区人民法院"},{"id":2465,"label":"常德市鼎城区人民法院"},{"id":2466,"label":"津市市人民法院"},{"id":2467,"label":"桃源县人民法院"},{"id":2468,"label":"石门县人民法院"},{"id":2469,"label":"澧县人民法院"},{"id":2470,"label":"临澧县人民法院"},{"id":2471,"label":"汉寿县人民法院"},{"id":2472,"label":"安乡县人民法院"}];
//湖南省张家界市中级人民法院
var court_2473=[{"id":2474,"label":"张家界市永定区人民法院"},{"id":2475,"label":"张家界市武陵源区人民法院"},{"id":2476,"label":"桑植县人民法院"},{"id":2477,"label":"慈利县人民法院"}];
//湖南省益阳市中级人民法院
var court_2478=[{"id":2479,"label":"益阳市资阳区人民法院"},{"id":2480,"label":"沅江市人民法院"},{"id":2481,"label":"益阳市赫山区人民法院"},{"id":2482,"label":"南县人民法院"},{"id":2483,"label":"桃江县人民法院"},{"id":2484,"label":"安化县人民法院"},{"id":2540,"label":"大通湖管理区人民法院"}];
//湖南省娄底市中级人民法院
var court_2485=[{"id":2486,"label":"娄底市娄星区人民法院"},{"id":2487,"label":"冷水江市人民法院"},{"id":2488,"label":"涟源市人民法院"},{"id":2489,"label":"双峰县人民法院"},{"id":2490,"label":"新化县人民法院"}];
//湖南省郴州市中级人民法院
var court_2491=[{"id":2492,"label":"郴州市北湖区人民法院"},{"id":2493,"label":"资兴市人民法院"},{"id":2494,"label":"郴州市苏仙区人民法院"},{"id":2495,"label":"桂阳县人民法院"},{"id":2496,"label":"永兴县人民法院"},{"id":2497,"label":"宜章县人民法院"},{"id":2498,"label":"嘉禾县人民法院"},{"id":2499,"label":"临武县人民法院"},{"id":2500,"label":"汝城县人民法院"},{"id":2501,"label":"桂东县人民法院"},{"id":2502,"label":"安仁县人民法院"}];
//湖南省永州市中级人民法院
var court_2503=[{"id":2504,"label":"永州市零陵区人民法院"},{"id":2505,"label":"永州市冷水滩区人民法院"},{"id":2506,"label":"东安县人民法院"},{"id":2507,"label":"道县人民法院"},{"id":2508,"label":"宁远县人民法院"},{"id":2509,"label":"江永县人民法院"},{"id":2510,"label":"蓝山县人民法院"},{"id":2511,"label":"新田县人民法院"},{"id":2512,"label":"双牌县人民法院"},{"id":2513,"label":"祁阳县人民法院"},{"id":2514,"label":"江华瑶族自治县人民法院"}];
//湖南省怀化市中级人民法院
var court_2515=[{"id":2516,"label":"怀化市鹤城区人民法院"},{"id":2517,"label":"洪江市人民法院"},{"id":2518,"label":"中方县人民法院"},{"id":2519,"label":"沅陵县人民法院"},{"id":2520,"label":"辰溪县人民法院"},{"id":2521,"label":"溆浦县人民法院"},{"id":2522,"label":"会同县人民法院"},{"id":2523,"label":"新晃侗族自治县人民法院"},{"id":2524,"label":"芷江侗族自治县人民法院"},{"id":2525,"label":"麻阳苗族自治县人民法院"},{"id":2526,"label":"靖州苗族侗族自治县人民法院"},{"id":2527,"label":"通道侗族自治县人民法院"},{"id":2538,"label":"洪江人民法院"}];
//湖南省湘西土家族苗族自治州中级人民法院
var court_2529=[{"id":2530,"label":"吉首市人民法院"},{"id":2531,"label":"泸溪县人民法院"},{"id":2532,"label":"凤凰县人民法院"},{"id":2533,"label":"花垣县人民法院"},{"id":2534,"label":"保靖县人民法院"},{"id":2535,"label":"古丈县人民法院"},{"id":2536,"label":"永顺县人民法院"},{"id":2537,"label":"龙山县人民法院"}];
//广东省高级人民法院
var court_2550=[{"id":2551,"label":"广东省广州市中级人民法院"},{"id":2565,"label":"广东省韶关市中级人民法院"},{"id":2577,"label":"广东省深圳市中级人民法院"},{"id":2584,"label":"广东省珠海市中级人民法院"},{"id":2588,"label":"广东省汕头市中级人民法院"},{"id":2597,"label":"广东省佛山市中级人民法院"},{"id":2604,"label":"广东省江门市中级人民法院"},{"id":2612,"label":"广东省湛江市中级人民法院"},{"id":2623,"label":"广东省茂名市中级人民法院"},{"id":2630,"label":"广东省中山市中级人民法院"},{"id":2632,"label":"广东省东莞市中级人民法院"},{"id":2634,"label":"广东省梅州市中级人民法院"},{"id":2643,"label":"广东省惠州市中级人民法院"},{"id":2650,"label":"广东省肇庆市中级人民法院"},{"id":2659,"label":"广东省汕尾市中级人民法院"},{"id":2664,"label":"广东省河源市中级人民法院"},{"id":2671,"label":"广东省阳江市中级人民法院"},{"id":2676,"label":"广东省清远市中级人民法院"},{"id":2685,"label":"广东省潮州市中级人民法院"},{"id":2689,"label":"广东省揭阳市中级人民法院"},{"id":2695,"label":"广州铁路运输中级法院"},{"id":2701,"label":"广州海事法院"},{"id":2702,"label":"广东省云浮市中级人民法院"},{"id":2716,"label":"广州知识产权法院"}];
//广东省广州市中级人民法院
var court_2551=[{"id":2553,"label":"广州市荔湾区人民法院"},{"id":2554,"label":"广州市越秀区人民法院"},{"id":2555,"label":"广州市海珠区人民法院"},{"id":2557,"label":"广州市天河区人民法院"},{"id":2558,"label":"广州市黄埔区人民法院"},{"id":2559,"label":"广州市白云区人民法院"},{"id":2560,"label":"广州市花都区人民法院"},{"id":2561,"label":"广州市从化区人民法院"},{"id":2562,"label":"广州市增城区人民法院"},{"id":2717,"label":"广东自由贸易区南沙片区人民法院"},{"id":2563,"label":"广州市番禺区人民法院"},{"id":2709,"label":"广州市南沙区人民法院"},{"id":5019,"label":"广州互联网法院"}];
//广东省韶关市中级人民法院
var court_2565=[{"id":2567,"label":"韶关市武江区人民法院"},{"id":2568,"label":"韶关市浈江区人民法院"},{"id":2569,"label":"韶关市曲江区人民法院"},{"id":2570,"label":"始兴县人民法院"},{"id":2571,"label":"南雄市人民法院"},{"id":2572,"label":"仁化县人民法院"},{"id":2573,"label":"乐昌市人民法院"},{"id":2574,"label":"翁源县人民法院"},{"id":2575,"label":"新丰县人民法院"},{"id":2576,"label":"乳源瑶族自治县人民法院"}];
//广东省深圳市中级人民法院
var court_2577=[{"id":2578,"label":"深圳市罗湖区人民法院"},{"id":2579,"label":"深圳市福田区人民法院"},{"id":2580,"label":"深圳市南山区人民法院"},{"id":2581,"label":"深圳市宝安区人民法院"},{"id":2582,"label":"深圳市龙岗区人民法院"},{"id":2583,"label":"深圳市盐田区人民法院"},{"id":2714,"label":"深圳前海合作区人民法院"},{"id":5006,"label":"深圳市龙华区人民法院"},{"id":5007,"label":"深圳市坪山区人民法院"},{"id":5033,"label":"深圳市光明区人民法院"},{"id":5034,"label":"深圳深汕特别合作区人民法院"}];
//广东省珠海市中级人民法院
var court_2584=[{"id":2585,"label":"珠海市香洲区人民法院"},{"id":2586,"label":"珠海市金湾区人民法院"},{"id":2587,"label":"珠海市斗门区人民法院"},{"id":2713,"label":"珠海横琴新区人民法院"}];
//广东省汕头市中级人民法院
var court_2588=[{"id":2589,"label":"汕头市龙湖区人民法院"},{"id":2590,"label":"汕头市金平区人民法院"},{"id":2592,"label":"汕头市濠江区人民法院"},{"id":2594,"label":"汕头市澄海区人民法院"},{"id":2595,"label":"南澳县人民法院"},{"id":2596,"label":"汕头市潮阳区人民法院"},{"id":2708,"label":"汕头市潮南区人民法院"}];
//广东省佛山市中级人民法院
var court_2597=[{"id":2598,"label":"佛山市禅城区人民法院"},{"id":2600,"label":"佛山市三水区人民法院"},{"id":2601,"label":"佛山市南海区人民法院"},{"id":2602,"label":"佛山市顺德区人民法院"},{"id":2603,"label":"佛山市高明区人民法院"}];
//广东省江门市中级人民法院
var court_2604=[{"id":2605,"label":"江门市江海区人民法院"},{"id":2606,"label":"江门市蓬江区人民法院"},{"id":2607,"label":"江门市新会区人民法院"},{"id":2608,"label":"台山市人民法院"},{"id":2609,"label":"恩平市人民法院"},{"id":2610,"label":"开平市人民法院"},{"id":2611,"label":"鹤山市人民法院"}];
//广东省湛江市中级人民法院
var court_2612=[{"id":2613,"label":"湛江市赤坎区人民法院"},{"id":2614,"label":"湛江市霞山区人民法院"},{"id":2615,"label":"湛江市坡头区人民法院"},{"id":2616,"label":"湛江市麻章区人民法院"},{"id":2617,"label":"吴川市人民法院"},{"id":2618,"label":"廉江市人民法院"},{"id":2619,"label":"遂溪县人民法院"},{"id":2620,"label":"雷州市人民法院"},{"id":2621,"label":"徐闻县人民法院"},{"id":2622,"label":"湛江经济技术开发区人民法院"}];
//广东省茂名市中级人民法院
var court_2623=[{"id":2624,"label":"茂名市茂南区人民法院"},{"id":2625,"label":"信宜市人民法院"},{"id":2626,"label":"高州市人民法院"},{"id":2627,"label":"茂名市电白区人民法院"},{"id":2628,"label":"化州市人民法院"}];
//广东省中山市中级人民法院
var court_2630=[{"id":2631,"label":"中山市第一人民法院"},{"id":2712,"label":"中山市第二人民法院"}];
//广东省东莞市中级人民法院
var court_2632=[{"id":2633,"label":"东莞市第一人民法院"},{"id":2710,"label":"东莞市第二人民法院"},{"id":2711,"label":"东莞市第三人民法院"}];
//广东省梅州市中级人民法院
var court_2634=[{"id":2635,"label":"梅州市梅江区人民法院"},{"id":2636,"label":"梅州市梅县区人民法院"},{"id":2637,"label":"大埔县人民法院"},{"id":2638,"label":"丰顺县人民法院"},{"id":2639,"label":"五华县人民法院"},{"id":2640,"label":"兴宁市人民法院"},{"id":2641,"label":"平远县人民法院"},{"id":2642,"label":"蕉岭县人民法院"}];
//广东省惠州市中级人民法院
var court_2643=[{"id":2644,"label":"惠州市惠城区人民法院"},{"id":2645,"label":"惠州市惠阳区人民法院"},{"id":2646,"label":"博罗县人民法院"},{"id":2647,"label":"惠东县人民法院"},{"id":2648,"label":"龙门县人民法院"},{"id":2649,"label":"惠州市大亚湾经济技术开发区人民法院"}];
//广东省肇庆市中级人民法院
var court_2650=[{"id":2651,"label":"肇庆市端州区人民法院"},{"id":2652,"label":"肇庆市鼎湖区人民法院"},{"id":2653,"label":"肇庆市高要区人民法院"},{"id":2654,"label":"四会市人民法院"},{"id":2655,"label":"广宁县人民法院"},{"id":2656,"label":"怀集县人民法院"},{"id":2657,"label":"封开县人民法院"},{"id":2658,"label":"德庆县人民法院"}];
//广东省汕尾市中级人民法院
var court_2659=[{"id":2660,"label":"汕尾市城区人民法院"},{"id":2661,"label":"陆丰市人民法院"},{"id":2662,"label":"海丰县人民法院"},{"id":2663,"label":"陆河县人民法院"}];
//广东省河源市中级人民法院
var court_2664=[{"id":2665,"label":"河源市源城区人民法院"},{"id":2666,"label":"东源县人民法院"},{"id":2667,"label":"紫金县人民法院"},{"id":2668,"label":"和平县人民法院"},{"id":2669,"label":"连平县人民法院"},{"id":2670,"label":"龙川县人民法院"}];
//广东省阳江市中级人民法院
var court_2671=[{"id":2672,"label":"阳江市江城区人民法院"},{"id":2673,"label":"阳江市阳东区人民法院"},{"id":2674,"label":"阳西县人民法院"},{"id":2675,"label":"阳春市人民法院"}];
//广东省清远市中级人民法院
var court_2676=[{"id":2677,"label":"清远市清城区人民法院"},{"id":2678,"label":"清远市清新区人民法院"},{"id":2679,"label":"连州市人民法院"},{"id":2680,"label":"阳山县人民法院"},{"id":2681,"label":"英德市人民法院"},{"id":2682,"label":"佛冈县人民法院"},{"id":2683,"label":"连南瑶族自治县人民法院"},{"id":2684,"label":"连山壮族瑶族自治县人民法院"}];
//广东省潮州市中级人民法院
var court_2685=[{"id":2686,"label":"潮州市湘桥区人民法院"},{"id":2687,"label":"潮州市潮安区人民法院"},{"id":2688,"label":"饶平县人民法院"},{"id":2715,"label":"潮州市枫溪人民法院"}];
//广东省揭阳市中级人民法院
var court_2689=[{"id":2690,"label":"揭阳市榕城区人民法院"},{"id":2691,"label":"揭阳市揭东区人民法院"},{"id":2692,"label":"揭西县人民法院"},{"id":2693,"label":"惠来县人民法院"},{"id":2694,"label":"普宁市人民法院"}];
//广州铁路运输中级法院
var court_2695=[{"id":2696,"label":"广州铁路运输法院"}];
//广东省云浮市中级人民法院
var court_2702=[{"id":2703,"label":"云浮市云城区人民法院"},{"id":2704,"label":"新兴县人民法院"},{"id":2705,"label":"郁南县人民法院"},{"id":2706,"label":"罗定市人民法院"},{"id":2707,"label":"云浮市云安区人民法院"}];
//广西壮族自治区高级人民法院
var court_2750=[{"id":2751,"label":"广西壮族自治区南宁市中级人民法院"},{"id":2760,"label":"广西壮族自治区柳州市中级人民法院"},{"id":2768,"label":"广西壮族自治区桂林市中级人民法院"},{"id":2786,"label":"广西壮族自治区梧州市中级人民法院"},{"id":2794,"label":"广西壮族自治区北海市中级人民法院"},{"id":2799,"label":"广西壮族自治区崇左市中级人民法院"},{"id":2812,"label":"广西壮族自治区来宾市中级人民法院"},{"id":2823,"label":"广西壮族自治区贺州市中级人民法院"},{"id":2828,"label":"广西壮族自治区玉林市中级人民法院"},{"id":2835,"label":"广西壮族自治区百色市中级人民法院"},{"id":2848,"label":"广西壮族自治区河池市中级人民法院"},{"id":2860,"label":"广西壮族自治区钦州市中级人民法院"},{"id":2865,"label":"南宁铁路运输中级法院"},{"id":2868,"label":"广西壮族自治区防城港市中级人民法院"},{"id":2873,"label":"广西壮族自治区贵港市中级人民法院"},{"id":2878,"label":"北海海事法院"}];
//广西壮族自治区南宁市中级人民法院
var court_2751=[{"id":2752,"label":"南宁市兴宁区人民法院"},{"id":2753,"label":"南宁市青秀区人民法院"},{"id":2755,"label":"南宁市江南区人民法院"},{"id":2758,"label":"南宁市邕宁区人民法院"},{"id":2759,"label":"南宁市武鸣区人民法院"},{"id":2801,"label":"横县人民法院"},{"id":2802,"label":"宾阳县人民法院"},{"id":2803,"label":"上林县人民法院"},{"id":2804,"label":"隆安县人民法院"},{"id":2805,"label":"马山县人民法院"},{"id":2806,"label":"南宁市西乡塘区人民法院"},{"id":2881,"label":"南宁市良庆区人民法院"}];
//广西壮族自治区柳州市中级人民法院
var court_2760=[{"id":2761,"label":"柳州市城中区人民法院"},{"id":2762,"label":"柳州市鱼峰区人民法院"},{"id":2763,"label":"柳州市柳南区人民法院"},{"id":2764,"label":"柳州市柳北区人民法院"},{"id":2766,"label":"柳州市柳江区人民法院"},{"id":2767,"label":"柳城县人民法院"},{"id":2814,"label":"鹿寨县人民法院"},{"id":2818,"label":"融安县人民法院"},{"id":2820,"label":"融水苗族自治县人民法院"},{"id":2822,"label":"三江侗族自治县人民法院"}];
//广西壮族自治区桂林市中级人民法院
var court_2768=[{"id":2769,"label":"桂林市秀峰区人民法院"},{"id":2770,"label":"桂林市叠彩区人民法院"},{"id":2771,"label":"桂林市象山区人民法院"},{"id":2772,"label":"桂林市七星区人民法院"},{"id":2773,"label":"桂林市雁山区人民法院"},{"id":2774,"label":"阳朔县人民法院"},{"id":2775,"label":"桂林市临桂区人民法院"},{"id":2776,"label":"灵川县人民法院"},{"id":2777,"label":"全州县人民法院"},{"id":2778,"label":"兴安县人民法院"},{"id":2779,"label":"永福县人民法院"},{"id":2780,"label":"灌阳县人民法院"},{"id":2781,"label":"资源县人民法院"},{"id":2782,"label":"平乐县人民法院"},{"id":2783,"label":"荔浦县人民法院"},{"id":2784,"label":"龙胜各族自治县人民法院"},{"id":2785,"label":"恭城瑶族自治县人民法院"}];
//广西壮族自治区梧州市中级人民法院
var court_2786=[{"id":2787,"label":"梧州市万秀区人民法院"},{"id":2789,"label":"梧州市长洲区人民法院"},{"id":2790,"label":"苍梧县人民法院"},{"id":2791,"label":"岑溪市人民法院"},{"id":2792,"label":"藤县人民法院"},{"id":2793,"label":"蒙山县人民法院"},{"id":2882,"label":"梧州市龙圩区人民法院"}];
//广西壮族自治区北海市中级人民法院
var court_2794=[{"id":2795,"label":"北海市海城区人民法院"},{"id":2796,"label":"北海市银海区人民法院"},{"id":2797,"label":"合浦县人民法院"},{"id":2798,"label":"北海市铁山港区人民法院"}];
//广西壮族自治区崇左市中级人民法院
var court_2799=[{"id":2800,"label":"凭祥市人民法院"},{"id":2807,"label":"崇左市江州区人民法院"},{"id":2808,"label":"大新县人民法院"},{"id":2809,"label":"天等县人民法院"},{"id":2810,"label":"宁明县人民法院"},{"id":2811,"label":"龙州县人民法院"},{"id":2879,"label":"扶绥县人民法院"}];
//广西壮族自治区来宾市中级人民法院
var court_2812=[{"id":2813,"label":"合山市人民法院"},{"id":2815,"label":"象州县人民法院"},{"id":2816,"label":"武宣县人民法院"},{"id":2817,"label":"来宾市兴宾区人民法院"},{"id":2819,"label":"忻城县人民法院"},{"id":2821,"label":"金秀瑶族自治县人民法院"}];
//广西壮族自治区贺州市中级人民法院
var court_2823=[{"id":2824,"label":"昭平县人民法院"},{"id":2825,"label":"贺州市八步区人民法院"},{"id":2826,"label":"钟山县人民法院"},{"id":2827,"label":"富川瑶族自治县人民法院"},{"id":5008,"label":"贺州市平桂区人民法院"}];
//广西壮族自治区玉林市中级人民法院
var court_2828=[{"id":2829,"label":"玉林市玉州区人民法院"},{"id":2830,"label":"容县人民法院"},{"id":2831,"label":"北流市人民法院"},{"id":2832,"label":"陆川县人民法院"},{"id":2833,"label":"兴业县人民法院"},{"id":2834,"label":"博白县人民法院"},{"id":2883,"label":"玉林市福绵区人民法院"}];
//广西壮族自治区百色市中级人民法院
var court_2835=[{"id":2836,"label":"百色市右江区人民法院"},{"id":2837,"label":"田阳县人民法院"},{"id":2838,"label":"田东县人民法院"},{"id":2839,"label":"平果县人民法院"},{"id":2840,"label":"德保县人民法院"},{"id":2841,"label":"靖西市人民法院"},{"id":2842,"label":"那坡县人民法院"},{"id":2843,"label":"凌云县人民法院"},{"id":2844,"label":"乐业县人民法院"},{"id":2845,"label":"田林县人民法院"},{"id":2846,"label":"西林县人民法院"},{"id":2847,"label":"隆林各族自治县人民法院"}];
//广西壮族自治区河池市中级人民法院
var court_2848=[{"id":2849,"label":"河池市金城江区人民法院"},{"id":2850,"label":"河池市宜州区人民法院"},{"id":2851,"label":"南丹县人民法院"},{"id":2852,"label":"天峨县人民法院"},{"id":2853,"label":"凤山县人民法院"},{"id":2854,"label":"东兰县人民法院"},{"id":2855,"label":"罗城仫佬族自治县人民法院"},{"id":2856,"label":"环江毛南族自治县人民法院"},{"id":2857,"label":"巴马瑶族自治县人民法院"},{"id":2858,"label":"都安瑶族自治县人民法院"},{"id":2859,"label":"大化瑶族自治县人民法院"}];
//广西壮族自治区钦州市中级人民法院
var court_2860=[{"id":2861,"label":"钦州市钦北区人民法院"},{"id":2862,"label":"灵山县人民法院"},{"id":2863,"label":"浦北县人民法院"},{"id":2864,"label":"钦州市钦南区人民法院"}];
//南宁铁路运输中级法院
var court_2865=[{"id":2866,"label":"柳州铁路运输法院"},{"id":2867,"label":"南宁铁路运输法院"}];
//广西壮族自治区防城港市中级人民法院
var court_2868=[{"id":2869,"label":"防城港市防城区人民法院"},{"id":2870,"label":"防城港市港口区人民法院"},{"id":2871,"label":"上思县人民法院"},{"id":2872,"label":"东兴市人民法院"}];
//广西壮族自治区贵港市中级人民法院
var court_2873=[{"id":2874,"label":"贵港市港南区人民法院"},{"id":2875,"label":"贵港市港北区人民法院"},{"id":2876,"label":"桂平市人民法院"},{"id":2877,"label":"平南县人民法院"},{"id":2880,"label":"贵港市覃塘区人民法院"}];
//海南省高级人民法院
var court_2900=[{"id":2901,"label":"海南省海口市中级人民法院"},{"id":2905,"label":"海南省三亚市中级人民法院"},{"id":2907,"label":"海南省第一中级人民法院"},{"id":2925,"label":"海口海事法院"},{"id":2926,"label":"海南省第二中级人民法院"},{"id":2928,"label":"海南省三沙市中级人民法院"}];
//海南省海口市中级人民法院
var court_2901=[{"id":2902,"label":"海口市美兰区人民法院"},{"id":2903,"label":"海口市秀英区人民法院"},{"id":2904,"label":"海口市龙华区人民法院"},{"id":2908,"label":"海口市琼山区人民法院"}];
//海南省三亚市中级人民法院
var court_2905=[{"id":2906,"label":"三亚市城郊人民法院"}];
//海南省第一中级人民法院
var court_2907=[{"id":2909,"label":"文昌市人民法院"},{"id":2910,"label":"琼海市人民法院"},{"id":2911,"label":"万宁市人民法院"},{"id":2912,"label":"定安县人民法院"},{"id":2913,"label":"屯昌县人民法院"},{"id":2914,"label":"澄迈县人民法院"},{"id":2919,"label":"五指山市人民法院"},{"id":2921,"label":"陵水黎族自治县人民法院"},{"id":2923,"label":"琼中黎族苗族自治县人民法院"},{"id":2924,"label":"保亭黎族苗族自治县人民法院"}];
//海南省第二中级人民法院
var court_2926=[{"id":2927,"label":"海南省洋浦经济开发区人民法院"},{"id":2915,"label":"临高县人民法院"},{"id":2916,"label":"儋州市人民法院"},{"id":2917,"label":"东方市人民法院"},{"id":2918,"label":"昌江黎族自治县人民法院"},{"id":2920,"label":"乐东黎族自治县人民法院"},{"id":2922,"label":"白沙黎族自治县人民法院"}];
//海南省三沙市中级人民法院
var court_2928=[{"id":2929,"label":"三沙市三沙群岛人民法院"}];
//重庆市高级人民法院
var court_2950=[{"id":2951,"label":"重庆市第一中级人民法院"},{"id":2973,"label":"重庆市第二中级人民法院"},{"id":2986,"label":"重庆市第三中级人民法院"},{"id":2992,"label":"重庆市第四中级人民法院"},{"id":2998,"label":"重庆市第五中级人民法院"}];
//重庆市第一中级人民法院
var court_2951=[{"id":2954,"label":"重庆市江北区人民法院"},{"id":2955,"label":"重庆市沙坪坝区人民法院"},{"id":2958,"label":"重庆市北碚区人民法院"},{"id":2961,"label":"重庆市长寿区人民法院"},{"id":2964,"label":"重庆市渝北区人民法院"},{"id":2966,"label":"重庆市合川区人民法院"},{"id":2967,"label":"重庆市潼南区人民法院"},{"id":2968,"label":"重庆市铜梁区人民法院"},{"id":2970,"label":"重庆市大足区人民法院"},{"id":2972,"label":"重庆市璧山区人民法院"},{"id":3185,"label":"重庆铁路运输法院"},{"id":5030,"label":"重庆两江新区人民法院"},{"id":5031,"label":"重庆自由贸易试验区人民法院"}];
//重庆市第二中级人民法院
var court_2973=[{"id":2976,"label":"重庆市万州区人民法院"},{"id":2977,"label":"重庆市开州区人民法院"},{"id":2978,"label":"忠县人民法院"},{"id":2979,"label":"梁平县人民法院"},{"id":2980,"label":"云阳县人民法院"},{"id":2981,"label":"奉节县人民法院"},{"id":2982,"label":"巫山县人民法院"},{"id":2983,"label":"巫溪县人民法院"},{"id":2984,"label":"城口县人民法院"}];
//重庆市第三中级人民法院
var court_2986=[{"id":2987,"label":"重庆市涪陵区人民法院"},{"id":2988,"label":"垫江县人民法院"},{"id":2989,"label":"重庆市南川区人民法院"},{"id":2990,"label":"丰都县人民法院"},{"id":2991,"label":"武隆县人民法院"}];
//重庆市第四中级人民法院
var court_2992=[{"id":2993,"label":"石柱土家族自治县人民法院"},{"id":2994,"label":"秀山土家族苗族自治县人民法院"},{"id":2995,"label":"重庆市黔江区人民法院"},{"id":2996,"label":"酉阳土家族苗族自治县人民法院"},{"id":2997,"label":"彭水苗族土家族自治县人民法院"}];
//重庆市第五中级人民法院
var court_2998=[{"id":2952,"label":"重庆市渝中区人民法院"},{"id":2957,"label":"重庆市南岸区人民法院"},{"id":2956,"label":"重庆市九龙坡区人民法院"},{"id":2962,"label":"重庆市巴南区人民法院"},{"id":2953,"label":"重庆市大渡口区人民法院"},{"id":2965,"label":"重庆市江津区人民法院"},{"id":2969,"label":"重庆市永川区人民法院"},{"id":2963,"label":"重庆市綦江区人民法院"},{"id":2971,"label":"重庆市荣昌区人民法院"}];
//四川省高级人民法院
var court_3000=[{"id":3001,"label":"四川省成都市中级人民法院"},{"id":3022,"label":"四川省自贡市中级人民法院"},{"id":3029,"label":"四川省攀枝花市中级人民法院"},{"id":3035,"label":"四川省泸州市中级人民法院"},{"id":3043,"label":"四川省德阳市中级人民法院"},{"id":3050,"label":"四川省绵阳市中级人民法院"},{"id":3062,"label":"四川省广元市中级人民法院"},{"id":3070,"label":"四川省遂宁市中级人民法院"},{"id":3075,"label":"四川省内江市中级人民法院"},{"id":3081,"label":"四川省乐山市中级人民法院"},{"id":3093,"label":"四川省宜宾市中级人民法院"},{"id":3104,"label":"四川省南充市中级人民法院"},{"id":3114,"label":"四川省达州市中级人民法院"},{"id":3122,"label":"四川省雅安市中级人民法院"},{"id":3131,"label":"四川省阿坝藏族羌族自治州中级人民法院"},{"id":3146,"label":"四川省甘孜藏族自治州中级人民法院"},{"id":3165,"label":"四川省凉山彝族自治州中级人民法院"},{"id":3183,"label":"成都铁路运输中级法院"},{"id":3189,"label":"四川省广安市中级人民法院"},{"id":3195,"label":"四川省巴中市中级人民法院"},{"id":3200,"label":"四川省眉山市中级人民法院"},{"id":3207,"label":"四川省资阳市中级人民法院"}];
//四川省成都市中级人民法院
var court_3001=[{"id":3002,"label":"成都市锦江区人民法院"},{"id":3003,"label":"成都市青羊区人民法院"},{"id":3004,"label":"成都市武侯区人民法院"},{"id":3005,"label":"成都市成华区人民法院"},{"id":3006,"label":"成都市金牛区人民法院"},{"id":3007,"label":"成都市龙泉驿区人民法院"},{"id":3008,"label":"成都市青白江区人民法院"},{"id":3009,"label":"成都高新技术产业开发区人民法院"},{"id":3010,"label":"都江堰市人民法院"},{"id":3011,"label":"金堂县人民法院"},{"id":3012,"label":"成都市双流区人民法院"},{"id":3013,"label":"成都市温江区人民法院"},{"id":3014,"label":"郫县人民法院"},{"id":3015,"label":"成都市新都区人民法院"},{"id":3016,"label":"彭州市人民法院"},{"id":3017,"label":"崇州市人民法院"},{"id":3018,"label":"大邑县人民法院"},{"id":3019,"label":"邛崃市人民法院"},{"id":3020,"label":"蒲江县人民法院"},{"id":3021,"label":"新津县人民法院"},{"id":3209,"label":"简阳市人民法院"},{"id":5017,"label":"四川天府新区成都片区人民法院"},{"id":5018,"label":"四川自由贸易试验区人民法院"}];
//四川省自贡市中级人民法院
var court_3022=[{"id":3023,"label":"自贡市自流井区人民法院"},{"id":3024,"label":"自贡市贡井区人民法院"},{"id":3025,"label":"自贡市大安区人民法院"},{"id":3026,"label":"自贡市沿滩区人民法院"},{"id":3027,"label":"荣县人民法院"},{"id":3028,"label":"富顺县人民法院"}];
//四川省攀枝花市中级人民法院
var court_3029=[{"id":3030,"label":"攀枝花市东区人民法院"},{"id":3031,"label":"攀枝花市西区人民法院"},{"id":3032,"label":"攀枝花市仁和区人民法院"},{"id":3033,"label":"米易县人民法院"},{"id":3034,"label":"盐边县人民法院"}];
//四川省泸州市中级人民法院
var court_3035=[{"id":3036,"label":"泸州市江阳区人民法院"},{"id":3037,"label":"泸州市龙马潭区人民法院"},{"id":3038,"label":"泸州市纳溪区人民法院"},{"id":3039,"label":"泸县人民法院"},{"id":3040,"label":"合江县人民法院"},{"id":3041,"label":"叙永县人民法院"},{"id":3042,"label":"古蔺县人民法院"}];
//四川省德阳市中级人民法院
var court_3043=[{"id":3044,"label":"德阳市旌阳区人民法院"},{"id":3045,"label":"广汉市人民法院"},{"id":3046,"label":"绵竹市人民法院"},{"id":3047,"label":"中江县人民法院"},{"id":3048,"label":"什邡市人民法院"},{"id":3049,"label":"罗江县人民法院"}];
//四川省绵阳市中级人民法院
var court_3050=[{"id":3051,"label":"绵阳市涪城区人民法院"},{"id":3052,"label":"江油市人民法院"},{"id":3053,"label":"三台县人民法院"},{"id":3054,"label":"盐亭县人民法院"},{"id":3055,"label":"绵阳市安州区人民法院"},{"id":3056,"label":"梓潼县人民法院"},{"id":3057,"label":"北川羌族自治县人民法院"},{"id":3058,"label":"平武县人民法院"},{"id":3059,"label":"四川省科学城人民法院"},{"id":3060,"label":"绵阳市游仙区人民法院"},{"id":3061,"label":"绵阳高新技术产业开发区人民法院"}];
//四川省广元市中级人民法院
var court_3062=[{"id":3063,"label":"广元市利州区人民法院"},{"id":3064,"label":"广元市朝天区人民法院"},{"id":3065,"label":"广元市昭化区人民法院"},{"id":3066,"label":"旺苍县人民法院"},{"id":3067,"label":"青川县人民法院"},{"id":3068,"label":"剑阁县人民法院"},{"id":3069,"label":"苍溪县人民法院"}];
//四川省遂宁市中级人民法院
var court_3070=[{"id":3071,"label":"遂宁市船山区人民法院"},{"id":3072,"label":"蓬溪县人民法院"},{"id":3073,"label":"射洪县人民法院"},{"id":3074,"label":"大英县人民法院"},{"id":3212,"label":"遂宁市安居区人民法院"}];
//四川省内江市中级人民法院
var court_3075=[{"id":3076,"label":"内江市市中区人民法院"},{"id":3077,"label":"内江市东兴区人民法院"},{"id":3078,"label":"威远县人民法院"},{"id":3079,"label":"资中县人民法院"},{"id":3080,"label":"隆昌市人民法院"}];
//四川省乐山市中级人民法院
var court_3081=[{"id":3082,"label":"乐山市市中区人民法院"},{"id":3083,"label":"乐山市沙湾区人民法院"},{"id":3084,"label":"乐山市五通桥区人民法院"},{"id":3085,"label":"乐山市金口河区人民法院"},{"id":3086,"label":"峨眉山市人民法院"},{"id":3087,"label":"犍为县人民法院"},{"id":3088,"label":"井研县人民法院"},{"id":3089,"label":"夹江县人民法院"},{"id":3090,"label":"沐川县人民法院"},{"id":3091,"label":"峨边彝族自治县人民法院"},{"id":3092,"label":"马边彝族自治县人民法院"}];
//四川省宜宾市中级人民法院
var court_3093=[{"id":3094,"label":"宜宾市翠屏区人民法院"},{"id":3095,"label":"宜宾县人民法院"},{"id":3096,"label":"宜宾市南溪区人民法院"},{"id":3097,"label":"江安县人民法院"},{"id":3098,"label":"长宁县人民法院"},{"id":3099,"label":"高县人民法院"},{"id":3100,"label":"筠连县人民法院"},{"id":3101,"label":"珙县人民法院"},{"id":3102,"label":"兴文县人民法院"},{"id":3103,"label":"屏山县人民法院"}];
//四川省南充市中级人民法院
var court_3104=[{"id":3105,"label":"南充市顺庆区人民法院"},{"id":3106,"label":"南充市嘉陵区人民法院"},{"id":3107,"label":"阆中市人民法院"},{"id":3108,"label":"南充市高坪区人民法院"},{"id":3109,"label":"南部县人民法院"},{"id":3110,"label":"营山县人民法院"},{"id":3111,"label":"蓬安县人民法院"},{"id":3112,"label":"仪陇县人民法院"},{"id":3113,"label":"西充县人民法院"}];
//四川省达州市中级人民法院
var court_3114=[{"id":3115,"label":"达州市通川区人民法院"},{"id":3116,"label":"万源市人民法院"},{"id":3117,"label":"达州市达川区人民法院"},{"id":3118,"label":"宣汉县人民法院"},{"id":3119,"label":"开江县人民法院"},{"id":3120,"label":"大竹县人民法院"},{"id":3121,"label":"渠县人民法院"}];
//四川省雅安市中级人民法院
var court_3122=[{"id":3123,"label":"雅安市雨城区人民法院"},{"id":3124,"label":"雅安市名山区人民法院"},{"id":3125,"label":"荥经县人民法院"},{"id":3126,"label":"汉源县人民法院"},{"id":3127,"label":"石棉县人民法院"},{"id":3128,"label":"天全县人民法院"},{"id":3129,"label":"芦山县人民法院"},{"id":3130,"label":"宝兴县人民法院"}];
//四川省阿坝藏族羌族自治州中级人民法院
var court_3131=[{"id":3132,"label":"汶川县人民法院"},{"id":3133,"label":"理县人民法院"},{"id":3134,"label":"茂县人民法院"},{"id":3135,"label":"松潘县人民法院"},{"id":3137,"label":"九寨沟县人民法院"},{"id":3138,"label":"金川县人民法院"},{"id":3139,"label":"小金县人民法院"},{"id":3140,"label":"黑水县人民法院"},{"id":3141,"label":"马尔康市人民法院"},{"id":3142,"label":"壤塘县人民法院"},{"id":3143,"label":"阿坝县人民法院"},{"id":3144,"label":"若尔盖县人民法院"},{"id":3145,"label":"红原县人民法院"}];
//四川省甘孜藏族自治州中级人民法院
var court_3146=[{"id":3147,"label":"康定市人民法院"},{"id":3148,"label":"泸定县人民法院"},{"id":3149,"label":"丹巴县人民法院"},{"id":3150,"label":"九龙县人民法院"},{"id":3151,"label":"雅江县人民法院"},{"id":3152,"label":"道孚县人民法院"},{"id":3153,"label":"炉霍县人民法院"},{"id":3154,"label":"甘孜县人民法院"},{"id":3155,"label":"新龙县人民法院"},{"id":3156,"label":"德格县人民法院"},{"id":3157,"label":"白玉县人民法院"},{"id":3158,"label":"石渠县人民法院"},{"id":3159,"label":"色达县人民法院"},{"id":3160,"label":"理塘县人民法院"},{"id":3161,"label":"巴塘县人民法院"},{"id":3162,"label":"乡城县人民法院"},{"id":3163,"label":"稻城县人民法院"},{"id":3164,"label":"得荣县人民法院"}];
//四川省凉山彝族自治州中级人民法院
var court_3165=[{"id":3166,"label":"西昌市人民法院"},{"id":3167,"label":"盐源县人民法院"},{"id":3168,"label":"德昌县人民法院"},{"id":3169,"label":"会理县人民法院"},{"id":3170,"label":"会东县人民法院"},{"id":3171,"label":"宁南县人民法院"},{"id":3172,"label":"普格县人民法院"},{"id":3173,"label":"布拖县人民法院"},{"id":3174,"label":"金阳县人民法院"},{"id":3175,"label":"昭觉县人民法院"},{"id":3176,"label":"喜德县人民法院"},{"id":3177,"label":"冕宁县人民法院"},{"id":3178,"label":"越西县人民法院"},{"id":3179,"label":"甘洛县人民法院"},{"id":3180,"label":"美姑县人民法院"},{"id":3181,"label":"雷波县人民法院"},{"id":3182,"label":"木里藏族自治县人民法院"}];
//成都铁路运输中级法院
var court_3183=[{"id":3184,"label":"成都铁路运输法院"},{"id":3187,"label":"西昌铁路运输法院"}];
//四川省广安市中级人民法院
var court_3189=[{"id":3190,"label":"华蓥市人民法院"},{"id":3191,"label":"广安市广安区人民法院"},{"id":3192,"label":"岳池县人民法院"},{"id":3193,"label":"武胜县人民法院"},{"id":3194,"label":"邻水县人民法院"},{"id":3213,"label":"广安市前锋区人民法院"}];
//四川省巴中市中级人民法院
var court_3195=[{"id":3196,"label":"巴中市巴州区人民法院"},{"id":3197,"label":"通江县人民法院"},{"id":3198,"label":"南江县人民法院"},{"id":3199,"label":"平昌县人民法院"},{"id":3214,"label":"巴中市恩阳区人民法院"}];
//四川省眉山市中级人民法院
var court_3200=[{"id":3201,"label":"仁寿县人民法院"},{"id":3202,"label":"眉山市东坡区人民法院"},{"id":3203,"label":"青神县人民法院"},{"id":3204,"label":"眉山市彭山区人民法院"},{"id":3205,"label":"丹棱县人民法院"},{"id":3206,"label":"洪雅县人民法院"}];
//四川省资阳市中级人民法院
var court_3207=[{"id":3210,"label":"乐至县人民法院"},{"id":3211,"label":"安岳县人民法院"},{"id":3208,"label":"资阳市雁江区人民法院"}];
//贵州省高级人民法院
var court_3250=[{"id":3251,"label":"贵州省贵阳市中级人民法院"},{"id":3262,"label":"贵州省六盘水市中级人民法院"},{"id":3267,"label":"贵州省遵义市中级人民法院"},{"id":3281,"label":"贵州省铜仁市中级人民法院"},{"id":3292,"label":"贵州省黔西南布依族苗族自治州中级人民法院"},{"id":3301,"label":"贵州省毕节市中级人民法院"},{"id":3310,"label":"贵州省安顺市中级人民法院"},{"id":3317,"label":"贵州省黔东南苗族侗族自治州中级人民法院"},{"id":3334,"label":"贵州省黔南布依族苗族自治州中级人民法院"}];
//贵州省贵阳市中级人民法院
var court_3251=[{"id":3252,"label":"贵阳市南明区人民法院"},{"id":3253,"label":"贵阳市云岩区人民法院"},{"id":3254,"label":"贵阳市花溪区人民法院"},{"id":3255,"label":"贵阳市乌当区人民法院"},{"id":3256,"label":"贵阳市白云区人民法院"},{"id":3258,"label":"清镇市人民法院"},{"id":3259,"label":"开阳县人民法院"},{"id":3260,"label":"修文县人民法院"},{"id":3261,"label":"息烽县人民法院"},{"id":3347,"label":"贵阳市观山湖区人民法院"},{"id":3186,"label":"贵阳铁路运输法院"}];
//贵州省六盘水市中级人民法院
var court_3262=[{"id":3263,"label":"六盘水市钟山区人民法院"},{"id":3264,"label":"盘州市人民法院"},{"id":3265,"label":"六盘水市六枝特区人民法院"},{"id":3266,"label":"水城县人民法院"}];
//贵州省遵义市中级人民法院
var court_3267=[{"id":3268,"label":"遵义市红花岗区人民法院"},{"id":3269,"label":"赤水市人民法院"},{"id":3270,"label":"遵义市播州区人民法院"},{"id":3271,"label":"桐梓县人民法院"},{"id":3272,"label":"绥阳县人民法院"},{"id":3273,"label":"正安县人民法院"},{"id":3274,"label":"习水县人民法院"},{"id":3275,"label":"凤冈县人民法院"},{"id":3276,"label":"湄潭县人民法院"},{"id":3277,"label":"余庆县人民法院"},{"id":3278,"label":"仁怀市人民法院"},{"id":3279,"label":"务川仡佬族苗族自治县人民法院"},{"id":3280,"label":"道真仡佬族苗族自治县人民法院"},{"id":5000,"label":"遵义市汇川区人民法院"}];
//贵州省铜仁市中级人民法院
var court_3281=[{"id":3282,"label":"铜仁市碧江区人民法院"},{"id":3283,"label":"江口县人民法院"},{"id":3284,"label":"德江县人民法院"},{"id":3285,"label":"石阡县人民法院"},{"id":3286,"label":"思南县人民法院"},{"id":3287,"label":"印江土家族苗族自治县人民法院"},{"id":3288,"label":"玉屏侗族自治县人民法院"},{"id":3289,"label":"沿河土家族自治县人民法院"},{"id":3290,"label":"松桃苗族自治县人民法院"},{"id":3291,"label":"铜仁市万山区人民法院"}];
//贵州省黔西南布依族苗族自治州中级人民法院
var court_3292=[{"id":3293,"label":"兴义市人民法院"},{"id":3294,"label":"兴仁市人民法院"},{"id":3295,"label":"普安县人民法院"},{"id":3296,"label":"晴隆县人民法院"},{"id":3297,"label":"贞丰县人民法院"},{"id":3298,"label":"望谟县人民法院"},{"id":3299,"label":"册亨县人民法院"},{"id":3300,"label":"安龙县人民法院"}];
//贵州省毕节市中级人民法院
var court_3301=[{"id":3302,"label":"毕节市七星关区人民法院"},{"id":3303,"label":"大方县人民法院"},{"id":3304,"label":"黔西县人民法院"},{"id":3305,"label":"金沙县人民法院"},{"id":3306,"label":"织金县人民法院"},{"id":3307,"label":"纳雍县人民法院"},{"id":3308,"label":"赫章县人民法院"},{"id":3309,"label":"威宁彝族回族苗族自治县人民法院"}];
//贵州省安顺市中级人民法院
var court_3310=[{"id":3312,"label":"安顺市平坝区人民法院"},{"id":3313,"label":"普定县人民法院"},{"id":3314,"label":"关岭布依族苗族自治县人民法院"},{"id":3315,"label":"镇宁布依族苗族自治县人民法院"},{"id":3316,"label":"紫云苗族布依族自治县人民法院"},{"id":3349,"label":"安顺市西秀区人民法院"}];
//贵州省黔东南苗族侗族自治州中级人民法院
var court_3317=[{"id":3318,"label":"凯里市人民法院"},{"id":3319,"label":"黄平县人民法院"},{"id":3320,"label":"施秉县人民法院"},{"id":3321,"label":"三穗县人民法院"},{"id":3322,"label":"镇远县人民法院"},{"id":3323,"label":"岑巩县人民法院"},{"id":3324,"label":"天柱县人民法院"},{"id":3325,"label":"锦屏县人民法院"},{"id":3326,"label":"剑河县人民法院"},{"id":3327,"label":"台江县人民法院"},{"id":3328,"label":"黎平县人民法院"},{"id":3329,"label":"榕江县人民法院"},{"id":3330,"label":"从江县人民法院"},{"id":3331,"label":"雷山县人民法院"},{"id":3332,"label":"麻江县人民法院"},{"id":3333,"label":"丹寨县人民法院"}];
//贵州省黔南布依族苗族自治州中级人民法院
var court_3334=[{"id":3335,"label":"都匀市人民法院"},{"id":3336,"label":"荔波县人民法院"},{"id":3337,"label":"贵定县人民法院"},{"id":3338,"label":"福泉市人民法院"},{"id":3339,"label":"瓮安县人民法院"},{"id":3340,"label":"独山县人民法院"},{"id":3341,"label":"平塘县人民法院"},{"id":3342,"label":"罗甸县人民法院"},{"id":3343,"label":"长顺县人民法院"},{"id":3344,"label":"龙里县人民法院"},{"id":3345,"label":"惠水县人民法院"},{"id":3346,"label":"三都水族自治县人民法院"}];
//云南省高级人民法院
var court_3350=[{"id":3351,"label":"云南省昆明市中级人民法院"},{"id":3366,"label":"云南省昭通市中级人民法院"},{"id":3378,"label":"云南省曲靖市中级人民法院"},{"id":3388,"label":"云南省玉溪市中级人民法院"},{"id":3398,"label":"云南省普洱市中级人民法院"},{"id":3409,"label":"云南省保山市中级人民法院"},{"id":3415,"label":"云南省丽江市中级人民法院"},{"id":3420,"label":"云南省临沧市中级人民法院"},{"id":3429,"label":"云南省楚雄彝族自治州中级人民法院"},{"id":3440,"label":"云南省红河哈尼族彝族自治州中级人民法院"},{"id":3454,"label":"云南省文山壮族苗族自治州中级人民法院"},{"id":3463,"label":"云南省西双版纳傣族自治州中级人民法院"},{"id":3467,"label":"云南省大理白族自治州中级人民法院"},{"id":3480,"label":"云南省德宏傣族景颇族自治州中级人民法院"},{"id":3487,"label":"云南省怒江傈僳族自治州中级人民法院"},{"id":3492,"label":"云南省迪庆藏族自治州中级人民法院"},{"id":3496,"label":"昆明铁路运输中级法院"}];
//云南省昆明市中级人民法院
var court_3351=[{"id":3352,"label":"昆明市五华区人民法院"},{"id":3353,"label":"昆明市盘龙区人民法院"},{"id":3354,"label":"昆明市官渡区人民法院"},{"id":3355,"label":"昆明市西山区人民法院"},{"id":3356,"label":"昆明市呈贡区人民法院"},{"id":3357,"label":"晋宁县人民法院"},{"id":3358,"label":"安宁市人民法院"},{"id":3359,"label":"富民县人民法院"},{"id":3360,"label":"宜良县人民法院"},{"id":3361,"label":"嵩明县人民法院"},{"id":3362,"label":"石林彝族自治县人民法院"},{"id":3363,"label":"禄劝彝族苗族自治县人民法院"},{"id":3364,"label":"昆明市东川区人民法院"},{"id":3499,"label":"寻甸回族彝族自治县人民法院"}];
//云南省昭通市中级人民法院
var court_3366=[{"id":3367,"label":"昭通市昭阳区人民法院"},{"id":3368,"label":"鲁甸县人民法院"},{"id":3369,"label":"巧家县人民法院"},{"id":3370,"label":"盐津县人民法院"},{"id":3371,"label":"大关县人民法院"},{"id":3372,"label":"永善县人民法院"},{"id":3373,"label":"绥江县人民法院"},{"id":3374,"label":"镇雄县人民法院"},{"id":3375,"label":"彝良县人民法院"},{"id":3376,"label":"威信县人民法院"},{"id":3377,"label":"水富县人民法院"}];
//云南省曲靖市中级人民法院
var court_3378=[{"id":3379,"label":"曲靖市麒麟区人民法院"},{"id":3380,"label":"曲靖市沾益区人民法院"},{"id":3381,"label":"马龙县人民法院"},{"id":3382,"label":"宣威市人民法院"},{"id":3383,"label":"富源县人民法院"},{"id":3384,"label":"罗平县人民法院"},{"id":3385,"label":"师宗县人民法院"},{"id":3386,"label":"陆良县人民法院"},{"id":3387,"label":"会泽县人民法院"}];
//云南省玉溪市中级人民法院
var court_3388=[{"id":3389,"label":"玉溪市红塔区人民法院"},{"id":3390,"label":"玉溪市江川区人民法院"},{"id":3391,"label":"澄江县人民法院"},{"id":3392,"label":"通海县人民法院"},{"id":3393,"label":"华宁县人民法院"},{"id":3394,"label":"易门县人民法院"},{"id":3395,"label":"峨山彝族自治县人民法院"},{"id":3396,"label":"新平彝族傣族自治县人民法院"},{"id":3397,"label":"元江哈尼族彝族傣族自治县人民法院"}];
//云南省普洱市中级人民法院
var court_3398=[{"id":3399,"label":"普洱市思茅区人民法院"},{"id":3400,"label":"西盟佤族自治县人民法院"},{"id":3401,"label":"景东彝族自治县人民法院"},{"id":3402,"label":"墨江哈尼族自治县人民法院"},{"id":3403,"label":"澜沧拉祜族自治县人民法院"},{"id":3404,"label":"景谷傣族彝族自治县人民法院"},{"id":3405,"label":"江城哈尼族彝族自治县人民法院"},{"id":3406,"label":"宁洱哈尼族彝族自治县人民法院"},{"id":3407,"label":"孟连傣族拉祜族佤族自治县人民法院"},{"id":3408,"label":"镇沅彝族哈尼族拉祜族自治县人民法院"}];
//云南省保山市中级人民法院
var court_3409=[{"id":3410,"label":"保山市隆阳区人民法院"},{"id":3411,"label":"施甸县人民法院"},{"id":3412,"label":"腾冲市人民法院"},{"id":3413,"label":"龙陵县人民法院"},{"id":3414,"label":"昌宁县人民法院"}];
//云南省丽江市中级人民法院
var court_3415=[{"id":3416,"label":"玉龙纳西族自治县人民法院"},{"id":3417,"label":"永胜县人民法院"},{"id":3418,"label":"华坪县人民法院"},{"id":3419,"label":"宁蒗彝族自治县人民法院"},{"id":4600,"label":"丽江市古城区人民法院"}];
//云南省临沧市中级人民法院
var court_3420=[{"id":3421,"label":"临沧市临翔区人民法院"},{"id":3422,"label":"凤庆县人民法院"},{"id":3423,"label":"云县人民法院"},{"id":3424,"label":"永德县人民法院"},{"id":3425,"label":"镇康县人民法院"},{"id":3426,"label":"沧源佤族自治县人民法院"},{"id":3427,"label":"耿马傣族佤族自治县人民法院"},{"id":3428,"label":"双江拉祜族佤族布朗族傣族自治县人民法院"}];
//云南省楚雄彝族自治州中级人民法院
var court_3429=[{"id":3430,"label":"楚雄市人民法院"},{"id":3431,"label":"双柏县人民法院"},{"id":3432,"label":"牟定县人民法院"},{"id":3433,"label":"南华县人民法院"},{"id":3434,"label":"姚安县人民法院"},{"id":3435,"label":"大姚县人民法院"},{"id":3436,"label":"永仁县人民法院"},{"id":3437,"label":"元谋县人民法院"},{"id":3438,"label":"武定县人民法院"},{"id":3439,"label":"禄丰县人民法院"}];
//云南省红河哈尼族彝族自治州中级人民法院
var court_3440=[{"id":3441,"label":"个旧市人民法院"},{"id":3442,"label":"开远市人民法院"},{"id":3443,"label":"蒙自市人民法院"},{"id":3444,"label":"绿春县人民法院"},{"id":3445,"label":"建水县人民法院"},{"id":3446,"label":"石屏县人民法院"},{"id":3447,"label":"弥勒市人民法院"},{"id":3448,"label":"泸西县人民法院"},{"id":3449,"label":"元阳县人民法院"},{"id":3450,"label":"红河县人民法院"},{"id":3451,"label":"屏边苗族自治县人民法院"},{"id":3452,"label":"河口瑶族自治县人民法院"},{"id":3453,"label":"金平苗族瑶族傣族自治县人民法院"}];
//云南省文山壮族苗族自治州中级人民法院
var court_3454=[{"id":3455,"label":"文山市人民法院"},{"id":3456,"label":"砚山县人民法院"},{"id":3457,"label":"西畴县人民法院"},{"id":3458,"label":"麻栗坡县人民法院"},{"id":3459,"label":"马关县人民法院"},{"id":3460,"label":"丘北县人民法院"},{"id":3461,"label":"广南县人民法院"},{"id":3462,"label":"富宁县人民法院"}];
//云南省西双版纳傣族自治州中级人民法院
var court_3463=[{"id":3464,"label":"景洪市人民法院"},{"id":3465,"label":"勐海县人民法院"},{"id":3466,"label":"勐腊县人民法院"}];
//云南省大理白族自治州中级人民法院
var court_3467=[{"id":3468,"label":"大理市人民法院"},{"id":3469,"label":"祥云县人民法院"},{"id":3470,"label":"宾川县人民法院"},{"id":3471,"label":"弥渡县人民法院"},{"id":3472,"label":"永平县人民法院"},{"id":3473,"label":"云龙县人民法院"},{"id":3474,"label":"洱源县人民法院"},{"id":3475,"label":"剑川县人民法院"},{"id":3476,"label":"鹤庆县人民法院"},{"id":3477,"label":"漾濞彝族自治县人民法院"},{"id":3478,"label":"南涧彝族自治县人民法院"},{"id":3479,"label":"巍山彝族回族自治县人民法院"}];
//云南省德宏傣族景颇族自治州中级人民法院
var court_3480=[{"id":3482,"label":"芒市人民法院"},{"id":3483,"label":"梁河县人民法院"},{"id":3484,"label":"盈江县人民法院"},{"id":3485,"label":"陇川县人民法院"},{"id":3486,"label":"瑞丽市人民法院"}];
//云南省怒江傈僳族自治州中级人民法院
var court_3487=[{"id":3488,"label":"泸水县人民法院"},{"id":3489,"label":"福贡县人民法院"},{"id":3490,"label":"贡山独龙族怒族自治县人民法院"},{"id":3491,"label":"兰坪白族普米族自治县人民法院"}];
//云南省迪庆藏族自治州中级人民法院
var court_3492=[{"id":3493,"label":"香格里拉市人民法院"},{"id":3494,"label":"德钦县人民法院"},{"id":3495,"label":"维西傈僳族自治县人民法院"}];
//昆明铁路运输中级法院
var court_3496=[{"id":3497,"label":"昆明铁路运输法院"},{"id":3498,"label":"开远铁路运输法院"}];
//西藏自治区高级人民法院
var court_3500=[{"id":3501,"label":"西藏自治区拉萨市中级人民法院"},{"id":3510,"label":"西藏自治区昌都市中级人民法院"},{"id":3526,"label":"西藏自治区山南市中级人民法院"},{"id":3539,"label":"西藏自治区日喀则市中级人民法院"},{"id":3558,"label":"西藏自治区那曲市中级人民法院"},{"id":3569,"label":"西藏自治区阿里地区中级人民法院"},{"id":3578,"label":"西藏自治区林芝市中级人民法院"}];
//西藏自治区拉萨市中级人民法院
var court_3501=[{"id":3502,"label":"拉萨市城关区人民法院"},{"id":3507,"label":"拉萨市堆龙德庆区人民法院"},{"id":3503,"label":"林周县人民法院"},{"id":3504,"label":"当雄县人民法院"},{"id":3505,"label":"尼木县人民法院"},{"id":3506,"label":"曲水县人民法院"},{"id":3508,"label":"拉萨市达孜区人民法院"},{"id":3509,"label":"墨竹工卡县人民法院"}];
//西藏自治区昌都市中级人民法院
var court_3510=[{"id":3511,"label":"昌都市卡若区人民法院"},{"id":3512,"label":"江达县人民法院"},{"id":3513,"label":"贡觉县人民法院"},{"id":3514,"label":"类乌齐县人民法院"},{"id":3515,"label":"丁青县人民法院"},{"id":3516,"label":"察雅县人民法院"},{"id":3517,"label":"八宿县人民法院"},{"id":3518,"label":"左贡县人民法院"},{"id":3519,"label":"芒康县人民法院"},{"id":3520,"label":"洛隆县人民法院"},{"id":3521,"label":"边坝县人民法院"}];
//西藏自治区山南市中级人民法院
var court_3526=[{"id":3527,"label":"山南市乃东区人民法院"},{"id":3528,"label":"扎囊县人民法院"},{"id":3529,"label":"贡嘎县人民法院"},{"id":3530,"label":"桑日县人民法院"},{"id":3531,"label":"琼结县人民法院"},{"id":3532,"label":"曲松县人民法院"},{"id":3533,"label":"措美县人民法院"},{"id":3534,"label":"洛扎县人民法院"},{"id":3535,"label":"加查县人民法院"},{"id":3536,"label":"隆子县人民法院"},{"id":3537,"label":"错那县人民法院"},{"id":3538,"label":"浪卡子县人民法院"}];
//西藏自治区日喀则市中级人民法院
var court_3539=[{"id":3540,"label":"日喀则市桑珠孜区人民法院"},{"id":3541,"label":"南木林县人民法院"},{"id":3542,"label":"江孜县人民法院"},{"id":3543,"label":"定日县人民法院"},{"id":3544,"label":"萨迦县人民法院"},{"id":3545,"label":"拉孜县人民法院"},{"id":3546,"label":"昂仁县人民法院"},{"id":3547,"label":"谢通门县人民法院"},{"id":3548,"label":"白朗县人民法院"},{"id":3549,"label":"仁布县人民法院"},{"id":3550,"label":"康马县人民法院"},{"id":3551,"label":"定结县人民法院"},{"id":3552,"label":"仲巴县人民法院"},{"id":3553,"label":"亚东县人民法院"},{"id":3554,"label":"吉隆县人民法院"},{"id":3555,"label":"聂拉木县人民法院"},{"id":3556,"label":"萨嘎县人民法院"},{"id":3557,"label":"岗巴县人民法院"}];
//西藏自治区那曲市中级人民法院
var court_3558=[{"id":3559,"label":"那曲市色尼区人民法院"},{"id":3560,"label":"嘉黎县人民法院"},{"id":3561,"label":"比如县人民法院"},{"id":3562,"label":"聂荣县人民法院"},{"id":3563,"label":"安多县人民法院"},{"id":3564,"label":"申扎县人民法院"},{"id":3565,"label":"索县人民法院"},{"id":3566,"label":"班戈县人民法院"},{"id":3567,"label":"巴青县人民法院"},{"id":3568,"label":"尼玛县人民法院"},{"id":3587,"label":"双湖县人民法院"}];
//西藏自治区阿里地区中级人民法院
var court_3569=[{"id":3570,"label":"普兰县人民法院"},{"id":3571,"label":"札达县人民法院"},{"id":3572,"label":"噶尔县人民法院"},{"id":3573,"label":"日土县人民法院"},{"id":3574,"label":"革吉县人民法院"},{"id":3575,"label":"改则县人民法院"},{"id":3576,"label":"措勤县人民法院"}];
//西藏自治区林芝市中级人民法院
var court_3578=[{"id":3579,"label":"林芝市巴宜区人民法院"},{"id":3580,"label":"工布江达县人民法院"},{"id":3581,"label":"米林县人民法院"},{"id":3582,"label":"墨脱县人民法院"},{"id":3583,"label":"波密县人民法院"},{"id":3584,"label":"察隅县人民法院"},{"id":3585,"label":"朗县人民法院"}];
//陕西省高级人民法院
var court_3600=[{"id":3601,"label":"陕西省西安市中级人民法院"},{"id":3615,"label":"陕西省铜川市中级人民法院"},{"id":3620,"label":"陕西省宝鸡市中级人民法院"},{"id":3633,"label":"陕西省咸阳市中级人民法院"},{"id":3648,"label":"陕西省渭南市中级人民法院"},{"id":3660,"label":"陕西省汉中市中级人民法院"},{"id":3672,"label":"陕西省安康市中级人民法院"},{"id":3683,"label":"陕西省商洛市中级人民法院"},{"id":3691,"label":"陕西省延安市中级人民法院"},{"id":3705,"label":"陕西省榆林市中级人民法院"},{"id":3718,"label":"西安铁路运输中级法院"}];
//陕西省西安市中级人民法院
var court_3601=[{"id":3602,"label":"西安市新城区人民法院"},{"id":3603,"label":"西安市碑林区人民法院"},{"id":3604,"label":"西安市莲湖区人民法院"},{"id":3605,"label":"西安市灞桥区人民法院"},{"id":3606,"label":"西安市未央区人民法院"},{"id":3607,"label":"西安市雁塔区人民法院"},{"id":3608,"label":"西安市阎良区人民法院"},{"id":3609,"label":"西安市长安区人民法院"},{"id":3610,"label":"蓝田县人民法院"},{"id":3611,"label":"西安市临潼区人民法院"},{"id":3612,"label":"周至县人民法院"},{"id":3613,"label":"西安市鄠邑区人民法院"},{"id":3614,"label":"西安市高陵区人民法院"}];
//陕西省铜川市中级人民法院
var court_3615=[{"id":3616,"label":"铜川市王益区人民法院"},{"id":3617,"label":"铜川市印台区人民法院"},{"id":3618,"label":"铜川市耀州区人民法院"},{"id":3619,"label":"宜君县人民法院"}];
//陕西省宝鸡市中级人民法院
var court_3620=[{"id":3621,"label":"宝鸡市渭滨区人民法院"},{"id":3622,"label":"宝鸡市金台区人民法院"},{"id":3623,"label":"宝鸡市陈仓区人民法院"},{"id":3624,"label":"凤翔县人民法院"},{"id":3625,"label":"岐山县人民法院"},{"id":3626,"label":"扶风县人民法院"},{"id":3627,"label":"眉县人民法院"},{"id":3628,"label":"陇县人民法院"},{"id":3629,"label":"千阳县人民法院"},{"id":3630,"label":"麟游县人民法院"},{"id":3631,"label":"凤县人民法院"},{"id":3632,"label":"太白县人民法院"}];
//陕西省咸阳市中级人民法院
var court_3633=[{"id":3634,"label":"咸阳市秦都区人民法院"},{"id":3635,"label":"咸阳市杨陵区人民法院"},{"id":3636,"label":"咸阳市渭城区人民法院"},{"id":3637,"label":"兴平市人民法院"},{"id":3638,"label":"三原县人民法院"},{"id":3639,"label":"泾阳县人民法院"},{"id":3640,"label":"乾县人民法院"},{"id":3641,"label":"礼泉县人民法院"},{"id":3642,"label":"永寿县人民法院"},{"id":3643,"label":"彬州市人民法院"},{"id":3644,"label":"长武县人民法院"},{"id":3645,"label":"旬邑县人民法院"},{"id":3646,"label":"淳化县人民法院"},{"id":3647,"label":"武功县人民法院"}];
//陕西省渭南市中级人民法院
var court_3648=[{"id":3649,"label":"渭南市临渭区人民法院"},{"id":3650,"label":"韩城市人民法院"},{"id":3651,"label":"华阴市人民法院"},{"id":3652,"label":"渭南市华州区人民法院"},{"id":3653,"label":"潼关县人民法院"},{"id":3654,"label":"大荔县人民法院"},{"id":3655,"label":"蒲城县人民法院"},{"id":3656,"label":"澄城县人民法院"},{"id":3657,"label":"白水县人民法院"},{"id":3658,"label":"合阳县人民法院"},{"id":3659,"label":"富平县人民法院"}];
//陕西省汉中市中级人民法院
var court_3660=[{"id":3661,"label":"汉中市汉台区人民法院"},{"id":3662,"label":"汉中市南郑区人民法院"},{"id":3663,"label":"城固县人民法院"},{"id":3664,"label":"洋县人民法院"},{"id":3665,"label":"西乡县人民法院"},{"id":3666,"label":"勉县人民法院"},{"id":3667,"label":"宁强县人民法院"},{"id":3668,"label":"略阳县人民法院"},{"id":3669,"label":"镇巴县人民法院"},{"id":3670,"label":"留坝县人民法院"},{"id":3671,"label":"佛坪县人民法院"}];
//陕西省安康市中级人民法院
var court_3672=[{"id":3673,"label":"安康市汉滨区人民法院"},{"id":3674,"label":"汉阴县人民法院"},{"id":3675,"label":"石泉县人民法院"},{"id":3676,"label":"宁陕县人民法院"},{"id":3677,"label":"紫阳县人民法院"},{"id":3678,"label":"岚皋县人民法院"},{"id":3679,"label":"平利县人民法院"},{"id":3680,"label":"镇坪县人民法院"},{"id":3681,"label":"旬阳县人民法院"},{"id":3682,"label":"白河县人民法院"}];
//陕西省商洛市中级人民法院
var court_3683=[{"id":3684,"label":"商洛市商州区人民法院"},{"id":3685,"label":"洛南县人民法院"},{"id":3686,"label":"丹凤县人民法院"},{"id":3687,"label":"商南县人民法院"},{"id":3688,"label":"山阳县人民法院"},{"id":3689,"label":"镇安县人民法院"},{"id":3690,"label":"柞水县人民法院"}];
//陕西省延安市中级人民法院
var court_3691=[{"id":3692,"label":"延安市宝塔区人民法院"},{"id":3693,"label":"延长县人民法院"},{"id":3694,"label":"延川县人民法院"},{"id":3695,"label":"子长县人民法院"},{"id":3696,"label":"延安市安塞区人民法院"},{"id":3697,"label":"志丹县人民法院"},{"id":3698,"label":"吴起县人民法院"},{"id":3699,"label":"甘泉县人民法院"},{"id":3700,"label":"富县人民法院"},{"id":3701,"label":"洛川县人民法院"},{"id":3702,"label":"宜川县人民法院"},{"id":3703,"label":"黄龙县人民法院"},{"id":3704,"label":"黄陵县人民法院"}];
//陕西省榆林市中级人民法院
var court_3705=[{"id":3706,"label":"榆林市榆阳区人民法院"},{"id":3707,"label":"神木市人民法院"},{"id":3708,"label":"府谷县人民法院"},{"id":3709,"label":"榆林市横山区人民法院"},{"id":3710,"label":"靖边县人民法院"},{"id":3711,"label":"定边县人民法院"},{"id":3712,"label":"绥德县人民法院"},{"id":3713,"label":"米脂县人民法院"},{"id":3714,"label":"佳县人民法院"},{"id":3715,"label":"吴堡县人民法院"},{"id":3716,"label":"清涧县人民法院"},{"id":3717,"label":"子洲县人民法院"}];
//西安铁路运输中级法院
var court_3718=[{"id":2233,"label":"安康铁路运输法院"},{"id":2234,"label":"西安铁路运输法院"}];
//甘肃省高级人民法院
var court_3750=[{"id":3751,"label":"甘肃省兰州市中级人民法院"},{"id":3760,"label":"甘肃省嘉峪关市中级人民法院"},{"id":3761,"label":"甘肃省金昌市中级人民法院"},{"id":3764,"label":"甘肃省白银市中级人民法院"},{"id":3770,"label":"甘肃省天水市中级人民法院"},{"id":3778,"label":"甘肃省酒泉市中级人民法院"},{"id":3786,"label":"甘肃省张掖市中级人民法院"},{"id":3793,"label":"甘肃省武威市中级人民法院"},{"id":3798,"label":"甘肃省定西市中级人民法院"},{"id":3806,"label":"甘肃省陇南市中级人民法院"},{"id":3817,"label":"甘肃省平凉市中级人民法院"},{"id":3825,"label":"甘肃省庆阳市中级人民法院"},{"id":3835,"label":"甘肃省临夏回族自治州中级人民法院"},{"id":3844,"label":"甘肃省甘南藏族自治州中级人民法院"},{"id":3853,"label":"甘肃矿区人民法院"},{"id":3854,"label":"甘肃省林区中级法院"},{"id":3858,"label":"兰州铁路运输中级法院"}];
//甘肃省兰州市中级人民法院
var court_3751=[{"id":3752,"label":"兰州市城关区人民法院"},{"id":3753,"label":"兰州市七里河区人民法院"},{"id":3754,"label":"兰州市西固区人民法院"},{"id":3755,"label":"兰州市安宁区人民法院"},{"id":3756,"label":"兰州市红古区人民法院"},{"id":3757,"label":"永登县人民法院"},{"id":3758,"label":"皋兰县人民法院"},{"id":3759,"label":"榆中县人民法院"},{"id":3864,"label":"兰州市新区人民法院"}];
//甘肃省嘉峪关市中级人民法院
var court_3760=[{"id":3863,"label":"嘉峪关市城区人民法院"}];
//甘肃省金昌市中级人民法院
var court_3761=[{"id":3762,"label":"金昌市金川区人民法院"},{"id":3763,"label":"永昌县人民法院"}];
//甘肃省白银市中级人民法院
var court_3764=[{"id":3765,"label":"白银市白银区人民法院"},{"id":3766,"label":"白银市平川区人民法院"},{"id":3767,"label":"靖远县人民法院"},{"id":3768,"label":"会宁县人民法院"},{"id":3769,"label":"景泰县人民法院"}];
//甘肃省天水市中级人民法院
var court_3770=[{"id":3771,"label":"天水市秦州区人民法院"},{"id":3772,"label":"天水市麦积区人民法院"},{"id":3773,"label":"清水县人民法院"},{"id":3774,"label":"秦安县人民法院"},{"id":3775,"label":"甘谷县人民法院"},{"id":3776,"label":"武山县人民法院"},{"id":3777,"label":"张家川回族自治县人民法院"}];
//甘肃省酒泉市中级人民法院
var court_3778=[{"id":3779,"label":"玉门市人民法院"},{"id":3780,"label":"酒泉市肃州区人民法院"},{"id":3781,"label":"敦煌市人民法院"},{"id":3782,"label":"金塔县人民法院"},{"id":3783,"label":"肃北蒙古族自治县人民法院"},{"id":3784,"label":"阿克塞哈萨克族自治县人民法院"},{"id":3785,"label":"瓜州县人民法院"}];
//甘肃省张掖市中级人民法院
var court_3786=[{"id":3787,"label":"张掖市甘州区人民法院"},{"id":3788,"label":"肃南裕固族自治县人民法院"},{"id":3789,"label":"民乐县人民法院"},{"id":3790,"label":"临泽县人民法院"},{"id":3791,"label":"高台县人民法院"},{"id":3792,"label":"山丹县人民法院"}];
//甘肃省武威市中级人民法院
var court_3793=[{"id":3794,"label":"武威市凉州区人民法院"},{"id":3795,"label":"民勤县人民法院"},{"id":3796,"label":"古浪县人民法院"},{"id":3797,"label":"天祝藏族自治县人民法院"}];
//甘肃省定西市中级人民法院
var court_3798=[{"id":3799,"label":"定西市安定区人民法院"},{"id":3800,"label":"通渭县人民法院"},{"id":3801,"label":"陇西县人民法院"},{"id":3802,"label":"渭源县人民法院"},{"id":3803,"label":"临洮县人民法院"},{"id":3804,"label":"漳县人民法院"},{"id":3805,"label":"岷县人民法院"}];
//甘肃省陇南市中级人民法院
var court_3806=[{"id":3807,"label":"陇南市武都区人民法院"},{"id":3808,"label":"宕昌县人民法院"},{"id":3809,"label":"成县人民法院"},{"id":3810,"label":"康县人民法院"},{"id":3811,"label":"文县人民法院"},{"id":3812,"label":"西和县人民法院"},{"id":3813,"label":"礼县人民法院"},{"id":3814,"label":"两当县人民法院"},{"id":3815,"label":"徽县人民法院"}];
//甘肃省平凉市中级人民法院
var court_3817=[{"id":3818,"label":"平凉市崆峒区人民法院"},{"id":3819,"label":"泾川县人民法院"},{"id":3820,"label":"灵台县人民法院"},{"id":3821,"label":"崇信县人民法院"},{"id":3822,"label":"华亭县人民法院"},{"id":3823,"label":"庄浪县人民法院"},{"id":3824,"label":"静宁县人民法院"}];
//甘肃省庆阳市中级人民法院
var court_3825=[{"id":3826,"label":"庆阳市西峰区人民法院"},{"id":3827,"label":"庆城县人民法院"},{"id":3828,"label":"环县人民法院"},{"id":3829,"label":"华池县人民法院"},{"id":3830,"label":"合水县人民法院"},{"id":3831,"label":"正宁县人民法院"},{"id":3832,"label":"宁县人民法院"},{"id":3833,"label":"镇原县人民法院"}];
//甘肃省临夏回族自治州中级人民法院
var court_3835=[{"id":3836,"label":"临夏市人民法院"},{"id":3837,"label":"临夏县人民法院"},{"id":3838,"label":"康乐县人民法院"},{"id":3839,"label":"永靖县人民法院"},{"id":3840,"label":"广河县人民法院"},{"id":3841,"label":"和政县人民法院"},{"id":3842,"label":"东乡族自治县人民法院"},{"id":3843,"label":"积石山保安族东乡族撒拉族自治县人民法院"}];
//甘肃省甘南藏族自治州中级人民法院
var court_3844=[{"id":3845,"label":"临潭县人民法院"},{"id":3846,"label":"卓尼县人民法院"},{"id":3847,"label":"舟曲县人民法院"},{"id":3848,"label":"迭部县人民法院"},{"id":3849,"label":"玛曲县人民法院"},{"id":3850,"label":"碌曲县人民法院"},{"id":3851,"label":"夏河县人民法院"},{"id":3852,"label":"合作市人民法院"}];
//甘肃省林区中级法院
var court_3854=[{"id":3855,"label":"洮河林区法院"},{"id":3856,"label":"祁连山林区法院"},{"id":3857,"label":"白龙江林区法院"},{"id":3816,"label":"小陇山林区法院"},{"id":3834,"label":"子午岭林区法院"}];
//兰州铁路运输中级法院
var court_3858=[{"id":3859,"label":"兰州铁路运输法院"},{"id":3860,"label":"武威铁路运输法院"}];
//青海省高级人民法院
var court_3900=[{"id":3901,"label":"青海省西宁市中级人民法院"},{"id":3907,"label":"青海省海东市中级人民法院"},{"id":3916,"label":"青海省海北藏族自治州中级人民法院"},{"id":3921,"label":"青海省黄南藏族自治州中级人民法院"},{"id":3927,"label":"青海省海南藏族自治州中级人民法院"},{"id":3934,"label":"青海省果洛藏族自治州中级人民法院"},{"id":3941,"label":"青海省玉树藏族自治州中级人民法院"},{"id":3948,"label":"青海省海西蒙古族藏族自治州中级人民法院"},{"id":3861,"label":"西宁铁路运输法院"}];
//青海省西宁市中级人民法院
var court_3901=[{"id":3902,"label":"西宁市城东区人民法院"},{"id":3903,"label":"西宁市城中区人民法院"},{"id":3904,"label":"西宁市城西区人民法院"},{"id":3905,"label":"西宁市城北区人民法院"},{"id":3906,"label":"大通回族土族自治县人民法院"},{"id":3911,"label":"湟中县人民法院"},{"id":3912,"label":"湟源县人民法院"}];
//青海省海东市中级人民法院
var court_3907=[{"id":3908,"label":"海东市平安区人民法院"},{"id":3909,"label":"民和回族土族自治县人民法院"},{"id":3910,"label":"海东市乐都区人民法院"},{"id":3913,"label":"互助土族自治县人民法院"},{"id":3914,"label":"化隆回族自治县人民法院"},{"id":3915,"label":"循化撒拉族自治县人民法院"}];
//青海省海北藏族自治州中级人民法院
var court_3916=[{"id":3917,"label":"祁连县人民法院"},{"id":3918,"label":"海晏县人民法院"},{"id":3919,"label":"刚察县人民法院"},{"id":3920,"label":"门源回族自治县人民法院"}];
//青海省黄南藏族自治州中级人民法院
var court_3921=[{"id":3922,"label":"同仁县人民法院"},{"id":3923,"label":"尖扎县人民法院"},{"id":3924,"label":"泽库县人民法院"},{"id":3925,"label":"河南蒙古族自治县人民法院"}];
//青海省海南藏族自治州中级人民法院
var court_3927=[{"id":3928,"label":"共和县人民法院"},{"id":3929,"label":"同德县人民法院"},{"id":3930,"label":"贵德县人民法院"},{"id":3931,"label":"兴海县人民法院"},{"id":3932,"label":"贵南县人民法院"}];
//青海省果洛藏族自治州中级人民法院
var court_3934=[{"id":3935,"label":"玛沁县人民法院"},{"id":3936,"label":"班玛县人民法院"},{"id":3937,"label":"甘德县人民法院"},{"id":3938,"label":"达日县人民法院"},{"id":3939,"label":"久治县人民法院"},{"id":3940,"label":"玛多县人民法院"}];
//青海省玉树藏族自治州中级人民法院
var court_3941=[{"id":3942,"label":"玉树市人民法院"},{"id":3943,"label":"杂多县人民法院"},{"id":3944,"label":"称多县人民法院"},{"id":3945,"label":"治多县人民法院"},{"id":3946,"label":"囊谦县人民法院"},{"id":3947,"label":"曲麻莱县人民法院"}];
//青海省海西蒙古族藏族自治州中级人民法院
var court_3948=[{"id":3949,"label":"格尔木市人民法院"},{"id":3950,"label":"德令哈市人民法院"},{"id":3951,"label":"乌兰县人民法院"},{"id":3952,"label":"都兰县人民法院"},{"id":3953,"label":"天峻县人民法院"},{"id":3954,"label":"大柴旦矿区人民法院"},{"id":5010,"label":"西部矿区人民法院"}];
//宁夏回族自治区高级人民法院
var court_4000=[{"id":4001,"label":"宁夏回族自治区银川市中级人民法院"},{"id":4007,"label":"宁夏回族自治区石嘴山市中级人民法院"},{"id":4014,"label":"宁夏回族自治区吴忠市中级人民法院"},{"id":4022,"label":"宁夏回族自治区固原市中级人民法院"},{"id":4030,"label":"宁夏回族自治区中卫市中级人民法院"},{"id":3862,"label":"银川铁路运输法院"}];
//宁夏回族自治区银川市中级人民法院
var court_4001=[{"id":4002,"label":"银川市兴庆区人民法院"},{"id":4003,"label":"银川市西夏区人民法院"},{"id":4004,"label":"银川市金凤区人民法院"},{"id":4005,"label":"永宁县人民法院"},{"id":4006,"label":"贺兰县人民法院"},{"id":4019,"label":"灵武市人民法院"}];
//宁夏回族自治区石嘴山市中级人民法院
var court_4007=[{"id":4008,"label":"石嘴山市大武口区人民法院"},{"id":4011,"label":"石嘴山市惠农区人民法院"},{"id":4012,"label":"平罗县人民法院"}];
//宁夏回族自治区吴忠市中级人民法院
var court_4014=[{"id":4015,"label":"吴忠市利通区人民法院"},{"id":4016,"label":"青铜峡市人民法院"},{"id":4020,"label":"盐池县人民法院"},{"id":4021,"label":"同心县人民法院"},{"id":4029,"label":"吴忠市红寺堡区人民法院"}];
//宁夏回族自治区固原市中级人民法院
var court_4022=[{"id":4023,"label":"固原市原州区人民法院"},{"id":4025,"label":"西吉县人民法院"},{"id":4026,"label":"隆德县人民法院"},{"id":4027,"label":"泾源县人民法院"},{"id":4028,"label":"彭阳县人民法院"}];
//宁夏回族自治区中卫市中级人民法院
var court_4030=[{"id":4018,"label":"中宁县人民法院"},{"id":4024,"label":"海原县人民法院"},{"id":4017,"label":"中卫市沙坡头区人民法院"}];
//新疆维吾尔自治区高级人民法院
var court_4050=[{"id":4051,"label":"新疆维吾尔自治区乌鲁木齐市中级人民法院"},{"id":4060,"label":"新疆维吾尔自治区克拉玛依市中级人民法院"},{"id":4066,"label":"新疆维吾尔自治区吐鲁番市中级人民法院"},{"id":4070,"label":"新疆维吾尔自治区哈密地区中级人民法院"},{"id":4074,"label":"新疆维吾尔自治区昌吉回族自治州中级人民法院"},{"id":4083,"label":"新疆维吾尔自治区博尔塔拉蒙古自治州中级人民法院"},{"id":4087,"label":"新疆维吾尔自治区巴音郭楞蒙古自治州中级人民法院"},{"id":4097,"label":"新疆维吾尔自治区阿克苏地区中级人民法院"},{"id":4107,"label":"新疆维吾尔自治区克孜勒苏柯尔克孜自治州中级人民法院"},{"id":4112,"label":"新疆维吾尔自治区喀什地区中级人民法院"},{"id":4125,"label":"新疆维吾尔自治区和田地区中级人民法院"},{"id":4134,"label":"新疆维吾尔自治区高级人民法院伊犁哈萨克自治州分院"},{"id":4146,"label":"新疆维吾尔自治区伊犁哈萨克自治州塔城地区中级人民法院"},{"id":4154,"label":"新疆维吾尔自治区伊犁哈萨克自治州阿勒泰地区中级人民法院"},{"id":4162,"label":"乌鲁木齐铁路运输中级法院"}];
//新疆维吾尔自治区乌鲁木齐市中级人民法院
var court_4051=[{"id":4052,"label":"乌鲁木齐市天山区人民法院"},{"id":4053,"label":"乌鲁木齐市沙依巴克区人民法院"},{"id":4054,"label":"乌鲁木齐市新市区人民法院"},{"id":4055,"label":"乌鲁木齐市水磨沟区人民法院"},{"id":4056,"label":"乌鲁木齐市头屯河区人民法院"},{"id":4057,"label":"乌鲁木齐市达坂城区人民法院"},{"id":4058,"label":"乌鲁木齐市米东区人民法院"},{"id":4059,"label":"乌鲁木齐县人民法院"}];
//新疆维吾尔自治区克拉玛依市中级人民法院
var court_4060=[{"id":4061,"label":"克拉玛依市克拉玛依区人民法院"},{"id":4062,"label":"克拉玛依市独山子区人民法院"},{"id":4063,"label":"克拉玛依市白碱滩区人民法院"},{"id":4064,"label":"克拉玛依市乌尔禾区人民法院"}];
//新疆维吾尔自治区吐鲁番市中级人民法院
var court_4066=[{"id":4067,"label":"吐鲁番市高昌区人民法院"},{"id":4068,"label":"鄯善县人民法院"},{"id":4069,"label":"托克逊县人民法院"}];
//新疆维吾尔自治区哈密地区中级人民法院
var court_4070=[{"id":4071,"label":"哈密市人民法院"},{"id":4072,"label":"伊吾县人民法院"},{"id":4073,"label":"巴里坤哈萨克自治县人民法院"}];
//新疆维吾尔自治区昌吉回族自治州中级人民法院
var court_4074=[{"id":4075,"label":"昌吉市人民法院"},{"id":4077,"label":"呼图壁县人民法院"},{"id":4078,"label":"玛纳斯县人民法院"},{"id":4079,"label":"奇台县人民法院"},{"id":4080,"label":"阜康市人民法院"},{"id":4081,"label":"吉木萨尔县人民法院"},{"id":4082,"label":"木垒哈萨克自治县人民法院"}];
//新疆维吾尔自治区博尔塔拉蒙古自治州中级人民法院
var court_4083=[{"id":4084,"label":"博乐市人民法院"},{"id":4085,"label":"精河县人民法院"},{"id":4086,"label":"温泉县人民法院"},{"id":4209,"label":"阿拉山口市人民法院"}];
//新疆维吾尔自治区巴音郭楞蒙古自治州中级人民法院
var court_4087=[{"id":4088,"label":"库尔勒市人民法院"},{"id":4089,"label":"轮台县人民法院"},{"id":4090,"label":"尉犁县人民法院"},{"id":4091,"label":"若羌县人民法院"},{"id":4092,"label":"且末县人民法院"},{"id":4093,"label":"和静县人民法院"},{"id":4094,"label":"和硕县人民法院"},{"id":4095,"label":"博湖县人民法院"},{"id":4096,"label":"焉耆回族自治县人民法院"}];
//新疆维吾尔自治区阿克苏地区中级人民法院
var court_4097=[{"id":4098,"label":"阿克苏市人民法院"},{"id":4099,"label":"温宿县人民法院"},{"id":4100,"label":"库车县人民法院"},{"id":4101,"label":"沙雅县人民法院"},{"id":4102,"label":"新和县人民法院"},{"id":4103,"label":"拜城县人民法院"},{"id":4104,"label":"乌什县人民法院"},{"id":4105,"label":"阿瓦提县人民法院"},{"id":4106,"label":"柯坪县人民法院"}];
//新疆维吾尔自治区克孜勒苏柯尔克孜自治州中级人民法院
var court_4107=[{"id":4108,"label":"阿图什市人民法院"},{"id":4109,"label":"阿克陶县人民法院"},{"id":4110,"label":"阿合奇县人民法院"},{"id":4111,"label":"乌恰县人民法院"}];
//新疆维吾尔自治区喀什地区中级人民法院
var court_4112=[{"id":4113,"label":"喀什市人民法院"},{"id":4114,"label":"疏附县人民法院"},{"id":4115,"label":"疏勒县人民法院"},{"id":4116,"label":"英吉沙县人民法院"},{"id":4117,"label":"泽普县人民法院"},{"id":4118,"label":"莎车县人民法院"},{"id":4119,"label":"叶城县人民法院"},{"id":4120,"label":"麦盖提县人民法院"},{"id":4121,"label":"岳普湖县人民法院"},{"id":4122,"label":"伽师县人民法院"},{"id":4123,"label":"巴楚县人民法院"},{"id":4124,"label":"塔什库尔干塔吉克自治县人民法院"}];
//新疆维吾尔自治区和田地区中级人民法院
var court_4125=[{"id":4126,"label":"和田市人民法院"},{"id":4127,"label":"和田县人民法院"},{"id":4128,"label":"墨玉县人民法院"},{"id":4129,"label":"皮山县人民法院"},{"id":4130,"label":"洛浦县人民法院"},{"id":4131,"label":"策勒县人民法院"},{"id":4132,"label":"于田县人民法院"},{"id":4133,"label":"民丰县人民法院"}];
//新疆维吾尔自治区高级人民法院伊犁哈萨克自治州分院
var court_4134=[{"id":4135,"label":"奎屯市人民法院"},{"id":4137,"label":"伊宁市人民法院"},{"id":4138,"label":"伊宁县人民法院"},{"id":4139,"label":"霍城县人民法院"},{"id":4140,"label":"巩留县人民法院"},{"id":4141,"label":"新源县人民法院"},{"id":4142,"label":"昭苏县人民法院"},{"id":4143,"label":"特克斯县人民法院"},{"id":4144,"label":"尼勒克县人民法院"},{"id":4145,"label":"察布查尔锡伯自治县人民法院"},{"id":4210,"label":"霍尔果斯市人民法院"}];
//新疆维吾尔自治区伊犁哈萨克自治州塔城地区中级人民法院
var court_4146=[{"id":4147,"label":"塔城市人民法院"},{"id":4148,"label":"额敏县人民法院"},{"id":4149,"label":"乌苏市人民法院"},{"id":4150,"label":"沙湾县人民法院"},{"id":4151,"label":"托里县人民法院"},{"id":4152,"label":"裕民县人民法院"},{"id":4153,"label":"和布克赛尔蒙古自治县人民法院"}];
//新疆维吾尔自治区伊犁哈萨克自治州阿勒泰地区中级人民法院
var court_4154=[{"id":4155,"label":"阿勒泰市人民法院"},{"id":4156,"label":"布尔津县人民法院"},{"id":4157,"label":"富蕴县人民法院"},{"id":4158,"label":"福海县人民法院"},{"id":4159,"label":"哈巴河县人民法院"},{"id":4160,"label":"青河县人民法院"},{"id":4161,"label":"吉木乃县人民法院"}];
//乌鲁木齐铁路运输中级法院
var court_4162=[{"id":4163,"label":"乌鲁木齐铁路运输法院"},{"id":4164,"label":"库尔勒铁路运输法院"},{"id":4165,"label":"哈密铁路运输法院"}];
//新疆维吾尔自治区高级人民法院生产建设兵团分院
var court_4166=[{"id":4167,"label":"新疆生产建设兵团第一师中级人民法院"},{"id":4171,"label":"新疆生产建设兵团第二师中级人民法院"},{"id":4175,"label":"新疆生产建设兵团第三师中级人民法院"},{"id":4178,"label":"新疆生产建设兵团第四师中级人民法院"},{"id":4182,"label":"新疆生产建设兵团第五师中级人民法院"},{"id":4185,"label":"新疆生产建设兵团第六师中级人民法院"},{"id":4189,"label":"新疆生产建设兵团第七师中级人民法院"},{"id":4192,"label":"新疆生产建设兵团第八师中级人民法院"},{"id":4195,"label":"新疆生产建设兵团第九师中级人民法院"},{"id":4198,"label":"新疆生产建设兵团第十师中级人民法院"},{"id":4206,"label":"新疆生产建设兵团第十二师中级人民法院"},{"id":4207,"label":"新疆生产建设兵团第十三师中级人民法院"},{"id":4208,"label":"新疆生产建设兵团第十四师中级人民法院"}];
//新疆生产建设兵团第一师中级人民法院
var court_4167=[{"id":4168,"label":"新疆生产建设兵团金银川垦区人民法院"},{"id":4169,"label":"新疆生产建设兵团阿克苏垦区人民法院"},{"id":4170,"label":"新疆生产建设兵团阿拉尔垦区人民法院"},{"id":4216,"label":"阿拉尔市人民法院"}];
//新疆生产建设兵团第二师中级人民法院
var court_4171=[{"id":4172,"label":"新疆生产建设兵团库尔勒垦区人民法院"},{"id":4173,"label":"新疆生产建设兵团乌鲁克垦区人民法院"},{"id":4174,"label":"新疆生产建设兵团焉耆垦区人民法院"},{"id":4211,"label":"铁门关市人民法院"}];
//新疆生产建设兵团第三师中级人民法院
var court_4175=[{"id":4176,"label":"新疆生产建设兵团喀什垦区人民法院"},{"id":4177,"label":"新疆生产建设兵团图木舒克垦区人民法院"},{"id":4212,"label":"图木舒克市人民法院"}];
//新疆生产建设兵团第四师中级人民法院
var court_4178=[{"id":4179,"label":"新疆生产建设兵团霍城垦区人民法院"},{"id":4180,"label":"新疆生产建设兵团伊宁垦区人民法院"},{"id":4181,"label":"新疆生产建设兵团昭苏垦区人民法院"},{"id":4217,"label":"可克达拉市人民法院"}];
//新疆生产建设兵团第五师中级人民法院
var court_4182=[{"id":4183,"label":"新疆生产建设兵团博乐垦区人民法院"},{"id":4184,"label":"新疆生产建设兵团塔斯海垦区人民法院"},{"id":4213,"label":"双河市人民法院"}];
//新疆生产建设兵团第六师中级人民法院
var court_4185=[{"id":4186,"label":"新疆生产建设兵团五家渠垦区人民法院"},{"id":4187,"label":"新疆生产建设兵团奇台垦区人民法院"},{"id":4188,"label":"新疆生产建设兵团芳草湖垦区人民法院"},{"id":4214,"label":"五家渠市人民法院"}];
//新疆生产建设兵团第七师中级人民法院
var court_4189=[{"id":4190,"label":"新疆生产建设兵团奎屯垦区人民法院"},{"id":4191,"label":"新疆生产建设兵团车排子垦区人民法院"}];
//新疆生产建设兵团第八师中级人民法院
var court_4192=[{"id":4193,"label":"新疆生产建设兵团下野地垦区人民法院"},{"id":4194,"label":"新疆生产建设兵团莫索湾垦区人民法院"},{"id":4065,"label":"石河子市人民法院"}];
//新疆生产建设兵团第九师中级人民法院
var court_4195=[{"id":4196,"label":"新疆生产建设兵团额敏垦区人民法院"},{"id":4197,"label":"新疆生产建设兵团叶尔盖提垦区人民法院"}];
//新疆生产建设兵团第十师中级人民法院
var court_4198=[{"id":4199,"label":"新疆生产建设兵团北屯垦区人民法院"},{"id":4200,"label":"新疆生产建设兵团巴里巴盖垦区人民法院"},{"id":4215,"label":"北屯市人民法院"}];
//新疆生产建设兵团第十二师中级人民法院
var court_4206=[{"id":4202,"label":"新疆生产建设兵团乌鲁木齐垦区人民法院"},{"id":4203,"label":"新疆生产建设兵团三坪垦区人民法院"}];
//新疆生产建设兵团第十三师中级人民法院
var court_4207=[{"id":4204,"label":"新疆生产建设兵团巴里坤垦区人民法院"},{"id":4201,"label":"新疆生产建设兵团哈密垦区人民法院"}];
//新疆生产建设兵团第十四师中级人民法院
var court_4208=[{"id":4205,"label":"新疆生产建设兵团和田垦区人民法院"}];
