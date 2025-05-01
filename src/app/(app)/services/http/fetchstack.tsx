import { Suspense } from "react";
import TechSlider from "../components/TechSlider";
import GetStacks from "@/app/api/stacks/get_stacks";

export default async function GetAllStacks() {
  const servicedata = await GetStacks();
  return (
    <Suspense fallback={<div>Loading</div>}>
      <TechSlider servicedata={servicedata} />;
    </Suspense>
  );
}
