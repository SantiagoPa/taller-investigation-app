import { ContentTask, TabBar } from "@/components"
import { cookies } from "next/headers";

export default async function MarketingTasks() {

    const cookieStore = await cookies();
    const cookieTab   = cookieStore.get("selectedTab")?.value ?? '1';

  return (
    <div>
        <TabBar currentTab={ +cookieTab } />
        <ContentTask currentTab={ +cookieTab }  />
    </div>
  )
}
