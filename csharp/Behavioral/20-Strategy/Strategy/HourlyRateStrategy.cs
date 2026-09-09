namespace Strategy;

public class HourlyRateStrategy : IPricingStrategy
{
    private readonly decimal _hourlyRate;
    private readonly decimal _minimumCallout;

    public HourlyRateStrategy(decimal hourlyRate = 450m, decimal minimumCallout = 350m)
    {
        _hourlyRate     = hourlyRate;
        _minimumCallout = minimumCallout;
    }

    public string Name => "Hourly Rate";

    public decimal Calculate(JobCard job) =>
        Math.Max(job.HoursWorked * _hourlyRate, _minimumCallout);

    public string Explain(JobCard job)
    {
        var raw = job.HoursWorked * _hourlyRate;

        return raw < _minimumCallout
            ? $"{job.HoursWorked}h × N${_hourlyRate:N2} = N${raw:N2}, " +
              $"below minimum callout — charged N${_minimumCallout:N2}."
            : $"{job.HoursWorked}h × N${_hourlyRate:N2} = N${raw:N2}.";
    }
}
