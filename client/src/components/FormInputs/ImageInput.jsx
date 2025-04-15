import React from "react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Label } from "@/components/ui/label";
import { CircleHelp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "../ui/card";

export default function ImageInput({
  title,
  imageUrl,
  toolTipText,
  size = "lg",
  className,
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <Label className="text-sm font-medium">{title}</Label>
        {toolTipText && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="w-6 h-6"
                >
                  <CircleHelp className="w-4 h-4 text-muted-foreground" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{toolTipText}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
      <Card className="overflow-hidden dark:bg-input/30">
        <CardContent>
          <div className="grid gap-2">
            <img
              alt={title}
              src={imageUrl}
              height="500"
              className={cn(
                size === "sm" ? "h-20" : "h-40",
                "w-full rounded-md object-cover",
                className
              )}
            />
            <div className="col-span-full">
              <input
                type="file"
                accept="image/*"
                className="w-full px-3 py-2 border rounded-md"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    // Create a URL for the uploaded file
                  }
                }}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
