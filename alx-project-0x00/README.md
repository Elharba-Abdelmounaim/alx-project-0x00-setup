# 🧱 Building Reusable Components in Next.js with TailwindCSS

Welcome to this simple exercise where you'll learn how to create a **reusable Card component** using **Next.js**, **React**, and **TailwindCSS**.

This exercise helps you:
- Understand how components work.
- Reuse code effectively.
- Apply Tailwind classes for styling.
- Structure a project properly.

---

## 🧩 Component Structure and Reusability

React makes it easy to spot patterns and convert repetitive UI into reusable **components**.

By creating components:
- You **avoid code repetition**.
- Your app becomes easier to **scale and maintain**.
- You can **pass props** to make components dynamic.

We use a special folder called `components/` to store all shared UI elements.

> ✅ **Best Practice:** Keep components small and focused. Group similar components in folders if needed.

---

## 📁 Project Setup

✅ Ensure your project has this structure:

my-app/
├── components/
│ └── Card.tsx
├── public/
│ └── assets/
│ └── images/
│ ├── house.png
│ └── star.png

php-template
Copy code

---

## 🏗️ Exercise: Build the `Card` Component

### Step 1: Move Images

Copy the following images into your project:

| Image Name | Destination |
|------------|-------------|
| `house.png` | `public/assets/images/` |
| `star.png`  | `public/assets/images/` |

---

### Step 2: Create the `Card.tsx` file

Inside your `components/` folder, create a file named `Card.tsx`, then copy the following code:

```tsx
import Image from "next/image"
import HOUSE_IMAGE from "@/public/assets/house.png"
import STAR_IMAGE from "@/public/assets/star.png"
import React from "react"
import Pill from "./Pill"

const Card: React.FC = () => {
  return (
    <div className="h-[422px] w-[378.56px] cursor-pointer hover:shadow-md hover:rounded-lg">
      <Image className="rounded-lg" src={HOUSE_IMAGE} width={378.56} height={299.37} alt="house image" />
      
      <div className="p-2 flex gap-2 mt-2">
        <Pill title="Top Villa" />
        <Pill title="Self CheckIn" />
        <Pill title="Free Reschedule" />
      </div>
      
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-[22px]">Villa Arrecife Beach House</h3>
          <p className="font-medium text-[17px] text-[#929292]">Sideman, Bali, Indonesia</p>
        </div>
        
        <div className="flex items-center">
          <Image src={STAR_IMAGE} alt="star" />
          <p className="font-medium text-[17px] ml-2">4.76</p>
        </div>
      </div>
      
      <div className="flex justify-between mt-4">
        <div className="grid grid-cols-3 border w-[156px] rounded-full px-2 py-1">
          <div className="flex items-center">
            {/* Icon 1 */}
            <p className="ml-1 text-[12.95px] font-medium">4</p>
          </div>
          <div className="flex items-center">
            {/* Icon 2 */}
            <p className="ml-1 text-[12.95px] font-medium">3</p>
          </div>
          <div className="flex items-center">
            {/* Icon 3 */}
            <p className="ml-1 text-[12.95px] font-medium">2</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
Step 3: Add the Pill.tsx Component
If not already created, add the Pill component to reuse tags inside your card:

tsx
Copy code
import React from "react"

interface PillProps {
  title: string
}

const Pill: React.FC<PillProps> = ({ title }) => {
  return (
    <span className="bg-[#F2F2F2] px-2 py-1 rounded-full text-[12px] font-medium text-gray-800">
      {title}
    </span>
  )
}

export default Pill
✅ Your Result
Once done, your card will look like this:

css
Copy code
🖼️  [ House Image ]
🏷️  Top Villa   🏷️ Self CheckIn   🏷️ Free Reschedule
🏠  Villa Arrecife Beach House
📍  Sideman, Bali, Indonesia
⭐  4.76

🛏️ 4   🚿 3   🚪 2
💡 Note: You can replace the comments {/* Icon 1 */} with SVG icons of your choice later.



🔚 Summary
✅ In this exercise, you learned how to:

Organize reusable components.

Use TailwindCSS for layout and styling.

Build a card UI from scratch.