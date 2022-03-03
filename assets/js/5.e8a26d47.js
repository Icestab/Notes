(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{409:function(s,t,a){s.exports=a.p+"assets/img/m1.71092195.jpg"},410:function(s,t,a){s.exports=a.p+"assets/img/m2.d5e84556.jpg"},411:function(s,t,a){s.exports=a.p+"assets/img/m3.a4376aa2.jpg"},447:function(s,t,a){"use strict";a.r(t);var r=a(34),e=Object(r.a)({},(function(){var s=this,t=s.$createElement,r=s._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[r("h1",{attrs:{id:"centos7重置mysql8-root-密码"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#centos7重置mysql8-root-密码"}},[s._v("#")]),s._v(" Centos7重置Mysql8 root 密码")]),s._v(" "),r("p",[s._v("安装完 最新版的 mysql8后忘记了密码，向重置root密码；找了网上好多资料都不尽相同，根据自己的问题总结如下：")]),s._v(" "),r("h2",{attrs:{id:"一、修改配置文件免密码登录mysql"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、修改配置文件免密码登录mysql"}},[s._v("#")]),s._v(" 一、修改配置文件免密码登录mysql")]),s._v(" "),r("h3",{attrs:{id:"_1-1-打开配置文件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-打开配置文件"}},[s._v("#")]),s._v(" 1.1 打开配置文件")]),s._v(" "),r("p",[r("code",[s._v("vim /etc/my.cnf")])]),s._v(" "),r("p",[r("img",{attrs:{src:a(409),alt:"m1"}})]),s._v(" "),r("h3",{attrs:{id:"_1-2-在-mysqld-最后加上如下语句-并保持退出文件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-在-mysqld-最后加上如下语句-并保持退出文件"}},[s._v("#")]),s._v(" 1.2 在 [mysqld]最后加上如下语句 并保持退出文件")]),s._v(" "),r("p",[r("code",[s._v("skip-grant-tables")])]),s._v(" "),r("p",[r("img",{attrs:{src:a(410),alt:"m2"}})]),s._v(" "),r("h3",{attrs:{id:"_1-3-重启mysql服务"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-重启mysql服务"}},[s._v("#")]),s._v(" 1.3 重启mysql服务")]),s._v(" "),r("p",[r("code",[s._v("service mysqld restart")])]),s._v(" "),r("h2",{attrs:{id:"二、免密登录mysql-直接在命令行上输入"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、免密登录mysql-直接在命令行上输入"}},[s._v("#")]),s._v(" 二、免密登录mysql，直接在命令行上输入")]),s._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[s._v("mysql\n//或者\nmysql -u root -p \n//password直接回车\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br"),r("span",{staticClass:"line-number"},[s._v("4")]),r("br")])]),r("h2",{attrs:{id:"三、给root用户重置密码"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、给root用户重置密码"}},[s._v("#")]),s._v(" 三、给root用户重置密码")]),s._v(" "),r("h3",{attrs:{id:"_3-1首先查看当前root用户相关信息-在mysql数据库的user表中"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-1首先查看当前root用户相关信息-在mysql数据库的user表中"}},[s._v("#")]),s._v(" 3.1首先查看当前root用户相关信息，在mysql数据库的user表中")]),s._v(" "),r("div",{staticClass:"language-sql line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-sql"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" host"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" authentication_string"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" plugin "),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br")])]),r("p",[s._v("host: 允许用户登录的ip‘位置’%表示可以远程；")]),s._v(" "),r("p",[s._v("user:当前数据库的用户名；")]),s._v(" "),r("p",[s._v("authentication_string: 用户密码；在mysql 5.7.9以后废弃了password字段和password()函数；")]),s._v(" "),r("p",[s._v("plugin： 密码加密方式；")]),s._v(" "),r("p",[r("img",{attrs:{src:a(411),alt:"m3"}})]),s._v(" "),r("h3",{attrs:{id:"_3-2如果当前root用户authentication-string字段下有内容-先将其设置为空"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-2如果当前root用户authentication-string字段下有内容-先将其设置为空"}},[s._v("#")]),s._v(" 3.2如果当前root用户authentication_string字段下有内容，先将其设置为空")]),s._v(" "),r("div",{staticClass:"language-sql line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-sql"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" mysql"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" authentication_string"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br")])]),r("h3",{attrs:{id:"_3-3-退出mysql-删除-etc-my-cnf文件最后的-skip-grant-tables-重启mysql服务"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-退出mysql-删除-etc-my-cnf文件最后的-skip-grant-tables-重启mysql服务"}},[s._v("#")]),s._v(" 3.3 退出mysql, 删除/etc/my.cnf文件最后的 skip-grant-tables 重启mysql服务")]),s._v(" "),r("h3",{attrs:{id:"_3-4-使用root用户进行登录-因为上面设置了authentication-string为空-所以可以免密码登录"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-使用root用户进行登录-因为上面设置了authentication-string为空-所以可以免密码登录"}},[s._v("#")]),s._v(" 3.4 使用root用户进行登录，因为上面设置了authentication_string为空，所以可以免密码登录")]),s._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[s._v("mysql -u root -p\npasswrod:直接回车;\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br")])]),r("h3",{attrs:{id:"_3-5使用alter修改root用户密码"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-5使用alter修改root用户密码"}},[s._v("#")]),s._v(" 3.5使用ALTER修改root用户密码")]),s._v(" "),r("div",{staticClass:"language-sql line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-sql"}},[r("code",[s._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),r("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'localhost'")]),s._v(" IDENTIFIED "),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Qian123#'")]),s._v("\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br")])]),r("p",[s._v("至此修改成功； 从新使用用户名密码登录即可。")]),s._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),r("p",[s._v("一定不要采取如下形式该密码：")]),s._v(" "),r("div",{staticClass:"language-sql line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-sql"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" mysql"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" authentication_string"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"newpassword"')]),s._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"root"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br")])]),r("p",[s._v("这样会给user表中root用户的authentication_string字段下设置了newpassword值；")]),s._v(" "),r("p",[s._v("当再使用ALTER USER 'root'@'localhost' IDENTIFITED BY 'newpassword'时会报错的；")]),s._v(" "),r("p",[s._v("因为authentication_string字段下只能是mysql加密后的41位字符串密码；其他的会报格式错误；")])])])}),[],!1,null,null,null);t.default=e.exports}}]);