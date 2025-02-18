"use client";
import { useEffect, useRef } from "react";
import Instafeed from "instafeed.js";

export default function InstagramFeed() {
    const feedRef = useRef(null);
    const accessToken = "IGAAY9z2GUNzFBZAE84Y3l3cXFhX3h1d0QwVmY4UGhzZAUdTNVBSVlBGc2ZAPZAEZASRmNjNGhBTVp6QUFUZAUFYay1odW9LcVlUdzZAXQlVCVmRzMWdhd3FZAbUo3ejRuZAFdmM1RZAMTRWTE96OEVVNk5oY0NiOFJGdlY5LXp2cmJ0dGIzNAZDZD"; // Sostituisci con il tuo token

    useEffect(() => {
        const feed = new Instafeed({
            accessToken,
            target: feedRef.current,
            limit: 9,
            template: "", // Gestiamo l'output nel callback success
            success: function (response) {
                let output = "";
                response.data.forEach((item) => {
                    if (item.media_type === "VIDEO") {
                        output += `
              <a href="${item.permalink}" target="_blank" class="border-2 border-primary block">
                <div class="relative aspect-square flex items-center justify-center overflow-hidden">
                  <video autoplay muted loop playsinline class="w-full h-full object-cover">
                    <source src="${item.media_url}" type="video/mp4">
                  </video>
                </div>
              </a>
            `;
                    } else {
                        output += `
              <a href="${item.permalink}" target="_blank" class="border-2 border-primary block">
                <div class="relative aspect-square flex items-center justify-center overflow-hidden">
                  <img src="${item.media_url}" alt="${item.caption || ""}" class="w-full h-full object-cover object-top" />
                </div>
              </a>
            `;
                    }
                });
                if (feedRef.current) {
                    feedRef.current.innerHTML = output;
                }
            },
            error: function (err) {
                console.error("Instafeed error:", err);
            },
        });
        feed.run();
    }, [accessToken]);

    return <div ref={feedRef} className="grid grid-cols-2 md:grid-cols-3 gap-4 py-10"></div>;
}
