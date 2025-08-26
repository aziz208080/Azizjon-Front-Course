# Heart Animation

A beautiful heart animation created with HTML Canvas and JavaScript.

## Deployment to Netlify

Follow these steps to deploy this project to Netlify:

### Option 1: Deploy via Netlify UI

1. Sign up or log in to [Netlify](https://www.netlify.com/)
2. Click on "New site from Git"
3. Connect to your Git provider (GitHub, GitLab, or Bitbucket)
4. Select the repository containing this project
5. Configure build settings:
   - Build command: leave empty (no build required)
   - Publish directory: `.` (root directory)
6. Click "Deploy site"

### Option 2: Deploy via Netlify Drop

1. Go to [Netlify Drop](https://app.netlify.com/drop)
2. Drag and drop the entire "Heart 1" folder onto the drop area
3. Wait for the upload to complete
4. Your site will be deployed automatically

### Option 3: Deploy via Netlify CLI

1. Install Netlify CLI: `npm install netlify-cli -g`
2. Navigate to the project directory: `cd path/to/Heart\ 1`
3. Login to Netlify: `netlify login`
4. Initialize the site: `netlify init`
5. Deploy the site: `netlify deploy --prod`

## Project Structure

- `index.html`: Main HTML file that loads the animation
- `script.js`: JavaScript code for the heart animation
- `netlify.toml`: Configuration file for Netlify deployment

## Customization

You can customize the animation by modifying the parameters in the `script.js` file:

- Change colors by modifying the `f` property in the particle objects
- Adjust animation speed by changing the `timeDelta` value
- Modify heart size by changing the scale parameters in the `pulse` function