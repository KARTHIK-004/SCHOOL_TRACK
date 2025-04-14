import DateColumn from "@/components/DataTable/TableColumns/DateColumn";
import SortableColumn from "@/components/DataTable/TableColumns/SortableColumn";
import ActionColumn from "@/components/DataTable/TableColumns/ActionColumn";
import ContactCard from "./ContactCard";

export const ContactColumns = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <SortableColumn column={column} title="Full Name" />
    ),
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "email",
    header: ({ column }) => <SortableColumn column={column} title="Email" />,
    enableSorting: true,
    meta: {
      className: "max-w-[180px] truncate",
    },
  },
  {
    accessorKey: "phone",
    header: ({ column }) => <SortableColumn column={column} title="Phone" />,
    enableSorting: true,
  },
  {
    accessorKey: "school",
    header: ({ column }) => (
      <SortableColumn column={column} title="School Name" />
    ),
    enableSorting: true,
    meta: {
      className: "max-w-[220px] truncate",
    },
  },
  {
    accessorKey: "createdAt",
    header: "Date Created",
    cell: ({ row }) => <DateColumn row={row} accessorKey="createdAt" />,
    enableSorting: true,
    sortingFn: "datetime",
  },
  {
    accessorKey: "view",
    header: "",
    cell: ({ row }) => <ContactCard contact={row.original} />,
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const contact = row.original;
      return (
        <ActionColumn
          row={row}
          model="contact"
          editEndpoint={`/contacts/edit/${contact.id}`}
          id={contact.id}
          aria-label={`Actions for ${contact.name}`}
        />
      );
    },
    enableSorting: false,
    enableHiding: false,
    meta: {
      className: "w-[80px]",
    },
  },
];
