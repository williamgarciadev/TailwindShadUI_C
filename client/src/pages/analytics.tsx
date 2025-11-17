import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { TrendingUp, ArrowUpRight, ArrowDownRight } from "lucide-react";

const metrics = [
  { label: "Page Views", value: "54,234", change: "+12.5%", trend: "up" },
  { label: "Bounce Rate", value: "32.4%", change: "-2.1%", trend: "down" },
  { label: "Avg. Session", value: "3:24", change: "+8.3%", trend: "up" },
  { label: "Conversions", value: "1,234", change: "+24.5%", trend: "up" },
];

const topPages = [
  { page: "/dashboard", views: 12453, change: 12.5 },
  { page: "/products", views: 8932, change: -3.2 },
  { page: "/analytics", views: 7621, change: 24.1 },
  { page: "/settings", views: 5432, change: 8.7 },
  { page: "/users", views: 4321, change: -1.4 },
];

export function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
        <p className="text-muted-foreground">Track your application's performance and user behavior.</p>
      </div>

      {/* Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <Card key={metric.label}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{metric.label}</CardTitle>
              {metric.trend === "up" ? (
                <ArrowUpRight className="h-4 w-4 text-chart-2" />
              ) : (
                <ArrowDownRight className="h-4 w-4 text-destructive" />
              )}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className={metric.trend === "up" ? "text-chart-2" : "text-destructive"}>
                  {metric.change}
                </span>{" "}
                from last period
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Chart Placeholder */}
      <Card>
        <CardHeader>
          <CardTitle>Traffic Overview</CardTitle>
          <CardDescription>Your application traffic over the last 7 days.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex h-[300px] items-center justify-center rounded-md border border-dashed">
            <div className="text-center">
              <TrendingUp className="mx-auto h-12 w-12 text-muted-foreground" />
              <p className="mt-2 text-sm text-muted-foreground">Chart visualization would go here</p>
              <p className="text-xs text-muted-foreground">You can integrate Recharts or Chart.js</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Top Pages */}
      <Card>
        <CardHeader>
          <CardTitle>Top Pages</CardTitle>
          <CardDescription>Most visited pages in your application.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topPages.map((page, index) => (
              <div key={page.page} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-sm font-medium">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-medium">{page.page}</p>
                    <p className="text-sm text-muted-foreground">{page.views.toLocaleString()} views</p>
                  </div>
                </div>
                <Badge variant={page.change > 0 ? "success" : "destructive"}>
                  {page.change > 0 ? "+" : ""}
                  {page.change}%
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
