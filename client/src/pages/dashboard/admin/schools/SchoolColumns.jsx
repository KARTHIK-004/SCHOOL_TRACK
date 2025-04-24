import DateColumn from "@/components/DataTable/TableColumns/DateColumn";
import SortableColumn from "@/components/DataTable/TableColumns/SortableColumn";
import ActionColumn from "@/components/DataTable/TableColumns/ActionColumn";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useSchool } from "@/context/SchoolContext";

export const SchoolColumns = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <SortableColumn column={column} title="School Name" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex items-center space-x-3">
          <Avatar className="h-10 w-10">
            <AvatarImage
              src={row.original.logoUrl}
              alt={`${row.getValue("name")} logo`}
            />
            <AvatarFallback>{row.getValue("name").charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium uppercase">{row.getValue("name")}</div>
            <div className="text-sm text-muted-foreground capitalize">
              {row.original.type}
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
    accessorKey: "location",
    header: ({ column }) => <SortableColumn column={column} title="Location" />,
    cell: ({ row }) => {
      return (
        <div className="space-y-1">
          <div className="text-sm">{row.original.country}</div>
          <div className="text-xs text-muted-foreground">
            {row.original.city}, {row.original.state}
          </div>
        </div>
      );
    },
    enableSorting: true,
  },
  {
    accessorKey: "studentsCount",
    header: ({ column }) => <SortableColumn column={column} title="Students" />,
    cell: ({ row }) => (
      <div className="text-center">{row.original.numberOfStudents}</div>
    ),
    enableSorting: true,
  },
  {
    accessorKey: "establishedDate",
    header: "Established",
    cell: ({ row }) => <DateColumn row={row} accessorKey="establishedDate" />,
    enableSorting: true,
    sortingFn: "datetime",
  },
  {
    accessorKey: "view",
    header: "View",
    cell: ({ row }) => <Button variant="underline">View</Button>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const school = row.original;
      const { removeSchool } = useSchool();

      return (
        <ActionColumn
          model="school"
          editEndpoint={`/dashboard/schools/edit/${school._id}`}
          id={school._id}
          onDelete={async () => {
            console.log("Deleting school with ID:", school._id);
            await removeSchool(school._id);
            // Force a page reload to refresh the data
            window.location.reload();
          }}
          aria-label={`Actions for ${school.name}`}
        />
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
];
