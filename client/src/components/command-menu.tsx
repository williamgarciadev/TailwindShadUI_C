import * as React from "react";
import { useNavigate } from "react-router-dom";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "./ui/command";
import {
  LayoutDashboard,
  BarChart3,
  Table2,
  FileText,
  Settings,
  Users,
  Palette,
  LogIn,
  UserPlus,
} from "lucide-react";

export function CommandMenu() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => void) => {
    setOpen(false);
    command();
  }, []);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Pages">
          <CommandItem
            onSelect={() => runCommand(() => navigate("/"))}
          >
            <LayoutDashboard className="mr-2 h-4 w-4" />
            <span>Dashboard</span>
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => navigate("/analytics"))}
          >
            <BarChart3 className="mr-2 h-4 w-4" />
            <span>Analytics</span>
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => navigate("/tables"))}
          >
            <Table2 className="mr-2 h-4 w-4" />
            <span>Tables</span>
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => navigate("/forms"))}
          >
            <FileText className="mr-2 h-4 w-4" />
            <span>Forms</span>
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => navigate("/users"))}
          >
            <Users className="mr-2 h-4 w-4" />
            <span>Users</span>
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => navigate("/settings"))}
          >
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Other">
          <CommandItem
            onSelect={() => runCommand(() => navigate("/showcase"))}
          >
            <Palette className="mr-2 h-4 w-4" />
            <span>Color Showcase</span>
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => navigate("/login"))}
          >
            <LogIn className="mr-2 h-4 w-4" />
            <span>Login</span>
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => navigate("/signup"))}
          >
            <UserPlus className="mr-2 h-4 w-4" />
            <span>Sign Up</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
