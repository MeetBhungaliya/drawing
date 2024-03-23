import Chat from "@/app/components/Chat";
import Drawing from "@/app/components/Drawing";
import Sidebar from "@/app/components/Sidebar.user";

const page = () => {
  return (
    <section className="w-dvw h-dvh bg-blue-50">
      <div className="p-10 h-full flex gap-x-1">
        <Sidebar />
        <Drawing />
        <Chat />
      </div>
    </section>
  );
};

export default page;
