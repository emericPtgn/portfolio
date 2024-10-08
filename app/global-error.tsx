"use client";

import Error from "next/error";
import { useEffect } from "react";

export default function GlobalError({ error }: { error: Error }) {

  return (
    <html>
      <body>
        {/* Your Error component here... */}
      </body>
    </html>
  );
}