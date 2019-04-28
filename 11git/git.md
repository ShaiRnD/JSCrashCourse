# Git & Source controls

## Git Alternatives :
* TFS - team foundation server (microsoft)
* SVN
* Mercurial

## Git ecosystem

* Github
* Bitbucket (allows private repositories for free)
* Gitlab


## Nomenclature
* repository - a project of code
* fork
* commits
* branches
* releases
* issues
* pull requests
* clone, push

## Git commands

* `git clone <repo>`
* `git add .` - adds every change to stagin area
* `git commit -m "comment"`
    * `git commit -am "comment"` - only adds tracked files to staging area
* `git status`
* `git log` (:q to quit)
* `git checkout <hash> .` - will checkout the commit
* `git checkout -b <branch_name>` - creates a branch and checks it out
* `git branch <branch_name>` - create a branch without checkout