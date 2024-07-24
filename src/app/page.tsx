import TodaysClass from "@/components/component/TodaysClass";
import WeeklySchedule from "@/components/component/WeeklySchedule";


export default function Home() {
  return (
    <main className="flex-col min-h-screen items-center justify-start ">
      <div className="max-w-2xl mx-auto p-4 sm:p-6 md:p-8">
        <div className="grid gap-8">
          <TodaysClass />
          <WeeklySchedule />
        </div>
      </div>
    </main>
  );
}
