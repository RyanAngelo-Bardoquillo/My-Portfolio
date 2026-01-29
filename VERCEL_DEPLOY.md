# Deploy to Vercel - Step by Step Guide

## Method 1: Via GitHub (Easiest - Recommended)

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Ready for deployment"
git push
```

### Step 2: Deploy on Vercel
1. Go to https://vercel.com
2. Click "Sign Up" or "Log In"
3. Choose "Continue with GitHub"
4. Authorize Vercel to access your GitHub
5. Click "Add New..." → "Project"
6. Find and select your portfolio repository
7. Vercel will auto-detect:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
8. Click "Deploy"
9. Wait 1-2 minutes
10. Your site is live! 🎉

### Step 3: Custom Domain (Optional)
- Go to your project settings on Vercel
- Click "Domains"
- Add your custom domain

---

## Method 2: Via Vercel CLI

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login
```bash
vercel login
```

### Step 3: Deploy
```bash
# From your project directory
vercel

# For production deployment
vercel --prod
```

---

## What Happens After Deployment?

✅ Your site gets a URL like: `your-portfolio.vercel.app`
✅ Every GitHub push automatically deploys
✅ You get preview deployments for pull requests
✅ Free SSL certificate included
✅ Global CDN for fast loading

## Troubleshooting

**Build fails?**
- Make sure `package.json` has the build script
- Check that all dependencies are listed
- Review build logs on Vercel dashboard

**Site not updating?**
- Check if the latest commit is pushed to GitHub
- Vercel auto-deploys on every push to main branch

**Need to change settings?**
- Go to Project Settings → General
- Update Build & Development Settings if needed
