/* eslint-disable no-unused-vars */
import { CronJob } from 'cron'

const TIMEZONE = 'America/Sao_Paulo'

export default () => {
  const jobs = [
    new CronJob('0 4 * * *', () => console.log('First job'), null, false, TIMEZONE), // every day at 04:00 a.m
    new CronJob('0 3 * * *', () => console.log('Second job'), null, false, TIMEZONE) // every day at 03:00 a.m
  ]

  jobs.forEach(job => job.start())
}
