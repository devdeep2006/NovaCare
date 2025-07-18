import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

/**
 * Reusable page header component with back button and title
 *
 * @param {React.ReactNode} props.icon - Icon component to display next to the title
 * @param {string} props.title - Page title
 * @param {string} props.backLink - URL to navigate back to (defaults to home)
 * @param {string} props.backLabel - Text for the back link (defaults to "Back to Home")
 */
export function PageHeader({
  icon,
  title,
  backLink = "/",
  backLabel = "Back to Home",
}) {
  return (
    <div className="flex flex-col justify-between gap-5 mb-8">
      <Link href={backLink}>
        <Button
          size="sm"
          className="mb-2 bg-white text-indigo-600 hover:bg-indigo-100 border border-indigo-200"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          {backLabel}
        </Button>
      </Link>
      <div className="flex items-end gap-2">
        {icon && (
          <div className="text-purple-500">
            {React.cloneElement(icon, {
              className: "h-12 md:h-14 w-12 md:w-14",
            })}
          </div>
        )}
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text">
          {title}
        </h1>
      </div>
    </div>
  );
}
