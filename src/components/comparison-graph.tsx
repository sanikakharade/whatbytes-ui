import { Card, CardContent } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts'

const data = [
  { x: 0, y: 0 },
  { x: 10, y: 5 },
  { x: 20, y: 10 },
  { x: 30, y: 15 },
  { x: 40, y: 30 },
  { x: 50, y: 45 },
  { x: 60, y: 60 },
  { x: 70, y: 40 },
  { x: 80, y: 25 },
  { x: 90, y: 15 },
  { x: 100, y: 5 },
]

interface ComparisonGraphProps {
  percentile: number
  averagePercentile: number
}

export function ComparisonGraph({ percentile, averagePercentile }: ComparisonGraphProps) {
  return (
    <Card>
      <CardContent className="p-4 md:p-6">
        <h3 className="font-semibold mb-4 text-lg">Comparison Graph</h3>
        <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
          You scored {percentile}% percentile which is{' '}
          {percentile > averagePercentile ? 'higher' : 'lower'} than the average
          percentile {averagePercentile}% of all the engineers who took this assessment
        </p>
        <div className="h-[200px] md:h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="x" />
              <YAxis />
              <Line
                type="monotone"
                dataKey="y"
                stroke="#2563eb"
                dot
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

