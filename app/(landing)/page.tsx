import type { LucideIcon } from "lucide-react";
import {
  BatteryChargingIcon,
  GithubIcon,
  LayoutIcon,
  MessageCircleIcon,
  PersonStandingIcon,
  RocketIcon,
  StarsIcon,
  TimerIcon,
} from "lucide-react";
import Link from "next/link";
import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Rain } from "./page.client";
import {
  EarthIcon,
} from "./icons";
import Navbar from "@/components/navbar";
import { currentUser } from "@/lib/auth";
import { MovingCards } from "@/components/moving-cards";
import Image from "next/image";

export default async function HomePage() {
  const user = await currentUser();

  return (
    <>
      <Navbar />
      <div
        className="absolute inset-x-0 top-[200px] h-[250px] max-md:hidden"
        style={{
          background:
            "repeating-linear-gradient(to right, hsl(var(--border)), transparent 1px, transparent 50px), repeating-linear-gradient(to bottom, hsl(var(--border)), transparent 1px, transparent 50px)",
        }}
      />
      <main className="container mb-[80px] top-[70px] relative max-w-[1100px] px-2 py-4 lg:py-16">
        <div
          style={{
            background:
              "repeating-linear-gradient(to bottom, transparent, hsl(var(--secondary)/.2) 500px, transparent 1000px)",
          }}
        >
          <div className="relative">
            <StarsIcon
              className="absolute -left-2 -top-2 z-10 size-4 xl:scale-[200%]"
              stroke="none"
              fill="currentColor"
            />
            <StarsIcon
              className="absolute -bottom-2 -right-2 z-10 size-4 xl:scale-[200%]"
              stroke="none"
              fill="currentColor"
            />
            <Hero />
          </div>
          <div className="container border-x border-t py-24">
            <h2 className="text-center text-2xl font-semibold sm:text-3xl">
              Start instantly.
              <br />
              Browse through trending topics.
            </h2>
          </div>
          <Highlights />
          <div className="container relative overflow-hidden border-x border-t py-16 sm:py-32">
            <h2 className="text-center text-2xl font-semibold sm:text-3xl">
              For Programmers.
              <br />
              Made by Programmers.
            </h2>
            <Rain
              width={1000}
              height={500}
              className="absolute inset-0 z-[-1] h-full w-full mix-blend-difference"
            />
          </div>
          <Features />
          <div className="grid grid-cols-1 border-b border-r md:grid-cols-2 lg:grid-cols-3">
            <div className="relative flex flex-col overflow-hidden border-l border-t px-8 py-14">
              <Rain
                width={500}
                height={1000}
                className="absolute inset-0 z-[-1] mix-blend-difference"
              />
              <h2 className="text-3xl font-bold">
                Get started now.
              </h2>
              <ul className="my-8 flex flex-col gap-6">
                <li>
                  <span className="font-medium">
                    <BatteryChargingIcon className="inline" /> Battery
                    guaranteed.
                  </span>
                  <span className="ml-2 text-muted-foreground">
                    Actively maintained, open for contributions.
                  </span>
                </li>
                <li>
                  <span className="font-medium">
                    <GithubIcon className="inline" /> Fully open-source.
                  </span>
                  <span className="ml-2 text-muted-foreground">
                    Open source, available on Github.
                  </span>
                </li>
                <li>
                  <span className="font-medium">
                    <TimerIcon className="inline" /> Within seconds.
                  </span>
                  <span className="ml-2 text-muted-foreground">
                    Get started within seconds.
                  </span>
                </li>
              </ul>
              <div className="w-full">
                <Link href={!user ? "/auth/register" : "/feed"} className={cn(buttonVariants(), "w-full")}>
                  Get Started
                </Link>
              </div>
            </div>
            <Integration className="border-t lg:col-span-2" />
          </div>
        </div>
      </main>

      <footer className="w-full border-t justify-center">
        <div className="container flex flex-col py-4 gap-4 px-4 items-center justify-center text-center md:flex-row md:gap-6 md:px-6 lg:py-8 xl:max-w-6xl xl:gap-8 xl:justify-between">
          <div className="flex flex-col gap-2 text-sm md:items-center md:gap-4 md:order-1 md:text-base lg:order-0">
            <Link
              className="font-semibold underline hover:none"
              href="/terms-of-service"
            >
              Terms of Service
            </Link>
            <Link className="underline hover:none" href="/privacy-policy">
              Privacy Policy
            </Link>
          </div>
          <div className="flex items-center justify-center space-x-4 md:order-0">
            <Link className="text-2xl font-bold sr-only" href="/">
              DevHub
            </Link>
            <Image
              src="/logo-base-1200x1200.png"
              alt="DevHub Logo"
              width={50}
              height={50}
              className="block dark:hidden"
            />
            <Image
              src="/logo-white-1200x1200.png"
              alt="DevHub Logo"
              width={50}
              height={50}
              className="dark:block hidden"
            />
          </div>
          <div className="flex flex-col gap-2 text-sm md:items-center md:gap-4 md:order-1 md:text-base lg:order-0">
            <p className="text-gray-500 dark:text-gray-400">© 2024 DevHub Inc.</p>
          </div>
        </div>
      </footer>

    </>
  );
}

function Integration({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>): JSX.Element {
  return (
    <div
      className={cn(
        "relative grid grid-cols-1 *:border-l *:border-t *:p-6 lg:grid-cols-3",
        className
      )}
      {...props}
    >
      <div className="col-span-full h-[200px] overflow-hidden bg-gradient-to-b from-primary/10">
        <div
          className="mx-auto h-[500px] w-[500px] rounded-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 0% 100%, transparent 60%, hsl(var(--primary)))",
          }}
        />
      </div>
    </div>
  );
}

function Highlights(): JSX.Element {
  return (
    <div className="grid grid-cols-1 border-r md:grid-cols-2 lg:grid-cols-3">
      <Highlight icon={RocketIcon} heading="Light and Fast.">
        Full powered application with Next.js App Router.
      </Highlight>
      <Highlight icon={LayoutIcon} heading="Accessibility & UX first.">
        An easy-to-use platform with great accessibility and a simple, intuitive interface.
      </Highlight>
      <Highlight icon={PersonStandingIcon} heading="Profile Personalization.">
        Craft and set up your distinctive and fully customizable In-App Identity.
      </Highlight>
      <div className="col-span-full flex flex-col items-center border-l border-t px-6 py-12 text-center">
        <h3 className="text-2xl font-bold">Share With the World.</h3>
        <p className="mb-2 text-muted-foreground">
          Effortlessly share to the global community, simplifying the process of sharing your posts with ease.
        </p>

        <div
          className="mt-14 w-full"
          style={{
            backgroundImage: [
              "repeating-linear-gradient(to right,hsl(var(--primary)/.1),hsl(var(--primary)/.1) 1px,transparent 1px,transparent 40px)",
              "repeating-linear-gradient(to bottom,hsl(var(--primary)/.1),hsl(var(--primary)/.1) 1px,transparent 1px,transparent 40px)",
            ].join(","),
          }}
        >
          <EarthIcon className="-my-8 mx-auto h-auto w-60" />
        </div>
      </div>
    </div>
  );
}

function Highlight({
  icon: Icon,
  heading,
  children,
}: {
  icon: LucideIcon;
  heading: ReactNode;
  children: ReactNode;
}): JSX.Element {
  return (
    <div className="border-l border-t px-6 py-12">
      <div className="mb-4 flex flex-row items-center gap-2 text-muted-foreground">
        <Icon className="size-4" />
        <h2 className="text-sm font-medium">{heading}</h2>
      </div>
      <span className="font-medium">{children}</span>
    </div>
  );
}

async function Hero() {
  const user = await currentUser();

  return (
    <div className="container relative z-[2] flex flex-col items-center overflow-hidden border-x border-t bg-background px-6 pt-12 text-center md:pt-20">
      <h1 className="mb-6 text-4xl font-semibold md:text-5xl">
        Connect With Developers.
      </h1>
      <p className="mb-6 h-fit p-2 text-muted-foreground md:max-w-[80%] md:text-xl">
        DevHub is the platform for connecting with{" "}
        <b className="font-medium text-foreground">
          other Developers around the World
        </b>
        . Your ultimate destination for code exploration, DevHub transforms the
        way developers connect, code, and conquer challenges together.
      </p>
      <div className="inline-flex items-center gap-3">
        <Link
          href={!user ? "/auth/register" : "/feed"}
          className={cn(
            buttonVariants({ size: "lg", className: "rounded-full" })
          )}
        >
          Get Started
        </Link>
        {!user ? (
          <a
            href="/auth/login"
            className={cn(
              buttonVariants({
                size: "lg",
                variant: "outline",
                className: "rounded-full bg-background",
              })
            )}
          >
            Log In
          </a>
        ) : null}
      </div>
      <div
        className="mb-[-150px] mt-16 size-[300px] rounded-full bg-background md:mb-[-250px] md:size-[500px]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 0%, transparent 40%, hsl(var(--primary)))",
        }}
      />
      <div
        className="absolute inset-0 z-[-1] duration-1000 animate-in fade-in"
        style={{
          backgroundImage: [
            "radial-gradient(ellipse at top, transparent 60%, hsl(var(--primary) / 0.2))",
            "linear-gradient(to bottom, transparent 30%, hsl(var(--primary) / 0.2))",
            "linear-gradient(to bottom, hsl(var(--background)) 40%, transparent)",
            "repeating-linear-gradient(45deg, transparent,transparent 60px, hsl(var(--primary)) 61px, transparent 62px)",
          ].join(", "),
        }}
      />
    </div>
  );
}

function Features(): JSX.Element {
  const testimonials = [
    {
      content: "This looks so clean, love it!",
      name: "@_lic",
    },
    {
      content: "Nice, simple and sleek. I like it!",
      name: "@pfara",
    },
    {
      content: "I love it! It's clean and simple while still uses best practices, looks great and has great functionality!",
      name: "Annonymous",
    },
    {
      content: "The website is so clean and good. Surprising that it was just made by one person.",
      name: "@avinashboi",
    }
  ]

  return (
    <div className="border-r text-center">
      <Feature
        icon={MessageCircleIcon}
        subheading="Loved by developers"
        heading="Heard of our users."
        description="We are making it better."
      >
        <MovingCards
          items={testimonials}
          direction="left"
          speed="fast"
        />
      </Feature>
    </div>
  );
}

function Feature({
  className,
  icon: Icon,
  heading,
  subheading,
  description,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  icon: LucideIcon;
  subheading: ReactNode;
  heading: ReactNode;
  description: ReactNode;
}): JSX.Element {
  return (
    <div
      className={cn("border-l border-t px-6 py-12 md:py-16", className)}
      {...props}
    >
      <div className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground">
        <Icon className="size-4" />
        <p>{subheading}</p>
      </div>
      <h2 className="mb-2 text-lg font-semibold">{heading}</h2>
      <p className="text-muted-foreground">{description}</p>

      {props.children}
    </div>
  );
}
