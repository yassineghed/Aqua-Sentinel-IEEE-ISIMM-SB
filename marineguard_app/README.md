# Mediterranean Marine Species Monitoring System
 
MarineGuard is a cutting-edge web application designed to monitor and identify Mediterranean fish species using AI-powered analysis of BRUV (Baited Remote Underwater Video) camera footage. This platform specifically focuses on the coastal waters around Monastir and the Kuriat Islands Marine Protected Area. real-time alerts, identification tools, and valuable data insights.

## Features

*   **User Roles**: Tailored experiences for three distinct user types:
    *   **Citizens**: Report sightings, access educational resources, and participate in community forums.
    *   **Researchers**: Analyze data trends, manage alerts, and validate reported sightings.
    *   **Fishers**: Access weather forecasts, market data, and report invasive catches.
<p align="center">
  <img src="https://github.com/yassineghed/Aqua-Sentinel/blob/main/docs/assets/User Roles.png" width="600">
</p>

*   **Core Functionality**:
    *   **Dashboard**: Personalized overview based on user role (Citizen, Researcher, Fisher).
    *   **Live Feed**: Real-time monitoring feed (simulated/placeholder) for BRUV (Baited Remote Underwater Video) cameras.
    *   **Alerts System**: Notification system for new invasive species sightings and environmental warnings.
    *   **Fish Identifier**: Tool to upload images and identify marine species using AI (integration point).
    *   **Map Interface**: Interactive map showing sighting locations and hotspots.
    *   **Education Hub**: Resources and guides about local marine life and invasive species.
    *   **Weather Forecast**: Marine weather conditions for safe maritime activities.
    *   **Community Forum**: Platform for discussion and knowledge sharing.
    *   **Authentication**: Secure Login and Signup flows.

## Tech Stack

*   **Frontend**: [Next.js](https://nextjs.org/) (React Framework)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Maps**: [React Leaflet](https://react-leaflet.js.org/) (Assumed/Suggested for Map implementation)
*   **Backend**: FastApi
*   **Language**: TypeScript
<p align="center">
  <img src="https://github.com/yassineghed/Aqua-Sentinel/blob/main/docs/assets/apptools1.png" width="700">
</p>

# Setting up the Mobile Application

### Prerequisites

Ensure you have the following installed:
*   [Node.js](https://nodejs.org/) (v18 or higher recommended)
*   npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd marine-guard-app-design
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

4.  **Open the app:**
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

*   `app/`: Main application source code (App Router).
    *   `layout.tsx`: Root layout component.
    *   `page.tsx`: Main entry point and screen routing logic.
*   `components/`: Reusable UI components.
    *   `screens/`: Full-page screen components (e.g., `dashboard-screen.tsx`, `login.tsx`).
    *   `ui/`: Base UI elements (buttons, inputs, cards) from Shadcn.
*   `public/`: Static assets (images, icons).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
