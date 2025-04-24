import React, { useState, useEffect } from "react";
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

import SchoolForm from "@/components/Forms/Dashboard/Schools/school-form";
import { toast } from "sonner";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useSchool } from "@/context/SchoolContext";

export default function CreateSchool() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [schoolData, setSchoolData] = useState(null);
  const { fetchSchoolById, isLoading } = useSchool();

  useEffect(() => {
    if (id) {
      const loadSchoolData = async () => {
        try {
          const data = await fetchSchoolById(id);
          setSchoolData(data);
        } catch (error) {
          toast.error("Error loading school data", {
            description: "Could not load school details. Please try again.",
          });
          navigate("/dashboard/schools");
        }
      };

      loadSchoolData();
    }
  }, [id, fetchSchoolById, navigate]);

  return (
    <div className="flex container mx-auto">
      {/* Main Content */}
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex items-center justify-between">
          <div className="flex flex-col space-y-2 ">
            <h2 className="text-2xl font-bold tracking-tight">
              Register School
            </h2>
            <div className="text-muted-foreground">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/dashboard/schools">
                      School Directory
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>
                      {id ? "Edit School" : "Create School"}
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/dashboard/schools">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4" />
                Back to Schools
              </Button>
            </Link>
          </div>
        </div>

        <SchoolForm editingId={id} initialData={schoolData} />

        <TooltipProvider>
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">
                  School Registration Tips
                </CardTitle>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <HelpCircle className="h-4 w-4" />
                      <span className="sr-only">School registration tips</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Helpful tips for registering schools in the system</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Ensure the school name matches official registration
                  documents.
                </li>
                <li>Provide accurate contact information for the school.</li>
                <li>Upload clear images of the school logo and campus.</li>
                <li>
                  Include all relevant accreditation and affiliation details.
                </li>
                <li>Verify the school address and location information.</li>
              </ul>
            </CardContent>
          </Card>
        </TooltipProvider>
      </main>
    </div>
  );
}
