(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{382:function(s,e,a){"use strict";a.r(e);var t=a(25),n=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1、查看当前内核版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、查看当前内核版本"}},[s._v("#")]),s._v(" 1、查看当前内核版本")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" -r\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.10")]),s._v(".0-1160.el7.x86_64\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" -a\nLinux localhost.localdomain "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.10")]),s._v(".0-1160.el7.x86_64 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#1 SMP Mon Oct 19 16:18:59 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux")]),s._v("\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/redhat-release \nCentOS Linux release "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.9")]),s._v(".2009 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Core"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"_2、升级内核"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、升级内核"}},[s._v("#")]),s._v(" 2、升级内核")]),s._v(" "),a("h4",{attrs:{id:"更新yum源仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新yum源仓库"}},[s._v("#")]),s._v(" 更新yum源仓库")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ yum -y update\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"启用-elrepo-仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启用-elrepo-仓库"}},[s._v("#")]),s._v(" 启用 ELRepo 仓库")]),s._v(" "),a("p",[s._v("ELRepo 仓库是基于社区的用于企业级 Linux 仓库，提供对 RedHat Enterprise (RHEL) 和 其他基于 RHEL的 Linux 发行版（CentOS、Scientific、Fedora 等）的支持。\nELRepo 聚焦于和硬件相关的软件包，包括文件系统驱动、显卡驱动、网络驱动、声卡驱动和摄像头驱动等。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#导入ELRepo仓库的公共密钥")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" --import https://www.elrepo.org/RPM-GPG-KEY-elrepo.org\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#安装ELRepo仓库的yum源")]),s._v("\n\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" https://www.elrepo.org/elrepo-release-7.el7.elrepo.noarch.rpm\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#rpm -Uvh https://www.elrepo.org/elrepo-release-7.el7.elrepo.noarch.rpm")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"_3、查看可用的系统内核包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、查看可用的系统内核包"}},[s._v("#")]),s._v(" 3、查看可用的系统内核包")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("yum --disablerepo"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*"')]),s._v(" --enablerepo"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"elrepo-kernel"')]),s._v(" list available\nLoaded plugins: fastestmirror\nLoading mirror speeds from cached hostfile\n * elrepo-kernel: linux-mirrors.fnal.gov\nelrepo-kernel/primary_db                                    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.0")]),s._v(" MB  00:00:02     \n可安装的软件包\nkernel-lt.x86_64                         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.4")]),s._v(".181-1.el7.elrepo         elrepo-kernel\nkernel-lt-devel.x86_64                   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.4")]),s._v(".181-1.el7.elrepo         elrepo-kernel\nkernel-lt-doc.noarch                     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.4")]),s._v(".181-1.el7.elrepo         elrepo-kernel\nkernel-lt-headers.x86_64                 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.4")]),s._v(".181-1.el7.elrepo         elrepo-kernel\nkernel-lt-tools.x86_64                   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.4")]),s._v(".181-1.el7.elrepo         elrepo-kernel\nkernel-lt-tools-libs.x86_64              "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.4")]),s._v(".181-1.el7.elrepo         elrepo-kernel\nkernel-lt-tools-libs-devel.x86_64        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.4")]),s._v(".181-1.el7.elrepo         elrepo-kernel\nkernel-ml.x86_64                         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.16")]),s._v(".11-1.el7.elrepo         elrepo-kernel\nkernel-ml-devel.x86_64                   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.16")]),s._v(".11-1.el7.elrepo         elrepo-kernel\nkernel-ml-doc.noarch                     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.16")]),s._v(".11-1.el7.elrepo         elrepo-kernel\nkernel-ml-headers.x86_64                 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.16")]),s._v(".11-1.el7.elrepo         elrepo-kernel\nkernel-ml-tools.x86_64                   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.16")]),s._v(".11-1.el7.elrepo         elrepo-kernel\nkernel-ml-tools-libs.x86_64              "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.16")]),s._v(".11-1.el7.elrepo         elrepo-kernel\nkernel-ml-tools-libs-devel.x86_64        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.16")]),s._v(".11-1.el7.elrepo         elrepo-kernel\nperf.x86_64                              "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.16")]),s._v(".11-1.el7.elrepo         elrepo-kernel\npython-perf.x86_64                       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.16")]),s._v(".11-1.el7.elrepo         elrepo-kernel\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("h2",{attrs:{id:"_4、安装最新长期支持版本内核"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、安装最新长期支持版本内核"}},[s._v("#")]),s._v(" 4、安装最新长期支持版本内核")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ yum --enablerepo"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("elrepo-kernel "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" kernel-lt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("kernel-ml 主线最新版本")]),s._v(" "),a("p",[a("code",[s._v("--enablerepo")]),s._v(" 选项开启 CentOS 系统上的指定仓库。默认开启的是 "),a("code",[s._v("elrepo")]),s._v("，这里用 "),a("code",[s._v("elrepo-kernel")]),s._v(" 替换。")]),s._v(" "),a("h2",{attrs:{id:"_5、设置-grub2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、设置-grub2"}},[s._v("#")]),s._v(" 5、设置 grub2")]),s._v(" "),a("p",[s._v("内核安装好后，需要设置为默认启动选项并重启后才会生效")]),s._v(" "),a("h4",{attrs:{id:"查看系统上的所有可用内核"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看系统上的所有可用内核"}},[s._v("#")]),s._v(" 查看系统上的所有可用内核：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" -F"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("' "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v('=="menuentry " {print i++ " : " '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),s._v("}'")]),s._v(" /etc/grub2.cfg\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" CentOS Linux "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.4")]),s._v(".181-1.el7.elrepo.x86_64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Core"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" CentOS Linux "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.10")]),s._v(".0-1160.el7.x86_64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Core"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" CentOS Linux "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("-rescue-7d2155314bbf7543a1024df4ab69de3a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Core"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h4",{attrs:{id:"设置新的内核为grub2的默认版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置新的内核为grub2的默认版本"}},[s._v("#")]),s._v(" 设置新的内核为grub2的默认版本")]),s._v(" "),a("p",[s._v("服务器上存在4 个内核，我们要使用 5.4 这个版本，可以通过 "),a("code",[s._v("grub2-set-default 0")]),s._v(" 命令或编辑 "),a("code",[s._v("/etc/default/grub")]),s._v(" 文件来设置")]),s._v(" "),a("h4",{attrs:{id:"方法1、通过-grub2-set-default-0-命令设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法1、通过-grub2-set-default-0-命令设置"}},[s._v("#")]),s._v(" 方法1、通过 "),a("code",[s._v("grub2-set-default 0")]),s._v(" 命令设置")]),s._v(" "),a("p",[s._v("其中 0 是上面查询出来的可用内核")]),s._v(" "),a("p",[a("code",[s._v("grub2-set-default 0")])]),s._v(" "),a("h4",{attrs:{id:"方法2、编辑-etc-default-grub-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法2、编辑-etc-default-grub-文件"}},[s._v("#")]),s._v(" 方法2、编辑 "),a("code",[s._v("/etc/default/grub")]),s._v(" 文件")]),s._v(" "),a("p",[s._v("设置 GRUB_DEFAULT=0，通过上面查询显示的编号为 0 的内核作为默认内核：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/default/grub\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GRUB_TIMEOUT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GRUB_DISTRIBUTOR")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s, release .*$,,g'")]),s._v(" /etc/system-release"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GRUB_DEFAULT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GRUB_DISABLE_SUBMENU")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GRUB_TERMINAL_OUTPUT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"console"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GRUB_CMDLINE_LINUX")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"crashkernel=auto rd.lvm.lv=cl/root rhgb quiet"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GRUB_DISABLE_RECOVERY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"true"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h4",{attrs:{id:"生成-grub-配置文件并重启"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成-grub-配置文件并重启"}},[s._v("#")]),s._v(" 生成 grub 配置文件并重启")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ grub2-mkconfig -o /boot/grub2/grub.cfg\nGenerating grub configuration "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nFound linux image: /boot/vmlinuz-5.4.181-1.el7.elrepo.x86_64\nFound initrd image: /boot/initramfs-5.4.181-1.el7.elrepo.x86_64.img\nFound linux image: /boot/vmlinuz-3.10.0-1160.el7.x86_64\nFound initrd image: /boot/initramfs-3.10.0-1160.el7.x86_64.img\nFound linux image: /boot/vmlinuz-0-rescue-7d2155314bbf7543a1024df4ab69de3a\nFound initrd image: /boot/initramfs-0-rescue-7d2155314bbf7543a1024df4ab69de3a.img\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("reboot")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h2",{attrs:{id:"_6、验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6、验证"}},[s._v("#")]),s._v(" 6、验证")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" -r\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.4")]),s._v(".181-1.el7.elrepo.x86_64\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"_7、删除旧内核-可选"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7、删除旧内核-可选"}},[s._v("#")]),s._v(" 7、删除旧内核（可选）")]),s._v(" "),a("h4",{attrs:{id:"查看系统中全部的内核"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看系统中全部的内核"}},[s._v("#")]),s._v(" 查看系统中全部的内核：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -qa "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" kernel\nkernel-lt-5.4.181-1.el7.elrepo.x86_64\nkernel-tools-libs-3.10.0-1160.el7.x86_64\nkernel-3.10.0-1160.el7.x86_64\nkernel-tools-3.10.0-1160.el7.x86_64\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h4",{attrs:{id:"方法1、yum-remove-删除旧内核的-rpm-包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法1、yum-remove-删除旧内核的-rpm-包"}},[s._v("#")]),s._v(" 方法1、yum remove 删除旧内核的 RPM 包")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ yum remove kernel-tools-libs-3.10.0-1160.el7.x86_64 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\nkernel-3.10.0-1160.el7.x86_64 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\nkernel-tools-3.10.0-1160.el7.x86_64\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h4",{attrs:{id:"方法2、yum-utils-工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法2、yum-utils-工具"}},[s._v("#")]),s._v(" 方法2、yum-utils 工具")]),s._v(" "),a("p",[s._v("如果安装的内核不多于 3 个，"),a("code",[s._v("yum-utils")]),s._v(" 工具不会删除任何一个。只有在安装的内核大于 3 个时，才会自动删除旧内核。")]),s._v(" "),a("p",[s._v("安装yum-utils")]),s._v(" "),a("p",[a("code",[s._v("$ yum install yum-utils")])]),s._v(" "),a("p",[s._v("删除旧版本")]),s._v(" "),a("p",[a("code",[s._v("package-cleanup --oldkernels")])])])}),[],!1,null,null,null);e.default=n.exports}}]);