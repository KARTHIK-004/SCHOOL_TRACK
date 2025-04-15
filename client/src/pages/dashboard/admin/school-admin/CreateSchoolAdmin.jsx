import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import SchoolAdminForm from "@/components/Forms/Dashboard/Schools/school-admin-form";
import { toast } from "sonner";

export default function CreateSchoolAdmin() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (adminData) => {
    try {
      if (id) {
        // await updateSchoolAdmin(id, adminData);
        toast({
          title: "Success",
          description: "School admin updated successfully",
        });
      } else {
        // await createSchoolAdmin(adminData);
        toast({
          title: "Success",
          description: "School admin created successfully",
        });
      }
      // navigate('/dashboard/school-admins');
    } catch (error) {
      console.error("Error saving school admin:", error);
      toast({
        title: "Error",
        description:
          error.message || "An error occurred while saving the school admin",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container flex-1 space-y-4 p-4 md:p-8 max-w-6xl">
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Register School Admin
          </h1>
          <p className="text-muted-foreground mt-2">
            Efficiently manage school administrator accounts
          </p>
        </div>
        <Button variant="outline" asChild>
          <Link to="/dashboard/school-admins">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to School Admins
          </Link>
        </Button>
      </div>

      <div className="container mx-auto max-w-6xl">
        <Card className="mt-4 border">
          <CardContent className="p-6">
            <SchoolAdminForm editingId={id} onSubmit={handleSubmit} />
          </CardContent>
        </Card>
      </div>

      <TooltipProvider>
        <Card className="mt-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">Admin Creation Tips</CardTitle>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <HelpCircle className="h-4 w-4" />
                    <span className="sr-only">Admin creation tips</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Helpful tips for creating school admin accounts</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Use professional email addresses for admin accounts.</li>
              <li>Ensure contact information is accurate and up-to-date.</li>
              <li>
                Assign appropriate permission levels based on responsibilities.
              </li>
              <li>
                Set a strong initial password and require change on first login.
              </li>
              <li>
                Verify all credentials and certifications before account
                approval.
              </li>
            </ul>
          </CardContent>
        </Card>
      </TooltipProvider>
    </div>
  );
}
