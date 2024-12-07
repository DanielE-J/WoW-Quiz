# WOW Quiz

Welcome to my World of Warcraft Quiz!

(Developer: Daniel Elde-Johansson)

![Mockup image](assets/readme_images/Project2Mockup.jpg)

[Live webpage]()

## Table of Content
1. [Introduction](#Introduction) 
2. [Project Goals](#project-goals) 
    1. [User Goals](#user-goals) 
    2. [Site Owner Goals](#site-owner-goals)
3. [User Experience](#user-experience)
    1. [Target Audience](#target-audience)
    2. [User Requirements and Expectations](#user-requirements-and-expectations)
    3. [User Stories](#user-stories)
    4. [Site Owner Stories](#site-owner-stories)
4. [Design](#design)
    1. [Design Choices](#design-choices)
    2. [Fonts](#fonts)
    3. [Structure](#structure) 
    4. [Wireframes](#Wireframes)  
6. [Technologies](#Technologies)
    1. [Languages](#languages)
    2. [Frameworks & Tools](#frameworks-&-tools)
7. [Features](#features)
    1. [Start screen](#Start-screen)
    2. [Footer](#footer)
    3. [Quiz over screen](#quiz-over-screen)
8. [Testing](#validation)
    1. [HTML Validation](#HTML-validation)
    2. [CSS Validation](#CSS-validation)
    3. [JavaScript Validation](#javascript-validation)
    4. [Accessibility](#accessibility)
    5. [Performance](#performance)
    6. [Devices](#Devices)
    7. [Browser compatibility](#browser-compatability)
    8. [Testing user stories](#Testing-user-stories)
9. [Bugs](#Bugs)
10. [Deployment](#deployment) 
    1. [EmailJS API](#emailjs-api)   
11. [Credits](#Credits)
12. [Acknowledgements](#acknowledgements)

## Introduction

Welcome to my World of Warcraft Quiz, There is 15 questions to prove that you have knowledge about World of Warcraft.

## Project Goals

### User Goals

* Finding a  WoW quiz. 
* Having fun.
* Testing your knowledge.

### Site Owner Goals

* Creating a fun and knowledgeable game that users will want to improve on until learning it all. 
* The game should be fully responsive to be able to be played on different devices.

## User Experience

### Target Audience
- casual gamers
- people who like World of Warcraft
- people looking to test there knowledge

### User Requirements and Expectations

* A simple and easy system
* Links and functions that work as expected
* A simple way to contact the developer
* Easy, and fun to play


### User Stories
1. As a user, I want to test my general knowledge
2. As a user, I want feedback on my correct answers
3. As a user, I want to know what the score i got
4. As a user, I want confirmation that my feedback was sent
5. As a user, I want to give feedback and try get other questions in

### Site Owner Stories
7. As a site owner, I want users to be able to contact us and give sugestions to new questions
8. As a site owner, I want users to be able to find us on social media.

## Design

### Design Choices

The Game was design so the picture can show the user what type of quiz it is, and to test there knowledge.

### Fonts

Sans-serif Was used through the whole website to make everything look the same.

### Structure

The page is structured in a well know, recognizable, user friendly, and easy to learn way.

* Introduction so you know where u are.
* instructions so you know what to do.
* social links and feedback bottom left so you can find us.

### Wireframes

## Technologies Used

### Languages
- HTML
- CSS
- JavaScript

### Frameworks & Tools

* GitHub
* Gitpod
* Balsamiq
* Font Awesome
* Favicon<span>.</span>io
* Lighthouse
* W3C Markup validation service
* W3C Jigsaw CSS validation service 
* WAVE WebAIM web accessibility evaluation tool
* EmailJS

## Features
The site consists of two pages and seven features

### Start screen
- Provides an option to choose between three different game difficulties.
- User story covered: 

<details><summary>Start screen</summary>
<img src="assets/readme_images/startscreen.jpg">
</details>

### Footer
* Consists of a section providing social media links and a link to the contact form
* User story covered: 

<details><summary>Footer</summary>
<img src="assets/readme_images/footer.jpg">
</details>


### Quiz over screen
* Shows the score.
* Shows a restart button 
* User stories covered: 

<details><summary>Game Over Screen</summary>
<img src="assets/readme_images/endscreen.jpg">
</details>





## Deployment

* The site was deployed to GitHub pages. The steps to deploy are as follows: 
  1. In the GitHub repository, navigate to the Settings tab 
  2. From the menu on left select 'Pages'
  3. From the source section drop-down menu, select the Branch: main
  4. Click 'Save'
  5. A live link will be displayed in a green banner when published successfully. 

* You can clone the repository by following these steps:
    1. Go to the GitHub repository 
    2. Locate the Code button above the list of files and click it 
    3. Select if you prefere to clone using SSH, HTTPS, or Github CLI and click the copy button to copy the URL to your clipboard
    4. Open Git Bash
    5. Change the current working directory to the one where you want the cloned directory
    6. Type git clone and paste the URL from the clipboard ($ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY)
    7. Press Enter to create your local clone.

    ### EmailJS API
1. Create an account at emailjs.com
2. Add new email service, make note of the contact_service id
3. Add a new email template, make note of the contact_form id
4. Go the the integration dashboard, make note of your user id
5. Load the EmailJS SDK in the head of your HTML file
6. In JavaScript create a function that listens to a submit event and then initializes the SDK with your user id (emailjs.init('YOUR_USER_ID');) and submits the form (emailjs.sendForm('contact_service', 'contact_form', this);)

## Acknowledgements

I would like to take the opportunity to thank:
* My mentor Mo Shami for his feedback, advice, and support.
* My Wife Agnes for her support, advice and help with the baby so i can take time for my project.