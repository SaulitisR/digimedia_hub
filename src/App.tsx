import { useState } from 'react'

const views = ['Overview', 'Projects', 'Library'] as const
type View = (typeof views)[number]

function App() {
  const [activeView, setActiveView] = useState<View>('Overview')

  return (
    <div className="min-h-screen bg-[#f7f6f0] text-[#171717]">
      <header className="border-b border-[#333] bg-[#171717]">
        <div className="mx-auto flex min-h-[76px] max-w-[1440px] flex-wrap items-center gap-x-10 px-6 sm:px-10 lg:px-14">
          <a href="/" className="flex shrink-0 items-center gap-2.5 py-5 text-[18px] font-bold tracking-[-0.06em] text-white no-underline" aria-label="DigiMedia Hub home">
            <span className="flex h-9 w-9 items-center justify-center rounded-[11px] bg-[#facc15] text-[#171717]" aria-hidden="true">
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none"><path d="M4 5.5h5.5V11H4zM11.5 5.5H17V11h-5.5zM4 13h5.5v3H4zM11.5 13H17v3h-5.5z" fill="currentColor" /></svg>
            </span>
            digimedia<span className="-ml-2 text-[#facc15]">hub</span>
          </a>
          <nav aria-label="Main navigation" className="flex h-[76px] items-stretch gap-7 overflow-x-auto max-sm:order-last max-sm:h-12 max-sm:w-full">
            {views.map((view) => (
              <button key={view} type="button" onClick={() => setActiveView(view)} aria-current={activeView === view ? 'page' : undefined} className={`relative cursor-pointer whitespace-nowrap border-0 bg-transparent px-0 text-[13px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#facc15] ${activeView === view ? 'text-[#facc15] after:absolute after:inset-x-0 after:bottom-0 after:h-[3px] after:rounded-t-full after:bg-[#facc15]' : 'text-[#aaa] hover:text-white'}`}>
                {view}
              </button>
            ))}
          </nav>
          <button type="button" className="ml-auto rounded-lg bg-[#facc15] px-5 py-2.5 text-[13px] font-bold text-[#171717] transition-colors hover:bg-[#fde047] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#facc15]">Log in</button>
        </div>
      </header>

      <main className="mx-auto max-w-[1440px] px-6 py-12 sm:px-10 sm:py-16 lg:px-14">
        <div className="mb-8">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#817b68]">Workspace / {activeView}</p>
          <h1 className="m-0 text-[30px] font-semibold tracking-[-0.045em] text-[#171717] sm:text-[34px]">{activeView}</h1>
          <p className="mt-2 text-sm text-[#777366]">Your space for everything in one place.</p>
        </div>
        <section aria-label={`${activeView} placeholder`} className="flex min-h-[420px] flex-col items-center justify-center rounded-xl border border-dashed border-[#d9d4bf] bg-white px-6 py-16 text-center">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff5c2] text-[#8a6d00]" aria-hidden="true">
            <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3.5" y="4.5" width="17" height="15" rx="2"/><path d="M3.5 9h17M8 4.5V9"/></svg>
          </div>
          <h2 className="text-base font-semibold tracking-[-0.02em] text-[#292929]">Your {activeView.toLowerCase()} space</h2>
          <p className="mt-2 max-w-xs text-sm leading-6 text-[#777366]">This is a placeholder for your {activeView.toLowerCase()} view. More to come soon.</p>
        </section>
        <p className="mt-6 text-xs text-[#817b68]">DigiMedia Hub <span className="mx-2">·</span> Your workspace</p>
      </main>
    </div>
  )
}

export default App
