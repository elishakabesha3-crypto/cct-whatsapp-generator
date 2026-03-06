/**
 * Formats a message with professional greeting and team signature
 * @param messageContent - The main content of the message
 * @returns Formatted message with greeting and signature
 */
export function formatMessage(messageContent: string): string {
  const greeting = "🔔 ALERT";
  const signature = "\n\n---\nCall Center Team (CCT)\nAutomated Message Generator";
  
  return `${greeting}\n\n${messageContent}${signature}`;
}

/**
 * Generates an ATM Report message
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
 * Generates an IT Issue Report message
 */
export function generateITMessage(
  issue: string,
  assignedTo: string
): string {
  const content = `🖥️ IT ISSUE REPORT\n\nIssue: ${issue}\nAssigned Engineer: ${assignedTo}`;
  return formatMessage(content);
}

/**
 * Generates a First Line Call message
 */
export function generateFirstLineCallMessage(
  callerContact: string,
  issueType: string,
  assignedTo: string
): string {
  const content = `📞 FIRST LINE CALL ALERT\n\nCaller Contact: ${callerContact}\nIssue Type: ${issueType}\nAssigned To: ${assignedTo}`;
  return formatMessage(content);
}
