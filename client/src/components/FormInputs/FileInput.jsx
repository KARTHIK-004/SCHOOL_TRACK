import { Label } from "@/components/ui/label";
import { CircleHelp, Upload } from "lucide-react";
import { Input } from "../ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Button } from "../ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function FileInput({
  register,
  errors,
  name,
  label,
  description,
  toolTipText,
  className = "w-full",
  accept = "*",
  ...rest
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <Label className="text-sm font-medium">{label}</Label>
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
      <Card className="border dark:bg-input/30">
        <CardHeader className="flex flex-col items-center justify-center">
          <div className="bg-primary p-4 rounded-full my-4">
            <Upload className="h-5 w-5 text-secondary" />
          </div>
          <CardTitle className="text-lg font-medium">
            {label || "Document"}
          </CardTitle>
          {description && (
            <p className="text-center text-sm text-muted-foreground mt-2">
              {description}
            </p>
          )}
        </CardHeader>
        <CardContent className="flex justify-center">
          <label htmlFor={name} className="cursor-pointer">
            <div className="border rounded-md py-2 px-4 flex items-center justify-center hover:bg-accent transition">
              <Upload className="h-4 w-4 mr-2" />
              <span>Upload Document</span>
            </div>
            <Input
              type="file"
              id={name}
              className="hidden"
              accept={accept}
              {...register(name)}
              {...rest}
            />
          </label>
        </CardContent>
      </Card>
      {errors?.[name] && (
        <p className="text-destructive text-sm mt-1">{errors[name].message}</p>
      )}
    </div>
  );
}
