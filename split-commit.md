1. git rebase -i code_commit^
- Chuyển pick -> edit lưu lại và thoát.
2. git reset HEAD^
- Chuyển hết các file về trạng thái working-derectory.
3. add từng file mong muốn và commit.
4. Sau khi đã commit xong thì chạy git rebase --continue.
