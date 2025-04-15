import React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

import CloseButton from "@/components/FormInputs/CloseButton";
import SubmitButton from "@/components/FormInputs/SubmitButton";

export default function FormHeader({
  title,
  editingId,
  loading,
  href,
  parent,
}) {
  const navigate = useNavigate();

  function goBack() {
    navigate();
  }
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Button
          onClick={goBack}
          variant="outline"
          size="icon"
          className="h-7 w-7"
          type="button"
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Back</span>
        </Button>
        <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
          {editingId ? "Update" : "Create"} {title}
        </h1>
      </div>
      <div className="flex items-center justify-center gap-2">
        <div className="hidden md:block">
          <CloseButton href={href} parent={parent} />
        </div>
        <SubmitButton
          size={"sm"}
          title={editingId ? `Update ${title}` : `Save ${title}`}
          loading={loading}
        />
      </div>
    </div>
  );
}
