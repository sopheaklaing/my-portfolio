# Git Practice Log

## 1. Commands Used

### Repository Setup

- `git init` - បង្កើត Git repository ថ្មីនៅក្នុង project folder។
- `git status` - ពិនិត្យស្ថានភាពបច្ចុប្បន្នរបស់ Git repository ដូចជា branch និង files ដែលបានកែប្រែ។
- `git remote -v` - បង្ហាញ remote repository ដែល project បានភ្ជាប់ទៅ។
- `git remote add origin <repository-url>` - ភ្ជាប់ local repository ទៅ GitHub repository ហើយដាក់ឈ្មោះ remote ថា `origin`។

### Staging Changes

- `git add README.md` - ដាក់ `README.md` ទៅ staging area ដើម្បីត្រៀម commit។
- `git add index.html` - ដាក់ `index.html` ទៅ staging area។
- `git add style.css` - ដាក់ `style.css` ទៅ staging area។
- `git add projects.js` - ដាក់ `projects.js` ទៅ staging area។
- `git add .` - ដាក់ files ដែលបានកែប្រែទាំងអស់នៅក្នុង current directory ទៅ staging area។

### Commits

- `git commit -m "first commit"` - បង្កើត commit ដំបូង និងរក្សាទុក changes ជាមួយ commit message។
- `git commit -m "feat: add projects JavaScript data"` - Commit ការបន្ថែម project data ក្នុង JavaScript។
- `git commit -m "feat: add projects section HTML"` - Commit ការបន្ថែម Projects section ក្នុង HTML។
- `git commit -m "style: add projects section styling"` - Commit ការបន្ថែម styling សម្រាប់ Projects section។
- `git commit -m "feat: add contact section and form"` - Commit Contact section និង HTML contact form។
- `git commit -m "style: add contact section styling"` - Commit styling សម្រាប់ Contact section។
- `git commit -m "docs: enhance README with setup instructions"` - Commit ការកែលម្អ README ជាមួយ setup instructions និង documentation។

### Branches

- `git branch` - បង្ហាញ local branches ទាំងអស់។
- `git branch -M main` - ប្តូរឈ្មោះ branch បច្ចុប្បន្នទៅជា `main`។
- `git switch main` - ប្តូរទៅ `main` branch។
- `git switch feature/project` - ប្តូរទៅ `feature/project` branch។
- `git switch feature/contact` - ប្តូរទៅ `feature/contact` branch។
- `git switch -c feature/project` - បង្កើត branch ថ្មី `feature/project` ហើយប្តូរទៅ branch នោះ។
- `git switch -c feature/contact` - បង្កើត branch ថ្មី `feature/contact` ហើយប្តូរទៅ branch នោះ។
- `git switch -c docs/update-readme` - បង្កើត documentation branch ថ្មី ហើយប្តូរទៅ branch នោះ។

### Merging

- `git merge feature/project` - Merge `feature/project` ចូល branch បច្ចុប្បន្ន។
- `git merge feature/contact` - Merge `feature/contact` ចូល branch បច្ចុប្បន្ន។
- `git merge docs/update-readme` - Merge `docs/update-readme` ចូល `main`។

### Viewing History

- `git log` - បង្ហាញ commit history ពេញលេញ។
- `git log --oneline` - បង្ហាញ commit history ជាទម្រង់ខ្លី។
- `git log --oneline --decorate -5` - បង្ហាញ 5 commits ចុងក្រោយ ជាមួយ branch/tag information។
- `git log --oneline --decorate --graph --all` - បង្ហាញ commit history របស់ branches ទាំងអស់ជា graph។
- `git log main --oneline` - បង្ហាញ commits ដែលមាននៅក្នុង `main`។
- `git show --stat <commit-id>` - បង្ហាញព័ត៌មាន និង files ដែលបានផ្លាស់ប្តូរក្នុង commit ជាក់លាក់។

### Checking Changes

- `git diff` - បង្ហាញភាពខុសគ្នារបស់ files ដែលបានកែប្រែ ប៉ុន្តែមិនទាន់ commit។
- `git status` - ពិនិត្យថាតើមាន files ដែលមិនទាន់ stage ឬ commit ឬអត់។

### Checking Merged Branches

- `git branch --merged main` - បង្ហាញ branches ដែលបាន merge ចូល `main` រួច។
- `git branch -r` - បង្ហាញ remote branches ដែលមាននៅ GitHub។

### Push to GitHub

- `git push -u origin main` - Push `main` ទៅ GitHub និងកំណត់ upstream branch។
- `git push origin main` - Push commits របស់ `main` ទៅ GitHub។
- `git push -u origin feature/project` - Push `feature/project` ទៅ GitHub និងកំណត់ upstream។
- `git push -u origin feature/contact` - Push `feature/contact` ទៅ GitHub និងកំណត់ upstream។
- `git push -u origin docs/update-readme` - Push `docs/update-readme` ទៅ GitHub និងកំណត់ upstream។
- `git push --all origin` - Push local branches ទាំងអស់ទៅ GitHub។
- `git push --tags origin` - Push Git tags ទាំងអស់ទៅ GitHub ប្រសិនបើមាន tags។

---

# 2. Branch History

The project was developed using separate feature branches to keep each section isolated from the `main` branch.

## Branches Created

1. `main` - Main branch of the portfolio project.
2. `feature/header` - Created to develop the Header section.
3. `feature/about` - Created to develop the About section.
4. `feature/project` - Created to develop the Projects section.
5. `feature/contact` - Created to develop the Contact section.
6. `docs/update-readme` - Created to improve the project README documentation.

## Merge Order

The branches were developed separately and then merged into `main`.

```text
main
 │
 ├── feature/header
 │       └── merged into main
 │
 ├── feature/about
 │       └── merged into main
 │
 ├── feature/project
 │       └── merged into main
 │
 ├── feature/contact
 │       └── merged into main
 │
 └── docs/update-readme
         └── merged into main
```

---

# 3. Commit History

The following command was used to view the complete Git history:

```bash
git log --oneline --graph --all
```

## Commit History Output

```text
* efa81de (HEAD -> main, origin/main, origin/docs/update-readme, docs/update-readme) docs: enhance README with setup instructions
* 282fbb5 update README
* 2068d12 (origin/feature/contact, feature/contact) feat : update contact index.html
* db4887b style: add contact section styling
* da8c424 feat: add contact section and form
* b5a0703 (origin/feature/project, feature/project) style: add projects section styling
* e712244 feat: add projects section HTML
* e5cefae feat: add projects JavaScript data
* 71bc2ec fix style
* 7989658 feat: update skill section animation
* 1ef0b69 feat : update style for skill
* 485638f (origin/feature/about, feature/about) feat : add style for skill
* 32a7751 feat : add project in index.html
* 3e22ccc feat : add style for about me
* e1907fb feat : add about me in index.html
*   b2a04a0 merge: update feature/header into main
|\
| * 85c170a (origin/feature/header, feature/header) feat : update color style
* | 95b005f feat : uodate style css
* | acaf110 feat: update portfolio header
* | 5de1eff merge: feature/header into main
|/|
| * ea5c431 feat : add header
* | 8ecf563 feat : add style css to header
* | e766858 feat : add header
|/
* a986f1b Initial commit: setup project structure
```

---

# 4. Lessons Learned

## 1. Understanding Git Branches

One challenging part was understanding how Git branches work, especially the difference between `main` and feature branches.

I learned that each feature can be developed separately without changing the `main` branch until it is ready to merge.

## 2. Understanding Commit and Merge

I learned that commits are normally made on the feature branch before merging into `main`.

For example:

```text
feature/contact
      ↓
make changes
      ↓
git add
      ↓
git commit
      ↓
switch main
      ↓
git merge feature/contact
```

After merging, I do not always need another commit on `main`. If Git performs a fast-forward merge, the existing commits from the feature branch become part of `main`.

## 3. Understanding Local and Remote Branches

One thing that surprised me was that creating a branch locally does not automatically make it appear on GitHub.

For example:

```bash
git switch -c feature/contact
```

creates the branch only locally.

To send it to GitHub:

```bash
git push -u origin feature/contact
```

## 4. Understanding Git History

I learned how to use:

```bash
git log --oneline --graph --all
```

This command helped me understand the relationship between branches, commits, and merges.

The `--graph` option is especially useful because it shows the branch history visually.

## 5. Using Consistent Commit Messages

I learned that clear commit messages make the project history easier to understand.

Examples:

```text
feat: add contact section and form
style: add contact section styling
docs: enhance README with setup instructions
```

These follow the Conventional Commits style.

## 6. What I Would Do Differently Next Time

Next time, I would follow a consistent Git workflow:

```text
main
  ↓
create feature branch
  ↓
make changes
  ↓
git add
  ↓
git commit
  ↓
test/check code
  ↓
switch to main
  ↓
git merge feature/branch
  ↓
git push origin main
```

I would also check the branch and commit history regularly using:

```bash
git branch
git status
git log --oneline --graph --all
```

This would help me avoid confusion about which branch I am currently working on.

---

# Conclusion

This Git practice helped me understand the basic DevOps workflow of using Git and GitHub.

I learned how to:

- Create and initialize a Git repository.
- Create and use feature branches.
- Make multiple commits.
- Use meaningful commit messages.
- Merge feature branches into `main`.
- Push branches and commits to GitHub.
- Check local and remote branches.
- View commit history using Git graph.
- Document a project using README and Markdown.

The most important workflow I learned is:

```text
Create Branch
     ↓
Develop Feature
     ↓
Commit Changes
     ↓
Test
     ↓
Merge to Main
     ↓
Push to GitHub
```