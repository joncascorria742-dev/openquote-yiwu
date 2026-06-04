# OpenQuote Yiwu MVP

这是一个无需构建工具的静态网站 MVP，用于验证“最低 59 美元进入中国供应链”的海外服务模式：客户无需先来中国，即可从全球最大小商品批发市场开始寻找商品、工厂货源和新品机会。供应商原始报价公开，0佣金、0商品差价，按任务或工作量固定收费。

## 当前包含

- 英文落地页：`site/index.html`
- 脱敏样例报告：`site/sample-report.html`
- WhatsApp 直聊入口：客户在 WhatsApp 中直接发送产品图片或需求，网站不收集、不保存询盘
- 四个价格入口：单产品猎头 59 美元、同类目最多 5 个指定产品 129 美元且每个产品提供 2 个低价供应商选项、新品类目调研 199 美元起且包含 10–15 个精选新品机会、义乌本地代办 79 美元起
- 付费诱因：原始报价、供应商联系方式、MOQ、交期、本地照片、包装/定制备注，以及可另付费的样品协调和后续跟进
- 简约服务流程：免费审核需求、人工确认范围、确认固定费用和付款方式
- 费用滑动条：直观对比最低 59 美元固定调研费和示例 10% 至 15% 报价内含利润模式
- 角色对比：解释 OpenQuote Yiwu、典型采购代理和典型外贸公司的收费及合作方式差异
- 中文执行清单：`docs/launch-checklist.zh-CN.md`
- 英文开发话术：`docs/outreach-templates.en.md`
- 本地商家信息采集表：`docs/supplier-intake.zh-CN.md`
- 首批澳大利亚公开目标名单：`docs/leads/au-promotional-distributors-batch-01.csv`
- 第一天逐家开发顺序：`docs/first-outreach-day.zh-CN.md`
- 海外服务费收款方案：`docs/payment-collection.zh-CN.md`

## 本地打开

可以直接双击打开 `site/index.html`。

也可以在当前目录启动本地服务器：

```powershell
Set-Location .\site
C:\Users\HONOR\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe -m http.server 4173
```

然后浏览器访问：

```text
http://localhost:4173
```

## 上线前必须配置

编辑 `site/config.js`：

```js
window.OPENQUOTE_CONFIG = {
  whatsappNumber: "国家区号加号码，不要输入加号"
};
```

例如：

```js
whatsappNumber: "61412345678"
```

配置号码后，网站的主要行动按钮会打开 WhatsApp，并预填一条简短询盘。客户直接在聊天中发送产品图片或补充需求。

## 当前商业边界

- 仅承诺义乌本地市场调研和本地可执行的现场核实。
- 不宣传全国找厂。
- 不按订单货值收佣金。
- 不在供应商原始报价上加价。
- 第三方物流、仓储、外贸服务和检测费用单独列明。
- 供应商身份按证据如实标注，不将档口或批发商包装成工厂。
