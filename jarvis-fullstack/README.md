# JARVIS Full-Stack AI Operating System

A production-ready, secure, multi-agent AI operating system designed for Alibaba Cloud deployment.

## 🏗️ Architecture

```
jarvis-fullstack/
├── backend/                 # Node.js/Express API Server
│   ├── src/
│   │   ├── controllers/     # Request handlers
│   │   ├── middleware/      # Security agent, error handling, logging
│   │   ├── routes/          # API endpoints
│   │   ├── services/        # Business logic (JARVIS core)
│   │   └── utils/           # Utilities (logger, helpers)
│   ├── config/              # Configuration files
│   ├── package.json
│   └── .env.example
│
├── frontend/                # React/Vite UI
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── hooks/           # Custom React hooks
│   │   ├── services/        # API services
│   │   └── styles/          # CSS stylesheets
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── docker/                  # Docker configurations
├── scripts/                 # Deployment scripts
├── docs/                    # Documentation
└── README.md
```

## 🔐 Security Features

- **Security Agent Middleware**: Classifies all inputs as SAFE/SUSPICIOUS/MALICIOUS
- **Tool Whitelisting**: Only approved tools can be executed
- **Rate Limiting**: Prevents abuse and DoS attacks
- **Helmet.js**: Comprehensive HTTP security headers
- **CORS Protection**: Configured for production use
- **Input Validation**: All inputs sanitized and validated

## 🧠 Core Capabilities

1. **Multi-Agent Brain**: Reasoning, planning, and execution
2. **Memory System**: Short-term (conversation) + Long-term (user preferences)
3. **Emotion Adaptation**: Detects user state (stressed, frustrated, focused, etc.)
4. **Tool Execution**: Controlled, whitelisted tool usage
5. **Multilingual Support**: Auto-detects and responds in user's language
6. **Security First**: Mandatory security layer on every request

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn
- Redis (for memory system)
- MongoDB (for long-term storage)

### Backend Setup

```bash
cd backend
cp .env.example .env
# Edit .env with your configuration
npm install
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Access

- Frontend: http://localhost:3001
- Backend API: http://localhost:3000
- Health Check: http://localhost:3000/health

## 📡 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login
- `POST /api/auth/logout` - Logout
- `GET /api/auth/me` - Get current user

### JARVIS Core
- `POST /api/jarvis/chat` - Send message to JARVIS
- `GET /api/jarvis/status` - Get system status
- `GET /api/jarvis/conversation/:id` - Get conversation
- `DELETE /api/jarvis/conversation/:id` - Clear conversation

### Tools
- `POST /api/tools/execute` - Execute a tool
- `GET /api/tools/list` - List available tools
- `GET /api/tools/:toolName/schema` - Get tool schema

### Memory
- `GET /api/memory/short-term` - Get short-term memory
- `POST /api/memory/short-term` - Add to short-term memory
- `GET /api/memory/long-term` - Get long-term memory
- `POST /api/memory/long-term` - Update long-term memory
- `DELETE /api/memory/:type` - Clear memory

## 🔧 Allowed Tools

The following tools are whitelisted for execution:

1. `send_message` - Send messages
2. `query_database` - Query databases
3. `get_system_status` - Get system status
4. `run_task` - Execute tasks
5. `deploy_service` - Deploy services
6. `log_event` - Log events

## 🌍 Environment Variables

See `backend/.env.example` for all configuration options:

- Server configuration (PORT, HOST)
- Security (JWT_SECRET, BCRYPT_ROUNDS)
- Redis (REDIS_HOST, REDIS_PORT)
- MongoDB (MONGODB_URI)
- Alibaba Cloud credentials
- Qwen AI API configuration
- Rate limiting settings

## 🐳 Docker Deployment

```bash
# Build images
docker-compose build

# Start services
docker-compose up -d

# View logs
docker-compose logs -f
```

## ☁️ Alibaba Cloud Deployment

This system is optimized for Alibaba Cloud:

- **ECS**: Compute instances
- **API Gateway**: API management
- **Redis**: In-memory caching
- **MongoDB Atlas**: Database
- **DashScope**: Qwen AI API

## 📊 System Status

Monitor system health at `/api/jarvis/status`:

```json
{
  "status": "operational",
  "components": {
    "securityAgent": "active",
    "memorySystem": "active",
    "toolEngine": "active",
    "emotionAdapter": "active",
    "multilingualSupport": "active"
  },
  "uptime": 3600,
  "version": "1.0.0"
}
```

## 🛡️ Security Threat Detection

The Security Agent blocks:

- Prompt injection attempts
- "Ignore previous instructions"
- "Reveal system prompt"
- "Act as admin"
- "Disable security"
- Privilege escalation attempts
- Tool bypass attempts
- SQL injection patterns
- XSS attempts

## 📝 License

MIT

---

**Built for production deployment on Alibaba Cloud**
