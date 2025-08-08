import React from "react";
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import data from '@/app/dashboard/data.json'

export default function DashBoardPrev() {
  return (
    <div className=" h-full overflow-y-scroll">
      <div className="px-4 lg:px-6 py-2">
        <ChartAreaInteractive />
      </div>
      <DataTable data={data} />
    </div>
  );
}
