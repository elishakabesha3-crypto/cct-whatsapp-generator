# CCT Daily Issues Report Generator

A professional-grade web platform for the Call Center Team (CCT) to organize and send batched, structured issue reports to WhatsApp—eliminating repetitive typing and ensuring consistent, professional communication.

## Problem Solved

Your call center team sends multiple related issues throughout the day in WhatsApp groups. Instead of sending 10+ individual messages, you now:
- **Build ONE organized message** with multiple issues grouped by category
- **Add issues as they come in** without rushing to send immediately
- **Review the complete report** with real-time preview before sending
- **Send one professional batch** instead of scattered individual messages
- **Match your exact group format** with proper sections and numbering

## Real-World Example

**Before**: Sending individual messages
```
Kindly note atm 98 is down
Kindly note atm 28 is also down
The engineer assigned is Ireen
...repeat 8 more times
```

**After**: ONE organized message
```
SECONDLINE MAINTENANCE

(01) ATM 98 Mumbwa - Cash replenishment required @ 12:18 28-02-26 Ireen +0714556086
(02) ATM 28 Mkushi - Power outage @ 14:30 28-02-26 Joseph +260974556086

PHYSICAL SECURITY

(01) ATM 45 Chingola - Alarm system failing @ 18:51 25-02-26 Joseph +260974556086
```

## Key Features

### Batched Issues with Smart Sections
- Build messages with 9 pre-defined categories (SECONDLINE, PHYSICAL SECURITY, IT ISSUES, etc.)
- Issues automatically numbered within sections
- Sections only appear in message if they have issues
- Exactly matches your WhatsApp group structure

### Professional Format Guaranteed
Each issue: `(##) LOCATION - Description @ TIME DATE ENGINEER +PHONE`
- Consistent formatting every single time
- Proper numbering and section organization
- Optional ticket numbers for tracking

### Real-Time Preview
- See exact WhatsApp format as you build
- Preview updates instantly as you add/remove issues
- Monospace font matches WhatsApp appearance

### Smart Engineer Management
- Dropdown remembers engineers you use
- Autofill engineer names and phone numbers
- Add new engineers on the fly
- Data persists across sessions

### Complete Message History
- Every batch message saved automatically
- View full history with copy to clipboard
- Keep reference of what was sent
- Clear history when needed

### Quick Message Option
- For urgent single-line messages
- Format with professional signature
- Send immediately without batching

## Getting Started

1. Navigate to `/dashboard`
2. Click **"Daily Report"** tab
3. Fill in issue details (Location, Description, Time, Date, Engineer, Phone)
4. Click appropriate section button to add issue
5. Repeat for additional issues
6. Review preview showing exact format
7. Click **"Send to WhatsApp"** to send to your group

See **BATCH_SYSTEM_GUIDE.md** for detailed workflows and examples.

## System Layout

**Daily Report Tab**: Build multi-issue batched messages with proper organization
- Add issues by location, description, time, date, engineer
- Organized into 9 pre-defined sections
- Expand/collapse sections to manage issues
- Real-time preview shows final format
- Generate and send in one click

**Quick Message Tab**: For single custom messages
- Type any message
- Professional signature added automatically
- One-click WhatsApp sending

**History Tab**: Review all sent messages
- See complete history of what was sent
- Copy any message to clipboard
- Clear history when needed

## Technical Stack

- Next.js with React and TypeScript
- Tailwind CSS for responsive design
- Browser localStorage for data persistence
- WhatsApp Web API (`wa.me` links)

## Data & Storage

All data stored locally in browser:
- Message history (sentMessages)
- Engineer contacts (engineerList)

Data persists across sessions but can be cleared by clearing browser cache.

## Documentation

- **README.md** - This file, project overview
- **BATCH_SYSTEM_GUIDE.md** - Complete guide with examples and workflows
- **QUICK_START.md** - Get started in 2 minutes

## Project Structure

```
app/
├── dashboard/
│   ├── page.tsx                    # Main dashboard with tab navigation
│   └── components/
│       ├── BatchIssueForm.tsx      # Primary batch message builder
│       ├── ManualForm.tsx          # Quick single messages
│       └── History.tsx             # Message history viewer

lib/
└── messageFormatter.ts              # Message formatting utilities with batch support
```

## Message Format Reference

### Basic Issue Format
```
(##) LOCATION - Description @ TIME DATE ENGINEER +PHONE
```

### Complete Section Example
```
SECONDLINE MAINTENANCE

(01) ATM 98 Mumbwa - Panic button not working @ 12:18 27-06-25 Ireen +0714556086
(02) ATM 45 Chingola - Alarm system failing @ 18:51 25-02-26 Joseph +260974556086
```

## How to Use

### For Daily Reports
1. Open dashboard, go to Daily Report
2. Add issues throughout the day
3. Keep message building as issues come in
4. At end of day, review all sections
5. Send one organized batch message
6. Clear for next day

### For Urgent Updates
1. Open Dashboard, go to Quick Message
2. Type your message
3. Send to WhatsApp immediately

### For Reference
1. Go to History tab
2. View all previously sent messages
3. Copy if you need to resend similar message

## Tips for Best Results

- Keep location names consistent (e.g., "ATM 98 Mumbwa")
- Use concise issue descriptions
- Use 24-hour time format (14:30 not 2:30 PM)
- Date format: DD-MM-YY
- Include engineer phone with +260 country code
- Use "OTHER" section for misc issues

## Troubleshooting

**Issue not appearing in section?**
- Make sure location, description, and engineer are filled
- Click the correct section button
- Expand the section to see it

**WhatsApp not opening?**
- Ensure WhatsApp is installed or WhatsApp Web is open
- Check internet connection
- Try again in a moment

**Missing engineers in dropdown?**
- First time using the system? Dropdown will be empty
- Type engineer name in Quick Message, save it
- Or add engineer while creating first issue

## For Team Leads

This system ensures:
- Consistent message format across all reports
- Complete audit trail of all issues reported
- Professional presentation to stakeholders
- No missed issues due to scattered messages
- Clear accountability with engineer assignments

## Next Steps

The system is production-ready and matches your actual WhatsApp group structure. Start using it for:
- Daily issue summaries
- Shift handoffs
- Incident tracking
- Status updates

---

**Built to streamline your team's daily reporting. One batch message at a time.**
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
