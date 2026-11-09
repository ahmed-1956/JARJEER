import { createElement } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
      return createElement(
            "div",
            {
                  className:
                        "flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-4 text-center",
            },
            createElement(
                  "div",
                  {
                        className:
                              "flex size-16 items-center justify-center overflow-hidden rounded-2xl bg-primary",
                  },
                  createElement(Image, {
                        src: "/icon.svg",
                        alt: "JARJEER",
                        width: 64,
                        height: 64,
                        className: "size-full object-contain",
                  }),
            ),
            createElement(
                  "div",
                  { className: "space-y-2" },
                  createElement("h1", { className: "text-4xl font-bold tabular-nums" }, "404"),
                  createElement(
                        "p",
                        { className: "text-muted-foreground" },
                        "This page doesn\u2019t exist.",
                  ),
            ),
            createElement(
                  Button,
                  { render: createElement(Link, { href: "/dashboard" }) },
                  "Back to Dashboard",
            ),
      )
}