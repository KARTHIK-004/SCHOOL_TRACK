import React, { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "./input";

const Combobox = ({
  value,
  onValueChange,
  options = [],
  placeholder = "Select option...",
  emptyText = "No options available",
  label = "",
  showSearch = false,
}) => {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const selectedOption = options.find((option) => option?.value === value);

  const filteredOptions = showSearch
    ? options.filter((option) =>
        option.label.toLowerCase().includes(searchValue.toLowerCase())
      )
    : options;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          <span className={selectedOption ? "" : "text-muted-foreground"}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>

          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-[--radix-popover-trigger-width] p-0"
        align="start"
        side="bottom"
        sideOffset={4}
      >
        <div className="border-0 w-full" onClick={(e) => e.stopPropagation()}>
          {showSearch && (
            <div className="flex items-center border-b px-3">
              <Input
                className="flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                placeholder={`Search ${label.toLowerCase()}...`}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          )}
          {filteredOptions.length === 0 ? (
            <p className="p-4 text-sm text-muted-foreground">{emptyText}</p>
          ) : (
            <div className="max-h-[300px] overflow-y-auto">
              {filteredOptions.map((option) => (
                <div
                  key={
                    typeof option.value === "object"
                      ? JSON.stringify(option.value)
                      : option.value
                  }
                  className={cn(
                    "relative flex cursor-pointer select-none items-center rounded-sm px-3 py-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground",
                    JSON.stringify(value) === JSON.stringify(option.value) &&
                      "bg-accent text-accent-foreground"
                  )}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onValueChange(option.value);
                    setOpen(false);
                    setSearchValue("");
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      JSON.stringify(value) === JSON.stringify(option.value)
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {option.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default Combobox;
