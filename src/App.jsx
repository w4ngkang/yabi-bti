import React, { useEffect, useState } from "react";
import { questions } from "./questions";
import { PERSONALITY_ORDER, resultMap } from "./results";

// 修改点：计分逻辑改为“按选项 scoreMap 给人格加分”，并列取固定顺序中更靠前的人格
function computeResult(answers) {
  const scoreBoard = PERSONALITY_ORDER.reduce((acc, key) => {
    acc[key] = 0;
    return acc;
  }, {});

  questions.forEach((question, questionIndex) => {
    const selectedOptionIndex = answers[questionIndex];
    if (selectedOptionIndex === null || selectedOptionIndex === undefined) return;
    const selectedOption = question.options[selectedOptionIndex];
    if (!selectedOption) return;
    Object.entries(selectedOption.scoreMap).forEach(([key, score]) => {
      if (scoreBoard[key] !== undefined) {
        scoreBoard[key] += score;
      }
    });
  });

  let bestKey = PERSONALITY_ORDER[0];
  let bestScore = scoreBoard[bestKey];
  PERSONALITY_ORDER.forEach((key) => {
    if (scoreBoard[key] > bestScore) {
      bestKey = key;
      bestScore = scoreBoard[key];
    }
  });

  return { resultKey: bestKey, scoreBoard, bestScore };
}

function StartScreen({ onStart }) {
  return (
    <section className="card start-card pop-in">
      <div className="sticker">✨ 亚文化认证 ✨</div>
      <h1 className="title glitchable">你是哪种亚比？</h1>
      <p className="subtitle">YABI Type Indicator</p>
      <p className="lead">
        16道题，测出你的亚比人格底色。准备好进入霓虹人格扫描了吗？🌀
      </p>
      <button className="start-btn glitch-btn" onClick={onStart}>
        START // 开始测试
      </button>
    </section>
  );
}

function QuizScreen({ answers, onAnswer, currentIndex }) {
  const q = questions[currentIndex];
  const progress = Math.round((currentIndex / questions.length) * 100);

  return (
    <section className="card quiz-card fade-scale" key={q.id}>
      <div className="quiz-top">
        <span className="progress-text">
          Question {currentIndex + 1} / {questions.length}
        </span>
        <span className="progress-text">进度 {progress}%</span>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>

      <p className="dimension-tag">亚比场景单选题</p>
      <h2 className="question-text">{q.text}</h2>

      <div className="answers-grid">
        {q.options.map((op, optionIndex) => (
          <button
            key={op.label}
            className={`answer-btn glitch-btn ${
              answers[currentIndex] === optionIndex ? "active" : ""
            }`}
            onClick={() => onAnswer(optionIndex)}
          >
            {op.label}
          </button>
        ))}
      </div>
    </section>
  );
}

function ResultScreen({ resultKey, bestScore, onRetake }) {
  const [isCodeGlitching, setIsCodeGlitching] = useState(true);
  const [shared, setShared] = useState(false);
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setIsCodeGlitching(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const result =
    resultMap[resultKey] ?? {
      name: "未知亚比形态",
      description: "你太特别了，数据库都被你整不会了。",
      tags: ["未定义", "神秘", "版本先行者"],
      emoji: "👾",
      image: "",
      fallbackImage: ""
    };

  useEffect(() => {
    setImageSrc(result.image || result.fallbackImage || "");
  }, [resultKey, result.image, result.fallbackImage]);

  const handleShare = async () => {
    const shareText = `我是亚比BTI的 ${result.name} ${result.emoji}`;
    try {
      await navigator.clipboard.writeText(shareText);
    } catch {
      // clipboard may be blocked; still provide positive feedback.
    }
    setShared(true);
    setTimeout(() => setShared(false), 1500);
  };

  return (
    <section className="card result-card pop-in">
      <p className="result-kicker">人格扫描完成 ⭐</p>
      <div className={`result-code ${isCodeGlitching ? "glitching" : ""}`}>
        {result.name}
      </div>
      {imageSrc && (
        <img
          className="result-image"
          src={imageSrc}
          alt={`${result.name} 人格海报`}
          onError={() => {
            if (result.fallbackImage && imageSrc !== result.fallbackImage) {
              setImageSrc(result.fallbackImage);
            }
          }}
        />
      )}
      <h2 className="nickname">
        {result.emoji} {result.name}
      </h2>
      <p className="description">{result.description}</p>

      <div className="badge-box">
        <h3>Match Badge</h3>
        <div className="traits">
          {result.tags.map((tag) => (
            <span key={tag} className="trait-pill">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="score-mini">命中分：{bestScore} ｜ 人格编号：{resultKey}</div>

      <div className="actions">
        <button className="answer-btn" onClick={onRetake}>
          重新测试
        </button>
        <button className="answer-btn glitch-btn" onClick={handleShare}>
          截图分享
        </button>
      </div>
      {shared && <p className="shared-tip">已复制分享文案，快发朋友圈！📸</p>}
    </section>
  );
}

export default function App() {
  const [stage, setStage] = useState("start");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const { resultKey, bestScore } = computeResult(answers);

  const start = () => {
    setStage("quiz");
    setCurrentIndex(0);
    setAnswers(Array(questions.length).fill(null));
  };

  const handleAnswer = (value) => {
    const nextAnswers = [...answers];
    nextAnswers[currentIndex] = value;
    setAnswers(nextAnswers);

    if (currentIndex < questions.length - 1) {
      setTimeout(() => setCurrentIndex((p) => p + 1), 150);
    } else {
      setTimeout(() => setStage("result"), 200);
    }
  };

  const retake = () => {
    setStage("start");
    setCurrentIndex(0);
    setAnswers(Array(questions.length).fill(null));
  };

  return (
    <main className="app-shell">
      <div className="bg-orb orb-a" />
      <div className="bg-orb orb-b" />
      <div className="bg-orb orb-c" />

      {stage === "start" && <StartScreen onStart={start} />}
      {stage === "quiz" && (
        <QuizScreen
          answers={answers}
          currentIndex={currentIndex}
          onAnswer={handleAnswer}
        />
      )}
      {stage === "result" && (
        <ResultScreen
          resultKey={resultKey}
          bestScore={bestScore}
          onRetake={retake}
        />
      )}
    </main>
  );
}
