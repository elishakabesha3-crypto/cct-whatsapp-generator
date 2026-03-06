# CCT Message Generator - Interface Guide

## Dashboard Layout Overview

The new interface features a modern, professional tech-style design with smooth animations and intuitive navigation.

## Header Section

```
═══════════════════════════════════════════════════════════════════════════════
                   CCT Daily Issues Report                      [🟢 Live]
                   Organize and send structured issue reports to WhatsApp

    [📋 Daily Report]  [⚡ Quick Message]  [📜 History]
═══════════════════════════════════════════════════════════════════════════════
```

### Header Features
- **Title**: Gradient blue text with professional sizing
- **Subtitle**: Descriptive text explaining purpose
- **Navigation Tabs**: Three main sections with icons
  - 📋 Daily Report (default, batch messages)
  - ⚡ Quick Message (single custom messages)
  - 📜 History (view sent messages)
- **Live Indicator**: Green pulsing dot showing system active status

---

## Daily Report Tab (Batch Form)

### Layout: 3-Column Grid

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              STATISTICS BAR                                  │
│  [20 total issues]  |  [5 sections active]         [Clear All] Button      │
└─────────────────────────────────────────────────────────────────────────────┘

┌──────────────────────┬──────────────────────┬──────────────────────┐
│                      │                      │                      │
│  ADD ISSUE FORM      │  ISSUES LIST         │  MESSAGE PREVIEW     │
│                      │                      │                      │
│ [Section Dropdown]   │ ▼ SECONDLINE (3)     │ SECONDLINE           │
│ [Location Input]     │   (01) ATM 98...  ✕  │ MAINTENANCE          │
│ [Description]       │   (02) ATM 28...  ✕  │                      │
│ [Time Input]        │                      │ (01) ATM 98 - ...    │
│ [Date Input]        │ ▶ PHYSICAL SEC (0)   │ (02) ATM 28 - ...    │
│ [Engineer Select]   │                      │ (03) ATM 45 - ...    │
│ [Phone Input]       │ ▶ IT ISSUES (2)      │                      │
│ [Ticket #]          │                      │ IT ISSUES            │
│                      │ ▶ OTHER (1)          │                      │
│ [Add Issue Button]   │                      │ (01) ATM 142 - ...   │
│                      │                      │                      │
└──────────────────────┴──────────────────────┤ [Save Message]       │
                                              │ [Send to WhatsApp]   │
                                              └──────────────────────┘
```

### Left Column: Add Issue Form
**Section Selection**
- Dropdown showing all 9 categories
- SECONDLINE MAINTENANCE (default)
- PHYSICAL SECURITY
- CRES ISSUES
- IT ISSUES
- NECOR CALLS
- POWER OUTAGE
- CASHOUT
- BUSY WITH REVERSAL
- OTHER

**Input Fields**
- Location (e.g., "ATM 98 Mumbwa")
- Description (multi-line issue details)
- Time (HH:MM format)
- Date (DD-MM-YY format)
- Engineer (dropdown with saved engineers)
- Phone (+260...)
- Ticket # (optional)

**Add Issue Button**
- Blue gradient button
- Click to add issue to selected section
- Resets form after adding
- Shows confirmation in issues list

### Middle Column: Issues List
**Section Headers**
- Section name with issue count badge
- Click to expand/collapse
- Shows colored badge with count
- Smooth rotation animation on expand

**Issue Items** (when expanded)
- Numbered display: `(01) Location - Description`
- Engineer name and date
- Delete button (✕) appears on hover
- Hover animation for selection
- Easy removal with single click

**Features**
- Max height with internal scroll
- Organized by section
- Easy to review before sending
- Quick removal of mistakes

### Right Column: Message Preview
**Preview Display**
- Shows exact WhatsApp format
- Professional monospace font
- Scrollable if message is long
- Updates in real-time as you add issues
- Shows only sections with issues

**Action Buttons**
- **Save Message**: Stores in history
- **Send to WhatsApp**: Opens WhatsApp pre-filled
- Only appear when message has content
- Gradient styling (blue, then emerald)
- Smooth hover effects

**Empty State**
- "Add issues to see preview" message
- Helpful prompt for first-time users
- Centered, readable text

---

## Quick Message Tab (Manual Form)

### Layout: 2-Column Grid

```
┌──────────────────────────────────┬──────────────────────────────────┐
│                                  │                                  │
│  QUICK MESSAGE INPUT             │  MESSAGE PREVIEW                 │
│                                  │                                  │
│  [Message textarea               │  ALERT                          │
│   with placeholder]              │                                  │
│                                  │  [Your message text here]        │
│  💡 Message will be formatted    │                                  │
│  with professional signature     │  ---                            │
│                                  │  Call Center Team (CCT)          │
│                                  │                                  │
│                                  │ [Save Message Button]            │
│                                  │ [Send to WhatsApp Button]        │
│                                  │                                  │
└──────────────────────────────────┴──────────────────────────────────┘
```

### Left Column: Message Input
**Textarea**
- Large input area (h-48)
- Placeholder: "Type your message here..."
- Monospace font for clarity
- Dark theme with blue focus state
- Smooth transitions

**Helpful Hint**
- 💡 Icon with information
- "Message will be formatted with professional signature"
- Explains automatic formatting

### Right Column: Live Preview
**Preview Box**
- Shows exact message format
- Includes professional signature
- Monospace font matching WhatsApp
- Scrollable if long message
- Dark background for contrast

**Action Buttons**
- **Save Message**: Adds to history
- **Send to WhatsApp**: Opens WhatsApp with message
- Both gradient styled
- Only appear when message exists

**Empty State**
- "Start typing to see preview"
- Centered text
- Large empty space for visual balance

---

## History Tab

### Layout: Single Column

```
┌─────────────────────────────────────────────────────────────────────┐
│  [5 messages]  |  [Clear History Button]                            │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│ #5 - 03/06/26          [Copy Button]                                │
│ ┌─────────────────────────────────────────────────────────────────┐ │
│ │ SECONDLINE MAINTENANCE                                          │ │
│ │ (01) ATM 98 Mumbwa - Panic button not working @ 12:18 28-02-26 │ │
│ │ Ireen +0714556086                                               │ │
│ └─────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│ #4 - 03/06/26          [Copy Button]                                │
│ ┌─────────────────────────────────────────────────────────────────┐ │
│ │ ALERT                                                           │ │
│ │ Quick test message                                              │ │
│ │ ---                                                             │ │
│ │ Call Center Team (CCT)                                          │ │
│ └─────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘

[Scrollable area with more messages...]
```

### Header Statistics
- Message count badge: `[5 messages]`
- Clear History button: Red-tinted, destructive styling
- Only shows if messages exist

### Message Cards
**Card Layout**
- Message number and date
- Copy button (appears on hover)
- Message content in scrollable box
- Dark background for readability

**Message Content**
- Full message text
- Monospace font
- Wrapped text with proper spacing
- Scrollable if long

**Features**
- Click copy to clipboard
- Quick visual reference
- Easy bulk viewing
- Safe clear option

### Empty State
- 📭 Icon
- "No messages yet"
- Helpful guidance text
- Encourages first message

---

## Color Coding Guide

### UI Elements
- **Blue Gradients**: Primary actions, navigation
- **Emerald Gradients**: Success, send actions
- **Red Tints**: Destructive actions (delete, clear)
- **Gray/Slate**: Secondary elements, disabled states

### Text Colors
- **White**: Primary text, high importance
- **Light Gray**: Secondary text, labels
- **Dark Gray**: Muted text, timestamps
- **Colored Text**: Badges and status indicators

### Background
- **Dark Slate**: Main background (#0f0f12)
- **Lighter Slate**: Cards (#1a1a1f)
- **Hover State**: Slightly lighter (#2d2d35)

---

## Interactive Elements

### Buttons
All buttons feature:
- Gradient backgrounds
- Smooth color transitions
- Shadow effects on hover
- Scale effect on click (95%)
- Readable white text

### Hover Effects
- Card background lifts slightly
- Delete buttons appear in lists
- Shadow expands
- Color deepens
- 300ms smooth animation

### Focus States
- Blue ring effect
- Border color change
- Used for keyboard navigation
- Clear visual indicator

---

## Responsive Design

### Desktop (Full 3-Column)
```
[Header spanning full width]
[Input Form] | [Issues List] | [Preview]
```

### Tablet (2-Column Stack)
```
[Header spanning full width]
[Input Form & Issues List]
[Preview below]
```

### Mobile (Full Width Stack)
```
[Header spanning full width]
[Input Form]
[Issues List]
[Preview]
[All stacked vertically]
```

---

## Animation Examples

### Page Load
1. Header fades in (500ms)
2. Content slides in from right (400ms)
3. Background orbs animate continuously

### Button Interaction
1. Hover: Shadow grows, color deepens (300ms)
2. Click: Scale to 95%, shadow contracts (100ms)
3. Release: Return to normal (200ms)

### Section Toggle
1. Click section header
2. Arrow rotates 180° (300ms)
3. Content slides down (400ms)
4. Issues appear with smooth transitions

### Tab Switch
1. Click tab
2. Current tab highlights (300ms)
3. Content fades out (200ms)
4. New content fades in (300ms)

---

## Accessibility Features

### Keyboard Navigation
- Tab: Move between elements
- Enter: Activate buttons, submit forms
- Space: Toggle checkboxes/buttons
- Arrow: Navigate lists

### Screen Reader Support
- Semantic HTML elements
- ARIA labels where needed
- Clear heading structure
- Form field labels

### Visual Accessibility
- High contrast text (WCAG AA+)
- Clear focus indicators
- Color not only distinguishing feature
- Readable font sizes

### Motion Accessibility
- All animations smooth (60fps)
- No motion sickness triggers
- Respects motion preferences
- Can pause/resume

---

## Getting Started

1. **Navigate to /dashboard**
   - Header loads with smooth animation
   - Default "Daily Report" tab is active
   - Input form ready for use

2. **Start with Daily Report**
   - Select section from dropdown
   - Fill in issue details
   - Click "Add Issue"
   - Watch preview update

3. **Send when ready**
   - Review preview
   - Click "Send to WhatsApp"
   - Confirm in WhatsApp

4. **Check History anytime**
   - Click History tab
   - View all sent messages
   - Copy any message if needed

---

## Keyboard Shortcuts (Future)

- `Ctrl+S` - Save current message
- `Ctrl+Enter` - Send to WhatsApp
- `Ctrl+K` - Focus search (future)
- `Escape` - Close modals (future)

---

**Professional interface designed for efficiency and ease of use.**
