import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { AreaChart } from "../components/charts/area-chart";
import { BarChart } from "../components/charts/bar-chart";

const metrics = [
  { label: "Page Views", value: "54,234", change: "+12.5%", trend: "up" },
  { label: "Bounce Rate", value: "32.4%", change: "-2.1%", trend: "down" },
  { label: "Avg. Session", value: "3:24", change: "+8.3%", trend: "up" },
  { label: "Conversions", value: "1,234", change: "+24.5%", trend: "up" },
];

const trafficData = [
  { date: "Jan 23", visitors: 4200, pageViews: 8400 },
  { date: "Feb 23", visitors: 5100, pageViews: 9800 },
  { date: "Mar 23", visitors: 6800, pageViews: 12400 },
  { date: "Apr 23", visitors: 7500, pageViews: 14200 },
  { date: "May 23", visitors: 6200, pageViews: 11800 },
  { date: "Jun 23", visitors: 8400, pageViews: 16200 },
];

const conversionData = [
  { month: "January", signups: 420, conversions: 210 },
  { month: "February", signups: 510, conversions: 280 },
  { month: "March", signups: 680, conversions: 390 },
  { month: "April", signups: 750, conversions: 450 },
  { month: "May", signups: 620, conversions: 340 },
  { month: "June", signups: 840, conversions: 520 },
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

      {/* Charts */}
      <Tabs defaultValue="traffic" className="space-y-4">
        <TabsList>
          <TabsTrigger value="traffic">Traffic</TabsTrigger>
          <TabsTrigger value="conversions">Conversions</TabsTrigger>
        </TabsList>

        <TabsContent value="traffic" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Traffic Overview</CardTitle>
              <CardDescription>Visitors and page views over the last 6 months</CardDescription>
            </CardHeader>
            <CardContent>
              <AreaChart
                data={trafficData}
                index="date"
                categories={["visitors", "pageViews"]}
                colors={["hsl(var(--chart-1))", "hsl(var(--chart-3))"]}
                valueFormatter={(value) => value.toLocaleString()}
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="conversions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Conversion Funnel</CardTitle>
              <CardDescription>Signups vs conversions over the last 6 months</CardDescription>
            </CardHeader>
            <CardContent>
              <BarChart
                data={conversionData}
                index="month"
                categories={["signups", "conversions"]}
                colors={["hsl(var(--chart-2))", "hsl(var(--chart-1))"]}
                valueFormatter={(value) => value.toLocaleString()}
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

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
