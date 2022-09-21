const { TwitterApi } = require("twitter-api-v2");
const client = require("./config/client");
const cron = require("node-cron");
const path = require("path");

const countdownBot = async (month = "dec") => {
  try {
    // Event Deadline
    const deadline = new Date(`${month} 26, 2022, 08:00:00`);

    //Current Time
    const now = new Date().getTime();

    //Calculate ditance between event deadline and current Time
    const distance = deadline - now;

    //convert miliseconds to days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // console.log(days, hours, minutes, seconds);

    //Create defaultMessage and randomMessage
    const defaultMessage = `Applications close in: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds  `;

    const randomMessage = [
      "Great to have you here!",
      "Classical Guitar Rocks!",
      "Amazing prizes!!",
    ][Math.floor(Math.random() * 3)];

    //Declare text and imageUrl variables
    let imageUrl, text;

    //text and imageUrl depend on the distance from the current Date to the Deadline
    if (days < 7) {
      text = `Less than week to apply!\n${defaultMessage}\n${randomMessage}`;
      imageUrl = "../images/image3.jpg";
    } else if (days < 50) {
      text = `Deadline is aproaching.Less than 50 days to apply!\n${defaultMessage}\n${randomMessage}`;
      imageUrl = "../images/image2.jpg";
    } else {
      text = `Apply for the 10th Fake International Guitar Competition!\n${defaultMessage}\n${randomMessage}`;
      imageUrl = "../images/image1.jpg";
    }

    console.log(text);

    // Upload image to twitter
    const mediaId = await client.v1.uploadMedia(path.join(__dirname, imageUrl));

    //Tweet!
    const tweet = await client.v2.tweet({
      text,
      media: { media_ids: [mediaId] },
    });

    console.log("Success!!!");
  } catch (error) {
    console.log(error);
  }
};

//Let's create a helper function for testing multiple dates
const testBot = () => {
  const months = ["dec", "oct", "sep"];
  months.forEach((month) => countdownBot(month));
};

testBot();

//Use node-cron to schedule tasks according to your needs.
//In the example below, we will call our countdownBot function every 5 seconds.

// const task = cron.schedule("*/5 * * * * *", () => {
//   countdownBot();
// });

// task.start();

//Thanks!
