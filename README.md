# rebase-merge
if master is 1,2,3
branch is 1245
using

** process

git rebase master (from branch);
1.#ctrl X - to out insert screen
2.#--fix conflict of commit 4 with master (1234). (b)
3.#git add.
4.#--git rebase -- continue
5.#--fix conflict of commit 5 with (b)
6.#git add .
7.#--git rebase --continue to insert commit
8.#--git push -f

** rebase will fix conflict each commit with master.

*** rename branch in local and remote
1. local:
#git branch -m old-name new-name
vertify 
#git branch -a 
2. remote
#git push origin :old-name new-name
#git push origin HEAD (ddto push code to remote has same name ) (exmple: local thai ---> thai)
