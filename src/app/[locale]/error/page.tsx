"use client";
import { use } from "react";

interface ErrorPageProps {
  params: Promise<{
    locale: string;
  }>

  searchParams: Promise<{
    errorMessage: string
  }>
}

export default function ErrorPage(props: ErrorPageProps) {
  const searchParams = use(props.searchParams);
  const params = use(props.params);
  return (
    <div>
      <pre>
        {JSON.stringify({ params, searchParams })}
      </pre>
    </div>
  )
}