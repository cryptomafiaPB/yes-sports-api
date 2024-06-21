"use client";

import * as React from "react";
import { Check, ChevronsUpDown, Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";

const frameworks = [
  {
    value: "introduction",
    label: "Introduction",
  },
  {
    value: "authentication",
    label: "Authentication",
  },
  {
    value: "endpoints",
    label: "Endpoints",
  },
  {
    value: "sports",
    label: "Sports",
  },
  {
    value: "teams",
    label: "Teams",
  },
  {
    value: "players",
    label: "Players",
  },
  {
    value: "errorhandling",
    label: "Error Handling",
  },
  {
    value: "exampleusage",
    label: "Example usage",
  },
  {
    value: "contact",
    label: "Contact",
  },
];

export function ComboBox() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <div className="block sm:hidden">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[75px] justify-between"
          >
            {/* {value ? (
              frameworks.find((framework) => framework.value === value)?.label
            ) : (
              <Menu />
            )} */}
            <Menu />
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search..." />
            <CommandList>
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup>
                {frameworks.map((framework) => (
                  <CommandItem
                    key={framework.value}
                    value={framework.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === framework.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    <Link href={`#${framework.value}`}>{framework.label}</Link>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
