# Cold Form Steel Canada - Web Application

Modern React application for Cold Form Steel Canada, built with **Vite**, **React**, and **Tailwind CSS v4**.

## 🎨 Brand Colors

- **Primary/Secondary:** Warm Brown `#665f55`
- **Accent:** Terracotta `#c47b5c`
- **Background:** Warm Cream `#faf8f5`
- **Text:** Dark Browns and Grays

Color system configured in `/styles/globals.css` using Shadcn CSS variables.

---

## 🚀 Quick Start

### 1. Prerequisites
- **Node.js** (v20 or higher required)
- **Git**

### 2. Install Dependencies
Open your terminal in this folder and run:
```bash
npm install
```

### 3. Run Locally
Start the development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to see the site.

### 4. Build for Production
Test the production build locally:
```bash
npm run build
npm run preview
```

---

## 🌍 Deploy to Vercel

### Step 1: Push to GitHub
1. Create a new empty repository on [GitHub](https://github.com/new) (name it something like `cold-form-steel-canada`)
2. **Important:** Don't initialize with README, .gitignore, or license (we already have these)
3. Copy your repository URL
4. In your project folder terminal, run:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Cold Form Steel Canada website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

### Step 2: Deploy on Vercel
1. Go to [Vercel](https://vercel.com) and sign in
2. Click **Add New** → **Project**
3. Import your GitHub repository
4. Vercel will auto-detect these settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy**
6. Your site is now live! 🚀

### Step 3: Custom Domain (Optional)
1. In Vercel project settings, go to **Domains**
2. Add your custom domain
3. Follow the DNS configuration instructions

---

## 🔄 How to Update

After your initial deployment, every push to GitHub automatically deploys to Vercel:

```bash
git add .
git commit -m "Your update description"
git push origin main
```

Vercel will rebuild and redeploy automatically!

---

## 📁 Project Structure

```
/
├── components/          # React components
│   ├── pages/          # Page components
│   ├── ui/             # Shadcn UI components
│   └── ...
├── public/             # Static assets
│   ├── assets/         # Images and logos
│   └── ...
├── styles/
│   └── globals.css     # Global styles + Tailwind + color system
├── App.tsx             # Main app component with routing
├── main.tsx            # Vite entry point
├── index.html          # HTML entry
├── vite.config.ts      # Vite configuration
└── vercel.json         # Vercel deployment config
```