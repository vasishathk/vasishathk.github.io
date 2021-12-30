echo $(date +%s) > last_commit.txt
git add last_commit.txt
git add NeuvenaMobile.ipa && git commit -m "Update app" && git push -f https://vasishathdev@bitbucket.org/vasishathdev/vasishathdev.bitbucket.io
