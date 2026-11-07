# Deployment Guide

## Deployment target

Use a static hosting provider such as Vercel or Netlify. The application must not require a server or database.

## Build settings

- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

## Vercel

1. Push the project repository to GitHub.
2. Import the repository into Vercel.
3. Confirm the build command and output directory.
4. Deploy.
5. Open the generated public URL on desktop and mobile.
6. Test personalized links such as `/?name=Rahul&lang=en`.

## Netlify

1. Push the project repository to GitHub or upload the built `dist` directory.
2. Set build command to `npm run build`.
3. Set publish directory to `dist`.
4. Deploy and test the public URL.

## Before sharing

- Confirm the site is public and does not require login.
- Confirm the deployed page loads over HTTPS.
- Test WhatsApp sharing from a phone.
- Test language and name query parameters.
- Confirm all images load and no console errors occur.
- If music is enabled, confirm the audio file is licensed and deployed at the expected path.

## Updating the site

Commit and push changes to the connected Git repository; the hosting provider can rebuild automatically.
