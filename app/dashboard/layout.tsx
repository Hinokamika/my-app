import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <div className="p-4 flex items-center gap-4">
            <SidebarTrigger />
            <div className="h-6 w-px bg-border" />
            <h1 className="text-sm font-medium text-muted-foreground">Dashboard</h1>
        </div>
        <div className="p-4 pt-0">
            {children}
        </div>
      </main>
    </SidebarProvider>
  )
}
