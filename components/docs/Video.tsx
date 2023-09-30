import type { ReactNode } from 'react'

type VideoProps = {
  src: string
  children: ReactNode
  controls?: boolean
  muted?: boolean
}

export function Video({ children, src, controls = true, muted = true }: VideoProps) {

  return (
    <div className="mt-4">
      {children}

      <div className="rounded-sm dark:bg-stone-800 p-1">
        <video src={src} controls={controls} muted={muted} className="rounded-sm dark:bg-slate-200" style={{ maxHeight: "640px", minHeight: "200px" }}>
        </video>
      </div>
    </div>
  );
}
