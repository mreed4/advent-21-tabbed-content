At a glance, this seemed like a relatively difficult challenge. Click on a link, content elsewhere in the page updates accordingly. In the past I might have immediately reached for React, because it's what I'm most familiar with, and because it's what I've used to solve similar problems in the past. But I wanted to try something different. I wanted to try to solve this problem with vanilla JavaScript.

Luckily the code provided by the challenge provided some clues on how the functionality could work. In part the functionality works by applying a `selected` class to the content currently visible in the `main` element. If you can change the class, and thus the content of `main` accordingly, you could achieve the desired functionality. Really this reminds me of a very rudimentary implementation of React Router and Components.

FOr fun I added keyboard navigation such that the list of episodes can be scrolled through with the up and down arrow keys.
