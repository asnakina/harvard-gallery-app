# Harvard Gallery App
A modern front end very stylish application was built using React.js. It is a working, interactive, React site, styled with CSS, using flexbox layout and many animations.
Like with project one, our Unit 2 project is a chance to be creative and build something I can be proud of.

![Printscreen 2](/images/printscreen2.jpg)

## A link to this deployed project via Surge:
http://descriptive-push.surge.sh

## Youtube video link from the peresentation:
https://www.youtube.com/watch?v=5Mrpg0SsrN0&feature=youtu.be
- A proposal included:
	- A description of the project I was building with the objective described in non-technical language.
	- An explanation of the major problems I planned to face while implementing this app.
	- An explanation of how I foresee myself solving the aforementioned problems.

### Front-End Construction
The front-end for this project is constructed with React.js, CSS and HTML. 
The data was pulled into the application using API requests and axios. I tryed out APIs in insomnia to make sure we can get any data from them.
The code has many "views" in the application using conditional rendering in React. All in all the site has 15 React components. 

## Views

### MVP

### Entrance page
- contains the animation button to enter the app

![Printscreen 1](/images/printscreen1.jpg)

### Landing page
- contains the animation with the name of the app

#### Navigation Bar
- contains _Images_, _Videos_, _Gallery choice_, _Classification_, _Your exhibition request_, _Addresses_ as well as a _Home_ page. Nav bar has fixed position and nice opacity styling. 
- In App.js we render all views.
- _NavBar_ functional component has all buttons for switching views in navigation bar.

#### Images
- _ImagesList_: class component for _Images_, has 2 buttons for listing APIs 
- _Images_: rendered _Images_ and details about them
We get images from different API pages with next and previous buttons, using component ComponentDidUpdate. 
We return an array of images, using the map method.  

```
 next() {
   this.setState ({
      lastNum: this.state.lastNum + 1
    });
    this.getView();
 }

 prev() {
   if(this.state.lastNum >= 2) {
     this.setState({
       lastNum: this.state.lastNum - 1
     });
     this.getView()
   } else {
     alert('This is the first page. There are no previous pages')
  }
 }

 handleClick(e) {
   const value = e.target.value;
   this.setState({
     currentView: value
   })
 }
```
#### Videos
- _VideosList_: class component for _Videos_
- _Videos_: rendered _Videos_ and details about them

![Printscreen 3](/images/printscreen3.jpg)

#### Gallery choice
- _GalleryList_: class component for _Gallery_, has a dropdown menu feature
- _Gallery_: rendered galleries' descriptions and details.

#### Classification
- _ClassificationList_: class component for _Classification_, has 2 buttons for listing APIs 
- _Classification_: rendered _Classification_ data.
Used a search request feature. We return an array of names, using the map method. 

#### Find us here
- _AddressesList_: class component for _Addresses_.
- _Addresses_: rendered _Addresses_ and details about them.

![Printscreen 4](/images/printscreen4.jpg)

#### Your exhibition request
- _NewForm_: class component with form for adding exibition request and user information, with rendering as all forms and with option of delete a form.
![Printscreen 5](/images/printscreen5.jpg)

