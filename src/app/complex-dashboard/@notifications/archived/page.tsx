import Card from "@/src/components/card/card";
import Link from "next/link";

export default function ArchivedNotifications() {
  return (
    <div>
      <Card>
        <div>Archived Notifications</div>&nbsp;&nbsp;&nbsp;
        <Link href="/complex-dashboard">Default</Link>
      </Card>
    </div>
  );
}
