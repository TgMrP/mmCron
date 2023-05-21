# Media Maven - CronJobs

Schedule Jobs within Nuxt 3.

> This is a Server-Side task scheduler for Nuxt which depends on node-cron.

## Example Usage

Create as many scheduler you like as plugins.

> ~/server/plugins/cron-job.ts

```js
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
}
```

> use Human Readable intervals

```
 everySecond
 everySeconds
 everyMinute
 everyMinutes
 everyTwoMinutes
 everyThreeMinutes
 everyFourMinutes
 everyFiveMinutes
 everyTenMinutes
 everyFifteenMinutes
 everyThirtyMinutes
 hourly
 hourlyAt
 everyOddHour
 everyHours
 everyTwoHours
 everyThreeHours
 everyFourHours
 everySixHours
 daily
 dailyAt
 everyDays
 weekly
 quarterly
 yearly
```

> or set using cron method
>
> `cron()` method accepts **'optional'** string parameter called `timezone` where you have to pass a valid string values - [IANA time zone database ](https://www.iana.org/time-zones) for examples.

```js
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
```
