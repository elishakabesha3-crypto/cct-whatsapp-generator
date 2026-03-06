# Example Messages - CCT Batch System

This document shows real examples of messages your team can generate using the batch system.

## Example 1: End-of-Day Summary (All Categories)

### What You Would Enter

**Issue 1:**
- Location: ATM 98 Mumbwa
- Description: Panic button not working
- Time: 12:18
- Date: 27-06-25
- Engineer: Ireen
- Phone: 0714556086
- Section: PHYSICAL SECURITY

**Issue 2:**
- Location: ATM 45 Chingola
- Description: Alarm system failing to arm
- Time: 18:51
- Date: 25-02-26
- Engineer: Joseph
- Phone: 260974556086
- Section: PHYSICAL SECURITY

**Issue 3:**
- Location: KCS Lobby
- Description: Leaking, needs urgent attention
- Time: 09:50
- Date: 16-12-25
- Engineer: Kapemba
- Phone: 260974556086
- Ticket: INC1095183O
- Section: CRES ISSUES

**Issue 4:**
- Location: ATM 142 Ndola
- Description: Journal Printer fatal
- Time: 19:49
- Date: 02-02-26
- Engineer: Noris
- Phone: 260974825290
- Section: IT ISSUES

### Generated Message

```
PHYSICAL SECURITY

(01) ATM 98 Mumbwa - Panic button not working @ 12:18 27-06-25 Ireen +0714556086
(02) ATM 45 Chingola - Alarm system failing to arm @ 18:51 25-02-26 Joseph +260974556086

CRES ISSUES

(01) KCS Lobby - Leaking, needs urgent attention @ 09:50 16-12-25 Kapemba +260974556086
Ticket #: INC1095183O

IT ISSUES

(01) ATM 142 Ndola - Journal Printer fatal @ 19:49 02-02-26 Noris +260974825290
```

## Example 2: Secondline Maintenance Focus

### What You Would Enter

**Issue 1:**
- Location: ATM 98 Kitwe
- Description: Will require a cash replenishment
- Time: 17:12
- Date: 01-03-25
- Engineer: Custodians notified
- Phone: 
- Section: SECONDLINE MAINTENANCE

**Issue 2:**
- Location: ATM 28 Mkushi
- Description: Offline due to power outage
- Time: 17:30
- Date: 01-03-25
- Engineer: Tech team
- Phone: 
- Section: SECONDLINE MAINTENANCE

**Issue 3:**
- Location: ATM 81 Foxdale
- Description: Dispenser fatal
- Time: 17:37
- Date: 01-03-25
- Engineer: Kapemba
- Phone: 260974556086
- Ticket: INC1051756
- Section: SECONDLINE MAINTENANCE

### Generated Message

```
SECONDLINE MAINTENANCE

(01) ATM 98 Kitwe - Will require a cash replenishment @ 17:12 01-03-25 Custodians notified
(02) ATM 28 Mkushi - Offline due to power outage @ 17:30 01-03-25 Tech team
(03) ATM 81 Foxdale - Dispenser fatal @ 17:37 01-03-25 Kapemba +260974556086
Ticket #: INC1051756
```

## Example 3: Mixed Issues with Ticket Tracking

### What You Would Enter

**Multiple issues across different categories with proper tracking:**

- ATM 44 Choma - GBNA cassettes required @ 15:02 | Engineer: Jose | SECONDLINE
- ATM 10 Industrial - GBNA malfunction (IT APPLICATIONS) @ 14:45 | Engineer: Tech | IT ISSUES
- ATM 56 Linda Oryx - GBNA cassettes required @ 16:20 | Ticket: INC1051756 | SECONDLINE
- ATM 02 Livingstone - GBNA service unavailable error (IT APPLICATIONS) @ 16:15 | SECONDLINE
- ATM 47 Chalala Mall - Pending GBNA pre acceptor @ 14:00 | Engineer: PreSupport | NECOR CALLS
- ATM 95 Cosmopolitan - GBNA Pending boards replacement @ 15:30 | Engineer: Hardware | NECOR CALLS
- ATM 16 Waterfalls - GBNA error @ 15:45 | Engineer: Support | NECOR CALLS
- ATM 85 Lusaka Main - GBNA pre acceptor problem @ 17:00 | NECOR CALLS
- ATM 100 KK - GBNA failing to clear @ 17:30 | Engineer: Clearing | NECOR CALLS

### Generated Message

```
SECONDLINE MAINTENANCE

(01) ATM 44 Choma - GBNA cassettes required @ 15:02 15-02-26 Jose
(02) ATM 56 Linda Oryx - GBNA cassettes required @ 16:20 15-02-26
Ticket #: INC1051756
(03) ATM 02 Livingstone - GBNA service unavailable error (IT APPLICATIONS) @ 16:15 15-02-26

IT ISSUES

(01) ATM 10 Industrial - GBNA malfunction (IT APPLICATIONS) @ 14:45 15-02-26 Tech

NECOR CALLS

(01) ATM 47 Chalala Mall - Pending GBNA pre acceptor @ 14:00 15-02-26 PreSupport
(02) ATM 95 Cosmopolitan - GBNA Pending boards replacement @ 15:30 15-02-26 Hardware
(03) ATM 16 Waterfalls - GBNA error @ 15:45 15-02-26 Support
(04) ATM 85 Lusaka Main - GBNA pre acceptor problem @ 17:00 15-02-26
(05) ATM 100 KK - GBNA failing to clear @ 17:30 15-02-26 Clearing
```

## Example 4: Critical Incident Reporting

### Generated Message

```
POWER OUTAGE

(01) Branch 5143 Oryx - Complete power loss @ 12:30 25-02-26 Electrician +260974556086
Ticket #: CRITICAL001

(02) Branch 5104 Z-Mart - CCTV down, no backup power @ 12:45 25-02-26 Security Manager +260974556086
Ticket #: CRITICAL002

PHYSICAL SECURITY

(01) Branch 5148 Parklands - Dispenser failing to run @ 15:04 25-02-26 Songiso +0974918988
Ticket #: INC1095756

IT ISSUES

(01) ATM 07 & 10 Ndola - No cash No device, daily service @ 08:04 27-02-26 Isaac +260974556086
Ticket #: PENDING001

(02) ATM 11 Solwezi - Software crashed @ 13:25 01-03-26 Abraham +260974556086
Ticket #: SW001
```

## Example 5: Quick Status Update

This is what you'd send using the "Quick Message" tab for urgent, single issues:

```
🔔 ALERT

ATM 45 Chingola has cash dispenser fatal. Engineer Joseph assigned +260974556086. Ticket #: INC1051756

---
Call Center Team (CCT)
```

## Tips for Your Messages

### Use These Exact Sections
Based on your WhatsApp group structure:
1. **SECONDLINE MAINTENANCE** - ATM hardware, cash issues, mechanical problems
2. **PHYSICAL SECURITY** - Lock, alarm, security camera issues
3. **CRES ISSUES** - Building infrastructure (leaks, power, HVAC)
4. **IT ISSUES** - Software, connectivity, application problems
5. **NECOR CALLS** - Banking network/clearing related issues
6. **POWER OUTAGE** - Power supply failures
7. **CASHOUT** - Cash management and replacement
8. **BUSY WITH REVERSAL** - Transaction reversal activities
9. **OTHER** - Miscellaneous issues

### Location Naming Conventions
- Always include ATM number or branch name
- Be consistent: "ATM 98 Mumbwa" not "ATM 98 MUMBWA" or "98 Mumbwa"
- Use proper spelling of branch names

### Engineer Information
- Include full phone numbers with +260 country code
- Example: +0714556086 (not 0714556086 or 714556086)
- If engineer not yet assigned, leave blank - system handles this

### Time Format
- Use 24-hour format: 14:30 (not 2:30 PM)
- Include minutes even for on-the-hour times: 12:00 (not 12)

### Date Format
- Always use DD-MM-YY
- Examples: 25-02-26, 01-03-25, 16-12-25
- Consistent format helps with record keeping

### Ticket Numbers
- Include Ticket # line only if you have one
- Format: Ticket #: INC1095183O (use exact format from your system)
- Optional field - don't include if you don't have ticket number

## Real-World Workflow

### Scenario: You're on duty from 8 AM to 4 PM

**8:15 AM**: First issue comes in
- Add ATM 98 Mumbwa - Cash needed
- Add to SECONDLINE MAINTENANCE

**9:30 AM**: Security alert
- Add ATM 45 Chingola - Alarm failing
- Add to PHYSICAL SECURITY

**10:45 AM**: IT issue
- Add ATM 142 Ndola - Journal printer fatal
- Add to IT ISSUES

**12:00 PM**: Power outage reported
- Add Branch 5143 - Power loss
- Add to POWER OUTAGE

**2:30 PM**: Building issue
- Add KCS Lobby - Leaking
- Add to CRES ISSUES

**3:45 PM**: End of shift summary
- Review all issues in Daily Report tab
- Check preview showing all 5 issues organized by category
- Click "Send to WhatsApp"
- Select your group and send
- ALL ISSUES sent in ONE professional message

**Next shift**: Click "Clear All" to start fresh for your successor

## Benefits of This Format

1. **Complete Information** - One message with all details, no scattered info
2. **Easy to Reference** - Team can see all issues for the day at once
3. **Professional Appearance** - Organized, numbered, properly formatted
4. **Ticket Tracking** - Easy to include ticket numbers for follow-up
5. **No Repetition** - Each issue mentioned once, clearly
6. **Proper Attribution** - Engineer names and phones visible for each issue
7. **Searchable** - History tab keeps records for auditing

---

**Your team can generate messages exactly like these examples using the Daily Report tab.**
