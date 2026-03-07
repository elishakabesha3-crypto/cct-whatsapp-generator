/**
 * Issue type definition for batch messages
 */
export interface BatchIssue {
  id: string;
  location: string;
  description: string;
  time: string;
  date: string;
  engineer: string;
  phone: string;
  ticketNumber?: string;
}

/**
 * Section definition for grouping issues
 */
export interface MessageSection {
  name: string;
  issues: BatchIssue[];
}

/**
 * Formats a batch message with multiple sections and issues
 * Format: Each section has a header, then numbered issues with specific layout
 * (01) Location - Description @ time date Engineer +Phone
 * Ticket #: (if provided)
 */
export function formatBatchMessage(sections: MessageSection[]): string {
  let message = "";

  sections.forEach((section) => {
    // Add section header (uppercase, bold-like in plain text)
    message += `\n${section.name}\n`;

    // Add each issue with numbering
    section.issues.forEach((issue, index) => {
      const issueNumber = String(index + 1).padStart(2, "0");
      const timeStr = issue.time ? `@ ${issue.time} ` : "@ ";
      const engineerInfo = issue.engineer
        ? `${issue.engineer} ${issue.phone ? "+" + issue.phone : ""}`
        : "Engineer Not Assigned";

      message += `\n(${issueNumber}) ${issue.location} - ${issue.description} ${timeStr}${issue.date} ${engineerInfo}`;

      if (issue.ticketNumber) {
        message += `\nTicket #: ${issue.ticketNumber}`;
      }
    });

    message += "\n";
  });

  return message.trim();
}

/**
 * Formats a simple custom message with signature
 */
export function formatMessage(messageContent: string): string {
  const greeting = "🔔 ALERT";
  const signature = "\n\n---\nCall Center Team (CCT)";

  return `${greeting}\n\n${messageContent}${signature}`;
}

/**
 * Generates an ATM Report message (legacy support)
 */
export function generateATMMessage(
  atm: string,
  location: string,
  time: string,
  assignedTo: string
): string {
  const content = `⚠️ ATM DOWN - URGENT\n\nATM: ${atm}\nLocation: ${location}\nReported At: ${time}\nAssigned Engineer: ${assignedTo}`;
  return formatMessage(content);
}

/**
 * Generates an IT Issue Report message (legacy support)
 */
export function generateITMessage(
  issue: string,
  assignedTo: string
): string {
  const content = `🖥️ IT ISSUE REPORT\n\nIssue: ${issue}\nAssigned Engineer: ${assignedTo}`;
  return formatMessage(content);
}

/**
 * Generates a First Line Call message (legacy support)
 */
export function generateFirstLineCallMessage(
  callerContact: string,
  issueType: string,
  assignedTo: string
): string {
  const content = `📞 FIRST LINE CALL ALERT\n\nCaller Contact: ${callerContact}\nIssue Type: ${issueType}\nAssigned To: ${assignedTo}`;
  return formatMessage(content);
}
