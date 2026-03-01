# Workspace Designer for monis.rent

A modern, interactive workspace designer built for monis.rent - an equipment rental marketplace targeting digital nomads & startups in Bali.

## 🎯 What This App Does

This is a visual, playful setup builder where users can:

- 👀 See their workspace take shape in real-time
- 🎉 Feel excitement when customizing their setup
- 📦 Click "Rent Your Setup!" when done
- 🔢 Adjust quantities for multiple items (2 chairs, 3 monitors, etc.)
- 🛍️ Browse all items or navigate by category

Users don't want a traditional catalog — they want to visually build their perfect workspace with desks, chairs, monitors, lamps, plants, and all workspace equipment.

## 🚀 How It Works

### Core Features

- **Category Navigation**: Browse through Chairs, Desks, Accessories, or All Items
- **Visual Item Selection**: Click items to add them to your workspace
- **Quantity Support**: Add multiple quantities of the same item
- **Summary Panel**: Track selected items, adjust quantities, and see total price
- **Clean Interface**: Focused on core item selection and rental process

### User Experience

1. Select a category (Chairs, Desks, Accessories, or All Items)
2. Click items to add them to your workspace (quantities supported)
3. Use +/- buttons in summary panel to adjust quantities
4. Review your setup with accurate pricing
5. Click "Rent Your Setup!" when ready

### Advanced Features

- **Multi-Quantity Rental**: Rent 2+ of the same item with proper pricing
- **Smart Quantity Controls**: Intuitive +/- buttons with auto-removal at 0
- **Duplicate Prevention**: Smart state management prevents conflicts
- **Accurate Pricing**: Total calculated with item quantities
- **Streamlined Navigation**: Simple category tabs with All Items overview

## 🛠️ Tech Stack

- **Frontend**: Next.js 16 with App Router
- **Styling**: Tailwind CSS
- **State Management**: React Context + useReducer with quantity support
- **Icons**: Emoji icons for simplicity and universal compatibility
- **Data**: Static JSON files (no backend required)

## 📁 Project Structure

```
src/
├── app/
│   └── page.tsx              # Main application page
├── components/
│   ├── NavCategories.tsx     # Category navigation (includes All Items)
│   ├── ItemCard.tsx          # Individual item cards
│   └── SummaryPanel.tsx      # Cart/summary with quantity controls
├── data/
│   ├── desks.json            # Desk items data
│   ├── chairs.json           # Chair items data
│   └── accessories.json      # Accessories data
└── utils/
    └── workspaceState.tsx    # State management with quantity support
```

## 🎨 Design Decisions & Trade-offs

### Made for UX Excellence

- **Emoji Icons**: Chosen over image assets for instant loading, universal compatibility, and playful feel
- **Real-time Updates**: Immediate visual feedback creates excitement and engagement
- **Quantity Support**: Users can rent exactly what they need (2 chairs, 3 monitors)
- **Simple State Management**: React Context instead of complex libraries for faster development
- **Mobile-First**: Responsive design works seamlessly on all devices
- **Clean Navigation**: Focused category structure with All Items overview
- **Streamlined Interface**: Removed unnecessary components for better focus

### Trade-offs Made

- **No Backend**: Static data for MVP simplicity - can easily connect to API later
- **Simple Animations**: Basic hover effects instead of complex animations for faster load times
- **Limited Categories**: 3 main categories for MVP - more can be added easily
- **No User Accounts**: Focus on core rental experience first
- **Removed Category Groups**: Simplified interface to focus on core functionality
- **No AddButton Component**: Streamlined to use native HTML buttons

## 🏃‍♂️ How to Run Locally

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run the development server**

   ```bash
   npm run dev
   ```

3. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment

This app is designed for Vercel deployment:

1. **Connect to Vercel**

   ```bash
   npx vercel
   ```

2. **Deploy**
   Follow the prompts to deploy your app

3. **Custom Domain** (optional)
   Add your custom domain in the Vercel dashboard

## 🎯 Business Context

Built specifically for **monis.rent** - an equipment rental marketplace serving:

- ⭐ Digital nomads in Bali
- ⭐ Startups needing flexible workspace solutions
- ⭐ Remote workers wanting quality equipment

The app solves the problem of traditional rental catalogs by providing:

- **Visual Experience**: See your workspace before renting
- **Flexible Quantities**: Rent exactly what you need
- **Emotional Connection**: Build excitement through customization
- **Simplified Decision-Making**: Clear pricing and item selection
- **Streamlined Interface**: Focus on what matters most

## 🔮 Future Enhancements

- **User Accounts**: Save workspace configurations
- **3D Preview**: More immersive workspace visualization
- **Inventory Integration**: Real-time availability checking
- **Payment Integration**: Seamless checkout process
- **Delivery Scheduling**: Choose delivery times and locations
- **Community Templates**: Share and browse workspace setups
- **Advanced Filtering**: Filter by price, availability, features

## 📞 Support

This project was built as a frontend challenge demonstrating:

- ✅ UX and product thinking
- ✅ Visual interaction that feels good to use
- ✅ Real-time visual feedback
- ✅ Consideration of user needs
- ✅ Advanced quantity management
- ✅ Clean, maintainable code architecture
- ✅ Streamlined user experience

**The goal was to think user-centric, not algorithm-centric.**

---

_Built with ❤️ for the monis.rent team_
