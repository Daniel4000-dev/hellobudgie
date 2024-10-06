"use client";

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    useReactTable,
} from "@tanstack/react-table";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
// import { Button } from "@/components/ui/button";
import { Key } from "react";
import Button from "@/components/button";

interface CustomerSupportTableProps<TData, TValue> {
    columns: ColumnDef<TValue, TValue>[]
    data: TData[]
}


const customCellRenderer = (cell: { getValue: (arg0: string) => any; column: { id: string; }; }) => {
  const orderId = cell.getValue('orderId');
  const productName = cell.getValue('productName');
  const price = cell.getValue('price');
  const quantity = cell.getValue('quantity');
  const date = cell.getValue('date');

  if((cell.column.id) === "orderId") {
    return (
      <div>
        <div className='text-xs text-black'>{orderId}</div>
      </div>
    );
  } else if((cell.column.id) === "productName") {
    return (
      <div className=" overflow-hidden text-overflow-ellipsis">
      <h2 className='text-sm line-clamp-1'>{productName}</h2>
      </div>
    );
  }else if((cell.column.id) === "price")  {
    return (
      <div className={`flex justify-start w[58px]`}>{price}</div>
    )
  } else if((cell.column.id) === "quantity")  {
    return (
      <div className={`flex justify-start w[58px]`}>{quantity}</div>
    )
  } else {
    return date;
  }
};

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}
export function DataTable<TData, TValue>({
    columns,
    data,
  }: DataTableProps<TData, TValue>) {
    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
       getPaginationRowModel: getPaginationRowModel(),
      initialState: {
        pagination: {
            "pageIndex": 0,
            "pageSize": 6,
        }
      },
    })

    return (
      <div className="rounded-md border-none">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup: { id: Key | null | undefined; headers: any[]; }) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header: { id: Key | null | undefined; isPlaceholder: any; column: { columnDef: { header: any; }; }; getContext: () => any; }) => {
                  return (
                    <TableHead className='text-black' key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row: { id: Key | null | undefined; getIsSelected: () => any; getVisibleCells: () => any[]; }) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell: { id: Key | null | undefined; getValue: (arg0: string) => any; column: { id: string } }) => (
                    <TableCell key={cell.id}>
                      {customCellRenderer(cell)}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <div className="flex items-center justify-end space-x-2 py-4">
      <div className="flex-1 text-sm text-mutedforeground">
       Page {table.getState().pagination.pageIndex + 1} of{" "}
        {table.getPageCount()}
      </div>
      <div className="space-x-2">
        <Button
          className="bg-white text-black border-[1px] border-[#E8903D] p-1"
          title="Previous"
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          className="bg-white text-black border-[1px] border-[#E8903D] p-1 pr-5 pl-5"
          title="Next"
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
      </div>
    )
  }