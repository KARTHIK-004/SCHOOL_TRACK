import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/context/AuthContext";

export default function WelcomeBanner() {
  const { user } = useAuth();
  if (!user) return null;

  return (
    <Card className="border shadow-sm  w-full">
      <CardContent className="flex items-center gap-4 px-4">
        <Avatar className="h-12 w-12 bg-primary-foreground/20 text-secondary">
          <AvatarImage src={user?.logo} alt="profil" />
          <AvatarFallback className="bg-primary">
            <User className="h-6 w-6" />
          </AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-2xl font-bold">Welcome back, {user?.name}!</h1>
          <p className="text-muted-foreground">Have a Good day at work</p>
        </div>
      </CardContent>
    </Card>
  );
}
