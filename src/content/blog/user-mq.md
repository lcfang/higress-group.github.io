---
title: 美洽智能客服使用 Higress 统一网关落地实践
keywords: [higress,美洽]
description: 美洽在阿里云上采用Higress企业版，在其他云采用Higress开源版，统一了网关架构
author: 古建国 (Larry Koo)
date: "2023-07-10"
category: "article"
---

## 关于美洽

美洽是一家全球智能云客服服务商，提供一站式智能客服解决方案，旗下拥有在线客服、工单系统、呼叫中心、客服机器人、语音机器人、营销机器人等产品及服务。美洽成立于2014年，总部位于成都，目前服务企业用户已超过40万家，覆盖多个行业领域。美洽的客服系统支持多平台使用，包括Web 网页端、手机客户端、PC 客户端，同时美洽也提供了开放 API 平台。

## 需求背景

1. 多条业务线使用了了不同编程语言，在微服务化演进的路上困难重重；
2. 历史架构使用多个流量转发中间件导致流量路径冗长、复杂且故障排查困难（LB + OpenResty + Nginx + Caddy + SpringCloud-Gateway）；
3. WebSocket 长连接服务在多重路由层上不支持热更新，维护成本高。

**历史架构的流量拓扑图如下：**

![](https://img.alicdn.com/imgextra/i4/O1CN01AJitLM1kgbW6yGLmV_!!6000000004713-0-tps-627-517.jpg)

## 需求目标

1. 找到一个统一网关，能够一次性解决流量网关和业务网关的路由转发需求；
2. 支持路由规则热更新，解决 WebSocket 连接在路由更新或网络抖动时产生的重连风暴；
3. 前置API 请求权限校验、签名校验、WAF 拦截、CC 拦截；
4. 可视化统一网关的后台操作，让普通员工也能上手；
5. 多云架构下私有化部署支持。

## 方案横向对比

通过对目前市面上流行的网关产品进行详细的横向对比，再结合美洽对统一网关的需求目标，我们从对比的表格当中，看到了 Higress 所带来的最佳对比结果。

同时美洽重点关注的几个点：K8S Ingress 支持、WebSocket支持、Nacos 服务发现、路由配置热更新、WASM 插件都得到了很好的支持。


![](https://img.alicdn.com/imgextra/i1/O1CN01bjoMSi1arSkPgWvVV_!!6000000003383-0-tps-750-470.jpg)

## 为什么选择 Higress

### 面向多云架构友好

Higress 在阿里云上有成熟的企业版产品：MSE 云原生网关，我们从 2021 年开始使用这款产品，这是一款全托管，完全免运维的 SaaS 网关产品，并且具备强劲的性能和丰富的功能，相比自建同吞吐的网关，整体成本是更低的，因此我们在阿里云上直接使用了这款产品。

美洽除了阿里云，在其他云上也有部署业务，我们希望能统一多云的统一网关技术架构，开源版 Higress 正好符合我们的需求，相比商业版，在控制台功能上，开源版目前的能力相对较少，但大部分功能也都可以通过自己定义 K8s CRD 配置的方式来实现，完全满足我们的需求。


### 原生支持 K8s Ingress

美洽从 2021 年便已经全面迁移到 Kubernetes 进行资源调度，遇到最大的困难是历史的网关中间件，在容器化的架构里面，各种水土不服，要么需要借助 Nginx-Ingress-Controller，要么需要外部的 SLB 进行服务之间的负载均衡与网络通信。这导致了比容器化之前更加复杂的流量路径，一度让我们下定决心，必须、必须、必须要解决统一网关的问题，还必须云原生的。

2021 年底开始，我们开始尝试使用阿里云 MSE 网关 SaaS 产品，开始将部分服务从 Nginx 路由迁移到 MSE 网关上，很快解决了Ngxin Configuration 配置维护复杂，故障频发的问题，尝到甜头后，我们便开始计划进一步扩大 MSE 网关的使用，结合 Nacos 和 K8S 的服务发现，将 80% 大部分容器化服务路由转发全部迁移到了云原生网关上。

这带来的收益就包括：

1. 简化了流量路径，公网流量通过 SLB 直接到达网关，网关路由直达容器 Pod；
2. 释放了使用 ECS 自建的 Nginx 、OpenResty 、Caddy 服务，降低了大量服务器成本；
3. 服务发现和服务治理，以及各个服务当前的健康状态都以可视化的 Dashborad 呈现出来；

### 控制面和数据面解耦的架构

控制面和数据面解耦是一种很好的设计模式，把管理控制逻辑和运行处理逻辑分开，这样可以更好地管理和扩展系统。

1. Console 负责管理 和 Gateway 负责处理请求，灵活可扩展，互补干扰；
2. 整个系统的性能和可用性可以得到很好的保障；
3. 即使控制面出现问题，数据面仍然可以继续处理请求，反之亦然。

在美洽客服自己的产品中，也大量试用了控制面和数据面分离的这种架构设计模式，在选择 Higress 统一网关的落地实践中，也更好的可以和美洽产品的架构进行配合，例如控制台采用微前端技术统一美洽运维控制台，Higress 控制台，Nacos 控制台。

### 容易上手的后台 Dashboard

在早期，美洽在 2021 年开始使用阿里云 MSE 云原生网关时，就已经对网关的控制台使用有了很多的经验基础，团队中 QA 同学也能熟练使用了。目前在其他云上的项目，私有化部署的开源版Higress，在控制台方面功能与操作和阿里云 MSE 产品的交互保持一致，团队使用很快便上手了。

![](https://img.alicdn.com/imgextra/i4/O1CN01SgNYtt1NcizsTgB5w_!!6000000001591-0-tps-750-300.jpg)

插件方面，美洽使用了 JWT Auth 鉴权，Key Rate Limit 限流，HMAC Auth 请求签名，Bot Detect 和 WAF 功能有涉及。

![](https://img.alicdn.com/imgextra/i1/O1CN015fP9mx1lv5ewluuvs_!!6000000004880-0-tps-750-420.jpg)

## 美洽的落地实践

### 采用 Helm 在 K8s node 上 一键部署

```bash
helm repo add higress.io <https://higress.io/helm-charts>
helm install higress higress.io/higress -n higress-system --create-namespace
```

### 完全替代了 Nginx 、OpenResty、Caddy 、SLB-Intranet

![](https://img.alicdn.com/imgextra/i4/O1CN01ElAB4A1ijgxDUXf9g_!!6000000004449-0-tps-630-532.jpg)
![](https://img.alicdn.com/imgextra/i4/O1CN011wDPMy1vpGmaT06Tq_!!6000000006221-0-tps-631-532.jpg)

### 彻底解决 WebSocket 断线重连问题

美洽的智能客服产品侧试用了 WebSocket 进行长连接保持和消息通信，所以非常依赖网络的稳定，以及更新网关配置所带来的副作用。在使用 Nginx + OpenResty 方案的期间，每一次的配置变更都会带来极大的代价，断线重连风暴时常发生。一次配置变更 Pendding 或者变更失败带来的瞬时断联是及其痛苦的。

![](https://img.alicdn.com/imgextra/i1/O1CN01rvv5Mc1hoRRlBhdO2_!!6000000004324-0-tps-750-440.jpg)

在迁移到 Higress 上之后，路由配置热更新特性，不在需要像 Nginx 一样需要 Reload Gateway，解决配置更新 reload 带来的断线重连风暴问题。

另外，在 WebSocket Server 服务升级过程中，通过给 Pod 打上 stage 标签，在 Higress 侧通过标签路由进行新老版本无损流量切换，给产品快速迭代升级带了巨大的杠杆效应。

### 熔断限流

在面向 2B 的 SaaS 产品业务场景中，经常会发生某一个客户突发海量流量，占据大量带宽，影响其他客户正常使用的情况，这时我们需要针对客户规模对单个客户的 API 并发上限做灵活的动态限流，使用 Higress 的插件Key Rate Limit 就很好的解决了这个问题，根据流量大盘随时调整限流水位红线，做到精准，灵活的限流。

![](https://img.alicdn.com/imgextra/i3/O1CN01QhTG261lZZ2kbT1qe_!!6000000004833-0-tps-750-467.jpg)

## 经验总结

Higress 网关的落地，给企业全面落地云原生微服务架构提供强有力的支持，对我们技术人员来说，这绝对是一个杠杆级别的开源产品，另外，在阿里云上又有对等的 SaaS 产品，这样的配合，将公有云和私有化部署的统一网关一次性全部解决，对企业来说是绝对的利好。

1. 统一流量网关+业务网关能力，实现了给企业降本，为研发增效；
2. 为云原生架构提供很好的基座，在异构语言服务化层面排除了网络通信难题；
3. 路由热更新、无损升级、可视化 Console、开放的插件、基于 Kubernetes 和 Istio，给技术演进带来了更多的可能性。

最后，我们祝愿 Higress 在云原生的道路上越走越远，大家一起用开源、开放、分享的心态将 Higress 建设地越来越好。