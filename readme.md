## Create a Twitter Bot for Your Event using Node.js, Twitter API v2, and node-cron

In this tutorial, we will build a Twitter bot that automatically generates and posts tweets for an upcoming event. For demo purposes we will use an imaginary event.

### Requirements

- Basic knowledge of JavaScript and Node.js.
- Active Twitter account.
- Twitter Developer Portal account.
- Three images for our tweets.
- Twitter API credentials.

### To Do Before Starting This Tutorial

- Create a new App in the Twitter Developer Portal.
- Set up app permissions (read and write).
- Generate Consumer Keys and Auth Tokens.
- Create an .env file at the root of your project and add the keys and tokens to it.
- Create an images folder and add three images for our tweets.

### Clone the projet

1. Open your terminal and navigate to the directory where you want to clone the project.

2. Run the following command:

```bash
git clone https://github.com/nunocachada/twitter-bot.git
```

### How to Run the Project

1. Open your terminal and navigate to the project directory.
2. Run the following command to install the dependencies:

```bash
npm install
```

3. Update the config/client.js file with your Twitter API credentials.

4. Specify the month of your event in the countdownBot() function in index.js.

5. Run the following command to start the bot:

```bash
npm start
```

### What This App Can Do

This Twitter bot is written in JavaScript using the twitter-api-v2 module for interacting with the Twitter API and node-cron for scheduling tasks. It is designed to automatically post reminders about an upcoming event. It calculates the time remaining until the event's deadline and generates a message based on that information. Additionally, it changes the image it posts depending on the remaining time, with different images for different timeframes.

### Customize the Bot

You can customize the messages and images used by the bot by modifying the defaultMessage and randomMessage variables, as well as the image paths specified in the imageUrl variables.

Finally, you can schedule the bot to run at specific intervals using the node-cron module. Simply uncomment the relevant code and modify the schedule as needed.

### Don't Use in Production

Please note that this code was created only for tutorial purposes and is not designed for production use.

### Let's Get Started!

Check out the YouTube video tutorial to start building your own Twitter bot.

### Youtube Link: https://www.youtube.com/watch?v=fT5E1YWpdtw
