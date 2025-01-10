import { Trophy, Target, CheckCircle } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

interface QuickStatisticsProps {
  rank: number
  percentile: number
  correctAnswers: number
  totalQuestions: number
}

export function QuickStatistics({
  rank,
  percentile,
  correctAnswers,
  totalQuestions,
}: QuickStatisticsProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="font-semibold mb-4">Quick Statistics</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-yellow-50 rounded-lg">
              <Trophy className="w-6 h-6 text-yellow-500" />
            </div>
            <div>
              <div className="text-2xl font-semibold">{rank}</div>
              <div className="text-sm text-gray-500">YOUR RANK</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-2 bg-blue-50 rounded-lg">
              <Target className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <div className="text-2xl font-semibold">{percentile}%</div>
              <div className="text-sm text-gray-500">PERCENTILE</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-2 bg-green-50 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <div className="text-2xl font-semibold">
                {correctAnswers} / {totalQuestions}
              </div>
              <div className="text-sm text-gray-500">CORRECT ANSWERS</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

