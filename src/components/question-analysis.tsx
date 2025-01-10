import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Q1', correct: 8, incorrect: 2 },
  { name: 'Q2', correct: 6, incorrect: 4 },
  { name: 'Q3', correct: 7, incorrect: 3 },
  { name: 'Q4', correct: 9, incorrect: 1 },
  { name: 'Q5', correct: 5, incorrect: 5 },
]

export function QuestionAnalysis() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Question Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="correct" stackId="a" fill="#82ca9d" />
            <Bar dataKey="incorrect" stackId="a" fill="#ff6b6b" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

