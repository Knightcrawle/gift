import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import centerImg from "./assets/middle.jpg";
import leftImg from "./assets/left.jpg";
import rightImg from "./assets/right.jpg";
import pic1 from "./assets/lv.jpg";
import pic2 from "./assets/close.jpg";
import pic3 from "./assets/up.jpg";
import pic4 from "./assets/down.jpg";
import pic5 from "./assets/funny.jpg"; // new
import pic6 from "./assets/looks.jpg"; // new
import pic7 from "./assets/feel.jpg"; // new
import pic9 from "./assets/stay.jpg"; // new

import musicFile from "./assets/lolota.mpeg";

export default function App() {
  const [audio] = useState(new Audio(musicFile));
  const [setIsPlaying] = useState(false);
  const [started, setStarted] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const [text, setText] = useState("");
  const [textColor, setTextColor] = useState("white");

  useEffect(() => {
    audio.loop = true;
    audio.volume = 0.5;
  }, [audio]);

  // Color changing effect every 3 seconds
  useEffect(() => {
    const colors = [
      "#ffffff",
      "#ff4d88",
      "#ffd700",
      "#00ffff",
      "#ff69b4",
      "#7fff00",
    ];
    let i = 0;
    const interval = setInterval(() => {
      setTextColor(colors[i % colors.length]);
      i++;
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const fullText = `Hey My Love ❤️

From the very first moment,
you became my favorite notification,
my happiest thought, and my safest place.

This small surprise is just a tiny piece
of how special you are to me.

You are my today, my tomorrow,
and everything in between. 💕

Happy Valentine's Day, My Queen 👑

Will you keep choosing me every single day? 💍`;

  // Typing effect
  useEffect(() => {
    if (showLetter) {
      setText("");
      let i = 0;
      const interval = setInterval(() => {
        setText(fullText.slice(0, i + 1));
        i++;
        if (i === fullText.length) clearInterval(interval);
      }, 25);
      return () => clearInterval(interval);
    }
  }, [showLetter, fullText]);

  const startSurprise = () => {
    audio
      .play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch((err) => {
        console.log("Autoplay blocked:", err);
      });

    setStarted(true);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(-45deg, #ff9a9e, #fbc2eb, #a18cd1, #fad0c4)",
        backgroundSize: "400% 400%",
        animation: "gradient 10s ease infinite",
        fontFamily: "Poppins, sans-serif",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {!started ? (
        <div style={{ textAlign: "center" }}>
          <h1
            style={{
              fontFamily: "Great Vibes, cursive",
              fontSize: "3rem",
              color: "white",
              marginBottom: "30px",
            }}
          >
            I Made Something For You 💖
          </h1>
          <button
            onClick={() => {
              startSurprise();
              setStarted(true);
            }}
            style={buttonStyle()}
          >
            Click To Open Surprise
          </button>
        </div>
      ) : !showLetter ? (
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "2.5rem", color: "white", marginBottom: 30 }}>
            Ready? ❤️
          </h2>
          <button onClick={() => setShowLetter(true)} style={buttonStyle()}>
            Yes, Show Me 😌
          </button>
        </div>
      ) : (
        <div style={{ position: "relative", width: "100%", height: "100vh" }}>
          {/* Floating Images */}
          <FloatingImage src={pic1} top="10%" left="8%" rotate={-15} />
          <FloatingImage src={pic2} top="10%" left="85%" rotate={12} />
          <FloatingImage src={pic3} top="70%" left="5%" rotate={18} />
          <FloatingImage src={pic4} top="75%" left="82%" rotate={-18} />
          <FloatingImage src={leftImg} top="45%" left="10%" rotate={-10} />
          <FloatingImage src={rightImg} top="45%" left="80%" rotate={10} />

          {/* NEW Floating Images */}
          <FloatingImage src={pic5} top="18%" left="20%" rotate={5} />
          <FloatingImage src={pic6} top="60%" left="23%" rotate={-8} />
          <FloatingImage src={pic7} top="18%" left="70%" rotate={10} />
          <FloatingImage src={pic9} top="60%" left="65%" rotate={0} />

          {/* BIGGER CENTER HEART */}
          <motion.div
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            style={{
              position: "relative",
              top: "20%",
              left: "30%",
              transform: "translate(-50%, -50%)",
              width: "600px",
              height: "540px",
              zIndex: 10,
            }}
          >
            <svg
              viewBox="0 0 512 512"
              width="100%"
              height="100%"
              style={{ filter: "drop-shadow(0 0 40px #ff4d88)" }}
            >
              <defs>
                <clipPath id="heartClip">
                  <path d="M471.7 73.1c-54.5-46.4-136-38.3-186.4 13.7L256 116.7l-29.3-29.9C176.3 34.8 94.8 26.7 40.3 73.1c-62.8 53.5-66.1 149.8-9.9 207.7l193.5 199.8c12 12.4 32.5 12.4 44.5 0l193.5-199.8c56.2-57.9 52.9-154.2-9.9-207.7z" />
                </clipPath>
              </defs>

              {/* Image inside heart */}
              <image
                href={centerImg}
                width="500"
                height="700"
                clipPath="url(#heartClip)"
                preserveAspectRatio="xMidYMid slice"
              />

              {/* Heart Border */}
              <path
                d="M471.7 73.1c-54.5-46.4-136-38.3-186.4 13.7L256 116.7l-29.3-29.9C176.3 34.8 94.8 26.7 40.3 73.1c-62.8 53.5-66.1 149.8-9.9 207.7l193.5 199.8c12 12.4 32.5 12.4 44.5 0l193.5-199.8c56.2-57.9 52.9-154.2-9.9-207.7z"
                fill="none"
                stroke="#ff2e74"
                strokeWidth="28"
              />
            </svg>

            {/* TEXT INSIDE BIG HEART */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "65%",
                textAlign: "center",
                whiteSpace: "pre-line",
                fontSize: "18px",
                fontWeight: "500",
                color: textColor,
                lineHeight: "1.6",
              }}
            >
              {text}
            </div>
          </motion.div>
        </div>
      )}

      <style>
        {`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </div>
  );
}

/* Floating Image Component */
function FloatingImage({ src, top, left, rotate }) {
  return (
    <motion.img
      src={src}
      alt=""
      animate={{ y: [0, -12, 0] }}
      transition={{ repeat: Infinity, duration: 4 }}
      style={{
        position: "absolute",
        top,
        left,
        width: "130px",
        height: "160px",
        objectFit: "cover",
        borderRadius: "20px",
        boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
        transform: `rotate(${rotate}deg)`,
      }}
    />
  );
}

function buttonStyle() {
  return {
    padding: "14px 28px",
    borderRadius: "50px",
    border: "none",
    backgroundColor: "#ff2e74",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
  };
}
