"use client"

interface ErrorPageProps {
  params: {
    locale: string;
  }

  searchParams: {
    errorMessage: string
  }
}

export default function ErrorPage({ params, searchParams }: ErrorPageProps) {
  return (
    <div>
      <pre>
        {JSON.stringify({ params, searchParams })}
      </pre>
    </div>
  )
}