import { Briefcase, Building2, Globe, Mail, MapPin, Phone } from "lucide-react";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function ContactCard({ contact, trigger, onEdit, onDelete }) {
  const [isOpen, setIsOpen] = useState(false);

  const infoCard = [
    { icon: Mail, label: "Email", value: contact.email },
    { icon: Phone, label: "Phone", value: contact.phone },
    { icon: Building2, label: "School", value: contact.school },
    { icon: MapPin, label: "Country", value: contact.country },
    {
      icon: Globe,
      label: "School Website",
      value: contact.website,
      isLink: true,
    },
    { icon: Briefcase, label: "Role", value: contact.role },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || <Button variant="link">View Details</Button>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-fit">
        <DialogHeader className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16 border-2 border-primary/10">
                <AvatarImage
                  src={contact.avatarUrl || "https://github.com/shadcn.png"}
                  alt={`${contact.name}'s avatar`}
                />
                <AvatarFallback className="text-2xl bg-primary/10 text-primary">
                  {contact.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <DialogTitle className="text-xl font-semibold">
                  {contact.name}
                </DialogTitle>
                <Badge className="mt-1 max-w-fit">{contact.role}</Badge>
              </div>
            </div>
          </div>
          <Separator />
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 py-4">
          {infoCard.map((card, index) => (
            <Card key={index} className="overflow-hidden border-muted">
              <CardContent className="p-3 flex items-center space-x-3">
                <div className="bg-primary/10 p-2 rounded-md">
                  <card.icon className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">
                    {card.label}
                  </p>
                  {card.isLink ? (
                    <a
                      href={`https://${card.value}`}
                      className="text-sm font-medium text-primary hover:underline"
                    >
                      {card.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium">{card.value || "—"}</p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {(onEdit || onDelete) && (
          <DialogFooter className="flex sm:justify-between gap-2">
            <div className="hidden sm:block" />
            <div className="flex gap-2 w-full sm:w-auto">
              {onDelete && (
                <Button
                  variant="outline"
                  className="w-full sm:w-auto"
                  onClick={() => {
                    setIsOpen(false);
                    onDelete(contact.id);
                  }}
                >
                  Delete
                </Button>
              )}
              {onEdit && (
                <Button
                  className="w-full sm:w-auto"
                  onClick={() => {
                    setIsOpen(false);
                    onEdit(contact);
                  }}
                >
                  Edit Contact
                </Button>
              )}
            </div>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}
