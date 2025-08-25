"use client";

import Image from 'next/image';
import { useState } from 'react';

const ASSET = 'https://cdn.dribbble.com/userupload/33375136/file/original-2a525343c53e467f479c7167c03512c7.png?resize=2048x1536&vertical=center';

export default function Page() {
  const [power, setPower] = useState(true);
  const [intensity, setIntensity] = useState(60);

  return (
    <main className="min-h-dvh flex flex-col items-center">
      <header className="w-full max-w-6xl px-6 sm:px-10 pt-10">
        <div className="neu-surface rounded-neumorph px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="badge rounded-2xl px-3 py-1 text-xs font-semibold tracking-wide">SKEUO</div>
            <h1 className="text-lg sm:text-2xl font-semibold">Soft UI Studio</h1>
          </div>
          <nav className="hidden sm:flex items-center gap-3">
            <button className="button-surface neu-pressable rounded-xl px-4 py-2 text-sm">Library</button>
            <button className="button-surface neu-pressable rounded-xl px-4 py-2 text-sm">Docs</button>
            <button className="button-surface neu-pressable rounded-xl px-4 py-2 text-sm">Download</button>
          </nav>
        </div>
      </header>

      <section className="w-full max-w-6xl px-6 sm:px-10 mt-10 grid md:grid-cols-2 gap-8 items-stretch">
        <div className="card-surface rounded-[28px] p-5 sm:p-7 flex flex-col gap-5">
          <div className="rounded-2xl overflow-hidden neu-inset">
            <Image
              src={ASSET}
              alt="Skeuomorphic gadget mockup"
              width={1280}
              height={960}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="badge rounded-xl px-3 py-1 text-xs">High-Fidelity</span>
            <span className="badge rounded-xl px-3 py-1 text-xs">Tactile</span>
            <span className="badge rounded-xl px-3 py-1 text-xs">Embossed</span>
            <span className="badge rounded-xl px-3 py-1 text-xs">Neumorphic</span>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="neu-surface rounded-[28px] p-6 sm:p-8">
            <h2 className="text-xl font-semibold mb-4">Control Panel</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="text-sm opacity-80">Power</label>
                <div
                  className="toggle relative w-28 h-14 rounded-full p-2 cursor-pointer select-none"
                  onClick={() => setPower(p => !p)}
                  aria-label="Toggle power"
                >
                  <div
                    className={`toggle-thumb absolute top-1 left-1 h-12 w-12 rounded-full transition-all duration-200 ${power ? 'translate-x-14' : ''}`}
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-sm opacity-80">Intensity</label>
                <div className="input-surface rounded-2xl p-4">
                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={intensity}
                    onChange={(e) => setIntensity(Number(e.target.value))}
                    className="w-full appearance-none bg-transparent"
                    aria-label="Intensity slider"
                  />
                  <div className="mt-3 flex items-center justify-between text-sm">
                    <span className="badge rounded-lg px-2 py-1">{intensity}%</span>
                    <button className="button-surface neu-pressable rounded-xl px-4 py-2 text-sm" onClick={() => setIntensity(60)}>Reset</button>
                  </div>
                </div>
              </div>
              <div className="space-y-3 sm:col-span-2">
                <label className="text-sm opacity-80">Mode</label>
                <div className="grid grid-cols-3 gap-3">
                  {['Studio', 'Classic', 'Luxe'].map((m) => (
                    <button key={m} className="button-surface neu-pressable rounded-2xl py-3 text-sm font-medium">
                      {m}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="neu-surface rounded-[28px] p-6 sm:p-8 flex items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold">Skeuomorphic Aesthetic</h3>
              <p className="text-sm opacity-80 max-w-prose mt-1">Soft shadows, tactile controls, and layered gradients create a familiar, touchable interface that bridges physical metaphors with modern UI.</p>
            </div>
            <button className="button-surface neu-pressable rounded-2xl px-5 py-3 font-medium text-sm">Get Started</button>
          </div>
        </div>
      </section>

      <footer className="w-full max-w-6xl px-6 sm:px-10 mt-10 mb-12">
        <div className="neu-surface rounded-neumorph px-6 py-4 text-sm flex items-center justify-between">
          <span>© {new Date().getFullYear()} Soft UI Studio</span>
          <a
            href={ASSET}
            target="_blank"
            rel="noreferrer"
            className="underline opacity-70 hover:opacity-100"
          >Asset Source</a>
        </div>
      </footer>
    </main>
  );
}
