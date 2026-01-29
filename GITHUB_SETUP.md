# GitHub Setup Instructions

## Your repository is ready! Follow these steps:

### 1. Create a GitHub Repository
1. Go to https://github.com and sign in
2. Click the "+" icon → "New repository"
3. Name it (e.g., "portfolio" or "my-portfolio")
4. **DO NOT** check "Initialize with README" (we already have files)
5. Click "Create repository"

### 2. Connect and Push to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
# Add your GitHub repository as remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Rename branch to main (if needed)
git branch -M main

# Push your code to GitHub
git push -u origin main
```

### Alternative: If you prefer SSH
```bash
git remote add origin git@github.com:YOUR_USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

### 3. Verify
After pushing, refresh your GitHub repository page - you should see all your files!

## Quick Commands Reference

```bash
# Check status
git status

# Add changes
git add .

# Commit changes
git commit -m "Your commit message"

# Push to GitHub
git push

# Pull latest changes
git pull
```

## Troubleshooting

**If you get authentication errors:**
- GitHub now uses Personal Access Tokens instead of passwords
- Go to: Settings → Developer settings → Personal access tokens → Generate new token
- Use the token as your password when pushing

**If branch name is different:**
- If your branch is called "master" instead of "main", use: `git branch -M main`
