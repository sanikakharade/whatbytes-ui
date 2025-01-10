"use client"

import { useState } from "react"
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
        currentScore: ""
    })

    const handleSave = () => {
        const newErrors = {
            rank: "",
            percentile: "",
            currentScore: ""
        }

        if (!scores.rank || isNaN(scores.rank)) {
            newErrors.rank = "Rank is required and should be a number"
        }

        if (scores.percentile < 1 || scores.percentile > 100 || isNaN(scores.percentile)) {
            newErrors.percentile = "Percentile should be between 1 and 100"
        }

        if (Object.values(newErrors).some(error => error !== "")) {
            setErrors(newErrors)
            return
        }

        onSave(scores)
        onOpenChange(false)
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <div className="flex items-center justify-between">
                        <DialogTitle className="text-lg md:text-xl">Update scores</DialogTitle>
                        <Image src="/html5.svg" alt="HTML5" width={40} height={40} />
                    </div>
                </DialogHeader>
                <div className="space-y-4 md:space-y-6 py-4">
                    <div className="space-y-2">
                        <Label htmlFor="rank" className="text-sm md:text-base">
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
                            onChange={(e) => {
                                setScores({ ...scores, rank: Number(e.target.value) })
                                setErrors({ ...errors, rank: "" })
                            }}
                            className={errors.rank ? "border-red-500" : ""}
                        />
                        {errors.rank && <p className="text-sm text-red-500">{errors.rank}</p>}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="percentile" className="text-sm md:text-base">
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
                            onChange={(e) => {
                                setScores({ ...scores, percentile: Number(e.target.value) })
                                setErrors({ ...errors, percentile: "" })
                            }}
                            className={errors.percentile ? "border-red-500" : ""}
                        />
                        {errors.percentile && <p className="text-sm text-red-500">{errors.percentile}</p>}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="score" className="text-sm md:text-base">
                            <span className="flex items-center gap-2">
                                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 text-sm">
                                    3
                                </span>
                                Update your Current Score (out of 15)
                            </span>
                        </Label>
                        <Input
                            id="score"
                            type="number"
                            value={scores.currentScore}
                            onChange={(e) => setScores({ ...scores, currentScore: Number(e.target.value) })}
                        />
                    </div>
                </div>
                <div className="flex justify-end gap-4">
                    <Button variant="outline" onClick={() => onOpenChange(false)}>
                        Cancel
                    </Button>
                    <Button onClick={handleSave}>
                        Save →
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}

