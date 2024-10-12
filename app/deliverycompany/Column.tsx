import { DeliveryCompanyColumnConfig } from "@/tableColumnConfig/ColumnConfig";
import Image from "next/image";

const createColumnsFromConfig = (config: any[]) => config.map((c) => ({
  accessorKey: c.id,
  header: c.header,
  cell: (info: { getValue: () => any; }) => {
    const value = info.getValue(); 

    if (c.id === "name") {
      if (value && value.icon && value.name) {
        return (
          <div style={{ display: "flex", alignItems: "center" }}>
            <Image
              src={value.icon.src}
              alt={value.name}
              width={40}
              height={40}
  priority
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

const columns = createColumnsFromConfig(DeliveryCompanyColumnConfig);

export { columns };
