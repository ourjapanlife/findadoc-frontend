# Troubleshooting :sob: :sob: :sob: => 😊 :blush: 😊


## Submodule Troubleshooting

In general we do not update the submodule outside of the workflow described on the README page. 
Here are some tips on how to get out of an accidental commit or submodule update.

There is also lots of documentation here: https://git-scm.com/book/en/v2/Git-Tools-Submodules
and here: https://github.blog/2016-02-01-working-with-submodules/

### There are i18n changes locally but I don't want to commit them

1. Go to the main branch and figure out what commit the submodule is at:

```sh
git checkout main
cat .git/modules/i18n/HEAD
```

2. Copy that commit hash
3. Go back to your working branch

```sh
cd i18n
git checkout [commit hash]
cd ...
git status
```

If the changes to the i18n folder no longer show up in status, you are good 👍

### I accidentally committed i18n changes and need to revert them

#### I haven't pushed yet

1. Revert the commit
```sh
git reset HEAD~
git stash
```
2. Follow the steps from [the previous item](#There-are-i18n-changes-locally-but-I-don't-want-to-commit-them)

#### I pushed the changes upstream

1. Go to the main branch and figure out what commit the submodule is at:

```sh
git checkout main
cat .git/modules/i18n/HEAD
```

3. Copy that commit hash
4. Go back to your working branch

```sh
cd i18n
git checkout [commit hash]
cd ...
git add i18n
git commit -m "revert i18n submodule changes"

# confirm the changes are fixed
git diff main

# push upstream
git push

```


