---
title: Flatpak Frequently Asked Questions
description: FAQ about the Flatpak project.
---
<section class=""><div class="container"><div class="row"><div class="col-lg-10 col-lg-offset-1">
:markdown

  # 经常被问到的问题
  
  <ul id="toc" data-toc data-toc-headings="h3"></ul>
  
  ### 为什么叫Flatpak?

  宜家(IKEA)是一个世界知名品牌，其成功部分建立在开发和改进平板包装家具的理念之上，与竞争对手相比，这些理念为其节省了大量成本，并且提高了效率。 
  因此，当我们需要为一个由瑞典人（Alex Larsson）开发的新的打包技术起名字时，我们认为Flatpak是一个非常好的选择，它既表现了Alex的国籍，又向宜家的成功致敬，
  同时释放出一个强烈的信号：这种新的打包技术可以为Linux桌面带来革命性的变化。

  ### Flatpak技术的起源是什么?

  Flatpak是一项技术，它汇集了Alexander Larsson在长期担任Linux桌面开发者和在Ret Hat期间研究容器技术的经验。
  Flatpak建立在现有技术的基础上，例如Linux内核中的cgroups, namespaces, bind mounts 和 seccomp，Project Atomic的OSTree以及Open Container Initiative开发的OCI格式。 
  它还催生了像Bubbleprap这样的新技术，这些技术在Flatpak和Project Atomic之间共享。

  ### Flatpak会与GNOME捆绑吗?

  不会。 尽管Flatpak是由长期参与GNOME社区的人开发的，但它并不与任何桌面捆绑。 
  事实上，它的设计目标明确指出用户可以使用任何他想使用的库或编程语言来构建应用程序。

  ### Flatpak会与Fedora捆绑吗?

  不会。事实上，在Endless OS和Linux Mint上默认会启用Flatpak甚至Flathub。 
  Flatpak开发者长期参与其他Linux发行版（如：Debian，Fedora等）的构建和开发，并在这些发行版上解决一些应用程序分发时出现的问题。 
  Flatpak的构建与分发无关，它可以在任何Linux操作系统上进行部署。

  ### Flatpak会与Linux捆绑吗?

  当然。 我们使用了许多linux内核的特性 (如：bind mounts, namespaces, seccomp, etc) 来创建运行Flatpak应用程序的沙盒。 
  在其他内核上可能有类似的技术, 但是那不是一项简单的工作, 并且也不在我们的考虑范围内。

  ### Flatpak会与systemd捆绑吗?

  不会。 Flatpak 0.6.10之前的版本依赖systemd为cgroups初始化, 但现在不需要了。

  ### Flatpak和xdg-app一样吗?

  是的，虽然xdg-app是一个在开发过程中使用的好名字，但我们想要的东西比xdg-app所能提供的更具吸引力。 
  因此，作为正式推出Flatpak的一部分，我们决定选择一个更有趣的名称。

  ### Flatpak是一种容器技术吗?

  大概吧, 但不一定是。由于桌面应用程序需要进行大量更改才能在容器内运行，
  因此在早期Flatpak主要作为便利的库捆绑技术使用，随着时间的推移，越来越多应用程序走向容器化，沙盒化。
  一般来说，尽管我们在谈论Flatpak时会尽量避免使用“容器”这个术语，因为它往往导致与Docker和rkt的比较，
  由于这些技术试图解决的问题不同，所以很快就会停止技术意义上的比较。 
  因此我们更喜欢使用沙盒这个术语。

  ### Flatpak是如何与freedesktop.org的技术（如desktop files and AppStream metadata）联系起来的?

  这些标准是Flatpak定义中的必需部分。 通过依赖这些标准我们能站在巨人的肩膀上（众多厂商对Linux多年的投资和支持）。

  ### 服务器能使用Flatpak吗?
  
  Flatpak被设计在桌面会话内运行，并依赖于某些会话服务，例如D-Bus会话总线，以及可选的systemd `--user`实例。 这使得Flatpak不适合服务器。

  当然，Flatpak的构建功能在会话外运行良好，因此您也可以在服务器上构建。

  ### Flatpak与其他桌面隔离框架兼容吗？

  通常，无特权的容器系统无法堆叠，因为在沙箱内运行的任何东西都没有设置沙箱的必要权限，也无法以任何方式提升其权限。 
  例如，Firejail永远不能在Flatpak内部工作，因为它是setuid。 
  话虽如此，一次使用多个沙盒框架并没有真正使任何东西更加安全，所以尝试嵌套这样的东西没什么意义。
  
  当然，在同一主机系统上，Flatpak和Flatpak应用程序可以和以其他方式打包的应用程序共存。
  
  ### 有IDEs支持Flatpak吗?

  当然有的!

  [GNOME Builder](https://wiki.gnome.org/Apps/Builder) 3.22.4及以上的版本包含了对`flatpak-builder` 清单的支持。 
  这可确保使用所选的Flatpak运行时和任何外部依赖项构建项目。 还提供在Flatpak中运行应用程序的支持。 
  通过在与用户完全相同的环境中开发应用程序，您可以在用户使用之前减少那些“Works for me”的bugs！
  
  ### 我能在GitHub托管Flatpak应用吗?

  Flatpak仓库（当前）不能方便的托管在GitHub上。 
  作为替代方案，您可以创建单个文件包，并将其“发布”在GitHub上。
  请注意，与仓库相比，单个文件包具有一些缺点。 
  另一个方案是让你的应用程序托管在[Flathub](https://flathub.org/)上，这将允许您的用户获得更新。
</div></div></div></section>
