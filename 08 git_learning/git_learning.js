3/ git仓库初始化：
 在本地仓库目录中,git bash
 输入:  git init

 4/ 配置本地使用者的用户名和邮箱
 配置用户名: git config --global user.name "xioaming"
 配置邮箱: 	git config --global user.email "xm@sine.com"

 5/ 代码储存到git仓库中

 代码放到仓库门口: 			git add ./readme.md
 代码从门口放到仓库里面去: 	git commit -m "这是对本次提交代码的说明"		不能直接使用


 6/ 没啥


 7/ 查看状态
 查看当前命令有没有被放到仓库中
 命令:
 	git status

 测试是否可以跳过git add 直接使用 git commit ----- 不行


 8/ 对5的补充

 	git add ./	将所有修改文件放到仓库门口

 	git commit --all -m "一次性提交所有修改文件"				可以直接使用


 9/ git查看历史日志

 	git log				查看历史日志
 	git log --oneline	查看简洁版的历史日志

10/ 回退到指定版本

	git reset --hard Head~0		回退到上一次代码提交时候的状态
	git reset --hard Head~1		回退到上上一次代码提交时候的状态

11/ git 通过版本号切换版本

	git reset --hard [版本号]	通过版本号精确的回到某一次状态

	git reflog					看到所有提交过的版本号


12/ 创建,切换,合并 分支

##分支		默认有一个主分支master
			分支就像是复刻的平行宇宙

##创建分支	`git branch dev`
	
	说明		创建了一个分支,名称为dev
			新创建时,dev里的内容和master里的内容是一样的

##切换分支	`git checkout dev`
	说明		切换到dev分支

##查看所有分支	`git branch`

##合并所有分支	`git merge dev`
	说明		合并分支内容, 将当前内容和指定分支(dev),进行合并
			当前分支:`git branch`命令下,前面带有*的分支 

	合并时,如果有冲突,需要手动处理,处理后再次提交
	


14/ 用git push 上传代码到 github

需求:将我们的代码上传到 服务器(github),别人想要使用时,可以随时下载

##github	不是git,是一个网站,但是提供 通过git上传代码的功能
			可以把github当做git服务器来用


##使用	在github上创建新仓库
		获取新仓库地址 Https
		将本地当前分支推到线上分支 
				git push [地址] [分支]
				`git push https://github.com/RonnyClub/Ronny_git_test01.git master`


15/ 新成员获取仓库内容:

## git pull	用于获取仓库内容到本地

使用:  	git pull [地址] [分支]
		
		
		本地存储文件夹下:
		
		先初始化仓库 		git init
		拉取内容到本地	`git pull https://github.com/RonnyClub/Ronny_git_test01.git master` 


## git clone 	获取远程仓库内容到本地 (可以不用初始化仓库文件夹,常用于新仓库)
									推荐使用git pull
				本地存储文件夹下:
				git clone [地址]
				`git clone https://github.com/RonnyClub/Ronny_git_test01.git`



16/ 通过ssh方式上上传代码

通过HTTPS上传代码,需要用到用户名和密码,这样不太安全

SSH是一种网络协议,用于计算机之间的加密登录。

SSH方式,可以不需要用户名和密码的同时,验证上传者的身份

感觉 公钥就是锁芯,私钥就是本机钥匙
	在github上设置锁芯,本机有了私钥,才可以对某个github账户进行提交等操作

本机生成公钥和私钥
	ssh-keygen -t rsa -C "18856325009@163.com"

	提示存放钥匙位置,我想这样可以让一台主机对应多个仓库吧
	使用生成的公钥代码,创建new SSH key

此时,在 git push , git pull  等等操作时,[地址]可以使用 SSH地址


17,18/ 本地修改冲突

应该先pull下来,修改冲突后,再push