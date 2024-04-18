"use client";
import FormActivity from "@/components/Fragments/FormActivity/FormActivity";
import useCreate from "@/services/useCreate";
import { useRouter } from "next/navigation";

export default function CreateActivityPage() {
  const { create } = useCreate();
  const router = useRouter();

  const handleCreate = async (data) => {
    try {
      const res = await create("create-activity", data);
      if (res.status === 200) {
        router.push("/dashboard/activity");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container-lg mt-5">
      <div className="row py-5">
        <FormActivity onSubmit={handleCreate} />
      </div>
    </div>
  );
}
