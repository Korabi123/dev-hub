"use client";

export default function GoogleTagManagerNoScript() {
  return (
    <>
      <noscript>
        {/* @ts-ignore */}
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WLB5J8CH"height="0" width="0" style="display:none;visibility:hidden"></iframe>
      </noscript>
    </>
  )
}