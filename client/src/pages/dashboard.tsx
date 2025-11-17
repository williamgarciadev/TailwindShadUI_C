import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { TrendingUp, TrendingDown, Users, DollarSign, ShoppingCart, Activity } from "lucide-react";

const stats = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    change: "+20.1%",
    trend: "up",
    icon: DollarSign,
  },
  {
    title: "Active Users",
    value: "2,350",
    change: "+180.1%",
    trend: "up",
    icon: Users,
  },
  {
    title: "Sales",
    value: "+12,234",
    change: "+19%",
    trend: "up",
    icon: ShoppingCart,
  },
  {
    title: "Active Now",
    value: "+573",
    change: "+201",
    trend: "up",
    icon: Activity,
  },
];

const recentActivity = [
  { id: 1, user: "Olivia Martin", action: "Made a purchase", amount: "$1,999.00", time: "2 hours ago" },
  { id: 2, user: "Jackson Lee", action: "Subscribed", amount: "$39.00", time: "5 hours ago" },
  { id: 3, user: "Isabella Nguyen", action: "Made a purchase", amount: "$299.00", time: "1 day ago" },
  { id: 4, user: "William Kim", action: "Subscribed", amount: "$99.00", time: "2 days ago" },
  { id: 5, user: "Sofia Davis", action: "Made a purchase", amount: "$399.00", time: "3 days ago" },
];

export function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's what's happening with your business today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                {stat.trend === "up" ? (
                  <TrendingUp className="h-3 w-3 text-chart-2" />
                ) : (
                  <TrendingDown className="h-3 w-3 text-destructive" />
                )}
                <span className={stat.trend === "up" ? "text-chart-2" : "text-destructive"}>
                  {stat.change}
                </span>
                <span>from last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Recent Sales */}
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>You have {recentActivity.length} activities this week.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                    {activity.user.charAt(0)}
                  </div>
                  <div className="ml-4 space-y-1 flex-1">
                    <p className="text-sm font-medium leading-none">{activity.user}</p>
                    <p className="text-sm text-muted-foreground">{activity.action}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{activity.amount}</div>
                    <div className="text-xs text-muted-foreground">{activity.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Overview */}
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Commonly used actions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <button className="w-full rounded-md border border-input bg-background p-4 text-left hover:bg-accent transition-colors">
              <div className="font-medium">Create New User</div>
              <div className="text-sm text-muted-foreground">Add a new user to the system</div>
            </button>
            <button className="w-full rounded-md border border-input bg-background p-4 text-left hover:bg-accent transition-colors">
              <div className="font-medium">Generate Report</div>
              <div className="text-sm text-muted-foreground">Create a new analytics report</div>
            </button>
            <button className="w-full rounded-md border border-input bg-background p-4 text-left hover:bg-accent transition-colors">
              <div className="font-medium">System Settings</div>
              <div className="text-sm text-muted-foreground">Configure system preferences</div>
            </button>
            <button className="w-full rounded-md border border-input bg-background p-4 text-left hover:bg-accent transition-colors">
              <div className="font-medium">Export Data</div>
              <div className="text-sm text-muted-foreground">Download your data as CSV</div>
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
