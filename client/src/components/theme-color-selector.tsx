"use client";

import * as React from "react";
import { useColorTheme, type ColorTheme } from "../contexts/theme-color-context";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Palette } from "lucide-react";

const themes: { value: ColorTheme; label: string; color: string }[] = [
  { value: "black", label: "Negro Minimalista", color: "bg-black" },
  { value: "blue", label: "Azul Stripe", color: "bg-blue-600" },
  { value: "teal", label: "Teal Tailwind", color: "bg-teal-500" },
  { value: "green", label: "Verde Notion", color: "bg-green-600" },
  { value: "orange", label: "Naranja Linear", color: "bg-orange-500" },
  { value: "pink", label: "Rosa Dribbble", color: "bg-pink-500" },
];

export function ThemeColorSelector() {
  const { colorTheme, setColorTheme } = useColorTheme();

  return (
    <div className="flex items-center gap-2">
      <Palette className="h-4 w-4 text-muted-foreground" />
      <Select value={colorTheme} onValueChange={setColorTheme}>
        <SelectTrigger className="w-[180px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {themes.map((theme) => (
            <SelectItem key={theme.value} value={theme.value}>
              <div className="flex items-center gap-2">
                <div className={`h-4 w-4 rounded-full ${theme.color}`} />
                {theme.label}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
