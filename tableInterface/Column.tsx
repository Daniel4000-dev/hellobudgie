
import { ColumnDef } from "@tanstack/react-table";
import { OrdersColumnConfig } from "@/tableColumnConfig/ColumnConfig";

const createColumnsFromConfig = (config: any[]) => config.map((c: { id: any; header: any; }) => ({
  accessorKey: c.id,
  header: c.header,
  cell: (info: { getValue: () => any; }) => String(info.getValue()),
}));

const columns = createColumnsFromConfig(OrdersColumnConfig);

export { columns };
