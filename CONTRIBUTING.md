## Contributing

First off, thank you for considering contributing to Codedigger Frontend. It's people like you that make Codedigger such a great website.

Following these guidelines helps to communicate that you respect the time of the developers managing and developing this open source project. In return, they should reciprocate that respect in addressing your issue, assessing changes, and helping you finalize your pull requests.

### Where do I go from here?

If you've noticed a bug or have a feature request, [make one][new issue]! It's
generally best if you get confirmation of your bug or approval for your feature
request this way before starting to code.

If you have a general question about codedigger, contact us contact.codedigger@gmail.com or [join][discord link]! our discord community.

Beginners! - Watch out for Issues with the ["Good First Issue"][good first issue]! label. These are easy bugs that have been left for first timers to have a go, get involved and make a positive contribution to the project!

You can learn from this free series, [How to Contribute to an Open Source Project on GitHub][open-source-tutorial]!.

### Fork & create a branch

If this is something you think you can fix, then [fork Codedigger Frontend] and create
a branch with a descriptive name.

A good branch name would be :

```sh
git checkout -b feature/AmazingFeature
```

```sh
git checkout -b bugfix/user
```

### Implement your fix or feature

At this point, you're ready to make your changes! Feel free to ask for help;
everyone is a beginner at first :smile_cat:

### Make a Pull Request

At this point, you should switch back to your master branch and make sure it's
up to date with Codedigger's master branch:

```sh
git remote add upstream git@github.com:Code-dig-ger/Frontend.git
git checkout master
git pull upstream master
```

Then update your feature branch from your local copy of master, and push it!

```sh
git checkout feature/AmazingFeature
git rebase master
git push --set-upstream origin feature/AmazingFeature
```

Finally, go to GitHub and [make a Pull Request][] :D

### Keeping your Pull Request updated

If a maintainer asks you to "rebase" your PR, they're saying that a lot of code
has changed, and that you need to update your branch so it's easier to merge.

To learn more about rebasing in Git, there are a lot of [good][git rebasing]
[resources][interactive rebase] but here's the suggested workflow:

```sh
git checkout feature/AmazingFeature
git pull --rebase upstream master
git push --force-with-lease feature/AmazingFeature
```

### Merging a PR (maintainers only)

A PR can only be merged into master by a maintainer if:

- It is passing CI.
- It has been approved by at least two maintainers. If it was a maintainer who
  opened the PR, only one extra approval is needed.
- It has no requested changes.
- It is up to date with current master.

Any maintainer is allowed to merge a PR if all of these conditions are
met.

[new issue]: https://github.com/Code-dig-ger/Frontend/issues/new/choose
[discord link]: https://discord.gg/4ZeNgUn7cF
[good first issue]: https://github.com/Code-dig-ger/Frontend/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22
[fork codedigger frontend]: https://help.github.com/articles/fork-a-repo
[open-source-tutorial]: https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github
[make a pull request]: https://help.github.com/articles/creating-a-pull-request
[git rebasing]: http://git-scm.com/book/en/Git-Branching-Rebasing
[interactive rebase]: https://help.github.com/en/github/using-git/about-git-rebase
