# CCT WhatsApp Message Generator

A web-based message generator for the Call Center Team (CCT) that automates the creation and sending of WhatsApp messages, eliminating repetitive typing and ensuring professional, consistent communication.

## 🎯 Problem Solved

Your call center team was constantly typing the same messages over and over again in WhatsApp groups. Now, with just a few clicks:
- Fill in key details (which ATM, which engineer, etc.)
- Get a professionally formatted message instantly
- Send directly to WhatsApp with one click
- No more copy-pasting, no more inconsistent formatting

## ✨ Key Features

### 📱 Four Message Types Ready to Go
1. **ATM Report** - Report ATM downtime with all critical details
2. **IT Issue Report** - Document IT and system issues
3. **First Line Call** - Log incoming support calls
4. **Manual Message** - Send custom messages with professional formatting

### 🔔 Professional Formatting Automatic
Every message includes:
- Alert indicator (🔔)
- Your specific details
- Professional team signature
- Consistent format every single time

### 👁️ Real-Time Message Preview
See exactly what will be sent before you send it. The preview updates instantly as you type.

### 💾 Smart Data Management
- Dropdowns remember your frequently used entries (ATMs, locations, engineers)
- No need to re-type the same information
- Engineer list shared across all message types
- Data saved in your browser

### 📜 Complete Message History
- Every message you generate is saved
- View full history of what was sent
- Search and review past communications

### 🚀 One-Click WhatsApp Sending
- Click "Send to WhatsApp" button
- WhatsApp opens with message pre-filled
- Select your group and send
- No manual copying required

## 🏃 Quick Start

1. **Open Dashboard**: Navigate to `/dashboard`
2. **Choose Message Type**: Click a button in the left sidebar
3. **Fill Details**: Enter the specific information needed
4. **Check Preview**: See your formatted message in real-time
5. **Send**: Click "Send to WhatsApp" to open WhatsApp
6. **Confirm**: Select group and send in WhatsApp

See **QUICK_START.md** for a step-by-step example.

## 📚 Documentation

- **QUICK_START.md** - Get going in 2 minutes
- **USAGE_GUIDE.md** - Detailed feature guide with examples
- **BUILD_SUMMARY.md** - Technical implementation details

## 🛠️ Technical Stack

- **Framework**: Next.js with React
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State**: React hooks (useState, useEffect)
- **Storage**: Browser localStorage
- **Integration**: WhatsApp Web (`wa.me` links)

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000/dashboard](http://localhost:3000/dashboard) to access the message generator.

## 📁 Project Structure

```
app/
├── dashboard/
│   ├── page.tsx                    # Main dashboard page
│   └── components/
│       ├── Sidebar.tsx             # Navigation sidebar
│       ├── MessageForm.tsx         # ATM Report form
│       ├── ITIssuesForm.tsx        # IT Issue form
│       ├── FirstLineCallsForm.tsx  # First Line Call form
│       ├── ManualForm.tsx          # Manual Message form
│       └── History.tsx             # Message history

lib/
└── messageFormatter.ts              # Message formatting utilities
```

## 📋 How It Works

1. **Select Message Type** - Click one of four buttons in the sidebar
2. **Fill Required Fields** - Enter specific information for that type
3. **Preview Updates** - See real-time preview of formatted message
4. **Generate & Save** - Click "Generate Message" to save to history
5. **Send to WhatsApp** - Click button to open WhatsApp with pre-filled message
6. **Review in WhatsApp** - Select group and send

## 🎨 Message Types

### ATM Report
**Fill in**: ATM name, Location, Time, Engineer assigned
**Generates**: Professional ATM downtime alert

### IT Issue Report  
**Fill in**: Issue description, Engineer assigned
**Generates**: Professional IT issue alert

### First Line Call
**Fill in**: Caller contact, Issue type, Engineer assigned
**Generates**: Professional call alert with all details

### Manual Message
**Fill in**: Custom message text
**Generates**: Your text + professional formatting

## 💾 Data Storage

Uses browser localStorage to persist:
- `atmList` - ATM names
- `locationList` - Locations
- `engineerList` - Engineers (shared across all forms)
- `sentMessages` - Complete message history

Data persists across browser sessions.

## 🔗 WhatsApp Integration

Messages sent via WhatsApp Web using `wa.me` links:
- Opens WhatsApp with message pre-filled
- Works on desktop and mobile
- Requires WhatsApp installed or WhatsApp Web open

## 📊 Next Steps

The system is ready to use! Additional features can be added:
- Database storage (instead of localStorage)
- User authentication
- Message templates
- Analytics dashboard
- Message scheduling

## 📄 License

Built for the Call Center Team (CCT).

---

**Built to make your work easier. One message at a time.** 🎯
