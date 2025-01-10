"use client"

import { useState } from "react"
import Image from "next/image"
import { Header } from '@/components/header'
import { Sidebar } from '@/components/sidebar'
import { Button } from '@/components/ui/button'
import { QuickStatistics } from '@/components/quick-statistics'
import { ComparisonGraph } from '@/components/comparison-graph'
import { SyllabusAnalysis } from '@/components/syllabus-analysis'
import { UpdateScoresDialog } from '@/components/update-scores-dialog'
import type { SkillTest, SyllabusItem, UpdateScoreData } from '@/types/skill-test'

const syllabusItems: SyllabusItem[] = [
    { topic: "HTML Tools, Forms, History", score: 80 },
    { topic: "Tags & References in HTML", score: 60 },
    { topic: "Tables & References in HTML", score: 24 },
    { topic: "Tables & CSS Basics", score: 96 },
]

export default function SkillTestPage() {
    const [testData, setTestData] = useState<SkillTest>({
        title: "Hyper Text Markup Language",
        icon: "/html5.svg",
        questions: 8,
        duration: 15,
        submittedDate: "5 June 2021",
        rank: 1,
        percentile: 30,
        correctAnswers: 10,
        totalQuestions: 15,
    })

    const [isUpdateDialogOpen, setIsUpdateDialogOpen] = useState(false)

    const handleUpdateScores = (data: UpdateScoreData) => {
        setTestData({
            ...testData,
            rank: data.rank,
            percentile: data.percentile,
            correctAnswers: data.currentScore,
        })
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <div className="flex">
                <Sidebar />
                <main className="flex-1 p-6">
                    <h1 className="text-2xl font-semibold mb-6">Skill Test</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2 space-y-6">
                            <div className="bg-white p-6 rounded-lg border">
                                <div className="flex justify-between items-start">
                                    <div className="flex gap-4">
                                        <Image src="/html5.svg" alt="HTML5" width={48} height={48} />
                                        <div>
                                            <h2 className="text-xl font-semibold">{testData.title}</h2>
                                            <p className="text-gray-500">
                                                Questions: {testData.questions} | Duration: {testData.duration} mins |
                                                Submitted on {testData.submittedDate}
                                            </p>
                                        </div>
                                    </div>
                                    <Button onClick={() => setIsUpdateDialogOpen(true)}>
                                        Update
                                    </Button>
                                </div>
                            </div>
                            <QuickStatistics
                                rank={testData.rank}
                                percentile={testData.percentile}
                                correctAnswers={testData.correctAnswers}
                                totalQuestions={testData.totalQuestions}
                            />
                            <ComparisonGraph
                                percentile={testData.percentile}
                                averagePercentile={72}
                            />
                        </div>
                        <div className="lg:col-span-1">
                            <SyllabusAnalysis items={syllabusItems} />
                        </div>
                    </div>
                </main>
            </div>
            <UpdateScoresDialog
                open={isUpdateDialogOpen}
                onOpenChange={setIsUpdateDialogOpen}
                currentScores={{
                    rank: testData.rank,
                    percentile: testData.percentile,
                    currentScore: testData.correctAnswers,
                }}
                onSave={handleUpdateScores}
            />
        </div>
    )
}

