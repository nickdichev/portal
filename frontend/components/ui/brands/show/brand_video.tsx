import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export default function BrandVideo({ video_url }: { video_url: string }) {
    return (
          <div className="bg-white rounded-lg p-4 mb-4 shadow">
            <div className="relative w-full" style={{ paddingBottom: '56.25%', height: 0 }}>
              <div className="absolute top-0 left-0 w-full h-full bg-gray-200 rounded-md overflow-hidden flex items-center justify-center">
                <Button variant="outline" size="icon" className="w-16 h-16 rounded-full">
                  <Play className="h-8 w-8" />
                  <span className="sr-only">Play video</span>
                </Button>
              </div>
            </div>
          </div>
    )
}