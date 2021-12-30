echo $(date +%s) > assets/assets/last_commit.txt
git add assets/assets/last_commit.txt
git add NeuvenaMobile.ipa && git commit -m "Update app" && git push -f origin master
