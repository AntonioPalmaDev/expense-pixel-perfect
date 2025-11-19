interface WeeklyChartProps {
  data?: { day: string; value: number }[];
}

export const WeeklyChart = ({ data }: WeeklyChartProps) => {
  const days = ["S", "T", "Q", "Q", "S", "S", "D"];
  const chartData = data || days.map((day) => ({ day, value: 0 }));
  
  const maxValue = Math.max(...chartData.map(d => d.value), 1);
  
  return (
    <div className="bg-chart-background rounded-3xl p-6 mx-4 mt-6">
      <div className="flex justify-between items-end gap-3 h-48">
        {chartData.map((item, index) => {
          const heightPercentage = item.value > 0 ? (item.value / maxValue) * 100 : 0;
          
          return (
            <div key={index} className="flex-1 flex flex-col items-center gap-3">
              <span className="text-sm font-medium text-foreground">
                {item.value.toFixed(1)}
              </span>
              <div className="w-full flex-1 flex items-end">
                <div
                  className={`w-full rounded-full transition-all duration-300 ${
                    item.value > 0 ? "bg-chart-barActive" : "bg-chart-bar"
                  }`}
                  style={{ height: item.value > 0 ? `${heightPercentage}%` : "20%" }}
                />
              </div>
              <span className="text-sm font-medium text-foreground">{item.day}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
