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

***merge many commit to one: orgin: https://hoangphiit.com/post/cach-gop-nhieu-commit-thanh-mot-voi-git-rebase
1.#git rebase -i HEAD~N (N = number commit)
2.#
![image](https://user-images.githubusercontent.com/72178224/190998227-1a19cff5-1466-4446-8c4c-e004e4a54252.png)
3. #
![image](https://user-images.githubusercontent.com/72178224/190998334-62ce9121-25c3-46c5-af4c-68a116efac55.png)
4. #
![image](https://user-images.githubusercontent.com/72178224/190998663-355e2b97-23c3-4ee1-8e71-a25722bab593.png)
5. #
![image](https://user-images.githubusercontent.com/72178224/190998574-efa5a8e3-7443-4b40-bee6-b811ba7f113e.png)
6. #
![image](https://user-images.githubusercontent.com/72178224/190998815-152ba40b-41f2-4b37-a3d8-226464f26adf.png)

