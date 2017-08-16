# Smart Contract for buying/trading Storage
---
### Summary
We need a smart contract that takes ETH in exchange for bytes, a type of token which directly corrosponds to how much space the user owns.

### Basic Actions
**Querying**
- The ability to at any time query the amount of bytes for the given the address
- The current value of a byte

**Exchange**
- Send bytes from one address to another

**Minting**
- Create new bytes to add into circulation
    - Used in the case of hosted storage expansion

**Burning**
- Removes bytes from circulation
    - Used only in the case of storage reduction/removal

---
### The Process
**New User**
User creates a new account using their address and other personal information and is given `awardValue` in bytes to use as a thank you for joining (`awardValue` is a value in ETH that the user should receive in bytes). The user may at this time also choose to immediately expand their storage so they purchase additional bytes at the current `exchangeRate`.
**Purchasing**
_The naive approach_: (more approaches to come?)
Retrieve the current `exchangeRate` which would be used for a basic conversion to ETH and tell them how much ETH they would need to send to our address for the bytes specified (how to authorize payments through contract?). The user pays and the bytes are added to their account.
Convenience is key, but security is priority.
**Adding Data**
As the user begins adding data, they provide authentication for each transaction which, if the user has enough bytes left, removes the number of bytes corrosponding to the size of the file being stored. If the user runs out of bytes we let them know.
**Gas**
Each transaction will use gas, need to look into.
