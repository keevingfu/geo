# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Eureka GEO Dashboard** - A Generative Engine Optimization (GEO) monitoring and analysis platform that helps track and optimize how AI search engines perceive and respond to queries about the Eureka brand and products.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server with auto-restart
npm run dev

# Start production server
npm start

# Alternative quick start (checks dependencies)
./start.sh
```

## Architecture

### Backend
- **Express server** (`server.js`) running on port 3000 (configurable via PORT env)
- **Mock API endpoint**: `POST /api/test-query`
  - Accepts: `{ query: string, platform: string }`
  - Returns: Mock GEO analysis data with brand mentions, confidence scores, tech features, response previews, sources, and latency
  - Simulates 285ms processing delay
- **Health check**: `GET /api/health`
- CORS enabled for all origins
- All HTML files served as static assets from root directory

### Frontend Architecture
- **Single-page application** without a framework
- **Navigation system** in `index.html`:
  - Uses iframes for content loading
  - Maintains browser history without URL changes
  - Collapsible menu sections with expand/collapse functionality
  - Removes hash fragments from URLs for cleaner experience
  - Executes scripts from loaded pages in global scope
- **Dashboard pattern**:
  - Self-contained HTML files with inline CSS/JS
  - ECharts v5.x for data visualization (loaded from CDN)
  - Dark theme with cyan (`#00CED1`) accent color
  - Real-time data updates (5-30 second intervals)

## File Organization

```
├── server.js                    # Express backend
├── package.json                 # Dependencies (express, cors, nodemon)
├── start.sh                     # Startup script with dependency check
├── README.md                    # Public documentation
├── CLAUDE.md                    # Development guidance and project status
├── index.html                   # Main portal with navigation
├── index-static.html            # Static version for GitHub Pages
│
├── Core GEO Dashboards (4 files)
│   ├── eureka-geo-overview.html
│   ├── eureka-geo-analysis.html
│   ├── eureka-geo-content.html
│   └── eureka-geo-monitoring.html
│
├── Competitive Intelligence (3 files)
│   ├── eureka-competitive-intelligence.html
│   ├── eureka-tech-analysis.html
│   └── eureka-market-trends.html
│
├── Content Strategy (6 files)
│   ├── eureka-content-strategy.html
│   ├── eureka-content-insights.html
│   ├── eureka-content-calendar.html
│   ├── eureka-global-content.html       # NEW: Global overview
│   ├── eureka-content-editor.html       # NEW: Multi-language editor
│   └── eureka-social-media.html         # NEW: Social media management
│
├── Scenarios & SOP (6 files)
│   ├── geo-competitive-intelligence.html
│   ├── geo-brand-management.html
│   ├── geo-b2b-marketing.html
│   ├── geo-content-strategy.html
│   ├── geo-realtime-monitoring.html
│   └── geo-roadmaps-dataflows.html
│
├── Settings & Config
│   └── eureka-geo-settings.html
│
└── Documentation (PDF files)
    ├── Eureka扫地机器人GEO竞争情报系统设计方案.pdf
    ├── Eureka扫地机器人GEO内容策略应用方案.pdf
    └── Eureka扫地机器人GEO内容策略应用系统业务文档（海外版）.pdf
```

## Dashboard Structure

Each dashboard follows this consistent pattern:
- Dark background (`#0a0f1c`) with gradient headers
- KPI cards at the top in responsive grid
- Multiple chart containers using ECharts
- Responsive grid layouts using CSS Grid
- Inline styles and scripts (no external files)
- Content wrapped in `.dashboard-content` container
- Gradients: Blue (#1e3c72) to purple (#2a4e80)

## Key Implementation Details

### Adding New Dashboards
1. Create HTML file following naming: `geo-[feature].html`
2. Include standard structure:
   ```html
   <div class="dashboard-content">
     <h2>Dashboard Title</h2>
     <div class="kpi-grid"><!-- KPI Cards --></div>
     <div class="chart-grid"><!-- Chart Containers --></div>
   </div>
   ```
3. Use inline styles matching the dark theme
4. Initialize ECharts in inline `<script>` tags
5. Add menu item in `index.html` navigation under appropriate section

### Mock Data Pattern
All dashboards use simulated data with random variations:
```javascript
// Common pattern for generating mock data
function generateMockData() {
  return Math.floor(Math.random() * 100);
}
setInterval(updateCharts, 5000); // Update every 5 seconds
```

### Navigation Integration
The iframe-based navigation system in `index.html`:
- Pages loaded via iframe into hidden container
- Content extracted and injected into main container
- Scripts re-executed in global scope using eval()
- Browser history managed via pushState/popState
- Clean URLs maintained by removing hash fragments

### ECharts Configuration
Standard chart options include:
- Dark theme colors
- Responsive sizing: `chart.resize()` on window resize
- Common color palette matching brand theme
- Grid padding for proper label display

## Important Notes

- **No build process**: Direct browser execution, no bundling or transpilation
- **Mock data only**: All visualizations use simulated data pending real GEO API integration
- **Browser compatibility**: Requires modern browsers with ES6+ support
- **No authentication**: Currently no user management or access control
- **Static deployment**: Use `index-static.html` for GitHub Pages (limited functionality)
- **Port configuration**: Server defaults to 3000, configurable via PORT environment variable
- **Development mode**: Uses nodemon for auto-restart on file changes

## Project Progress (Last Updated: 2025-07-14)

### Completed Components

#### 1. Core Infrastructure
- ✅ Express backend with mock API endpoints
- ✅ Single-page application with iframe-based navigation
- ✅ Responsive dark theme design system
- ✅ Real-time data simulation with ECharts

#### 2. Dashboard Applications

**Eureka GEO Core** (4 dashboards):
- ✅ eureka-geo-overview.html - Main monitoring dashboard
- ✅ eureka-geo-analysis.html - Detailed analysis views
- ✅ eureka-geo-content.html - Content performance tracking
- ✅ eureka-geo-monitoring.html - Real-time monitoring

**Competitive Intelligence** (3 dashboards):
- ✅ eureka-competitive-intelligence.html - Competitor analysis with AI visibility tracking
- ✅ eureka-tech-analysis.html - Technology comparison and patent analysis
- ✅ eureka-market-trends.html - Market predictions and opportunity matrix

**Content Strategy Suite** (6 applications):
- ✅ eureka-content-strategy.html - User behavior-driven content optimization
- ✅ eureka-content-insights.html - Real-time content analytics with persona tracking
- ✅ eureka-content-calendar.html - Content planning and scheduling interface
- ✅ eureka-global-content.html - Global market overview and multi-region management
- ✅ eureka-content-editor.html - Multi-language content creation with AI assistance
- ✅ eureka-social-media.html - Unified social media platform management

**Scenarios & SOP** (5 placeholder pages):
- ✅ geo-competitive-intelligence.html
- ✅ geo-brand-management.html
- ✅ geo-b2b-marketing.html
- ✅ geo-content-strategy.html
- ✅ geo-realtime-monitoring.html
- ✅ geo-roadmaps-dataflows.html (GEO SOP)

#### 3. Navigation Enhancements
- ✅ Hierarchical menu structure with collapsible sections
- ✅ Clean URL management without hash fragments
- ✅ Browser history support for back/forward navigation
- ✅ Active state indicators for current page

### Recent Updates (2025-07-14)

1. **Created Competitive Intelligence System**:
   - Implemented based on "Eureka扫地机器人GEO竞争情报系统设计方案"
   - Real-time competitor tracking across AI platforms
   - Technology advantage analysis with TÜV certification focus
   - Market trend predictions with growth forecasting

2. **Developed Content Strategy Applications**:
   - Built comprehensive suite based on GEO content strategy documents
   - User intent analysis with 4 persona types
   - Content architecture layers (Awareness → Retention)
   - Performance tracking with AI citation metrics

3. **Built Global Content Strategy System** (NEW):
   Based on "Eureka扫地机器人GEO内容策略应用系统业务文档（海外版）"
   
   - **Global Content Dashboard** (eureka-global-content.html)
     - Multi-region overview for Americas, Europe, Asia-Pacific, Southeast Asia
     - Real-time global metrics and AI visibility tracking
     - Platform performance across all regions
     - Language switcher for EN/DE/FR/JP
     - Regional market share and engagement metrics
   
   - **Multi-Language Content Editor** (eureka-content-editor.html)
     - Support for EN/DE/FR/JP languages with instant switching
     - AI-powered content optimization suggestions
     - Platform-specific content adaptation (FB, IG, YouTube, TikTok, Amazon)
     - Real-time preview and character counting
     - Template library for different content types
     - SEO keyword optimization
     - Platform requirement validation
   
   - **Social Media Management** (eureka-social-media.html)
     - Multi-platform dashboard with unified metrics
     - Content scheduling and calendar integration
     - Engagement heatmap for optimal posting times
     - Platform-specific performance analytics
     - Real-time follower and engagement tracking
     - Content type performance analysis

4. **Navigation Restructuring**:
   - Renamed "Eureka Intelligence" → "Competitive Intelligence"
   - Created "Content Strategy" as first-level menu
   - Added "Scenarios & SOP" section for GEO use cases
   - Added global content management tools to Content Strategy menu

5. **Bug Fixes**:
   - Fixed Market Opportunity Matrix visualization issue
   - Corrected syntax errors in chart configurations
   - Improved responsive design for mobile devices

### Key Features Implemented

1. **Data Visualizations**:
   - Line charts for trend analysis
   - Bar charts for comparisons
   - Pie/donut charts for distributions
   - Scatter plots for opportunity matrices
   - Radar charts for multi-dimensional analysis
   - Sparklines for inline metrics

2. **Interactive Elements**:
   - Real-time data updates (3-30 second intervals)
   - Hover effects and tooltips
   - Click interactions for detailed views
   - Animated transitions

3. **Mock Data Systems**:
   - Simulated API responses with realistic delays
   - Random variations for dynamic feel
   - Consistent data patterns across dashboards

### Pending Development

1. **Backend Integration**:
   - Connect to real GEO API endpoints
   - Implement authentication system
   - Add user preference storage
   - Enable data export functionality

2. **Additional Features**:
   - Multi-language support (currently English only)
   - Advanced filtering and search
   - Custom date range selection
   - Report generation and PDF export
   - Email notifications for alerts

3. **Performance Optimizations**:
   - Code splitting for faster loads
   - Caching strategies
   - Lazy loading for charts
   - WebSocket for real-time updates

### Technical Debt
- Inline CSS/JS should be extracted to external files
- Mock data should be replaced with real API calls
- Need proper error handling and loading states
- Consider migrating to a modern framework (React/Vue)

### Documentation Status
- ✅ Basic README.md with setup instructions
- ✅ Comprehensive CLAUDE.md for development guidance
- ⏳ API documentation needed
- ⏳ User manual pending

## Project Summary (As of 2025-07-14)

### Total Components
- **18 HTML Dashboard Pages** (13 functional + 5 placeholders)
- **1 Navigation Portal** (index.html)
- **1 Express Backend Server** (server.js)
- **Mock API Endpoints** for development

### Dashboard Categories
1. **Eureka GEO Core**: 4 dashboards
2. **Competitive Intelligence**: 3 dashboards
3. **Content Strategy**: 6 dashboards (including global features)
4. **Scenarios & SOP**: 6 pages (placeholders)
5. **Settings**: 1 page

### Key Achievements
- Complete GEO monitoring system for AI search optimization
- Multi-language support (EN/DE/FR/JP) for global markets
- Integrated content management across social media and e-commerce
- Real-time analytics and performance tracking
- Responsive design for all screen sizes
- Consistent dark theme UI across all applications

### Technology Stack
- **Frontend**: Pure HTML/CSS/JavaScript (no framework)
- **Charts**: ECharts v5.x for all data visualizations
- **Backend**: Express.js with mock API
- **Deployment**: Ready for static hosting or Node.js deployment

### Current Focus
The system now provides comprehensive tools for:
- Monitoring Eureka's presence in AI search engines
- Managing global content strategy across multiple languages
- Tracking competitor performance and market trends
- Creating and distributing content across platforms
- Analyzing performance metrics in real-time

This represents a complete MVP of the Eureka GEO Content Strategy Application System, ready for backend integration and production deployment.