import dynamic from "next/dynamic";
import Hero from "@/components/Hero";

// Code-split below-the-fold sections — they don't block initial render
const Features = dynamic(() => import("@/components/Features"), { ssr: true });
const Services = dynamic(() => import("@/components/Services"), { ssr: true });

export const metadata = {
  title: "Apis Nandi Insurance Brokers | Protection with Precision",
  description: "Comprehensive risk and insurance solutions tailored for businesses.",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Hero />
      <Features />
      <Services />
    </main>
  );
}
