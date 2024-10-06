'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Play, Pause, Volume2 } from 'lucide-react'

export default function AudioPlayer({ audioUrl }: { audioUrl: string }) {
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const audioRef = useRef<HTMLAudioElement>(null)

    useEffect(() => {
        const audio = audioRef.current
        if (audio) {
            audio.addEventListener('loadedmetadata', () => {
                setDuration(audio.duration)
            })
            audio.addEventListener('timeupdate', () => {
                setCurrentTime(audio.currentTime)
            })
        }
    }, [])

    const togglePlayPause = () => {
        const audio = audioRef.current
        if (audio) {
            if (isPlaying) {
                audio.pause()
            } else {
                audio.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    const handleSliderChange = (value: number[]) => {
        const audio = audioRef.current
        if (audio) {
            audio.currentTime = value[0]
            setCurrentTime(value[0])
        }
    }

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60)
        const seconds = Math.floor(time % 60)
        return `${minutes}:${seconds.toString().padStart(2, '0')}`
    }

    return (
        <div className="bg-secondary/10 p-4 rounded-lg border border-secondary/20 shadow-sm">
            <div className="flex items-center space-x-4">
                <Button
                    variant="outline"
                    size="icon"
                    onClick={togglePlayPause}
                    aria-label={isPlaying ? "Pause" : "Play"}
                    className="h-12 w-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200 shadow-lg"
                >
                    {isPlaying ? (
                        <Pause className="h-6 w-6" />
                    ) : (
                        <Play className="h-6 w-6 ml-0.5" />
                    )}
                </Button>
                <div className="flex-grow space-y-2">
                    <div className="flex items-center space-x-2">
                        <Volume2 className="h-4 w-4 text-primary" />
                        <div className="text-sm font-medium text-primary">Audio Review</div>
                    </div>
                    <Slider
                        min={0}
                        max={duration}
                        step={0.1}
                        value={[currentTime]}
                        onValueChange={handleSliderChange}
                        className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                        <span>{formatTime(currentTime)}</span>
                        <span>{formatTime(duration)}</span>
                    </div>
                </div>
            </div>
            <audio ref={audioRef} src={audioUrl} />
        </div>
    )
}
