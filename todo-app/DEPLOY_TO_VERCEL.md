# Deploying HackDo to Vercel

Your project is now fully configured for Vercel deployment with a Python backend and Next.js frontend!

## Option 1: Automatic Deployment (Recommended)

1.  Push your latest changes to GitHub:
    ```bash
    git add .
    git commit -m "Prepare for Vercel deployment"
    git push origin main
    ```

2.  Go to your Vercel Dashboard: [https://vercel.com/diya-iqbals-projects](https://vercel.com/diya-iqbals-projects)
3.  Click **"Add New..."** -> **"Project"**.
4.  Import your GitHub repository: `TO-DO-List-Hackathon`.
5.  **Configure Project:**
    *   **Root Directory:** Click "Edit" and select `todo-app`. This is crucial!
    *   **Framework Preset:** Next.js (should be auto-detected).
    *   **Environment Variables:** Add the following (get values from your local `.env` or Neon dashboard):
        *   `DATABASE_URL`: Your Neon Tech PostgreSQL connection string (e.g., `postgresql://user:pass@ep-xyz.aws.neon.tech/neondb?sslmode=require`)
        *   `GEMINI_API_KEY`: Your Google Gemini API Key.
        *   `SECRET_KEY`: A random string for security (e.g., generate one with `openssl rand -hex 32`).
        *   `NEXT_PUBLIC_API_URL`: (Optional, defaults to `/api/v1`)

6.  Click **Deploy**.

## Option 2: CLI Deployment

If you have the Vercel CLI installed and authenticated:

1.  Navigate to the `todo-app` directory:
    ```bash
    cd todo-app
    ```
2.  Run the deploy command:
    ```bash
    npx vercel --prod
    ```
3.  Follow the prompts. When asked "Link to existing project?", say No (unless you already created one).
4.  When asked "In which directory is your code located?", keep the default `./`.
5.  **Important:** You must go to the Vercel Dashboard Project Settings to add the Environment Variables (`DATABASE_URL`, etc.) after the first deployment, or the backend will fail to connect.

## Verification

Once deployed, your app will be live at `https://<your-project>.vercel.app`.
*   The frontend will load at `/`.
*   The backend API is available at `/api/v1/tasks` (handled by `api/index.py`).
*   Check the "Functions" tab in Vercel dashboard if you see any API errors.
