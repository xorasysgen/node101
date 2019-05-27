#Nodejs101  first Project  <br />
$node --version <br />
$npm --version <br />
$node <br />
$open up a folder in visual code <br />
$npm init  #create package.json <br />
$npm install uuid  # create uuid <br />
$npm install --save-dev nodemon  # download devleopment dependency <br />
$npm install -D nodemon  # download devleopment dependency <br />
[above 2 are identical] <br />

go ahead to start development write codes<br />
 
#Git Commands <br />
#Steps to be performed to achieve git repository
$ right click of so urce folder<br />
$ git init <br />
$ git config --global user.name 'sushil kumar bhaskar' <br />
$ git config --global user.email 'xorasysgen$yahoo.com' <br />
$ git status<br />
$ git add . # will add all<br />
$ git add *.html # will add only html<br />
$ git add file.html # will add only file.html<br />
$ git commit<br />
$ press i<br />
$ add comment like --initial commit<br />
$ press escape then type :wq  #save and exit<br />
$ do any changes get status and add that<br />
$ git commit -m 'changes in renamed_test.txt'<br />
$ git branch login #create branch<br />
$ git commit -m 'new branch created'<br />
$ git checkout login<br />
$ touch login.html<br />
$ git add .<br />
$ git commit -m 'login.html added'<br />
$ git checkout msater # login.html will gone<br />
$ git merge login # edit window will open add comment and save and exit<br />
$ git remote<br />
$ git remote add origin https://github.com/xorasysgen/node101  # remote server<br />
$ git push -u origin master   # push will update to remote<br />
$ touch readme.md<br />
$ git add .<br />
$ git commit -m 'read me added'<br />
$ git push<br />
$ git pull origin master
From https://github.com/xorasysgen/node101
 * branch            master     -> FETCH_HEAD
Already up to date.


Here are the Git commands which are being covered:<br />
$ git config => command to sets the author name and email address respectively to be used with your commits<br />
```js
Usage: git config –global user.name 'name'   
Usage: git config –global user.email 'email@address' 
```
$ git init =>command is used to start a new repository.<br />
```js
Usage: git init
```
$ git clone => command is used to obtain a repository from an existing URL. <br />
```js
Usage: git clone https://github/node
```
$ git add => command adds a file to the staging area. <br />
```js
Usage: git add abc.js or .
```
$ git commit => command records or snapshots the file permanently in the version history.<br />
```js
Usage: git commit -m 'Type in the commit message' 
```
$ git diff =>command shows the file differences which are not yet staged.<br />
```js
Usage: git diff   #shows the file differences which are not yet staged.
Usage: git diff –staged    #differences between the files in the staging area and the latest version present.
Usage: git diff [first branch] [second branch]  #differences between the two branches mentioned.
```
$ git reset [filename]=> command unstages the file, but it preserves the file contents. <br />
```js
Usage: git reset [file] #unstages the file, but it preserves the file contents.
Usage: git reset hashOfCommit #undoes all the commits after the specified commit and preserves the changes locally.
Usage: git reset –hard hashOfCommit  #discards all history and goes back to the specified commit.
```
$ git status => lists all the files that have to be committed.<br />
```js
Usage: git status  
```
$ git rm => deletes the file from your working directory and stages the deletion.<br />
```js
Usage: git rm filename
```
$ git log => used to list the version history for the current branch.<br />
```js
Usage: git log  
Usage: git log –follow[file] 
```
$ git show => shows the metadata and content changes of the specified commit.<br />
```js
Usage: git show hashOfCommit
```
$ git tag => is used to give tags to the specified commit.<br />
```js
Usage: git tag hashOfCommit  
```
$ git branch =>lists all the local branches in the current repository.<br />
```js
Usage: git branch
Usage: git branch branch_name  #command creates a new branch.
Usage: git branch -d branch_name #deletes the feature branch.
```
$ git checkout<br />
```js
Usage: git checkout branch_name  #is used to switch from one branch to another.
Usage: git checkout -b branch_name #creates a new branch and also switches to it.
```
$ git merge<br />
```js
Usage: git merge branch_name]  #merges the specified branch’s history into the current branch.
```
$ git remote<br />
```js
Usage: git remote add origin Remote_Server_Link
```
$ git push => sends the committed changes of master branch to your remote repository.<br />
```js

```
$ git pull<br />
```js

```
$ git stash<br />
```js

```
