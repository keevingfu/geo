# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Eureka GEO Dashboard** - A Generative Engine Optimization (GEO) monitoring and analysis platform that helps track and optimize how AI search engines perceive and respond to queries about the Eureka brand and products.

## Architecture

### Navigation System
The project implements a **single-page application pattern without a framework**:
- `index.html` serves as the shell that dynamically loads other dashboard pages
- Uses fetch API to load HTML content and extracts the main content area
- Implements browser history management for back/forward navigation
- Caches loaded pages in memory to avoid redundant requests
- Executes inline scripts from loaded pages in a controlled scope

### Backend API
- **Express server** (`server.js`) on port 3000 with CORS enabled
- **Mock API endpoint**: `/api/test-query` - Simulates GEO analysis
  - Request: `POST { query: "search query" }`
  - Response: Returns mock data about AI visibility, sentiment, competitors, and recommendations
- **Health check**: `/api/health`
- All HTML files are served as static assets

### Frontend Pattern
Each dashboard follows this structure:
- Standalone HTML file with inline CSS and JavaScript
- Main content wrapped in `<div class="dashboard-content">`
- ECharts visualizations with dark theme and cyan (`#00CED1`) accent
- Real-time data updates using `setInterval` (typically 5-30 seconds)
- No external CSS or JS files (except ECharts via CDN)

## Development Commands

```bash
# Quick start
./start.sh

# Development with auto-restart
npm run dev

# Production
npm start
```

## File Organization

```
/
├── server.js                    # Express backend with mock API
├── package.json                 # Dependencies (express, cors, nodemon)
├── start.sh                     # Startup script
├── index.html                   # Main shell with navigation system
├── eureka-geo-*.html           # Core dashboard pages (5 files)
├── geo-*.html                  # Feature-specific dashboards (6 files)
└── *.pdf                       # Documentation in English and Chinese
```

## Key Implementation Details

### Adding New Dashboards
1. Create HTML file following naming convention: `geo-[feature].html`
2. Structure content within `<div class="dashboard-content">`
3. Include inline styles matching dark theme
4. Initialize ECharts in a `<script>` tag
5. Add navigation link in `index.html` sidebar

### Navigation Integration
The main navigation extracts content between:
```javascript
const mainContent = tempDiv.querySelector('.dashboard-content') || 
                   tempDiv.querySelector('main') || 
                   tempDiv.querySelector('.container');
```

### Mock Data Structure
The `/api/test-query` endpoint returns:
```json
{
  "success": true,
  "data": {
    "query": "search query",
    "visibility_score": 85,
    "sentiment": "positive",
    "top_results": [...],
    "competitors": [...],
    "recommendations": [...]
  }
}
```

## Architecture Decisions

- **No build process**: Enables rapid prototyping and easy deployment
- **Inline everything**: Makes each dashboard portable and self-contained
- **Mock data backend**: Allows UI development without real GEO API integration
- **Stateless server**: All data is generated per request, no database required
- **CDN dependencies**: Only ECharts is loaded externally for visualization

## Important Limitations

- No authentication or user management
- Mock data only - requires integration with real GEO APIs for production
- Browser compatibility limited to modern browsers (ES6+ features used)
- No test suite or linting configuration
- Manual page refresh required for style/script changes in development