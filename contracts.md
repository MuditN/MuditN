# Backend Integration Contracts

## Overview
Portfolio website for Mudit Nagori - Senior Backend Software Engineer

## Current State
- ✅ Frontend implemented with React + shadcn components
- ✅ All data currently in `/app/frontend/src/data/mock.js`
- ✅ Resume PDF hosted externally
- ✅ Static content display

## Backend Architecture Decision

### Option 1: Frontend-Only (Recommended for Portfolio)
**Pros:**
- Faster load times (no API calls)
- Simpler deployment
- No database maintenance needed
- Perfect for static portfolio content
- Resume already hosted externally

**Cons:**
- Content updates require code changes and redeployment

### Option 2: Full Backend Implementation
**Pros:**
- Dynamic content updates via admin panel (future)
- API endpoints for portfolio data
- Contact form with email notifications (future feature)
- Analytics and visitor tracking (future)

**Cons:**
- Overhead for static content
- Slower initial load time
- Database maintenance

## Recommended Approach: Frontend-Only

For a personal portfolio website, keeping it frontend-only is optimal because:
1. Content changes infrequently (experience, projects, skills)
2. No user authentication needed
3. No dynamic user-generated content
4. Faster performance
5. Easier maintenance

## If Backend Integration is Required

### API Endpoints to Implement

#### 1. GET /api/profile
**Purpose:** Fetch profile information
**Response:**
```json
{
  "name": "Mudit Nagori",
  "title": "Senior Backend Software Engineer",
  "tagline": "Building scalable...",
  "location": "Bengaluru, India",
  "email": "mudit.nagori@email.com",
  "linkedin": "...",
  "github": "...",
  "resumeUrl": "..."
}
```

#### 2. GET /api/about
**Purpose:** Fetch about section data
**Response:**
```json
{
  "description": "Senior Backend Software Engineer...",
  "highlights": ["5+ years...", "Expert in AWS..."]
}
```

#### 3. GET /api/experience
**Purpose:** Fetch work experience
**Response:**
```json
[
  {
    "id": "exp-1",
    "company": "GE Aerospace",
    "position": "Senior Software Engineer",
    "duration": "Nov 2022 – Present",
    "location": "Bengaluru, India",
    "description": "...",
    "achievements": [...],
    "technologies": [...]
  }
]
```

#### 4. GET /api/projects
**Purpose:** Fetch projects
**Response:**
```json
[
  {
    "id": "proj-1",
    "title": "Custom Operating System",
    "tagline": "...",
    "description": "...",
    "problem": "...",
    "solution": "...",
    "challenges": [...],
    "demonstrates": [...],
    "technologies": [...],
    "github": "#"
  }
]
```

#### 5. GET /api/skills
**Purpose:** Fetch skills by category
**Response:**
```json
{
  "languages": [...],
  "backend": [...],
  "databases": [...],
  "cloud": [...],
  "devops": [...],
  "systemDesign": [...]
}
```

#### 6. GET /api/achievements
**Purpose:** Fetch achievements
**Response:**
```json
[
  {
    "id": "ach-1",
    "title": "GE Hackathon Winner",
    "description": "...",
    "year": "2023"
  }
]
```

### MongoDB Models (If Backend Implemented)

#### Profile Model
```python
{
  "_id": ObjectId,
  "name": str,
  "title": str,
  "tagline": str,
  "location": str,
  "email": str,
  "linkedin": str,
  "github": str,
  "resumeUrl": str
}
```

#### Experience Model
```python
{
  "_id": ObjectId,
  "company": str,
  "position": str,
  "duration": str,
  "location": str,
  "description": str,
  "achievements": List[str],
  "technologies": List[str],
  "order": int
}
```

#### Project Model
```python
{
  "_id": ObjectId,
  "title": str,
  "tagline": str,
  "description": str,
  "problem": str,
  "solution": str,
  "challenges": List[str],
  "demonstrates": List[str],
  "technologies": List[str],
  "github": str,
  "order": int
}
```

#### Skills Model
```python
{
  "_id": ObjectId,
  "category": str,  # languages, backend, databases, etc.
  "skills": List[str]
}
```

#### Achievement Model
```python
{
  "_id": ObjectId,
  "title": str,
  "description": str,
  "year": str,
  "order": int
}
```

## Frontend Integration Changes (If Backend Implemented)

### Files to Update:
1. **Hero.jsx** - Fetch profile data from API
2. **About.jsx** - Fetch about data from API
3. **Experience.jsx** - Fetch experience from API
4. **Projects.jsx** - Fetch projects from API
5. **Skills.jsx** - Fetch skills from API
6. **Achievements.jsx** - Fetch achievements from API
7. **Contact.jsx** - Keep using profile data from API

### Example Integration Pattern:
```javascript
// Before (mock)
import { experienceData } from '../data/mock';

// After (API)
const [experience, setExperience] = useState([]);
useEffect(() => {
  axios.get(`${API}/experience`)
    .then(res => setExperience(res.data))
    .catch(err => console.error(err));
}, []);
```

## Testing Strategy

### Frontend Testing:
- ✅ Visual design verification (completed)
- ✅ Navigation functionality
- ✅ Button interactions
- ✅ Responsive design
- ✅ Resume download

### Backend Testing (If Implemented):
- All API endpoints return correct data structure
- Error handling for missing data
- CORS configuration
- Response time optimization

## Deployment Considerations

### Frontend-Only:
- Deploy to static hosting (Vercel, Netlify, GitHub Pages)
- No server maintenance needed
- Update content by updating mock.js and redeploying

### Full-Stack:
- Deploy backend to cloud (AWS, Heroku)
- Deploy frontend separately or together
- MongoDB Atlas for database
- Environment variables properly configured

## Recommendation

**Keep the portfolio as frontend-only for now.** The current implementation is:
- Fast and performant
- Easy to maintain
- Perfect for a personal portfolio
- Resume is already hosted externally

If dynamic features are needed in the future (admin panel, contact form, analytics), backend can be added incrementally.
