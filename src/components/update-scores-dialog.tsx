"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { UpdateScoreData } from "@/types/skill-test"

interface UpdateScoresDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    currentScores: UpdateScoreData
    onSave: (data: UpdateScoreData) => void
}

export function UpdateScoresDialog({
    open,
    onOpenChange,
    currentScores,
    onSave,
}: UpdateScoresDialogProps) {
    const [scores, setScores] = useState<UpdateScoreData>(currentScores)
    const [errors, setErrors] = useState({
        rank: "",
        percentile: "",
        currentScore: "",
    })

    useEffect(() => {
        if (open) {
            setScores(currentScores)
            setErrors({ rank: "", percentile: "", currentScore: "" })
        }
    }, [open, currentScores])

    const validateInputs = () => {
        const newErrors = {
            rank: scores.rank > 0 ? "" : "Rank must be a positive number",
            percentile:
                scores.percentile >= 1 && scores.percentile <= 100
                    ? ""
                    : "Percentile must be between 1 and 100",
            currentScore:
                scores.currentScore >= 0 && scores.currentScore <= 15
                    ? ""
                    : "Score must be between 0 and 15",
        }
        setErrors(newErrors)
        return !Object.values(newErrors).some((error) => error !== "")
    }

    const handleSave = () => {
        if (validateInputs()) {
            onSave(scores)
            onOpenChange(false)
        }
    }

    const handleInputChange = (
        field: keyof UpdateScoreData,
        value: number
    ) => {
        setScores({ ...scores, [field]: value })
        setErrors({ ...errors, [field]: "" })
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <div className="space-y-2">
                    <p className="text-sm text-gray-500">
                        Update your skill test scores including rank, percentile, and
                        current score.
                    </p>
                </div>
                <DialogHeader>
                    <div className="flex items-center justify-between">
                        <DialogTitle>Update Scores</DialogTitle>
                        <Image src="/html5.svg" alt="HTML5" width={40} height={40} />
                    </div>
                </DialogHeader>
                <div className="space-y-6 py-4">
                    <div className="space-y-2">
                        <Label htmlFor="rank">
                            <span className="flex items-center gap-2">
                                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 text-sm">
                                    1
                                </span>
                                Update your Rank
                            </span>
                        </Label>
                        <Input
                            id="rank"
                            type="number"
                            value={scores.rank}
                            onChange={(e) =>
                                handleInputChange("rank", Number(e.target.value))
                            }
                            className={errors.rank ? "border-red-500" : ""}
                        />
                        {errors.rank && (
                            <p className="text-sm text-red-500">{errors.rank}</p>
                        )}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="percentile">
                            <span className="flex items-center gap-2">
                                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 text-sm">
                                    2
                                </span>
                                Update your Percentile
                            </span>
                        </Label>
                        <Input
                            id="percentile"
                            type="number"
                            value={scores.percentile}
                            onChange={(e) =>
                                handleInputChange("percentile", Number(e.target.value))
                            }
                            className={errors.percentile ? "border-red-500" : ""}
                        />
                        {errors.percentile && (
                            <p className="text-sm text-red-500">{errors.percentile}</p>
                        )}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="currentScore">
                            <span className="flex items-center gap-2">
                                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 text-sm">
                                    3
                                </span>
                                Update your Current Score (out of 15)
                            </span>
                        </Label>
                        <Input
                            id="currentScore"
                            type="number"
                            value={scores.currentScore}
                            onChange={(e) =>
                                handleInputChange("currentScore", Number(e.target.value))
                            }
                            className={errors.currentScore ? "border-red-500" : ""}
                        />
                        {errors.currentScore && (
                            <p className="text-sm text-red-500">{errors.currentScore}</p>
                        )}
                    </div>
                </div>
                <div className="flex justify-end gap-4">
                    <Button variant="outline" onClick={() => onOpenChange(false)}>
                        Cancel
                    </Button>
                    <Button onClick={handleSave}>Save →</Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}
