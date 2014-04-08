#### Include an inline screenshot of your codeschool's points from the profile page:
![Code School Awards](http://jeffkynaston.com/images/codeschool-awards.png "Code School Awards")
<!-- Modify the Markdown to include your answers. Don't delete the questions! -->

##QUIZ
* Explain which tabs support the following actions and how.
  * Realtime editing of HTML and CSS

  Both the Elements tab and the Sources tab support realtime editing of HTML and CSS. The Sources tab gives you access to any of the page's files with an editor-style UI, allowing you to make changes directly to HTML or CSS documents. The Elements tab provides a more useful UI, showing the HTML DOM and CSS side by side. When a DOM element is selected, the CSS pane will show rules from multiple files and allow you to change any of them or add your own. It also includes useful features like the ability to freeze an element in its `:hover` state. 

  * Javascript Debugging

  JavaScript debugging is supported in the Network Tab, Sources Tab, Timeline Tab, Profiles Tab, & Console Tab. 

  -Using the Network tab, you can see what JavaScript files are loaded and how large each file was. 


  -Using the Sources tab, you can access JavaScript files and edit them directly. In this tab, you can select to pause on exceptions, set stops in the .js file, or add additional code to help with the debugging process. 


  -The Timeline tab gives you real-time information about frame rates and memory allocations, so you can identify which parts of your JavaScript code are slowing down your application. 

  -The Profiles tab can be used for similiar analysis, allowing you to take Heap Snapshots and collect JavaScript CPU profiles that provide more detailed information on memory distribution and processing time. 

  -Finally, the Console (which is available both under it's own tab, and as a separate pane under most other tabs) allows you manually test JavaScript methods and run any other code that might be helpful in the debuggin process.

  * Performance Optimization 

  -Performance optimization is supported predominantly in the networking tab. This tab contains information on every file that was downloaded to make up your webpage, including file size, request method, file type, initiator, download time and latency. Downloading the PageSpeed app for dev tools provides another valuable tool (and tab) for performance optimization. It will scan your web page and make suggestions as to how you can improve speed and performance. 

  -The Profiles and Timeline Tabs mentioned above (in the JavaScript debugging section) also contain important tools for understanding and optimizing your web applications performance. Because the size and complexity of scripts can cause performance issues, I anticipate that the JavaScript debugging process often starts with using performance optimization tools to help identify where things are going wrong. 

* What's the quick key for your OS to spawn the Dev Tools inspector?

Ctrl+Shift+I

* Go to http://www.postmachina.com/ and analyze and tweak this nicely designed page.
  * What is the current background color for the page?  (Surprisingly, it's not just black!)

  -It's not black, but it's pretty close ... the hex value is #0b0f11. 

  * Tweak the background color to white.
  * Tweak the height of the side bar that contains the logo.  Shrink it down to 85px.
  * Roll over the navigation links.  When you hover over them, they dissapear.  Let's change the hover color to black instead.
  * Now take a screenshot of your new (and maybe not so improved) design.  It should match this screenshot: http://postimg.org/image/5ak1jkpl5/
  * Upload your own image to the web using an image hosting service.  It should match the image above. The last nav link in the image above is black because the mouse was hovering there when the screenshot was taken. Do the same, and don't take a screenshot of your whole desktop, just the browser window. (This is part of the challenge.)

  ![Postmachina Changes](http://jeffkynaston.com/images/postmachina.png "Postmachina Changes")

* For the postmachina website, why can't you tweak the color of the text "The most important things are not things"?  Please explain.

-This text is actually part of an image, http://www.postmachina.com/images/home_bg.gif

* Go to www.ticketswizard.com and analyze the page.  
  * What is the largest image on the website? 
  * Explain how you would find out this information, and list the URL of offending image here and how big it is.

-The largest image on this website is http://www.ticketswizard.com/Images/Catalog/92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png, it's 316kb. To find this information, I used the Network tab. Upon loading the site, the Network tab gives you a list of all the files that were requested. From there, I filtered the list of files by size and this .png popped right to the top. 


* Test the www.ticketswizard.com website with google's [PageSpeed Insights](http://www.ticketswizard.com/).  (You can also download the chrome plugin).  What is the lowest hanging fruit to optimize the website?  How many kilobytes of data can be eliminated?

-The lowest hanging fruit is image optimization. By optimizing the images on their page, ticketswizard.com could reduce the total size by 885.9kb. Compared to the small gains they could achieve thorugh minifying files (1-3kb per file), image optimization would have a much more significant effect. 