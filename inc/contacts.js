// ========================= D-Crypt Contacts List =========================
//
// Format: CONTACT_NAME PUBLIC_KEY
//
// Each contact must be written on a new line. Name and public key separated by a space.
// Example:
//   Alice 123abcPUBLICKEYEXAMPLE
//   Bob anotherPUBLICKEYEXAMPLE
//
// CONTACT_NAME rules:
//   - Use only letters, numbers, or underscores (_)
//   - NO SPACES are allowed in names
//   - Example of valid names: JohnDoe, My_Friend, Contact1
//
// The first two lines below are reserved:
//   - Global → shared encryption key for everyone using D-Crypt
//   - Myself → your own public key (used to encrypt things for yourself)
//
// To add more contacts:
//   1. Copy a new line below "Myself".
//   2. Replace CONTACT_NAME with their name.
//   3. Replace PUBLIC_KEY with their real public key.
//   4. Save the file.
//
// Do not remove the final backtick (`) or semicolon (;) below!
// They are required for D-Crypt to read this file correctly.
//
// ========================================================================

const contactsData = `
Global PZ_-W-Kb2neUuzqQAMxyWuIORdJ28gjriOk5azgWj1A
Myself PASTE_YOUR_PUBLIC_KEY_HERE

`;