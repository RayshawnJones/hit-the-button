//The code starts by saying "When the document is ready", which means when the webpage finishes loading, do the following actions.

// It creates a variable called "button" and finds an element on the webpage with the id "myButton". This element is a button.

// It adds an action to the button. When the button is clicked, do the following actions.

// It removes all the "h1" elements from the webpage. "h1" elements are usually used for headings.

// It creates a new button element and sets its text to "Please take the cookie".

// It replaces the original button with the new button. So, when you click the button, it will change to the new button.

// It adds an action to the new button. When the new button is clicked, do the following actions.

// It creates an audio element and sets its source to a scary sound file called "jumpscare-154489.mp3". It also adds the audio element to the webpage.

// It plays the audio. So, when you click the new button, you will hear the scary sound.

// It creates an image element and sets its source to an image file called "evilcookiemonster.png". It also sets some styles for the image, like its size and position. Then, it adds the image to the webpage.

// It creates another image element and sets its source to an image file called "cookie-monster.jpg". Then, it adds the image to the webpage.

// That's it! This code sets up a button that, when clicked, removes a heading, changes the button itself, plays a scary sound, and shows scary images on the webpage.



$(document).ready(function () {
  const button = $("#myButton");

  button.click(function () {
    $("h1").remove();

    const newButton = $("<button>").text("Please take the cookie");
    button.replaceWith(newButton);

    newButton.click(function () {
      const audio = $("<audio>")
        .attr("src", "assets/audio/jumpscare-154489.mp3")
        .appendTo("body");
      audio[0].play();

      $("<img>", {
        src: "assets/images/evilcookiemonster.png",
        css: {
          width: "100vw",
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 9999,
        },
      }).appendTo("body");
    });

    $("<img>", {
      src: "assets/images/cookie-monster.jpg",
    }).appendTo("body");
  });
});
