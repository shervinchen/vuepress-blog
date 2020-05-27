(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{482:function(e,r,t){"use strict";t.r(r);var n=t(4),o=Object(n.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"开篇的一点碎碎念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开篇的一点碎碎念"}},[e._v("#")]),e._v(" 开篇的一点碎碎念")]),e._v(" "),t("p",[e._v("一直没想好博客的第一篇正式文章该写什么，毕竟最近刚找到实习的公司，忙着适应工作和学习相关的技术，所以自从博客搭好后就没时间学点自己感兴趣的东西，自然也就不知道记录啥了。")]),e._v(" "),t("p",[e._v("大学开始学编程，慢慢的写过一些程序后，就想花时间把算法和数据结构系统的学一遍，但是一直没有下定决心。拖到现在，工作了，反而不知道从哪里开始学了。")]),e._v(" "),t("p",[e._v("AI一直是我比较感兴趣的一个方向，从小就喜欢看各种科幻电影和小说，梦想着有生之年能有一个真正意义上的人工智能出现，虽然目前看来还很遥远，但还是有一大批人为这个目标而努力着。而在计算机方面，各种游戏的AI也是热门的研究方向，特别是棋类AI。所以这次我就想编写一个完整的五子棋游戏，以及实现一个水平相对较高的五子棋AI来开始我的算法学习之路。")]),e._v(" "),t("p",[e._v("目前计划将AI作为算法专题的第一个系列，而五子棋AI因为资料相对较多较完善，所以先实现它。\n（后续应该还会实现"),t("code",[e._v("2048")]),e._v("、"),t("code",[e._v("俄罗斯方块")]),e._v("、"),t("code",[e._v("贪吃蛇")]),e._v("等经典游戏的AI，算法将侧重于实现一些物理和动画效果）")]),e._v(" "),t("p",[e._v("作为这个五子棋AI系列的第一篇文章，就简单的概述下五子棋及其AI的发展历史和现状。\n说是概述，其实就是瞎扯点自己在网上了解到的东西，因为大部分资料在网上基本都能找到，这里并不是写论文，只是总结一些重点，方便大家理解。")]),e._v(" "),t("h2",{attrs:{id:"五子棋介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五子棋介绍"}},[e._v("#")]),e._v(" 五子棋介绍")]),e._v(" "),t("h3",{attrs:{id:"种类及区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#种类及区别"}},[e._v("#")]),e._v(" 种类及区别")]),e._v(" "),t("p",[e._v("先说说五子棋吧，通常大家玩的五子棋分为带禁手和不带禁手两个版本，\n（前者称之为*"),t("code",[e._v("连珠")]),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Renju",target:"_blank",rel:"noopener noreferrer"}},[e._v("Renju"),t("OutboundLink")],1),t("em",[e._v("，后者一般称之为")]),t("code",[e._v("五子棋")]),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Gomoku",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gomoku"),t("OutboundLink")],1),e._v("*）\n"),t("strong",[e._v("然而无论哪一个版本，先手黑棋均必胜。")]),e._v("\n（所谓"),t("code",[e._v("黑必胜")]),e._v("的意思是，只要黑棋按照一定的方式下，白棋选择棋盘上的任何一个点都不可能赢棋。）")]),e._v(" "),t("p",[e._v("（传统五子棋规则以及禁手的定义不再赘述，请自行百度谷歌）")]),e._v(" "),t("p",[e._v("这里只说结果，至于为什么参考文末资料：\n"),t("strong",[e._v("1992年Victor Allis通过编程证明不带禁手的五子棋，黑必胜。")]),e._v(" "),t("strong",[e._v("2001年Janos Wagner第一次证明的带禁手的五子棋，也是黑必胜。")])]),e._v(" "),t("h3",{attrs:{id:"先手优势及棋谱介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#先手优势及棋谱介绍"}},[e._v("#")]),e._v(" 先手优势及棋谱介绍")]),e._v(" "),t("p",[e._v("黑棋的优势到底有多大呢？"),t("strong",[e._v("在26个职业开局里，已经发现有19个是黑棋必胜的（一打必胜）。")])]),e._v(" "),t("p",[e._v("因此为了进一步削弱黑棋的优势，国际上推出"),t("code",[e._v("五手两打")]),e._v("的规则。\n(就是黑棋的第三步需要下两个点，但由白棋挑选让其下较弱的哪一个)\n可是人们发现黑棋带禁手依然是必胜。")]),e._v(" "),t("p",[e._v("从实践的角度来讲，网上是可以搜索"),t("code",[e._v("地毯谱")]),e._v("的，一般在几百兆左右，可以用"),t("code",[e._v("renlib")]),e._v("软件打开，所谓地毯谱的意思就是**黑棋会指定下法，但白棋每一步都可以选择棋盘任意位置，最后黑棋必胜。**也就是说，只要按照此棋谱下棋，五子棋世界冠军都一定会输给你。\n（ 目前"),t("em",[e._v("花月、浦月、云月、雨月、峡月、溪月、金星、水月、寒星、明星、岚月、新月、名月，山月，残月")]),e._v("都是"),t("code",[e._v("五手两打")]),e._v("必胜）")]),e._v(" "),t("p",[e._v("那么正式的比赛是怎么玩的呢？")]),e._v(" "),t("p",[e._v("现在的正式比赛通常会常用"),t("code",[e._v("三手交换")]),e._v("、"),t("code",[e._v("五手两打")]),e._v("这些复杂的规则来平衡比赛，但这些规则的各个分支也是逐渐被人破解，\n五子棋的比赛已经很大程度不是在考验自己的临场发挥，而是考验选手对于少量黑白平衡 分支的记忆情况。")]),e._v(" "),t("h3",{attrs:{id:"广义的五子棋"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#广义的五子棋"}},[e._v("#")]),e._v(" 广义的五子棋")]),e._v(" "),t("p",[e._v("不带禁手的五子棋是属于一类更为普遍的*"),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/M,n,k-game",target:"_blank",rel:"noopener noreferrer"}},[e._v("m,n,k游戏"),t("OutboundLink")],1),t("em",[e._v("的一种特例，既15,15,5。**m,n,k游戏是指m行n列，轮流下子，连成k个算赢。**这个在数学中专门的研究如果在"),t("code",[e._v("最理想下法（Perfect Play）")]),e._v("的情况下有什么样不同的结果，比如标准的")]),e._v("三连棋（Tic-tac-toe）*是3,3,3是一个平局，同样只有六路棋盘的五子棋也是平局，当然上面我们已经说明了15,15,5是先手必胜，还有研究发现11,11，5也是先手必胜。m,n,k游戏只有先手必胜和平局两种结果。由于每下一个子都一定会对下子一方那一方有优势，所以可以通过反证法证明m,n,k游戏里不可能有后手胜利的情况。如果后手有胜利的方法，那么先手可以提前"),t("code",[e._v("借鉴（Strategy stealing）")]),e._v("过来实现必胜。")]),e._v(" "),t("p",[e._v("五子棋的介绍到此结束，接下来正式进入AI的介绍。")]),e._v(" "),t("h2",{attrs:{id:"ai介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ai介绍"}},[e._v("#")]),e._v(" AI介绍")]),e._v(" "),t("p",[e._v("由于AI的部分内容太多，我们只关心和接下来程序开发相关的部分，所以这里仅列出几个主要问题及解答作为介绍。（欲知详细请参考文末列出的资料内容）")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("传统规则下，无禁手和禁手不是已经都证明了先手必胜么，那人类和AI下还有意义么，如果设计一个算法让电脑一定能找出必胜下法，那人类必输啊？\n事实上AI先手，人类确实必输，但并非无意义。无禁条件下，如果不指定算法，人类也未必会输。而接下来我们要开发的AI，就是在无禁条件下的。\n（AI强制执黑而且必胜的软件，例如*"),t("a",{attrs:{href:"http://www.bf92.com/soft/five/five.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("五子棋终结者"),t("OutboundLink")],1),e._v("*）")])]),e._v(" "),t("li",[t("p",[e._v("在哪些规则下AI必胜，人类的比赛规则下AI也是必胜的么？\n如上面所说，带禁手和不带禁手的五子棋，以及部分典型规则下的五子棋，黑必胜，而人类的正式比赛因为有"),t("code",[e._v("交换")]),e._v("和"),t("code",[e._v("换打")]),e._v("的思想，所以ai不是必胜的了。")])]),e._v(" "),t("li",[t("p",[e._v("人类比赛有哪些典型规则来限制AI？\nGomocup比赛使用的就是"),t("code",[e._v("Prepared Balanced Opening")]),e._v("等专家提供的开局，通常认为较平衡且AI没有必胜下法。（现在Gomocup提供三种规则"),t("code",[e._v("Freestyle")]),e._v("、"),t("code",[e._v("Standard")]),e._v("和"),t("code",[e._v("Renju")]),e._v("，由于比赛的时候通常会提供没有找到必胜下法的开局，所以可以认为它是没有必胜下法的，虽然不排除有必胜下法但没找到）")])]),e._v(" "),t("li",[t("p",[e._v("AI vs AI，AI vs 人类，这两个AI的设计概念一样吗？\n不一样。你现在看起来可以和AI玩是因为这AI不是为了和你下棋而设计的，它是为了和其他AI玩gomocup才弄出来的，和人玩五子棋与和电脑玩的策略是完全不一样的，你不能说对它赢比输多就证明人能赢AI，因为如果写AI的目的是和人玩，那作者很多地方根本就不会这么写，更不会放着巨大的漏洞给你出骗招。")])])]),e._v(" "),t("blockquote",[t("p",[e._v("[1] Kai Sun,"),t("strong",[e._v("Gomoku/Renju Resouces-An Overview")]),e._v(",gomoku,renju,resource,Last update: 2016-7-26."),t("a",{attrs:{href:"http://www.aiexp.info/gomoku-renju-resources-an-overview.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("aiexp.info/gomoku-renju-resources-an-overview"),t("OutboundLink")],1),e._v("\n[2] Gomoku,From Wikipedia,the free encyclopedia,last modified on 26 August 2016, at 11:43."),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Gomoku",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gomoku,From Wikipedia, the free encyclopedia"),t("OutboundLink")],1),e._v("\n[3] Louis Victor Allis,"),t("strong",[e._v("Searching for Solutions in Games and Artifcial Intelligence")]),e._v(",Voor Petra en Cindy."),t("a",{attrs:{href:"https://project.dke.maastrichtuniversity.nl/games/files/phd/SearchingForSolutions.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Searching for Solutions in Games and Artifcial Intelligence"),t("OutboundLink")],1),e._v("\n[4] Janos Wagner,"),t("strong",[e._v("SOLVING RENJU")]),e._v(",Budapest,Hungary."),t("a",{attrs:{href:"http://www.sze.hu/~gtakacs/download/wagnervirag_2001.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("SOLVING RENJU"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);r.default=o.exports}}]);