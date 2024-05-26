import Card from "@/src/components/card/card";
import Link from "next/link";

export default function Notifications() {
  return (
    <div>
      <Card>
        <div>Notifications</div>&nbsp;&nbsp;&nbsp;
        <Link href="/complex-dashboard/archived">Archived</Link>
      </Card>
    </div>
  );
}
