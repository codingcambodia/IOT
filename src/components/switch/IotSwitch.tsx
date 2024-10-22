
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { useState } from "react";


const IotSwitch = () => {
  const [state, setState] = useState<boolean>(false);

  return <Card className="w-[250px]">
    <CardHeader>
      <CardTitle className="text-xl font-[600]">Living Room</CardTitle>
      <CardDescription>Deploy your new project in one-click.</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="flex items-center justify-between">
        <Switch checked={state} onCheckedChange={() => setState(!state)} id="airplane-mode" />
        <Label htmlFor="airplane-mode" className="text-lg font-bold">{state ? "ON" : "OFF"}</Label>
      </div>
    </CardContent>
  </Card>
};

export default IotSwitch;
