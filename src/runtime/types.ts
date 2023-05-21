export interface Scheduler {
  everySecond: () => void;
  everySeconds: (seconds: number) => void;
  everyMinute: () => void;
  everyMinutes: (minutes: number) => void;
  everyTwoMinutes: () => void;
  everyThreeMinutes: () => void;
  everyFourMinutes: () => void;
  everyFiveMinutes: () => void;
  everyTenMinutes: () => void;
  everyFifteenMinutes: () => void;
  everyThirtyMinutes: () => void;
  hourly: () => void;
  hourlyAt: (minute: number) => void;
  everyOddHour: () => void;
  everyHours: (hours: number) => void;
  everyTwoHours: () => void;
  everyThreeHours: () => void;
  everyFourHours: () => void;
  everySixHours: () => void;
  daily: () => void;
  dailyAt: (hour: number, minute: number) => void;
  everyDays: (days: number) => void;
  weekly: () => void;
  quarterly: () => void;
  yearly: () => void;
  cron: (interval: string, timezone?: string) => void;
}
