# Reactr Demo Showcase

A curated collection of static UI/UX experiences for the Reactr platform - where creators monetize through interactive content offerings. Each demo showcases different interface patterns for creators managing offerings, supporters making requests, and live engagement tools without requiring database connections or API calls.

Built with: Next.js 16 + Bun + Tailwind CSS + Framer Motion + Headless UI

**Reactr** enables creators to offer custom content reactions, live interactions, and cross-platform supporter engagement through dynamic offerings like request queues, polls, and exclusive content.

## 🚀 Quick Start for Non-Technical Users

### Building and Running the Project

**Step 1: Install Dependencies**
```
bun install
```
This downloads all the necessary tools and libraries.

**Step 2: Start the Development Server**
```
bun run dev
```
This starts your website locally.

**Step 3: Open in Browser**
- Go to [http://localhost:3000](http://localhost:3000) in your web browser
- You'll see the demo page with animations and examples

**Step 4: Make Changes**
- Edit files in the `src/app/` folder
- Changes will automatically appear in your browser
- Press `Ctrl+C` in the terminal to stop the server

### Creating a New Page

**Step 1: Create a New Folder**
- Go to the `src/app/` folder
- Create a new folder with your page name (e.g., `about`, `contact`, `products`)

**Step 2: Create the Page File**
- Inside your new folder, create a file called `page.tsx`
- Copy this basic template:

```tsx
export default function PageName() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">Your Page Title</h1>
      <p className="text-lg">Your page content goes here.</p>
    </div>
  );
}
```

**Step 3: Customize Your Page**
- Change "PageName" to your page name (e.g., "AboutPage")
- Add your content between the `<div>` tags
- Use these common styling classes:
  - `text-3xl` - Large text
  - `text-lg` - Medium text
  - `mb-4` - Add space below
  - `p-8` - Add padding

**Step 4: View Your Page**
- Visit `http://localhost:3000/{group}/{feature}/demo{n}`
- For example: `http://localhost:3000/creator/dashboard/demo1`
- Check the landing page at `/` to see all available demos!

### Building for Production

**Step 1: Build the Project**
```
bun run build
```

**Step 2: Start Production Server**
```
bun run start
```
Your website is now ready for production!

---

## 🛠️ Technical Details

### Tech Stack

- **Next.js 16** - Modern web framework
- **Bun** - Fast JavaScript runtime and package manager
- **Tailwind CSS v4** - Styling system
- **Framer Motion** - Animations
- **Headless UI** - Accessible components
- **TypeScript** - Type-safe JavaScript
- **ESLint** - Code quality checker

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx           # Demo directory/landing page
│   ├── globals.css        # Global styles
│   ├── creator/           # Demo group: Creator experiences
│   │   └── dashboard/     # Feature: Dashboard experiences
│   │       └── demo1/     # Demo 1: First dashboard variation
│   │           └── page.tsx
│   └── [group]/           # Future groups (admin, user, etc.)
│       └── [feature]/     # Feature folders (profile, settings, etc.)
│           └── demo[n]/   # Numbered demo variations
│               └── page.tsx
└── lib/                   # Component library (see .cursorrules)
```

## 📋 Development Guidelines

Check the `.cursorrules` file for important guidelines about:
- Using the component library in `src/app/lib/`
- Code organization and naming conventions
- When to create new components vs using existing ones
- Best practices for the codebase

## 🎨 Styling Guide

### Basic Text Styles
- `text-3xl` - Large heading
- `text-xl` - Medium heading
- `text-lg` - Normal text
- `text-sm` - Small text

### Colors
- `text-blue-600` - Blue text
- `text-green-600` - Green text
- `text-red-600` - Red text
- `bg-blue-100` - Light blue background

### Layout
- `p-8` - Padding on all sides
- `m-4` - Margin
- `flex` - Flexible layout
- `grid` - Grid layout

### Animations (Framer Motion)
```tsx
import { motion } from "framer-motion";

// Animated div
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  Content here
</motion.div>
```

### Interactive Components (Headless UI)
```tsx
import { Dialog } from "@headlessui/react";

// Modal dialog
<Dialog open={isOpen} onClose={setIsOpen}>
  <Dialog.Title>Modal Title</Dialog.Title>
  <Dialog.Description>Modal content here</Dialog.Description>
</Dialog>
```

## 🎨 Creating New Demos

### Structure: `/{group}/{feature}/demo{n}`

### Quick Demo Creation
```bash
# Create the full demo structure
mkdir -p src/app/{group}/{feature}/demo{n}

# Example: Create a new creator profile demo
mkdir -p src/app/creator/profile/demo1
touch src/app/creator/profile/demo1/page.tsx
```

### 2. Add Your Demo Code
Create `src/app/creator/dashboard/demo2/page.tsx` with your demo:

```tsx
export default function DashboardDemo2() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">Dashboard Demo 2</h1>
      {/* Your demo content */}
    </div>
  );
}
```

### 3. Add to Landing Page
Edit `src/app/page.tsx` and add your demo to the `demoGroups` array:

```tsx
{
  title: "Creator Experience",
  description: "Dashboard and management tools for content creators",
  demos: [
    {
      title: "Creator Dashboard v1",
      description: "Analytics dashboard with revenue tracking",
      href: "/creator/dashboard/demo1",
      status: "Latest",
      color: "bg-blue-500"
    },
    {
      title: "Creator Dashboard v2",
      description: "Enhanced dashboard with new features",
      href: "/creator/dashboard/demo2",
      status: "New",
      color: "bg-green-500"
    }
  ],
  color: "blue"
}
```

### 4. Best Practices
- Use realistic mock data
- Include multiple interaction states
- Keep demos focused and concise
- Follow the component library patterns
- Test in both light and dark themes
- Group related demos by feature (dashboard, profile, settings, etc.)
- Number demos sequentially (demo1, demo2, demo3...)

## 🚀 Deployment

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Connect your GitHub repository
4. Click "Deploy"

### Manual Deployment
1. Build the project: `bun run build`
2. Start production server: `bun run start`
3. Your site will be available on `http://localhost:3000`

## 📚 Resources

### For Non-Technical Users
- [Tailwind CSS Cheat Sheet](https://tailwindcss.com/docs/utility-first) - Find styling classes
- [Framer Motion Examples](https://www.framer.com/motion/examples/) - Animation ideas

### For Developers
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [Headless UI Documentation](https://headlessui.com/)
