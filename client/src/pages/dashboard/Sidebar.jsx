import { AppSidebar } from "@/components/Sidebar/app-sidebar";
import SidebarHeader from "@/components/Sidebar/sidebar-header";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

export default function Sidebar() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <SidebarHeader />
        <ScrollArea className="md:h-[calc(100vh-4rem)]">
          <Outlet />
        </ScrollArea>
      </SidebarInset>
    </SidebarProvider>
  );
}
