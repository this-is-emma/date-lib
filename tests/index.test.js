const D = require('../src/index');

describe('D Class', () => {
  let instance;

  beforeEach(() => {
    // Create a new instance of D before each test
    instance = new D(2023, 9, 20, 12, 30, 45); // Set a specific date for testing
  });

  it('should have the correct year property', () => {
    expect(instance.year).toBe(2023);
  });

  it('should have the correct yr property', () => {
    expect(instance.yr).toBe(23);
  });

  it('should have the correct month property', () => {
    expect(instance.month).toBe('October');
  });

  it('should have the correct mon property', () => {
    expect(instance.mon).toBe('Oct');
  });

  it('should have the correct day property', () => {
    expect(instance.day).toBe('Friday');
  });

  it('should have the correct dy property', () => {
    expect(instance.dy).toBe('Fri');
  });

  it('should have the correct date property', () => {
    expect(instance.date).toBe(20);
  });

  it('should have the correct hours property', () => {
    expect(instance.hours).toBe(12);
  });

  it('should have the correct mins property', () => {
    expect(instance.mins).toBe(30);
  });

  it('should have the correct secs property', () => {
    expect(instance.secs).toBe(45);
  });

  it('should format date correctly', () => {
    const formatted = instance.format('YYYY-MM-dd hr:mn:sc');
    expect(formatted).toBe('2023-October-20 12:30:45');
  });

  it('should generate when() correctly for a date that is today', () => {
    instance = new D();

    const whenMessage = instance.when();
    expect(whenMessage).toBe('today');
  });
});
