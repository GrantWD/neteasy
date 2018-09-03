## 网易云项目要求
- 项目成员
 - 安静
 - 王妍
 - 向周圆
 - 赵飞洋
- 页面安排
	- 前台页面
		-
	- 后台页面

## 命名规则
	js函数命名，css类名，vue组件都是用驼峰命名规则

## 移动端布局
	rem布局回合布局

## 公共的样式reset文件不能随意的改动

## 页面的头部和底部是公共的组件 

## 在vue中使用sass
https://blog.csdn.net/twodogya/article/details/80187469


## 首先将每个组员仓库的SSH添加到服务器仓库（如何创建每个人的分支）

这个SSH不能添加到多个仓库，只能添加到一个仓库

## 每天早上将仓库的pull到本地仓库，每天晚上将自己仓库的文件push到服务器仓库
## 仓库地址 https://github.com/GrantWD/neteasy.git

## 如果忘记git pull 到本地后，直接编写代码，忘记pull了，如果在更改后再用git pull 更新到本地代码
结果就会报错
如果需要保留刚才本地修改的代码，并且把git服务器上的代码pull到本地，本地的修改过的代码会被
暂时的封存起来
```javascript
	git stash
	git pull origin master
	git stash pop
	git add
	git commit
	git push
```
