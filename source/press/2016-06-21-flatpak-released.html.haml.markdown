---
title: Flatpak Released
description: Announcing Flatpak – Next Generation Linux Applications
---
<section class=""><div class="container"><div class="row"><div class="col-lg-10 col-lg-offset-1">
:markdown
  # Flatpak —— 下一代Linux应用分发解决方案

  Stockholm, Sweden – 21<sup>st</sup> June 2016 ——
  Flatpak开发团队很高兴的宣布其Linux桌面应用程序框架已经可用。
  Flatpak原来叫xdg-app, [Flatpak已在大多数Linux发行版可用](http://flatpak.org/getting.html).

  ## 一次构建，到处运行

  <img alt="" src="/img/logo-press.svgz" class="fright">
  
  Linux桌面长期受到平台碎片的困扰。 
  这对开发者来说是一种负担，并给第三方应用开发者制造了很高的门槛。 
  Flatpak旨在改变这一切。 
  从一开始，它的主要目标就是允许相同的应用程序在大多数的Linux发行版和操作系统上运行。 
  这样做可以大大增加应用开发者和用户的数量。
  
  谈到Flatpak背后的目标，其首席开发者Alexander Larsson说：
  “Linux上的应用程序开发者一直无法与用户建立直接联系。 
  通过Flatpak，我们将改变这一现状，开发者确切地知道他们用户的环境。 
  经过这次发布，我们正在朝着这一目标前进。”
  
  几个星期以来，Flatpak已经可用于各种Linux发行版。
  它允许应用程序开发者针对一系列稳定平台（Flatpak称其为运行时）进行构建，以及直接在其应用程序中捆绑库。
  Flatpak也遵循标准，提供对[Open Container Initiative](https://www.opencontainers.org/)规范的支持。

  越来越多的应用程序已经打包为Flatpak使用，包括LibreOffice，GIMP，InkScape，MyPaint，Darktable和大量其他GNOME应用程序。
  [flatpak.org提供了如何轻松尝试这些的说明](/apps.html)。
  自3月以来，一个功能齐全的GNOME运行时已经可用：
  这允许应用程序开发者使用GNOME技术栈构建和分发Flatpak应用。
  与此同时，KDE运行时正在开发中。

  Flatpak不仅提供跨发行版安装，而且还允许向前兼容。
  [The Document Foundation](https://www.documentfoundation.org/)主管Michael Meeks说: 
  “到目前为止，构建一个适用于每个Linux用户的LibreOffice都不得不做一些可怕的妥协，
  因为需要在古老的Linux版本上构建我们的二进制文件以获得良好的向前兼容性。
  Flatpak将使我们（作为Linux ISV）能够分发更好的LibreOffice，具有最新的依赖关系和可在许多系统上运行的平台。
  我很高兴看到这种情况发生。”
  
  ## 安全优先

  Linux桌面薄弱的另一个领域是安全：
  它从来没有一个可行的模型来隔离应用程序，或者对用户数据进行访问控制。 
  这是Flatpak关注的另一个领域。 
  因此，Flatpak始终以安全为基础构建。
  
  Flatpak应用程序是沙盒。 
  在沙盒中，应用程序仅可以“看到”的就是本身和一组有限的库以及操作系统接口。 
  这有效地将应用程序彼此隔离，将应用与主机系统隔离，并使应用程序更难以窃取用户数据或相互利用。
  
  最初的Flatpak主要集中在应用程序的构建，分发和安装上，
  虽然沙盒的基础部分已经到位，但仍然缺少一些东西。 
  “下一个主要的Flatpak版本将全部与沙盒相关”，拉尔森说。 
  “应用开发者将看到一组更完整的接口，用于在沙箱中与操作系统进行交互。”
  
  这项工作的另一个主要部分是在Linux上向Wayland显示服务器的大规模迁移。 
  X11本质上是不安全的，这使得沙盒应用程序无法使用它。 
  从这个意义上说，Wayland日益成熟，促进了Flatpak的出现，为Linux发行版的更完整的安全模型铺平了道路。
  
  ## Flatpak的开发背景
  
  [![Alexander Larsson. Photo by Garrett LeSage](/img/CC-BY-SA-4.0-Garrett-LeSage-sm.jpg "Alexander Larsson. Photo by Garrett LeSage")](/img/CC-BY-SA-4.0-Garrett-LeSage.jpg)

  Flatpak是Red Hat首席软件工程师Alexander Larsson的心血结晶。 
  Larsson已经在Linux桌面领域工作了18年。 
  他是GVfs（GNOME的虚拟文件系统）的主要作者，
  并在Docker，SPICE协议，Gecko渲染引擎，GLib和GTK+方面做过重要工作。 
  他在应用程序打包领域拥有丰富的经验。
  
  Flatpak以多种高精尖的技术为基础。 
  在内部，它大量使用[OSTree](https://ostree.readthedocs.org)，
  我们可以把OSTree看作是“Git for large binaries”。 
  这为托管软件仓库提供了许多功能。 
  它还使Flatpak非常高效：
  与Flatpak一起安装的应用程序和库是不重复的，这样可以节省磁盘空间; 
  “static deltas”减少了软件更新时的大小。
  
  在沙盒方面，Flatpak使用了[Bubblewrap](https://github.com/projectatomic/bubblewrap)工具包，
  以及几个Linux内核特性(如cgroups和namespaces)，
  这些有助于Flatpak移植到其他发行版中。
  
  ## 快速发展的社区

  众所周知，Fedora正在围绕Flatpak制定计划。 
  Christian F.K. Schaller（红帽高级经理和Fedora工作站工作组成员）在评论Flatpak时表示：
  “Fedora工作站团队对Flatpak以及它使Linux桌面开发更容易带来的前景感到非常兴奋。 
  我们计划继续支持这项工作，并向更广泛的受众宣传。”

  其他人也表现出对Flatpak的兴趣。 Flatpak的早期用户是[Endless Computers](https://endlessm.com/)。 
  Jonathan Blandford（Endless的软件工程副总裁）在谈到Flatpak的推出时说：
  “Flatpak的推出标志着为Linux开发者提供统一环境跨出了重要的一步。 
  我们很高兴参与这项运动，全面拥抱Flatpak技术，新版本将采用Flatpak构建，并且继续构建Flatpak应用。
  我们鼓励其他人也这样做，希望这在Linux应用程序的创建和使用中成为一场革命。”
  
  ![Endless Computers and its App ecosystem](/img/endless-apps.png "Endless Computers and its App ecosystem")

  其他发行版和自由软件公司也表现出了对Flatpak的兴趣。 
  Simon McVittie是Collabora的高级软件工程师和Debian开发者，
  他本人也在寻求类似Flatpak的技术：
  “将Flatpak技术引入Debian使我们能够在可预测的环境中使用最合适的库运行应用程序，而不会影响基本操作系统的稳定性和灵活性。
  Flatpak还保留了部署安全更新的能力，
  这是对社区和商业产品中许多基于Debian的桌面和嵌入式发行版的一个重大增强。”
  
  他们对Flatpak越来越感兴趣的一个原因是由于它的适应性以及它是一个真正的上游项目。 
  它可以作为下游和定制解决方案的一部分使用和调整，
  Flatpak托管在Freedesktop.org和Github上，采用LGPL许可，
  不需要版权转让或贡献者授权。
  
  Larsson显然对Flatpak的前景感到高兴。 
  “随着开发者意识到这项技术的潜力，
  他们对我们正在做的事情会越来越感兴趣，这令人兴奋，”他说。
  
  有关Flatpak的更多信息，请访问 [flatpak.org](http://flatpak.org/).

</div></div></div></section>

