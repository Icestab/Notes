(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{406:function(s,a,t){s.exports=t.p+"assets/img/z1.c2012000.png"},407:function(s,a,t){s.exports=t.p+"assets/img/z2.4e517040.png"},448:function(s,a,t){"use strict";t.r(a);var n=t(34),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"oh-my-zsh安装与基本配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#oh-my-zsh安装与基本配置"}},[s._v("#")]),s._v(" oh-my-zsh安装与基本配置")]),s._v(" "),n("p",[s._v("zsh是一个Linux下强大的shell, 由于大多数Linux产品安装以及默认使用bash shell, 但是丝毫不影响极客们对zsh的热衷, 几乎每一款Linux产品都包含有zsh，通常可以用apt、urpmi或yum等包管理器进行安装")]),s._v(" "),n("p",[s._v("zsh是bash的增强版，其实zsh和bash是两个不同的概念，zsh更加强大")]),s._v(" "),n("p",[s._v("通常zsh配置起来非常麻烦，且相当的复杂，所以oh-my-zsh是为了简化zsh的配置而开发的，因此oh-my-zsh算是zsh的配置")]),s._v(" "),n("h2",{attrs:{id:"_1-、准备"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-、准备"}},[s._v("#")]),s._v(" 1 、准备")]),s._v(" "),n("p",[n("strong",[s._v("查看当前系统使用的shell")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("ubuntu@ubuntu:~$ "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$SHELL")]),s._v("\n/bin/bash\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[n("strong",[s._v("查看系统自带哪些shell")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("ubuntu@ubuntu:~$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/shells \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /etc/shells: valid login shells")]),s._v("\n/bin/sh\n/bin/bash\n/usr/bin/bash\n/bin/rbash\n/usr/bin/rbash\n/bin/dash\n/usr/bin/dash\n/usr/bin/tmux\n/usr/bin/screen\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("h2",{attrs:{id:"_2、安装zsh"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、安装zsh"}},[s._v("#")]),s._v(" 2、安装zsh")]),s._v(" "),n("p",[n("strong",[s._v("开始安装")])]),s._v(" "),n("p",[n("code",[s._v("sudo apt install zsh -y")])]),s._v(" "),n("p",[n("strong",[s._v("再次查看")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("ubuntu@ubuntu:~$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/shells \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /etc/shells: valid login shells")]),s._v("\n/bin/sh\n/bin/bash\n/usr/bin/bash\n/bin/rbash\n/usr/bin/rbash\n/bin/dash\n/usr/bin/dash\n/usr/bin/tmux\n/usr/bin/screen\n/bin/zsh\n/usr/bin/zsh\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("p",[s._v("表明已经安装好zsh")]),s._v(" "),n("p",[n("strong",[s._v("配置")])]),s._v(" "),n("p",[s._v("zsh设为默认shell")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("chsh -s /bin/zsh\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("reboot")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),n("p",[s._v("若总是报错"),n("code",[s._v("chsh: PAM: Authentication failure")]),s._v("\n直接修改用户的配置\n"),n("code",[s._v("vim /etc/passwd/")])]),s._v(" "),n("p",[s._v("查看系统当前使用的shell")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("ubuntu% "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$SHELL")]),s._v(" \n/bin/zsh\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("表明已经将zsh设置为默认shell")])]),s._v(" "),n("h2",{attrs:{id:"_3、安装oh-my-zsh"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3、安装oh-my-zsh"}},[s._v("#")]),s._v(" 3、安装oh-my-zsh")]),s._v(" "),n("p",[n("code",[s._v('sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"')])]),s._v(" "),n("p",[s._v("或者")]),s._v(" "),n("p",[n("code",[s._v('sh -c "$(wget https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"')])]),s._v(" "),n("p",[s._v("如果github无法连接，可以使用gitee")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("https://gitee.com/mirrors/oh-my-zsh/raw/master/tools/install.sh\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("出现下面界面成功安装：")]),s._v(" "),n("p",[n("img",{attrs:{src:t(406),alt:"z1"}})]),s._v(" "),n("h2",{attrs:{id:"_4、个性化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4、个性化"}},[s._v("#")]),s._v(" 4、个性化")]),s._v(" "),n("h3",{attrs:{id:"_1-主题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-主题"}},[s._v("#")]),s._v(" 1.主题")]),s._v(" "),n("p",[n("code",[s._v("vim ~/.zshrc")])]),s._v(" "),n("p",[n("img",{attrs:{src:t(407),alt:"z2"}})]),s._v(" "),n("p",[s._v("使用下面命令使配置生效，我喜欢"),n("strong",[s._v("ys")])]),s._v(" "),n("p",[n("code",[s._v("source ~/.zshrc")])]),s._v(" "),n("p",[s._v("安装字体解决zsh乱码问题")]),s._v(" "),n("p",[n("code",[s._v("apt install fonts-powerline -y")])]),s._v(" "),n("h3",{attrs:{id:"_2-插件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-插件"}},[s._v("#")]),s._v(" 2.插件")]),s._v(" "),n("p",[s._v("ohmyzsh强大的地方就强大在其有丰富的插件，但是我个人推荐的插件不多6个，其中4个是自带的2个需要自己安装（"),n("code",[s._v("https://github.com/zsh-users")]),s._v("上有各种插件可以自行选择）")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/zsh-users/zsh-syntax-highlighting.git "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${ZSH_CUSTOM"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":-")]),s._v("~"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(".oh-my-zsh"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("custom}")]),s._v("/plugins/zsh-syntax-highlighting\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/zsh-users/zsh-autosuggestions "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${ZSH_CUSTOM"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":-")]),s._v("~"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(".oh-my-zsh"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("custom}")]),s._v("/plugins/zsh-autosuggestions\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[n("strong",[s._v("安装完成之后需要配置zsh的配置文件")])]),s._v(" "),n("p",[n("code",[s._v("vim ~/.zshrc")])]),s._v(" "),n("p",[n("strong",[s._v("打开文件之后在plugins中增加以下内容：")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("plugins")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v("\n        z\n        extract\n        zsh-syntax-highlighting\n        zsh-autosuggestions\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("history")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("ul",[n("li",[n("p",[s._v("git：常用的git命令缩写")])]),s._v(" "),n("li",[n("p",[s._v("z：自动跳转（及其推荐使用）")])]),s._v(" "),n("li",[n("p",[s._v("extract：解压通过x命令解压任何类型的压缩文件")])]),s._v(" "),n("li",[n("p",[s._v("zsh-syntax-highlighting：命令高亮（及其推荐）")])]),s._v(" "),n("li",[n("p",[s._v("zsh-autosuggestions：命令自动补齐（及其推荐）")])]),s._v(" "),n("li",[n("p",[s._v("history：查看历史命令")])])]),s._v(" "),n("p",[n("strong",[s._v("启用配置文件：")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/.zshrc\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);