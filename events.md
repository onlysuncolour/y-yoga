# 事件记

## 2018-7-25

### 事件起因
master分支上，存在5个mp3文件，40M左右，阿里云上拉代码(20k/s)导致超时。

### 解决方案
1. 设置大文件拉取时忽略
2. 加大阿里云上访问git的速度
3. 将master分枝上关于mp3的commit删除掉

方案1 不可行。方案2 预计在之后部署海外服务器，生成自己的vpn解决。决定使用方案3

### 解决方法
```bash
git branch old_master 
git push origin old_master:old_master
git checkout old_master
git filter-branch -f --prune-empty --index-filter 'git rm -rf --cached --ignore-unmatch *.mp3' --tag-name-filter cat -- --all
在github设置default branch 为old_master
删除远程及本地的master分支
git branch master
git push origin master:master
在github设置default branch master
删除远程及本地的old_master分支
git checkout master
```

