import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";

function TypingText({
  words = [ "Attention !","Funny", "Joke", "Incoming"],
  typingSpeed = 150,
  deleteSpeed = 100,
  delayBetweenWords = 1000,
}: {
  words?: string[];
  typingSpeed?: number;
  deleteSpeed?: number;
  delayBetweenWords?: number;
}) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const controls = useAnimationControls();

  useEffect(() => {
    const word = words[currentWordIndex];

    if (isDeleting) {
      if (currentText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        return;
      }

      const timer = setTimeout(() => {
        setCurrentText(word.substring(0, currentText.length - 1));
      }, deleteSpeed);
      return () => clearTimeout(timer);
    }

    if (currentText === word) {
      const timer = setTimeout(() => {
        setIsDeleting(true);
      }, delayBetweenWords);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setCurrentText(word.substring(0, currentText.length + 1));
    }, typingSpeed);
    return () => clearTimeout(timer);
  }, [
    currentText,
    currentWordIndex,
    isDeleting,
    words,
    typingSpeed,
    deleteSpeed,
    delayBetweenWords,
  ]);

  useEffect(() => {
    controls.start({
      opacity: [0.2, 1],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse",
      },
    });
  }, [controls]);

  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-900">
      <div className="text-4xl font-mono text-white">
        {currentText}
        <motion.span animate={controls}>|</motion.span>
      </div>
    </div>
  );
}

export default function TypingAnimatedText() {
  return <TypingText />;
}
