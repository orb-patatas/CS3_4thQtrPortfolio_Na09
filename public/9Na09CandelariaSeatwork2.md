# Seatwork #2 - Getting to know CSS Position and z-index.
### This seatwork will ask you to implement the different CSS position on a given code.
### short link to this .md file is: https://bit.ly/4c61P9K
#### Resources (also found in Khub week 5)
- [4 Minute Youtube Video on CSS Position](https://www.youtube.com/watch?v=YEmdHbQBCSQ)
- [CSS Position Tutorial](https://roycan.github.io/CssPositioningZIndexLab/)

### Instructions: 
1. This is individual submission in khub, but you can work with a partner.  When you submit in khub please place both your names in the submission bin.
2. Guided Activity (30 minutes), please follow what is being required.  

    - Make a copy of this .md file to your Q4 repository and name it as **SectionLNseatwork2.md** example **9LiCruzSeatwork2.md**. Place it in your q4 repository vscode local computer. Committing frequently to your Github repository.  
    - Copy the code below and paste it inside a new file (name it as SectionLNseatwork2.html). Place this file in the same location where the .md file is saved. 
    - Change the content values of the meta tags to your names for author/s and the date today for revised.
    - Please do the following tasks that will ask you to reposition HTML elements then answer the guided question for each task on the .md file. Commit changes to the .md file and to the .html file as well.
    **- This seatwork is worth 20pts and should be submitted by the end of the period** The link to [KHub submission bin](https://khub.mc.pshs.edu.ph/mod/assign/view.php?id=15481).
      - Submit the links to your .md file and .html file.

```html
<!DOCTYPE html>
<html>
<head>
  <meta name="author" content="<your names>" />
  <meta name="revised" content="<date today>" />
  <style>
    body { font-family: Arial, sans-serif; }
    .header, .footer {
      background: lightblue;
      padding: 10px;
    }
    .footer {
       opacity: 0.5;
    }
    .sidebar {
      background: lightgreen;
      width: 150px;
      height: 200px;
    }
    .content {
      background: lightyellow;
      width: 300px;
      height: 200px;
    }    
  </style>
</head>
<body>
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Main Content</div>
  <div class="footer">Footer</div>
</body>
</html>
```
### Step 1 (Static vs Relative):

- Add in css ```position: relative; top: 20px; left: 20px;``` to .sidebar.

- Guided Question: What changed compared to the default static positioning? Try to give different values to top and left or you can change it to bottom, right.

    - The "sidebar" box moved 20 pixels down and 20 pixels to the right

### Step 2 (Fixed):

- Add in css ```position: fixed; bottom: 0; width: 100%;``` to .footer.

- Guided Question: What happens when you scroll the page? Why does the footer behave differently from position relative?

    - The "footer" rectangle stays at the bottom of the browser window even if I scroll."position: fixed" removes the element from the normal document flow and positions it relative to the viewport rather than the original position.

### Step 3 (Absolute):

- Add in css ```position: absolute; top: 66px; left: 200px;``` to .content.

- Guided Question: What is the effect of position: absolute on an element? How is it different from fixed?

    - The "Main content" box moved to the right of the sidebar. "position:absolute" removes it from the normal document flow and other elements will move up to fill the gap. Fixed is always relative to the screen but Absolute is relative to its nearest positioned anccestor.

### Step 4 : (Absolute)

- Add in html ```<div class="notice">Notice!</div>``` and include the css below:

```css
.notice {
    position: absolute;
    top: 60px;
    left: 400px;
    background: orange;
    padding: 10px;
    z-index: 2;
}
```

- Give .content a z-index: 1.

- Guided Question: Why does the notice appear on top of the content? What happens if you swap the z‑index values?

    - The notice appears on top of the content because it has a higher z-index than content. If swapped, then content will be on top of notice.

- Challenge: 
    * What changes that you have to do on the code that will position .notice box on the top right corner of the .content box? Please write the code on paper as well (both html and css on the part of .notice and .content).
        - We put the ```<div class="notice">Notice!</div> ``` inside the ```<div class="content">Main Content</div>``` for the html part. For css, we make both position: absolute, but we make top: 0 and right: 0 for .notice.
    * Try to change the position of .content to relative then to fixed. What do you observed each time?
        - When set to fixed, the entire .content boz, along with the .notice inside it stays stuck to the screen even as I scrolled. When set to relative, it stays in teh normal page flow and the .notice still sticks to its top-right corner a
    * What do you observe on about the effect of z-index on .notice and .content boxes?
        - Higher z-index values move elements closer to the viewer on the z-axis, allowing them to stack on top of others.

3. Please answer the following reflection questions (15 minutes)

    a. Could you summarize the differences between the CSS position values (static, relative, absolute, fixed)? 
      - Static: The default; elements follow normal page flow. top/left properties do not work.
      - Relative: Positioned relative to its normal spot; leaves a gap where it used to be.
      - Absolute: Positioned relative to its nearest positioned parent; removed from normal flow.
      - Fixed: Positioned relative to the browser window; stays in place during scrolling.

    b. How does absolute positioning depend on its parent element?
      - An absolute element looks for a parent that has position: relative/ absolute/ fixed. If it finds one, it uses that parent's edges as its (0,0) coordinate.

    c. How do you differentiate sticky from fixed (you can research on sticky)?
      - Fixed always stays in the same spot on the screen from the start. On the other hand, sticky acts like static / relative until you scroll to a specific point, where it "sticks" and acts like fixed until it reaches the end of its parent container.

    d. If you were designing a webpage for a school event, how might you use positioning to highlight important information? Please give concrete examples.
      - Fixed: A "Register Now" button that stays at the bottom right of the screen so users can sign up at any time.
      - Absolute + z-index: A "Sold Out" or "New" placed on top when selling merch.
      - Sticky: A navigation bar with event dates that stays at the top of the screen as users scroll through the schedule.