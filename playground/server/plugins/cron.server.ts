import { useCron } from '#mmCron';

function say(message: string) {
  console.log(message);
}
export default defineNitroPlugin(() => {
  startScheduler();
});

function startScheduler() {
  const cron = useCron();

  cron
    .run(() => {
      say('I run every 3 seconds, 🚀🚀🚀');
    })
    .everySeconds(3);

  cron
    .run(() => {
      say('I run every 5 seconds, 🚀🚀🚀🚀🚀');
    })
    .everySeconds(5);

  cron
    .run(() => {
      say('I run once a second! 🚀');
    })
    .cron('* * * * *');

  cron
    .run(() => {
      say('Running a job at 01:00 PM at Asia/Jerusalem timezone 🌍');
    })
    .cron('0 13 * * *', 'Asia/Jerusalem');

  // create as many tasks as you want here
}
