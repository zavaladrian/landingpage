Frontend Mentor – Meet Landing Page Solution

This is my solution to the Meet landing page challenge
 on Frontend Mentor.
Frontend Mentor challenges help developers improve their front-end skills by building realistic, design-focused projects.

Table of Contents

Overview

The Challenge

Screenshot

Links

My Process

Built With

What I Learned

Continued Development

Useful Resources

Author

Overview
The Challenge

Users should be able to:

View the optimal layout depending on their device’s screen size

See hover states for all interactive elements

The primary focus of this challenge was recreating a multi-section landing page with a complex hero layout, responsive image positioning, and clear visual hierarchy across mobile, tablet, and desktop breakpoints.

Screenshot

Replace this image with a screenshot of your final solution.

Links

Solution URL: https://www.frontendmentor.io/solutions/your-solution-link

Live Site URL: https://your-live-site-url.vercel.app

My Process
Built With

Semantic HTML5

Next.js (App Router)

React

Tailwind CSS

CSS Grid & Flexbox

Mobile-first workflow

Responsive design principles

What I Learned

This project reinforced the importance of planning layout behavior across breakpoints before writing styles.

Key learnings include:

Mobile-first layout design:
Starting with a stacked mobile layout made it easier to progressively enhance the design for tablet and desktop.

Absolute positioning for complex hero sections:
On desktop, the hero images are positioned independently from the text content, allowing the heading and call-to-action to remain centered while decorative images sit on either side.

Reusable UI components:
Buttons, containers, and section dividers were built as reusable components to ensure consistent spacing, hover states, and typography throughout the page.

Example of responsive hero image handling:

{/* Desktop-only hero art */}
<div className="hidden lg:block absolute left-0 right-0">
  {/* side images */}
</div>

{/* Mobile / tablet hero image */}
<div className="lg:hidden">
  {/* centered hero image */}
</div>


This approach kept the layout predictable while closely matching the provided design.

Continued Development

In future projects, I want to continue improving:

Advanced responsive layout techniques with CSS Grid

Building scalable Tailwind component systems

Fine-tuning hover and focus states for accessibility

Translating static designs into clean, maintainable component architectures

Useful Resources

Tailwind CSS Documentation
 – Utility-first styling and responsive design

Next.js Documentation
 – App Router, image optimization, and layout patterns

CSS Grid Layout – MDN
 – Helpful for understanding layout structure

Author

Website: https://adrianzavala.dev

Frontend Mentor: https://www.frontendmentor.io/profile/yourusername

GitHub: https://github.com/zavaladrian# landingpage
