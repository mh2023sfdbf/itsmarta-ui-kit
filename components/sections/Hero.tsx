import Container from "../layout/Container";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 py-20 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Build beautiful websites with{" "}
            <span className="text-primary-600">premium templates</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Hand-crafted Tailwind CSS components and sections. Copy, paste, and ship faster.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button className={cn(
              "rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-sm",
              "hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600",
              "transition-colors"
            )}>
              Get started
            </button>
            <button className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary-600 transition-colors">
              View components <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

