# 🚀 Deploy Cold Form Steel Canada - Copy & Paste Commands

## ✅ Everything is Ready!

Your Vite project is configured and ready to deploy. Just follow these steps:

---

## 📋 Step 1: Create GitHub Repository

1. Go to: https://github.com/new
2. Repository name: `cold-form-steel-canada` (or your choice)
3. Keep it **private** or **public** (your choice)
4. ⚠️ **DO NOT** check any boxes (no README, no .gitignore, no license)
5. Click **Create repository**
6. Copy your repository URL (looks like: `https://github.com/YOUR_USERNAME/cold-form-steel-canada.git`)

---

## 📋 Step 2: Push to GitHub

Open your terminal in this project folder and run these commands one by one:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Cold Form Steel Canada website"

# Rename branch to main
git branch -M main

# Add your GitHub repository (REPLACE WITH YOUR URL!)
git remote add origin https://github.com/YOUR_USERNAME/cold-form-steel-canada.git

# Push to GitHub
git push -u origin main
```

⚠️ **Important:** Replace `YOUR_USERNAME` and `cold-form-steel-canada` with your actual GitHub username and repository name!

---

## 📋 Step 3: Deploy to Vercel

### Option A: Via Vercel Dashboard (Easiest) ⭐

1. Go to: https://vercel.com
2. Sign in (or create account) with GitHub
3. Click **"Add New"** → **"Project"**
4. Find and select your `cold-form-steel-canada` repository
5. Vercel will auto-detect:
   - Framework: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click **"Deploy"**
7. Wait 1-2 minutes...
8. **Done!** 🎉 Your site is live!

### Option B: Via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

---

## 🎉 You're Live!

After deployment, Vercel will give you:
- **Production URL**: `https://your-project.vercel.app`
- **Automatic HTTPS**: SSL certificate included
- **Global CDN**: Fast loading worldwide

---

## 🔄 Future Updates

To update your live site:

```bash
# Make your changes, then:
git add .
git commit -m "Description of changes"
git push origin main
```

Vercel automatically rebuilds and redeploys! 🚀

---

## 🆘 Troubleshooting

**Git command not found?**
- Install Git: https://git-scm.com/downloads

**Permission denied when pushing to GitHub?**
- Set up SSH keys: https://docs.github.com/en/authentication/connecting-to-github-with-ssh
- Or use HTTPS with personal access token

**Build fails on Vercel?**
- Check the build logs in Vercel dashboard
- Test locally: `npm run build`
- Verify Node.js version: should be 20.x or higher

**Need help?**
- See `/README.md` for detailed documentation
- See `/VERCEL_DEPLOYMENT_GUIDE.md` for comprehensive guide

---

## ✨ Quick Checklist

Before deploying, make sure:
- [ ] You have a GitHub account
- [ ] You've created a new empty repository
- [ ] You have Git installed on your computer
- [ ] You're in the correct project folder in terminal
- [ ] You have a Vercel account (free to sign up)

**Ready? Let's do this!** 🚀
