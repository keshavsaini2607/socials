import * as React from "react";

export default function DashboardLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <section className="bg-background h-screen text-textPrimary flex">
         <div className="flex items-center justify-center bg-custom-image bg-center w-[50vw] h-screen">
            <h1>Socials</h1>
         </div>
         <div className="flex items-center justify-center h-full w-[50vw]">
            <div className="glass-container w-[30vw] h-auto">{children}</div>
         </div>
      </section>
   );
}
