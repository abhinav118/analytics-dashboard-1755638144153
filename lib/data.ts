export const siteData = {
  "users": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "role": "admin",
      "status": "active",
      "lastLogin": "2024-01-15T10:30:00Z",
      "avatar": "/avatars/john.jpg"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "jane@example.com",
      "role": "user",
      "status": "active",
      "lastLogin": "2024-01-14T15:45:00Z",
      "avatar": "/avatars/jane.jpg"
    },
    {
      "id": 3,
      "name": "Mike Johnson",
      "email": "mike@example.com",
      "role": "editor",
      "status": "inactive",
      "lastLogin": "2024-01-10T09:20:00Z",
      "avatar": "/avatars/mike.jpg"
    }
  ],
  "metrics": [
    {
      "id": "total_users",
      "label": "Total Users",
      "value": 12456,
      "change": 12,
      "trend": "up",
      "period": "30d"
    },
    {
      "id": "revenue",
      "label": "Revenue",
      "value": 84320,
      "change": 8,
      "trend": "up",
      "period": "30d"
    },
    {
      "id": "conversion_rate",
      "label": "Conversion Rate",
      "value": 3.24,
      "change": -2,
      "trend": "down",
      "period": "30d"
    }
  ],
  "reports": [
    {
      "id": 1,
      "title": "Monthly Sales Report",
      "description": "Comprehensive sales analysis for the current month",
      "type": "sales",
      "status": "ready",
      "createdAt": "2024-01-01T00:00:00Z",
      "format": "pdf"
    },
    {
      "id": 2,
      "title": "User Activity Report",
      "description": "User engagement and activity metrics",
      "type": "users",
      "status": "processing",
      "createdAt": "2024-01-15T00:00:00Z",
      "format": "csv"
    }
  ],
  "settings": {
    "appName": "Analytics Dashboard",
    "description": "Comprehensive analytics dashboard for data visualization and user management",
    "version": "1.0.0",
    "company": {
      "name": "Analytics Corp",
      "logo": "/logo.png",
      "website": "https://analytics.com"
    },
    "preferences": {
      "theme": "light",
      "timezone": "UTC-5",
      "language": "en",
      "dateFormat": "MM/DD/YYYY"
    },
    "notifications": {
      "email": true,
      "push": false,
      "sms": false
    }
  }
};

export const navigation = {
  "main": [
    {
      "label": "Dashboard",
      "route": "/",
      "icon": "home",
      "active": true
    },
    {
      "label": "Analytics",
      "route": "/analytics",
      "icon": "chart-bar",
      "active": false
    },
    {
      "label": "Users",
      "route": "/users",
      "icon": "users",
      "active": false
    },
    {
      "label": "Reports",
      "route": "/reports",
      "icon": "document-report",
      "active": false
    },
    {
      "label": "Settings",
      "route": "/settings",
      "icon": "cog",
      "active": false
    }
  ],
  "footer": [
    {
      "label": "Help",
      "route": "/help",
      "icon": "question-mark-circle"
    },
    {
      "label": "Support",
      "route": "/support",
      "icon": "support"
    },
    {
      "label": "Logout",
      "route": "/logout",
      "icon": "logout"
    }
  ]
};