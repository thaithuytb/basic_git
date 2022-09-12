# rebase-merge
if master is 1,2,3
branch is 1245
using

git rebase master (from branch);
1.#ctrl X - to out insert screen
2.#--fix conflict of commit 4 with master (1234). (b)
3.#git add.
4.#--git rebase -- continue
5.#--fix conflict of commit 5 with (b)
6.#git add .
7.#--git rebase --continue to insert commit
8.#--git push -f
