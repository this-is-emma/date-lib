class D {
  constructor(...args) {
    this._date = new Date(...args);
  }

  //return 4 digits year
  get year() {
    return this._date.getFullYear();
  }

  //return 2 digits year
  get yr() {
    return this._date.getFullYear() % 100;
  }

  // full month
  get month() {
    const month = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return month[this._date.getMonth()];
  }

  // short month
  get mon() {
    const month = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    return month[this._date.getMonth()].substring(0, 3);
  }

  //full day
  get day() {
    const weekday = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    return weekday[(this._date.getDay())];
  }

  //short day
  get dy() {
    const weekday = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    return weekday[this._date.getDay()].substring(0, 3);
  }

  get date() {
    return this._date.getDate();
  }

  get hours() {
    return this._date.getHours();
  }

  get mins() {
    return this._date.getMinutes();
  }

  get secs() {
    return this._date.getSeconds();
  }

  /**
   * Formats the date instance according to the provided format string.
   *
   * @param {string} format - The format string specifying how to format the date.
   *                          The following placeholders are supported:
   *                          - 'YYYY': Full year (e.g., 2023)
   *                          - 'yr': Year without century (e.g., 23)
   *                          - 'MM': Month (e.g., January)
   *                          - 'mm': Short month (e.g., Jan)
   *                          - 'DD': Zero-padded date (e.g., 01)
   *                          - 'dd': Date (e.g., 1)
   *                          - '#': Date with ordinal (e.g., 1st, 2nd)
   *                          - 'HH': Zero-padded hours in 24-hour format (00-23)
   *                          - 'hr': Hours in 24-hour format (0-23)
   *                          - 'MIN': Zero-padded minutes (00-59)
   *                          - 'mn': Minutes (0-59)
   *                          - 'SEC': Zero-padded seconds (00-59)
   *                          - 'sc': Seconds (0-59)
   * @returns {string} The formatted date string.
   */
  format(format) {
    function getNumberWithOrdinal(n) {
      // Function to convert a number to its ordinal representation
      // (1st, 2nd, 3rd, 4th, etc.)
      const s = ["th", "st", "nd", "rd"],
          v = n % 100;
      return n + (s[(v - 20) % 10] || s[v] || s[0]);
    }

    if (format === undefined) {
      // Return default format: "YYYY MM DD"
      return `${this.year} ${this.month} ${this.date}`
    } else {
      // Replace placeholders with actual date values
      return format
      .replace('MM', this.month)
      .replace('mm', this.mon)
      .replace('YYYY', this.year)
      .replace('yr', this.yr)
      .replace('DD', this.date < 10 ? "0"+this.date : this.date)
      .replace('dd', this.date)
      .replace('#', getNumberWithOrdinal(this.date))
      .replace('HH', this.hours < 10 ? "0"+this.hours : this.hours)
      .replace('hr', this.hours)
      .replace('MIN', this.mins < 10 ? "0"+this.mins : this.mins)
      .replace('mn', this.mins)
      .replace('SEC', this.secs < 10 ? "0"+this.secs : this.secs)
      .replace('sc', this.secs)
    }
  };


  /**
   * Calculates and returns a human-readable description of the time difference
   * between the date instance and today's date.
   *
   * @returns {string} A description of the time difference.
   *                   Possible outputs:
   *                   - "today"
   *                   - "X day(s) ago" (for past dates within 30 days)
   *                   - "X month(s) ago" (for past dates within 12 months)
   *                   - "X year(s) ago" (for past dates over 12 months)
   *                   - "X day(s) from now" (for future dates within 30 days)
   *                   - "X month(s) from now" (for future dates within 12 months)
   *                   - "X year(s) from now" (for future dates over 12 months)
   */
  when(){
    // Calculate the difference between today's date and a target date
    const today = new Date();
    const timeDiff = this._date - today;

    const yearsDiff = this._date.getFullYear() - today.getFullYear();
    const monthsDiff = (this._date.getMonth() - today.getMonth()) + (yearsDiff * 12);
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    if (daysDiff === 0) {
      return `today`;
    } else if (daysDiff < 0) { //handle difference with date in the past
      if(daysDiff > -30 ){
        return `${Math.floor(-daysDiff)} day(s) ago`
      } else if(daysDiff <= -30 && daysDiff > -365) {
        return `${Math.floor(-daysDiff/30)} month(s) ago`;
      } else if (daysDiff <= -365) {
        return `${Math.floor(-daysDiff/365)} year(s) ago`;
      }

    } else if (monthsDiff === 0) {
      return `${Math.floor(daysDiff)} day(s) from now`;
    } else if (monthsDiff >= 1 && monthsDiff < 12) { //calculate month difference
      return `${Math.floor(monthsDiff)} month(s) from now`
    } else if (monthsDiff >= 12) { // calculate years difference in the future
      return `${Math.floor(monthsDiff/12)} year(s) from now`
    }
  }
}


module.exports = D;
