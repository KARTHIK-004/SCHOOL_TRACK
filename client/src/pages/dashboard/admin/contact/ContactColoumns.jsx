import DateColumn from "@/components/DataTable/TableColumns/DateColumn";
import SortableColumn from "@/components/DataTable/TableColumns/SortableColumn";
import ActionColumn from "@/components/DataTable/TableColumns/ActionColumn";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import ContactCard from "./ContactCard";
import { useContact } from "@/context/ContactContext";

export const ContactColumns = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <SortableColumn column={column} title="Full Name" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex items-center space-x-3">
          <Avatar className="h-10 w-10">
            <AvatarImage
              src={row.original.logo}
              alt={`${row.getValue("name")} logo`}
            />
            <AvatarFallback>{row.getValue("name").charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="">
            <div className="font-medium uppercase">{row.getValue("name")}</div>
            <div className="text-sm text-muted-foreground capitalize">
              {row.original.school}
            </div>
          </div>
        </div>
      );
    },
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "contact",
    header: ({ column }) => <SortableColumn column={column} title="Contact" />,
    cell: ({ row }) => {
      return (
        <div className="space-y-1">
          <div className="text-sm">{row.original.email}</div>
          <div className="text-xs text-muted-foreground">
            {row.original.phone}
          </div>
        </div>
      );
    },
    enableSorting: true,
  },
  {
    accessorKey: "country",
    header: ({ column }) => <SortableColumn column={column} title="Location" />,
    enableSorting: true,
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
    header: "View",
    cell: ({ row }) => <ContactCard contact={row.original} />,
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const contact = row.original;
      const { removeContact } = useContact();

      return (
        <ActionColumn
          model="contact"
          editEndpoint={`/dashboard/contacts/edit/${contact._id}`}
          id={contact._id}
          onDelete={async () => {
            console.log("Deleting contact with ID:", contact._id);
            await removeContact(contact._id);
            window.location.reload();
          }}
          aria-label={`Actions for ${contact.name}`}
        />
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
];
