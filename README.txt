Interactive Portfolio Website by Cole Chen

*Overview*
The project is an interactive portfolio website built with HTML, CSS, and JavaScript. The goal was to create a simple but intentional site to showcase my work while maintaining a consistent visual identity.
The site focuses on clarity, restrained design, and subtle interaction instead of heavy animation. Every single page was designed to feel both digestible and purposeful.

*Pages*
The website has 4 pages:
- Home: Simple introduction to site
- Projects: Interactive grid of projects w/ modal previews
- About: Expand on who the designer is
- Contact: Contact form for communication

*Features*
- Edge-based navigation system (four-direction)
- Each project card displays dimmed thumbnail. On hover, the card transitions to the accent color and reveals project title. Clicking a project opens a card with the title, image, and description
- Modal system pulls content from data attributes, includes staggered/opaque reveal animation
- Contact form uses JavaScript validation (no ugly default browser pop-ups) and displays appropriate and styled pop-up messages
- Desktop and tablet (651+ px) have fixed layout (no scrolling) while mobile (650px and below) has scrolling enabled, navigation converts to top bar, and LinkedIn icon moves to bottom

*Design*
- Neutral/earthy/monochrome color palette with bright orange accent color
- Smokum font used for headings and titles
- Courier (monospace) font used for body text
- Almost all text is lowercase which was an intentional design choice
- Emphasis on typographic hierarchy throughout website

*HTML*
- Data attributes (data-title, data-image, etc.) used for dynamic content

*CSS*
- Media queries for responsiveness
- Overlay-based thumbnail system for consistent contrast across modal previews on projects page

*Challenges*
- Mainting the no-scroll layout on desktop was difficult while allowing mobile scrolling
- A lot of conflicting/muddy CSS rules throughout the entire project
- Creating the custom form feedback in the contact page

*Future Improvements*
- Add more projects and utilize categories to split up projects by medium
- Accessibility (tablet UI, hover vs. touchscreen)
- More animation and motion throughout all pages
- Connect contact form to backend service so it can actually receive messages
- Boost efficiency by integrating workflow with tools like Adobe Lightroom, specifically for my photography