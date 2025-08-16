"use client";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { TabContext } from "@/context/TabContext";
import { useContext } from "react";
import DashBoardPrev from "@/components/DashBoardPrev";
import { MessageSideBar } from "@/components/MessageSideBar";

export default function Page() {
  const { activeTab } = useContext(TabContext);
  const data = [
    {
      name: "Dashboard",
      component: DashBoardPrev,
    },
    {
      name: "Message",
      component: MessageSideBar,
    },
  ];
  return (
    <SidebarProvider
      style={{
        "--sidebar-width": "calc(var(--spacing) * 72)",
        "--header-height": "calc(var(--spacing) * 12)",
      }} >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 md:gap-6 h-[calc(100vh-var(--header-height)-16px)] ">
                {activeTab &&
                  data.map(
                    (item) =>
                      item.name === activeTab && (
                        <item.component key={item.name} />
                      )
                  )}
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
