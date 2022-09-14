---
title: 以太坊能源消耗
description: 了解以太坊能源消耗所需的基本信息。
lang: zh
sidebar: true
---

# 以太坊能源消耗 {#introduction}

在从工作量证明 (PoW) 到权益证明 (PoS) 的[合并](/upgrades/merge)之后，以太坊的能源消耗将减少约 99.95%。 合并后，以太坊提高安全性所需的碳消耗将显著减少。

自成立以来，以太坊一直致力于实现权益证明共识机制，但在不影响[以太坊成为安全、可扩展和去中心化区块链的愿景](/upgrades/vision/)的情况下，这需要多年的专注研究和开发. 因此，网络从使用工作量证明共识开始。 工作量证明共识要求矿工使用他们的计算硬件来解决难题。 难题的解决证明矿工已消耗了能量，表明他们为添加到区块链的权利投入了现实世界的价值。 工作量证明和权益证明都只是决定谁可以添加下一个区块的机制。 将工作量证明换成权益证明，其中投资的实际价值来自直接在智能合约中质押的以太币，因此矿工无需消耗能量即可添加到区块链。 因此，保护网络的环境成本大大降低。

## 合并 {#the-merge}

自 2020 年 11 月以来，[信标链](/upgrades/beacon-chain/)一直运行权益证明，同时在并行的以太坊主网运行工作量证明。 在 2022 年，以太坊开发人员通过与他们自己的信标链合并，将几个运行工作量证明的**测试网络(测试网)**转换为权益证明。 这有助于客户端团队在迁移到更长期的网络之前测试软件。 在这些测试网之后，以太坊开发人员推出了新的测试网供社区使用 (Kiln & Kintsugi)，并运行了现有测试网和主网的多个影子分叉。 现在这些已经稳定下来，团队正在进入测试的最后阶段：将长期存在的测试网（Ropsten、Goerli、Sepolia）过渡为权益证明。 以太坊主网与信标链的合并预计将在 2022 年下半年进行。 在合并的那一刻，以太坊的工作量证明挖矿将被关闭，权益证明共识将接管，网络消耗的能量将下降到合并前的 <0.05%。

## 为什么权益证明比工作量证明更环保 {#why-pos-is-greener-than-pow}

工作量证明是保护网络的一种可靠方法。 以太坊区块链上的交易由[矿工](/developers/docs/consensus-mechanisms/pow/mining)进行验证。 矿工将交易捆绑在一起形成有序区块，并将它们添加到以太坊区块链中。 新区块会传播到所有其他独立管理交易的节点操作者，并验证它们是否有效。 任何不真实之处都会显示出不同节点之间的不一致。 最真实区块被添加到区块链，成为历史上不可或缺的一部分。 只有存在与采矿相关的成本，以及无法预测哪个特定节点将提交下个区块时，才允许任何矿工添加新区块。 通过实施工作量证明来满足这些条件。 为了有资格提交一个交易块，矿工必须第一个为计算昂贵的难题提交解决方案。 为了成功控制区块链，不诚实的矿工必须通过投资足够的硬件和能源来超越大多数其他矿工，从而不断赢得工作量证明竞赛。

出于一些原因，这种网络保护机制存在一定问题。 首先，矿工可以通过投资更强大的硬件来增加成功的几率，为矿工购买越来越耗电的采矿设备创造条件。 这会增加网络的能源消耗并产生硬件浪费。 其次，以太坊的工作量证明协议目前的年总耗电量约等于芬兰的年总耗电量<sup>[^1]</sup>，且碳足迹与瑞士相似<sup>[^1]</sup>。

权益证明使用验证者替代矿工。 验证者执行的功能与矿工相同，不同之处在于他们没有将资产以能源消耗的形式支出，而是将以太币作为抵押品以防止不诚实行为。 如果验证者行为不端，质押的以太币可能会被销毁，而更恶意的行为会受到更严厉的惩罚。 这强烈激励了积极和诚实的参与来保护网络，而不需要大量的能源消耗。 由于保护工作量证明网络所消耗的几乎所有能量都来自挖掘算法，因此切换到权益证明可以显著降低能源消耗。 在权益证明下投资更强大的硬件也没有任何好处，因此不存在军备竞赛条件和更少的电子浪费。 以太坊验证者可以在一般的笔记本电脑或低功耗设备上运行，例如[树莓派](https://ethereum-on-arm-documentation.readthedocs.io/en/latest/user-guide/ethereum2.0.html)设备。

详细了解[以太坊如何实现权益证明](/developers/docs/consensus-mechanisms/pos)及其与工作量证明的对比。

## 权益证明能源消耗 {#proof-of-stake-energy}

基于当前信标链的估算表明，合并为权益证明可能使总能源使用量减少 99.95%，因为权益证明的能源效率比工作量证明高约 2000 倍。 以太坊的能源消耗将大致等于为网络上每个节点运行一台普通笔记本电脑的成本。

许多文章估算了“每笔交易”的能源消耗，将区块链与其他行业进行比较。 这样做的好处是易于理解，但挖掘一个区块所需的能量与其中的交易数量无关。 如果按每个交易单位的能源消耗计算，意味着交易越少能源消耗越少，反之亦然，但事实并非如此。 每笔交易估算值高度依赖于区块链的交易吞吐量是如何定义的，并且可以通过调整这个定义来使价值看起来更大或更小。

例如，在以太坊，交易吞吐量不仅是基础层的交易吞吐量，还有所有“[二层网络](/layer-2/)”卷叠的交易吞吐量总和。但二层网络卷叠的交易吞吐量通常不包含在计算中，因此计算出来的值会大幅减少。 这就是跨平台比较每笔交易能源消耗的工具会产生误导的原因。

更重要的是整个网络的整体能源消耗和碳足迹。 通过这些值，我们可以检查网络为其用户和整个社会提供了什么，并更全面地评估该能源消耗是否合理。 另外，如果按照每笔交易去衡量，意味着网络的价值仅来自于其在账户之间传输加密货币中所发挥的作用，并且忽略了诚实的成本效益分析。

[Digiconomist 为比特币和以太坊提供全网能源消耗和碳足迹](https://digiconomist.net/ethereum-energy-consumption)。 在撰写本文时，以太坊的总能耗约为 112 TWh/年，与荷兰相当，碳排放量相当于新加坡的碳排放量（53 MT/年)。 相比之下，比特币目前的能源消耗约为 200 TWh/年，碳排放量约为 100 MT/年，同时每年废弃的硬件大约产生 32,000 吨电器废弃物。 关闭以太坊的工作量证明，转而采用权益证明将减少超过 99.95% 的能源消耗，这意味着保证以太坊的总能源消耗更接近 **0.01 TWh/年**。

![各行业能源消耗比较](./energy.png)

上图显示了以 TWh/yr 为单位的各个行业的估计年能耗(检索于 2022 年 6 月)。 _请注意，图中显示的估算值来自下文链接指向的公开来源。 这些估算值 仅作例证，不代表官方估算、承诺或预测。_

为了了解以太坊能源消耗的实际情况，我们可以比较其他行业的年度估算值。 如果我们把以太坊看作一个将数字资产作为投资安全持有的平台，或许我们可以将其比作开采黄金，估计花费大约 [240 TWh/年](https://www.kitco.com/news/2021-05-17/Gold-s-energy-consumption-doubles-that-of-bitcoin-Galaxy-Digital.html)。 作为一个数字支付平台，我们或许可以与 PayPal 相提并论(估计消耗大约 [0.26 TWh/yr](https://app.impaakt.com/analyses/paypal-consumed-264100-mwh-of-energy-in-2020-24-from-non-renewable-sources-27261))。 作为一个娱乐平台，我们或许可以将其与游戏行业进行比较，估计花费约 [34 TW/yr](https://www.researchgate.net/publication/336909520_Toward_Greener_Gaming_Estimating_National_Energy_Use_and_Energy_Efficiency_Potential) 。 Netflix 的能源消耗估计值在 [约 0.45TWhr/yr](https://s22.q4cdn.com/959853165/files/doc_downloads/2020/02/0220_Netflix_EnvironmentalSocialGovernanceReport_FINAL.pdf) 之间变化很大(他们的 2019 年报告的自己的估计值)高达约 94 TWh/年(由 [Shift Project](https://theshiftproject.org/en/article/unsustainable-use-online-video/) 估计值) - 在 [Carbon Brief](https://www.carbonbrief.org/factcheck-what-is-the-carbon-footprint-of-streaming-video-on-netflix) 上有一些关于这些估计值的假设的讨论 。 或者，可以将以太坊与 Youtube 进行比较，后者估计花费约 [244 TWh/yr](https://thefactsource.com/how-much-electricity-does-youtube-use/) ，尽管这些值在很大程度上取决于流式传输视频的设备类型以及数据中心等底层基础设施的能源效率。 Youtube 的能源消耗估算值已按频道和单个视频进行细分。 [这些估算值](https://thefactsource.com/how-much-electricity-does-youtube-use/)表明，人们在 2019 年观看江南 Style 时消耗的能源是以太坊使用权益证明的 45 倍。

## 更加节能的以太坊 {#green-ethereum}

虽然从历史上看，以太坊的能源消耗一直很大，但在将区块生产从耗能转型到节能的过程中，开发人员投入了大量时间和智慧。 引用 [Bankless](http://podcast.banklesshq.com/) 的话，减少工作量证明所消耗能量的最佳方法就是“关闭它”，这便是以太坊承诺采取的方法。

与此同时，在以太坊上建立了一个庞大、不断发展且高度活跃的**再生金融 (ReFi)** 社区。 再生金融应用程序使用去中心化金融组件来构建具有积极外部影响，从而使环境受益的金融应用程序。 再生金融是范围更广的“Solarpunk”运动的一部分，该运动与以太坊紧密结合，旨在将技术进步和环境管理结合起来。 以太坊的去中心化、无需许可和可组合的特性使其成为再生金融和 solarpunk 社区的理想基础层。 在合并之后，以太坊的技术和理念将最终调和，以太坊应该成为一种环保技术。

<InfoBanner emoji=":evergreen_tree:">
  如果您认为这些数据不正确或可以更加精确，请提出问题或拉取请求。 这些是 ethereum.org 团队使用可公开访问的信息和当前以太坊路线图做出的估计。 这些说法并不代表以太坊基金会的正式承诺。 
</InfoBanner>

## 延伸阅读 {#further-reading}

- [举国之力，仅此而已](https://blog.ethereum.org/2021/05/18/country-power-no-more/) - _Carl Beekhuizen，2021 年 5 月 18 日_
- [以太坊的能源消耗](https://mirror.xyz/jmcook.eth/ODpCLtO4Kq7SCVFbU4He8o8kXs418ZZDTj0lpYlZkR8)
- [以太坊的排放：自下而上的估算](https://kylemcdonald.github.io/ethereum-emissions/) _ Kyle McDonald_
- [以太坊能源消耗指标](https://digiconomist.net/ethereum-energy-consumption/) – _Digiconomist_
- [ETHMerge.com](https://ethmerge.com/) — _[@InsideTheSim](https://twitter.com/InsideTheSim)_

## 相关主题 {#related-topics}

- [以太坊愿景](/upgrades/vision/)
- [信标链](/upgrades/beacon-chain)
- [合并](/upgrades/merge/)
- [分片](/upgrades/beacon-chain/)
