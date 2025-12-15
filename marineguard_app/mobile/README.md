## Mobile Application

This section presents the main interfaces of the MarineGuard mobile application and highlights the user-centered design approach adopted throughout the platform.

The application emphasizes:
- Clear and intuitive navigation for all user roles
- Early detection and alerting of invasive species
- AI-powered fish detection testing and visualization
- Community engagement through reporting and discussion features
- An educational section to explore native marine species and identify threatening invasive ones

The interfaces are designed to be accessible, informative, and practical for citizens, researchers, and fishers.

### Here’s a quick demo showcasing how the interfaces are organized.
<br>

 <center>
        <table>
            <tr>
                <!-- First image -->
                <td><img src="https://github.com/yassineghed/Aqua-Sentinel/blob/main/docs/assets/app_vid_1.gif" width="470"></td>
                <td><img src="https://github.com/yassineghed/Aqua-Sentinel/blob/main/docs/assets/app_vid-11.gif" width="470"></td>
             </tr>
        </table>
</center>
<br> 
## Project Structure

*   `app/`: Main application source code (App Router).
    *   `layout.tsx`: Root layout component.
    *   `page.tsx`: Main entry point and screen routing logic.
*   `components/`: Reusable UI components.
    *   `screens/`: Full-page screen components (e.g., `dashboard-screen.tsx`, `login.tsx`).
    *   `ui/`: Base UI elements (buttons, inputs, cards) from Shadcn.
*   `public/`: Static assets (images, icons).

## Setting up the Mobile Application

Ensure you have the following installed:
*   [Node.js](https://nodejs.org/)
*   npm
  
1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd marine-guard-app-design
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open the app:**
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
