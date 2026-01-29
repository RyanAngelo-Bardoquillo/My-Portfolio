# Receive Contact Form Emails in Gmail (Formspree)

The contact form sends messages to **rAngelobardoquillo@gmail.com** via Formspree. Do this once so you receive emails:

## 1. Create a Formspree account and form

1. Go to [https://formspree.io](https://formspree.io) and sign up (free).
2. Click **"New Form"**.
3. Set the form **email** to: **rAngelobardoquillo@gmail.com**.
4. Name the form (e.g. "Portfolio Contact") and create it.
5. On the form’s **Integrations** or **Settings** page, copy the **Form ID** (e.g. `xzabc123`). The form URL looks like: `https://formspree.io/f/xzabc123` — the part after `/f/` is the Form ID.

## 2. Use the Form ID in your project

**Local development**

- In the project root, create a file named `.env` (if it doesn’t exist).
- Add:
  ```env
  VITE_FORMSPREE_FORM_ID=your_actual_form_id_here
  ```
- Replace `your_actual_form_id_here` with the Form ID from step 1.
- Restart the dev server: `npm run dev`.

**Vercel (deployed site)**

1. Open your project on [Vercel](https://vercel.com).
2. Go to **Settings** → **Environment Variables**.
3. Add:
   - **Name:** `VITE_FORMSPREE_FORM_ID`
   - **Value:** your Form ID from step 1.
4. Redeploy the project (e.g. **Deployments** → **⋯** → **Redeploy**).

After this, form submissions will be sent to **rAngelobardoquillo@gmail.com** and you’ll receive them in Gmail. Formspree’s free plan is enough for typical portfolio traffic.
