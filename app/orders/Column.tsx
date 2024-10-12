import { OrdersColumnConfig } from "@/tableColumnConfig/ColumnConfig";
import Image from "next/image";

const createColumnsFromConfig = (config: any[]) => config.map((c) => ({
  accessorKey: c.id,
  header: c.header,
  cell: (info: { getValue: () => any; }) => {
    const value = info.getValue(); 

    if (c.id === "productName") {
      if (value && value.icon && value.name) {
        return (
          <div style={{ display: "flex", alignItems: "center" }}>
            <Image
              src={value.icon.src}
              alt={value.name}
              width={50}
              height={50}
              unoptimized 
            />
            <span style={{ marginLeft: "10px" }}>{value.name}</span>
          </div>
        );
      }
      return "No product details";
    }

    return String(value);
  },
}));

const columns = createColumnsFromConfig(OrdersColumnConfig);

export { columns };
