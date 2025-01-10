import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import type { SyllabusItem } from "@/types/skill-test"

interface SyllabusAnalysisProps {
  items: SyllabusItem[]
}

export function SyllabusAnalysis({ items }: SyllabusAnalysisProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Syllabus Wise Analysis</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {items.map((item) => (
          <div key={item.topic} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">{item.topic}</span>
              <span className="font-medium text-blue-600">{item.score}%</span>
            </div>
            <Progress value={item.score} className="h-2" />
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

