echo $(date +%s) > assets/assets/last_commit.txt
git add assets/assets/last_commit.txt
git commit -m "Update app" && git push -f origin master
gh release create "" -n "" NeuvenaMobile.ipa
