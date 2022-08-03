# [STAR WARS QUIZ] (https://pegrume88.github.io/quiz/index.html)

Star Wars has been one of the most popular franchises since the late 70s, with Movies and TV Series regulary being released. I decided to create a quiz that will test the users knowledge to see if they know as much as they think they know.




## Goals

* Create fun interactive quiz that fans of Star Wars will enjoy playing.
* To make the quiz intuitive to use and provide satisfying feedback for the user.
* Design a quiz that is aesthetically pleasing.
* To make the quiz responsive.





------
![Responsive](/readMe-images/responsive.png)



------

# Features

## Home page

The page follows the asthetics of star wars with a background image of deep space. The Star Wars Quiz title with the symbol of the Jedi order. The Font used was Orbitron. I chose this font style because of its Sci-fi look. I then added glowing shadow effect to make it stand out.

Below the Star Wars Quiz heading we have the start button that will link you to the quiz page. I used the neon collor effect for this try and create the effect of a lightsaber glowing. this is in keep with the sci-fi/Star Wars theme of the quiz.

On loading of the page there will be star wars music playing in the background and the curser has been changed to a lightsaber, this curser was obtained from [curser-4u](https://www.cursors-4u.com/star_wars/).

![home page](/readMe-images/home.page.png)

## Question page

The question page follows the same aesthetics as the home page with the deep space background and the orbitron font.
there is a question counter and a point scorer above the question. Below the question are four options for answers.
the is a hover effect to indicate wich option your curser is over. Once you have chosen your answer it either glows green for correct or red for incorrect. The green and red glow were created to match the glow of a light saber. The green indicating the color of the jedi and red indicating the color of the dark side.

Once the answer has been clicked you will be moved on to a new randomly selected question and the question counter will increment by 1 and the score if correct will increment by 10.
![home page](/readMe-images/quiz-correct.png)

![correct answer](/readMe-images/Quiz-wrong.jpeg.png)
## End page

  Once you have completed all the questions you will be directed to the end page which will display your final score and give a link back to the home page.
  I kept a conisten style though out the pages to creat an aesthetic flow and to make the site cohesive.

 
![end page](/readMe-images/endpage.png)




## Future Features
* Options of different difficulties to choose from.
* A choice on if you want choose the light or the dark side quiz.
* An option to log and store high scores with a username.




  # Technologies Used
* [HTML5](https://html.spec.whatwg.org/) - provides the content and structure for the website.
* [CSS](https://www.w3.org/Style/CSS/Overview.en.html) - provides the styling.
* [Gitpod](https://www.gitpod.io/#get-started) - used to deploy the website.
* [Github](https://github.com/) - used to host and edit the website.


## Testing


### Browser Test
I have tested the site on Google Chrome, Firefox and Safari using [lambdatest](https://app.lambdatest.com/). Using lambdatest i can confirm my site works and function on all three browsers.

### lighthouse test
I have run my website through lighthouse scoring high in every area.

![lighthouse scores](/readMe-images/lighthouse-mobile.png)

### Site Validator

**HTML** 
* No errors returned when passing through the html [validator](https://validator.w3.org/)

**CSS**
* No errors returned when passing through [jigsaw](https://jigsaw.w3.org/css-validator/)

**JavaScript**
*  No errors found when passing through [jahint](https://jshint.com/https://jshint.com/)

Metrics
There are 8 functions in this file.

Function with the largest signature take 1 arguments, while the median is 0.5.

Largest function has 11 statements in it, while the median is 2.

The most complex function has a cyclomatic complexity value of 4 while the median is 1.


## Deployment

### **To deploy the project**
The site was deployed to GitHub pages. The steps to deploy a site are as follows:
  1. In the GitHub repository, navigate to the **Settings** tab.
  2. Once in Settings, navigate to the **Pages** tab on the left hand side.
  3. Under **Source**, select the branch to **master**, then click **save**.
  4. Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.



## Content

### Credits/Media
  
  * This quiz was inpsired by the love maths quiz.
  * question counter and score diplay influenced from these sources [BrianDesign](https://www.youtube.com/watch?v=f4fB9Xg2JEY&ab_channel=BrianDesign)
  * This tutorial helped me implement flex box in this webpage [Flexbox](https://www.youtube.com/watch?v=JJSoEo8JSnc&ab_channel=TraversyMedia)

  * I refered to web coding & develepment for dummies.
  * All Icons used were obtained from [font-awesome](https://fontawesome.com/)
  * The lightsaber curser was taken from [curser-4u](https://www.cursors-4u.com/star_wars/).
  * The main fonst style was taken from google [fonts](https://fonts.google.com/).
  * All pictures were obtained through google images.


## Bugs
The only bug seems to be the music playing on the home page when you load the site. I have trouble shooted this and seeked help from student support, who were unable to work out why it would only play if you would go to the home page via the final score page.
