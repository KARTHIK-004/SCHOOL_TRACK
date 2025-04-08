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
import { Switch } from "@/components/ui/switch";

const SwitchInput = ({
  register,
  errors,
  label,
  name,
  toolTipText,
  description,
  icon: Icon,
  defaultChecked = false,
}) => {
  // Create a unique ID for this switch element
  const inputId = `switch-${name}`;

  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <Label htmlFor={inputId} className="text-sm font-medium">
          {label}
        </Label>
        {toolTipText && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-4 w-4 p-0">
                  <CircleHelp className="h-4 w-4 text-muted-foreground" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{toolTipText}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
      <div className="flex items-center space-x-3">
        {Icon && (
          <div className="flex items-center pointer-events-none">
            <Icon className="w-4 h-4 text-muted-foreground" />
          </div>
        )}
        <div className="flex items-center space-x-2">
          <Switch
            id={inputId}
            defaultChecked={defaultChecked}
            className={cn(
              errors[name] && "data-[state=checked]:bg-destructive"
            )}
            {...register(name)}
          />
          {description && (
            <Label htmlFor={inputId} className="text-sm text-muted-foreground">
              {description}
            </Label>
          )}
        </div>
      </div>
      {errors[name] && (
        <p className="text-xs text-destructive">
          {errors[name].message || `${label} is required`}
        </p>
      )}
    </div>
  );
};

export default SwitchInput;
