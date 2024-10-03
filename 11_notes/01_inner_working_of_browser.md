# How does browser work?

- browser is now like a OS -> has its own timer, data & memory, network, ui and its engine
- browser needs its network capabilities to be massively great.

<img src="https://github.com/user-attachments/assets/66083111-eb60-449d-8cfd-b4b2960de922" width="400"/>
<img src="https://github.com/user-attachments/assets/b7e5eda7-8933-4413-b268-7197b8333ea4" width="400"/>

## HTML (DOM)
- Rendering Engine (written in c++) -> converts the p tags etc. to nodelist
- Browser need is:
  - display the data
  - interact with it
- What browser does?
  - loads file
  - converts it to raw bytes -> *Document*
  - character -> token (tokenization) : h1, p, html, head, body
  - big **Object** is made out of tokens  {tag : h1, title: something, data/value: youtube} {tag : p} {tag: body}
  - converted to objects -> *Object*
  - converting these random object into a structure -> *Model*
  - make **relation** out of this random objects
  - convert it into nodes/ **nodelist**
  - now we have a **DOM**
--> till now is still in rendering (not the display part)

## CSS
- raw data -> character -> tokenization -> Objects made -> Relations -> Model
- CSSOM

Note: DOM & CSSOM are made simultaneously & independently , for now they don't have any relation b/w them 

## Render Tree
- DOM, CSSOM -> Browser Engine (Maths)
- Painting/ display starts -> shows data on browser
- script tag -> whenever browser encounters script tag it stops rendering DOM & CSSOM as js manipulates both so there's no need to render it.
- what happens if our CSSOM is not yet ready and we encounters js tag?
  - JS execution will be halted until CSSOm is ready. (this is changing)
- JS > DOM and CSSOM > JS
- defer the JS
