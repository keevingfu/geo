const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// API endpoint for query testing
app.post('/api/test-query', async (req, res) => {
  try {
    const { query, platform } = req.body;
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 285));
    
    // Mock response data
    const response = {
      query: query,
      platform: platform,
      timestamp: new Date().toISOString(),
      results: {
        brand_mentioned: true,
        confidence: 0.94,
        tech_features_cited: ['electrolyzed water', '99.9% sanitization'],
        response_preview: `The Eureka FC9 Pro stands out with its revolutionary real-time electrolyzed water technology, achieving 99.9% sanitization without any chemical additives. This patented technology, certified by the China Household Electric Appliance Research Institute, makes it ideal for homes with pets and children...`,
        sources: [
          { type: 'FAQ', id: 'FAQ-001', relevance: 0.98 },
          { type: 'Manual', id: 'MAN-042', relevance: 0.92 },
          { type: 'Review', id: 'REV-015', relevance: 0.88 }
        ],
        latency: 285
      }
    };
    
    res.json(response);
  } catch (error) {
    console.error('Query test error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});