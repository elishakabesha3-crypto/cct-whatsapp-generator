# CCT Batched Message System - Complete Guide

## Overview

The new batched message system allows your CCT team to build professional, organized issue reports in one message instead of sending multiple individual messages. Each message can contain multiple issues organized by categories, exactly matching your real WhatsApp group format.

## Real-World Example

Instead of sending:
```
Kindly note atm 98 kitwe main will require a cash replenishment
Kindly note atm 28 mkushi branch is offline
...and 10 more individual messages
```

You now send ONE organized message:
```
SECONDLINE MAINTENANCE

(01) ATM 98 Kitwe - Cash replenishment required @ 12:18 28-02-26 Ireen +260956789012
(02) ATM 28 Mkushi - Power outage, offline @ 14:30 28-02-26 Joseph +260974556086

PHYSICAL SECURITY

(01) ATM 45 Chingola - Alarm system failing @ 18:51 25-02-26 Joseph +260974556086
(02) ATM 81 Foxdale - Dispenser fatal @ 17:37 25-02-26 Kapemba +260974556086
```

## How It Works

### Step 1: Open the Daily Report Tab
- Go to `/dashboard`
- Click **"Daily Report"** tab

### Step 2: Fill Issue Details
The form asks for:
- **Location**: ATM location (e.g., "ATM 98 Mumbwa")
- **Description**: What's wrong (e.g., "Panic button not working")
- **Time**: When it happened (e.g., 12:18)
- **Date**: Date format (e.g., 28-02-26)
- **Engineer**: Select from dropdown or add new
- **Phone**: Engineer's phone number
- **Ticket #**: Optional ticket/reference number

### Step 3: Choose Section
Click the section button where this issue belongs:
- SECONDLINE MAINTENANCE
- PHYSICAL SECURITY
- CRES ISSUES
- IT ISSUES
- NECOR CALLS
- POWER OUTAGE
- CASHOUT
- BUSY WITH REVERSAL
- OTHER

The issue gets added to that section.

### Step 4: Build Your Message
- Issues appear in an accordion view
- Expand sections to see and manage issues
- Remove individual issues if needed
- Add more issues to the same or different sections
- Real-time preview shows exactly how message will look

### Step 5: Send to WhatsApp
- Click **"Generate Message"** to save to history
- Click **"Send to WhatsApp"** button
- WhatsApp opens with your message pre-filled
- Select your group and send

## Message Format

Each issue follows this format:
```
(##) LOCATION - Description @ TIME DATE ENGINEER +PHONE
Ticket #: (optional)
```

Example:
```
(01) ATM 98 Mumbwa - Panic button not working @ 12:18 27-06-25 Ireen +0714556086
Ticket #: INC1095183O
```

## Features

### Smart Section Organization
- 9 pre-defined sections matching your group structure
- Issues automatically numbered within each section
- Sections only appear in message if they have issues
- Easy to expand/collapse sections for management

### Real-Time Preview
- See exact WhatsApp format before sending
- Preview updates as you add/remove issues
- Preview uses monospace font like WhatsApp

### Issue Management
- **Add**: Fill form, click section button
- **View**: Expand section accordion
- **Remove**: Click "Remove" button on any issue
- **Clear All**: Remove all issues at once

### Engineer Management
- Dropdown remembers previously used engineers
- Engineers saved in browser storage
- Add new engineer by typing in phone field

### Message History
- Every message you generate is saved
- View full history in History tab
- Copy any message to clipboard
- Clear history if needed

## Common Workflows

### Workflow 1: End-of-Day Summary
1. Throughout the day, add issues to appropriate sections
2. At end of day, review all sections in preview
3. Generate message once
4. Send to WhatsApp group
5. Clear all for next day

### Workflow 2: Batch Issue Report
1. Have list of issues from support team
2. Open Daily Report tab
3. Add all issues by section
4. Check preview for accuracy
5. Send to WhatsApp
6. Issues saved in history for reference

### Workflow 3: Quick Update
1. Need to send quick issue update?
2. Use **"Quick Message"** tab instead
3. Type custom message
4. Send directly to WhatsApp

## Tips & Tricks

### Format Tips
- Keep location names consistent (e.g., "ATM 98 Mumbwa" not "ATM 98 MUMBWA")
- Use concise descriptions (the format is already professional)
- Date format: DD-MM-YY (e.g., 28-02-26)
- Time format: 24-hour format (e.g., 14:30)

### Engineer Phone Tips
- Include country code (+260 for Zambia)
- Keep phone format consistent
- Remove spaces and dashes for consistency
- Example: +260956789012 (not +260 956 789 012)

### Section Tips
- Match section names to your actual group structure
- Issues in same section should be related
- Don't create too many sections - keeps message organized
- Use "OTHER" for miscellaneous issues

### History Tips
- Review history to see what was sent
- Copy messages to send again if needed
- Clear history monthly to keep system clean

## Troubleshooting

### "Please fill in Location, Description, Date, and Engineer!"
- You're missing one of the required fields
- Location, Description, Date, and Engineer (dropdown) are required
- Time and Ticket # are optional
- Fill all required fields before clicking section button

### Issue not appearing in section?
- Expand the section by clicking its header
- Check if you clicked the right section button
- Issues appear in order they were added

### Message not showing in preview?
- Add at least one issue to at least one section
- Preview only appears when there are issues

### Dropdown empty - no engineers?
- This is your first time using the form
- Type engineer name and phone in the fields
- Select the engineer when adding issue
- Engineer will be saved for future use

### WhatsApp not opening?
- Make sure WhatsApp is installed or WhatsApp Web is open
- Try clicking button again
- Check that you have internet connection

## Data Storage

All data is saved in your browser's localStorage:
- `sentMessages` - Complete message history
- `engineerList` - Engineer contacts used

Data persists even if you close the browser, but is cleared if you clear browser cache.

## Next Steps

The system is designed to match your exact WhatsApp group structure. As you use it:
- It will learn the engineers you use most
- You'll develop your own workflow
- The message format stays consistent
- Your team sees professional, organized reports every time

**Built to make your daily reporting easier. One batch at a time.**
